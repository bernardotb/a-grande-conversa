import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { bridgeConcepts } from "@/lib/knowledge-graph";

export const metadata: Metadata = {
  title: "Conceitos-Ponte",
  description:
    "Conceitos que conectam múltiplas grandes ideias: pontes filosóficas que revelam como diferentes domínios do pensamento se entrelaçam.",
};

export default function ConceptsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pontes entre ideias"
        title="Conceitos-Ponte"
        description="Ideias que funcionam como conectores: cada conceito-ponte atravessa múltiplos domínios e revela como as grandes ideias do pensamento ocidental se entrelaçam."
        breadcrumbs={[{ label: "Conceitos-Ponte" }]}
      />
      <Container className="py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {bridgeConcepts.map((concept) => (
            <Link
              key={concept.id}
              href={`/conceitos/${concept.slug}`}
              className="gc-card block p-7 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <p className="gc-kicker">
                  {concept.relatedIdeaIds.length} ideias relacionadas
                </p>
                <EvidenceBadge status={concept.evidenceStatus} className="shrink-0" />
              </div>
              <h2 className="font-serif text-2xl text-[var(--primary)]">
                {concept.title}
              </h2>
              {concept.description && (
                <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">
                  {concept.description}
                </p>
              )}
              <p className="mt-5 text-sm text-[var(--accent)]">
                Explorar conceito →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
