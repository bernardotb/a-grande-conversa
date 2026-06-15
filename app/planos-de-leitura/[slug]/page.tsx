import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReferenceNav } from "@/components/ReferenceNav";
import {
  getReferenceBook,
  getReferencePlan,
  getSyntopiconIdea,
  referencePlans
} from "@/lib/data";

export function generateStaticParams() {
  return referencePlans.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const plan = getReferencePlan((await params).slug);
  return plan
    ? { title: plan.title, description: plan.description }
    : { title: "Plano não encontrado" };
}

export default async function PlanPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const plan = getReferencePlan((await params).slug);
  if (!plan) notFound();

  return (
    <>
      <ReferenceNav />
      <div className="min-h-screen pb-24 pt-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* Hero do plano */}
          <header className="border-b border-[var(--color-border)] pb-12">
            <p className="section-eyebrow">Plano de leitura</p>
            <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
              {plan.title}
            </h1>
            {plan.subtitle && (
              <p className="mt-4 font-serif text-2xl italic text-[var(--secondary)]">
                {plan.subtitle}
              </p>
            )}
            <dl className="mt-9 flex flex-wrap gap-6">
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--faint)]">Obras</dt>
                <dd className="mt-1 font-serif text-3xl">{plan.workCount}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--faint)]">Ritmo</dt>
                <dd className="mt-1 font-serif text-lg">Uma obra por mês ou no seu próprio tempo.</dd>
              </div>
            </dl>
            <p className="gc-prose mt-9">{plan.description}</p>
          </header>

          {/* Timeline */}
          <div className="relative mt-14">
            {/* Linha vertical */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border)]"
              aria-hidden="true"
            />

            <div className="grid gap-0">
              {plan.steps.map((step, index) => {
                const linkedBooks = step.books.map(getReferenceBook).filter(Boolean);
                const linkedIdeas = step.ideas.map(getSyntopiconIdea).filter(Boolean);
                const isLast = index === plan.steps.length - 1;

                return (
                  <article
                    key={step.number}
                    className={`relative pl-16 ${isLast ? "pb-0" : "pb-14"}`}
                  >
                    {/* Marcador de etapa */}
                    <div className="absolute left-0 top-1 flex size-12 items-center justify-center border border-[var(--color-border)] bg-[var(--cream)] font-serif text-lg text-[var(--color-accent)]">
                      {step.number}
                    </div>

                    <div className="card-editorial p-7">
                      {/* Cabeçalho da etapa */}
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h2 className="font-serif text-2xl leading-tight text-[var(--primary)]">
                          {step.heading.replace(/^\d+\.\s*/, "")}
                        </h2>
                        {step.date && (
                          <p className="shrink-0 text-xs uppercase tracking-wider text-[var(--secondary)]">
                            {step.date}
                          </p>
                        )}
                      </div>

                      {/* Detalhes */}
                      <div className="gc-prose mt-6 grid gap-5">
                        {step.format && (
                          <div>
                            <p className="mb-1 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                              Formato
                            </p>
                            <p>{step.format}</p>
                          </div>
                        )}
                        {step.rationale && (
                          <div>
                            <p className="mb-1 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                              Por que esta obra
                            </p>
                            <p>{step.rationale}</p>
                          </div>
                        )}
                        {step.connection && (
                          <div>
                            <p className="mb-1 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                              A conexão
                            </p>
                            <p>{step.connection}</p>
                          </div>
                        )}
                      </div>

                      {/* Meta: ideias + tempo */}
                      <div className="mt-7 grid gap-5 sm:grid-cols-[1fr_10rem]">
                        {linkedIdeas.length > 0 && (
                          <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--secondary)]">
                              Ideias abordadas
                            </p>
                            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                              {linkedIdeas.map(
                                (idea) =>
                                  idea && (
                                    <Link
                                      key={idea.slug}
                                      href={`/ideias/${idea.slug}`}
                                      className="badge-domain hover:opacity-75 transition-opacity"
                                    >
                                      {idea.name}
                                    </Link>
                                  )
                              )}
                            </div>
                          </div>
                        )}
                        {step.time && (
                          <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--secondary)]">
                              Tempo estimado
                            </p>
                            <p className="mt-3 font-serif text-lg">{step.time}</p>
                          </div>
                        )}
                      </div>

                      {/* Fichas das obras */}
                      {linkedBooks.length > 0 && (
                        <p className="mt-5 text-xs text-[var(--faint)]">
                          Fichas:{" "}
                          {linkedBooks.map((book, i) =>
                            book ? (
                              <span key={book.slug}>
                                {i > 0 && " · "}
                                <Link
                                  href={`/obras/${book.slug}`}
                                  className="text-[var(--color-accent)] hover:opacity-75 transition-opacity"
                                >
                                  {book.title}
                                </Link>
                              </span>
                            ) : null
                          )}
                        </p>
                      )}

                      {/* Nota editorial */}
                      {step.note && (
                        <p className="mt-7 border-l-2 border-[var(--color-accent)]/40 pl-4 font-serif text-lg italic leading-7 text-[var(--secondary)]">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <p className="mt-16 text-center text-xs text-[var(--faint)]">
            <a
              href={plan.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-accent)] underline"
            >
              Consultar o plano original
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
