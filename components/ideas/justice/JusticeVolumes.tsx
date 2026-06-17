import Link from 'next/link'
import type { GBWWVolume } from '@/lib/sources/types'
import type { SyntopiconReference } from '@/lib/sources/types'
import { getReferencesByVolume } from '@/lib/sources'

interface JusticeVolumesProps {
  volumes: GBWWVolume[]
  references: SyntopiconReference[]
}

export function JusticeVolumes({ volumes, references }: JusticeVolumesProps) {
  return (
    <section>
      <span className="section-eyebrow">Percurso documental</span>
      <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
        A Justiça nos Great Books
      </h2>
      <p className="mt-2 font-sans text-sm text-[var(--secondary)]">
        {volumes.length} volumes mobilizados · do século V a.C. ao XIX
      </p>

      <div className="mt-6 space-y-px">
        {volumes.map((vol) => {
          const volRefs = references.filter((r) => r.gbwwVolume === vol.volumeNumber)
          return (
            <Link
              key={vol.id}
              href={vol.internalPageUrl}
              className="block border border-[var(--border)] bg-white px-6 py-5 hover:border-[var(--accent)] transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.65rem] text-[var(--faint)]">
                      Vol. {vol.volumeNumber}
                    </span>
                    <span className="text-[var(--border)]">·</span>
                    <span className="font-sans text-[0.65rem] text-[var(--faint)]">
                      {vol.period}
                    </span>
                  </div>
                  <h3 className="mt-1 font-serif text-lg text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                    {vol.shortTitle}
                  </h3>
                  <p className="mt-0.5 font-sans text-xs text-[var(--faint)]">
                    {vol.authors.join(', ')}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  {volRefs.length > 0 && (
                    <span className="stat-pill">
                      {volRefs.length} ref.
                    </span>
                  )}
                </div>
              </div>

              {vol.description && (
                <p className="mt-3 font-sans text-sm leading-6 text-[var(--secondary)]">
                  {vol.description}
                </p>
              )}

              <div className="mt-3 flex flex-wrap gap-1.5">
                {vol.works.slice(0, 3).map((w) => (
                  <span key={w} className="badge-domain text-[0.55rem]">
                    {w}
                  </span>
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
