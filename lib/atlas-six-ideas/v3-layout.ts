import type { AtlasIdeaData, AtlasOverview, AtlasOverviewIdea, AtlasNode } from './types'
import type { AtlasV3GraphEdge, AtlasV3GraphNode, AtlasV3Layout, AtlasV3State, SynthesisGroup } from './v3-model'
import { getSynthesisCounts, getV3NodeTitle, JUSTICE_CHAPTERS, JUSTICE_QUESTIONS, RELATION_CONTEXT_BY_TOPIC, SYNTHESIS_GROUP_META, V3_COLORS } from './v3-content'

const edge = (source: string, target: string, kind: AtlasV3GraphEdge['kind'] = 'direct', highlighted = false): AtlasV3GraphEdge => ({
  id: `${source}--${target}`,
  source,
  target,
  kind,
  highlighted,
})

function ideaNode(meta: AtlasOverviewIdea, x: number, y: number): AtlasV3GraphNode {
  return {
    id: meta.id,
    title: meta.title_pt,
    subtitle: meta.sphere === 'judgment' ? 'Ideia de julgamento' : 'Ideia de ação',
    description: meta.definition ?? meta.central_question ?? undefined,
    kind: 'idea',
    x, y,
    color: meta.sphere === 'judgment' ? V3_COLORS.judgment : V3_COLORS.action,
    sphere: meta.sphere as 'judgment' | 'action',
    action: { type: 'SELECT_IDEA', ideaId: meta.idea_en },
  }
}

function homeLayout(overview: AtlasOverview | null, mobile: boolean): AtlasV3Layout {
  const ideas = overview?.ideas ?? []
  const nodes = ideas.map((idea, index) => {
    if (mobile) {
      const col = index % 2
      const row = Math.floor(index / 2)
      return ideaNode(idea, 0.31 + col * 0.38, 0.24 + row * 0.25)
    }
    return ideaNode(idea, 0.12 + index * 0.152, 0.48)
  })
  const edges: AtlasV3GraphEdge[] = []
  for (let i = 0; i < nodes.length - 1; i += 1) edges.push(edge(nodes[i].id, nodes[i + 1].id, 'inferred'))
  const byEn = new Map(ideas.map(i => [i.idea_en, i.id]))
  const crossPairs = [['Truth', 'Justice'], ['Goodness', 'Justice'], ['Liberty', 'Justice'], ['Equality', 'Justice']]
  crossPairs.forEach(([a, b]) => {
    const source = byEn.get(a)
    const target = byEn.get(b)
    if (source && target) edges.push(edge(source, target, 'cross'))
  })
  return { nodes, edges, title: 'Atlas das Seis Ideias', breadcrumb: ['Atlas das Seis Ideias'] }
}

function sourceNodes(meta: AtlasOverviewIdea): AtlasV3GraphNode[] {
  return [
    {
      id: 'virtual-synthesis', title: 'Síntese das Seis Ideias', subtitle: 'Arquitetura conceitual', kind: 'source',
      x: 0.27, y: 0.34, color: V3_COLORS.synthesis, action: { type: 'OPEN_BRANCH', branch: 'synthesis' },
    },
    {
      id: 'virtual-syntopicon', title: `Syntopicon — ${meta.idea_en === 'Justice' ? 'Chapter 42' : meta.title_pt}`,
      subtitle: 'Cartografia sintópica', kind: 'source', x: 0.73, y: 0.34, color: V3_COLORS.syntopicon,
      action: { type: 'OPEN_BRANCH', branch: 'syntopicon' },
    },
  ]
}

