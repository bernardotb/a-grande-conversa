// Data for the new home page constellation and questions sections.
// Imports and extends sixIdeas — does not duplicate data.

import { sixIdeas, type SixIdea } from '@/lib/seis-grandes-ideias'

// Internal role (used only for visual logic, never displayed as a label)
export type IdeaRole = 'soberana' | 'relacionada'

export interface HomeIdea extends SixIdea {
  role: IdeaRole
  color: string
  // Short question for the home (different from the deeper humanQuestion)
  homeQuestion: string
}

export interface HomeEdge {
  from: string // slug
  to: string   // slug
  kind: 'internal' | 'cross' // internal = within same axis, cross = between axes
}

const COLORS: Record<string, string> = {
  verdade:   '#7c5cd4',
  beleza:    '#9260c4',
  bem:       '#6248b8',
  liberdade: '#2d8a58',
  igualdade: '#247b4e',
  justica:   '#1a6a42',
}

const HOME_QUESTIONS: Record<string, string> = {
  verdade:   'Como saber se algo é verdadeiro?',
  beleza:    'A beleza está nas coisas ou em quem contempla?',
  bem:       'O que realmente merece ser desejado?',
  liberdade: 'Sou livre quando faço o que quero?',
  igualdade: 'Em que sentido todos os seres humanos são iguais?',
  justica:   'O que devemos uns aos outros?',
}

// Soberana = anchors their axis visually (larger node, stronger presence)
const ROLES: Record<string, IdeaRole> = {
  verdade:   'soberana',
  beleza:    'relacionada',
  bem:       'relacionada',
  liberdade: 'relacionada',
  igualdade: 'relacionada',
  justica:   'soberana',
}

export const homeIdeas: HomeIdea[] = sixIdeas.map(idea => ({
  ...idea,
  role: ROLES[idea.slug] ?? 'relacionada',
  color: COLORS[idea.slug] ?? '#b9954f',
  homeQuestion: HOME_QUESTIONS[idea.slug] ?? idea.humanQuestion,
}))

export const julgarHomeIdeas = homeIdeas.filter(i => i.axis === 'julgar')
export const agirHomeIdeas   = homeIdeas.filter(i => i.axis === 'agir')

// All edges to draw in the constellation
export const homeEdges: HomeEdge[] = [
  // JULGAR triangle (internal)
  { from: 'verdade',   to: 'beleza',    kind: 'internal' },
  { from: 'verdade',   to: 'bem',       kind: 'internal' },
  { from: 'beleza',    to: 'bem',       kind: 'internal' },
  // AGIR triangle (internal)
  { from: 'justica',   to: 'liberdade', kind: 'internal' },
  { from: 'justica',   to: 'igualdade', kind: 'internal' },
  { from: 'liberdade', to: 'igualdade', kind: 'internal' },
  // Obligatory cross-axis connections
  { from: 'verdade',   to: 'justica',   kind: 'cross' },
  { from: 'bem',       to: 'justica',   kind: 'cross' },
]

// Node positions in the SVG viewBox "0 0 560 540"
export interface NodePosition {
  slug: string
  cx: number
  cy: number
}

export const nodePositions: NodePosition[] = [
  // JULGAR triangle
  { slug: 'verdade',   cx: 280, cy: 90  },
  { slug: 'beleza',    cx: 100, cy: 230 },
  { slug: 'bem',       cx: 460, cy: 230 },
  // AGIR triangle
  { slug: 'liberdade', cx: 100, cy: 370 },
  { slug: 'igualdade', cx: 460, cy: 370 },
  { slug: 'justica',   cx: 280, cy: 480 },
]

export function getNodePos(slug: string): NodePosition | undefined {
  return nodePositions.find(p => p.slug === slug)
}

// Returns slugs of ideas connected to a given idea
export function getConnectedSlugs(slug: string): string[] {
  return homeEdges
    .filter(e => e.from === slug || e.to === slug)
    .map(e => e.from === slug ? e.to : e.from)
}
