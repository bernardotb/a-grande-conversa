'use client'

import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { fetchIdeaData, fetchOverview, fetchSearchIndex } from '@/lib/atlas-six-ideas/loaders'
import type { AtlasIdeaData, AtlasOverview, AtlasSearchItem } from '@/lib/atlas-six-ideas/types'
import { IDEA_EN_TO_PT, IDEA_PT_TO_EN } from '@/lib/atlas-six-ideas/types'
import { atlasV3Reducer, ATLAS_V3_INITIAL_STATE } from '@/lib/atlas-six-ideas/v3-model'
import { buildAtlasV3Layout } from '@/lib/atlas-six-ideas/v3-layout'
import { AtlasGraphV3 } from './AtlasGraphV3'
import { AtlasInspectorV3 } from './AtlasInspectorV3'
import { AtlasMobileDrawerV3 } from './AtlasMobileDrawerV3'
import { AtlasSidebarV3 } from './AtlasSidebarV3'

export function AtlasShellV3() {
  const [state, dispatch] = useReducer(atlasV3Reducer, ATLAS_V3_INITIAL_STATE)
  const [overview, setOverview] = useState<AtlasOverview | null>(null)
  const [ideaData, setIdeaData] = useState<AtlasIdeaData | null>(null)
  const [searchItems, setSearchItems] = useState<AtlasSearchItem[]>([])
  const [loading, setLoading] = useState(true)
  const [ideaLoading, setIdeaLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const initialQueryHandled = useRef(false)
  const topicQueryHandled = useRef(false)
  const relationsQueryHandled = useRef(false)

  useEffect(() => {
    Promise.all([fetchOverview(), fetchSearchIndex()])
      .then(([nextOverview, nextSearch]) => {
        setOverview(nextOverview)
        setSearchItems(nextSearch)
        setLoading(false)
      })
      .catch(() => {
        setError('Não foi possível carregar o Atlas.')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!overview || initialQueryHandled.current) return
    initialQueryHandled.current = true
    const raw = new URLSearchParams(window.location.search).get('idea')
    if (!raw) return
    const normalized = raw.trim()
    const english = overview.ideas.some(idea => idea.idea_en.toLowerCase() === normalized.toLowerCase())
      ? overview.ideas.find(idea => idea.idea_en.toLowerCase() === normalized.toLowerCase())?.idea_en
      : IDEA_PT_TO_EN[normalized.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')]
    if (english) dispatch({ type: 'SELECT_IDEA', ideaId: english })
  }, [overview])

  useEffect(() => {
    if (!state.selectedIdeaId) {
      setIdeaData(null)
      return
    }
    const slug = IDEA_EN_TO_PT[state.selectedIdeaId]
    if (!slug) return
    setIdeaLoading(true)
    fetchIdeaData(slug)
      .then(data => setIdeaData(data))
      .catch(() => setError('Não foi possível carregar os dados desta ideia.'))
      .finally(() => setIdeaLoading(false))
  }, [state.selectedIdeaId])

  useEffect(() => {
    if (!ideaData || topicQueryHandled.current) return
    const rawTopic = new URLSearchParams(window.location.search).get('topic')
    if (!rawTopic) return
    const topic = ideaData.nodes.find(node =>
      node.type === 'syntopicon_topic'
      && (node.id === rawTopic || node.original_number === rawTopic),
    )
    if (!topic) return
    topicQueryHandled.current = true
    dispatch({ type: 'SELECT_TOPIC', topicId: topic.id })
  }, [ideaData])

  useEffect(() => {
    if (!state.selectedTopicId || relationsQueryHandled.current) return
    const requestedView = new URLSearchParams(window.location.search).get('view')
    if (requestedView !== 'relations') return
    relationsQueryHandled.current = true
    dispatch({ type: 'EXPLORE_RELATIONS' })
  }, [state.selectedTopicId])

  const meta = useMemo(
    () => overview?.ideas.find(idea => idea.idea_en === state.selectedIdeaId) ?? null,
    [overview, state.selectedIdeaId],
  )

  const layout = useMemo(
    () => buildAtlasV3Layout(state, overview, meta, ideaData, mobile),
    [state, overview, meta, ideaData, mobile],
  )

  const activeNode = useMemo(
    () => layout.nodes.find(node => node.id === state.selectedNodeId)
      ?? layout.nodes.find(node => node.kind === 'idea')
      ?? null,
    [layout.nodes, state.selectedNodeId],
  )

  if (error) {
    return (
      <div className="grid min-h-[70vh] place-items-center bg-library-950 px-6 text-center text-parchment-100">
        <div>
          <p className="font-serif text-2xl">{error}</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-5 border border-antique-400/50 px-5 py-2 font-sans text-xs uppercase tracking-[0.12em] text-antique-400">Recarregar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col bg-library-950 text-parchment-100">
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        <div className="hidden w-[286px] shrink-0 md:flex">
          <AtlasSidebarV3 state={state} overview={overview} searchItems={searchItems} dispatch={dispatch} />
        </div>

        <main className="relative min-w-0 flex-1">
          <div className="absolute inset-x-0 top-0 z-30 flex min-h-12 items-center gap-3 border-b border-antique-500/20 bg-library-950/94 px-4 py-2 md:px-6">
            {state.view !== 'home' ? (
              <button type="button" onClick={() => dispatch({ type: 'GO_BACK' })} className="flex shrink-0 items-center gap-1.5 border border-antique-500/25 px-2.5 py-1.5 font-sans text-[0.62rem] text-antique-400 hover:bg-antique-400/10">
                <ArrowLeft size={14} /> Voltar
              </button>
            ) : null}
            <p className="min-w-0 flex-1 truncate font-serif text-xs text-parchment-200/60 md:text-sm">
              {layout.breadcrumb.join(' › ')}
            </p>
            <button type="button" onClick={() => setResetKey(value => value + 1)} className="flex shrink-0 items-center gap-1.5 border border-antique-500/25 px-2.5 py-1.5 font-sans text-[0.62rem] text-antique-400 hover:bg-antique-400/10">
              <RotateCcw size={13} /> <span className="hidden sm:inline">Recentrar</span>
            </button>
          </div>

          <div className="h-full min-h-[calc(100vh-7rem)] pt-12">
            <AtlasGraphV3
              layout={layout}
              selectedNodeId={state.selectedNodeId}
              dispatch={dispatch}
              loading={loading || ideaLoading}
              resetKey={resetKey}
            />
          </div>

          {state.view === 'relations' ? (
            <div className="absolute bottom-4 right-4 z-20 hidden border border-antique-500/25 bg-library-950/90 p-3 font-sans text-[0.56rem] text-parchment-200/55 lg:block">
              <p className="flex items-center gap-2"><span className="h-px w-7 bg-violet-400" /> Relação direta</p>
              <p className="mt-2 flex items-center gap-2"><span className="w-7 border-t border-dashed border-antique-400" /> Referência cruzada</p>
              <p className="mt-2 flex items-center gap-2"><span className="w-7 border-t border-dotted border-parchment-200/50" /> Editorial / inferida</p>
            </div>
          ) : null}
        </main>

        <div className="hidden w-[320px] shrink-0 border-l border-antique-500/20 md:flex">
          <AtlasInspectorV3 state={state} activeNode={activeNode} layout={layout} meta={meta} data={ideaData} dispatch={dispatch} />
        </div>

        <AtlasMobileDrawerV3 state={state} activeNode={activeNode} layout={layout} meta={meta} data={ideaData} dispatch={dispatch} />
      </div>

      <footer className="flex min-h-9 items-center border-t border-antique-500/25 bg-library-900/70 px-4 py-2 md:px-6">
        <p className="font-serif text-xs italic text-parchment-200/48">
          Referências documentais, autores, obras, volumes e passagens — próxima etapa de auditoria.
        </p>
        <p className="ml-auto hidden font-sans text-[0.52rem] uppercase tracking-[0.13em] text-parchment-200/28 sm:block">
          {layout.nodes.length} nós visíveis
        </p>
      </footer>
    </div>
  )
}
