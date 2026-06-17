import type { Metadata } from "next";
import Link from "next/link";
import { referencePlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Percursos Práticos — A Grande Conversa",
  description:
    "Caminhos orientados pelos Grandes Livros. Cada percurso resolve um problema filosófico real.",
};

export default function PercursosPage() {
  return (
    <div className="min-h-screen pb-24 pt-12">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <header className="mb-14 max-w-2xl">
          <p className="section-eyebrow">Percursos Práticos</p>
          <h1 className="mt-3 font-serif text-5xl leading-none">
            Por onde começar a Grande Conversa?
          </h1>
          <p className="mt-6 font-serif text-lg italic leading-7 text-[var(--secondary)]">
            Cada percurso nasce de uma pergunta real — sobre o poder, a liberdade, a alma
            humana ou o conhecimento. Você escolhe o problema; os textos fazem o resto.
          </p>
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
              <p className="mt-8 text-sm text-[var(--accent)]">Entrar neste percurso →</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t pt-10 text-center">
          <p className="text-sm text-[var(--faint)]">
            Não sabe por onde começar?{" "}
            <Link href="/" className="text-[var(--accent)] hover:underline">
              Volte ao início
            </Link>{" "}
            e escolha uma das seis grandes ideias.
          </p>
        </div>
      </div>
    </div>
  );
}
