import type { Metadata } from 'next'
import Link from 'next/link'
import { gbwwVolumes, getReferencesByVolume } from '@/lib/sources'
import { VolumeCard } from '@/components/sources/VolumeCard'

export const metadata: Metadata = {
  title: 'Volumes — Great Books of the Western World',
  description:
    'Os volumes da coleção Great Books mobilizados pelo projeto A Grande Conversa. Esta fase reúne os 13 volumes que fundamentam o debate sobre Justiça.',
}

export default function VolumesPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero */}
      <header className="border-b border-[var(--border)] bg-[var(--cream)] pb-10 pt-12">
        <div className="gc-page px-4">
          <span className="section-eyebrow">Acervo documental</span>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
            Great Books of the Western World
          </h1>
          <p className="mt-4 max-w-prose font-serif text-lg leading-7 text-[var(--secondary)]">
            54 volumes que reúnem os textos fundamentais do pensamento ocidental, do século V a.C. ao XX.
            Esta fase do projeto indexa os volumes mobilizados pela ideia{' '}
            <Link href="/ideias/justica" className="text-[var(--accent)] hover:underline">
              Justiça
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="stat-pill">{gbwwVolumes.length} volumes indexados</span>
            <span className="stat-pill">54 volumes na coleção</span>
            <span className="badge-domain">Great Books · Encyclopædia Britannica</span>
          </div>
        </div>
      </header>

      {/* Aviso de fase */}
      <div className="border-b border-amber-200 bg-amber-50 px-4 py-3">
        <p className="gc-page font-sans text-xs leading-5 text-amber-800">
          <strong>Fase atual:</strong> apenas os volumes mobilizados pela ideia Justiça estão indexados.
          Os volumes restantes serão adicionados progressivamente.
        </p>
      </div>

      {/* Grid de volumes */}
      <div className="gc-page px-4 py-12">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            Volumes mobilizados pela Justiça
          </h2>
          <Link
            href="/ideias/justica/volumes"
            className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
          >
            Ver percurso cronológico →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {gbwwVolumes.map((volume) => {
            const refs = getReferencesByVolume(volume.volumeNumber)
            return (
              <VolumeCard key={volume.id} volume={volume} referenceCount={refs.length} />
            )
          })}
        </div>
      </div>

      {/* Rodapé de navegação */}
      <div className="border-t border-[var(--border)] py-8">
        <div className="gc-page px-4 flex flex-wrap gap-6 text-sm">
          <Link href="/ideias/justica" className="text-[var(--accent)] hover:underline">
            ← Justiça
          </Link>
          <Link href="/ideias/justica/referencias" className="text-[var(--accent)] hover:underline">
            Referências documentais →
          </Link>
        </div>
      </div>
    </main>
  )
}
