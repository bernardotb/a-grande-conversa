'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { SyntopiconReference } from '@/lib/sources/types'
import type { JusticeTopic } from '@/lib/sources/types'
import { getEvidenceLabel, getRelevanceLabel } from '@/lib/sources'
import { TechnicalReference } from './TechnicalReference'

interface ReferencesTableProps {
  references: SyntopiconReference[]
  topics: JusticeTopic[]
  initialTopicFilter?: string
}

const evidenceBadge: Record<SyntopiconReference['evidenceStatus'], string> = {
  documental: 'text-emerald-700 border-emerald-200 bg-emerald-50',
  em_verificacao: 'text-amber-700 border-amber-200 bg-amber-50',
  inferida: 'text-sky-700 border-sky-200 bg-sky-50',
  pedagogica: 'text-violet-700 border-violet-200 bg-violet-50',
}

export function ReferencesTable({ references, topics, initialTopicFilter }: ReferencesTableProps) {
  const [topicFilter, setTopicFilter] = useState(initialTopicFilter ?? 'all')
  const [authorFilter, setAuthorFilter] = useState('all')
  const [volumeFilter, setVolumeFilter] = useState('all')
  const [relevanceFilter, setRelevanceFilter] = useState('all')
  const [evidenceFilter, setEvidenceFilter] = useState('all')

  const authors = useMemo(
    () => Array.from(new Set(references.map((r) => r.author))).sort(),
    [references]
  )
  const volumes = useMemo(
    () => Array.from(new Set(references.map((r) => r.gbwwVolume))).sort((a, b) => a - b),
    [references]
  )

  const filtered = useMemo(() => {
    return references.filter((r) => {
      if (topicFilter !== 'all' && r.topicId !== topicFilter) return false
      if (authorFilter !== 'all' && r.author !== authorFilter) return false
      if (volumeFilter !== 'all' && r.gbwwVolume !== Number(volumeFilter)) return false
      if (relevanceFilter !== 'all' && r.relevance !== relevanceFilter) return false
      if (evidenceFilter !== 'all' && r.evidenceStatus !== evidenceFilter) return false
      return true
    })
  }, [references, topicFilter, authorFilter, volumeFilter, relevanceFilter, evidenceFilter])

  const topicMap = useMemo(
    () => Object.fromEntries(topics.map((t) => [t.id, t.title])),
    [topics]
  )

  const hasFilters =
    topicFilter !== 'all' ||
    authorFilter !== 'all' ||
    volumeFilter !== 'all' ||
    relevanceFilter !== 'all' ||
    evidenceFilter !== 'all'

  return (
    <div>
      {/* Filtros */}
      <div className="mb-6 flex flex-wrap gap-3">
        <select
          value={topicFilter}
          onChange={(e) => setTopicFilter(e.target.value)}
          className="border border-[var(--border)] bg-white px-3 py-1.5 font-sans text-xs text-[var(--primary)] focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="all">Todos os tópicos</option>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>

        <select
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
          className="border border-[var(--border)] bg-white px-3 py-1.5 font-sans text-xs text-[var(--primary)] focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="all">Todos os autores</option>
          {authors.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <select
          value={volumeFilter}
          onChange={(e) => setVolumeFilter(e.target.value)}
          className="border border-[var(--border)] bg-white px-3 py-1.5 font-sans text-xs text-[var(--primary)] focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="all">Todos os volumes</option>
          {volumes.map((v) => (
            <option key={v} value={v}>
              Vol. {v}
            </option>
          ))}
        </select>

        <select
          value={relevanceFilter}
          onChange={(e) => setRelevanceFilter(e.target.value)}
          className="border border-[var(--border)] bg-white px-3 py-1.5 font-sans text-xs text-[var(--primary)] focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="all">Qualquer relevância</option>
          <option value="central">Central</option>
          <option value="supporting">Complementar</option>
          <option value="contextual">Contextual</option>
        </select>

        <select
          value={evidenceFilter}
          onChange={(e) => setEvidenceFilter(e.target.value)}
          className="border border-[var(--border)] bg-white px-3 py-1.5 font-sans text-xs text-[var(--primary)] focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="all">Qualquer status</option>
          <option value="documental">Documentado</option>
          <option value="em_verificacao">Em verificação</option>
          <option value="inferida">Inferida</option>
          <option value="pedagogica">Pedagógica</option>
        </select>

        {hasFilters && (
          <button
            onClick={() => {
              setTopicFilter('all')
              setAuthorFilter('all')
              setVolumeFilter('all')
              setRelevanceFilter('all')
              setEvidenceFilter('all')
            }}
            className="font-sans text-xs text-[var(--faint)] hover:text-[var(--accent)] transition-colors"
          >
            Limpar filtros ×
          </button>
        )}
      </div>

      {/* Contador */}
      <p className="mb-4 font-sans text-xs text-[var(--faint)]">
        {filtered.length} referência{filtered.length !== 1 ? 's' : ''}
        {hasFilters ? ' filtradas' : ' no total'}
      </p>

      {/* Lista de cards */}
      {filtered.length === 0 ? (
        <p className="py-12 text-center font-sans text-sm text-[var(--faint)]">
          Nenhuma referência encontrada com os filtros aplicados.
        </p>
      ) : (
        <div className="divide-y divide-[var(--border)] border border-[var(--border)]">
          {filtered.map((ref) => (
            <div key={ref.id} className="bg-white p-5">
              {/* Referência amigável — SEMPRE primeiro */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-base font-medium text-[var(--primary)] leading-snug">
                    {ref.displayReference}
                  </p>
                  {ref.internalLocation && (
                    <p className="mt-0.5 font-sans text-xs text-[var(--faint)]">
                      {ref.internalLocation}
                    </p>
                  )}
                  {topicMap[ref.topicId] && (
                    <p className="mt-1 font-sans text-[0.65rem] text-[var(--faint)]">
                      Tópico: {topicMap[ref.topicId]}
                    </p>
                  )}
                </div>
                <span
                  className={`shrink-0 border px-2 py-0.5 font-sans text-[0.6rem] font-semibold uppercase tracking-wider ${evidenceBadge[ref.evidenceStatus]}`}
                >
                  {getEvidenceLabel(ref.evidenceStatus)}
                </span>
              </div>

              <p className="mt-3 font-sans text-sm leading-6 text-[var(--secondary)]">{ref.role}</p>

              {/* Referência técnica colapsável */}
              <div className="mt-3">
                <TechnicalReference reference={ref} />
              </div>

              {/* Ações */}
              <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border)] pt-3">
                <span className="font-sans text-[0.6rem] text-[var(--faint)] self-center mr-1">
                  Vol. {ref.gbwwVolume} · {getRelevanceLabel(ref.relevance)}
                </span>
                {ref.volumePdfUrl ? (
                  <a
                    href={ref.volumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-[0.6rem] py-1 px-3"
                  >
                    Abrir volume
                  </a>
                ) : (
                  <span className="btn-primary text-[0.6rem] py-1 px-3 opacity-40 cursor-not-allowed">
                    Abrir volume
                  </span>
                )}
                <Link
                  href={ref.volumePageUrl}
                  className="btn-secondary text-[0.6rem] py-1 px-3"
                >
                  Ver página do volume
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
