import Link from 'next/link'
import { HeroSGI } from '@/components/sgi/HeroSGI'
import { sixIdeas } from '@/lib/seis-grandes-ideias'
import type { SixIdea } from '@/lib/seis-grandes-ideias'

// Color mapping aligned with IntellectualMap
const IDEA_COLOR: Record<string, string> = {
  verdade:   '#7c5cd4',
  beleza:    '#9260c4',
  bem:       '#6248b8',
  liberdade: '#2d8a58',
  igualdade: '#247b4e',
  justica:   '#1a6a42',
}

const AXIS_BORDER: Record<string, string> = {
  julgar: 'rgba(124,92,212,0.45)',
  agir:   'rgba(26,106,66,0.45)',
}

function IdeaCell({ idea }: { idea: SixIdea }) {
  const color = IDEA_COLOR[idea.slug] ?? '#b9954f'
  const topBorder = AXIS_BORDER[idea.axis] ?? 'rgba(185,149,79,0.3)'

  return (
    <Link
      href={`/ideias/${idea.slug}`}
      className="group relative block bg-library-950 p-6 transition-colors hover:bg-library-900"
      style={{ borderTop: `2px solid ${topBorder}` }}
    >
      <span
        className="mb-4 block text-2xl leading-none transition-opacity group-hover:opacity-55"
        style={{ color: `${color}55` }}
        aria-hidden="true"
      >
        {idea.icon}
      </span>
      <span className="block font-serif text-[1.05rem] font-light leading-snug text-parchment-100">
        {idea.publicName}
      </span>
      <span className="mt-2 block font-serif text-[0.72rem] italic leading-5 text-parchment-200/38 line-clamp-3">
        &ldquo;{idea.humanQuestion}&rdquo;
      </span>
      <span
        className="mt-5 block font-sans text-[0.58rem] font-bold uppercase tracking-[0.14em] transition-opacity group-hover:opacity-100"
        style={{ color: `${color}55`, opacity: 0.7 }}
      >
        Explorar →
      </span>
    </Link>
  )
}

export default function HomePage() {
  // julgar first, then agir — matches the 2-axis layout
  const ordered = [
    ...sixIdeas.filter(i => i.axis === 'julgar'),
    ...sixIdeas.filter(i => i.axis === 'agir'),
  ]

  return (
    <>
      {/* ── Hero split ── */}
      <HeroSGI />

      {/* ── Seis Ideias (dark cells) ── */}
      <section id="seis-ideias" className="bg-library-900">
        <div className="border-b border-library-700/40 px-6 py-10 text-center">
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-antique-400/50">
            As Seis Grandes Ideias
          </p>
          <h2 className="mt-3 font-serif text-2xl font-light text-parchment-100">
            Por qual ideia você quer começar?
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-library-700/35">
          {ordered.map(idea => (
            <IdeaCell key={idea.slug} idea={idea} />
          ))}
        </div>
      </section>

      {/* ── Portal: acervo completo ── */}
      <div className="border-t border-library-700/40 bg-library-950 px-6 py-14 text-center">
        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-antique-400/50">
          Além das seis
        </p>
        <h2 className="mt-3 font-serif text-2xl font-light text-parchment-100">
          102 ideias · 54 volumes · 2.500 anos de pensamento
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-sans text-sm leading-6 text-parchment-200/50">
          O Syntopicon de Adler mapeou as grandes ideias em todos os livros fundadores do
          Ocidente. Explore o acervo ou siga um percurso guiado.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/acervo"
            className="border border-antique-400/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-antique-400 transition hover:border-antique-400 hover:bg-antique-400/10"
          >
            Explorar o acervo →
          </Link>
          <Link
            href="/percursos"
            className="border border-parchment-200/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-parchment-200/60 transition hover:border-parchment-200/50 hover:text-parchment-200"
          >
            Ver percursos práticos →
          </Link>
        </div>
      </div>
    </>
  )
}
