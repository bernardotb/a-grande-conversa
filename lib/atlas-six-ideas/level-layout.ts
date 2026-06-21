import type { AtlasNode, AtlasOverviewIdea, AtlasIdeaData } from './types'
import { IDEA_VISUAL_IDENTITY } from './types'
import type { AtlasMode } from './types'
import type { AtlasGroupId } from './atlas-state'
import { getCorrespondences } from './correspondences'

export interface LayoutNode extends AtlasNode {
  x: number
  y: number
  radius: number
  color: string
  opacity: number
  scale: number
  isVirtual?: boolean
  refCount?: number
}

export interface LayoutEdge {
  id: string
  source: string
  target: string
  edgeType: string
  opacity: number
  strokeWidth: number
  dashed?: boolean
  doubleDash?: boolean
}

export interface LevelLayout {
  nodes: LayoutNode[]
  edges: LayoutEdge[]
}

const RADII: Record<string, number> = {
  idea: 32,
  adler_group: 22,
  adler_aspect: 18,
  question_group: 20,
  question: 12,
  tension_group: 20,
  tension: 14,
  syntopicon_chapter: 22,
  syntopicon_topic: 18,
  syntopicon_subtopic: 14,
  documentary_reservoir: 24,
  reference_group: 14,
  author: 15,
  work: 13,
  volume: 12,
  default: 16,
}

function nodeRadius(type: string) {
  return RADII[type] ?? RADII.default
}

function ideaColor(ideaEn: string): string {
  const vis = IDEA_VISUAL_IDENTITY[ideaEn as keyof typeof IDEA_VISUAL_IDENTITY]
  return vis?.colorPrimary ?? '#d0a556'
}

// ── Level 0: Home ──────────────────────────────────────────────────
// 6 ideas in 2 columns: Judgment left, Action right
export function computeHomeLayout(
  overviewIdeas: AtlasOverviewIdea[],
  W: number,
  H: number,
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const judgment = overviewIdeas.filter(i => i.sphere === 'judgment')
  const action   = overviewIdeas.filter(i => i.sphere === 'action')

  const colLeft  = W * 0.30
  const colRight = W * 0.70
  const padV     = H * 0.18

  const placeGroup = (group: AtlasOverviewIdea[], cx: number) => {
    const count = group.length
    group.forEach((idea, i) => {
      const y = count === 1
        ? H / 2
        : padV + (i / (count - 1)) * (H - padV * 2)
      nodes.push({
        id: idea.id,
        type: 'idea',
        title: idea.title_pt,
        idea: idea.idea_en,
        sphere: idea.sphere,
        x: cx, y,
        radius: nodeRadius('idea'),
        color: ideaColor(idea.idea_en),
        opacity: 1,
        scale: 1,
      })
    })
  }

  placeGroup(judgment, colLeft)
  placeGroup(action,   colRight)

  // Subtle connecting edges within each field
  const addRing = (group: AtlasOverviewIdea[]) => {
    for (let i = 0; i < group.length - 1; i++) {
      edges.push({
        id: `ring-${group[i].id}-${group[i + 1].id}`,
        source: group[i].id,
        target: group[i + 1].id,
        edgeType: 'field_ring',
        opacity: 0.07,
        strokeWidth: 1,
      })
    }
  }
  addRing(judgment)
  addRing(action)

  // Cross-field bridge (very faint)
  const jMid = judgment[Math.floor(judgment.length / 2)]
  const aMid = action[Math.floor(action.length / 2)]
  if (jMid && aMid) {
    edges.push({
      id: 'cross-field',
      source: jMid.id,
      target: aMid.id,
      edgeType: 'cross_field',
      opacity: 0.04,
      strokeWidth: 1,
      dashed: true,
    })
  }

  return { nodes, edges }
}

