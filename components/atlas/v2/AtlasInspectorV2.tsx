'use client'

import { useState, useMemo } from 'react'
import type { AtlasState, AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasIdeaData, AtlasOverviewIdea, AtlasNode } from '@/lib/atlas-six-ideas/types'

interface Props {
  atlasState: AtlasState
  dispatch: (a: AtlasAction) => void
  ideaMeta: AtlasOverviewIdea | null
  ideaData: AtlasIdeaData | null
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-sans text-[0.52rem] uppercase tracking-[0.16em] text-parchment-100/35">{label}</span>
      <div className="font-sans text-xs text-parchment-100/75">{value}</div>
    </div>
  )
}

function EvidenceBadge({ status }: { status: string | undefined }) {
  const map: Record<string, { label: string; color: string }> = {
    confirmed:       { label: 'Confirmado',      color: '#5a9e7a' },
    partial:         { label: 'Parcial',          color: '#8a8cc8' },
    in_verification: { label: 'Em verificação',   color: '#c99a43' },
    not_confirmed:   { label: 'Não confirmado',   color: '#884444' },
    not_extracted:   { label: 'Sem passagem',     color: '#555' },
    documental:      { label: 'Documental',       color: '#6668a2' },
  }
  const info = map[status ?? ''] ?? { label: status ?? '—', color: '#555' }
  return (
    <span
      className="rounded px-1.5 py-0.5 font-sans text-[0.52rem] font-semibold"
      style={{ background: `${info.color}20`, color: info.color, border: `1px solid ${info.color}40` }}
    >
      {info.label}
    </span>
  )
}

