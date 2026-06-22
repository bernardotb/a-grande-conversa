'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import {
  homeIdeas,
  homeEdges,
  nodePositions,
  getConnectedSlugs,
  type HomeIdea,
} from '@/lib/ideas/homeData'

// ── SVG layout constants ───────────────────────────────────────────
const VB = '0 0 560 540'
const SOVEREIGN_R = 38
const RELATED_R   = 30

const IDEA_SLUG_TO_EN: Record<string, string> = {
  verdade: 'Truth',
  bem: 'Goodness',
  beleza: 'Beauty',
  liberdade: 'Liberty',
  igualdade: 'Equality',
  justica: 'Justice',
}

function nodeR(role: HomeIdea['role']) {
  return role === 'soberana' ? SOVEREIGN_R : RELATED_R
}

// ── Main component ─────────────────────────────────────────────────
export function HomeConstellation() {
  const [selected, setSelected] = useState<string | null>(null)

  const select = useCallback((slug: string) => {
    setSelected(prev => (prev === slug ? null : slug))
  }, [])

  const connected = selected ? new Set(getConnectedSlugs(selected)) : new Set<string>()
  const activeIdea = selected ? (homeIdeas.find(i => i.slug === selected) ?? null) : null

  // Opacity helpers
  function nodeOp(slug: string) {
    if (!selected) return 1
    if (slug === selected) return 1
    if (connected.has(slug)) return 0.7
    return 0.22
  }

  function edgeOp(from: string, to: string) {
    if (!selected) return 1
    if ((from === selected || to === selected) && (connected.has(from) || connected.has(to))) return 1
    return 0.08
  }

  const pos = Object.fromEntries(nodePositions.map(p => [p.slug, p]))

  return (
    <section
      id="seis-ideias"
      className="flex min-h-[calc(100vh-5rem)] items-center bg-library-950 px-6 py-12"
      aria-label="Constelação das seis ideias"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section eyebrow */}
        <div className="text-center mb-10">
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-antique-400/50">
            Atlas das Seis Ideias
          </p>
          <h2 className="mt-3 font-serif text-2xl font-light text-parchment-100">
            Seis ideias, uma única conversa
          </h2>
          <p className="mt-2 font-serif text-sm italic text-parchment-200/40">
            Julgar e Agir permanecem juntos. Selecione uma ideia para abrir sua cartografia.
          </p>
        </div>

        {/* Desktop: SVG + info panel side-by-side */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10 lg:items-center">
          <ConstellationSVG
            selected={selected}
            onSelect={select}
            nodeOp={nodeOp}
            edgeOp={edgeOp}
            pos={pos}
          />
          <InfoPanel idea={activeIdea} />
        </div>

        {/* Mobile: SVG stacked + accordion list */}
        <div className="lg:hidden">
          <ConstellationSVG
            selected={selected}
            onSelect={select}
            nodeOp={nodeOp}
            edgeOp={edgeOp}
            pos={pos}
          />
          <div className="mt-6 space-y-1">
            {homeIdeas.map(idea => (
              <MobileIdeaRow
                key={idea.slug}
                idea={idea}
                open={selected === idea.slug}
                onToggle={() => select(idea.slug)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── SVG constellation ──────────────────────────────────────────────
interface SVGProps {
  selected: string | null
  onSelect: (slug: string) => void
  nodeOp: (slug: string) => number
  edgeOp: (from: string, to: string) => number
  pos: Record<string, { cx: number; cy: number }>
}

function ConstellationSVG({ selected, onSelect, nodeOp, edgeOp, pos }: SVGProps) {
  const julgarColor = 'rgba(124,92,212,0.35)'
  const agirColor   = 'rgba(26,106,66,0.30)'

  return (
    <svg
      viewBox={VB}
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-2xl"
      role="img"
      aria-label="Constelação das seis grandes ideias"
    >
      <defs>
        <radialGradient id="hc-julgar" cx="50%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#7c5cd4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7c5cd4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hc-agir" cx="50%" cy="75%" r="50%">
          <stop offset="0%" stopColor="#1a6a42" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#1a6a42" stopOpacity="0" />
        </radialGradient>
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .hc-node { transition: opacity 0.25s ease; }
            .hc-edge { transition: opacity 0.25s ease; }
          }
          .hc-node:focus { outline: 2px solid #b9954f; outline-offset: 4px; }
        `}</style>
      </defs>

      {/* Ambient field glows */}
      <ellipse cx="280" cy="185" rx="230" ry="165" fill="url(#hc-julgar)" />
      <ellipse cx="280" cy="400" rx="220" ry="155" fill="url(#hc-agir)" />

      {/* Axis labels */}
      <rect x="14" y="66" width="60" height="15" rx="2"
        fill="rgba(124,92,212,0.07)" stroke={julgarColor} strokeWidth="0.7" />
      <text x="44" y="77" textAnchor="middle" fontSize="6.5"
        fill="#9b7ce8" fontWeight="700" letterSpacing="0.1em"
        fontFamily="system-ui,sans-serif">
        JULGAR
      </text>

      <rect x="14" y="350" width="46" height="15" rx="2"
        fill="rgba(26,106,66,0.07)" stroke={agirColor} strokeWidth="0.7" />
      <text x="37" y="361" textAnchor="middle" fontSize="6.5"
        fill="#2d8a58" fontWeight="700" letterSpacing="0.1em"
        fontFamily="system-ui,sans-serif">
        AGIR
      </text>

      {/* Edges */}
      {homeEdges.map(edge => {
        const src = pos[edge.from]
        const tgt = pos[edge.to]
        if (!src || !tgt) return null
        const isCross = edge.kind === 'cross'
        const op = edgeOp(edge.from, edge.to)
        return (
          <line
            key={`${edge.from}-${edge.to}`}
            className="hc-edge"
            x1={src.cx} y1={src.cy}
            x2={tgt.cx} y2={tgt.cy}
            stroke={isCross ? '#b9954f' : (edge.from === 'verdade' || edge.to === 'verdade' || edge.from === 'beleza' || edge.to === 'bem' || edge.from === 'bem' ? '#7c5cd4' : '#1a6a42')}
            strokeWidth={isCross ? 0.8 : 0.9}
            strokeDasharray={isCross ? '5 3' : undefined}
            opacity={op * (isCross ? 0.4 : 0.28)}
          />
        )
      })}

      {/* Nodes */}
      {homeIdeas.map(idea => {
        const p = pos[idea.slug]
        if (!p) return null
        const r = nodeR(idea.role)
        const op = nodeOp(idea.slug)
        const isSelected = selected === idea.slug

        return (
          <g
            key={idea.slug}
            className="hc-node"
            style={{ opacity: op, cursor: 'pointer' }}
            onClick={() => onSelect(idea.slug)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onSelect(idea.slug)}
            tabIndex={0}
            role="button"
            aria-pressed={isSelected}
            aria-label={`${idea.publicName} — ${idea.homeQuestion}`}
          >
            {/* Hit area */}
            <circle cx={p.cx} cy={p.cy} r={r + 12} fill="transparent" />
            {/* Ring */}
            <circle
              cx={p.cx} cy={p.cy} r={r}
              fill="rgba(10,24,20,0.97)"
              stroke={idea.color}
              strokeWidth={isSelected ? 2 : 1.4}
              strokeOpacity={isSelected ? 1 : 0.7}
            />
            {/* Icon */}
            <text x={p.cx} y={p.cy - 5} textAnchor="middle" fontSize="11"
              fill={idea.color} opacity={isSelected ? 0.7 : 0.35}
              fontFamily="system-ui">
              {idea.icon}
            </text>
            {/* Label */}
            <text x={p.cx} y={p.cy + 10} textAnchor="middle" fontSize="7.5"
              fill={idea.color} fontWeight="600" opacity={isSelected ? 1 : 0.75}
              fontFamily="system-ui,sans-serif" letterSpacing="0.04em">
              {idea.publicName}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ── Desktop info panel ─────────────────────────────────────────────
function InfoPanel({ idea }: { idea: HomeIdea | null }) {
  if (!idea) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-4">
        <p className="font-serif text-parchment-200/30 italic text-sm leading-6">
          Clique numa ideia para ver sua pergunta central e tensões.
        </p>
      </div>
    )
  }

  const axisLabel = idea.axis === 'julgar' ? 'Campo do Julgar' : 'Campo do Agir'
  const borderColor = idea.axis === 'julgar'
    ? 'border-[rgba(124,92,212,0.3)]'
    : 'border-[rgba(26,106,66,0.3)]'

  return (
    <div
      className={`border-l-2 pl-6 ${borderColor}`}
      style={{ borderLeftColor: idea.color + '55' }}
    >
      <p
        className="font-sans text-[0.58rem] font-bold uppercase tracking-[0.2em] mb-3"
        style={{ color: idea.color + 'aa' }}
      >
        {axisLabel}
      </p>
      <h3 className="font-serif text-xl font-light text-parchment-100 leading-snug">
        {idea.publicName}
      </h3>
      <p className="mt-3 font-serif text-base italic leading-6 text-parchment-200/65">
        "{idea.homeQuestion}"
      </p>

      {/* Tensões */}
      {idea.tensoes.length > 0 && (
        <div className="mt-5">
          <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-antique-400/60 mb-2">
            Tensões
          </p>
          <ul className="space-y-1">
            {idea.tensoes.slice(0, 3).map(t => (
              <li
                key={t.slug}
                className="font-serif text-[0.8rem] text-parchment-200/50 leading-5"
              >
                · {t.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/mapa/sgi?idea=${IDEA_SLUG_TO_EN[idea.slug] ?? idea.slug}`}
          className="border px-4 py-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] transition hover:opacity-80"
          style={{
            borderColor: idea.color + '55',
            color: idea.color,
          }}
        >
          Abrir no Atlas →
        </Link>
        <Link
          href="/acervo"
          className="border border-parchment-100/15 px-4 py-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-parchment-200/45 transition hover:border-parchment-100/30 hover:text-parchment-200/70"
        >
          102 ideias →
        </Link>
      </div>
    </div>
  )
}

// ── Mobile accordion row ───────────────────────────────────────────
function MobileIdeaRow({
  idea,
  open,
  onToggle,
}: {
  idea: HomeIdea
  open: boolean
  onToggle: () => void
}) {
  const axisLabel = idea.axis === 'julgar' ? 'Julgar' : 'Agir'

  return (
    <div
      className="border border-library-700/40 bg-library-900"
      style={{ borderLeftColor: idea.color + '55', borderLeftWidth: '2px' }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="flex items-center gap-3">
          <span style={{ color: idea.color, opacity: 0.6 }} aria-hidden="true">
            {idea.icon}
          </span>
          <span className="font-serif text-base font-light text-parchment-100">
            {idea.publicName}
          </span>
        </span>
        <span
          className="font-sans text-[0.55rem] font-bold uppercase tracking-[0.15em] transition-transform"
          style={{
            color: idea.color + 'aa',
            transform: open ? 'rotate(90deg)' : 'none',
          }}
          aria-hidden="true"
        >
          ›
        </span>
      </button>

      {open && (
        <div className="border-t border-library-700/30 px-5 pb-5 pt-4">
          <p className="font-serif text-sm italic leading-6 text-parchment-200/60">
            "{idea.homeQuestion}"
          </p>
          {idea.tensoes.length > 0 && (
            <ul className="mt-3 space-y-1">
              {idea.tensoes.slice(0, 3).map(t => (
                <li
                  key={t.slug}
                  className="font-serif text-[0.78rem] text-parchment-200/45"
                >
                  · {t.label}
                </li>
              ))}
            </ul>
          )}
          <Link
            href={`/mapa/sgi?idea=${IDEA_SLUG_TO_EN[idea.slug] ?? idea.slug}`}
            className="mt-4 inline-block border px-4 py-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition hover:opacity-75"
            style={{ borderColor: idea.color + '55', color: idea.color }}
          >
            Abrir {idea.publicName} no Atlas →
          </Link>
        </div>
      )}
    </div>
  )
}
