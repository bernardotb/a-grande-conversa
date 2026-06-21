'use client'

import { useState, useRef, useEffect } from 'react'
import type { AtlasMode, AtlasSearchItem } from '@/lib/atlas-six-ideas/types'
import {
  IDEA_NUMBER_ORDER,
  IDEA_VISUAL_IDENTITY,
  IDEA_PT_TITLE,
  IDEA_EN_TO_PT,
} from '@/lib/atlas-six-ideas/types'
import type { AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'
import { searchIndex } from '@/lib/atlas-six-ideas/selectors'

interface Props {
  selectedIdeaId: string | null
  selectedMode: AtlasMode
  dispatch: (a: AtlasAction) => void
  searchItems: AtlasSearchItem[]
}

const MODE_LABELS: Record<AtlasMode, string> = {
  adler: 'Adler',
  syntopicon: 'Syntopicon',
  fused: 'Fundida',
}

const MODE_DESC: Record<AtlasMode, string> = {
  adler: 'Síntese de Adler — aspectos e capítulos',
  syntopicon: 'Corpus documental — tópicos e referências',
  fused: 'Vista integrada — correspondências Adler ↔ Syntopicon',
}

const TYPE_PT: Record<string, string> = {
  idea: 'Ideias',
  adler_aspect: 'Aspectos',
  syntopicon_topic: 'Tópicos',
  syntopicon_subtopic: 'Subtópicos',
  author: 'Autores',
  reference: 'Referências',
}
const TYPE_ORDER = ['idea', 'adler_aspect', 'syntopicon_topic', 'syntopicon_subtopic', 'author', 'reference']

export function AtlasControlsV2({ selectedIdeaId, selectedMode, dispatch, searchItems }: Props) {
  const [query, setQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const results = query.trim().length >= 2 ? searchIndex(searchItems, query, 36) : []
  const grouped: Record<string, AtlasSearchItem[]> = {}
  results.forEach(r => {
    if (!grouped[r.type]) grouped[r.type] = []
    grouped[r.type].push(r)
  })

  const handleSelect = (item: AtlasSearchItem) => {
    setQuery('')
    setShowResults(false)
    if (item.idea && item.idea !== selectedIdeaId) {
      dispatch({ type: 'SELECT_IDEA', ideaId: item.idea })
    }
    if (item.type === 'syntopicon_topic') {
      dispatch({ type: 'SELECT_TOPIC', topicId: item.id })
    } else if (item.type === 'syntopicon_subtopic') {
      dispatch({ type: 'SELECT_SUBTOPIC', subtopicId: item.id })
    }
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="flex h-full w-full flex-col gap-5 overflow-y-auto border-r border-antique-500/15 bg-library-900/75 p-5">
      {/* Header */}
      <div>
        <p className="font-sans text-[0.52rem] uppercase tracking-[0.22em] text-antique-400/65">
          Atlas das Seis Ideias
        </p>
        <p className="mt-1 font-display text-lg text-parchment-100/75">Syntopicon</p>
      </div>

      {/* Mode selector */}
      <div>
        <p className="mb-2 font-sans text-[0.5rem] uppercase tracking-[0.18em] text-parchment-100/35">Modo de leitura</p>
        <div className="grid grid-cols-3 gap-1">
          {(Object.keys(MODE_LABELS) as AtlasMode[]).map(m => (
            <button
              key={m}
              type="button"
              onClick={() => dispatch({ type: 'SET_MODE', mode: m })}
              className={`rounded px-1.5 py-1.5 font-sans text-[0.55rem] font-medium transition ${
                selectedMode === m
                  ? 'bg-antique-500/80 text-library-950'
                  : 'border border-antique-500/18 text-parchment-100/45 hover:border-antique-400/35 hover:text-parchment-100/75'
              }`}
            >
              {MODE_LABELS[m]}
            </button>
          ))}
        </div>
        <p className="mt-1.5 font-sans text-[0.52rem] text-parchment-100/28">{MODE_DESC[selectedMode]}</p>
      </div>

      {/* Six ideas selector */}
      <div>
        <p className="mb-2 font-sans text-[0.5rem] uppercase tracking-[0.18em] text-parchment-100/35">Seis grandes ideias</p>
        <div className="flex flex-col gap-1.5">
          {IDEA_NUMBER_ORDER.map(ideaEn => {
            const vis = IDEA_VISUAL_IDENTITY[ideaEn]
            const ptSlug = IDEA_EN_TO_PT[ideaEn]
            const titlePt = IDEA_PT_TITLE[ptSlug] ?? ideaEn
            const isSelected = selectedIdeaId === ideaEn
            return (
              <button
                key={ideaEn}
                type="button"
                onClick={() => {
                  if (isSelected) dispatch({ type: 'DESELECT_IDEA' })
                  else dispatch({ type: 'SELECT_IDEA', ideaId: ideaEn })
                }}
                className="flex items-center gap-2.5 rounded border px-2.5 py-1.5 text-left transition"
                style={{
                  borderColor: isSelected ? vis.colorPrimary : `${vis.colorPrimary}28`,
                  backgroundColor: isSelected ? `${vis.colorPrimary}16` : 'transparent',
                }}
              >
                <span
                  className="shrink-0 font-mono text-[0.52rem] font-bold"
                  style={{ color: vis.colorPrimary }}
                >
                  {vis.numberLabel}
                </span>
                <span
                  className="font-sans text-xs"
                  style={{ color: isSelected ? vis.colorPrimary : 'rgba(244,236,216,0.60)' }}
                >
                  {titlePt}
                </span>
                <span
                  className="ml-auto shrink-0 font-sans text-[0.48rem]"
                  style={{ color: `${vis.colorPrimary}50` }}
                >
                  {vis.sphere === 'judgment' ? 'Julgar' : 'Agir'}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Search */}
      <div ref={searchRef} className="relative">
        <p className="mb-2 font-sans text-[0.5rem] uppercase tracking-[0.18em] text-parchment-100/35">Busca</p>
        <input
          type="search"
          placeholder="Tópico, autor, obra…"
          value={query}
          onChange={e => { setQuery(e.target.value); setShowResults(true) }}
          onFocus={() => setShowResults(true)}
          className="w-full rounded border border-antique-500/22 bg-library-950/55 px-3 py-2 font-sans text-xs text-parchment-100/75 placeholder:text-parchment-100/28 focus:border-antique-400/45 focus:outline-none"
        />
        {showResults && results.length > 0 && (
          <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-64 overflow-y-auto rounded border border-antique-500/28 bg-library-900 shadow-xl">
            {TYPE_ORDER.filter(t => grouped[t]?.length).map(type => (
              <div key={type}>
                <p className="px-3 py-1 font-sans text-[0.5rem] uppercase tracking-[0.15em] text-parchment-100/28">
                  {TYPE_PT[type] ?? type}
                </p>
                {grouped[type].slice(0, 5).map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className="w-full px-3 py-2 text-left hover:bg-antique-500/10 transition"
                  >
                    <p className="font-sans text-xs text-parchment-100/70 leading-snug">{item.title}</p>
                    {item.author && (
                      <p className="font-sans text-[0.52rem] text-antique-400/55">{item.author}</p>
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="border-t border-antique-500/15 pt-4">
        <p className="mb-2 font-sans text-[0.5rem] uppercase tracking-[0.18em] text-parchment-100/28">Legenda</p>
        <div className="flex flex-col gap-1.5">
          {[
            { color: '#d0a556', label: 'Ideia' },
            { color: '#c99a43', label: 'Aspecto Adler' },
            { color: '#8a8cc8', label: 'Tópico Syntopicon' },
            { color: '#6668a2', label: 'Subtópico' },
            { color: '#7b887f', label: 'Reservatório documental' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-full border"
                style={{ borderColor: color }}
              />
              <span className="font-sans text-[0.55rem] text-parchment-100/45">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
