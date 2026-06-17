import Link from 'next/link'
import type { SyntopiconReference } from '@/lib/sources/types'
import { TechnicalReference } from './TechnicalReference'
import { getEvidenceLabel, getRelevanceLabel } from '@/lib/sources'

interface VolumeReferenceCardProps {
  reference: SyntopiconReference
}

const evidenceColors: Record<SyntopiconReference['evidenceStatus'], string> = {
  documental: 'text-emerald-600 border-emerald-200',
  em_verificacao: 'text-amber-600 border-amber-200',
  inferida: 'text-sky-600 border-sky-200',
  pedagogica: 'text-violet-600 border-violet-200',
}

export function VolumeReferenceCard({ reference }: VolumeReferenceCardProps) {
  return (
    <div className="border border-[var(--border)] bg-white p-5">
      {/* Header amigável — sempre primeiro */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-serif text-base font-medium text-[var(--primary)] leading-snug">
            {reference.displayReference}
          </p>
          {reference.internalLocation && (
            <p className="mt-0.5 font-sans text-xs text-[var(--faint)]">
              {reference.internalLocation}
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span
            className={`border px-2 py-0.5 font-sans text-[0.6rem] font-semibold uppercase tracking-wider ${evidenceColors[reference.evidenceStatus]}`}
          >
            {getEvidenceLabel(reference.evidenceStatus)}
          </span>
          <span className="font-sans text-[0.6rem] text-[var(--faint)]">
            {getRelevanceLabel(reference.relevance)}
          </span>
        </div>
      </div>

      {/* Papel na discussão */}
      <p className="mt-3 font-sans text-sm leading-6 text-[var(--secondary)]">{reference.role}</p>

      {/* Referência técnica — colapsável, abaixo */}
      <div className="mt-3">
        <TechnicalReference reference={reference} />
      </div>

      {/* Ações */}
      <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
        {reference.volumePdfUrl ? (
          <a
            href={reference.volumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            Abrir volume
          </a>
        ) : (
          <span className="btn-primary text-xs opacity-40 cursor-not-allowed">
            Abrir volume
          </span>
        )}
        <Link href={reference.volumePageUrl} className="btn-secondary text-xs">
          Ver página do volume
        </Link>
      </div>
    </div>
  )
}
