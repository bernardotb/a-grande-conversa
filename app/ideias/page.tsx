import type { Metadata } from "next";
import Link from "next/link";
import { syntopiconDomains, syntopiconIdeas } from "@/lib/data";

export const metadata: Metadata = {
  title: "As 102 Grandes Ideias",
  description: "As 102 Grandes Ideias do Syntopicon, agrupadas por domínio e apresentadas em português."
};

export default function IdeasPage() {
  return (
    <>
      <nav className="fixed left-6 top-6 z-30">
        <Link href="/" className="text-sm text-[var(--secondary)] hover:text-[var(--accent)]">‹ Início</Link>
      </nav>
      <article className="gc-page pb-20 pt-24">
        <header className="mb-16 max-w-2xl">
          <h1 className="font-serif text-5xl leading-none">As 102 Grandes Ideias</h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
            O Syntopicon de Mortimer Adler, mapeado
          </p>
          <p className="gc-prose mt-9">
            De <span className="text-[var(--accent)]">Anjo</span> a
            <span className="text-[var(--accent)]"> Mundo</span>, cada ideia se abre em um
            fio cronológico de pensadores, permitindo ler respostas separadas por séculos
            como partes de um único argumento.
          </p>
        </header>
        <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {syntopiconDomains.map((domain) => {
            const domainIdeas = syntopiconIdeas.filter((idea) => idea.domain === domain.slug);
            return (
              <section key={domain.slug}>
                <h2 className="border-b pb-3 font-serif text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                  {domain.name}
                </h2>
                <div className="mt-4 flex flex-wrap items-baseline leading-8">
                  {domainIdeas.map((idea, index) => (
                    <span key={idea.slug}>
                      <Link href={`/ideias/${idea.slug}`} className="gc-link font-serif text-lg">
                        {idea.name}
                      </Link>
                      {index < domainIdeas.length - 1 && <span className="mx-2 text-[var(--faint)]">·</span>}
                    </span>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </article>
      <footer className="px-6 py-12 text-center text-sm text-[var(--faint)]">
        Baseado no trabalho de Adler, Van Doren e dos editores dos Grandes Livros.
      </footer>
    </>
  );
}
