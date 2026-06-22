'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  BookOpen, CircleHelp, GitBranch, Landmark, Library, ListTree,
  Network, Scale, Swords, Waypoints,
} from 'lucide-react'
import type { AtlasV3Action, AtlasV3GraphNode, AtlasV3Layout } from '@/lib/atlas-six-ideas/v3-model'

interface Props {
  layout: AtlasV3Layout
  selectedNodeId: string | null
  dispatch: (action: AtlasV3Action) => void
  loading: boolean
  resetKey: number
}

interface Transform { x: number; y: number; k: number }

const KIND_RADIUS: Record<AtlasV3GraphNode['kind'], number> = {
  idea: 38,
  source: 32,
  group: 27,
  aspect: 23,
  chapter: 23,
  question: 23,
  tension: 23,
  topic: 25,
  subtopic: 22,
  relation: 22,
}

function NodeIcon({ node, size }: { node: AtlasV3GraphNode; size: number }) {
  const props = { size, strokeWidth: 1.35, 'aria-hidden': true as const }
  if (node.kind === 'idea') return <Scale {...props} />
  if (node.kind === 'source') return node.id.includes('syntopicon') ? <Library {...props} /> : <BookOpen {...props} />
  if (node.kind === 'group') {
    if (node.id.includes('question')) return <CircleHelp {...props} />
    if (node.id.includes('tension')) return <Swords {...props} />
    if (node.id.includes('chapter')) return <BookOpen {...props} />
    return <ListTree {...props} />
  }
  if (node.kind === 'topic') return <Waypoints {...props} />
  if (node.kind === 'subtopic') return <GitBranch {...props} />
  if (node.kind === 'relation') return <Network {...props} />
  if (node.kind === 'chapter') return <BookOpen {...props} />
  if (node.kind === 'tension') return <Swords {...props} />
  if (node.kind === 'question') return <CircleHelp {...props} />
  return <Landmark {...props} />
}

function clampZoom(k: number) { return Math.max(0.65, Math.min(2.2, k)) }

