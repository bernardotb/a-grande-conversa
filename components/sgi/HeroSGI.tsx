import Link from 'next/link'
import { HeroGraphSVG } from '@/components/map/HeroGraphSVG'

export function HeroSGI() {
  return (
    <section className="relative grid min-h-[92vh] bg-library-950 lg:grid-cols-2">

      {/* ── Left: editorial text ── */}
      <div className="relative flex flex-col justify-center px-8 py-24 lg:px-16 z-10">
        {/* Mobile-only glow (single-column view) */}
        <div
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(109,40,217,0.12) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-antique-400/60">
          A Grande Conversa · Mortimer J. Adler
        </p>

        <h1 className="mt-6 font-serif text-[clamp(2.6rem,5vw,4.4rem)] font-light leading-[0.93] tracking-tight text-parchment-100">
          Seis ideias para{' '}
          <em className="text-antique-400 not-italic">pensar melhor</em>
          <br />a vida comum
        </h1>

        <div className="mt-8 h-px w-12 bg-antique-500/30" />

        <p className="mt-6 max-w-sm font-serif text-base leading-7 italic text-parchment-200/60">
          Verdade, Bem, Beleza, Liberdade, Igualdade, Justiça — seis conceitos que os maiores
          pensadores do Ocidente debateram por 2.500 anos.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="#seis-ideias"
            className="inline-flex items-center bg-antique-500 px-6 py-3 font-sans text-sm font-semibold text-library-950 transition hover:bg-antique-400"
          >
            Por onde começar?
          </Link>
          <Link
            href="/mapa"
            className="inline-flex items-center border border-parchment-100/22 px-6 py-3 font-sans text-sm font-semibold text-parchment-100/55 transition hover:border-parchment-100/45 hover:text-parchment-50"
          >
            Explorar o mapa →
          </Link>
        </div>
      </div>

      {/* ── Right: live graph preview ── */}
      <div className="hidden lg:block relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(109,40,217,0.08) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 p-10">
          <HeroGraphSVG />
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#seis-ideias"
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[0.58rem] font-sans font-semibold uppercase tracking-[0.25em] text-parchment-100/22 transition hover:text-antique-400"
        aria-label="Explorar as seis ideias"
      >
        Explorar
        <span className="text-base" aria-hidden="true">⌄</span>
      </a>
    </section>
  )
}