// ── Level 1: Idea selected ─────────────────────────────────────────
// Idea center + 3 system branches: Adler, Syntopicon, Reservoir
export function computeIdeaLayout(
  ideaMeta: AtlasOverviewIdea,
  W: number,
  H: number,
  openGroupId: AtlasGroupId | null,
  mode: AtlasMode,
  ideaData: AtlasIdeaData | null,
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const cx = W / 2
  const cy = H / 2
  const color = ideaColor(ideaMeta.idea_en)

  nodes.push({
    id: ideaMeta.id,
    type: 'idea',
    title: ideaMeta.title_pt,
    idea: ideaMeta.idea_en,
    sphere: ideaMeta.sphere,
    x: cx, y: cy,
    radius: nodeRadius('idea'),
    color,
    opacity: 1,
    scale: 1.1,
  })

  const branchR = Math.min(W, H) * 0.32

  const branchAngles = {
    adler:      -Math.PI / 2 - Math.PI / 5,
    syntopicon: -Math.PI / 2 + Math.PI / 5,
    reservoir:   Math.PI / 2,
  }

  const makeVirtual = (
    id: string, title: string, angle: number,
    type: AtlasNode['type'], nodeColor: string, refCount?: number,
  ): LayoutNode => ({
    id, type,
    title,
    isVirtual: true,
    x: cx + branchR * Math.cos(angle),
    y: cy + branchR * Math.sin(angle),
    radius: nodeRadius(type),
    color: nodeColor,
    opacity: 1,
    scale: 1,
    refCount,
  })

  if (mode === 'adler' || mode === 'fused') {
    const adlerNode = makeVirtual(
      'virtual-adler', 'Síntese — Adler',
      branchAngles.adler, 'adler_group', '#c99a43',
    )
    nodes.push(adlerNode)
    edges.push({
      id: 'e-idea-adler',
      source: ideaMeta.id, target: 'virtual-adler',
      edgeType: 'idea_to_system', opacity: 0.5, strokeWidth: 2,
    })

    if (openGroupId === 'adler') {
      const aspects = ideaData?.nodes.filter(n => n.type === 'adler_aspect') ?? []
      const aspectR = branchR * 0.75
      const spread = Math.PI * 0.85
      const startA = branchAngles.adler - spread / 2
      aspects.slice(0, 8).forEach((asp, i, arr) => {
        const angle = arr.length === 1
          ? branchAngles.adler
          : startA + (i / (arr.length - 1)) * spread
        nodes.push({
          ...asp,
          x: cx + (branchR + aspectR) * Math.cos(angle),
          y: cy + (branchR + aspectR) * Math.sin(angle),
          radius: nodeRadius('adler_aspect'),
          color: '#c99a43',
          opacity: 1,
          scale: 1,
        })
        edges.push({
          id: `e-adler-${asp.id}`,
          source: 'virtual-adler', target: asp.id,
          edgeType: 'adler_structure', opacity: 0.35, strokeWidth: 1.5,
        })
      })
    }
  }

  if (mode === 'syntopicon' || mode === 'fused') {
    const synNode = makeVirtual(
      'virtual-syntopicon', 'Syntopicon',
      branchAngles.syntopicon, 'syntopicon_chapter', '#8a8cc8',
    )
    nodes.push(synNode)
    edges.push({
      id: 'e-idea-syn',
      source: ideaMeta.id, target: 'virtual-syntopicon',
      edgeType: 'idea_to_system', opacity: 0.5, strokeWidth: 2,
    })

    if (openGroupId === 'syntopicon') {
      const topics = ideaData?.nodes.filter(n => n.type === 'syntopicon_topic') ?? []
      const topicR = branchR * 0.75
      const spread = Math.PI * 0.85
      const startA = branchAngles.syntopicon - spread / 2
      topics.slice(0, 11).forEach((topic, i, arr) => {
        const angle = arr.length === 1
          ? branchAngles.syntopicon
          : startA + (i / (arr.length - 1)) * spread
        const refCount = ideaData?.nodes.filter(n =>
          n.type === 'reference' && n.topic_id?.startsWith(topic.id)
        ).length ?? 0
        nodes.push({
          ...topic,
          x: cx + (branchR + topicR) * Math.cos(angle),
          y: cy + (branchR + topicR) * Math.sin(angle),
          radius: nodeRadius('syntopicon_topic'),
          color: '#8a8cc8',
          opacity: 1,
          scale: 1,
          refCount,
        })
        edges.push({
          id: `e-syn-${topic.id}`,
          source: 'virtual-syntopicon', target: topic.id,
          edgeType: 'syntopicon_structure', opacity: 0.35, strokeWidth: 1.5,
        })
      })
    }
  }

  // Reservoir always shown
  const reservoirNode = makeVirtual(
    'virtual-reservoir', 'Reservatório documental',
    branchAngles.reservoir, 'documentary_reservoir', '#7b887f',
    ideaMeta.counts.references,
  )
  nodes.push(reservoirNode)
  edges.push({
    id: 'e-idea-reservoir',
    source: ideaMeta.id, target: 'virtual-reservoir',
    edgeType: 'idea_to_system', opacity: 0.25, strokeWidth: 1.5, dashed: true,
  })

  // Fused mode: draw correspondence edges
  if (mode === 'fused' && openGroupId === 'adler' && ideaData) {
    const correspondences = getCorrespondences(ideaMeta.idea_en)
    correspondences.forEach(c => {
      const adlerInGraph = nodes.find(n => n.id === c.adlerAspectId)
      if (!adlerInGraph) return
      c.syntopicNodeIds.forEach(sid => {
        const synInGraph = nodes.find(n => n.id === sid)
        if (!synInGraph) return
        edges.push({
          id: `e-corr-${c.adlerAspectId}-${sid}`,
          source: c.adlerAspectId,
          target: sid,
          edgeType: 'adler_to_syntopicon_correspondence',
          opacity: 0.3,
          strokeWidth: 1,
          doubleDash: true,
        })
      })
    })
  }

  return { nodes, edges }
}