function ReferenceList({
  references,
  onFocus,
}: {
  references: AtlasNode[]
  onFocus: (ref: AtlasNode) => void
}) {
  const [filterAuthor, setFilterAuthor] = useState('')
  const [filterEvidence, setFilterEvidence] = useState('')

  const authors = useMemo(() => {
    const s = new Set<string>()
    references.forEach(r => { if (r.author) s.add(r.author) })
    return [...s].sort()
  }, [references])

  const filtered = useMemo(() => {
    return references.filter(r => {
      const aMatch = !filterAuthor || r.author === filterAuthor
      const eMatch = !filterEvidence
        || r.passage_status === filterEvidence
        || r.evidence_status === filterEvidence
      return aMatch && eMatch
    })
  }, [references, filterAuthor, filterEvidence])

  return (
    <div className="flex flex-col gap-2">
      {/* Filters */}
      <div className="flex flex-wrap gap-1.5">
        <select
          value={filterAuthor}
          onChange={e => setFilterAuthor(e.target.value)}
          className="rounded border border-antique-500/20 bg-library-900 px-2 py-1 font-sans text-[0.58rem] text-parchment-100/65"
        >
          <option value="">Todos os autores</option>
          {authors.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <select
          value={filterEvidence}
          onChange={e => setFilterEvidence(e.target.value)}
          className="rounded border border-antique-500/20 bg-library-900 px-2 py-1 font-sans text-[0.58rem] text-parchment-100/65"
        >
          <option value="">Qualquer evidência</option>
          <option value="not_extracted">Sem passagem</option>
          <option value="confirmed">Confirmado</option>
          <option value="documental">Documental</option>
        </select>
        {(filterAuthor || filterEvidence) && (
          <button
            type="button"
            onClick={() => { setFilterAuthor(''); setFilterEvidence('') }}
            className="rounded border border-antique-500/20 px-2 py-1 font-sans text-[0.58rem] text-antique-400 hover:bg-antique-400/10 transition"
          >
            Limpar
          </button>
        )}
      </div>

      <p className="font-sans text-[0.55rem] text-parchment-100/35">
        {filtered.length} de {references.length} referências
      </p>

      {/* List — CSS overflow only, no external lib */}
      <div className="overflow-y-auto" style={{ maxHeight: 360 }}>
        <div className="flex flex-col gap-1.5 pr-1">
          {filtered.slice(0, 200).map(ref => (
            <div
              key={ref.id}
              className="group rounded border border-antique-500/10 bg-library-900/50 p-2.5 hover:border-antique-500/30 transition"
            >
              <p className="font-sans text-[0.6rem] text-parchment-100/75 leading-snug">
                {ref.title ?? ref.reference_original_raw ?? ref.id}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                {ref.author && (
                  <span className="font-sans text-[0.52rem] text-antique-400/75">{ref.author}</span>
                )}
                <EvidenceBadge status={ref.passage_status ?? ref.evidence_status} />
              </div>
              <button
                type="button"
                onClick={() => onFocus(ref)}
                className="mt-1.5 font-sans text-[0.52rem] text-antique-400/50 opacity-0 group-hover:opacity-100 hover:text-antique-400 transition"
              >
                Ver caminho documental →
              </button>
            </div>
          ))}
          {filtered.length > 200 && (
            <p className="py-2 text-center font-sans text-[0.52rem] text-parchment-100/25">
              Mostrando 200 de {filtered.length}. Use os filtros para refinar.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function AtlasInspectorV2({ atlasState, dispatch, ideaMeta, ideaData }: Props) {
  const { currentLevel, selectedTopicId, selectedSubtopicId, selectedReferenceId } = atlasState

  const handleFocusReference = (ref: AtlasNode) => {
    const path = [
      ideaMeta?.id,
      selectedTopicId,
      selectedSubtopicId,
      ref.id,
      ref.author_id,
      ref.work_id,
      ref.volume_id,
    ].filter((x): x is string => Boolean(x))
    dispatch({ type: 'FOCUS_REFERENCE', referenceId: ref.id, path })
  }

  // Empty state
  if (currentLevel === 'home') {
    return (
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-library-900/50 p-5">
        <p className="font-sans text-[0.55rem] uppercase tracking-[0.2em] text-antique-400/65">Inspetor documental</p>
        <p className="font-display text-xl text-parchment-100/55 leading-relaxed">
          Selecione uma ideia para explorar o corpus.
        </p>
        <p className="mt-2 font-sans text-xs text-parchment-100/35 leading-relaxed">
          O grafo mostra estrutura e caminhos. O inspetor mostra inventários, referências e filtros.
        </p>
      </div>
    )
  }

  // Idea level
  if (currentLevel === 'idea' && ideaMeta) {
    return (
      <div className="flex h-full flex-col gap-5 overflow-y-auto bg-library-900/50 p-5">
        <div>
          <p className="font-sans text-[0.52rem] uppercase tracking-[0.2em] text-antique-400/65">Ideia</p>
          <h2 className="mt-0.5 font-display text-2xl text-parchment-100">{ideaMeta.title_pt}</h2>
          <p className="mt-0.5 font-sans text-[0.58rem] text-parchment-100/45">
            {ideaMeta.sphere === 'judgment' ? 'Campo do Julgar' : 'Campo do Agir'}
          </p>
        </div>

        {ideaMeta.central_question && (
          <blockquote className="border-l-2 border-antique-500/35 pl-3 font-display text-sm italic text-parchment-100/65">
            {ideaMeta.central_question}
          </blockquote>
        )}

        {ideaMeta.definition && (
          <p className="font-sans text-xs text-parchment-100/55 leading-relaxed">{ideaMeta.definition}</p>
        )}

        <div className="grid grid-cols-2 gap-2 border-t border-antique-500/15 pt-4">
          {[
            { label: 'Aspectos Adler',      value: ideaMeta.counts.adler_aspects },
            { label: 'Tópicos Syntopicon',   value: ideaMeta.counts.syntopicon_topics },
            { label: 'Referências',          value: ideaMeta.counts.references },
            { label: 'Tensões',             value: ideaMeta.counts.tensions },
          ].map(s => (
            <div key={s.label} className="rounded border border-antique-500/12 bg-library-950/50 p-2 text-center">
              <p className="font-display text-xl text-antique-400">{s.value}</p>
              <p className="font-sans text-[0.52rem] text-parchment-100/45">{s.label}</p>
            </div>
          ))}
        </div>

        {ideaMeta.adler_chapters.length > 0 && (
          <div className="border-t border-antique-500/15 pt-4">
            <p className="mb-2 font-sans text-[0.52rem] uppercase tracking-[0.16em] text-antique-400/55">
              Capítulos — Six Great Ideas
            </p>
            <ol className="list-inside list-decimal space-y-1.5">
              {ideaMeta.adler_chapters.map((ch, i) => (
                <li key={i} className="font-sans text-[0.6rem] text-parchment-100/60 leading-snug">{ch}</li>
              ))}
            </ol>
          </div>
        )}

        {ideaMeta.mapping_note && (
          <div className="rounded border border-antique-500/18 bg-library-950/40 p-3">
            <p className="font-sans text-[0.58rem] text-parchment-100/45 leading-relaxed">{ideaMeta.mapping_note}</p>
          </div>
        )}
      </div>
    )
  }

  // Topic / Subtopic level
  if ((currentLevel === 'topic' || currentLevel === 'subtopic') && ideaData && selectedTopicId) {
    const topic = ideaData.nodes.find(n => n.id === selectedTopicId)
    const subtopic = selectedSubtopicId
      ? ideaData.nodes.find(n => n.id === selectedSubtopicId)
      : null

    const activeId = subtopic?.id ?? topic?.id
    const references = ideaData.nodes.filter(n =>
      n.type === 'reference' &&
      (n.topic_id === activeId || (!subtopic && n.topic_id?.startsWith(activeId ?? '')))
    )

    const subtopics = ideaData.nodes.filter(
      n => n.type === 'syntopicon_subtopic' && n.parent_topic_id === selectedTopicId
    )

    return (
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-library-900/50 p-5">
        <div>
          <p className="font-sans text-[0.52rem] uppercase tracking-[0.2em] text-antique-400/65">
            Syntopicon — Tópico {topic?.original_number ?? ''}
          </p>
          <h2 className="mt-0.5 font-display text-lg text-parchment-100 leading-snug">{topic?.title}</h2>
        </div>

        {subtopic && (
          <div className="rounded border border-antique-500/20 bg-library-950/40 p-3">
            <p className="mb-1 font-sans text-[0.52rem] text-antique-400/55 uppercase">Subtópico</p>
            <p className="font-sans text-xs text-parchment-100/70">{subtopic.title}</p>
            <button
              type="button"
              onClick={() => dispatch({ type: 'GO_BACK' })}
              className="mt-1.5 font-sans text-[0.52rem] text-antique-400/55 hover:text-antique-400 transition"
            >
              ← Ver tópico
            </button>
          </div>
        )}

        {subtopics.length > 0 && !subtopic && (
          <div className="border-t border-antique-500/15 pt-3">
            <p className="mb-2 font-sans text-[0.52rem] uppercase tracking-[0.16em] text-antique-400/55">Subtópicos</p>
            <div className="flex flex-col gap-1">
              {subtopics.map(sub => {
                const subRefCount = ideaData.nodes.filter(
                  n => n.type === 'reference' && n.topic_id === sub.id
                ).length
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => dispatch({ type: 'SELECT_SUBTOPIC', subtopicId: sub.id })}
                    className="flex items-center justify-between rounded border border-antique-500/12 bg-library-950/30 px-2.5 py-1.5 text-left hover:border-antique-500/35 hover:bg-library-950/55 transition"
                  >
                    <span className="font-sans text-[0.6rem] text-parchment-100/65">{sub.title}</span>
                    <span className="ml-2 shrink-0 font-sans text-[0.55rem] text-antique-400/60">
                      {subRefCount} ref.
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="border-t border-antique-500/15 pt-3">
          <p className="mb-2 font-sans text-[0.52rem] uppercase tracking-[0.16em] text-antique-400/55">
            Referências documentais
          </p>
          <ReferenceList references={references} onFocus={handleFocusReference} />
        </div>
      </div>
    )
  }

  // Reference level
  if (currentLevel === 'reference' && ideaData && selectedReferenceId) {
    const ref = ideaData.nodes.find(n => n.id === selectedReferenceId)
    if (!ref) return null

    const authorNode = ref.author_id ? ideaData.nodes.find(n => n.id === ref.author_id) : null
    const workNode   = ref.work_id   ? ideaData.nodes.find(n => n.id === ref.work_id)   : null
    const volumeNode = ref.volume_id ? ideaData.nodes.find(n => n.id === ref.volume_id) : null
    const topicNode  = ref.topic_id  ? ideaData.nodes.find(n => n.id === ref.topic_id)  : null

    return (
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-library-900/50 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-sans text-[0.52rem] uppercase tracking-[0.2em] text-antique-400/65">Referência documental</p>
            <h2 className="mt-0.5 font-display text-base text-parchment-100 leading-snug">
              {ref.title ?? ref.reference_original_raw ?? ref.id}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => dispatch({ type: 'CLOSE_REFERENCE' })}
            className="shrink-0 rounded border border-antique-500/20 px-2 py-1 font-sans text-[0.58rem] text-parchment-100/45 hover:text-antique-400 transition"
          >
            ← Fechar
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {authorNode && (
            <Field label="Autor" value={authorNode.title ?? ref.author} />
          )}
          {workNode && (
            <Field label="Obra" value={workNode.title ?? ref.work} />
          )}
          {volumeNode && (
            <Field label="Volume" value={volumeNode.title ?? `GBW ${ref.gbw_volume}`} />
          )}
          {topicNode && (
            <Field label="Tópico" value={topicNode.title} />
          )}
          {ref.coordinate_original && (
            <Field
              label="Coordenada original"
              value={<code className="text-[0.58rem] text-antique-400/75">{ref.coordinate_original}</code>}
            />
          )}
          <Field
            label="Estado da evidência"
            value={<EvidenceBadge status={ref.passage_status ?? ref.evidence_status} />}
          />
        </div>

        {ref.reference_original_raw && (
          <div className="rounded border border-antique-500/18 bg-library-950/55 p-3">
            <p className="mb-1 font-sans text-[0.5rem] uppercase tracking-[0.16em] text-antique-400/45">
              Referência original
            </p>
            <code className="break-all font-mono text-[0.6rem] text-parchment-100/55 leading-relaxed">
              {ref.reference_original_raw}
            </code>
          </div>
        )}

        <div className="rounded border border-antique-500/10 bg-library-950/40 p-3">
          <p className="mb-1 font-sans text-[0.5rem] uppercase tracking-[0.16em] text-antique-400/40">Passagem verificada</p>
          <p className="font-sans text-[0.6rem] text-parchment-100/35">
            {ref.passage_status === 'not_extracted'
              ? 'Auditoria textual pendente — passagem não extraída nesta fase.'
              : 'Não disponível neste corpus.'}
          </p>
        </div>
      </div>
    )
  }

  return null
}
