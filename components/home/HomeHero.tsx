import Link from 'next/link'

export function HomeHero() {
  return (
    <section className="relative bg-library-950 px-6 py-24 lg:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(109,40,217,0.09) 0%, rgba(26,106,66,0.06) 55%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-antique-400/60">
          A Grande Conversa · Mortimer J. Adler
        </p>

        <h1 className="mt-6 font-serif text-[clamp(2.2rem,5vw,4rem)] font-light leading-[0.95] tracking-tight text-parchment-100">
          Seis perguntas para entrar em{' '}
          <em className="text-antique-400 not-italic">2.500 anos</em>{' '}
          de pensamento.
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-serif text-base italic leading-7 text-parchment-200/55">
          Comece por uma dúvida humana. Depois, aprofunde nas ideias, autores,
          obras e passagens da Grande Conversa.
        </p>

        {/* Two fields */}
        <div className="mt-12 grid gap-px sm:grid-cols-2 max-w-2xl mx-auto">
          {/* JULGAR */}
          <div className="bg-library-900 border border-[rgba(124,92,212,0.22)] px-8 py-7 text-left">
            <p
              className="font-sans text-[0.58rem] font-bold uppercase tracking-[0.22em]"
              style={{ color: 'rgba(124,92,212,0.7)' }}
            >
              Julgar
            </p>
            <p className="mt-2 font-serif text-sm italic leading-6 text-parchment-200/55">
              Como saber o que é verdadeiro, bom ou belo?
            </p>
          </div>

          {/* AGIR */}
          <div className="bg-library-900 border border-[rgba(26,106,66,0.25)] px-8 py-7 text-left">
            <p
              className="font-sans text-[0.58rem] font-bold uppercase tracking-[0.22em]"
              style={{ color: 'rgba(45,138,88,0.7)' }}
            >
              Agir
            </p>
            <p className="mt-2 font-serif text-sm italic leading-6 text-parchment-200/55">
              Como viver com os outros sem destruir liberdade, igualdade e
              justiça?
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#constelacao"
            className="inline-flex items-center bg-antique-500 px-6 py-3 font-sans text-sm font-semibold text-library-950 transition hover:bg-antique-400"
          >
            Explorar as seis ideias
          </a>
          <Link
            href="/mapa"
            className="inline-flex items-center border border-parchment-100/22 px-6 py-3 font-sans text-sm font-semibold text-parchment-100/55 transition hover:border-parchment-100/45 hover:text-parchment-50"
          >
            Ver o mapa completo →
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#constelacao"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-sans text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-parchment-100/22 transition hover:text-antique-400"
        aria-label="Continuar para as seis ideias"
      >
        Continuar
        <span className="text-base" aria-hidden="true">⌄</span>
      </a>
    </section>
  )
}
