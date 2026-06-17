'use client'

import { useReducer, useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { MapaSidePanel } from './MapaSidePanel'
import { ideiaNodes, autorNodes, type IdeiaNode, type AutorNode } from '@/lib/mapa-data'

type AxisFilter = 'all' | 'julgar' | 'agir'

interface State {
  selectedIdeia: string | null
  selectedAutor: string | null
  activeAxis: AxisFilter
}

type Action =
  | { type: 'SELECT_IDEIA'; id: string }
  | { type: 'DESELECT' }
  | { type: 'SELECT_AUTOR'; id: string }
  | { type: 'CLOSE_PANEL' }
  | { type: 'SET_AXIS'; axis: AxisFilter }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SELECT_IDEIA':
      if (state.selectedIdeia === action.id) {
        return { ...state, selectedIdeia: null, selectedAutor: null }
      }
      return { ...state, selectedIdeia: action.id, selectedAutor: null }
    case 'DESELECT':
      return { ...state, selectedIdeia: null, selectedAutor: null }
    case 'SELECT_AUTOR':
      return { ...state, selectedAutor: action.id }
    case 'CLOSE_PANEL':
      return { ...state, selectedAutor: null }
    case 'SET_AXIS':
      return { ...state, activeAxis: action.axis, selectedIdeia: null, selectedAutor: null }
    default:
      return state
  }
}

interface NodePos {
  x: number
  y: number
  opacity: number
  scale: number
}

function computeIdeiaPos(
  nodes: IdeiaNode[],
  selected: string | null,
  axis: AxisFilter,
  w: number,
  h: number
): Record<string, NodePos> {
  const cx = w / 2
  const cy = h / 2
  const dim = Math.min(w, h)
  const hexR = dim * 0.28
  const outerR = dim * 0.42

  const result: Record<string, NodePos> = {}
  nodes.forEach((node, i) => {
    const angle = ((-90 + i * 60) * Math.PI) / 180
    const axisHidden = axis !== 'all' && node.axis !== axis

    if (selected === node.id) {
      result[node.id] = { x: cx, y: cy, opacity: 1, scale: 1.15 }
    } else if (selected !== null) {
      result[node.id] = {
        x: cx + outerR * Math.cos(angle),
        y: cy + outerR * Math.sin(angle),
        opacity: axisHidden ? 0 : 0.22,
        scale: 0.82,
      }
    } else {
      result[node.id] = {
        x: cx + hexR * Math.cos(angle),
        y: cy + hexR * Math.sin(angle),
        opacity: axisHidden ? 0 : 1,
        scale: 1,
      }
    }
  })
  return result
}

function computeAutorPos(
  autors: AutorNode[],
  selectedIdeia: string | null,
  cx: number,
  cy: number
): Record<string, NodePos> {
  const result: Record<string, NodePos> = {}

  if (!selectedIdeia) {
    autors.forEach((a) => {
      result[a.id] = { x: cx, y: cy, opacity: 0, scale: 0 }
    })
    return result
  }

  const relevant = autors.filter((a) => a.relatedIdeia === selectedIdeia)
  const AUTOR_R = 175

  relevant.forEach((autor, j) => {
    const total = relevant.length
    const angle = ((-90 + (j * 360) / total) * Math.PI) / 180
    result[autor.id] = {
      x: cx + AUTOR_R * Math.cos(angle),
      y: cy + AUTOR_R * Math.sin(angle),
      opacity: 1,
      scale: 1,
    }
  })

  autors
    .filter((a) => a.relatedIdeia !== selectedIdeia)
    .forEach((a) => {
      result[a.id] = { x: cx, y: cy, opacity: 0, scale: 0 }
    })

  return result
}

