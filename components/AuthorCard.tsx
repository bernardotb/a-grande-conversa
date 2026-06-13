import Link from "next/link";
import type { Author } from "@/lib/types";
import { getPeriod } from "@/lib/data";

export function AuthorCard({ author }: { author: Author }) {
  const period = getPeriod(author.period);
  const initials = author.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <article className="paper-panel group grid grid-cols-[72px_1fr] gap-5 p-5 transition hover:border-antique-500/70">
      <div className="grid size-[72px] place-items-center rounded-full border border-antique-500/40 bg-library-900 font-display text-2xl text-antique-400">
        {initials}
      </div>
      <div>
        <p className="eyebrow">{period?.name}</p>
        <h3 className="mt-2 font-display text-2xl">{author.name}</h3>
        <p className="mt-1 text-xs text-muted">{author.birthDeath}</p>
        <Link
          href={`/autores/${author.slug}`}
          className="mt-4 inline-block text-sm font-bold text-wine-700 hover:text-antique-500 dark:text-antique-400"
        >
          Consultar autor →
        </Link>
      </div>
    </article>
  );
}
