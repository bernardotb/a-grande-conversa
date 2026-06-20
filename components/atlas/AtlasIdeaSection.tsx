import Link from 'next/link'
import type { AtlasOverviewIdea } from '@/lib/atlas-six-ideas/types'

interface AtlasIdeaSectionProps {
  idea: AtlasOverviewIdea
  ptSlug: string
}

export function AtlasIdeaSection({ idea, ptSlug }: AtlasIdeaSectionProps) {
  return (
    <section className="border-t border-antique-500/20 bg-library-900 px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="mb-1 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-antique-400/60">
              Atlas das Seis Ideias
            </p>
            <h2 className="font-serif text-xl font-semibold text-parchment-100">
              {idea.title_pt} no Atlas documental
            </h2>
          </div>
          <Link
            href={`/mapa/sgi`}
            className="shrink-0 rounded border border-antique-500/40 px-4 py-2 font-sans text-xs font-semibold text-antique-400 transition hover:bg-antique-400/10"
          >
            Abrir no Atlas →
          </Link>
        </div>

        {/* Stats grid */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Aspectos em Adler', value: idea.counts.adler_aspects },
            { label: 'Tópicos Syntopicon', value: idea.counts.syntopicon_topics },
            { label: 'Referências documentais', value: idea.counts.references },
            { label: 'Tensões filosóficas', value: idea.counts.tensions },
          ].map(({ label, value }) => (
            <div key={label} className="rounded border border-antique-500/15 bg-library-950/50 px-3 py-3">
              <div className="font-serif text-xl font-semibold text-antique-400">
                {value.toLocaleString('pt-BR')}
              </div>
              <div className="mt-0.5 font-sans text-[0.58rem] text-parchment-200/40">{label}</div>
            </div>
          ))}
        </div>

        {/* Central question */}
        {idea.central_question && (
          <div className="mb-5 rounded border border-antique-500/15 bg-library-950/30 px-4 py-3">
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.12em] text-antique-400/50 mb-1">
              Pergunta central
            </p>
            <p className="font-serif text-sm italic text-parchment-100/80 leading-relaxed">
              {idea.central_question}
            </p>
          </div>
        )}

        {/* Adler chapters */}
        {idea.adler_chapters.length > 0 && (
          <div className="mb-5">
            <p className="mb-2 font-sans text-[0.58rem] uppercase tracking-[0.12em] text-parchment-200/35">
              Capítulos em Six Great Ideas (Adler)
            </p>
            <ul className="flex flex-col gap-1">
              {idea.adler_chapters.map(ch => (
                <li key={ch} className="font-sans text-xs text-parchment-200/55">{ch}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Aspects list */}
        {idea.aspects.length > 0 && (
          <div>
            <p className="mb-2 font-sans text-[0.58rem] uppercase tracking-[0.12em] text-parchment-200/35">
              Aspectos adlerianos
            </p>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {idea.aspects.map(a => (
                <li key={a.id} className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c99a43]" />
                  <span className="font-sans text-xs text-parchment-200/60 leading-relaxed">
                    {a.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Equality/Goodness notes */}
        {(ptSlug === 'igualdade' || ptSlug === 'bondade') && (
          <div className="mt-4 rounded border border-antique-500/15 bg-library-950/20 px-3 py-2.5">
            <p className="font-sans text-[0.6rem] leading-relaxed text-parchment-200/40">
              {ptSlug === 'igualdade'
                ? 'Nota metodológica: Equality não possui capítulo autônomo no Syntopicon. Os tópicos e referências são mapeados pela entrada "Equality" com mediação cruzada.'
                : 'Nota metodológica: Goodness é mapeada pela entrada "Good and Evil" no Syntopicon, com mediação explícita registrada nos metadados do Atlas.'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
