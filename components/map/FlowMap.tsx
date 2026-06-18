'use client'
import '@xyflow/react/dist/style.css'
import { useCallback, useMemo, useState } from 'react'
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  type Node,
  type Edge,
  type NodeTypes,
  type EdgeTypes,
  type NodeMouseHandler,
  BaseEdge,
  getStraightPath,
  type EdgeProps,
} from '@xyflow/react'
import Link from 'next/link'
import { IdeaFlowNode, type IdeaFlowNodeData } from './flow/IdeaFlowNode'
import { TopicFlowNode, type TopicFlowNodeData } from './flow/TopicFlowNode'
import { TensionFlowNode, type TensionFlowNodeData } from './flow/TensionFlowNode'
import { AuthorFlowNode, type AuthorFlowNodeData } from './flow/AuthorFlowNode'
import { WorkFlowNode, type WorkFlowNodeData } from './flow/WorkFlowNode'
import { SidePanel } from './SidePanel'
import type { ExpandedPath } from './types'
import { EMPTY_PATH } from './types'
import { greatIdeaNodes, associatedIdeasByGreatIdea, associatedIdeaNodes } from '@/lib/graph/nodes'
import { tensionNodes } from '@/lib/graph/tensions'
import { authorNodes } from '@/lib/graph/authors'
import { workNodes } from '@/lib/graph/works'
import { topicTensionLinks, tensionAuthorLinks } from '@/lib/graph/syntopiconLinks'
import { getMainEdges } from '@/lib/graph/mapSelectors'

// ── Design constants ────────────────────────────────────────────────────────

const IDEA_COLOR: Record<string, string> = {
  'idea-truth':    '#7c5cd4',
  'idea-beauty':   '#9260c4',
  'idea-goodness': '#6248b8',
  'idea-liberty':  '#2d8a58',
  'idea-equality': '#247b4e',
  'idea-justice':  '#1a6a42',
}

const IDEA_ICON: Record<string, string> = {
  'idea-truth':    '◎',
  'idea-beauty':   '◇',
  'idea-goodness': '◈',
  'idea-liberty':  '◯',
  'idea-equality': '⊜',
  'idea-justice':  '⊖',
}

const RELATION_COLOR: Record<string, string> = {
  fundamenta:  '#b9954f',
  limita:      '#c06060',
  tensiona:    '#c06060',
  corrige:     '#4a7aaa',
  expande:     '#9b7ce8',
  aplica_se_a: '#4a7aaa',
  depende_de:  '#4a7aaa',
}

const IDEA_POS: Record<string, { x: number; y: number }> = {
  'idea-truth':    { x: 360, y:  40 },
  'idea-beauty':   { x: 100, y: 220 },
  'idea-goodness': { x: 620, y: 220 },
  'idea-liberty':  { x: 100, y: 460 },
  'idea-equality': { x: 620, y: 460 },
  'idea-justice':  { x: 360, y: 600 },
}

const TOPIC_RADIUS   = 175
const TENSION_RADIUS = 148
const AUTHOR_RADIUS  = 132
const WORK_RADIUS    = 110

// ── Custom edges ─────────────────────────────────────────────────────────────

function IdeaEdge({ id, sourceX, sourceY, targetX, targetY, data, style }: EdgeProps) {
  const d = data as { color: string; dash?: string }
  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY })
  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{ stroke: d?.color ?? '#4a6070', strokeWidth: 1, strokeDasharray: d?.dash, ...style }}
    />
  )
}

function AssocEdge({ id, sourceX, sourceY, targetX, targetY, data }: EdgeProps) {
  const d = data as { color: string; opacity?: number }
  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY })
  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{ stroke: d?.color ?? '#4a6070', strokeWidth: 0.7, opacity: d?.opacity ?? 0.35 }}
    />
  )
}

const NODE_TYPES: NodeTypes = {
  idea:    IdeaFlowNode,
  topic:   TopicFlowNode,
  tension: TensionFlowNode,
  author:  AuthorFlowNode,
  work:    WorkFlowNode,
}
const EDGE_TYPES: EdgeTypes = { idea: IdeaEdge, assoc: AssocEdge }

