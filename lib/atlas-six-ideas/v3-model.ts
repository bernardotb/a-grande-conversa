import type { AtlasNode } from './types'

export type AtlasV3View = 'home' | 'idea' | 'synthesis' | 'topic' | 'relations'
export type SynthesisGroup = 'aspects' | 'chapters' | 'questions' | 'tensions'

export interface AtlasV3State {
  view: AtlasV3View
  selectedIdeaId: string | null
  selectedGroup: SynthesisGroup | null
  selectedTopicId: string | null
  selectedSubtopicId: string | null
  selectedNodeId: string | null
  selectedBranch: 'synthesis' | 'syntopicon' | null
  inspectorOpen: boolean
}

export const ATLAS_V3_INITIAL_STATE: AtlasV3State = {
  view: 'home',
  selectedIdeaId: null,
  selectedGroup: null,
  selectedTopicId: null,
  selectedSubtopicId: null,
  selectedNodeId: null,
  selectedBranch: null,
  inspectorOpen: false,
}

export type AtlasV3Action =
  | { type: 'SELECT_IDEA'; ideaId: string }
  | { type: 'OPEN_BRANCH'; branch: 'synthesis' | 'syntopicon' }
  | { type: 'OPEN_SYNTHESIS_GROUP'; group: SynthesisGroup }
  | { type: 'SELECT_TOPIC'; topicId: string }
  | { type: 'SELECT_SUBTOPIC'; subtopicId: string }
  | { type: 'EXPLORE_RELATIONS' }
  | { type: 'SELECT_NODE'; nodeId: string }
  | { type: 'OPEN_INSPECTOR' }
  | { type: 'CLOSE_INSPECTOR' }
  | { type: 'GO_BACK' }
  | { type: 'RESET' }

export function atlasV3Reducer(state: AtlasV3State, action: AtlasV3Action): AtlasV3State {
  switch (action.type) {
    case 'SELECT_IDEA':
      return {
        ...ATLAS_V3_INITIAL_STATE,
        view: 'idea',
        selectedIdeaId: action.ideaId,
        selectedNodeId: `idea-${action.ideaId.toLowerCase()}`,
        inspectorOpen: true,
      }
    case 'OPEN_BRANCH':
      return {
        ...state,
        view: 'idea',
        selectedBranch: action.branch,
        selectedGroup: null,
        selectedTopicId: null,
        selectedSubtopicId: null,
        selectedNodeId: `virtual-${action.branch}`,
        inspectorOpen: true,
      }
    case 'OPEN_SYNTHESIS_GROUP':
      return {
        ...state,
        view: 'synthesis',
        selectedBranch: 'synthesis',
        selectedGroup: action.group,
        selectedTopicId: null,
        selectedSubtopicId: null,
        selectedNodeId: `virtual-${action.group}`,
        inspectorOpen: true,
      }
    case 'SELECT_TOPIC':
      return {
        ...state,
        view: 'topic',
        selectedBranch: 'syntopicon',
        selectedTopicId: action.topicId,
        selectedSubtopicId: null,
        selectedNodeId: action.topicId,
        inspectorOpen: true,
      }
    case 'SELECT_SUBTOPIC':
      return {
        ...state,
        selectedSubtopicId: action.subtopicId,
        selectedNodeId: action.subtopicId,
        inspectorOpen: true,
      }
    case 'EXPLORE_RELATIONS':
      return state.selectedTopicId
        ? { ...state, view: 'relations', selectedNodeId: state.selectedSubtopicId ?? state.selectedTopicId, inspectorOpen: true }
        : state
    case 'SELECT_NODE':
      return { ...state, selectedNodeId: action.nodeId, inspectorOpen: true }
    case 'OPEN_INSPECTOR':
      return { ...state, inspectorOpen: true }
    case 'CLOSE_INSPECTOR':
      return { ...state, inspectorOpen: false }
    case 'GO_BACK':
      if (state.view === 'relations') return { ...state, view: 'topic', selectedNodeId: state.selectedSubtopicId ?? state.selectedTopicId }
      if (state.view === 'topic') return { ...state, view: 'idea', selectedTopicId: null, selectedSubtopicId: null, selectedNodeId: 'virtual-syntopicon', selectedBranch: 'syntopicon' }
      if (state.view === 'synthesis') return { ...state, view: 'idea', selectedGroup: null, selectedNodeId: 'virtual-synthesis', selectedBranch: 'synthesis' }
      if (state.view === 'idea') return ATLAS_V3_INITIAL_STATE
      return state
    case 'RESET':
      return ATLAS_V3_INITIAL_STATE
    default:
      return state
  }
}

export type V3NodeKind =
  | 'idea' | 'source' | 'group' | 'aspect' | 'chapter' | 'question'
  | 'tension' | 'topic' | 'subtopic' | 'relation'

export interface AtlasV3GraphNode {
  id: string
  title: string
  subtitle?: string
  description?: string
  kind: V3NodeKind
  x: number
  y: number
  color: string
  sphere?: 'judgment' | 'action'
  count?: number
  sourceNode?: AtlasNode
  action?: AtlasV3Action
}

export interface AtlasV3GraphEdge {
  id: string
  source: string
  target: string
  kind: 'direct' | 'cross' | 'inferred'
  highlighted?: boolean
}

export interface AtlasV3Layout {
  nodes: AtlasV3GraphNode[]
  edges: AtlasV3GraphEdge[]
  title: string
  breadcrumb: string[]
}

