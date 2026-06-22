'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { AtlasOverview, AtlasSearchItem } from '@/lib/atlas-six-ideas/types'
import type { AtlasV3Action, AtlasV3State } from '@/lib/atlas-six-ideas/v3-model'
import { searchIndex } from '@/lib/atlas-six-ideas/selectors'
import { V3_COLORS } from '@/lib/atlas-six-ideas/v3-content'

interface Props {
  state: AtlasV3State
  overview: AtlasOverview | null
  searchItems: AtlasSearchItem[]
  dispatch: (action: AtlasV3Action) => void
}

const SEARCHABLE_TYPES = new Set(['idea', 'adler_aspect', 'syntopicon_topic', 'syntopicon_subtopic', 'tension', 'question'])

export function AtlasSidebarV3({ state, overview, searchItems, dispatch }: Props) {
  const [query, setQuery] = useState('')
  const results = useMemo(
    () => query.trim().length >= 2
      ? searchIndex(searchItems.filter(item => SEARCHABLE_TYPES.has(item.type)), query, 10)
      : [],
    [query, searchItems],
  )

  const selectResult = (item: AtlasSearchItem) => {
    if (item.idea) dispatch({ type: 'SELECT_IDEA', ideaId: item.idea })
    if (item.type === 'syntopicon_topic') dispatch({ type: 'SELECT_TOPIC', topicId: item.id })
    if (item.type === 'syntopicon_subtopic') dispatch({ type: 'SELECT_SUBTOPIC', subtopicId: item.id })
    setQuery('')
  }

  return (
    <aside className="flex h-full w-full flex-col overflow-y-auto border-r border-antique-500/20 bg-library-900/80 px-5 py-6 text-parchment-100">
      <div className="border-b border-antique-500/20 pb-5">
        <p className="font-serif text-2xl leading-none text-parchment-100">Atlas das Seis Ideias</p>
        <p className="mt-3 font-serif text-sm italic leading-6 text-parchment-200/58">
          A síntese orienta. O Syntopicon cartografa. Os Great Books documentam.
        </p>
      </div>

      <section className="mt-5" aria-labelledby="ideas-v3-label">
        <p id="ideas-v3-label" className="mb-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-antique-400">
          Seis ideias
        </p>
        <div className="border border-antique-500/25">
          {overview?.ideas.map((idea, index) => {
            const active = state.selectedIdeaId === idea.idea_en
            const sphereColor = idea.sphere === 'judgment' ? V3_COLORS.judgment : V3_COLORS.action
            return (
              <button
                key={idea.id}
                type="button"
                onClick={() => dispatch({ type: 'SELECT_IDEA', ideaId: idea.idea_en })}
                className={`flex w-full items-center gap-3 border-b border-antique-500/20 px-3 py-3 text-left last:border-b-0 transition ${active ? 'bg-antique-500/18' : 'hover:bg-library-800/70'}`}
                aria-pressed={active}
              >
                <span className="w-5 font-sans text-[0.6rem] text-antique-400">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex-1 font-serif text-base text-parchment-100">{idea.title_pt}</span>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: sphereColor }} aria-label={idea.sphere === 'judgment' ? 'Julgar' : 'Agir'} />
              </button>
            )
          })}
        </div>
        {state.view !== 'home' ? (
          <button type="button" onClick={() => dispatch({ type: 'RESET' })} className="mt-2 font-sans text-[0.64rem] text-parchment-200/48 hover:text-antique-400">
            Mostrar as seis ideias
          </button>
        ) : null}
      </section>

      <section className="relative mt-6" aria-labelledby="search-v3-label">
        <label id="search-v3-label" htmlFor="atlas-v3-search" className="mb-2 block font-sans text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-antique-400">
          Buscar
        </label>
        <div className="flex items-center border border-antique-500/30 bg-library-950/60 px-3">
          <Search size={15} strokeWidth={1.4} className="text-parchment-200/45" aria-hidden="true" />
          <input
            id="atlas-v3-search"
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Ideia, aspecto ou tópico"
            className="min-w-0 flex-1 bg-transparent px-2 py-2.5 font-sans text-xs text-parchment-100 outline-none placeholder:text-parchment-200/35"
          />
        </div>
        {results.length > 0 ? (
          <div className="absolute inset-x-0 top-full z-40 mt-1 max-h-64 overflow-y-auto border border-antique-500/30 bg-library-900 shadow-card">
            {results.map(item => (
              <button key={item.id} type="button" onClick={() => selectResult(item)} className="block w-full border-b border-antique-500/15 px-3 py-2 text-left last:border-b-0 hover:bg-library-800">
                <span className="block font-serif text-sm text-parchment-100">{item.title}</span>
                <span className="font-sans text-[0.52rem] uppercase tracking-[0.1em] text-parchment-200/38">{item.type}</span>
              </button>
            ))}
          </div>
        ) : null}
      </section>

      <section className="mt-auto border-t border-antique-500/20 pt-5" aria-labelledby="legend-v3-label">
        <p id="legend-v3-label" className="mb-3 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-antique-400">Legenda</p>
        <ul className="space-y-2 font-serif text-sm text-parchment-200/62">
          <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full border" style={{ borderColor: V3_COLORS.synthesis }} />Síntese das Seis Ideias</li>
          <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full border" style={{ borderColor: V3_COLORS.syntopicon }} />Syntopicon</li>
          <li className="mt-3 flex items-center gap-2 font-sans text-[0.65rem]"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: V3_COLORS.judgment }} />Julgar</li>
          <li className="flex items-center gap-2 font-sans text-[0.65rem]"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: V3_COLORS.action }} />Agir</li>
        </ul>
      </section>
    </aside>
  )
}