// ── Position computation ──────────────────────────────────────────────────────

function computePositions(path: ExpandedPath): Record<string, { x: number; y: number }> {
  const pos: Record<string, { x: number; y: number }> = {}

  for (const idea of greatIdeaNodes) {
    pos[idea.id] = IDEA_POS[idea.id] ?? { x: 400, y: 400 }
  }

  if (!path.ideaId) return pos

  const ideaPos = pos[path.ideaId]
  const topicIds = associatedIdeasByGreatIdea[path.ideaId] ?? []
  const topics = associatedIdeaNodes.filter(n => topicIds.includes(n.id))

  topics.forEach((t, i) => {
    const angle = (i / topics.length) * 2 * Math.PI - Math.PI / 2
    pos[t.id] = {
      x: ideaPos.x + TOPIC_RADIUS * Math.cos(angle),
      y: ideaPos.y + TOPIC_RADIUS * Math.sin(angle),
    }
  })

  if (!path.topicId || !pos[path.topicId]) return pos

  const topicPos = pos[path.topicId]
  const tensionIds = [...new Set(
    topicTensionLinks.filter(l => l.topicId === path.topicId).map(l => l.tensionId)
  )]
  const tensions = tensionNodes.filter(t => tensionIds.includes(t.id))
  const baseAngle = Math.atan2(topicPos.y - ideaPos.y, topicPos.x - ideaPos.x)
  const SPREAD = Math.PI * 0.75

  tensions.forEach((t, i) => {
    const angle = tensions.length > 1
      ? baseAngle + SPREAD * (i / (tensions.length - 1) - 0.5)
      : baseAngle
    pos[t.id] = {
      x: topicPos.x + TENSION_RADIUS * Math.cos(angle),
      y: topicPos.y + TENSION_RADIUS * Math.sin(angle),
    }
  })

  if (!path.tensionId || !pos[path.tensionId]) return pos

  const tensionPos = pos[path.tensionId]
  const authorIds = tensionAuthorLinks.filter(l => l.tensionId === path.tensionId).map(l => l.authorId)
  const authors = authorNodes.filter(a => authorIds.includes(a.id))
  const authBaseAngle = Math.atan2(tensionPos.y - topicPos.y, tensionPos.x - topicPos.x)
  const AUTH_SPREAD = Math.PI * 0.65

  authors.forEach((a, i) => {
    const angle = authors.length > 1
      ? authBaseAngle + AUTH_SPREAD * (i / (authors.length - 1) - 0.5)
      : authBaseAngle
    pos[a.id] = {
      x: tensionPos.x + AUTHOR_RADIUS * Math.cos(angle),
      y: tensionPos.y + AUTHOR_RADIUS * Math.sin(angle),
    }
  })

  if (!path.authorId || !pos[path.authorId]) return pos

  const authorPos = pos[path.authorId]
  const works = workNodes.filter(w => w.authorId === path.authorId).slice(0, 4)
  const workBaseAngle = Math.atan2(authorPos.y - tensionPos.y, authorPos.x - tensionPos.x)
  const WORK_SPREAD = Math.PI * 0.55

  works.forEach((w, i) => {
    const total = works.length
    const angle = total > 1
      ? workBaseAngle + WORK_SPREAD * (i / (total - 1) - 0.5)
      : workBaseAngle
    pos[w.id] = {
      x: authorPos.x + WORK_RADIUS * Math.cos(angle),
      y: authorPos.y + WORK_RADIUS * Math.sin(angle),
    }
  })

  return pos
}

// ── Mobile fallback ───────────────────────────────────────────────────────────

