'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import type { LevelLayout, LayoutNode } from '@/lib/atlas-six-ideas/level-layout'
import type { AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'

interface Transform { x: number; y: number; k: number }
function clampK(k: number) { return Math.min(Math.max(k, 0.18), 5) }

interface Props {
  layout: LevelLayout
  selectedNodeId: string | null
  dispatch: (action: AtlasAction) => void
  loading?: boolean
  level: string
}

export function AtlasGraphV2({ layout, selectedNodeId, dispatch, loading, level }: Props) {
  const [tf, setTf] = useState<Transform>({ x: 0, y: 0, k: 1 })
  const isPanning = useRef(false)
  const lastXY = useRef({ x: 0, y: 0 })
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // Reset transform when level changes
  useEffect(() => { setTf({ x: 0, y: 0, k: 1 }) }, [level])

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const factor = e.deltaY > 0 ? 0.9 : 1.11
    setTf(t => ({ ...t, k: clampK(t.k * factor) }))
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as Element).closest('button')) return
    isPanning.current = true
    lastXY.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current) return
    const dx = e.clientX - lastXY.current.x
    const dy = e.clientY - lastXY.current.y
    lastXY.current = { x: e.clientX, y: e.clientY }
    setTf(t => ({ ...t, x: t.x + dx, y: t.y + dy }))
  }, [])

  const onPointerUp = useCallback(() => { isPanning.current = false }, [])

  const transition = reducedMotion.current ? 'none' : 'all 0.42s cubic-bezier(0.4,0,0.2,1)'

  const handleNodeClick = (node: LayoutNode) => {
    if (node.isVirtual) {
      const groupId = node.id === 'virtual-adler' ? 'adler'
        : node.id === 'virtual-syntopicon' ? 'syntopicon'
        : node.id === 'virtual-reservoir' ? 'reservoir'
        : null
      if (groupId) dispatch({ type: 'OPEN_GROUP', groupId })
      return
    }
    switch (node.type) {
      case 'idea':
        if (node.idea) dispatch({ type: 'SELECT_IDEA', ideaId: node.idea })
        break
      case 'syntopicon_topic':
        dispatch({ type: 'SELECT_TOPIC', topicId: node.id })
        break
      case 'syntopicon_subtopic':
        dispatch({ type: 'SELECT_SUBTOPIC', subtopicId: node.id })
        break
      default:
        dispatch({ type: 'OPEN_INSPECTOR' })
    }
  }

  const edgeDash = (edge: { dashed?: boolean; doubleDash?: boolean }) => {
    if (edge.doubleDash) return '5,2,1,2'
    if (edge.dashed) return '4,4'
    return undefined
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-library-950 cursor-grab active:cursor-grabbing select-none"
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      role="application"
      aria-label="Atlas das Seis Ideias"
    >
      {/* Sphere labels */}
      <div className="pointer-events-none absolute inset-x-0 top-3 z-10 flex justify-around px-8" aria-hidden="true">
        <span className="font-sans text-[0.52rem] uppercase tracking-[0.22em] text-violet-400/25">Julgar</span>
        <span className="font-sans text-[0.52rem] uppercase tracking-[0.22em] text-green-600/25">Agir</span>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-library-950/70">
          <p className="font-sans text-sm text-parchment-200/40 animate-pulse">Carregando corpus…</p>
        </div>
      )}

      {/* Background tap → go back */}
      <div
        className="absolute inset-0 z-0"
        onClick={() => dispatch({ type: 'GO_BACK' })}
        aria-hidden="true"
      />

      {/* SVG edges */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <g transform={`translate(${tf.x},${tf.y}) scale(${tf.k})`}>
          {layout.edges.map(edge => {
            const src = layout.nodes.find(n => n.id === edge.source)
            const tgt = layout.nodes.find(n => n.id === edge.target)
            if (!src || !tgt) return null
            return (
              <line
                key={edge.id}
                x1={src.x} y1={src.y}
                x2={tgt.x} y2={tgt.y}
                stroke={`rgba(180,160,80,${edge.opacity})`}
                strokeWidth={edge.strokeWidth / Math.max(tf.k, 0.5)}
                strokeDasharray={edgeDash(edge)}
              />
            )
          })}
        </g>
      </svg>

      {/* Nodes */}
      {layout.nodes.map(node => {
        const isSelected = node.id === selectedNodeId
        const label = node.title ?? node.label ?? node.id
        const shortLabel = label.length > 24 ? label.slice(0, 22) + '…' : label

        return (
          <button
            key={node.id}
            type="button"
            aria-label={label}
            aria-pressed={isSelected}
            onClick={e => { e.stopPropagation(); handleNodeClick(node) }}
            className="absolute z-10 flex flex-col items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-antique-400"
            style={{
              left: node.x + tf.x,
              top: node.y + tf.y,
              transform: `translate(-50%, -50%) scale(${node.scale * tf.k})`,
              opacity: node.opacity,
              transition,
            }}
          >
            {/* Circle */}
            <div
              className="relative grid place-items-center rounded-full border-2 transition-all"
              style={{
                width: node.radius * 2,
                height: node.radius * 2,
                borderColor: node.color,
                backgroundColor: isSelected ? `${node.color}28` : `${node.color}0c`,
                boxShadow: isSelected ? `0 0 22px ${node.color}55` : undefined,
              }}
            >
              {node.refCount !== undefined && node.refCount > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 min-w-[18px] rounded-full px-1 text-center font-sans text-[0.48rem] font-bold leading-[18px]"
                  style={{ backgroundColor: node.color, color: '#0a1814' }}
                >
                  {node.refCount > 999 ? '999+' : node.refCount}
                </span>
              )}
            </div>

            {/* Label */}
            <span
              className="pointer-events-none max-w-[110px] text-center font-sans leading-tight"
              style={{
                fontSize: node.type === 'idea' ? '0.62rem' : '0.53rem',
                color: node.color,
                fontWeight: node.type === 'idea' ? 600 : 400,
              }}
            >
              {shortLabel}
            </span>
          </button>
        )
      })}

      {/* Zoom controls */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1">
        {[
          { label: '+', title: 'Ampliar',  fn: () => setTf(t => ({ ...t, k: clampK(t.k * 1.3) })) },
          { label: '−', title: 'Reduzir',  fn: () => setTf(t => ({ ...t, k: clampK(t.k * 0.77) })) },
          { label: '⊙', title: 'Recentrar', fn: () => setTf({ x: 0, y: 0, k: 1 }) },
        ].map(({ label, title, fn }) => (
          <button
            key={title}
            type="button"
            title={title}
            aria-label={title}
            onClick={fn}
            className="grid h-7 w-7 place-items-center rounded border border-antique-500/20 bg-library-900/80 font-sans text-xs text-parchment-200/50 hover:border-antique-400/50 hover:text-antique-400 transition"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Back button */}
      {level !== 'home' && (
        <button
          type="button"
          onClick={e => { e.stopPropagation(); dispatch({ type: 'GO_BACK' }) }}
          className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded border border-antique-500/25 bg-library-900/80 px-3 py-1.5 font-sans text-xs text-parchment-200/55 hover:border-antique-400/45 hover:text-antique-400 transition"
        >
          ← Voltar
        </button>
      )}
    </div>
  )
}
