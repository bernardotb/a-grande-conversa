import type { Metadata } from "next";
import Link from "next/link";
import { referencePlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Planos de Leitura dos Grandes Livros",
  description: "Percursos guiados pelos Grandes Livros do Mundo Ocidental."
};

export default function ReadingPlansPage() {
  return (
    <div className="min-h-screen pb-24 pt-12">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <header className="mb-14 max-w-2xl">
          <p className="section-eyebrow">Percursos de leitura</p>
          <h1 className="mt-3 font-serif text-5xl leading-none">
            Planos de Leitura dos Grandes Livros
          </h1>
          <div className="gc-prose mt-6 grid gap-4">
            <p>
              O mapa foi construído para a exploração livre, mas um primeiro leitor
              frequentemente precisa de um caminho. Estes planos oferecem sequência,
              ritmo e uma razão para cada passagem.
            </p>
            <p>
              Cada percurso organiza filosofia, literatura, teologia e ciência em
              uma única ordem de leitura.
            </p>
          </div>
        </header>

        <div className="grid gap-6">
          {referencePlans.map((plan) => (
            <Link
              key={plan.slug}
              href={`/planos-de-leitura/${plan.slug}`}
              className="card-editorial group block p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="stat-pill">{plan.workCount} obras</span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--primary)]">
                    {plan.title}
                  </h2>
                  {plan.subtitle && (
                    <p className="mt-1 font-sans text-sm text-[var(--secondary)]">
                      {plan.subtitle}
                    </p>
                  )}
                  <p className="mt-4 font-serif text-lg italic leading-7 text-[var(--secondary)]">
                    {plan.description}
                  </p>
                </div>
              </div>
              <p className="mt-8 text-sm text-[var(--color-accent)]">
                Começar o plano →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
