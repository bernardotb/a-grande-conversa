import type { Metadata } from "next";
import { syntopiconDomains, syntopiconIdeas } from "@/lib/data";
import { IdeaIndex } from "@/components/IdeaIndex";

export const metadata: Metadata = {
  title: "As 102 Grandes Ideias",
  description: "As 102 Grandes Ideias do Syntopicon, agrupadas por domínio e apresentadas em português."
};

export default function IdeasPage() {
  return (
    <div className="min-h-screen pb-24 pt-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <IdeaIndex ideas={syntopiconIdeas} domains={syntopiconDomains} />
      </div>
      <footer className="mt-16 px-6 py-10 text-center text-sm text-[var(--faint)]">
        Baseado no trabalho de Adler, Van Doren e dos editores dos Grandes Livros.
      </footer>
    </div>
  );
}