export function MapaIntelectualSGI() {
  const [state, dispatch] = useReducer(reducer, {
    selectedIdeia: null,
    selectedAutor: null,
    activeAxis: 'all',
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 900, h: 600 })

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

  const ideiaPos = computeIdeiaPos(ideiaNodes, state.selectedIdeia, state.activeAxis, w, h)
  const autorPos = computeAutorPos(autorNodes, state.selectedIdeia, cx, cy)

  const selectedIdeia = ideiaNodes.find((n) => n.id === state.selectedIdeia) ?? null
  const selectedAutor = autorNodes.find((a) => a.id === state.selectedAutor) ?? null
  const visibleAutors = state.selectedIdeia
    ? autorNodes.filter((a) => a.relatedIdeia === state.selectedIdeia)
    : []

  const handleBgClick = useCallback(() => {
    dispatch({ type: 'DESELECT' })
  }, [])

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-library-950">

      {/* ── Axis filter ── */}
      <div className="absolute left-1/2 top-5 z-10 flex -translate-x-1/2 gap-1 rounded-full border border-library-700/50 bg-library-900/80 p-1 backdrop-blur">
        {(['all', 'julgar', 'agir'] as const).map((ax) => {
          const active = state.activeAxis === ax
          const activeClass =
            ax === 'julgar'
              ? 'bg-violet-700 text-white'
              : ax === 'agir'
              ? 'bg-green-700 text-white'
              : 'bg-antique-500/80 text-library-950'
          return (
            <button
              key={ax}
              type="button"
              onClick={() => dispatch({ type: 'SET_AXIS', axis: ax })}
              className={`rounded-full px-4 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.15em] transition ${
                active ? activeClass : 'text-parchment-200/50 hover:text-parchment-100'
              }`}
            >
              {ax === 'all' ? 'Todas' : ax === 'julgar' ? 'Julgar' : 'Agir'}
            </button>
          )
        })}
      </div>

      {/* ── Background tap to deselect ── */}
      <div
        className="absolute inset-0 z-0"
        onClick={handleBgClick}
        aria-hidden="true"
      />

      {/* ── SVG edges ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* Hex ring edges when nothing selected */}
        {!state.selectedIdeia &&
          ideiaNodes.map((_, i) => {
            const a = ideiaNodes[i]
            const b = ideiaNodes[(i + 1) % ideiaNodes.length]
            const pa = ideiaPos[a.id]
            const pb = ideiaPos[b.id]
            if (pa.opacity === 0 || pb.opacity === 0) return null
            return (
              <line
                key={`ring-${i}`}
                x1={pa.x} y1={pa.y}
                x2={pb.x} y2={pb.y}
                stroke="rgba(180,160,80,0.12)"
                strokeWidth="1"
              />
            )
          })}

        {/* Spoke edges from selected idea to authors */}
        {state.selectedIdeia &&
          visibleAutors.map((autor) => {
            const ap = autorPos[autor.id]
            const ip = ideiaPos[state.selectedIdeia!]
            if (!ap || !ip || ap.opacity === 0) return null
            return (
              <line
                key={`spoke-${autor.id}`}
                x1={ip.x} y1={ip.y}
                x2={ap.x} y2={ap.y}
                stroke="rgba(180,160,80,0.2)"
                strokeWidth="1"
              />
            )
          })}
      </svg>

      {/* ── Author nodes ── */}
      {autorNodes.map((autor) => {
        const pos = autorPos[autor.id]
        if (!pos || pos.opacity === 0) return null
        const initials = autor.name
          .split(' ')
          .filter((w) => w.length > 2)
          .slice(-1)[0]
          ?.slice(0, 2) ?? '—'
        return (
          <button
            key={autor.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              dispatch({ type: 'SELECT_AUTOR', id: autor.id })
            }}
            aria-label={`Ver posição de ${autor.name}`}
            className="absolute z-10"
            style={{
              left: pos.x,
              top: pos.y,
              opacity: pos.opacity,
              transform: `translate(-50%, -50%) scale(${pos.scale})`,
              transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-antique-500/50 bg-library-900 font-sans text-xs font-semibold text-parchment-100/80 transition hover:border-antique-400 hover:text-antique-400">
                {initials}
              </div>
              <span className="whitespace-nowrap font-sans text-[0.58rem] text-parchment-200/55">
                {autor.name.split(' ')[0]}
              </span>
            </div>
          </button>
        )
      })}

      {/* ── Idea nodes ── */}
      {ideiaNodes.map((node) => {
        const pos = ideiaPos[node.id]
        const isSelected = state.selectedIdeia === node.id
        return (
          <button
            key={node.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              dispatch({ type: 'SELECT_IDEIA', id: node.id })
            }}
            aria-label={`Explorar ${node.label}`}
            aria-pressed={isSelected}
            className="absolute z-10"
            style={{
              left: pos.x,
              top: pos.y,
              opacity: pos.opacity,
              transform: `translate(-50%, -50%) scale(${pos.scale})`,
              transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="grid place-items-center rounded-full border-2 transition-all duration-300"
                style={{
                  width: isSelected ? 80 : 56,
                  height: isSelected ? 80 : 56,
                  borderColor: node.color,
                  backgroundColor: isSelected ? `${node.color}22` : 'transparent',
                  boxShadow: isSelected ? `0 0 36px ${node.color}44` : undefined,
                }}
              >
                <span
                  className="font-sans transition-all duration-300"
                  style={{
                    fontSize: isSelected ? '1.5rem' : '1.2rem',
                    color: node.color,
                  }}
                >
                  {node.icon}
                </span>
              </div>
              <span
                className="whitespace-nowrap font-sans font-semibold transition-all duration-300"
                style={{
                  fontSize: isSelected ? '0.875rem' : '0.7rem',
                  color: node.color,
                }}
              >
                {node.label}
              </span>
              {isSelected && (
                <Link
                  href={node.linkTo}
                  onClick={(e) => e.stopPropagation()}
                  className="mt-0.5 rounded border border-antique-500/40 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-antique-400 transition hover:bg-antique-400/10"
                >
                  Explorar →
                </Link>
              )}
            </div>
          </button>
        )
      })}

      {/* ── Legend ── */}
      {!state.selectedIdeia && (
        <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="block h-px w-5 bg-violet-700" />
            <span className="font-sans text-[0.58rem] uppercase tracking-wider text-parchment-200/35">
              Julgar
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block h-px w-5 bg-green-700" />
            <span className="font-sans text-[0.58rem] uppercase tracking-wider text-parchment-200/35">
              Agir
            </span>
          </div>
        </div>
      )}

      {!state.selectedIdeia && (
        <p className="absolute bottom-5 right-5 z-10 font-sans text-[0.58rem] text-parchment-200/25">
          Clique em uma ideia para explorar
        </p>
      )}

      {/* ── Side panel ── */}
      <MapaSidePanel
        autor={selectedAutor}
        onClose={() => dispatch({ type: 'CLOSE_PANEL' })}
      />
    </div>
  )
}
