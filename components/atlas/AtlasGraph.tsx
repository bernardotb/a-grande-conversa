'use client'

import {
  useRef, useEffect, useState, useCallback, useReducer, useMemo,
} from 'react'
import type {
  AtlasNode, AtlasEdge, AtlasMode, AtlasSphere, AtlasOverviewIdea,
} from '@/lib/atlas-six-ideas/types'
import { NODE_TYPE_COLORS } from '@/lib/atlas-six-ideas/types'
import {
  filterByMode, filterBySphere, computeOverviewLayout,
  computeAspectLayout, computeTopicLayout, buildAdjacency,
  getNodeTitle,
} from '@/lib/atlas-six-ideas/selectors'
import type { NodePosition } from '@/lib/atlas-six-ideas/selectors'

// ── Zoom/pan state ────────────────────────────────────────────────
interface Transform { x: number; y: number; k: number }

function clampK(k: number) { return Math.min(Math.max(k, 0.25), 4) }

// ── Props ─────────────────────────────────────────────────────────
interface AtlasGraphProps {
  mode: AtlasMode
  sphere: AtlasSphere
  selectedIdea: string | null
  overviewIdeas: AtlasOverviewIdea[]
  ideaNodes: AtlasNode[]
  ideaEdges: AtlasEdge[]
  selectedNodeId: string | null
  onSelectNode: (node: AtlasNode) => void
  onDeselectAll: () => void
  loading: boolean
}

// Which node types to show in the graph canvas (we keep it light)
const GRAPH_VISIBLE_TYPES = new Set([
  'idea', 'adler_aspect', 'syntopicon_idea', 'syntopicon_topic',
  'tension', 'question',
])

const NODE_RADII: Record<string, number> = {
  idea: 28,
  adler_aspect: 20,
  syntopicon_idea: 20,
  syntopicon_topic: 18,
  tension: 16,
  question: 14,
}

