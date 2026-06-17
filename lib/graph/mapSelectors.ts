import {
  getGreatIdeas,
  getAuthorsForIdea,
  getWorksForIdea,
  getTensionsForIdea,
  getNodeById,
  getEdgesForNode,
} from './utils'
import { graphEdges } from './edges'
import type { GraphEdge, AuthorNode, WorkNode, TensionNode, GraphNode } from './types'

export type SatelliteKind = 'author' | 'work' | 'tension'

export type SatelliteNode =
  | { kind: 'author'; node: AuthorNode }
  | { kind: 'work'; node: WorkNode }
  | { kind: 'tension'; node: TensionNode }

export type SatelliteOptions = {
  showAuthors: boolean
  showWorks: boolean
  showTensions: boolean
}

/** Returns only the edges that connect two great ideas */
export function getMainEdges(): GraphEdge[] {
  const greatIdeaIds = new Set(getGreatIdeas().map((n) => n.id))
  return graphEdges.filter(
    (e) => greatIdeaIds.has(e.source) && greatIdeaIds.has(e.target),
  )
}

/** Returns satellite nodes for a selected great idea, capped per category */
export function getSatelliteNodes(
  ideaId: string,
  opts: SatelliteOptions,
): SatelliteNode[] {
  const result: SatelliteNode[] = []
  if (opts.showAuthors) {
    getAuthorsForIdea(ideaId)
      .slice(0, 6)
      .forEach((n) => result.push({ kind: 'author', node: n }))
  }
  if (opts.showTensions) {
    getTensionsForIdea(ideaId)
      .slice(0, 4)
      .forEach((n) => result.push({ kind: 'tension', node: n }))
  }
  if (opts.showWorks) {
    getWorksForIdea(ideaId)
      .slice(0, 6)
      .forEach((n) => result.push({ kind: 'work', node: n }))
  }
  return result
}

/** Resolve a node by ID (great idea, author, work, tension) */
export function getMapNodeDetails(nodeId: string): GraphNode | undefined {
  return getNodeById(nodeId)
}

/** Returns all graph edges that touch a given node */
export function getEdgesForSelection(nodeId: string): GraphEdge[] {
  return getEdgesForNode(nodeId)
}

/** Label helper: idea ID → display name */
export function getIdeaLabel(ideaId: string): string {
  return getGreatIdeas().find((n) => n.id === ideaId)?.label ?? ideaId
}
