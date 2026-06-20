'use client'

import { useState, useCallback } from 'react'
import type { AtlasMode, AtlasSphere, AtlasSearchItem } from '@/lib/atlas-six-ideas/types'
import { searchIndex } from '@/lib/atlas-six-ideas/selectors'

const IDEAS = [
  { en: 'Truth', pt: 'Verdade', idx: '01' },
  { en: 'Goodness', pt: 'Bondade', idx: '02' },
  { en: 'Beauty', pt: 'Beleza', idx: '03' },
  { en: 'Liberty', pt: 'Liberdade', idx: '04' },
  { en: 'Equality', pt: 'Igualdade', idx: '05' },
  { en: 'Justice', pt: 'Justiça', idx: '06' },
]

interface AtlasControlsProps {
  mode: AtlasMode
  sphere: AtlasSphere
  selectedIdea: string | null
  onMode: (m: AtlasMode) => void
  onSphere: (s: AtlasSphere) => void
  onIdea: (en: string | null) => void
  searchItems: AtlasSearchItem[]
  onSearchSelect: (item: AtlasSearchItem) => void
}

export function AtlasControls({
  mode, sphere, selectedIdea, onMode, onSphere, onIdea,
  searchItems, onSearchSelect,
}: AtlasControlsProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<AtlasSearchItem[]>([])

  const handleSearch = useCallback((q: string) => {
    setQuery(q)
    setResults(searchIndex(searchItems, q))
  }, [searchItems])

  const handleResultClick = useCallback((item: AtlasSearchItem) => {
    onSearchSelect(item)
    setQuery('')
    setResults([])
  }, [onSearchSelect])

  return (
    <div className="flex h-full flex-col overflow-y-auto border-r border-antique-500/20 bg-library-900 px-4 py-5 text-parchment-100">

      {/* Title */}
      <div className="mb-5">
        <h1 className="font-serif text-base font-semibold leading-snug text-antique-400">
          Atlas das Seis Ideias
        </h1>
        <p className="mt-1 font-sans text-[0.62rem] leading-relaxed text-parchment-200/50">
          Adler orienta. O Syntopicon mapeia.<br />Os Great Books documentam.
        </p>
      </div>

      {/* Mode */}
      <section className="mb-4" aria-labelledby="mode-label">
        <div id="mode-label" className="mb-1.5 font-sans text-[0.58rem] uppercase tracking-[0.15em] text-parchment-200/40">
          Modo
        </div>
        <div className="flex rounded border border-antique-500/20 p-0.5" role="group" aria-label="Modo de leitura">
          {(['adler', 'syntopicon', 'fused'] as AtlasMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => onMode(m)}
              aria-pressed={mode === m}
              className={`flex-1 rounded px-1.5 py-1 font-sans text-[0.6rem] font-semibold transition ${
                mode === m
                  ? 'bg-antique-500/80 text-library-950'
                  : 'text-parchment-200/50 hover:text-parchment-100'
              }`}
            >
              {m === 'adler' ? 'Adler' : m === 'syntopicon' ? 'Syntopicon' : 'Fundida'}
            </button>
          ))}
        </div>
      </section>

      {/* Sphere */}
      <section className="mb-4" aria-labelledby="sphere-label">
        <div id="sphere-label" className="mb-1.5 font-sans text-[0.58rem] uppercase tracking-[0.15em] text-parchment-200/40">
          Esfera
        </div>
        <div className="flex rounded border border-antique-500/20 p-0.5" role="group" aria-label="Esfera das ideias">
          {(['all', 'judgment', 'action'] as AtlasSphere[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSphere(s)}
              aria-pressed={sphere === s}
              className={`flex-1 rounded px-1.5 py-1 font-sans text-[0.6rem] font-semibold transition ${
                sphere === s
                  ? s === 'judgment'
                    ? 'bg-violet-700 text-white'
                    : s === 'action'
                    ? 'bg-green-700 text-white'
                    : 'bg-antique-500/80 text-library-950'
                  : 'text-parchment-200/50 hover:text-parchment-100'
              }`}
            >
              {s === 'all' ? 'Todas' : s === 'judgment' ? 'Julgar' : 'Agir'}
            </button>
          ))}
        </div>
      </section>

      {/* Ideas */}
      <section className="mb-4" aria-labelledby="ideas-label">
        <div id="ideas-label" className="mb-1.5 font-sans text-[0.58rem] uppercase tracking-[0.15em] text-parchment-200/40">
          Ideias
        </div>
        <div className="flex flex-col gap-0.5" role="group" aria-label="Filtrar por ideia">
          {IDEAS.map((idea) => (
            <button
              key={idea.en}
              type="button"
              onClick={() => onIdea(selectedIdea === idea.en ? null : idea.en)}
              aria-pressed={selectedIdea === idea.en}
              className={`flex items-center gap-2 rounded px-2 py-1.5 text-left font-sans text-xs transition ${
                selectedIdea === idea.en
                  ? 'bg-antique-500/20 text-antique-400'
                  : 'text-parchment-200/60 hover:bg-library-800 hover:text-parchment-100'
              }`}
            >
              <span className="font-mono text-[0.55rem] text-parchment-200/30">{idea.idx}</span>
              <span>{idea.pt}</span>
            </button>
          ))}
        </div>
        {selectedIdea && (
          <button
            type="button"
            onClick={() => onIdea(null)}
            className="mt-2 w-full rounded border border-antique-500/20 py-1 font-sans text-[0.6rem] text-parchment-200/40 hover:text-parchment-200/70 transition"
          >
            Mostrar todas
          </button>
        )}
      </section>

      {/* Search */}
      <section className="mb-4 relative" aria-labelledby="search-label">
        <label
          id="search-label"
          htmlFor="atlas-search"
          className="mb-1.5 block font-sans text-[0.58rem] uppercase tracking-[0.15em] text-parchment-200/40"
        >
          Buscar
        </label>
        <input
          id="atlas-search"
          type="search"
          value={query}
          onChange={e => handleSearch(e.target.value)}
          placeholder="Nó, autor, obra ou referência"
          autoComplete="off"
          className="w-full rounded border border-antique-500/20 bg-library-950 px-2.5 py-1.5 font-sans text-xs text-parchment-100 placeholder:text-parchment-200/30 focus:border-antique-400/50 focus:outline-none"
        />
        {results.length > 0 && (
          <div
            className="absolute left-0 right-0 top-full z-20 mt-1 max-h-52 overflow-y-auto rounded border border-antique-500/20 bg-library-900 shadow-card"
            role="listbox"
            aria-label="Resultados da busca"
          >
            {results.map(item => (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={false}
                onClick={() => handleResultClick(item)}
                className="flex w-full flex-col gap-0.5 border-b border-antique-500/10 px-3 py-2 text-left hover:bg-library-800 transition last:border-b-0"
              >
                <span className="font-sans text-xs text-parchment-100 leading-snug">{item.title}</span>
                <span className="font-sans text-[0.58rem] text-parchment-200/40">
                  {item.type}{item.idea ? ` · ${item.idea}` : ''}
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Legend */}
      <section aria-labelledby="legend-label" className="mt-auto pt-4 border-t border-antique-500/15">
        <div id="legend-label" className="mb-2 font-sans text-[0.58rem] uppercase tracking-[0.15em] text-parchment-200/40">
          Camadas
        </div>
        <ul className="flex flex-col gap-1.5 font-sans text-[0.6rem] text-parchment-200/50">
          <li className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#d0a556]" />
            Six Great Ideas
          </li>
          <li className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#7779b8]" />
            Syntopicon
          </li>
          <li className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#b55f38]" />
            Great Books / Referências
          </li>
        </ul>
      </section>
    </div>
  )
}