function ideaLayout(meta: AtlasOverviewIdea, data: AtlasIdeaData | null, mobile: boolean, branch: AtlasV3State['selectedBranch']): AtlasV3Layout {
  const root = ideaNode(meta, 0.5, mobile ? 0.15 : 0.13)
  const sources = sourceNodes(meta)
  const nodes: AtlasV3GraphNode[] = [root, ...sources]
  const edges = [edge(root.id, 'virtual-synthesis'), edge(root.id, 'virtual-syntopicon')]
  const rawNodes = data?.nodes ?? []
  const counts = getSynthesisCounts(meta, rawNodes)

  const showSynthesis = !mobile || branch === 'synthesis'
  const showTopics = !mobile || branch === 'syntopicon'

  if (showSynthesis) {
    const groups: SynthesisGroup[] = ['aspects', 'chapters', 'questions', 'tensions']
    groups.forEach((group, i) => {
      const groupNode: AtlasV3GraphNode = {
        id: `virtual-${group}`,
        title: `${counts[group]} ${SYNTHESIS_GROUP_META[group].short}`,
        subtitle: SYNTHESIS_GROUP_META[group].title,
        kind: 'group',
        x: mobile ? 0.18 + (i % 2) * 0.64 : 0.08 + i * 0.125,
        y: mobile ? 0.56 + Math.floor(i / 2) * 0.23 : 0.69,
        color: V3_COLORS.synthesis,
        count: counts[group],
        action: { type: 'OPEN_SYNTHESIS_GROUP', group },
      }
      nodes.push(groupNode)
      edges.push(edge('virtual-synthesis', groupNode.id))
    })
  }

  if (showTopics) {
    const topics = rawNodes.filter(n => n.type === 'syntopicon_topic').slice(0, 11)
    topics.forEach((topic, i) => {
      const row = Math.floor(i / 4)
      const col = i % 4
      const count = row < 2 ? 4 : 3
      const topicNode: AtlasV3GraphNode = {
        id: topic.id,
        title: getV3NodeTitle(topic, meta.idea_en),
        subtitle: `Tópico ${topic.original_number ?? i + 1}`,
        description: topic.summary ?? undefined,
        kind: 'topic',
        x: mobile ? 0.17 + (i % 2) * 0.66 : 0.55 + (col / Math.max(count - 1, 1)) * 0.39,
        y: mobile ? 0.52 + Math.floor(i / 2) * 0.13 : 0.54 + row * 0.19,
        color: V3_COLORS.syntopicon,
        sourceNode: topic,
        action: { type: 'SELECT_TOPIC', topicId: topic.id },
      }
      nodes.push(topicNode)
      edges.push(edge('virtual-syntopicon', topic.id))
    })
  }

  return {
    nodes: nodes.slice(0, mobile ? 15 : 25),
    edges: edges.filter(e => nodes.some(n => n.id === e.target)),
    title: meta.title_pt,
    breadcrumb: ['Atlas das Seis Ideias', meta.title_pt],
  }
}

function synthesisChildren(group: SynthesisGroup, meta: AtlasOverviewIdea, data: AtlasIdeaData | null): AtlasV3GraphNode[] {
  const raw = data?.nodes ?? []
  if (group === 'aspects') {
    return raw.filter(n => n.type === 'adler_aspect').slice(0, 10).map((node, i) => ({
      id: node.id, title: getV3NodeTitle(node, meta.idea_en), subtitle: 'Aspecto conceitual', description: node.summary ?? undefined,
      kind: 'aspect', x: 0, y: 0, color: V3_COLORS.synthesis, sourceNode: node, action: { type: 'SELECT_NODE', nodeId: node.id },
    }))
  }
  if (group === 'chapters') {
    const chapters = meta.idea_en === 'Justice' ? JUSTICE_CHAPTERS : meta.adler_chapters
    return chapters.slice(0, 8).map((chapter, i) => ({
      id: `chapter-${i + 1}`, title: chapter, subtitle: 'Six Great Ideas', kind: 'chapter', x: 0, y: 0,
      color: V3_COLORS.synthesis, action: { type: 'SELECT_NODE', nodeId: `chapter-${i + 1}` },
    }))
  }
  if (group === 'questions') {
    if (meta.idea_en === 'Justice') {
      return JUSTICE_QUESTIONS.map((question, i) => ({
        id: `justice-question-${i + 1}`, title: question, subtitle: i === 0 ? 'Pergunta central' : 'Pergunta',
        kind: 'question' as const, x: 0, y: 0, color: V3_COLORS.synthesis,
        action: { type: 'SELECT_NODE' as const, nodeId: `justice-question-${i + 1}` },
      }))
    }
    const questions = raw.filter(n => n.type === 'question')
    const base = questions.length > 0 ? questions : [{ id: 'central-question', title: meta.central_question ?? 'Pergunta central' } as AtlasNode]
    return base.slice(0, 8).map(node => ({
      id: node.id, title: node.title ?? node.question ?? 'Pergunta central', subtitle: 'Pergunta', kind: 'question', x: 0, y: 0,
      color: V3_COLORS.synthesis, sourceNode: node, action: { type: 'SELECT_NODE', nodeId: node.id },
    }))
  }
  return raw.filter(n => n.type === 'tension').slice(0, 8).map(node => ({
    id: node.id, title: node.title ?? node.summary ?? 'Tensão filosófica', subtitle: 'Tensão', description: node.summary ?? undefined,
    kind: 'tension', x: 0, y: 0, color: V3_COLORS.synthesis, sourceNode: node, action: { type: 'SELECT_NODE', nodeId: node.id },
  }))
}

