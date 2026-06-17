import type { Metadata } from 'next'
import Link from 'next/link'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { conflitosFilosoficos } from '@/lib/mapa-data'
import { notFound } from 'next/navigation'
import { getJusticeVolumes, getJusticeReferences } from '@/lib/sources'

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

  return (
    <>
      <IdeaPageTemplate idea={idea} conflitos={conflitos} />

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
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.6rem] text-[var(--faint)]">
                    Vol. {vol.volumeNumber}
                  </span>
                </div>
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
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Fontes primárias</span>
              <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
                Referências documentais
              </h2>
              <p className="mt-1 font-sans text-sm text-[var(--secondary)]">
                {references.length} referências catalogadas · todas rastreáveis
              </p>
            </div>
            <Link
              href="/ideias/justica/referencias"
              className="shrink-0 font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
            >
              Ver todas →
            </Link>
          </div>

          <div className="mt-6 divide-y divide-[var(--border)] border border-[var(--border)]">
            {references.slice(0, 4).map((ref) => (
              <div key={ref.id} className="bg-white px-5 py-4">
                <p className="font-serif text-sm font-medium text-[var(--primary)]">
                  {ref.displayReference}
                </p>
                <p className="mt-1 font-sans text-xs leading-5 text-[var(--secondary)] line-clamp-2">
                  {ref.role}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {ref.volumePdfUrl ? (
                    <a
                      href={ref.volumePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-[0.6rem] py-0.5 px-2.5"
                    >
                      Abrir volume
                    </a>
                  ) : (
                    <span className="btn-primary text-[0.6rem] py-0.5 px-2.5 opacity-40 cursor-not-allowed">
                      Abrir volume
                    </span>
                  )}
                  <Link
                    href={ref.volumePageUrl}
                    className="btn-secondary text-[0.6rem] py-0.5 px-2.5"
                  >
                    Ver página do volume
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link href="/ideias/justica/referencias" className="btn-secondary">
              Ver todas as {references.length} referências
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