function MobileFallback() {
  return (
    <div className="flex h-full flex-col overflow-y-auto p-6">
      <p className="mb-4 font-sans text-xs text-parchment-200/35">
        O mapa interativo está disponível em telas maiores.
      </p>
      <ul className="space-y-2">
        {greatIdeaNodes.map(idea => (
          <li key={idea.id}>
            <Link
              href={`/ideias/${idea.slug}`}
              className="flex items-center gap-3 rounded border border-library-700/40 bg-library-900/60 px-4 py-3 transition hover:border-antique-500/40"
            >
              <span style={{ color: IDEA_COLOR[idea.id], fontSize: '1.1rem' }}>{IDEA_ICON[idea.id]}</span>
              <span className="font-sans text-sm font-semibold text-parchment-100">{idea.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Level hint ────────────────────────────────────────────────────────────────

function LevelHint({ path }: { path: ExpandedPath }) {
  const style = {
    position: 'absolute' as const,
    bottom: 16,
    left: 16,
    zIndex: 20,
    fontFamily: 'system-ui, sans-serif',
    fontSize: '0.52rem',
    color: 'rgba(214,205,195,0.28)',
    letterSpacing: '0.04em',
  }

  if (!path.ideaId) return <p style={style}>Clique numa ideia · Scroll para zoom · Arraste para navegar</p>
  if (!path.topicId) return <p style={style}>◆ Clique num tópico para ver as tensões filosóficas</p>
  if (!path.tensionId) return <p style={style}>✦ Clique numa tensão para ver os autores</p>
  if (!path.authorId) return <p style={style}>▲ Clique num autor para ver as obras</p>
  if (!path.workId) return <p style={style}>■ Clique numa obra para ver o contexto documental</p>
  return null
}

// ── Main component ────────────────────────────────────────────────────────────

export function FlowMap() {
  const [path, setPath] = useState<ExpandedPath>(EMPTY_PATH)

  const posMap = useMemo(() => computePositions(path), [path])

  const nodes = useMemo<Node[]>(() => {
    const result: Node[] = []
    const ideaColor = path.ideaId ? (IDEA_COLOR[path.ideaId] ?? '#b9954f') : '#b9954f'

    // ── Idea nodes ──
    for (const idea of greatIdeaNodes) {
      result.push({
        id: idea.id,
        type: 'idea',
        position: posMap[idea.id] ?? { x: 400, y: 400 },
        data: {
          label: idea.label,
          icon: IDEA_ICON[idea.id] ?? '○',
          color: IDEA_COLOR[idea.id] ?? '#b9954f',
          slug: idea.slug,
          isExpanded: idea.id === path.ideaId,
          dimmed: !!path.ideaId && idea.id !== path.ideaId,
        } satisfies IdeaFlowNodeData,
      })
    }

    if (!path.ideaId) return result

    // ── Topic nodes ──
    const topicIds = associatedIdeasByGreatIdea[path.ideaId] ?? []
    const topics = associatedIdeaNodes.filter(n => topicIds.includes(n.id))

    for (const topic of topics) {
      if (!posMap[topic.id]) continue
      result.push({
        id: topic.id,
        type: 'topic',
        position: posMap[topic.id],
        data: {
          label: topic.label,
          ideaColor,
          isSelected: topic.id === path.topicId,
          dimmed: !!path.topicId && topic.id !== path.topicId,
          hasTensions: topicTensionLinks.some(l => l.topicId === topic.id),
        } satisfies TopicFlowNodeData,
      })
    }

    if (!path.topicId) return result

    // ── Tension nodes ──
    const tensionIds = [...new Set(
      topicTensionLinks.filter(l => l.topicId === path.topicId).map(l => l.tensionId)
    )]
    const tensions = tensionNodes.filter(t => tensionIds.includes(t.id))

    for (const tension of tensions) {
      if (!posMap[tension.id]) continue
      result.push({
        id: tension.id,
        type: 'tension',
        position: posMap[tension.id],
        data: {
          label: tension.label,
          ideaColor,
          isSelected: tension.id === path.tensionId,
          dimmed: !!path.tensionId && tension.id !== path.tensionId,
        } satisfies TensionFlowNodeData,
      })
    }

    if (!path.tensionId) return result

    // ── Author nodes ──
    const authorIds = tensionAuthorLinks
      .filter(l => l.tensionId === path.tensionId)
      .map(l => l.authorId)
    const authors = authorNodes.filter(a => authorIds.includes(a.id))

    for (const author of authors) {
      if (!posMap[author.id]) continue
      result.push({
        id: author.id,
        type: 'author',
        position: posMap[author.id],
        data: {
          label: author.label,
          period: author.period,
          ideaColor,
          isSelected: author.id === path.authorId,
          dimmed: !!path.authorId && author.id !== path.authorId,
        } satisfies AuthorFlowNodeData,
      })
    }

    if (!path.authorId) return result

    // ── Work nodes ──
    const works = workNodes.filter(w => w.authorId === path.authorId).slice(0, 4)

    for (const work of works) {
      if (!posMap[work.id]) continue
      result.push({
        id: work.id,
        type: 'work',
        position: posMap[work.id],
        data: {
          label: work.label,
          ideaColor,
          isSelected: work.id === path.workId,
        } satisfies WorkFlowNodeData,
      })
    }

    return result
  }, [path, posMap])

  const edges = useMemo<Edge[]>(() => {
    const DASH_TYPES = new Set(['tensiona', 'limita', 'opoe_se_a'])

    const main: Edge[] = getMainEdges().map(e => {
      const isActive = e.source === path.ideaId || e.target === path.ideaId
      const color = RELATION_COLOR[e.relation] ?? '#4a6070'
      return {
        id: e.id,
        source: e.source,
        target: e.target,
        type: 'idea',
        data: { color, dash: DASH_TYPES.has(e.relation) ? '5 3' : undefined },
        style: { opacity: path.ideaId ? (isActive ? 0.72 : 0.07) : 0.28 },
      }
    })

    if (!path.ideaId) return main

    const ideaColor = IDEA_COLOR[path.ideaId] ?? '#b9954f'
    const topicIds = associatedIdeasByGreatIdea[path.ideaId] ?? []

    const topicEdges: Edge[] = topicIds
      .filter(tid => posMap[tid])
      .map(tid => ({
        id: `spoke-idea-${path.ideaId}-${tid}`,
        source: path.ideaId!,
        target: tid,
        type: 'assoc',
        data: {
          color: ideaColor,
          opacity: path.topicId ? (tid === path.topicId ? 0.55 : 0.08) : 0.35,
        },
      }))

    const result: Edge[] = [...main, ...topicEdges]

    if (!path.topicId || !posMap[path.topicId]) return result

    const tensionIds = [...new Set(
      topicTensionLinks.filter(l => l.topicId === path.topicId).map(l => l.tensionId)
    )]
    for (const tid of tensionIds) {
      if (!posMap[tid]) continue
      result.push({
        id: `spoke-topic-${path.topicId}-${tid}`,
        source: path.topicId,
        target: tid,
        type: 'assoc',
        data: {
          color: '#b9954f',
          opacity: path.tensionId ? (tid === path.tensionId ? 0.62 : 0.08) : 0.45,
        },
      })
    }

    if (!path.tensionId || !posMap[path.tensionId]) return result

    const authorIds = tensionAuthorLinks
      .filter(l => l.tensionId === path.tensionId)
      .map(l => l.authorId)
    for (const aid of authorIds) {
      if (!posMap[aid]) continue
      result.push({
        id: `spoke-tension-${path.tensionId}-${aid}`,
        source: path.tensionId,
        target: aid,
        type: 'assoc',
        data: {
          color: '#9b7ce8',
          opacity: path.authorId ? (aid === path.authorId ? 0.65 : 0.08) : 0.48,
        },
      })
    }

    if (!path.authorId || !posMap[path.authorId]) return result

    const works = workNodes.filter(w => w.authorId === path.authorId).slice(0, 4)
    for (const work of works) {
      if (!posMap[work.id]) continue
      result.push({
        id: `spoke-author-${path.authorId}-${work.id}`,
        source: path.authorId,
        target: work.id,
        type: 'assoc',
        data: { color: '#4a7aaa', opacity: 0.48 },
      })
    }

    return result
  }, [path, posMap])

  const onNodeClick: NodeMouseHandler = useCallback((_evt, node) => {
    switch (node.type) {
      case 'idea':
        setPath(prev => prev.ideaId === node.id
          ? EMPTY_PATH
          : { ideaId: node.id, topicId: null, tensionId: null, authorId: null, workId: null })
        break
      case 'topic':
        setPath(prev => prev.topicId === node.id
          ? { ...prev, topicId: null, tensionId: null, authorId: null, workId: null }
          : { ...prev, topicId: node.id, tensionId: null, authorId: null, workId: null })
        break
      case 'tension':
        setPath(prev => prev.tensionId === node.id
          ? { ...prev, tensionId: null, authorId: null, workId: null }
          : { ...prev, tensionId: node.id, authorId: null, workId: null })
        break
      case 'author':
        setPath(prev => prev.authorId === node.id
          ? { ...prev, authorId: null, workId: null }
          : { ...prev, authorId: node.id, workId: null })
        break
      case 'work':
        setPath(prev => ({ ...prev, workId: prev.workId === node.id ? null : node.id }))
        break
    }
  }, [])

  const onPaneClick = useCallback(() => setPath(EMPTY_PATH), [])

  const selectedIdea = greatIdeaNodes.find(n => n.id === path.ideaId)
  const ideaColor = path.ideaId ? (IDEA_COLOR[path.ideaId] ?? '#b9954f') : '#b9954f'

  return (
    <div className="relative h-full w-full bg-library-950 text-parchment-100">
      {/* Mobile */}
      <div className="h-full w-full sm:hidden">
        <MobileFallback />
      </div>

      {/* Desktop */}
      <div className="hidden h-full w-full sm:block">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={EDGE_TYPES}
          nodeTypes={NODE_TYPES}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeOrigin={[0.5, 0.5]}
          fitView
          fitViewOptions={{ padding: 0.18 }}
          minZoom={0.3}
          maxZoom={2.5}
          colorMode="dark"
          nodesDraggable
          nodesConnectable={false}
          elementsSelectable
          proOptions={{ hideAttribution: true }}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={28}
            size={0.8}
            color="rgba(185,149,79,0.08)"
          />
          <Controls
            showInteractive={false}
            style={{
              background: 'rgba(16,38,31,0.85)',
              border: '1px solid rgba(185,149,79,0.18)',
              borderRadius: 4,
            }}
          />
        </ReactFlow>
      </div>

      {/* Evidence side panel */}
      {path.workId && (
        <SidePanel
          path={path}
          ideaColor={ideaColor}
          onClose={() => setPath(prev => ({ ...prev, workId: null }))}
        />
      )}

      {/* Selected idea CTA */}
      {selectedIdea && !path.workId && (
        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2">
          <Link
            href={`/ideias/${selectedIdea.slug}`}
            className="flex items-center gap-2 border px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider backdrop-blur transition"
            style={{
              borderColor: `${ideaColor}55`,
              color: ideaColor,
              background: 'rgba(10,24,20,0.85)',
            }}
          >
            <span>{IDEA_ICON[path.ideaId!]}</span>
            Explorar {selectedIdea.label}
          </Link>
        </div>
      )}

      {/* Axis filter */}
      <div className="absolute left-1/2 top-4 z-20 flex -translate-x-1/2 gap-0.5 rounded-full border border-library-700/50 bg-library-900/85 p-1 backdrop-blur">
        {([
          { axis: 'como_julgamos', label: 'Julgar' },
          { axis: 'como_agimos',   label: 'Agir' },
        ] as const).map(({ axis, label }) => (
          <button
            key={axis}
            type="button"
            onClick={() => {
              const found = greatIdeaNodes.find(n => n.axis === axis)
              if (found) setPath({ ideaId: found.id, topicId: null, tensionId: null, authorId: null, workId: null })
            }}
            className="rounded-full px-4 py-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-parchment-200/45 transition hover:text-parchment-100"
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPath(EMPTY_PATH)}
          className="rounded-full px-4 py-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-parchment-200/45 transition hover:text-parchment-100"
        >
          Todas
        </button>
      </div>

      {/* Level hint */}
      <LevelHint path={path} />
    </div>
  )
}
