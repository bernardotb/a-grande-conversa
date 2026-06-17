import type { Metadata } from "next";
import Link from "next/link";
import { syntopiconIdeas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Acervo — 102 Grandes Ideias",
  description:
    "Explore as 102 grandes ideias do Syntopicon de Mortimer Adler, agrupadas por domínio do pensamento.",
};

const domainGroups = Array.from(
  syntopiconIdeas.reduce((acc, idea) => {
    if (!acc.has(idea.domain)) {
      acc.set(idea.domain, { name: idea.domainName, ideas: [] as typeof syntopiconIdeas });
    }
    acc.get(idea.domain)!.ideas.push(idea);
    return acc;
  }, new Map<string, { name: string; ideas: typeof syntopiconIdeas }>()),
).map(([slug, { name, ideas }]) => ({ slug, name, ideas }));

export default function AcervoPage() {
  return (
    <div className="min-h-screen pb-24 pt-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-14 max-w-2xl">
          <p className="section-eyebrow">Acervo completo</p>
          <h1 className="mt-3 font-serif text-5xl leading-none">102 Grandes Ideias</h1>
          <p className="mt-6 font-serif text-lg italic leading-7 text-[var(--secondary)]">
            O Syntopicon de Adler mapeou 102 grandes ideias em todos os grandes livros do
            Ocidente. Explore o acervo completo por domínio do pensamento.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {domainGroups.map(({ slug, name, ideas }) => (
            <details key={slug} className="group" open>
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between border-b pb-1.5">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {name}
                  </span>
                  <span className="font-mono text-[0.6rem] text-[var(--faint)]">
                    {ideas.length}
                  </span>
                </div>
              </summary>
              <ul className="mt-2.5 space-y-1">
                {ideas.map((idea) => (
                  <li key={idea.slug}>
                    <Link
                      href={`/ideias/${idea.slug}`}
                      className="block text-sm text-[var(--secondary)] transition hover:text-[var(--accent)]"
                    >
                      {idea.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="mt-16 border-t pt-10 text-center">
          <p className="text-sm text-[var(--faint)]">
            {syntopiconIdeas.length} ideias · baseado no{" "}
            <em>Syntopicon</em> de Mortimer J. Adler e Charles Van Doren
          </p>
        </div>
      </div>
    </div>
  );
}
