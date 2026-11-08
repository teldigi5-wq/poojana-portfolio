type SearchableCommand = { label: string; detail: string; group: string }

const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
const words = (text: string) => normalize(text.replace(/([a-z])([A-Z])/g, "$1 $2")).split(/[^a-z0-9]+/).filter(Boolean)

/** Bounded edit distance, including adjacent transpositions such as "veiw". */
function distance(a: string, b: string, limit: number): number {
  if (Math.abs(a.length - b.length) > limit) return limit + 1
  let previous = Array.from({length: b.length + 1}, (_, i) => i)
  let beforePrevious = previous
  for (let i = 1; i <= a.length; i++) {
    const row = [i]
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(row[j - 1] + 1, previous[j] + 1, previous[j - 1] + Number(a[i - 1] !== b[j - 1]))
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        row[j] = Math.min(row[j], beforePrevious[j - 2] + 1)
      }
    }
    beforePrevious = previous
    previous = row
  }
  return previous[b.length]
}

/** Exact names rank first; short queries stay literal to avoid noisy matches. */
export function searchCommands<T extends SearchableCommand>(commands: readonly T[], query: string): T[] {
  const terms = normalize(query.trim()).split(/\s+/).filter(Boolean)
  if (!terms.length) return [...commands]
  if (query.length > 160) return []
  return commands.map((item, index) => {
    const label = normalize(item.label)
    const detail = normalize(`${item.detail} ${item.group}`)
    const labelWords = words(item.label)
    const detailWords = words(`${item.detail} ${item.group}`)
    let score = 0
    for (const term of terms) {
      if (label === term) continue
      if (label.startsWith(term)) { score += 1; continue }
      if (label.includes(term)) { score += 2; continue }
      if (detail.includes(term)) { score += 3; continue }
      if (term.length < 4) return {item, index, score: Infinity}
      const limit = term.length >= 8 ? 2 : 1
      const labelDistance = Math.min(...labelWords.map(word => distance(term, word, limit)))
      const detailDistance = Math.min(...detailWords.map(word => distance(term, word, limit)))
      if (labelDistance <= limit) score += 5 + labelDistance
      else if (detailDistance <= limit) score += 8 + detailDistance
      else return {item, index, score: Infinity}
    }
    return {item, index, score}
  }).filter(match => Number.isFinite(match.score))
    .sort((a, b) => a.score - b.score || a.index - b.index)
    .map(match => match.item)
}