function synthesisLayout(meta: AtlasOverviewIdea, data: AtlasIdeaData | null, group: SynthesisGroup, mobile: boolean): AtlasV3Layout {
  const root = ideaNode(meta, 0.5, 0.1)
  const source: AtlasV3GraphNode = { ...sourceNodes(meta)[0], x: 0.5, y: 0.27 }
  const groupNode: AtlasV3GraphNode = {
    id: `virtual-${group}`, title: SYNTHESIS_GROUP_META[group].title, subtitle: 'Síntese das Seis Ideias', kind: 'group',
    x: 0.5, y: 0.43, color: V3_COLORS.synthesis, action: { type: 'OPEN_SYNTHESIS_GROUP', group },
  }
  const children = synthesisChildren(group, meta, data)
  children.forEach((node, i) => {
    const count = children.length
    const cols = mobile ? 2 : Math.min(count, 4)
    const rows = Math.ceil(count / cols)
    const row = Math.floor(i / cols)
    const col = i % cols
    node.x = cols === 1 ? 0.5 : 0.18 + (col / (cols - 1)) * 0.64
    node.y = 0.63 + (rows === 1 ? 0 : (row / Math.max(rows - 1, 1)) * 0.25)
  })
  const nodes = [root, source, groupNode, ...children].slice(0, mobile ? 15 : 25)
  return {
    nodes,
    edges: [edge(root.id, source.id), edge(source.id, groupNode.id), ...children.map(n => edge(groupNode.id, n.id))],
    title: SYNTHESIS_GROUP_META[group].title,
    breadcrumb: ['Atlas das Seis Ideias', meta.title_pt, 'Síntese das Seis Ideias', SYNTHESIS_GROUP_META[group].title],
  }
}

function topicLayout(meta: AtlasOverviewIdea, data: AtlasIdeaData, topicId: string, mobile: boolean): AtlasV3Layout {
  const topic = data.nodes.find(n => n.id === topicId)
  const root = ideaNode(meta, 0.14, 0.15)
  const source: AtlasV3GraphNode = { ...sourceNodes(meta)[1], x: 0.34, y: 0.15 }
  const topicNode: AtlasV3GraphNode = {
    id: topicId, title: topic ? getV3NodeTitle(topic, meta.idea_en) : 'Tópico', subtitle: `Tópico ${topic?.original_number ?? ''}`,
    description: topic?.summary ?? undefined, kind: 'topic', x: 0.55, y: 0.28, color: V3_COLORS.syntopicon,
    sourceNode: topic, action: { type: 'SELECT_NODE', nodeId: topicId },
  }
  const children = data.nodes.filter(n => n.type === 'syntopicon_subtopic' && n.parent_topic_id === topicId).slice(0, mobile ? 10 : 12)
  const childNodes = children.map((node, i): AtlasV3GraphNode => {
    const count = children.length
    const angle = Math.PI * (0.08 + (i / Math.max(count - 1, 1)) * 0.84)
    return {
      id: node.id, title: getV3NodeTitle(node, meta.idea_en), subtitle: `Subtópico ${node.original_number ?? ''}`,
      description: node.summary ?? undefined, kind: 'subtopic',
      x: 0.5 + Math.cos(angle) * (mobile ? 0.38 : 0.39),
      y: 0.48 + Math.sin(angle) * (mobile ? 0.32 : 0.36),
      color: V3_COLORS.syntopicon, sourceNode: node, action: { type: 'SELECT_SUBTOPIC', subtopicId: node.id },
    }
  })
  const nodes = [root, source, topicNode, ...childNodes]
  return {
    nodes,
    edges: [edge(root.id, source.id), edge(source.id, topicNode.id), ...childNodes.map(n => edge(topicNode.id, n.id))],
    title: topicNode.title,
    breadcrumb: ['Atlas das Seis Ideias', meta.title_pt, 'Syntopicon', topicNode.title],
  }
}