export function AtlasGraph({
  mode, sphere, selectedIdea, overviewIdeas,
  ideaNodes, ideaEdges, selectedNodeId,
  onSelectNode, onDeselectAll, loading,
}: AtlasGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 800, h: 600 })
  const [transform, setTransform] = useState<Transform>({ x: 0, y: 0, k: 1 })
  const isPanning = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // Responsive size
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const r = el.getBoundingClientRect()
      setSize({ w: r.width, h: r.height })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const { w, h } = size
  const cx = w / 2
  const cy = h / 2

  // Build visible nodes for canvas
  const visibleNodes = useMemo((): AtlasNode[] => {
    if (!selectedIdea) {
      // Overview: show 6 idea nodes from overview data
      return overviewIdeas
        .filter(i => sphere === 'all' || i.sphere === sphere)
        .map(i => ({
          id: i.id,
          type: 'idea' as const,
          title: i.title_pt,
          idea: i.idea_en,
          sphere: i.sphere,
        }))
    }
    // Idea selected: show its aspects and topics
    const modeFiltered = filterByMode(ideaNodes, mode)
    const sphereFiltered = filterBySphere(modeFiltered, sphere)
    return sphereFiltered.filter(n => GRAPH_VISIBLE_TYPES.has(n.type))
  }, [selectedIdea, overviewIdeas, ideaNodes, mode, sphere])

  // Compute node positions
  const positions = useMemo((): Record<string, NodePosition> => {
    if (!selectedIdea) {
      return computeOverviewLayout(
        overviewIdeas.filter(i => sphere === 'all' || i.sphere === sphere),
        w, h
      )
    }

    const aspects = visibleNodes.filter(n =>
      n.type === 'adler_aspect' || n.type === 'syntopicon_idea'
    )
    const topics = visibleNodes.filter(n =>
      n.type === 'syntopicon_topic' || n.type === 'tension' || n.type === 'question'
    )

    const pos: Record<string, NodePosition> = {}

    // Find selected idea position (center)
    const selectedIdeaOverview = overviewIdeas.find(i => i.idea_en === selectedIdea)
    if (selectedIdeaOverview) {
      pos[selectedIdeaOverview.id] = {
        x: cx, y: cy, opacity: 1, scale: 1.1,
        color: NODE_TYPE_COLORS.idea,
      }
    }

    // Aspects at R1
    Object.assign(pos, computeAspectLayout(cx, cy, aspects, w, h))

    // Topics at R2 (around center, smaller ring)
    if (topics.length > 0) {
      const topicPos = computeTopicLayout(cx, cy, topics, w, h)
      // Offset topic ring to not overlap aspect ring
      Object.entries(topicPos).forEach(([id, p]) => {
        pos[id] = {
          ...p,
          x: cx + (p.x - cx) * 1.6,
          y: cy + (p.y - cy) * 1.6,
        }
      })
    }

    return pos
  }, [selectedIdea, overviewIdeas, visibleNodes, w, h, cx, cy, sphere])

  // Edges to draw
  const visibleEdges = useMemo((): AtlasEdge[] => {
    if (!selectedIdea) return []
    const ids = new Set(visibleNodes.map(n => n.id))
    return ideaEdges.filter(e =>
      ids.has(e.source) && ids.has(e.target) &&
      positions[e.source] && positions[e.target]
    ).slice(0, 120) // cap for performance
  }, [selectedIdea, visibleNodes, ideaEdges, positions])

  // ── Zoom/pan handlers ─────────────────────────────────────────
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setTransform(t => ({ ...t, k: clampK(t.k * delta) }))
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.target !== e.currentTarget && (e.target as Element).closest('button')) return
    isPanning.current = true
    lastPointer.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current) return
    const dx = e.clientX - lastPointer.current.x
    const dy = e.clientY - lastPointer.current.y
    lastPointer.current = { x: e.clientX, y: e.clientY }
    setTransform(t => ({ ...t, x: t.x + dx, y: t.y + dy }))
  }, [])

  const handlePointerUp = useCallback(() => {
    isPanning.current = false
  }, [])

  const zoomIn = () => setTransform(t => ({ ...t, k: clampK(t.k * 1.3) }))
  const zoomOut = () => setTransform(t => ({ ...t, k: clampK(t.k * 0.77) }))
  const zoomReset = () => setTransform({ x: 0, y: 0, k: 1 })

  const transition = reducedMotion.current ? 'none' : 'all 0.45s cubic-bezier(0.4,0,0.2,1)'

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-library-950 cursor-grab active:cursor-grabbing"
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Sphere labels */}
      <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-around px-8 z-10" aria-hidden="true">
        <span className="font-sans text-[0.58rem] uppercase tracking-[0.22em] text-violet-600/40">Julgar</span>
        <span className="font-sans text-[0.58rem] uppercase tracking-[0.22em] text-green-700/40">Agir</span>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-library-950/80">
          <span className="font-sans text-sm text-parchment-200/50">Carregando corpus…</span>
        </div>
      )}

      {/* Click background to deselect */}
      <div
        className="absolute inset-0 z-0"
        onClick={onDeselectAll}
        aria-hidden="true"
      />

      {/* SVG canvas with transform */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g transform={`translate(${transform.x},${transform.y}) scale(${transform.k})`}>
          {/* Edges */}
          {visibleEdges.map((edge, i) => {
            const sp = positions[edge.source]
            const tp = positions[edge.target]
            if (!sp || !tp) return null
            return (
              <line
                key={`e-${i}`}
                x1={sp.x} y1={sp.y}
                x2={tp.x} y2={tp.y}
                stroke="rgba(180,160,80,0.12)"
                strokeWidth={1 / transform.k}
              />
            )
          })}

          {/* Overview ring when no idea selected */}
          {!selectedIdea && overviewIdeas
            .filter(i => sphere === 'all' || i.sphere === sphere)
            .map((idea, i, arr) => {
              const a = arr[i]
              const b = arr[(i + 1) % arr.length]
              const pa = positions[a.id]
              const pb = positions[b.id]
              if (!pa || !pb) return null
              return (
                <line
                  key={`ring-${i}`}
                  x1={pa.x} y1={pa.y}
                  x2={pb.x} y2={pb.y}
                  stroke="rgba(180,160,80,0.08)"
                  strokeWidth={1 / transform.k}
                />
              )
            })}
        </g>
      </svg>

      {/* Node buttons (absolutely positioned, follow transform) */}
      {visibleNodes.map(node => {
        const pos = positions[node.id]
        if (!pos) return null
        const r = NODE_RADII[node.type] ?? 16
        const isSelected = node.id === selectedNodeId
        const color = pos.color
        const title = getNodeTitle(node)
        const shortLabel = title.length > 18 ? title.slice(0, 16) + '…' : title

        return (
          <button
            key={node.id}
            type="button"
            aria-label={`Selecionar: ${title}`}
            aria-pressed={isSelected}
            onClick={e => { e.stopPropagation(); onSelectNode(node) }}
            className="absolute z-10 flex flex-col items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-antique-400"
            style={{
              left: pos.x + transform.x,
              top: pos.y + transform.y,
              transform: `translate(-50%, -50%) scale(${pos.scale * transform.k})`,
              opacity: pos.opacity,
              transition,
            }}
          >
            <div
              className="grid place-items-center rounded-full border-2 transition-all"
              style={{
                width: r * 2,
                height: r * 2,
                borderColor: color,
                backgroundColor: isSelected ? `${color}22` : 'transparent',
                boxShadow: isSelected ? `0 0 24px ${color}44` : undefined,
              }}
            />
            <span
              className="pointer-events-none max-w-[90px] text-center font-sans leading-tight"
              style={{
                fontSize: node.type === 'idea' ? '0.7rem' : '0.58rem',
                color,
                fontWeight: node.type === 'idea' ? 600 : 400,
              }}
            >
              {shortLabel}
            </span>
          </button>
        )
      })}

      {/* Hint */}
      {!selectedIdea && !loading && (
        <p className="pointer-events-none absolute bottom-4 right-4 z-10 font-sans text-[0.58rem] text-parchment-200/25">
          Clique em uma ideia para explorar
        </p>
      )}

      {/* Zoom controls */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1" aria-label="Controles de zoom">
        {[
          { label: '+', title: 'Ampliar', fn: zoomIn },
          { label: '−', title: 'Reduzir', fn: zoomOut },
          { label: '⊙', title: 'Recentrar', fn: zoomReset },
        ].map(({ label, title, fn }) => (
          <button
            key={title}
            type="button"
            title={title}
            aria-label={title}
            onClick={fn}
            className="grid h-8 w-8 place-items-center rounded border border-antique-500/25 bg-library-900/80 font-sans text-sm text-parchment-200/60 hover:border-antique-400/50 hover:text-antique-400 transition"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
