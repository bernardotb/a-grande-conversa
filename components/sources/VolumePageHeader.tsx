import type { GBWWVolume } from '@/lib/sources/types'
import { getPeriodLabel } from '@/lib/sources'

interface VolumePageHeaderProps {
  volume: GBWWVolume
}

export function VolumePageHeader({ volume }: VolumePageHeaderProps) {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--cream)] pb-10 pt-12">
      <div className="gc-page px-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="stat-pill">Vol. {volume.volumeNumber}</span>
          <span className="stat-pill">{getPeriodLabel(volume.category)}</span>
          <span className="badge-domain">Great Books</span>
        </div>

        <h1 className="mt-4 font-serif text-3xl leading-tight text-[var(--primary)] sm:text-4xl">
          {volume.shortTitle}
        </h1>

        <p className="mt-2 font-sans text-sm text-[var(--faint)]">
          {volume.authors.join(' · ')}
        </p>

        {volume.description && (
          <p className="mt-5 font-serif text-base leading-7 text-[var(--secondary)] max-w-prose">
            {volume.description}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {volume.externalPdfUrl ? (
            <a
              href={volume.externalPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Abrir PDF completo
            </a>
          ) : (
            <span
              className="btn-primary opacity-40 cursor-not-allowed"
              title="URL do PDF ainda não cadastrado"
            >
              Abrir PDF completo
            </span>
          )}
        </div>

        <div className="mt-8">
          <p className="section-eyebrow mb-3">Obras neste volume</p>
          <div className="flex flex-wrap gap-2">
            {volume.works.map((work) => (
              <span key={work} className="badge-domain">
                {work}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
