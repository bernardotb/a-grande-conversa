import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConversationThread } from "@/components/ConversationThread";
import { IdeaEssay } from "@/components/IdeaEssay";
import { ReferenceNav } from "@/components/ReferenceNav";
import { IdeaQuoteBlock } from "@/components/IdeaQuoteBlock";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { getSyntopiconIdea, syntopiconIdeas } from "@/lib/data";
import { getIdeaEssay } from "@/lib/idea-essays";
import {
  getIdeaEnrichment,
  getDebate,
  getConcept,
} from "@/lib/knowledge-graph";

export function generateStaticParams() {
  return syntopiconIdeas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const idea = getSyntopiconIdea((await params).slug);
  if (!idea) return { title: "Ideia não encontrada" };
  const n = idea.thinkers.length;
  return {
    title: idea.name,
    description: `${idea.question} Um debate com ${n} pensador${n !== 1 ? "es" : ""} ao longo de 2.500 anos de filosofia ocidental.`,
  };
}

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idea = getSyntopiconIdea(slug);
  if (!idea) notFound();

  const enrichment = getIdeaEnrichment(idea.slug);
  const essay = getIdeaEssay(idea.slug);
  const relatedDebates = (enrichment?.relatedDebateIds ?? [])
    .map(getDebate)
    .filter(Boolean) as NonNullable<ReturnType<typeof getDebate>>[];
  const relatedConcepts = (enrichment?.relatedConceptIds ?? [])
    .map(getConcept)
    .filter(Boolean) as NonNullable<ReturnType<typeof getConcept>>[];

  return (
    <>
      <ReferenceNav />
      <header className="sticky top-0 z-20 border-b bg-[color:var(--cream)]/95 px-6 py-7 text-center backdrop-blur">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {idea.domainName}
        </p>
        <h1 className="mt-2 font-serif text-4xl leading-none sm:text-5xl">
          {idea.name}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl font-serif text-lg italic text-[var(--secondary)]">
          {idea.question}
        </p>
      </header>

      <main className="px-5 pb-20 pt-14">
        {/* Citações — portadas do protótipo B, marcadas por status de evidência */}
        {enrichment?.quotes && enrichment.quotes.length > 0 && (
          <section className="mx-auto mb-14 max-w-2xl">
            <h2 className="font-serif text-2xl">Vozes</h2>
            <p className="mt-1 text-xs text-[var(--faint)]">
              Passagens de pensadores que entraram nesta conversa.
            </p>
            <div className="mt-6 space-y-8">
              {enrichment.quotes.map((quote, i) => (
                <IdeaQuoteBlock key={i} quote={quote} showBadge />
              ))}
            </div>
          </section>
        )}

        <ConversationThread thinkers={idea.thinkers} />

        {essay && <IdeaEssay essay={essay} thinkers={idea.thinkers} />}

        {/* Debates relacionados */}
        {relatedDebates.length > 0 && (
          <section className="mx-auto mt-16 max-w-2xl">
            <h2 className="font-serif text-3xl">Debates</h2>
            <p className="mt-2 text-sm text-[var(--secondary)]">
              Questões que cruzam esta ideia e outras no Syntopicon.
            </p>
            <div className="mt-6 space-y-3">
              {relatedDebates.map((debate) => (
                <Link
                  key={debate.id}
                  href={`/debates/${debate.slug}`}
                  className="gc-card block p-5 transition hover:border-[var(--accent)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg">{debate.title}</h3>
                      <p className="mt-1 text-sm italic text-[var(--secondary)]">
                        {debate.centralQuestion}
                      </p>
                    </div>
                    <EvidenceBadge
                      status={debate.evidenceStatus}
                      className="mt-0.5 shrink-0"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Conceitos-ponte */}
        {relatedConcepts.length > 0 && (
          <section className="mx-auto mt-14 max-w-2xl">
            <h2 className="font-serif text-3xl">Conceitos-Ponte</h2>
            <p className="mt-2 text-sm text-[var(--secondary)]">
              Noções que conectam esta ideia a outros domínios do pensamento.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedConcepts.map((concept) => (
                <Link
                  key={concept.id}
                  href={`/conceitos/${concept.slug}`}
                  className="border border-[var(--border)] px-4 py-2 text-sm font-serif text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {concept.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center">
          <div className="w-16 border-t" />
          <span className="px-4 font-serif text-sm italic text-[var(--secondary)]">
            finis
          </span>
          <div className="w-16 border-t" />
        </div>

        <section className="mx-auto mt-14 max-w-2xl">
          <h2 className="font-serif text-3xl">Lista de leitura</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">
            Siga este fio nos textos primários, na ordem em que entram na conversa.
          </p>
          <ol className="mt-6 border bg-[var(--surface)] p-6">
            {idea.readingList.map((item) => (
              <li
                key={item}
                className="py-1 font-serif text-[1.05rem] leading-7"
              >
                {item.replace(/^\d+\.\s*/, "")}
              </li>
            ))}
          </ol>
        </section>

        <details className="mx-auto mt-14 max-w-2xl border-t pt-5">
          <summary className="cursor-pointer text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
            Ler como texto
          </summary>
          <div className="mt-10 grid gap-12">
            {idea.thinkers.map((thinker) => (
              <article key={thinker.id} className="border-b pb-9">
                <h3 className="font-serif text-2xl">{thinker.name}</h3>
                <p className="mt-1 text-xs tracking-wider text-[var(--faint)]">
                  {thinker.dates} · {thinker.era}
                </p>
                <p className="mt-4 font-serif text-lg italic leading-8 text-[var(--secondary)]">
                  {thinker.summary}
                </p>
                {thinker.respondsTo.length > 0 && (
                  <p className="mt-4 text-xs text-[var(--faint)]">
                    Responde a: {thinker.respondsTo.join(", ")}
                  </p>
                )}
              </article>
            ))}
          </div>
        </details>

        <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-5 text-[var(--faint)]">
          Adaptação acadêmica em português do conteúdo de referência.{" "}
          <a
            href={idea.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--accent)] underline"
          >
            Consultar a página original
          </a>
          .
        </p>
      </main>

      <div className="pb-12 flex items-center justify-center gap-8 text-sm">
        <Link href="/ideias" className="text-[var(--accent)]">
          ← Voltar às 102 ideias
        </Link>
        <span className="text-[var(--border)]">|</span>
        <Link
          href={`/mapa-intelectual?foco=${idea.slug}`}
          className="text-[var(--accent)]"
        >
          Ver no mapa intelectual →
        </Link>
      </div>
    </>
  );
}