// ── Level 2: Topic selected ────────────────────────────────────────
// Idea → Syntopicon → Topic → Subtopics (up to 8) + top authors (up to 5)
export function computeTopicLayout(
  ideaMeta: AtlasOverviewIdea,
  ideaData: AtlasIdeaData,
  topicId: string,
  W: number,
  H: number,
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const color = ideaColor(ideaMeta.idea_en)
  const cy = H / 2

  // Idea anchor (far left)
  nodes.push({
    id: ideaMeta.id, type: 'idea',
    title: ideaMeta.title_pt, idea: ideaMeta.idea_en, sphere: ideaMeta.sphere,
    x: W * 0.08, y: cy,
    radius: nodeRadius('idea'), color, opacity: 0.65, scale: 0.85,
  })

  // Syntopicon chapter node (mid-left)
  nodes.push({
    id: 'virtual-syntopicon', type: 'syntopicon_chapter',
    title: 'Syntopicon', isVirtual: true,
    x: W * 0.25, y: cy,
    radius: nodeRadius('syntopicon_chapter'), color: '#8a8cc8', opacity: 0.8, scale: 1,
  })
  edges.push({
    id: 'e-idea-syn',
    source: ideaMeta.id, target: 'virtual-syntopicon',
    edgeType: 'idea_to_system', opacity: 0.25, strokeWidth: 1.5,
  })

  // Selected topic node (center)
  const topicNode = ideaData.nodes.find(n => n.id === topicId)
  if (!topicNode) return { nodes, edges }

  const topicRefCount = ideaData.nodes.filter(n =>
    n.type === 'reference' && n.topic_id?.startsWith(topicId)
  ).length

  const topicCx = W * 0.42
  nodes.push({
    ...topicNode,
    x: topicCx, y: cy,
    radius: nodeRadius('syntopicon_topic'), color: '#8a8cc8', opacity: 1, scale: 1.1,
    refCount: topicRefCount,
  })
  edges.push({
    id: 'e-syn-topic',
    source: 'virtual-syntopicon', target: topicId,
    edgeType: 'syntopicon_structure', opacity: 0.5, strokeWidth: 2,
  })

  // Subtopics — fan out to the right of the topic
  const subtopics = ideaData.nodes.filter(
    n => n.type === 'syntopicon_subtopic' && n.parent_topic_id === topicId
  )
  const subR = Math.min(W * 0.28, H * 0.40)
  const spread = Math.PI * 1.15
  subtopics.slice(0, 8).forEach((sub, i, arr) => {
    const angle = arr.length === 1
      ? 0
      : -spread / 2 + (i / (arr.length - 1)) * spread
    const refCount = ideaData.nodes.filter(
      n => n.type === 'reference' && n.topic_id === sub.id
    ).length
    nodes.push({
      ...sub,
      x: topicCx + subR * 1.3 * Math.cos(angle),
      y: cy + subR * Math.sin(angle),
      radius: nodeRadius('syntopicon_subtopic'), color: '#6668a2', opacity: 1, scale: 1, refCount,
    })
    edges.push({
      id: `e-topic-sub-${sub.id}`,
      source: topicId, target: sub.id,
      edgeType: 'topic_to_subtopic', opacity: 0.35, strokeWidth: 1,
    })
  })

  // Top-5 authors for this topic (right rail)
  const topicRefs = ideaData.nodes.filter(n =>
    n.type === 'reference' && n.topic_id?.startsWith(topicId)
  )
  const authorCounts = new Map<string, number>()
  topicRefs.forEach(ref => {
    if (ref.author_id) authorCounts.set(ref.author_id, (authorCounts.get(ref.author_id) ?? 0) + 1)
  })
  const top5 = [...authorCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => id)

  top5.forEach((authorId, i) => {
    const authorNode = ideaData.nodes.find(n => n.id === authorId)
    if (!authorNode) return
    const ySpread = H * 0.60
    nodes.push({
      ...authorNode,
      x: W * 0.90,
      y: H / 2 - ySpread / 2 + (i / Math.max(top5.length - 1, 1)) * ySpread,
      radius: nodeRadius('author'), color: '#a96842', opacity: 0.65, scale: 0.9,
    })
    edges.push({
      id: `e-topic-author-${authorId}`,
      source: topicId, target: authorId,
      edgeType: 'topic_to_reference_group', opacity: 0.18, strokeWidth: 1, dashed: true,
    })
  })

  return { nodes, edges }
}

