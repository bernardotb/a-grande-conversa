import Link from 'next/link'
import type { GBWWVolume } from '@/lib/sources/types'
import { getPeriodLabel } from '@/lib/sources'

interface VolumeCardProps {
  volume: GBWWVolume
  referenceCount?: number
}

export function VolumeCard({ volume, referenceCount }: VolumeCardProps) {
  return (
    <Link href={volume.internalPageUrl} className="block card-editorial p-6 group">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className="section-eyebrow">Vol. {volume.volumeNumber}</span>
          <h3 className="mt-1 font-serif text-lg leading-snug text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
            {volume.shortTitle}
          </h3>
          <p className="mt-1 font-sans text-xs text-[var(--faint)]">
            {volume.authors.join(', ')}
          </p>
        </div>
        <span className="stat-pill shrink-0">{getPeriodLabel(volume.category)}</span>
      </div>

      {volume.description && (
        <p className="mt-4 font-sans text-sm leading-6 text-[var(--secondary)] line-clamp-3">
          {volume.description}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {volume.works.slice(0, 3).map((work) => (
          <span key={work} className="badge-domain">
            {work}
          </span>
        ))}
        {volume.works.length > 3 && (
          <span className="badge-domain opacity-60">+{volume.works.length - 3}</span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
        {referenceCount != null && (
          <span className="font-sans text-[0.65rem] text-[var(--faint)]">
            {referenceCount} referência{referenceCount !== 1 ? 's' : ''} no projeto
          </span>
        )}
        <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)] ml-auto">
          Ver volume →
        </span>
      </div>
    </Link>
  )
}
