import type { Metadata } from "next";
import Link from "next/link";
import { referencePlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Planos de Leitura dos Grandes Livros",
  description: "Percursos guiados pelos Grandes Livros do Mundo Ocidental."
};

export default function ReadingPlansPage() {
  return (
    <>
      <nav className="fixed left-6 top-6 z-30">
        <Link href="/" className="text-sm text-[var(--secondary)] hover:text-[var(--accent)]">‹ Início</Link>
      </nav>
      <article className="gc-page pb-20 pt-24">
        <header className="mb-16 max-w-2xl">
          <h1 className="font-serif text-5xl leading-none">Planos de Leitura dos Grandes Livros</h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
            Caminhos guiados pelos Grandes Livros do Mundo Ocidental
          </p>
          <div className="gc-prose mt-9 grid gap-5">
            <p>
              O mapa foi construído para a exploração livre, mas um primeiro leitor frequentemente
              precisa de um caminho. Estes planos oferecem sequência, ritmo e uma razão para cada passagem.
            </p>
            <p>
              Cada percurso organiza filosofia, literatura, teologia e ciência em uma única ordem de leitura.
            </p>
          </div>
        </header>
        <div className="grid gap-5">
          {referencePlans.map((plan) => (
            <Link key={plan.slug} href={`/planos-de-leitura/${plan.slug}`} className="gc-card block p-7 transition hover:border-[var(--accent)]">
              <p className="text-xs uppercase tracking-[0.17em] text-[var(--faint)]">{plan.workCount} obras</p>
              <h2 className="mt-3 font-serif text-3xl">{plan.title}</h2>
              <p className="mt-3 font-serif text-lg italic leading-7 text-[var(--secondary)]">{plan.description}</p>
              <p className="mt-7 text-sm text-[var(--accent)]">Começar o plano →</p>
            </Link>
          ))}
        </div>
      </article>
    </>
  );
}
