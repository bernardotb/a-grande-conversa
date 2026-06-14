import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { bridgeConcepts, getConcept, getDebate } from "@/lib/knowledge-graph";
import { getSyntopiconIdea } from "@/lib/data";

export function generateStaticParams() {
  return bridgeConcepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const concept = getConcept((await params).slug);
  return concept
    ? { title: concept.title, description: concept.description }
    : { title: "Conceito não encontrado" };
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const concept = getConcept((await params).slug);
  if (!concept) notFound();

  const relatedIdeas = concept.relatedIdeaIds
    .map(getSyntopiconIdea)
    .filter(Boolean) as NonNullable<ReturnType<typeof getSyntopiconIdea>>[];

  const relatedDebates = (concept.relatedDebateIds ?? [])
    .map(getDebate)
    .filter(Boolean) as NonNullable<ReturnType<typeof getDebate>>[];

  return (
    <>
      <header className="border-b px-6 py-12 text-center">
        <p className="gc-kicker">Conceito-Ponte</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">{concept.title}</h1>
        <div className="mt-5 flex items-center justify-center gap-3">
          <EvidenceBadge status={concept.evidenceStatus} />
        </div>
      </header>

      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          {concept.description && (
            <section className="mb-12">
              <p className="text-base leading-7 text-[var(--secondary)]">
                {concept.description}
              </p>
            </section>
          )}

          <section className="mb-12">
            <h2 className="font-serif text-2xl">Ideias conectadas</h2>
            <div className="mt-6 grid gap-px overflow-hidden border bg-[var(--border)]">
              {relatedIdeas.map((idea) => (
                <Link
                  key={idea.slug}
                  href={`/ideias/${idea.slug}`}
                  className="block bg-[var(--surface)] p-5 transition hover:bg-[var(--cream)]"
                >
                  <p className="gc-kicker">{idea.domainName}</p>
                  <h3 className="mt-1 font-serif text-lg">{idea.name}</h3>
                </Link>
              ))}
            </div>
          </section>

          {relatedDebates.length > 0 && (
            <section className="mb-12">
              <h2 className="font-serif text-2xl">Debates relacionados</h2>
              <div className="mt-6 space-y-4">
                {relatedDebates.map((debate) => (
                  <Link
                    key={debate.id}
                    href={`/debates/${debate.slug}`}
                    className="gc-card block p-5 transition hover:border-[var(--accent)]"
                  >
                    <h3 className="font-serif text-lg">{debate.title}</h3>
                    <p className="mt-1 text-sm italic text-[var(--secondary)]">
                      {debate.centralQuestion}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 flex items-center justify-between border-t pt-6 text-sm">
            <Link href="/conceitos" className="text-[var(--accent)]">
              ← Todos os conceitos-ponte
            </Link>
            <Link href="/mapa-intelectual" className="text-[var(--accent)]">
              Ver no mapa →
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
