export type ExpandedPath = {
  ideaId: string | null
  topicId: string | null
  tensionId: string | null
  authorId: string | null
  workId: string | null
}

export const EMPTY_PATH: ExpandedPath = {
  ideaId: null,
  topicId: null,
  tensionId: null,
  authorId: null,
  workId: null,
}
