/** An educational local model, not BoundaryLab's emulator or a security boundary.
 * All identities and resources are synthetic. No network or browser state is read.
 */
export type TraceStep = {check: string; state: 'pass' | 'deny' | 'skipped'; detail: string}
export type Decision = {allowed: boolean; reason: string; actor: string; path: string; trace: TraceStep[]}

const identities = {
  owner: {id: 'alice', tenant: 'studio', authenticated: true},
  teammate: {id: 'bob', tenant: 'studio', authenticated: true},
  outsider: {id: 'mallory', tenant: 'elsewhere', authenticated: true},
  guest: {id: 'anonymous', tenant: null, authenticated: false},
} as const
const resources = {
  private: {owner: 'alice', tenant: 'studio', shared: false, path: 'studio/alice/private'},
  shared: {owner: 'alice', tenant: 'studio', shared: true, path: 'studio/alice/shared'},
} as const
const has = (object: object, key: unknown): key is string => typeof key === 'string' && Object.hasOwn(object, key)

export function evaluatePolicy(input: unknown): Decision {
  const invalid: Decision = {allowed: false, actor: 'unknown', path: 'unknown', reason: 'Unknown request. Access is denied by default.',
    trace: [{check: 'Request', state: 'deny', detail: 'Choose a known identity, resource, operation and policy.'}]}
  if (!input || typeof input !== 'object' || Array.isArray(input)) return invalid
  const request = input as Record<string, unknown>
  if (!has(identities, request.identity) || !has(resources, request.resource) ||
      (request.action !== 'read' && request.action !== 'write') ||
      (request.policy !== 'ownership' && request.policy !== 'team-read')) return invalid
  const identity = identities[request.identity as keyof typeof identities]
  const resource = resources[request.resource as keyof typeof resources]
  const trace: TraceStep[] = []
  const result = (allowed: boolean, reason: string): Decision => ({allowed, reason, actor: identity.id, path: resource.path, trace})
  const skip = (check: string) => trace.push({check, state: 'skipped', detail: 'Not evaluated after an earlier denial.'})
  if (!identity.authenticated) {
    trace.push({check: 'Sign-in', state: 'deny', detail: 'The guest has no signed-in identity in this example.'})
    skip('Workspace'); skip('Permission')
    return result(false, 'Sign in before accessing either resource.')
  }
  trace.push({check: 'Sign-in', state: 'pass', detail: `${identity.id} is signed in in this example.`})
  if (identity.tenant !== resource.tenant) {
    trace.push({check: 'Workspace', state: 'deny', detail: `${identity.tenant} does not match the resource workspace, ${resource.tenant}.`})
    skip('Permission')
    return result(false, 'Signing in does not grant access to another workspace.')
  }
  trace.push({check: 'Workspace', state: 'pass', detail: `Identity and resource both belong to ${resource.tenant}.`})
  const ownsResource = identity.id === resource.owner
  const teamRead = request.policy === 'team-read' && resource.shared && request.action === 'read'
  const allowed = ownsResource || teamRead
  let reason: string
  if (ownsResource) reason = `Alice owns this resource and may ${request.action} it.`
  else if (teamRead) reason = 'A teammate may read a shared resource under this policy.'
  else if (request.policy === 'ownership') reason = 'The ownership policy allows only Alice to access her resource.'
  else if (!resource.shared) reason = 'This resource is private. Team reading does not grant access.'
  else reason = 'Team reading grants read access only. Writing still requires ownership.'
  trace.push({check: 'Permission', state: allowed ? 'pass' : 'deny', detail: reason})
  return result(allowed, reason)
}
