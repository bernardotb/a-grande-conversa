'use client'

import { ArrowLeft, Network, X } from 'lucide-react'
import type { AtlasIdeaData, AtlasOverviewIdea } from '@/lib/atlas-six-ideas/types'
import type { AtlasV3Action, AtlasV3GraphNode, AtlasV3Layout, AtlasV3State } from '@/lib/atlas-six-ideas/v3-model'
import { getV3NodeTitle, V3_COLORS } from '@/lib/atlas-six-ideas/v3-content'

interface Props {
  state: AtlasV3State
  activeNode: AtlasV3GraphNode | null
  layout: AtlasV3Layout
  meta: AtlasOverviewIdea | null
  data: AtlasIdeaData | null
  dispatch: (action: AtlasV3Action) => void
  onClose?: () => void
}

export function AtlasInspectorV3({ state, activeNode, layout, meta, data, dispatch, onClose }: Props) {
  const topic = state.selectedTopicId ? data?.nodes.find(n => n.id === state.selectedTopicId) : null
  const subtopic = state.selectedSubtopicId ? data?.nodes.find(n => n.id === state.selectedSubtopicId) : null
  const related = activeNode
    ? layout.edges
      .filter(e => e.source === activeNode.id || e.target === activeNode.id)
      .map(e => layout.nodes.find(n => n.id === (e.source === activeNode.id ? e.target : e.source)))
      .filter((node): node is AtlasV3GraphNode => Boolean(node))
      .slice(0, 6)
    : []

  if (state.view === 'home' || !meta) {
    return (
      <aside className="flex h-full flex-col bg-library-900/55 px-6 py-7 text-parchment-100">
        <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-antique-400">Inspetor documental</p>
        <p className="mt-7 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-parchment-200/42">Ponto de partida</p>
        <h2 className="mt-2 font-serif text-4xl leading-none text-parchment-100">Escolha uma ideia</h2>
        <p className="mt-5 font-serif text-base leading-7 text-parchment-200/62">
          As seis ideias permanecem juntas. Selecione uma delas para abrir sua síntese e sua cartografia sintópica.
        </p>
        <div className="mt-8 border border-antique-500/25 p-4">
          <p className="font-sans text-[0.55rem] uppercase tracking-[0.17em] text-antique-400">Caminho</p>
          <p className="mt-2 font-serif text-sm italic leading-6 text-antique-400/82">
            Ideia → síntese ou Syntopicon → agrupamento → relações
          </p>
        </div>
      </aside>
    )
  }

  const title = activeNode?.title ?? (subtopic ? getV3NodeTitle(subtopic, meta.idea_en) : topic ? getV3NodeTitle(topic, meta.idea_en) : meta.title_pt)
  const description = activeNode?.description ?? subtopic?.summary ?? topic?.summary ?? meta.definition ?? meta.central_question
  const nodeType = activeNode?.subtitle ?? (state.view === 'relations' ? 'Rede contextual' : 'Ideia')

  return (
    <aside className="flex h-full flex-col overflow-y-auto bg-library-900/55 px-6 py-6 text-parchment-100">
      <div className="flex items-start justify-between gap-3 border-b border-antique-500/25 pb-4">
        <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-antique-400">Inspetor documental</p>
        {onClose ? (
          <button type="button" onClick={onClose} aria-label="Fechar inspetor" className="text-parchment-200/55 hover:text-antique-400"><X size={18} /></button>
        ) : null}
      </div>

      <div className="border-b border-antique-500/20 py-6">
        <p className="font-sans text-[0.56rem] uppercase tracking-[0.18em]" style={{ color: activeNode?.color ?? V3_COLORS.action }}>{nodeType}</p>
        <h2 className="mt-2 font-serif text-3xl leading-[1.05] text-parchment-100">{title}</h2>
        {description ? <p className="mt-4 font-serif text-[0.98rem] leading-7 text-parchment-200/66">{description}</p> : null}
      </div>

      <div className="border-b border-antique-500/20 py-5">
        <p className="font-sans text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-antique-400">Caminho</p>
        <p className="mt-3 font-serif text-sm leading-6 text-parchment-200/62">{layout.breadcrumb.join(' › ')}</p>
      </div>

      {related.length > 0 ? (
        <div className="border-b border-antique-500/20 py-5">
          <p className="mb-3 font-sans text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-antique-400">Relações visíveis</p>
          <div className="space-y-2">
            {related.map(node => (
              <button
                key={node.id}
                type="button"
                onClick={() => node.action ? dispatch(node.action) : dispatch({ type: 'SELECT_NODE', nodeId: node.id })}
                className="flex w-full items-center gap-3 border border-antique-500/20 px-3 py-2 text-left hover:border-antique-400/45"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: node.color }} />
                <span className="font-serif text-sm text-parchment-100/78">{node.title}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="py-5">
        <p className="font-sans text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-antique-400">Estado documental</p>
        <dl className="mt-3 grid grid-cols-[100px_1fr] gap-y-2 font-sans text-[0.7rem]">
          <dt className="text-parchment-200/42">Ideia</dt><dd className="text-parchment-100/72">{meta.title_pt}</dd>
          <dt className="text-parchment-200/42">Classificação</dt><dd className="text-parchment-100/72">{meta.sphere === 'judgment' ? 'Julgar' : 'Agir'}</dd>
          <dt className="text-parchment-200/42">Fonte</dt><dd className="text-parchment-100/72">{activeNode?.color === V3_COLORS.synthesis ? 'Síntese das Seis Ideias' : 'Syntopicon'}</dd>
          <dt className="text-parchment-200/42">Evidência</dt><dd className="text-parchment-100/72">Estrutura verificada</dd>
        </dl>
      </div>

      {(state.view === 'topic' && state.selectedTopicId) ? (
        <button
          type="button"
          onClick={() => dispatch({ type: 'EXPLORE_RELATIONS' })}
          className="mt-auto flex items-center justify-center gap-2 border border-antique-400/55 px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-antique-400 hover:bg-antique-400/10"
        >
          <Network size={16} /> Explorar relações
        </button>
      ) : null}

      {state.view === 'relations' ? (
        <button
          type="button"
          onClick={() => dispatch({ type: 'GO_BACK' })}
          className="mt-auto flex items-center justify-center gap-2 border border-antique-400/55 px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-antique-400 hover:bg-antique-400/10"
        >
          <ArrowLeft size={16} /> Voltar ao tópico
        </button>
      ) : null}
    </aside>
  )
}

