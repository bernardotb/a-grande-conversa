'use client'

import { useReducer, useEffect, useState, useMemo, useRef } from 'react'
import { atlasReducer, INITIAL_STATE } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasOverview, AtlasIdeaData, AtlasSearchItem } from '@/lib/atlas-six-ideas/types'
import { IDEA_EN_TO_PT } from '@/lib/atlas-six-ideas/types'
import { fetchOverview, fetchIdeaData, fetchSearchIndex } from '@/lib/atlas-six-ideas/loaders'
import {
  computeHomeLayout,
  computeIdeaLayout,
  computeTopicLayout,
  computeReferenceLayout,
} from '@/lib/atlas-six-ideas/level-layout'
import { AtlasControlsV2 } from './AtlasControlsV2'
import { AtlasGraphV2 } from './AtlasGraphV2'
import { AtlasInspectorV2 } from './AtlasInspectorV2'
import { AtlasMobileV2 } from './AtlasMobileV2'

export function AtlasShellV2() {
  const [state, dispatch] = useReducer(atlasReducer, INITIAL_STATE)
  const [overview, setOverview] = useState<AtlasOverview | null>(null)
  const [ideaData, setIdeaData] = useState<AtlasIdeaData | null>(null)
  const [searchItems, setSearchItems] = useState<AtlasSearchItem[]>([])
  const [loading, setLoading] = useState(true)
  const [ideaLoading, setIdeaLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [canvasSize, setCanvasSize] = useState({ w: 900, h: 650 })
  const canvasRef = useRef<HTMLDivElement>(null)

  // Load overview + search index on mount
  useEffect(() => {
    setLoading(true)
    Promise.all([fetchOverview(), fetchSearchIndex()])
      .then(([ov, si]) => {
        setOverview(ov)
        setSearchItems(si)
        setLoading(false)
      })
      .catch(() => {
        setError('Falha ao carregar o Atlas. Recarregue a página.')
        setLoading(false)
      })
  }, [])

  // Load per-idea data when idea changes
  useEffect(() => {
    if (!state.selectedIdeaId) { setIdeaData(null); return }
    const ptSlug = IDEA_EN_TO_PT[state.selectedIdeaId]
    if (!ptSlug) return
    setIdeaLoading(true)
    fetchIdeaData(ptSlug)
      .then(data => { setIdeaData(data); setIdeaLoading(false) })
      .catch(() => setIdeaLoading(false))
  }, [state.selectedIdeaId])

  // Canvas size via ResizeObserver
  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      setCanvasSize({ w: rect.width, h: rect.height })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const ideaMeta = useMemo(
    () => overview?.ideas.find(i => i.idea_en === state.selectedIdeaId) ?? null,
    [overview, state.selectedIdeaId],
  )

  const layout = useMemo(() => {
    const { w, h } = canvasSize
    const {
      currentLevel, selectedIdeaId, openGroupId,
      selectedTopicId, selectedSubtopicId, selectedReferenceId, selectedMode,
    } = state

    if (currentLevel === 'home' || !selectedIdeaId || !ideaMeta) {
      return computeHomeLayout(overview?.ideas ?? [], w, h)
    }
    if (currentLevel === 'reference' && ideaData && selectedReferenceId) {
      return computeReferenceLayout(
        ideaMeta, ideaData, selectedReferenceId,
        selectedTopicId, selectedSubtopicId, w, h,
      )
    }
    if ((currentLevel === 'topic' || currentLevel === 'subtopic') && ideaData && selectedTopicId) {
      return computeTopicLayout(ideaMeta, ideaData, selectedTopicId, w, h)
    }
    return computeIdeaLayout(ideaMeta, w, h, openGroupId, selectedMode, ideaData)
  }, [state, overview, ideaMeta, ideaData, canvasSize])

  const selectedGraphNodeId = useMemo(() => {
    if (state.selectedReferenceId) return state.selectedReferenceId
    if (state.selectedSubtopicId) return state.selectedSubtopicId
    if (state.selectedTopicId) return state.selectedTopicId
    return null
  }, [state.selectedReferenceId, state.selectedSubtopicId, state.selectedTopicId])

  if (error) {
    return (
      <div className="flex h-full items-center justify-center bg-library-950">
        <div className="text-center">
          <p className="mb-3 font-sans text-sm text-parchment-200/55">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded border border-antique-500/40 px-4 py-2 font-sans text-xs text-antique-400 hover:bg-antique-400/10 transition"
          >
            Recarregar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-library-950" style={{ height: 'calc(100vh - 5rem)' }}>
      <div className="flex flex-1 overflow-hidden">

        {/* Left controls rail — desktop only */}
        <div className="hidden md:flex md:w-[280px] shrink-0 overflow-hidden">
          <AtlasControlsV2
            selectedIdeaId={state.selectedIdeaId}
            selectedMode={state.selectedMode}
            dispatch={dispatch}
            searchItems={searchItems}
          />
        </div>

        {/* Mobile top bar */}
        <div className="flex md:hidden absolute top-0 inset-x-0 z-10 items-center gap-2 overflow-x-auto border-b border-antique-500/18 bg-library-900/95 px-3 py-2">
          {(['adler', 'syntopicon', 'fused'] as const).map(m => (
            <button
              key={m}
              type="button"
              onClick={() => dispatch({ type: 'SET_MODE', mode: m })}
              className={`shrink-0 rounded px-2.5 py-1 font-sans text-[0.56rem] font-semibold transition ${
                state.selectedMode === m
                  ? 'bg-antique-500/80 text-library-950'
                  : 'border border-antique-500/18 text-parchment-200/45'
              }`}
            >
              {m === 'adler' ? 'Adler' : m === 'syntopicon' ? 'Syntopicon' : 'Fundida'}
            </button>
          ))}
          {state.currentLevel !== 'home' && (
            <>
              <div className="mx-1 border-l border-antique-500/18 self-stretch" />
              <button
                type="button"
                onClick={() => dispatch({ type: 'GO_BACK' })}
                className="shrink-0 rounded border border-antique-500/18 px-2.5 py-1 font-sans text-[0.56rem] text-antique-400"
              >
                ← Voltar
              </button>
            </>
          )}
        </div>

        {/* Canvas */}
        <div ref={canvasRef} className="relative flex-1 overflow-hidden mt-10 md:mt-0">
          <AtlasGraphV2
            layout={layout}
            selectedNodeId={selectedGraphNodeId}
            dispatch={dispatch}
            loading={loading || ideaLoading}
            level={state.currentLevel}
          />
        </div>

        {/* Right inspector — desktop only */}
        <div className="hidden md:flex md:w-[320px] shrink-0 overflow-hidden">
          <AtlasInspectorV2
            atlasState={state}
            dispatch={dispatch}
            ideaMeta={ideaMeta}
            ideaData={ideaData}
          />
        </div>
      </div>

      {/* Status bar */}
      <div className="flex h-7 items-center gap-3 border-t border-antique-500/12 bg-library-900/55 px-4">
        {overview?.global_counts && (
          <>
            <span className="font-sans text-[0.52rem] text-parchment-100/28">
              {overview.global_counts.nodes.toLocaleString()} nós
            </span>
            <span className="font-sans text-[0.52rem] text-parchment-100/18">·</span>
            <span className="font-sans text-[0.52rem] text-parchment-100/28">
              {overview.global_counts.references.toLocaleString()} referências
            </span>
            <span className="font-sans text-[0.52rem] text-parchment-100/18">·</span>
            <span className="font-sans text-[0.52rem] text-parchment-100/28">
              {overview.global_counts.passages} passagens verificadas
            </span>
          </>
        )}
        <span className="ml-auto font-sans text-[0.52rem] text-parchment-100/18">
          {state.currentLevel}
        </span>
      </div>

      {/* Mobile inspector drawer */}
      <AtlasMobileV2
        open={state.inspectorOpen}
        atlasState={state}
        dispatch={dispatch}
        ideaMeta={ideaMeta}
        ideaData={ideaData}
      />
    </div>
  )
}
