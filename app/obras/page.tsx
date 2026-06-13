import type { Metadata } from "next";
import Link from "next/link";
import { ReferenceBookCatalog } from "@/components/ReferenceBookCatalog";
import { referenceBooks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Grandes Livros do Mundo Ocidental",
  description: "As 263 obras citadas pelo Syntopicon, com seus autores e relações conceituais."
};

const authorCount = new Set(referenceBooks.map((book) => book.author)).size;

export default function BooksPage() {
  return (
    <>
      <nav className="fixed left-6 top-6 z-30">
        <Link href="/" className="text-sm text-[var(--secondary)] hover:text-[var(--accent)]">‹ Início</Link>
      </nav>
      <article className="gc-page pb-20 pt-24">
        <header className="mb-14 max-w-2xl">
          <h1 className="font-serif text-5xl leading-none">Grandes Livros do Mundo Ocidental</h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
            {referenceBooks.length} obras · {authorCount} autores
          </p>
          <p className="gc-prose mt-9">
            As obras citadas pelo <em>Syntopicon</em>, de Homero a Freud. Cada título
            conduz de volta às Grandes Ideias que ajudou a formar.
          </p>
        </header>
        <ReferenceBookCatalog books={referenceBooks} />
      </article>
    </>
  );
}
