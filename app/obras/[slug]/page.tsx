import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReferenceNav } from "@/components/ReferenceNav";
import {
  getReferenceBook,
  getSyntopiconIdea,
  referenceBooks
} from "@/lib/data";

export function generateStaticParams() {
  return referenceBooks.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const book = getReferenceBook((await params).slug);
  return book
    ? { title: book.title, description: book.description[0] ?? `${book.title}, de ${book.author}.` }
    : { title: "Obra não encontrada" };
}

export default async function BookPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const book = getReferenceBook((await params).slug);
  if (!book) notFound();
  const relatedIdeas = book.ideas
    .map(getSyntopiconIdea)
    .filter((idea): idea is NonNullable<typeof idea> => Boolean(idea));

  return (
    <>
      <ReferenceNav />
      <article className="gc-page pb-20 pt-24">
        <header className="border-b pb-10">
          <p className="gc-kicker">Grande obra</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">{book.title}</h1>
          {book.originalTitle !== book.title && (
            <p className="mt-3 font-serif text-xl italic text-[var(--faint)]">{book.originalTitle}</p>
          )}
          <p className="mt-6 font-serif text-2xl text-[var(--accent)]">{book.author}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {book.freeUrl && (
              <a href={book.freeUrl} target="_blank" rel="noreferrer" className="border px-4 py-2 text-xs uppercase tracking-wider text-[var(--accent)]">
                Ler gratuitamente
              </a>
            )}
            <a href={book.sourceUrl} target="_blank" rel="noreferrer" className="border px-4 py-2 text-xs uppercase tracking-wider text-[var(--secondary)]">
              Referência original
            </a>
          </div>
        </header>

        <section className="mt-12">
          <h2 className="font-serif text-3xl">Sobre {book.title}</h2>
          {book.description.length ? (
            <div className="gc-prose mt-6 grid gap-5">
              {book.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          ) : (
            <p className="mt-5 text-sm leading-6 text-[var(--secondary)]">
              Esta ficha ainda não possui ensaio editorial no acervo de referência. As relações conceituais abaixo
              foram preservadas.
            </p>
          )}
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-3xl">
            Aparece em {relatedIdeas.length} {relatedIdeas.length === 1 ? "ideia" : "ideias"}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedIdeas.map((idea) => (
              <Link key={idea.slug} href={`/ideias/${idea.slug}`} className="gc-card p-5 transition hover:border-[var(--accent)]">
                <span className="font-serif text-2xl text-[var(--primary)]">{idea.name}</span>
                <span className="mt-2 block text-sm leading-5 text-[var(--secondary)]">{idea.question}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
