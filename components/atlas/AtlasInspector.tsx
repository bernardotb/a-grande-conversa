'use client'

import type { AtlasNode, AtlasEdge } from '@/lib/atlas-six-ideas/types'
import {
  NODE_TYPE_LABELS, NODE_TYPE_COLORS, IDEA_EN_TO_PT, IDEA_PT_TITLE, IDEA_ROUTE_MAP,
} from '@/lib/atlas-six-ideas/types'
import { getNodeTitle } from '@/lib/atlas-six-ideas/selectors'
import Link from 'next/link'

interface AtlasInspectorProps {
  node: AtlasNode | null
  allNodes: AtlasNode[]
  edges: AtlasEdge[]
  onSelectNode: (node: AtlasNode) => void
  onClose?: () => void
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-block rounded px-1.5 py-0.5 font-sans text-[0.56rem] font-semibold uppercase tracking-wider"
      style={{ backgroundColor: `${color}22`, color }}
    >
      {label}
    </span>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="mb-0.5 font-sans text-[0.56rem] uppercase tracking-[0.12em] text-parchment-200/35">
        {label}
      </div>
      <div className="font-sans text-xs text-parchment-100/80 leading-relaxed">{children}</div>
    </div>
  )
}

export function AtlasInspector({ node, allNodes, edges, onSelectNode, onClose }: AtlasInspectorProps) {
  if (!node) {
    return (
      <div className="flex h-full flex-col border-l border-antique-500/20 bg-library-900 px-5 py-6 text-parchment-100">
        <p className="font-sans text-[0.6rem] uppercase tracking-[0.12em] text-parchment-200/35 mb-3">
          Inspetor documental
        </p>
        <h2 className="font-serif text-sm font-semibold text-parchment-100/60 mb-2">Escolha um nó</h2>
        <p className="font-sans text-xs text-parchment-200/40 leading-relaxed mb-4">
          O painel mostrará função, fonte, status documental, coordenada original e relações navegáveis.
        </p>
        <div className="border-t border-antique-500/15 pt-4">
          <p className="font-sans text-[0.58rem] text-parchment-200/30 leading-relaxed">
            Trilha de rastreabilidade:<br />
            ideia → aspecto → tópico → referência → autor → obra → volume
          </p>
        </div>
      </div>
    )
  }

  const color = NODE_TYPE_COLORS[node.type] ?? '#d7c8a8'
  const typeLabel = NODE_TYPE_LABELS[node.type] ?? node.type
  const title = getNodeTitle(node)

  // Build adjacency for navigation
  const nodeById = new Map(allNodes.map(n => [n.id, n]))
  const adjacent: AtlasNode[] = []
  edges.forEach(e => {
    if (e.source === node.id && nodeById.has(e.target)) {
      adjacent.push(nodeById.get(e.target)!)
    } else if (e.target === node.id && nodeById.has(e.source)) {
      adjacent.push(nodeById.get(e.source)!)
    }
  })
  const uniqueAdjacent = [...new Map(adjacent.map(n => [n.id, n])).values()].slice(0, 15)

  // Traceability trail
  const trailParts: string[] = []
  if (node.idea) {
    const ideaPt = IDEA_EN_TO_PT[node.idea]
    if (ideaPt) trailParts.push(IDEA_PT_TITLE[ideaPt] ?? node.idea)
  }
  if (node.type === 'reference' && node.topic_id) {
    const topicNode = nodeById.get(node.topic_id)
    if (topicNode) trailParts.push(getNodeTitle(topicNode))
    if (node.author) trailParts.push(node.author)
    if (node.work) trailParts.push(node.work)
    if (node.gbw_volume) trailParts.push(`Vol. ${node.gbw_volume}`)
  }

  const ideaRoute = node.idea ? IDEA_ROUTE_MAP[node.idea] : null

  return (
    <div className="flex h-full flex-col border-l border-antique-500/20 bg-library-900 px-5 py-5 overflow-y-auto text-parchment-100">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <p className="font-sans text-[0.56rem] uppercase tracking-[0.12em] text-parchment-200/35 mb-1">
            Inspetor documental
          </p>
          <Badge label={typeLabel} color={color} />
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar inspetor"
            className="shrink-0 rounded border border-antique-500/20 px-2 py-1 font-sans text-[0.6rem] text-parchment-200/40 hover:text-parchment-100 transition"
          >
            ×
          </button>
        )}
      </div>

      {/* Title */}
      <h2 className="font-serif text-sm font-semibold leading-snug text-antique-400 mb-4">
        {title}
      </h2>

      {/* Summary / definition */}
      {(node.summary || node.definition) && (
        <Field label="Descrição">
          {node.definition ?? node.summary}
        </Field>
      )}

      {/* Central question */}
      {node.central_question && (
        <Field label="Pergunta central">
          <em className="not-italic text-parchment-200/70">{node.central_question}</em>
        </Field>
      )}

      {/* Reference-specific fields */}
      {node.type === 'reference' && (
        <>
          {node.reference_original_raw && (
            <Field label="Coordenada original (Syntopicon)">
              <code className="block rounded bg-library-950 px-2 py-1.5 font-mono text-[0.58rem] text-antique-400/90 leading-relaxed break-all">
                {node.reference_original_raw}
              </code>
            </Field>
          )}
          {node.author && <Field label="Autor">{node.author}</Field>}
          {node.work && <Field label="Obra">{node.work}</Field>}
          {node.gbw_volume && <Field label="Volume Great Books">{node.gbw_volume}</Field>}
          <Field label="Status de passagem">
            <span className="text-parchment-200/40 italic">
              {node.passage_status === 'not_extracted'
                ? 'Passagem não extraída — coordenada documental apenas'
                : node.passage_status}
            </span>
          </Field>
          {node.evidence_status && (
            <Field label="Status de evidência">{node.evidence_status}</Field>
          )}
        </>
      )}

      {/* Adler chapters */}
      {node.adler_chapters && node.adler_chapters.length > 0 && (
        <Field label="Capítulos em Adler">
          <ul className="flex flex-col gap-0.5">
            {node.adler_chapters.map(ch => (
              <li key={ch} className="text-parchment-200/60">{ch}</li>
            ))}
          </ul>
        </Field>
      )}

      {/* Idea link */}
      {node.idea && (
        <Field label="Ideia">
          <span className="flex items-center gap-2">
            <span>{IDEA_PT_TITLE[IDEA_EN_TO_PT[node.idea]] ?? node.idea}</span>
            {ideaRoute && (
              <Link
                href={ideaRoute}
                className="text-antique-400 hover:underline text-[0.6rem]"
              >
                Abrir página →
              </Link>
            )}
          </span>
        </Field>
      )}

      {/* Traceability trail */}
      {trailParts.length > 0 && (
        <div className="mb-4 border-t border-antique-500/15 pt-3">
          <p className="mb-1.5 font-sans text-[0.56rem] uppercase tracking-[0.12em] text-parchment-200/35">
            Rastreabilidade
          </p>
          <p className="font-sans text-[0.6rem] text-parchment-200/50 leading-relaxed">
            {trailParts.join(' → ')}
          </p>
        </div>
      )}

      {/* Adjacent nodes */}
      {uniqueAdjacent.length > 0 && (
        <div className="border-t border-antique-500/15 pt-3">
          <p className="mb-2 font-sans text-[0.56rem] uppercase tracking-[0.12em] text-parchment-200/35">
            Relações ({uniqueAdjacent.length})
          </p>
          <ul className="flex flex-col gap-1">
            {uniqueAdjacent.map(adj => (
              <li key={adj.id}>
                <button
                  type="button"
                  onClick={() => onSelectNode(adj)}
                  className="flex w-full items-start gap-2 rounded px-2 py-1.5 text-left hover:bg-library-800 transition"
                >
                  <span
                    className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: NODE_TYPE_COLORS[adj.type] ?? '#d7c8a8' }}
                  />
                  <span className="font-sans text-[0.62rem] text-parchment-100/70 leading-snug">
                    {getNodeTitle(adj)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
