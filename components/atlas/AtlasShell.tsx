'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import type {
  AtlasMode, AtlasSphere, AtlasNode, AtlasEdge,
  AtlasOverview, AtlasIdeaData, AtlasSearchItem,
} from '@/lib/atlas-six-ideas/types'
import { IDEA_EN_TO_PT } from '@/lib/atlas-six-ideas/types'
import {
  fetchOverview, fetchIdeaData, fetchSearchIndex,
} from '@/lib/atlas-six-ideas/loaders'
import { AtlasControls } from './AtlasControls'
import { AtlasGraph } from './AtlasGraph'
import { AtlasInspector } from './AtlasInspector'
import { AtlasMobileDrawer } from './AtlasMobileDrawer'
import { AtlasStatusBar } from './AtlasStatusBar'

export function AtlasShell() {
  // UI state
  const [mode, setMode] = useState<AtlasMode>('fused')
  const [sphere, setSphere] = useState<AtlasSphere>('all')
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null) // EN slug
  const [selectedNode, setSelectedNode] = useState<AtlasNode | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Data state
  const [overview, setOverview] = useState<AtlasOverview | null>(null)
  const [ideaData, setIdeaData] = useState<AtlasIdeaData | null>(null)
  const [searchItems, setSearchItems] = useState<AtlasSearchItem[]>([])
  const [loading, setLoading] = useState(true)
  const [ideaLoading, setIdeaLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load overview on mount
  useEffect(() => {
    setLoading(true)
    Promise.all([fetchOverview(), fetchSearchIndex()])
      .then(([ov, si]) => {
        setOverview(ov)
        setSearchItems(si)
        setLoading(false)
      })
      .catch(err => {
        setError('Falha ao carregar o Atlas. Recarregue a página.')
        setLoading(false)
        console.error(err)
      })
  }, [])

  // Load per-idea data when selectedIdea changes
  useEffect(() => {
    if (!selectedIdea) {
      setIdeaData(null)
      return
    }
    const ptSlug = IDEA_EN_TO_PT[selectedIdea]
    if (!ptSlug) return
    setIdeaLoading(true)
    fetchIdeaData(ptSlug)
      .then(data => {
        setIdeaData(data)
        setIdeaLoading(false)
      })
      .catch(err => {
        setIdeaLoading(false)
        console.error(err)
      })
  }, [selectedIdea])

  const handleSelectIdea = useCallback((en: string | null) => {
    setSelectedIdea(en)
    setSelectedNode(null)
    setMobileOpen(false)
  }, [])

  const handleSelectNode = useCallback((node: AtlasNode) => {
    setSelectedNode(node)
    setMobileOpen(true)
    // If clicking an idea node in the overview, also set selectedIdea
    if (node.type === 'idea' && node.idea) {
      setSelectedIdea(node.idea)
    }
  }, [])

  const handleDeselectAll = useCallback(() => {
    setSelectedNode(null)
    setMobileOpen(false)
  }, [])

  const handleSearchSelect = useCallback((item: AtlasSearchItem) => {
    // If it has an idea, navigate to that idea first
    if (item.idea && item.idea !== selectedIdea) {
      setSelectedIdea(item.idea)
    }
    // Set selected node (will be resolved when data loads)
    const fakeNode: AtlasNode = {
      id: item.id,
      type: item.type,
      title: item.title,
      idea: item.idea ?? undefined,
      sphere: item.sphere ?? undefined,
      summary: item.summary ?? undefined,
      author: item.author ?? undefined,
      work: item.work ?? undefined,
      reference_original_raw: item.raw ?? undefined,
    }
    setSelectedNode(fakeNode)
    setMobileOpen(true)
  }, [selectedIdea])

  const allNodes: AtlasNode[] = ideaData?.nodes ?? []
  const allEdges: AtlasEdge[] = ideaData?.edges ?? []

  // When ideaData loads, try to resolve selectedNode from actual data
  useEffect(() => {
    if (!ideaData || !selectedNode) return
    const resolved = ideaData.nodes.find(n => n.id === selectedNode.id)
    if (resolved && resolved !== selectedNode) setSelectedNode(resolved)
  }, [ideaData])

  if (error) {
    return (
      <div className="flex h-full items-center justify-center bg-library-950">
        <div className="text-center">
          <p className="font-sans text-sm text-parchment-200/60 mb-3">{error}</p>
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
        {/* Left rail — hidden on mobile, shown md+ */}
        <div className="hidden md:block w-[280px] shrink-0 overflow-hidden">
          <AtlasControls
            mode={mode}
            sphere={sphere}
            selectedIdea={selectedIdea}
            onMode={setMode}
            onSphere={setSphere}
            onIdea={handleSelectIdea}
            searchItems={searchItems}
            onSearchSelect={handleSearchSelect}
          />
        </div>

        {/* Mobile top controls */}
        <div className="flex md:hidden w-full absolute top-0 left-0 right-0 z-10 bg-library-900/95 border-b border-antique-500/20 px-3 py-2 gap-2 overflow-x-auto">
          {/* Mode */}
          {(['adler', 'syntopicon', 'fused'] as AtlasMode[]).map(m => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`shrink-0 rounded px-2.5 py-1 font-sans text-[0.58rem] font-semibold transition ${
                mode === m
                  ? 'bg-antique-500/80 text-library-950'
                  : 'border border-antique-500/20 text-parchment-200/50'
              }`}
            >
              {m === 'adler' ? 'Adler' : m === 'syntopicon' ? 'Syntopicon' : 'Fundida'}
            </button>
          ))}
          <div className="mx-1 border-l border-antique-500/20" />
          {/* Sphere */}
          {(['all', 'judgment', 'action'] as AtlasSphere[]).map(s => (
            <button
              key={s}
              type="button"
              onClick={() => setSphere(s)}
              className={`shrink-0 rounded px-2.5 py-1 font-sans text-[0.58rem] font-semibold transition ${
                sphere === s
                  ? s === 'judgment' ? 'bg-violet-700 text-white'
                    : s === 'action' ? 'bg-green-700 text-white'
                    : 'bg-antique-500/80 text-library-950'
                  : 'border border-antique-500/20 text-parchment-200/50'
              }`}
            >
              {s === 'all' ? 'Todas' : s === 'judgment' ? 'Julgar' : 'Agir'}
            </button>
          ))}
        </div>

        {/* Center canvas */}
        <div className="relative flex-1 overflow-hidden mt-10 md:mt-0">
          <AtlasGraph
            mode={mode}
            sphere={sphere}
            selectedIdea={selectedIdea}
            overviewIdeas={overview?.ideas ?? []}
            ideaNodes={allNodes}
            ideaEdges={allEdges}
            selectedNodeId={selectedNode?.id ?? null}
            onSelectNode={handleSelectNode}
            onDeselectAll={handleDeselectAll}
            loading={loading || ideaLoading}
          />
        </div>

        {/* Right inspector — desktop only */}
        <div className="hidden md:block w-[320px] shrink-0 overflow-hidden">
          <AtlasInspector
            node={selectedNode}
            allNodes={allNodes}
            edges={allEdges}
            onSelectNode={handleSelectNode}
          />
        </div>
      </div>

      {/* Status bar */}
      <AtlasStatusBar
        counts={overview?.global_counts ?? null}
        visibleCount={selectedIdea ? allNodes.length : overview?.ideas.length}
      />

      {/* Mobile inspector drawer */}
      <AtlasMobileDrawer
        node={mobileOpen ? selectedNode : null}
        allNodes={allNodes}
        edges={allEdges}
        onSelectNode={handleSelectNode}
        onClose={() => { setMobileOpen(false); setSelectedNode(null) }}
      />
    </div>
  )
}
