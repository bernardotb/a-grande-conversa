import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { IdeaQuoteBlock } from "@/components/IdeaQuoteBlock";
import { debates, getDebate } from "@/lib/knowledge-graph";
import { getSyntopiconIdea } from "@/lib/data";

export function generateStaticParams() {
  return debates.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const debate = getDebate((await params).slug);
  return debate
    ? { title: debate.title, description: debate.centralQuestion }
    : { title: "Debate não encontrado" };
}

export default async function DebatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const debate = getDebate((await params).slug);
  if (!debate) notFound();

  const relatedIdeas = debate.relatedIdeaIds
    .map(getSyntopiconIdea)
    .filter(Boolean) as NonNullable<ReturnType<typeof getSyntopiconIdea>>[];

  return (
    <>
      <header className="border-b px-6 py-12 text-center">
        <p className="gc-kicker">Debate filosófico</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{debate.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-xl italic text-[var(--secondary)]">
          {debate.centralQuestion}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <EvidenceBadge status={debate.evidenceStatus} />
        </div>
      </header>

      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          {debate.description && (
            <section className="mb-12">
              <p className="text-base leading-7 text-[var(--secondary)]">
                {debate.description}
              </p>
            </section>
          )}

          {debate.quotes && debate.quotes.length > 0 && (
            <section className="mb-12">
              <h2 className="font-serif text-2xl">Vozes no debate</h2>
              <div className="mt-6 space-y-8">
                {debate.quotes.map((q, i) => (
                  <IdeaQuoteBlock key={i} quote={q} showBadge />
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="font-serif text-2xl">Ideias envolvidas</h2>
            <p className="mt-2 text-sm text-[var(--secondary)]">
              As grandes ideias do <em>Syntopicon</em> que participam deste debate.
            </p>
            <div className="mt-6 grid gap-px overflow-hidden border bg-[var(--border)]">
              {relatedIdeas.map((idea) => (
                <Link
                  key={idea.slug}
                  href={`/ideias/${idea.slug}`}
                  className="block bg-[var(--surface)] p-6 transition hover:bg-[var(--cream)]"
                >
                  <p className="gc-kicker">{idea.domainName}</p>
                  <h3 className="mt-1 font-serif text-xl">{idea.name}</h3>
                  <p className="mt-2 text-sm italic text-[var(--secondary)]">
                    {idea.question}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-14 flex items-center justify-between border-t pt-6 text-sm">
            <Link href="/debates" className="text-[var(--accent)]">
              ← Todos os debates
            </Link>
            <Link
              href="/mapa-intelectual"
              className="text-[var(--accent)]"
            >
              Ver no mapa intelectual →
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
