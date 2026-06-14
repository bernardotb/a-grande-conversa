import type { Metadata } from "next";
import Link from "next/link";
import { ReferenceNav } from "@/components/ReferenceNav";
import { ReferenceSearch } from "@/components/ReferenceSearch";
import { referenceBooks, referencePlans, syntopiconIdeas } from "@/lib/data";
import { debates, bridgeConcepts } from "@/lib/knowledge-graph";

export const metadata: Metadata = {
  title: "Busca",
  description:
    "Pesquise ideias, pensadores, obras e planos de leitura da Grande Conversa.",
};

export default function SearchPage() {
  return (
    <main className="gc-page min-h-screen">
      <ReferenceNav />
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
        <Link href="/" className="gc-kicker hover:text-[var(--accent)]">
          A Grande Conversa
        </Link>
        <header className="mb-10 mt-16 max-w-3xl">
          <p className="gc-kicker">Catálogo geral</p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--ink)] sm:text-7xl">
            Busca
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--secondary)]">
            Consulte as 102 Grandes Ideias, o catálogo de obras e os planos de
            leitura em uma única pesquisa.
          </p>
        </header>

        <ReferenceSearch
          ideas={syntopiconIdeas}
          books={referenceBooks}
          plans={referencePlans}
          debates={debates}
          concepts={bridgeConcepts}
        />
      </div>
    </main>
  );
}
