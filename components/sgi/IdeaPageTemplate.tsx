import Link from 'next/link'
import type { SixIdea } from '@/lib/seis-grandes-ideias'
import { getAxisLabel } from '@/lib/seis-grandes-ideias'
import { EvidenceBadge } from '@/components/sgi/EvidenceBadge'
import { ConflictCard } from '@/components/sgi/ConflictCard'
import { TensionBlock } from '@/components/sgi/TensionBlock'
import { IdeaCTAGroup } from '@/components/sgi/IdeaCTAGroup'
import { getIdeaPageContent } from '@/lib/graph/idea-content'
import type { ConflictoFilosofico } from '@/lib/mapa-data'

const axisStyles = {
  julgar: {
    accent: 'text-violet-700',
    border: 'border-l-violet-700',
    dot: 'bg-violet-700',
    chip: 'border-violet-200 bg-violet-50 text-violet-800 hover:bg-violet-100',
    cta: 'border-violet-600 text-violet-700 hover:bg-violet-50',
  },
  agir: {
    accent: 'text-green-700',
    border: 'border-l-green-700',
    dot: 'bg-green-700',
    chip: 'border-green-200 bg-green-50 text-green-800 hover:bg-green-100',
    cta: 'border-green-600 text-green-700 hover:bg-green-50',
  },
}

interface IdeaPageTemplateProps {
  idea: SixIdea
  conflitos?: ConflictoFilosofico[]
}

