'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { SyntopiconReference } from '@/lib/sources/types'
import type { JusticeTopic } from '@/lib/sources/types'
import type { GBWWVolume } from '@/lib/sources/types'

interface JusticeMiniGraphProps {
  topics: JusticeTopic[]
  references: SyntopiconReference[]
  volumes: GBWWVolume[]
}

type NodeType = 'idea' | 'topic' | 'volume'

interface NodeInfo {
  id: string
  label: string
  type: NodeType
}

const IDEAS: NodeInfo[] = [
  { id: 'justica', label: 'Justiça', type: 'idea' },
  { id: 'liberdade', label: 'Liberdade', type: 'idea' },
  { id: 'igualdade', label: 'Igualdade', type: 'idea' },
  { id: 'verdade', label: 'Verdade', type: 'idea' },
  { id: 'lei', label: 'Lei', type: 'idea' },
]

const TOPICS: NodeInfo[] = [
  { id: 'justice-force-vs-right', label: 'Força vs. Direito', type: 'topic' },
  { id: 'justice-natural-law-positive-law', label: 'Lei Natural vs. Positiva', type: 'topic' },
  { id: 'justice-distributive-corrective', label: 'Distributiva vs. Corretiva', type: 'topic' },
]

const VOLUMES: NodeInfo[] = [
  { id: '7', label: 'Vol. 7 — Platão', type: 'volume' },
  { id: '9', label: 'Vol. 9 — Aristóteles', type: 'volume' },
  { id: '42', label: 'Vol. 42 — Kant', type: 'volume' },
]

const nodeStyle: Record<NodeType, string> = {
  idea: 'bg-[var(--accent)] text-[var(--cream)] border-[var(--accent)]',
  topic: 'bg-white text-[var(--primary)] border-[var(--border)]',
  volume: 'bg-[var(--surface)] text-[var(--primary)] border-[var(--border)]',
}

const nodeSelectedStyle: Record<NodeType, string> = {
  idea: 'ring-2 ring-offset-2 ring-[var(--accent)]',
  topic: 'border-[var(--accent)]',
  volume: 'border-[var(--accent)]',
}

export function JusticeMiniGraph({ topics, references, volumes }: JusticeMiniGraphProps) {
  const [selected, setSelected] = useState<{ id: string; type: NodeType } | null>(null)

  const topicMap = Object.fromEntries(topics.map((t) => [t.id, t]))
  const volumeMap = Object.fromEntries(volumes.map((v) => [String(v.volumeNumber), v]))

  function getPanelContent() {
    if (!selected) return null

    if (selected.type === 'topic') {
      const topic = topicMap[selected.id]
      if (!topic) return null
      const topicRefs = references.filter((r) => r.topicId === selected.id)
      return (
        <div>
          <p className="font-serif text-sm font-medium text-[var(--primary)]">{topic.title}</p>
          <p className="mt-1 font-serif text-xs italic text-[var(--secondary)]">{topic.question}</p>
          {topicRefs.length > 0 && (
            <div className="mt-3 space-y-2">
              {topicRefs.slice(0, 3).map((r) => (
                <div key={r.id} className="border-l-2 border-[var(--accent)] pl-3">
                  <p className="font-sans text-xs text-[var(--primary)]">{r.displayReference}</p>
                  <p className="mt-0.5 font-sans text-[0.6rem] text-[var(--faint)] line-clamp-2">
                    {r.role}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    if (selected.type === 'volume') {
      const vol = volumeMap[selected.id]
      if (!vol) return null
      return (
        <div>
          <p className="font-serif text-sm font-medium text-[var(--primary)]">{vol.title}</p>
          <p className="mt-1 font-sans text-xs text-[var(--faint)]">{vol.authors.join(', ')}</p>
          {vol.description && (
            <p className="mt-2 font-sans text-xs leading-5 text-[var(--secondary)] line-clamp-3">
              {vol.description}
            </p>
          )}
          <Link
            href={vol.internalPageUrl}
            className="mt-3 block font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
          >
            Ver volume →
          </Link>
        </div>
      )
    }

    if (selected.type === 'idea') {
      return (
        <div>
          <p className="font-serif text-sm font-medium text-[var(--primary)]">
            {selected.id.charAt(0).toUpperCase() + selected.id.slice(1)}
          </p>
          <Link
            href={`/ideias/${selected.id}`}
            className="mt-2 block font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
          >
            Ver ideia →
          </Link>
        </div>
      )
    }

    return null
  }

  function renderNode(node: NodeInfo) {
    const isSelected = selected?.id === node.id
    return (
      <button
        key={node.id}
        onClick={() => setSelected(isSelected ? null : { id: node.id, type: node.type })}
        className={`border px-3 py-1.5 font-sans text-xs transition-all ${nodeStyle[node.type]} ${isSelected ? nodeSelectedStyle[node.type] : 'hover:border-[var(--accent)]'}`}
      >
        {node.label}
      </button>
    )
  }

  const panel = getPanelContent()

  return (
    <section>
      <span className="section-eyebrow">Conexões</span>
      <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
        Mini-grafo da Justiça
      </h2>
      <p className="mt-2 font-sans text-xs text-[var(--faint)]">
        Clique em qualquer nó para ver conexões
      </p>

      <div className="mt-6 border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Ideias conectadas */}
          <div>
            <p className="section-eyebrow mb-3">Ideias</p>
            <div className="flex flex-wrap gap-2">
              {IDEAS.map(renderNode)}
            </div>
          </div>

          {/* Tópicos */}
          <div>
            <p className="section-eyebrow mb-3">Tópicos</p>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map(renderNode)}
            </div>
          </div>

          {/* Volumes */}
          <div>
            <p className="section-eyebrow mb-3">Volumes</p>
            <div className="flex flex-wrap gap-2">
              {VOLUMES.map(renderNode)}
            </div>
          </div>
        </div>

        {/* Painel de detalhes */}
        {panel && (
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            {panel}
          </div>
        )}
      </div>
    </section>
  )
}
