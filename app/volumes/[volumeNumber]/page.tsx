import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  gbwwVolumes,
  getVolumeByNumber,
  getReferencesByVolume,
  getTopicsByVolumeNumber,
} from '@/lib/sources'
import { VolumePageHeader } from '@/components/sources/VolumePageHeader'
import { VolumeReferenceCard } from '@/components/sources/VolumeReferenceCard'

export function generateStaticParams() {
  return gbwwVolumes.map((v) => ({ volumeNumber: String(v.volumeNumber) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ volumeNumber: string }>
}): Promise<Metadata> {
  const { volumeNumber } = await params
  const volume = getVolumeByNumber(Number(volumeNumber))
  if (!volume) return { title: 'Volume não encontrado' }
  return {
    title: `${volume.title} — Great Books`,
    description:
      volume.description ??
      `${volume.shortTitle} — ${volume.authors.join(', ')}. Volume ${volume.volumeNumber} dos Great Books of the Western World.`,
  }
}

export default async function VolumeNumberPage({
  params,
}: {
  params: Promise<{ volumeNumber: string }>
}) {
  const { volumeNumber } = await params
  const volume = getVolumeByNumber(Number(volumeNumber))
  if (!volume) notFound()

  const references = getReferencesByVolume(volume.volumeNumber)
  const topics = getTopicsByVolumeNumber(volume.volumeNumber)

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Breadcrumb */}
      <div className="border-b border-[var(--border)] bg-[var(--cream)] px-4 py-3">
        <div className="gc-page flex flex-wrap items-center gap-2">
          <Link
            href="/volumes"
            className="font-sans text-xs text-[var(--faint)] hover:text-[var(--accent)] transition-colors"
          >
            Volumes
          </Link>
          <span className="text-[var(--border)]">/</span>
          <span className="font-sans text-xs text-[var(--primary)]">Vol. {volume.volumeNumber}</span>
        </div>
      </div>

      <VolumePageHeader volume={volume} />

      <div className="gc-page px-4 py-12 space-y-14">
        {/* Ideias conectadas */}
        {volume.connectedIdeaIds.length > 0 && (
          <section>
            <span className="section-eyebrow">Ideias</span>
            <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
              Ideias conectadas
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {volume.connectedIdeaIds.map((ideaId) => (
                <Link
                  key={ideaId}
                  href={`/ideias/${ideaId}`}
                  className="badge-domain hover:opacity-80 transition-opacity"
                >
                  {ideaId}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tópicos da Justiça presentes neste volume */}
        {topics.length > 0 && (
          <section>
            <span className="section-eyebrow">Tópicos de Justiça</span>
            <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
              O que este volume traz ao debate
            </h2>
            <div className="mt-4 divide-y divide-[var(--border)] border border-[var(--border)]">
              {topics.map((topic) => (
                <div key={topic.id} className="bg-white px-5 py-4">
                  <h3 className="font-serif text-base font-medium text-[var(--primary)]">
                    {topic.title}
                  </h3>
                  <p className="mt-1 font-serif text-sm italic text-[var(--secondary)]">
                    {topic.question}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-[var(--secondary)]">
                    {topic.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Referências do projeto que apontam para este volume */}
        {references.length > 0 ? (
          <section>
            <span className="section-eyebrow">Referências</span>
            <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
              Citações usadas no projeto
            </h2>
            <p className="mt-1 font-sans text-xs text-[var(--faint)]">
              {references.length} referência{references.length !== 1 ? 's' : ''} catalogadas
            </p>
            <div className="mt-4 space-y-3">
              {references.map((ref) => (
                <VolumeReferenceCard key={ref.id} reference={ref} />
              ))}
            </div>
          </section>
        ) : (
          <section>
            <p className="font-sans text-sm text-[var(--faint)]">
              Nenhuma referência catalogada para este volume ainda.
            </p>
          </section>
        )}
      </div>

      {/* Navegação */}
      <div className="border-t border-[var(--border)] py-8">
        <div className="gc-page px-4 flex flex-wrap gap-6 text-sm">
          <Link href="/volumes" className="text-[var(--accent)] hover:underline">
            ← Todos os volumes
          </Link>
          {volume.connectedIdeaIds.includes('justica') && (
            <Link
              href="/ideias/justica/referencias"
              className="text-[var(--accent)] hover:underline"
            >
              Referências da Justiça →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
