import type { Metadata } from "next";
import { ReferenceBookCatalog } from "@/components/ReferenceBookCatalog";
import { referenceBooks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grandes Livros do Mundo Ocidental",
  description: "As 263 obras citadas pelo Syntopicon, com seus autores e relações conceituais."
};

const authorCount = new Set(referenceBooks.map((book) => book.author)).size;

export default function BooksPage() {
  return (
    <div className="pb-24 pt-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="mb-16 max-w-2xl">
          <p className="section-eyebrow">Catálogo editorial</p>
          <h1 className="mt-3 font-serif text-5xl leading-none">Grandes Livros do Mundo Ocidental</h1>
          <p className="gc-prose mt-6">
            Cada obra é uma entrada na Grande Conversa — e um caminho para as ideias
            que ajudou a formar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="stat-pill">{referenceBooks.length} obras</span>
            <span className="stat-pill">{authorCount} autores</span>
          </div>
        </header>
        <ReferenceBookCatalog books={referenceBooks} />
      </div>
    </div>
  );
}
