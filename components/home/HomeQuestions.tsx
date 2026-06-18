import Link from 'next/link'
import { homeIdeas } from '@/lib/ideas/homeData'

const AXIS_STYLES = {
  julgar: {
    badge: 'rgba(124,92,212,0.7)',
    badgeBg: 'rgba(124,92,212,0.08)',
    badgeBorder: 'rgba(124,92,212,0.2)',
    label: 'Julgar',
  },
  agir: {
    badge: 'rgba(45,138,88,0.7)',
    badgeBg: 'rgba(45,138,88,0.07)',
    badgeBorder: 'rgba(45,138,88,0.22)',
    label: 'Agir',
  },
}

export function HomeQuestions() {
  const julgar = homeIdeas.filter(i => i.axis === 'julgar')
  const agir   = homeIdeas.filter(i => i.axis === 'agir')

  return (
    <section
      className="bg-library-900 border-t border-library-700/30 py-20 px-6"
      aria-label="Comece por uma pergunta"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-antique-400/50">
            Entrada por questão
          </p>
          <h2 className="mt-3 font-serif text-2xl font-light text-parchment-100">
            Comece por uma pergunta
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-serif text-sm italic leading-6 text-parchment-200/40">
            Cada ideia é uma porta de entrada. Escolha a dúvida que mais te move.
          </p>
        </div>

        {/* Campo JULGAR */}
        <AxisBlock label="Como julgamos" ideas={julgar} />

        <div className="my-10 flex items-center gap-4" aria-hidden="true">
          <div className="flex-1 h-px bg-library-700/40" />
          <span className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-parchment-200/20">
            e também
          </span>
          <div className="flex-1 h-px bg-library-700/40" />
        </div>

        {/* Campo AGIR */}
        <AxisBlock label="Como agimos" ideas={agir} />

        {/* Gateway to 102 ideas */}
        <div className="mt-16 border border-library-700/40 bg-library-950 px-8 py-10 text-center">
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-antique-400/50">
            Além das seis
          </p>
          <h3 className="mt-3 font-serif text-xl font-light text-parchment-100">
            102 ideias · 54 volumes · 2.500 anos de pensamento
          </h3>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-6 text-parchment-200/45">
            O Syntopicon de Adler mapeou as grandes ideias em todos os livros
            fundadores do Ocidente. Explore o acervo ou siga um percurso guiado.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/acervo"
              className="border border-antique-400/40 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-antique-400 transition hover:border-antique-400 hover:bg-antique-400/10"
            >
              Explorar o acervo →
            </Link>
            <Link
              href="/percursos"
              className="border border-parchment-200/20 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-parchment-200/60 transition hover:border-parchment-200/50 hover:text-parchment-200"
            >
              Ver percursos →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function AxisBlock({
  label,
  ideas,
}: {
  label: string
  ideas: (typeof homeIdeas)[number][]
}) {
  return (
    <div>
      <p className="mb-4 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-parchment-200/30">
        {label}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map(idea => (
          <IdeaQuestion key={idea.slug} idea={idea} />
        ))}
      </div>
    </div>
  )
}

function IdeaQuestion({ idea }: { idea: (typeof homeIdeas)[number] }) {
  const ax = AXIS_STYLES[idea.axis]

  return (
    <article
      className="border border-library-700/35 bg-library-950 p-6 flex flex-col"
      style={{ borderTopColor: idea.color + '33', borderTopWidth: '2px' }}
    >
      {/* Axis badge (no label text "soberana"/"relacionada") */}
      <span
        className="mb-4 self-start px-2 py-0.5 font-sans text-[0.52rem] font-bold uppercase tracking-[0.15em]"
        style={{
          color: ax.badge,
          background: ax.badgeBg,
          border: `1px solid ${ax.badgeBorder}`,
        }}
      >
        {ax.label}
      </span>

      {/* Icon + Title */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xl"
          style={{ color: idea.color, opacity: 0.5 }}
          aria-hidden="true"
        >
          {idea.icon}
        </span>
        <h3 className="font-serif text-lg font-light text-parchment-100">
          {idea.publicName}
        </h3>
      </div>

      {/* Human question */}
      <p className="font-serif text-sm italic leading-6 text-parchment-200/60 flex-1">
        "{idea.homeQuestion}"
      </p>

      {/* Tensions */}
      {idea.tensoes.length > 0 && (
        <div className="mt-4">
          <p className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-antique-400/50 mb-2">
            Tensões
          </p>
          <ul className="space-y-0.5">
            {idea.tensoes.slice(0, 3).map(t => (
              <li
                key={t.slug}
                className="font-serif text-[0.75rem] leading-5 text-parchment-200/40"
              >
                · {t.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTAs */}
      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`/ideias/${idea.slug}`}
          className="border px-3 py-1.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] transition hover:opacity-75"
          style={{ borderColor: idea.color + '55', color: idea.color }}
        >
          Explorar →
        </Link>
        <Link
          href="/acervo"
          className="border border-library-700/60 px-3 py-1.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-parchment-200/35 transition hover:border-library-700 hover:text-parchment-200/60"
        >
          Syntopicon →
        </Link>
      </div>
    </article>
  )
}