function relationsLayout(meta: AtlasOverviewIdea, data: AtlasIdeaData, topicId: string, subtopicId: string | null, mobile: boolean): AtlasV3Layout {
  const active = data.nodes.find(n => n.id === (subtopicId ?? topicId)) ?? data.nodes.find(n => n.id === topicId)
  const topic = data.nodes.find(n => n.id === topicId)
  const structural = subtopicId
    ? []
    : data.nodes.filter(n => n.type === 'syntopicon_subtopic' && n.parent_topic_id === topicId).slice(0, 6)
  const contextLabels = RELATION_CONTEXT_BY_TOPIC[topic?.original_number ?? ''] ?? data.nodes
    .filter(n => n.type === 'cross_reference')
    .slice(0, 6)
    .map(n => n.title ?? n.label ?? n.id)

  const center: AtlasV3GraphNode = {
    id: active?.id ?? topicId, title: active ? getV3NodeTitle(active, meta.idea_en) : 'Relações', subtitle: 'Syntopicon',
    description: active?.summary ?? topic?.summary ?? undefined, kind: active?.type === 'syntopicon_subtopic' ? 'subtopic' : 'topic',
    x: 0.5, y: 0.5, color: V3_COLORS.syntopicon, sourceNode: active,
    action: { type: 'SELECT_NODE', nodeId: active?.id ?? topicId },
  }
  const nodes: AtlasV3GraphNode[] = [center]
  const edges: AtlasV3GraphEdge[] = []

  structural.forEach((node, i) => {
    const angle = -Math.PI / 2 + (i / Math.max(structural.length, 1)) * Math.PI * 2
    const child: AtlasV3GraphNode = {
      id: node.id, title: getV3NodeTitle(node, meta.idea_en), subtitle: `Subtópico ${node.original_number ?? ''}`,
      kind: 'subtopic', x: 0.5 + Math.cos(angle) * 0.24, y: 0.48 + Math.sin(angle) * 0.23,
      color: V3_COLORS.syntopicon, sourceNode: node, action: { type: 'SELECT_SUBTOPIC', subtopicId: node.id },
    }
    nodes.push(child)
    edges.push(edge(center.id, child.id, 'direct'))
  })

  contextLabels.slice(0, mobile ? 6 : 7).forEach((label, i) => {
    const angle = -Math.PI / 2 + (i / Math.max(contextLabels.slice(0, mobile ? 6 : 7).length, 1)) * Math.PI * 2
    const id = `relation-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    const relation: AtlasV3GraphNode = {
      id, title: label, subtitle: 'Relação contextual', kind: 'relation',
      x: 0.5 + Math.cos(angle) * 0.41, y: 0.48 + Math.sin(angle) * 0.35,
      color: ['Igualdade', 'Liberdade'].includes(label) ? V3_COLORS.action : V3_COLORS.synthesis,
      action: { type: 'SELECT_NODE', nodeId: id },
    }
    nodes.push(relation)
    edges.push(edge(center.id, relation.id, i === 1 ? 'cross' : 'inferred', i === 1))
  })

  return {
    nodes: nodes.slice(0, mobile ? 15 : 20),
    edges,
    title: center.title,
    breadcrumb: ['Atlas das Seis Ideias', meta.title_pt, 'Syntopicon', topic ? getV3NodeTitle(topic, meta.idea_en) : 'Tópico', 'Relações'],
  }
}

export function buildAtlasV3Layout(
  state: AtlasV3State,
  overview: AtlasOverview | null,
  meta: AtlasOverviewIdea | null,
  data: AtlasIdeaData | null,
  mobile: boolean,
): AtlasV3Layout {
  if (state.view === 'home' || !meta || !state.selectedIdeaId) return homeLayout(overview, mobile)
  if (state.view === 'synthesis' && state.selectedGroup) return synthesisLayout(meta, data, state.selectedGroup, mobile)
  if (state.view === 'topic' && data && state.selectedTopicId) return topicLayout(meta, data, state.selectedTopicId, mobile)
  if (state.view === 'relations' && data && state.selectedTopicId) return relationsLayout(meta, data, state.selectedTopicId, state.selectedSubtopicId, mobile)
  return ideaLayout(meta, data, mobile, state.selectedBranch)
}