export function AtlasGraphV3({ layout, selectedNodeId, dispatch, loading, resetKey }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 900, h: 650 })
  const [transform, setTransform] = useState<Transform>({ x: 0, y: 0, k: 1 })
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const panning = useRef(false)
  const lastPoint = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const element = containerRef.current
    if (!element) return
    const update = () => {
      const rect = element.getBoundingClientRect()
      setSize({ w: rect.width, h: rect.height })
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => setTransform({ x: 0, y: 0, k: 1 }), [layout.title, resetKey])

  const projected = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>()
    layout.nodes.forEach(node => {
      const baseX = node.x * size.w
      const baseY = node.y * size.h
      map.set(node.id, {
        x: (baseX - size.w / 2) * transform.k + size.w / 2 + transform.x,
        y: (baseY - size.h / 2) * transform.k + size.h / 2 + transform.y,
      })
    })
    return map
  }, [layout.nodes, size, transform])

  const adjacent = useMemo(() => {
    if (!hoveredId) return new Set<string>()
    const result = new Set<string>([hoveredId])
    layout.edges.forEach(e => {
      if (e.source === hoveredId) result.add(e.target)
      if (e.target === hoveredId) result.add(e.source)
    })
    return result
  }, [hoveredId, layout.edges])

  const onWheel = useCallback((event: React.WheelEvent) => {
    event.preventDefault()
    setTransform(current => ({ ...current, k: clampZoom(current.k * (event.deltaY > 0 ? 0.9 : 1.1)) }))
  }, [])

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    if ((event.target as HTMLElement).closest('button')) return
    panning.current = true
    lastPoint.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const onPointerMove = useCallback((event: React.PointerEvent) => {
    if (!panning.current) return
    const dx = event.clientX - lastPoint.current.x
    const dy = event.clientY - lastPoint.current.y
    lastPoint.current = { x: event.clientX, y: event.clientY }
    setTransform(current => ({ ...current, x: current.x + dx, y: current.y + dy }))
  }, [])

  const recenterOnNode = (node: AtlasV3GraphNode) => {
    const baseX = node.x * size.w
    const baseY = node.y * size.h
    setTransform({ x: size.w / 2 - baseX, y: size.h / 2 - baseY, k: 1 })
    dispatch({ type: 'SELECT_NODE', nodeId: node.id })
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[520px] w-full overflow-hidden bg-library-950 cursor-grab active:cursor-grabbing"
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => { panning.current = false }}
      onPointerLeave={() => { panning.current = false }}
      role="application"
      aria-label="Grafo do Atlas das Seis Ideias"
    >
      {loading ? (
        <div className="absolute inset-0 z-30 grid place-items-center bg-library-950/80">
          <p className="font-sans text-sm text-parchment-200/55">Carregando cartografia…</p>
        </div>
      ) : null}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        {layout.edges.map(graphEdge => {
          const source = projected.get(graphEdge.source)
          const target = projected.get(graphEdge.target)
          if (!source || !target) return null
          const active = !hoveredId || graphEdge.source === hoveredId || graphEdge.target === hoveredId
          const stroke = graphEdge.kind === 'direct' ? '#8b78c7' : graphEdge.kind === 'cross' ? '#c79a43' : '#829087'
          return (
            <line
              key={graphEdge.id}
              x1={source.x} y1={source.y} x2={target.x} y2={target.y}
              stroke={stroke}
              strokeWidth={graphEdge.highlighted ? 2.1 : 1.1}
              strokeDasharray={graphEdge.kind === 'cross' ? '8 6' : graphEdge.kind === 'inferred' ? '2 6' : undefined}
              opacity={active ? (graphEdge.highlighted ? 0.95 : 0.55) : 0.08}
            />
          )
        })}
      </svg>

      {layout.nodes.map(node => {
        const point = projected.get(node.id)
        if (!point) return null
        const radius = KIND_RADIUS[node.kind]
        const selected = selectedNodeId === node.id
        const active = !hoveredId || adjacent.has(node.id)
        return (
          <button
            key={node.id}
            type="button"
            aria-label={`${node.title}${node.subtitle ? ` — ${node.subtitle}` : ''}`}
            aria-pressed={selected}
            onMouseEnter={() => setHoveredId(node.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId(node.id)}
            onBlur={() => setHoveredId(null)}
            onClick={event => {
              event.stopPropagation()
              if (node.action) dispatch(node.action)
              else dispatch({ type: 'SELECT_NODE', nodeId: node.id })
            }}
            onDoubleClick={event => {
              event.stopPropagation()
              recenterOnNode(node)
            }}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-antique-400"
            style={{ left: point.x, top: point.y, opacity: active ? 1 : 0.18 }}
          >
            <span
              className="grid place-items-center rounded-full border bg-library-950/95 transition-transform duration-200"
              style={{
                width: radius * 2 * transform.k,
                height: radius * 2 * transform.k,
                minWidth: 38,
                minHeight: 38,
                borderColor: node.color,
                color: node.color,
                borderWidth: selected ? 2 : 1,
                boxShadow: selected ? `0 0 0 5px ${node.color}18, 0 0 24px ${node.color}2f` : undefined,
              }}
            >
              <NodeIcon node={node} size={Math.max(14, Math.min(22, 18 * transform.k))} />
            </span>
            <span
              className="font-serif leading-[1.12] text-parchment-100"
              style={{
                maxWidth: node.kind === 'topic' ? 102 : 132,
                fontSize: node.kind === 'topic' ? '0.67rem' : '0.76rem',
              }}
            >
              {node.title}
            </span>
            {node.subtitle ? (
              <span className="max-w-[140px] font-sans text-[0.48rem] uppercase tracking-[0.12em] text-parchment-200/45">
                {node.subtitle}
              </span>
            ) : null}
          </button>
        )
      })}

      <div className="absolute bottom-4 left-4 z-20 flex flex-col border border-antique-500/25 bg-library-950/90">
        <button type="button" onClick={() => setTransform(t => ({ ...t, k: clampZoom(t.k * 1.2) }))} className="h-8 w-9 border-b border-antique-500/20 text-antique-400" aria-label="Ampliar">+</button>
        <button type="button" onClick={() => setTransform(t => ({ ...t, k: clampZoom(t.k * 0.82) }))} className="h-8 w-9 border-b border-antique-500/20 text-antique-400" aria-label="Reduzir">−</button>
        <button type="button" onClick={() => setTransform({ x: 0, y: 0, k: 1 })} className="h-8 w-9 text-antique-400" aria-label="Recentrar">◎</button>
      </div>
    </div>
  )
}
