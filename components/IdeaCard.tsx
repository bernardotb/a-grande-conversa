import Link from "next/link";
import type { Idea } from "@/lib/types";
import { getCategory } from "@/lib/data";

export function IdeaCard({ idea }: { idea: Idea }) {
  const category = getCategory(idea.category);

  return (
    <article className="paper-panel group relative flex min-h-72 flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-antique-500/70">
      <span className="absolute right-5 top-3 font-display text-7xl text-antique-500/10">
        {String(idea.number).padStart(2, "0")}
      </span>
      <p className="eyebrow relative">{category?.name}</p>
      <h3 className="relative mt-7 font-display text-4xl">{idea.name}</h3>
      <p className="relative mt-4 line-clamp-4 text-sm leading-6 text-muted">
        {idea.summary}
      </p>
      <div className="relative mt-auto pt-6">
        <Link
          href={`/ideias/${idea.slug}`}
          className="inline-flex items-center gap-2 font-display text-lg text-wine-700 hover:text-antique-500 dark:text-antique-400"
          aria-label={`Ler sobre ${idea.name}`}
        >
          Abrir ficha <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