export function IdeaPageTemplate({ idea, conflitos }: IdeaPageTemplateProps) {
  const cls = axisStyles[idea.axis]
  const pageContent = getIdeaPageContent(idea.slug)

  return (
    <article>
      {/* ── Breadcrumb ── */}
      <nav
        className="border-b bg-[var(--cream)] px-6 py-3"
        aria-label="Caminho de navegação"
      >
        <div className="mx-auto max-w-4xl">
          <ol className="flex items-center gap-2 font-sans text-xs text-[var(--faint)]">
            <li>
              <Link href="/" className="transition hover:text-[var(--primary)]">
                Início
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a href="/#seis-ideias" className="transition hover:text-[var(--primary)]">
                Seis Grandes Ideias
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li className="font-semibold text-[var(--primary)]" aria-current="page">
              {idea.publicName}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero header ── */}
      <header className="bg-[var(--cream)] px-6 pb-10 pt-14">
        <div className="mx-auto max-w-4xl">
          <p className={`font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${cls.accent}`}>
            {getAxisLabel(idea.axis)}
          </p>
          <h1 className="mt-3 font-serif text-[clamp(2.4rem,6vw,3.8rem)] font-light leading-tight text-[var(--primary)]">
            {idea.name}
          </h1>
          <p className="mt-5 font-serif text-xl italic leading-8 text-[var(--secondary)]">
            &ldquo;{idea.humanQuestion}&rdquo;
          </p>
          <p className="mt-4 max-w-2xl font-serif text-base leading-7 text-[var(--secondary)]">
            {idea.teaser}
          </p>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="bg-[var(--cream)] px-6 pb-20">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Em Poucas Palavras */}
          <section aria-labelledby="em-poucas-palavras">
            <h2
              id="em-poucas-palavras"
              className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--faint)]"
            >
              Em poucas palavras
            </h2>
            <blockquote
              className={`mt-5 border-l-4 ${cls.border} pl-6 font-serif text-lg leading-8 text-[var(--primary)]`}
            >
              {idea.emPoucasPalavras}
            </blockquote>
          </section>

          {/* Na Vida Cotidiana */}
          <section aria-labelledby="na-vida-cotidiana">
            <h2
              id="na-vida-cotidiana"
              className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--faint)]"
            >
              Na vida cotidiana
            </h2>
            <ul className="mt-5 space-y-3.5" role="list">
              {idea.naVidaCotidiana.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full ${cls.dot}`}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-7 text-[var(--ink)]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Perguntas para Reflexão */}
          <section aria-labelledby="perguntas-reflexivas">
            <h2
              id="perguntas-reflexivas"
              className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--faint)]"
            >
              Perguntas para reflexão
            </h2>
            <ul className="mt-5 space-y-4" role="list">
              {idea.perguntasReflexivas.map((q, i) => (
                <li
                  key={i}
                  className="font-serif text-base italic leading-7 text-[var(--primary)] before:mr-1.5 before:content-['\201C']"
                >
                  {q}
                </li>
              ))}
            </ul>
            {pageContent?.primaryCTA && (
              <div className="mt-8">
                <IdeaCTAGroup
                  primary={pageContent.primaryCTA}
                  secondary={pageContent.secondaryCTA}
                  axisAccentClass={cls.cta}
                />
              </div>
            )}
          </section>

          {/* Tensões centrais */}
          <section aria-labelledby="tensoes">
            <h2
              id="tensoes"
              className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--faint)]"
            >
              Tensões centrais
            </h2>
            {pageContent && pageContent.tensions.length > 0 ? (
              <div className="mt-5 space-y-4">
                {pageContent.tensions.map((t) => (
                  <TensionBlock
                    key={t.id}
                    tension={t}
                    tensaoHref={`/tensoes/${t.id}`}
                    axisAccent={cls.accent}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-5 flex flex-wrap gap-2">
                {idea.tensoes.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/tensoes/${t.slug}`}
                    className={`border px-4 py-2 font-sans text-sm transition ${cls.chip}`}
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* Ideias relacionadas */}
          <section aria-labelledby="ideias-relacionadas">
            <h2
              id="ideias-relacionadas"
              className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--faint)]"
            >
              Ideias relacionadas
            </h2>
            <div className="mt-5 flex flex-wrap gap-4">
              {idea.relatedIdeas.map((rel) => (
                <div key={rel.slug} className="flex items-center gap-2">
                  <Link
                    href={`/ideias/${rel.slug}`}
                    className="border border-[var(--border)] bg-white px-4 py-2 font-sans text-sm text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {rel.name}
                  </Link>
                  <EvidenceBadge status={rel.evidence_status} confidence={rel.confidence} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── Alçapão — Camada 2 / Acervo profundo ── */}
      <section
        className="border-t-2 border-library-700 bg-library-950 px-6 py-16"
        aria-labelledby="alcapao-titulo"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-antique-400/50">
              Acervo profundo
            </p>
            <h2
              id="alcapao-titulo"
              className="mt-2 font-serif text-2xl font-light text-parchment-100"
            >
              Entre na conversa de 2.500 anos
            </h2>
            <p className="mt-3 font-sans text-sm leading-6 text-parchment-200/55">
              Debates originais, posições dos pensadores e as obras primárias — estruturados no acervo completo.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-library-700/50 sm:grid-cols-3">
            {/* Debates */}
            <div className="bg-library-900 p-6">
              <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
                Debates
              </p>
              <ul className="mt-4 space-y-3">
                {idea.debates.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/debates/${d.slug}`}
                      className="font-sans text-sm leading-6 text-parchment-200/65 transition hover:text-antique-400"
                    >
                      {d.title}{' '}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pensadores */}
            <div className="bg-library-900 p-6">
              <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
                Pensadores
              </p>
              <ul className="mt-4 space-y-3">
                {idea.autores.slice(0, 6).map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/autores/${a.slug}`}
                      className="font-sans text-sm leading-6 text-parchment-200/65 transition hover:text-antique-400"
                    >
                      {a.name}{' '}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obras */}
            <div className="bg-library-900 p-6">
              <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
                Obras principais
              </p>
              <ul className="mt-4 space-y-3">
                {idea.obras.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/obras/${o.slug}`}
                      className="block font-sans text-sm leading-6 text-parchment-200/65 transition hover:text-antique-400"
                    >
                      <span className="italic">{o.title}</span>
                      <span className="block text-xs text-parchment-200/35">— {o.author}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {conflitos && conflitos.length > 0 && (
            <div className="mt-10 space-y-4">
              <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
                Confrontos filosóficos
              </p>
              {conflitos.map((c) => (
                <ConflictCard key={c.id} conflito={c} />
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/mapa-intelectual"
              className="border border-antique-500/35 px-5 py-2.5 font-sans text-sm font-semibold text-antique-400 transition hover:bg-antique-400/10"
            >
              Ver no mapa intelectual{' '}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/ideias"
              className="border border-library-700 px-5 py-2.5 font-sans text-sm font-semibold text-parchment-200/50 transition hover:border-antique-500/35 hover:text-antique-400"
            >
              Explorar as 102 grandes ideias{' '}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
