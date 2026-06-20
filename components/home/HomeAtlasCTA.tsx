import Link from 'next/link'

export function HomeAtlasCTA() {
  return (
    <section className="border-t border-antique-500/20 bg-library-900 px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-antique-400/70">
          Novo · Atlas documental
        </p>
        <h2 className="mb-4 font-serif text-2xl font-semibold leading-snug text-parchment-100 sm:text-3xl">
          Atlas das Seis Ideias
        </h2>
        <p className="mb-3 font-sans text-sm leading-relaxed text-parchment-200/60 max-w-xl mx-auto">
          3.575 nós, 11.372 arestas e 2.461 referências documentais conectando Adler,
          o Syntopicon e os Great Books numa experiência navegável.
        </p>
        <p className="mb-7 font-sans text-xs text-parchment-200/35">
          Verdade · Bondade · Beleza · Liberdade · Igualdade · Justiça
        </p>
        <Link
          href="/mapa/sgi"
          className="inline-flex items-center gap-2 rounded border border-antique-400/50 px-6 py-2.5 font-sans text-sm font-semibold text-antique-400 transition hover:bg-antique-400/10"
        >
          Abrir o Atlas →
        </Link>
      </div>
    </section>
  )
}
