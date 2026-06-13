import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { RelationshipMap } from "@/components/RelationshipMap";
import { referenceBooks, syntopiconIdeas } from "@/lib/data";
import { buildKnowledgeGraph } from "@/lib/knowledge-graph";

export const metadata: Metadata = {
  title: "Mapa Intelectual",
  description: "Grafo interativo das conexões entre as 102 grandes ideias."
};

export default function MapPage() {
  const graph = buildKnowledgeGraph(syntopiconIdeas, referenceBooks);

  return (
    <>
      <PageHeader
        eyebrow="Cartografia do pensamento"
        title="Mapa Intelectual"
        description="Explore como as 102 grandes ideias se aproximam por meio dos pensadores que as formularam e das obras que continuam a colocá-las em conversa."
        breadcrumbs={[{ label: "Mapa Intelectual" }]}
      />
      <Container className="py-14">
        <div className="mb-8 grid gap-5 border-y py-5 text-sm leading-6 text-[var(--secondary)] md:grid-cols-3">
          <p>
            <strong className="block font-serif text-xl text-[var(--primary)]">
              102 ideias
            </strong>
            agrupadas em 11 domínios do conhecimento.
          </p>
          <p>
            <strong className="block font-serif text-xl text-[var(--primary)]">
              Conexões documentadas
            </strong>
            calculadas a partir de pensadores e obras em comum.
          </p>
          <p>
            <strong className="block font-serif text-xl text-[var(--primary)]">
              Leitura exploratória
            </strong>
            clique em qualquer ideia para reorganizar o mapa ao redor dela.
          </p>
        </div>
        <RelationshipMap nodes={graph.nodes} links={graph.links} />
      </Container>
    </>
  );
}
