import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { debates } from "@/lib/knowledge-graph";

export const metadata: Metadata = {
  title: "Debates",
  description:
    "Os grandes debates filosóficos que atravessam as 102 ideias: questões centrais onde pensadores tomam posições opostas ao longo dos séculos.",
};

export default function DebatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Grandes questões em disputa"
        title="Debates"
        description="Questões centrais que atravessam séculos: onde pensadores tomam posições opostas, elaboram umas sobre as outras e constroem a grande conversa."
        breadcrumbs={[{ label: "Debates" }]}
      />
      <Container className="py-16">
        <div className="grid gap-0 border">
          {debates.map((debate) => (
            <Link
              key={debate.id}
              href={`/debates/${debate.slug}`}
              className="gc-card block border-b border-[var(--border)] p-7 last:border-b-0 transition hover:border-l-2 hover:border-l-[var(--accent)] hover:bg-[var(--cream)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="gc-kicker">{debate.relatedIdeaIds.length} ideias envolvidas</p>
                  <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
                    {debate.title}
                  </h2>
                  <p className="mt-3 font-serif text-base italic leading-7 text-[var(--secondary)]">
                    {debate.centralQuestion}
                  </p>
                  {debate.description && (
                    <p className="mt-3 text-sm leading-6 text-[var(--faint)]">
                      {debate.description}
                    </p>
                  )}
                </div>
                <EvidenceBadge
                  status={debate.evidenceStatus}
                  className="mt-1 shrink-0"
                />
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-xs leading-5 text-[var(--faint)]">
          Os debates são inferências editoriais que organizam as conexões entre as grandes
          ideias do <em>Syntopicon</em>. Cada debate liga pensadores que, em seus textos,
          respondem à mesma questão central.
        </p>
      </Container>
    </>
  );
}
