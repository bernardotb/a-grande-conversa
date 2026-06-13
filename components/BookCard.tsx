import Link from "next/link";
import type { Book } from "@/lib/types";
import { getAuthor } from "@/lib/data";

export function BookCard({ book }: { book: Book }) {
  const author = getAuthor(book.author);

  return (
    <article className="group flex min-h-72 flex-col border border-antique-500/30 bg-wine-900 p-6 text-parchment-100 shadow-card transition hover:-translate-y-1 hover:border-antique-400">
      <div className="mb-8 h-1 w-16 bg-antique-400" />
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-antique-400">
        {book.year}
      </p>
      <h3 className="mt-3 font-display text-3xl leading-tight">{book.title}</h3>
      <p className="mt-2 text-sm text-parchment-100/60">{author?.name}</p>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-parchment-100/68">
        {book.description}
      </p>
      <Link
        href={`/obras/${book.slug}`}
        className="mt-auto pt-6 font-display text-lg text-antique-400"
      >
        Ver edição comentada →
      </Link>
    </article>
  );
}
