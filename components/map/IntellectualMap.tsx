'use client'

import { useReducer, useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { getGreatIdeas } from '@/lib/graph/utils'
import {
  getMainEdges,
  getSatelliteNodes,
  type SatelliteNode,
  type SatelliteOptions,
} from '@/lib/graph/mapSelectors'
import { getRelationStyle } from './relationStyles'
import { GraphDrawer } from './GraphDrawer'

// ── Display constants (visual layer only, not philosophical data) ─────────────

const POSITION_RATIOS: Record<string, { xR: number; yR: number }> = {
  'idea-truth':    { xR: 0.50, yR: 0.18 },
  'idea-beauty':   { xR: 0.22, yR: 0.40 },
  'idea-goodness': { xR: 0.78, yR: 0.40 },
  'idea-liberty':  { xR: 0.22, yR: 0.68 },
  'idea-equality': { xR: 0.78, yR: 0.68 },
  'idea-justice':  { xR: 0.50, yR: 0.85 },
}

const IDEA_COLORS: Record<string, string> = {
  'idea-truth':    '#7c5cd4',
  'idea-goodness': '#6248b8',
  'idea-beauty':   '#9260c4',
  'idea-liberty':  '#2d8a58',
  'idea-equality': '#247b4e',
  'idea-justice':  '#1a6a42',
}

const IDEA_ICONS: Record<string, string> = {
  'idea-truth':    '◎',
  'idea-goodness': '◈',
  'idea-beauty':   '◇',
  'idea-liberty':  '◯',
  'idea-equality': '⊜',
  'idea-justice':  '⊖',
}

// Base angle (degrees) for the satellite fan around each idea
const SAT_START_ANGLE: Record<string, number> = {
  'idea-truth':    70,
  'idea-beauty':   -20,
  'idea-goodness': 160,
  'idea-liberty':  -20,
  'idea-equality': 160,
  'idea-justice':  -110,
}

const SAT_COLORS: Record<SatelliteNode['kind'], string> = {
  author:  '#b9954f',
  work:    '#4a7aaa',
  tension: '#c06060',
}

const SAT_R = 150

// ── State ─────────────────────────────────────────────────────────────────────

type AxisFilter = 'todos' | 'julgar' | 'agir'

type MapState = {
  selectedIdeaId: string | null
  drawerNodeId: string | null
  zoom: number
  activeAxis: AxisFilter
  showAuthors: boolean
  showWorks: boolean
  showTensions: boolean
}

type MapAction =
  | { type: 'SELECT_IDEA'; id: string }
  | { type: 'DESELECT' }
  | { type: 'OPEN_DRAWER'; nodeId: string }
  | { type: 'CLOSE_DRAWER' }
  | { type: 'SET_AXIS'; axis: AxisFilter }
  | { type: 'ZOOM_IN' }
  | { type: 'ZOOM_OUT' }
  | { type: 'RESET' }
  | { type: 'TOGGLE_AUTHORS' }
  | { type: 'TOGGLE_WORKS' }
  | { type: 'TOGGLE_TENSIONS' }

const INIT: MapState = {
  selectedIdeaId: null,
  drawerNodeId:   null,
  zoom:           1,
  activeAxis:     'todos',
  showAuthors:    true,
  showWorks:      false,
  showTensions:   false,
}

function reducer(state: MapState, action: MapAction): MapState {
  switch (action.type) {
    case 'SELECT_IDEA':
      if (state.selectedIdeaId === action.id)
        return { ...state, selectedIdeaId: null, drawerNodeId: null }
      return { ...state, selectedIdeaId: action.id, drawerNodeId: null }
    case 'DESELECT':
      return { ...state, selectedIdeaId: null, drawerNodeId: null }
    case 'OPEN_DRAWER':
      return { ...state, drawerNodeId: action.nodeId }
    case 'CLOSE_DRAWER':
      return { ...state, drawerNodeId: null }
    case 'SET_AXIS':
      return { ...state, activeAxis: action.axis, selectedIdeaId: null, drawerNodeId: null }
    case 'ZOOM_IN':
      return { ...state, zoom: Math.min(2, parseFloat((state.zoom + 0.2).toFixed(1))) }
    case 'ZOOM_OUT':
      return { ...state, zoom: Math.max(0.4, parseFloat((state.zoom - 0.2).toFixed(1))) }
    case 'RESET':
      return INIT
    case 'TOGGLE_AUTHORS':
      return { ...state, showAuthors: !state.showAuthors }
    case 'TOGGLE_WORKS':
      return { ...state, showWorks: !state.showWorks }
    case 'TOGGLE_TENSIONS':
      return { ...state, showTensions: !state.showTensions }
    default:
      return state
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function satellitePositions(
  satellites: SatelliteNode[],
  ideaId: string,
  cx: number,
  cy: number,
): { x: number; y: number }[] {
  const n = satellites.length
  if (n === 0) return []
  const base = SAT_START_ANGLE[ideaId] ?? 0
  const spread = n === 1 ? 0 : Math.min(220, (n - 1) * 32)
  return satellites.map((_, i) => {
    const offset = n === 1 ? 0 : -spread / 2 + (i * spread) / (n - 1)
    const rad = ((base + offset) * Math.PI) / 180
    return { x: cx + SAT_R * Math.cos(rad), y: cy + SAT_R * Math.sin(rad) }
  })
}

// ── Mobile fallback ────────────────────────────────────────────────────────────

function MobileFallback() {
  const ideas = getGreatIdeas()
  return (
    <div className="flex h-full flex-col overflow-y-auto p-6">
      <p className="mb-4 font-sans text-xs text-parchment-200/35">
        O mapa interativo está disponível em telas maiores.
      </p>
      <ul className="space-y-2">
        {ideas.map((idea) => (
          <li key={idea.id}>
            <Link
              href={`/ideias/${idea.slug}`}
              className="flex items-center gap-3 rounded-lg border border-library-700/40 bg-library-900/60 px-4 py-3 transition hover:border-antique-500/40"
            >
              <span className="text-lg" style={{ color: IDEA_COLORS[idea.id] }}>
                {IDEA_ICONS[idea.id]}
              </span>
              <span className="font-sans text-sm font-semibold text-parchment-100">
                {idea.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export function IntellectualMap() {
  const [state, dispatch] = useReducer(reducer, INIT)
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 900, h: 600 })
  const [hoveredEdgeId, setHoveredEdgeId] = useState<string | null>(null)

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

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      dispatch({ type: e.deltaY < 0 ? 'ZOOM_IN' : 'ZOOM_OUT' })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const { w, h } = size
  const isMobile = w < 600

  const greatIdeas = getGreatIdeas()

  const ideaPos: Record<string, { x: number; y: number }> = {}
  greatIdeas.forEach((idea) => {
    const r = POSITION_RATIOS[idea.id] ?? { xR: 0.5, yR: 0.5 }
    ideaPos[idea.id] = { x: r.xR * w, y: r.yR * h }
  })

  const satOpts: SatelliteOptions = {
    showAuthors: state.showAuthors,
    showWorks:   state.showWorks,
    showTensions: state.showTensions,
  }
  const satellites = state.selectedIdeaId
    ? getSatelliteNodes(state.selectedIdeaId, satOpts)
    : []
  const selPos = state.selectedIdeaId ? ideaPos[state.selectedIdeaId] : null
  const satPos = selPos
    ? satellitePositions(satellites, state.selectedIdeaId!, selPos.x, selPos.y)
    : []

  const mainEdges = getMainEdges()

  const isVisible = (id: string) => {
    if (state.activeAxis === 'todos') return true
    const ax = greatIdeas.find((g) => g.id === id)?.axis
    if (state.activeAxis === 'julgar') return ax === 'como_julgamos'
    return ax === 'como_agimos'
  }

  const handleBgClick = useCallback(() => dispatch({ type: 'DESELECT' }), [])

  const LAYER_TOGGLES = [
    { label: 'Autores', active: state.showAuthors, color: SAT_COLORS.author,  onClick: () => dispatch({ type: 'TOGGLE_AUTHORS' }) },
    { label: 'Obras',   active: state.showWorks,   color: SAT_COLORS.work,    onClick: () => dispatch({ type: 'TOGGLE_WORKS' }) },
    { label: 'Tensões', active: state.showTensions, color: SAT_COLORS.tension, onClick: () => dispatch({ type: 'TOGGLE_TENSIONS' }) },
  ]

  if (isMobile) {
    return (
      <div ref={containerRef} className="relative h-full w-full bg-library-950 text-parchment-100">
        <MobileFallback />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full select-none overflow-hidden bg-library-950"
    >
      {/* ── Zoomable canvas (also handles background click-to-deselect) ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          transform: `scale(${state.zoom})`,
          transformOrigin: 'center center',
          transition: 'transform 0.18s ease',
        }}
        onClick={handleBgClick}
      >
        {/* SVG edge layer */}
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          {/* Main idea-to-idea edges */}
          {mainEdges.map((edge) => {
            const src = ideaPos[edge.source]
            const tgt = ideaPos[edge.target]
            if (!src || !tgt) return null
            if (!isVisible(edge.source) || !isVisible(edge.target)) return null
            const style = getRelationStyle(edge.relation)
            const isActive =
              state.selectedIdeaId === edge.source ||
              state.selectedIdeaId === edge.target
            const isHovered = hoveredEdgeId === edge.id
            const opacity = state.selectedIdeaId
              ? isActive ? 0.85 : 0.07
              : 0.32
            const mx = (src.x + tgt.x) / 2
            const my = (src.y + tgt.y) / 2
            return (
              <g
                key={edge.id}
                onMouseEnter={() => setHoveredEdgeId(edge.id)}
                onMouseLeave={() => setHoveredEdgeId(null)}
              >
                {/* Wide invisible hit area */}
                <line
                  x1={src.x} y1={src.y}
                  x2={tgt.x} y2={tgt.y}
                  stroke="transparent"
                  strokeWidth={18}
                  style={{ cursor: 'default' }}
                />
                {/* Visible edge */}
                <line
                  x1={src.x} y1={src.y}
                  x2={tgt.x} y2={tgt.y}
                  stroke={style.color}
                  strokeWidth={style.strokeWidth}
                  strokeDasharray={style.dashArray || undefined}
                  opacity={opacity}
                  style={{ pointerEvents: 'none' }}
                />
                {/* Relation label */}
                {(isHovered || isActive) && (
                  <text
                    x={mx}
                    y={my - 7}
                    textAnchor="middle"
                    fontSize="8.5"
                    fill={style.color}
                    opacity={isHovered ? 0.9 : 0.5}
                    style={{ pointerEvents: 'none', fontFamily: 'sans-serif' }}
                  >
                    {style.verb}
                  </text>
                )}
              </g>
            )
          })}

          {/* Satellite spokes */}
          {selPos &&
            satPos.map((pos, i) => (
              <line
                key={`spoke-${satellites[i]?.node.id}`}
                x1={selPos.x} y1={selPos.y}
                x2={pos.x} y2={pos.y}
                stroke="rgba(185,149,79,0.18)"
                strokeWidth={1}
                style={{ pointerEvents: 'none' }}
              />
            ))}
        </svg>

        {/* Great idea nodes */}
        {greatIdeas.map((idea) => {
          const pos = ideaPos[idea.id]
          const isSelected = state.selectedIdeaId === idea.id
          const color = IDEA_COLORS[idea.id] ?? '#7c5cd4'
          const visible = isVisible(idea.id)
          return (
            <button
              key={idea.id}
              type="button"
              aria-label={`Explorar ${idea.label}`}
              aria-pressed={isSelected}
              onClick={(e) => {
                e.stopPropagation()
                dispatch({ type: 'SELECT_IDEA', id: idea.id })
              }}
              className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 transition-all duration-300"
              style={{
                left: pos.x,
                top:  pos.y,
                opacity: visible ? 1 : 0.1,
              }}
            >
              <div
                className="grid place-items-center rounded-full border-2 transition-all duration-300"
                style={{
                  width:           isSelected ? 78 : 54,
                  height:          isSelected ? 78 : 54,
                  borderColor:     color,
                  backgroundColor: isSelected ? `${color}22` : 'transparent',
                  boxShadow:       isSelected ? `0 0 32px ${color}55` : undefined,
                }}
              >
                <span style={{ fontSize: isSelected ? '1.5rem' : '1.1rem', color }}>
                  {IDEA_ICONS[idea.id]}
                </span>
              </div>
              <span
                className="whitespace-nowrap font-sans font-semibold transition-all duration-300"
                style={{ fontSize: isSelected ? '0.8rem' : '0.65rem', color }}
              >
                {idea.label}
              </span>
              {isSelected && (
                <Link
                  href={`/ideias/${idea.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-0.5 rounded border border-antique-500/40 px-3 py-0.5 font-sans text-[0.56rem] font-semibold uppercase tracking-widest text-antique-400 transition hover:bg-antique-400/10"
                >
                  Explorar →
                </Link>
              )}
            </button>
          )
        })}

        {/* Satellite nodes */}
        <AnimatePresence>
          {satellites.map((sat, i) => {
            const pos = satPos[i]
            if (!pos) return null
            const color = SAT_COLORS[sat.kind]
            const label = sat.node.label
            const initials = label
              .split(' ')
              .filter((w) => w.length > 2)
              .slice(-1)[0]
              ?.slice(0, 2) ?? '??'
            const icon =
              sat.kind === 'author' ? initials : sat.kind === 'work' ? '◉' : '◈'
            const isOpen = state.drawerNodeId === sat.node.id
            return (
              <motion.button
                key={sat.node.id}
                type="button"
                aria-label={`Ver detalhes: ${label}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 28,
                  delay: i * 0.035,
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  dispatch({ type: 'OPEN_DRAWER', nodeId: sat.node.id })
                }}
                className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                style={{ left: pos.x, top: pos.y }}
              >
                <div
                  className="grid h-8 w-8 place-items-center rounded-full border transition-all duration-200"
                  style={{
                    borderColor:     color,
                    backgroundColor: isOpen ? `${color}30` : 'transparent',
                    boxShadow:       isOpen ? `0 0 10px ${color}55` : undefined,
                  }}
                >
                  <span
                    className="font-sans text-[0.58rem] font-semibold"
                    style={{ color }}
                  >
                    {icon}
                  </span>
                </div>
                <span
                  className="max-w-[72px] truncate font-sans text-[0.52rem]"
                  style={{ color }}
                >
                  {label}
                </span>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>

      {/* ── Axis filter (outside zoom) ─────────────────────────────────── */}
      <div className="absolute left-1/2 top-4 z-20 flex -translate-x-1/2 gap-1 rounded-full border border-library-700/50 bg-library-900/80 p-1 backdrop-blur">
        {(['todos', 'julgar', 'agir'] as const).map((ax) => {
          const isActive = state.activeAxis === ax
          const activeClass =
            ax === 'julgar' ? 'bg-violet-700 text-white' :
            ax === 'agir'   ? 'bg-green-700 text-white' :
            'bg-antique-500/80 text-library-950'
          return (
            <button
              key={ax}
              type="button"
              onClick={() => dispatch({ type: 'SET_AXIS', axis: ax })}
              className={`rounded-full px-4 py-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.15em] transition ${
                isActive
                  ? activeClass
                  : 'text-parchment-200/45 hover:text-parchment-100'
              }`}
            >
              {ax === 'todos' ? 'Todas' : ax === 'julgar' ? 'Julgar' : 'Agir'}
            </button>
          )
        })}
      </div>

      {/* ── Satellite layer toggles (outside zoom) ────────────────────── */}
      <AnimatePresence>
        {state.selectedIdeaId && (
          <motion.div
            key="toggles"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2"
          >
            {LAYER_TOGGLES.map(({ label, active, color, onClick }) => (
              <button
                key={label}
                type="button"
                onClick={onClick}
                className="flex items-center gap-2 rounded-full border px-3 py-1.5 font-sans text-[0.56rem] font-semibold uppercase tracking-wider transition"
                style={{
                  borderColor:     active ? color : 'rgba(180,160,80,0.18)',
                  color:           active ? color : 'rgba(220,200,150,0.28)',
                  backgroundColor: active ? `${color}12` : 'transparent',
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition"
                  style={{ backgroundColor: active ? color : 'rgba(180,160,80,0.18)' }}
                />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Zoom controls (outside zoom) ──────────────────────────────── */}
      <div className="absolute bottom-5 right-5 z-20 flex flex-col gap-1">
        {[
          { action: 'ZOOM_IN' as const,  icon: <ZoomIn size={13} />,    label: 'Ampliar' },
          { action: 'ZOOM_OUT' as const, icon: <ZoomOut size={13} />,   label: 'Reduzir' },
          { action: 'RESET' as const,    icon: <RotateCcw size={13} />, label: 'Resetar' },
        ].map(({ action, icon, label }) => (
          <button
            key={action}
            type="button"
            aria-label={label}
            onClick={() => dispatch({ type: action })}
            className="grid h-8 w-8 place-items-center rounded border border-library-700/50 bg-library-900/80 text-parchment-200/55 backdrop-blur transition hover:text-parchment-100"
          >
            {icon}
          </button>
        ))}
        <span className="text-center font-sans text-[0.48rem] text-parchment-200/22">
          {Math.round(state.zoom * 100)}%
        </span>
      </div>

      {/* ── Hint ──────────────────────────────────────────────────────── */}
      {!state.selectedIdeaId && (
        <p className="absolute bottom-5 left-5 z-20 font-sans text-[0.52rem] text-parchment-200/18">
          Clique numa ideia · Scroll para zoom
        </p>
      )}

      {/* ── Drawer ────────────────────────────────────────────────────── */}
      <GraphDrawer
        nodeId={state.drawerNodeId}
        onClose={() => dispatch({ type: 'CLOSE_DRAWER' })}
      />
    </div>
  )
}
