import type { AtlasMode } from './types'

export type AtlasLevel = 'home' | 'idea' | 'topic' | 'subtopic' | 'reference'
export type AtlasGroupId = 'adler' | 'syntopicon' | 'reservoir'

export interface AtlasState {
  selectedIdeaId: string | null     // EN slug, e.g. "Justice"
  selectedMode: AtlasMode
  currentLevel: AtlasLevel
  openGroupId: AtlasGroupId | null  // which system branch is expanded
  selectedTopicId: string | null
  selectedSubtopicId: string | null
  selectedReferenceId: string | null
  searchQuery: string
  inspectorOpen: boolean
  documentaryPath: string[]         // ordered node ids for the active reference path
}

export const INITIAL_STATE: AtlasState = {
  selectedIdeaId: null,
  selectedMode: 'fused',
  currentLevel: 'home',
  openGroupId: null,
  selectedTopicId: null,
  selectedSubtopicId: null,
  selectedReferenceId: null,
  searchQuery: '',
  inspectorOpen: false,
  documentaryPath: [],
}

export type AtlasAction =
  | { type: 'SELECT_IDEA'; ideaId: string }
  | { type: 'DESELECT_IDEA' }
  | { type: 'SET_MODE'; mode: AtlasMode }
  | { type: 'OPEN_GROUP'; groupId: AtlasGroupId | null }
  | { type: 'SELECT_TOPIC'; topicId: string }
  | { type: 'SELECT_SUBTOPIC'; subtopicId: string }
  | { type: 'FOCUS_REFERENCE'; referenceId: string; path: string[] }
  | { type: 'CLOSE_REFERENCE' }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'OPEN_INSPECTOR' }
  | { type: 'CLOSE_INSPECTOR' }
  | { type: 'GO_BACK' }
  | { type: 'RESET' }

export function atlasReducer(state: AtlasState, action: AtlasAction): AtlasState {
  switch (action.type) {
    case 'SELECT_IDEA':
      return {
        ...state,
        selectedIdeaId: action.ideaId,
        currentLevel: 'idea',
        openGroupId: null,
        selectedTopicId: null,
        selectedSubtopicId: null,
        selectedReferenceId: null,
        documentaryPath: [],
        inspectorOpen: true,
      }
    case 'DESELECT_IDEA':
      return { ...INITIAL_STATE, selectedMode: state.selectedMode }
    case 'SET_MODE':
      return { ...state, selectedMode: action.mode }
    case 'OPEN_GROUP':
      return {
        ...state,
        openGroupId: action.groupId === state.openGroupId ? null : action.groupId,
        selectedTopicId: null,
        selectedSubtopicId: null,
        selectedReferenceId: null,
        documentaryPath: [],
      }
    case 'SELECT_TOPIC':
      return {
        ...state,
        selectedTopicId: action.topicId,
        selectedSubtopicId: null,
        selectedReferenceId: null,
        documentaryPath: [],
        currentLevel: 'topic',
        openGroupId: 'syntopicon',
        inspectorOpen: true,
      }
    case 'SELECT_SUBTOPIC':
      return {
        ...state,
        selectedSubtopicId: action.subtopicId,
        selectedReferenceId: null,
        documentaryPath: [],
        currentLevel: 'subtopic',
        inspectorOpen: true,
      }
    case 'FOCUS_REFERENCE':
      return {
        ...state,
        selectedReferenceId: action.referenceId,
        documentaryPath: action.path,
        currentLevel: 'reference',
        inspectorOpen: true,
      }
    case 'CLOSE_REFERENCE':
      return {
        ...state,
        selectedReferenceId: null,
        documentaryPath: [],
        currentLevel: state.selectedSubtopicId
          ? 'subtopic'
          : state.selectedTopicId
          ? 'topic'
          : 'idea',
      }
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.query }
    case 'OPEN_INSPECTOR':
      return { ...state, inspectorOpen: true }
    case 'CLOSE_INSPECTOR':
      return { ...state, inspectorOpen: false }
    case 'GO_BACK': {
      if (state.currentLevel === 'reference') {
        return {
          ...state,
          selectedReferenceId: null,
          documentaryPath: [],
          currentLevel: state.selectedSubtopicId ? 'subtopic' : 'topic',
        }
      }
      if (state.currentLevel === 'subtopic') {
        return { ...state, selectedSubtopicId: null, currentLevel: 'topic' }
      }
      if (state.currentLevel === 'topic') {
        return { ...state, selectedTopicId: null, openGroupId: null, currentLevel: 'idea' }
      }
      if (state.currentLevel === 'idea') {
        return { ...INITIAL_STATE, selectedMode: state.selectedMode }
      }
      return state
    }
    case 'RESET':
      return { ...INITIAL_STATE, selectedMode: state.selectedMode }
    default:
      return state
  }
}
