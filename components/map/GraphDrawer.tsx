'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { getMapNodeDetails } from '@/lib/graph/mapSelectors'
import { getGreatIdeas } from '@/lib/graph/utils'
import type { GraphNode, AuthorNode, WorkNode, TensionNode } from '@/lib/graph/types'

interface GraphDrawerProps {
  nodeId: string | null
  onClose: () => void
}

const EVIDENCE_LABEL: Record<string, string> = {
  documental:     'Documental',
  inferida:       'Inferida',
  pedagogica:     'Pedagógica',
  em_verificacao: 'Em verificação',
}

const EVIDENCE_COLOR: Record<string, string> = {
  documental:     'text-green-400',
  inferida:       'text-yellow-400',
  pedagogica:     'text-blue-400',
  em_verificacao: 'text-orange-400',
}

const TYPE_LABEL: Record<string, string> = {
  great_idea:      'Grande Ideia',
  author:          'Autor',
  work:            'Obra',
  tension:         'Tensão filosófica',
  associated_idea: 'Ideia associada',
}

function RelatedIdeasList({ ideaIds }: { ideaIds: string[] }) {
  const linked = getGreatIdeas().filter((g) => ideaIds.includes(g.id))
  if (!linked.length) return null
  return (
    <div className="mt-4 space-y-1">
      <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-widest text-parchment-200/35">
        Ideias relacionadas
      </p>
      <ul className="space-y-0.5">
        {linked.map((idea) => (
          <li key={idea.id}>
            <Link
              href={`/ideias/${idea.slug}`}
              className="font-sans text-xs text-antique-400/80 underline-offset-2 transition hover:text-antique-300 hover:underline"
            >
              {idea.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GreatIdeaBody({ node }: { node: GraphNode }) {
  return (
    <>
      {node.axis && (
        <span
          className={`inline-block rounded-full px-2 py-0.5 font-sans text-[0.55rem] font-semibold uppercase tracking-wider ${
            node.axis === 'como_julgamos'
              ? 'bg-violet-900/50 text-violet-300'
              : node.axis === 'como_agimos'
              ? 'bg-green-900/50 text-green-300'
              : 'bg-library-800/50 text-parchment-200/40'
          }`}
        >
          {node.axis === 'como_julgamos'
            ? 'Julgar'
            : node.axis === 'como_agimos'
            ? 'Agir'
            : 'Transversal'}
        </span>
      )}
      {node.question && (
        <p className="mt-3 font-serif text-sm italic text-parchment-200/65">
          &ldquo;{node.question}&rdquo;
        </p>
      )}
      <p className="mt-3 font-sans text-xs leading-relaxed text-parchment-200/55">
        {node.summary || 'Em curadoria.'}
      </p>
      <Link
        href={`/ideias/${node.slug}`}
        className="mt-5 inline-block rounded border border-antique-500/40 px-4 py-1.5 font-sans text-[0.62rem] font-semibold uppercase tracking-widest text-antique-400 transition hover:bg-antique-400/10"
      >
        Explorar ideia →
      </Link>
    </>
  )
}

function AuthorBody({ node }: { node: AuthorNode }) {
  return (
    <>
      {node.period && (
        <p className="font-sans text-[0.62rem] text-parchment-200/35">{node.period}</p>
      )}
      <p className="mt-3 font-sans text-xs leading-relaxed text-parchment-200/55">
        {node.summary || 'Em curadoria.'}
      </p>
      <RelatedIdeasList ideaIds={node.relatedIdeas} />
    </>
  )
}

function WorkBody({ node }: { node: WorkNode }) {
  return (
    <>
      <p className="mt-3 font-sans text-xs leading-relaxed text-parchment-200/55">
        {node.summary || 'Em curadoria.'}
      </p>
      <RelatedIdeasList ideaIds={node.relatedIdeas} />
    </>
  )
}

function TensionBody({ node }: { node: TensionNode }) {
  return (
    <>
      {node.sourceStatus && (
        <span
          className={`font-sans text-[0.58rem] font-semibold ${
            EVIDENCE_COLOR[node.sourceStatus] ?? 'text-parchment-200/35'
          }`}
        >
          {EVIDENCE_LABEL[node.sourceStatus] ?? node.sourceStatus}
        </span>
      )}
      <p className="mt-3 font-sans text-xs leading-relaxed text-parchment-200/55">
        {node.summary || 'Em curadoria.'}
      </p>
      <RelatedIdeasList ideaIds={node.relatedIdeas} />
    </>
  )
}

export function GraphDrawer({ nodeId, onClose }: GraphDrawerProps) {
  const node = nodeId ? getMapNodeDetails(nodeId) : undefined

  return (
    <AnimatePresence>
      {node && (
        <motion.aside
          key={node.id}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 36 }}
          className="absolute right-0 top-0 z-30 flex h-full w-72 flex-col border-l border-library-700/40 bg-library-950/96 backdrop-blur-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-library-700/35 p-5 pb-4">
            <div className="flex-1 pr-3">
              <span className="font-sans text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-parchment-200/30">
                {TYPE_LABEL[node.type] ?? node.type}
              </span>
              <h2 className="mt-1 font-serif text-[1.05rem] font-bold leading-snug text-parchment-100">
                {node.label}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar painel"
              className="mt-0.5 rounded p-1 text-parchment-200/35 transition hover:bg-library-800 hover:text-parchment-100"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 pt-4">
            {node.type === 'great_idea' && <GreatIdeaBody node={node} />}
            {node.type === 'author' && <AuthorBody node={node as AuthorNode} />}
            {node.type === 'work' && <WorkBody node={node as WorkNode} />}
            {node.type === 'tension' && <TensionBody node={node as TensionNode} />}
            {node.type === 'associated_idea' && (
              <p className="mt-3 font-sans text-xs leading-relaxed text-parchment-200/55">
                {node.summary || 'Em curadoria.'}
              </p>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
