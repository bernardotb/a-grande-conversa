import Link from "next/link";
import { HeroSGI } from "@/components/sgi/HeroSGI";
import { AxisContainer } from "@/components/sgi/AxisContainer";
import { julgarIdeas, agirIdeas } from "@/lib/seis-grandes-ideias";

export default function HomePage() {
  return (
    <>
      {/* ── Camada 1: Hero ── */}
      <HeroSGI />

      {/* ── Camada 1: Seis Grandes Ideias ── */}
      <section id="seis-ideias" className="bg-[var(--cream)] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--faint)]">
              As Seis Grandes Ideias
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--primary)]">
              Por qual ideia você quer começar?
            </h2>
          </div>
          <div className="space-y-6">
            <AxisContainer axis="julgar" ideas={julgarIdeas} />
            <AxisContainer axis="agir" ideas={agirIdeas} />
          </div>
        </div>
      </section>

      {/* ── Divisor: porta de entrada para o acervo ── */}
      <div className="bg-library-950 px-6 py-14 text-center">
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
  );
}
