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
      <article className="gc-page pb-20 pt-24">
        <header className="border-b pb-12">
          <p className="gc-kicker">Plano de leitura</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">{plan.title}</h1>
          <p className="mt-4 font-serif text-2xl italic text-[var(--secondary)]">{plan.subtitle}</p>
          <dl className="mt-9 grid gap-5 sm:grid-cols-2">
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

        <h2 className="mt-14 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
          O plano
        </h2>
        <div className="mt-8 grid gap-14">
          {plan.steps.map((step) => {
            const linkedBooks = step.books.map(getReferenceBook).filter(Boolean);
            const linkedIdeas = step.ideas.map(getSyntopiconIdea).filter(Boolean);
            return (
              <section key={step.number} className="border-t pt-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-3xl leading-tight">
                    <span className="mr-3 text-[var(--accent)]">{step.number}.</span>
                    {step.heading.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="shrink-0 text-xs uppercase tracking-wider text-[var(--secondary)]">{step.date}</p>
                </div>
                <div className="gc-prose mt-6 grid gap-5">
                  <div>
                    <p className="mb-1 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">Formato</p>
                    <p>{step.format}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">Por que esta obra</p>
                    <p>{step.rationale}</p>
                  </div>
                  {step.connection && (
                    <div>
                      <p className="mb-1 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">A conexão</p>
                      <p>{step.connection}</p>
                    </div>
                  )}
                </div>
                <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_11rem]">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--secondary)]">Ideias abordadas</p>
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                      {linkedIdeas.map((idea) => idea && (
                        <Link key={idea.slug} href={`/ideias/${idea.slug}`} className="text-sm underline decoration-[var(--border)] underline-offset-4 hover:text-[var(--accent)]">
                          {idea.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--secondary)]">Tempo</p>
                    <p className="mt-3 font-serif text-lg">{step.time}</p>
                  </div>
                </div>
                {linkedBooks.length > 0 && (
                  <p className="mt-5 text-xs text-[var(--faint)]">
                    Fichas:{" "}
                    {linkedBooks.map((book, index) => book && (
                      <span key={book.slug}>
                        {index > 0 && " · "}
                        <Link href={`/obras/${book.slug}`} className="text-[var(--accent)]">{book.title}</Link>
                      </span>
                    ))}
                  </p>
                )}
                {step.note && (
                  <p className="mt-7 border-l-2 border-[var(--accent)]/40 pl-4 font-serif text-lg italic leading-7 text-[var(--secondary)]">
                    {step.note}
                  </p>
                )}
              </section>
            );
          })}
        </div>
        <p className="mt-14 text-center text-xs text-[var(--faint)]">
          <a href={plan.sourceUrl} target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">
            Consultar o plano original
          </a>
        </p>
      </article>
    </>
  );
}
