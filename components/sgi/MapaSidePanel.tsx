'use client'

import type { AutorNode } from '@/lib/mapa-data'

interface MapaSidePanelProps {
  autor: AutorNode | null
  onClose: () => void
}

export function MapaSidePanel({ autor, onClose }: MapaSidePanelProps) {
  return (
    <aside
      className={`absolute inset-y-0 right-0 z-20 w-80 border-l border-library-700/50 bg-library-950/98 backdrop-blur transition-transform duration-300 ease-in-out ${
        autor ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-label="Detalhes do pensador"
      aria-hidden={!autor}
    >
      {autor && (
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between border-b border-library-700/30 px-5 py-4">
            <div>
              <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-antique-400/60">
                {autor.disciplina}
              </p>
              <h2 className="mt-1 font-serif text-xl font-light text-parchment-100">
                {autor.name}
              </h2>
              <p className="mt-0.5 font-sans text-xs text-parchment-200/45">
                {autor.dates}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-1 grid size-8 place-items-center text-parchment-200/40 transition hover:text-parchment-100"
              aria-label="Fechar painel"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
            <div>
              <p className="mb-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
                Obra
              </p>
              <p className="font-serif text-sm italic text-parchment-200/70">
                {autor.obra}
              </p>
            </div>

            <div>
              <p className="mb-3 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
                Posição
              </p>
              <blockquote className="border-l-2 border-antique-500/50 pl-4 font-serif text-sm italic leading-7 text-parchment-200/85">
                &ldquo;{autor.quote}&rdquo;
              </blockquote>
            </div>

            <div>
              <p className="mb-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
                Contexto
              </p>
              <p className="font-sans text-xs leading-6 text-parchment-200/55">
                {autor.quoteContext}
              </p>
            </div>

            <p className="font-sans text-[0.55rem] italic text-parchment-200/25">
              Paráfrase editorial — não representa tradução literal da obra.
            </p>
          </div>
        </div>
      )}
    </aside>
  )
}
