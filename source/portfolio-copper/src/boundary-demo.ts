import {evaluatePolicy} from '../lib/boundary-policy'

const root = document.querySelector<HTMLElement>('[data-policy-demo]')
if (root) {
  const identities = [...root.querySelectorAll<HTMLButtonElement>('[data-identity]')]
  const policy = root.querySelector<HTMLSelectElement>('#demo-policy')!
  const resource = root.querySelector<HTMLSelectElement>('#demo-resource')!
  const action = root.querySelector<HTMLSelectElement>('#demo-action')!
  const resultNode = root.querySelector<HTMLElement>('#access-result')!
  const reasonNode = root.querySelector<HTMLElement>('#access-reason')!
  const actorNode = root.querySelector<HTMLElement>('#demo-actor')!
  const pathNode = root.querySelector<HTMLElement>('#demo-path')!
  const traceNode = root.querySelector<HTMLOListElement>('#decision-trace')!
  let identity = 'owner'
  const render = () => {
    const result = evaluatePolicy({identity, policy: policy.value, resource: resource.value, action: action.value})
    identities.forEach(button => {
      const selected = button.dataset.identity === identity
      button.setAttribute('aria-pressed', String(selected))
      button.classList.toggle('is-active', selected)
    })
    resultNode.textContent = result.allowed ? 'ALLOW ✓' : 'DENY ×'
    resultNode.classList.toggle('is-denied', !result.allowed)
    reasonNode.textContent = result.reason
    actorNode.textContent = result.actor
    pathNode.textContent = `${action.value.toUpperCase()} / ${result.path}`
    const steps = result.trace.map(step => {
      const row = document.createElement('li')
      row.dataset.state = step.state
      const label = document.createElement('span')
      label.className = 'trace-check'
      label.textContent = `${step.state === 'pass' ? '✓' : step.state === 'deny' ? '×' : '—'} ${step.check}`
      const detail = document.createElement('span')
      detail.textContent = step.detail
      row.append(label, detail)
      return row
    })
    traceNode.replaceChildren(...steps)
  }
  identities.forEach(button => button.addEventListener('click', () => {
    identity = button.dataset.identity ?? ''
    render()
  }))
  ;[policy, resource, action].forEach(select => select.addEventListener('change', render))
  render()
  root.querySelectorAll<HTMLButtonElement | HTMLSelectElement>('button, select').forEach(control => { control.disabled = false })
  root.querySelector<HTMLElement>('.example-label')!.textContent = 'LIVE LOCAL MODEL'
  root.dataset.ready = 'true'
}