// ── Level 3: Reference selected (documentary path) ─────────────────
// 6-8 node horizontal chain: idea → topic → subtopic → ref → author → work → volume
export function computeReferenceLayout(
  ideaMeta: AtlasOverviewIdea,
  ideaData: AtlasIdeaData,
  referenceId: string,
  topicId: string | null,
  subtopicId: string | null,
  W: number,
  H: number,
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const color = ideaColor(ideaMeta.idea_en)
  const refNode = ideaData.nodes.find(n => n.id === referenceId)
  if (!refNode) return { nodes, edges }

  const typeColors: Record<string, string> = {
    idea: color,
    syntopicon_topic: '#8a8cc8',
    syntopicon_subtopic: '#6668a2',
    reference: '#b55f38',
    author: '#a96842',
    work: '#bd7246',
    volume: '#8f5538',
  }

  const pathNodes: AtlasNode[] = []

  // Build ordered chain
  pathNodes.push({
    id: ideaMeta.id, type: 'idea',
    title: ideaMeta.title_pt, idea: ideaMeta.idea_en, sphere: ideaMeta.sphere,
  })

  if (topicId) {
    const t = ideaData.nodes.find(n => n.id === topicId)
    if (t) pathNodes.push(t)
  }
  if (subtopicId) {
    const s = ideaData.nodes.find(n => n.id === subtopicId)
    if (s) pathNodes.push(s)
  }

  pathNodes.push(refNode)

  if (refNode.author_id) {
    const a = ideaData.nodes.find(n => n.id === refNode.author_id)
    if (a) pathNodes.push(a)
  }
  if (refNode.work_id) {
    const w = ideaData.nodes.find(n => n.id === refNode.work_id)
    if (w) pathNodes.push(w)
  }
  if (refNode.volume_id) {
    const v = ideaData.nodes.find(n => n.id === refNode.volume_id)
    if (v) pathNodes.push(v)
  }

  // Lay out horizontally
  const count = pathNodes.length
  const margin = W * 0.07
  const spacing = (W - margin * 2) / Math.max(count - 1, 1)
  const cy = H / 2

  pathNodes.forEach((pn, i) => {
    const nodeColor = typeColors[pn.type] ?? '#d0a556'
    nodes.push({
      ...pn,
      x: margin + i * spacing,
      y: cy,
      radius: nodeRadius(pn.type),
      color: nodeColor,
      opacity: 1,
      scale: pn.type === 'reference' ? 1.15 : 0.9,
    })
    if (i > 0) {
      edges.push({
        id: `e-path-${i}`,
        source: pathNodes[i - 1].id,
        target: pn.id,
        edgeType: 'documentary_path',
        opacity: 0.55,
        strokeWidth: 2,
      })
    }
  })

  return { nodes, edges }
}
