import Link from 'next/link'

export function HeroSGI() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center bg-library-950 px-6 py-20 text-center">
      {/* Subtle violet radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(109,40,217,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl">
        <p className="text-[0.65rem] font-sans font-semibold uppercase tracking-[0.3em] text-antique-400/60">
          A Grande Conversa · Mortimer J. Adler
        </p>

        <h1 className="mt-6 font-serif text-[clamp(2.8rem,8vw,5.5rem)] font-light leading-[0.92] tracking-tight text-parchment-100">
          Seis ideias para{' '}
          <em className="text-antique-400 not-italic">pensar melhor</em>
          <br />a vida comum
        </h1>

        <div className="mx-auto mt-8 h-px w-16 bg-antique-500/30" />

        <p className="mx-auto mt-7 max-w-xl font-serif text-lg leading-8 italic text-parchment-200/70">
          Verdade, Bem, Beleza, Liberdade, Igualdade, Justiça — seis conceitos que os maiores
          pensadores do Ocidente debateram por 2.500 anos. Você já está no meio desses debates.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#seis-ideias"
            className="inline-flex items-center gap-2 bg-antique-500 px-7 py-3.5 font-sans text-sm font-semibold text-library-950 transition hover:bg-antique-400"
          >
            Por onde começar?
          </Link>
          <Link
            href="/mapa-intelectual"
            className="inline-flex items-center gap-2 border border-parchment-100/25 px-7 py-3.5 font-sans text-sm font-semibold text-parchment-100/70 transition hover:border-parchment-100/50 hover:text-parchment-50"
          >
            Ver o mapa intelectual
          </Link>
        </div>
      </div>

      <a
        href="#seis-ideias"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.6rem] font-sans font-semibold uppercase tracking-[0.25em] text-parchment-100/25 transition hover:text-antique-400"
        aria-label="Explorar as seis ideias"
      >
        Explorar
        <span className="text-base" aria-hidden="true">⌄</span>
      </a>
    </section>
  )
}
