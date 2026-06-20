import type {
  AtlasNode, AtlasEdge, AtlasMode, AtlasSphere,
  AtlasSearchItem, AtlasOverviewIdea,
} from './types'
import { MODE_NODE_TYPES, NODE_TYPE_COLORS } from './types'

export interface NodePosition {
  x: number
  y: number
  opacity: number
  scale: number
  color: string
}

// Filter nodes based on current mode
export function filterByMode(nodes: AtlasNode[], mode: AtlasMode): AtlasNode[] {
  const allowed = MODE_NODE_TYPES[mode]
  if (!allowed) return nodes
  return nodes.filter(n => allowed.has(n.type as never))
}

// Filter nodes by sphere
export function filterBySphere(nodes: AtlasNode[], sphere: AtlasSphere): AtlasNode[] {
  if (sphere === 'all') return nodes
  const sphereValue = sphere === 'judgment' ? 'judgment' : 'action'
  return nodes.filter(n => !n.sphere || n.sphere === sphereValue || n.sphere === 'all')
}

// Build adjacency map from edges
export function buildAdjacency(edges: AtlasEdge[]): Map<string, string[]> {
  const adj = new Map<string, string[]>()
  edges.forEach(e => {
    if (!adj.has(e.source)) adj.set(e.source, [])
    if (!adj.has(e.target)) adj.set(e.target, [])
    adj.get(e.source)!.push(e.target)
    adj.get(e.target)!.push(e.source)
  })
  return adj
}

// Compute positions for the overview (6 idea nodes, 2 columns)
export function computeOverviewLayout(
  ideas: AtlasOverviewIdea[],
  W: number,
  H: number
): Record<string, NodePosition> {
  const result: Record<string, NodePosition> = {}
  const judgmentIdeas = ideas.filter(i => i.sphere === 'judgment')
  const actionIdeas = ideas.filter(i => i.sphere === 'action')

  const colLeft = W * 0.28
  const colRight = W * 0.72
  const padding = H * 0.15

  const positionGroup = (group: AtlasOverviewIdea[], x: number) => {
    const count = group.length
    group.forEach((idea, i) => {
      const y = count === 1
        ? H / 2
        : padding + (i / (count - 1)) * (H - padding * 2)
      result[idea.id] = {
        x, y,
        opacity: 1,
        scale: 1,
        color: NODE_TYPE_COLORS.idea,
      }
    })
  }

  positionGroup(judgmentIdeas, colLeft)
  positionGroup(actionIdeas, colRight)
  return result
}

// Compute positions when an idea is selected: aspects radiate around center
export function computeAspectLayout(
  centerX: number,
  centerY: number,
  aspects: AtlasNode[],
  W: number,
  H: number
): Record<string, NodePosition> {
  const result: Record<string, NodePosition> = {}
  const R = Math.min(W, H) * 0.28
  const count = aspects.length

  aspects.forEach((node, i) => {
    const angle = ((i / count) * 2 * Math.PI) - Math.PI / 2
    result[node.id] = {
      x: centerX + R * Math.cos(angle),
      y: centerY + R * Math.sin(angle),
      opacity: 1,
      scale: 1,
      color: NODE_TYPE_COLORS[node.type] ?? NODE_TYPE_COLORS.idea,
    }
  })
  return result
}

// Compute positions for topic children (inner ring of selected aspect)
export function computeTopicLayout(
  centerX: number,
  centerY: number,
  topics: AtlasNode[],
  W: number,
  H: number
): Record<string, NodePosition> {
  const result: Record<string, NodePosition> = {}
  const R = Math.min(W, H) * 0.18
  const count = topics.length

  topics.forEach((node, i) => {
    const angle = ((i / Math.max(count, 1)) * 2 * Math.PI) - Math.PI / 2
    result[node.id] = {
      x: centerX + R * Math.cos(angle),
      y: centerY + R * Math.sin(angle),
      opacity: 1,
      scale: 0.85,
      color: NODE_TYPE_COLORS[node.type] ?? NODE_TYPE_COLORS.syntopicon_topic,
    }
  })
  return result
}

// Search: case-insensitive match against title, author, work, raw, summary
export function searchIndex(
  items: AtlasSearchItem[],
  query: string,
  maxResults = 20
): AtlasSearchItem[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  const scored = items
    .map(item => {
      let score = 0
      const title = (item.title ?? '').toLowerCase()
      const author = (item.author ?? '').toLowerCase()
      const work = (item.work ?? '').toLowerCase()
      const raw = (item.raw ?? '').toLowerCase()
      const summary = (item.summary ?? '').toLowerCase()

      if (title.startsWith(q)) score += 10
      else if (title.includes(q)) score += 6
      if (author.includes(q)) score += 4
      if (work.includes(q)) score += 3
      if (raw.includes(q)) score += 2
      if (summary.includes(q)) score += 1

      return { item, score }
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, maxResults).map(x => x.item)
}

// Get display title for a node
export function getNodeTitle(node: AtlasNode): string {
  return node.title ?? node.label ?? node.id
}
