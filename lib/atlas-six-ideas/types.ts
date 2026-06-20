export type AtlasMode = 'adler' | 'syntopicon' | 'fused'
export type AtlasSphere = 'all' | 'judgment' | 'action'

export type AtlasNodeType =
  | 'system'
  | 'sphere'
  | 'idea'
  | 'syntopicon_idea'
  | 'adler_aspect'
  | 'tension'
  | 'question'
  | 'source'
  | 'syntopicon_topic'
  | 'syntopicon_subtopic'
  | 'cross_reference'
  | 'reference'
  | 'author'
  | 'work'
  | 'volume'
  | 'passage'

export interface AtlasNode {
  id: string
  type: AtlasNodeType
  title?: string
  label?: string
  idea?: string
  sphere?: string
  layer?: number
  mode?: string
  summary?: string
  evidence_status?: string
  passage_status?: string
  // Adler-specific
  adler_status?: string
  // Reference-specific
  reference_original_raw?: string
  coordinate_original?: string
  author?: string
  author_id?: string
  work?: string
  work_id?: string
  gbw_volume?: string
  volume_id?: string
  topic_id?: string
  source?: string
  source_location?: string
  // Idea-level
  central_question?: string
  definition?: string
  adler_chapters?: string[]
  sphere_field?: string
  mapping_note?: string
  question?: string
}

export interface AtlasEdge {
  source: string
  target: string
  type: string
}

export interface AtlasAspect {
  id: string
  title: string
  summary: string | null
}

export interface AtlasIdeaCounts {
  adler_aspects: number
  syntopicon_topics: number
  references: number
  tensions: number
}

export interface AtlasOverviewIdea {
  id: string
  idea_en: string
  idea_pt: string
  title_pt: string
  sphere: string
  central_question: string | null
  definition: string | null
  adler_chapters: string[]
  adler_status: string
  syntopicon_status: string
  mapping_note: string | null
  aspects: AtlasAspect[]
  counts: AtlasIdeaCounts
}

export interface AtlasGlobalCounts {
  nodes: number
  edges: number
  references: number
  topics: number
  authors: number
  works: number
  volumes: number
  passages: number
}

export interface AtlasOverview {
  ideas: AtlasOverviewIdea[]
  global_counts: AtlasGlobalCounts
  sources: AtlasNode[]
}

export interface AtlasIdeaData {
  idea_en: string
  idea_pt: string
  sphere: string
  meta: AtlasOverviewIdea | null
  counts: {
    total_nodes: number
    adler_aspects: number
    syntopicon_topics: number
    syntopicon_subtopics: number
    references: number
    authors: number
    works: number
    volumes: number
    tensions: number
  }
  nodes: AtlasNode[]
  edges: AtlasEdge[]
}

export interface AtlasSearchItem {
  id: string
  title: string
  type: AtlasNodeType
  idea: string | null
  sphere: string | null
  summary: string | null
  raw: string | null
  author: string | null
  work: string | null
}

// EN slug → PT slug mapping
export const IDEA_EN_TO_PT: Record<string, string> = {
  Truth: 'verdade',
  Goodness: 'bondade',
  Beauty: 'beleza',
  Liberty: 'liberdade',
  Equality: 'igualdade',
  Justice: 'justica',
}

export const IDEA_PT_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(IDEA_EN_TO_PT).map(([k, v]) => [v, k])
)

export const IDEA_PT_TITLE: Record<string, string> = {
  verdade: 'Verdade',
  bondade: 'Bondade',
  beleza: 'Beleza',
  liberdade: 'Liberdade',
  igualdade: 'Igualdade',
  justica: 'Justiça',
}

// Node types visible in each mode
export const MODE_NODE_TYPES: Record<AtlasMode, Set<AtlasNodeType> | null> = {
  adler: new Set(['idea', 'adler_aspect', 'tension', 'question', 'source']),
  syntopicon: new Set([
    'idea', 'syntopicon_idea', 'syntopicon_topic', 'syntopicon_subtopic',
    'cross_reference', 'reference', 'author', 'work', 'volume',
  ]),
  fused: null, // null = show all
}

// Visual colors by node type
export const NODE_TYPE_COLORS: Record<string, string> = {
  idea: '#d0a556',
  adler_aspect: '#c99a43',
  syntopicon_idea: '#8a8cc8',
  syntopicon_topic: '#7779b8',
  syntopicon_subtopic: '#6668a2',
  reference: '#b55f38',
  author: '#a96842',
  work: '#bd7246',
  volume: '#8f5538',
  tension: '#997150',
  question: '#b99c62',
  cross_reference: '#b48f36',
  source: '#7b887f',
  system: '#d7c8a8',
  sphere: '#9b8cc6',
}

// Human-readable labels for node types (pt-BR)
export const NODE_TYPE_LABELS: Record<string, string> = {
  idea: 'Ideia',
  adler_aspect: 'Aspecto em Adler',
  syntopicon_idea: 'Entrada do Syntopicon',
  syntopicon_topic: 'Tópico',
  syntopicon_subtopic: 'Subtópico',
  reference: 'Referência documental',
  author: 'Autor',
  work: 'Obra',
  volume: 'Volume',
  tension: 'Tensão',
  question: 'Pergunta central',
  cross_reference: 'Remissão cruzada',
  source: 'Fonte',
  system: 'Sistema',
  sphere: 'Esfera',
}

export const IDEA_ROUTE_MAP: Record<string, string> = {
  Truth: '/ideias/verdade',
  Goodness: '/ideias/bem',
  Beauty: '/ideias/beleza',
  Liberty: '/ideias/liberdade',
  Equality: '/ideias/igualdade',
  Justice: '/ideias/justica',
}
