import type { Metadata } from 'next'
import Link from 'next/link'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { AtlasIdeaSection } from '@/components/atlas/AtlasIdeaSection'
import overviewData from '@/data/atlas-six-ideas/overview.json'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { conflitosFilosoficos } from '@/lib/mapa-data'
import { notFound } from 'next/navigation'
import { getJusticeVolumes, getJusticeReferences, justiceTopics } from '@/lib/sources'
import { JusticeTopics } from '@/components/ideas/justice/JusticeTopics'
import { JusticeMiniGraph } from '@/components/ideas/justice/JusticeMiniGraph'
import { JusticeReferences } from '@/components/ideas/justice/JusticeReferences'

export const metadata: Metadata = {
  title: 'Justiça',
  description:
    'O que transforma uma lei em lei justa? Explore como Platão, Aristóteles, Hobbes, Locke e outros pensaram a justiça ao longo de 2.500 anos.',
}

export default function JusticaPage() {
  const idea = getSixIdea('justica')
  if (!idea) notFound()
  const conflitos = conflitosFilosoficos.filter((c) => c.ideiaSlug === 'justica')
  const volumes = getJusticeVolumes()
  const references = getJusticeReferences()
  const topics = justiceTopics
  const atlasIdea = overviewData.ideas.find((i: { idea_en: string }) => i.idea_en === 'Justice')

  return (
    <>
      <IdeaPageTemplate idea={idea} conflitos={conflitos} />
      {atlasIdea && <AtlasIdeaSection idea={atlasIdea as never} ptSlug="justica" />}

      {/* ── Mini-grafo da Justiça ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <JusticeMiniGraph topics={topics} references={references} volumes={volumes} />
        </div>
      </section>

      {/* ── Tópicos do Syntopicon ── */}
      <section className="border-t border-[var(--border)] bg-[var(--cream)] px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <JusticeTopics topics={topics} />
        </div>
      </section>

      {/* ── Seção de Volumes ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Acervo documental</span>
              <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
                Volumes dos Great Books
              </h2>
              <p className="mt-1 font-sans text-sm text-[var(--secondary)]">
                {volumes.length} volumes mobilizados · da Grécia clássica ao século XIX
              </p>
            </div>
            <Link
              href="/ideias/justica/volumes"
              className="shrink-0 font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
            >
              Ver percurso →
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {volumes.slice(0, 6).map((vol) => (
              <Link
                key={vol.id}
                href={vol.internalPageUrl}
                className="card-editorial block p-4 group"
              >
                <span className="font-mono text-[0.6rem] text-[var(--faint)]">
                  Vol. {vol.volumeNumber}
                </span>
                <p className="mt-1 font-serif text-sm font-medium text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {vol.shortTitle}
                </p>
                <p className="mt-0.5 font-sans text-[0.6rem] text-[var(--faint)] line-clamp-1">
                  {vol.authors.join(', ')}
                </p>
              </Link>
            ))}
          </div>

          {volumes.length > 6 && (
            <div className="mt-4 text-center">
              <Link href="/ideias/justica/volumes" className="btn-secondary">
                Ver todos os {volumes.length} volumes
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Seção de Referências ── */}
      <section className="border-t border-[var(--border)] bg-[var(--cream)] px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <JusticeReferences references={references} showAll={false} />
        </div>
      </section>
    </>
  )
}
