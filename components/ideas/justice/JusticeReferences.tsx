import Link from 'next/link'
import type { SyntopiconReference } from '@/lib/sources/types'
import { TechnicalReference } from '@/components/sources/TechnicalReference'
import { getEvidenceLabel, getRelevanceLabel } from '@/lib/sources'

interface JusticeReferencesProps {
  references: SyntopiconReference[]
  showAll?: boolean
}

const evidenceBadge: Record<SyntopiconReference['evidenceStatus'], string> = {
  documental: 'text-emerald-700 border-emerald-200',
  em_verificacao: 'text-amber-700 border-amber-200',
  inferida: 'text-sky-700 border-sky-200',
  pedagogica: 'text-violet-700 border-violet-200',
}

export function JusticeReferences({ references, showAll = false }: JusticeReferencesProps) {
  const displayed = showAll ? references : references.slice(0, 6)

  return (
    <section>
      <div className="flex items-end justify-between">
        <div>
          <span className="section-eyebrow">Referências documentais</span>
          <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
            Fontes primárias
          </h2>
        </div>
        <Link
          href="/ideias/justica/referencias"
          className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
        >
          Ver todas ({references.length}) →
        </Link>
      </div>

      <div className="mt-6 divide-y divide-[var(--border)] border border-[var(--border)]">
        {displayed.map((ref) => (
          <div key={ref.id} className="bg-white px-5 py-4">
            {/* Referência amigável — SEMPRE primeiro */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="font-serif text-sm font-medium text-[var(--primary)] leading-snug">
                  {ref.displayReference}
                </p>
                {ref.internalLocation && (
                  <p className="mt-0.5 font-sans text-[0.65rem] text-[var(--faint)]">
                    {ref.internalLocation}
                  </p>
                )}
              </div>
              <span
                className={`shrink-0 border px-2 py-0.5 font-sans text-[0.55rem] font-semibold uppercase tracking-wider ${evidenceBadge[ref.evidenceStatus]}`}
              >
                {getEvidenceLabel(ref.evidenceStatus)}
              </span>
            </div>

            <p className="mt-2 font-sans text-xs leading-5 text-[var(--secondary)]">
              {ref.role}
            </p>

            <div className="mt-3">
              <TechnicalReference reference={ref} />
            </div>

            <div className="mt-3 flex flex-wrap gap-2 border-t border-[var(--border)] pt-3">
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

      {!showAll && references.length > 6 && (
        <div className="mt-4 text-center">
          <Link href="/ideias/justica/referencias" className="btn-secondary">
            Ver todas as {references.length} referências
          </Link>
        </div>
      )}
    </section>
  )
}
