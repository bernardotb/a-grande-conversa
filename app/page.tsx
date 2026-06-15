import Link from "next/link";
import { referenceBooks, syntopiconIdeas } from "@/lib/data";
import { buildKnowledgeGraph, debates, bridgeConcepts } from "@/lib/knowledge-graph";
import { RelationshipMap } from "@/components/RelationshipMap";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/Animated";

const featuredSlugs = ["justica", "liberdade", "verdade"];
const featured = featuredSlugs
  .map((slug) => syntopiconIdeas.find((idea) => idea.slug === slug))
  .filter((idea): idea is (typeof syntopiconIdeas)[number] => Boolean(idea));
const thoughtCount = syntopiconIdeas.reduce((total, idea) => total + idea.thinkers.length, 0);
const graph = buildKnowledgeGraph(syntopiconIdeas, referenceBooks);

const domainGroups = Array.from(
  syntopiconIdeas.reduce((acc, idea) => {
    if (!acc.has(idea.domain)) {
      acc.set(idea.domain, { name: idea.domainName, ideas: [] as (typeof syntopiconIdeas) });
    }
    acc.get(idea.domain)!.ideas.push(idea);
    return acc;
  }, new Map<string, { name: string; ideas: (typeof syntopiconIdeas) }>()),
).map(([slug, { name, ideas }]) => ({ slug, name, ideas }));

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-16 text-center">
        <div className="gc-fade-up max-w-3xl">
          <p className="section-eyebrow">Explore os Grandes Livros do Mundo Ocidental</p>
          <h1 className="mt-10 font-serif text-[clamp(3.5rem,9vw,7rem)] font-light italic leading-[0.82] tracking-[-0.04em]">
            Acompanhe uma ideia
            <span className="mt-2 block text-[var(--accent)]">através de 2.500 anos</span>
            <span className="mt-2 block">de pensamento.</span>
          </h1>
          <div className="gc-rule mx-auto mt-10" />
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-8 italic text-[var(--secondary)] sm:text-xl">
            Explore como Justiça, Liberdade, Verdade, Alma, Deus, Estado e outras grandes
            ideias foram discutidas por autores de Homero a Freud.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/ideias" className="btn-primary">
              Começar por uma ideia
            </Link>
            <Link href="/mapa-intelectual" className="btn-secondary">
              Ver o mapa intelectual
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <span className="stat-pill">{syntopiconIdeas.length} grandes ideias</span>
            <span className="stat-pill">{thoughtCount.toLocaleString("pt-BR")}+ posições de pensadores</span>
          </div>
          <Link href="#indice" className="mt-12 inline-flex flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--faint)] hover:text-[var(--accent)] transition-colors">
            Explorar
            <span className="text-base">⌄</span>
          </Link>
        </div>
      </section>

      <section id="indice" className="border-t bg-[var(--cream)]">
        <div className="gc-page py-12">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="gc-kicker">Índice</p>
              <h2 className="mt-2 font-serif text-3xl">102 Grandes Ideias</h2>
            </div>
            <Link href="/ideias" className="text-sm text-[var(--accent)]">
              Ver todas →
            </Link>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        </div>
      </section>

      <section id="mapa" className="border-t">
        <div className="gc-page py-16 text-center">
          <p className="gc-kicker">Cartografia do pensamento</p>
          <h2 className="mt-3 font-serif text-4xl">Mapa Intelectual</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--secondary)]">
            Cada círculo é uma das 102 grandes ideias. As linhas revelam pensadores e obras em comum.
            Clique em qualquer ideia para explorar sua vizinhança intelectual.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-8">
          <RelationshipMap nodes={graph.nodes} links={graph.links} />
        </div>
        <div className="gc-page pb-16 text-center">
          <Link
            href="/mapa-intelectual"
            className="inline-block border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] transition hover:border-[var(--accent)]"
          >
            Abrir mapa em tela cheia →
          </Link>
        </div>
      </section>

      <section id="ideias" className="gc-page border-t py-24">
        <h2 className="text-center font-serif text-4xl">As Ideias</h2>
        <AnimatedStagger className="mt-12 grid gap-5">
          {featured.map((idea) => (
            <AnimatedItem key={idea.slug}>
              <Link href={`/ideias/${idea.slug}`} className="gc-card block p-7 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
                <p className="font-serif text-3xl text-[var(--primary)]">{idea.name}</p>
                <p className="mt-3 font-serif text-lg italic leading-7 text-[var(--secondary)]">{idea.question}</p>
                <p className="mt-6 text-xs text-[var(--faint)]">
                  {idea.thinkers.length} pensadores · {idea.readingList.length} obras e leituras
                </p>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection className="mt-20 grid gap-px overflow-hidden border bg-[var(--border)] md:grid-cols-3">
          <Link href="/ideias" className="bg-[var(--surface)] p-7 transition hover:bg-[var(--cream)]">
            <p className="gc-kicker">Percorrer</p>
            <h2 className="mt-3 font-serif text-3xl">As 102 Grandes Ideias</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">
              De Anjo a Mundo, as ideias do <em>Syntopicon</em>, agrupadas por domínio.
            </p>
            <p className="mt-8 text-sm text-[var(--accent)]">Explorar ideias →</p>
          </Link>
          <Link href="/planos-de-leitura" className="bg-[var(--surface)] p-7 transition hover:bg-[var(--cream)]">
            <p className="gc-kicker">Começar</p>
            <h2 className="mt-3 font-serif text-3xl">Planos de Leitura</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">
              Caminhos orientados pelos Grandes Livros, com uma ordem para entrar na conversa.
            </p>
            <p className="mt-8 text-sm text-[var(--accent)]">Começar a ler →</p>
          </Link>
          <Link href="/obras" className="bg-[var(--surface)] p-7 transition hover:bg-[var(--cream)]">
            <p className="gc-kicker">Referência</p>
            <h2 className="mt-3 font-serif text-3xl">Os Grandes Livros</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">
              Obras fundamentais e os conceitos que cada uma ajudou a formar.
            </p>
            <p className="mt-8 text-sm text-[var(--accent)]">Explorar obras →</p>
          </Link>
        </AnimatedSection>
      </section>

      <section id="debates" className="gc-page border-t py-20">
        <h2 className="text-center font-serif text-4xl">Grandes Debates</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-[var(--secondary)]">
          Questões centrais onde pensadores tomam posições opostas ao longo dos séculos.
        </p>
        <AnimatedStagger className="mt-10 grid gap-px overflow-hidden border bg-[var(--border)] md:grid-cols-2">
          {debates.slice(0, 4).map((debate) => (
            <AnimatedItem key={debate.id}>
              <Link
                href={`/debates/${debate.slug}`}
                className="block bg-[var(--surface)] p-7 transition hover:bg-[var(--cream)]"
              >
                <h3 className="font-serif text-xl text-[var(--primary)]">{debate.title}</h3>
                <p className="mt-2 text-sm italic leading-6 text-[var(--secondary)]">
                  {debate.centralQuestion}
                </p>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
        <div className="mt-8 text-center">
          <Link
            href="/debates"
            className="text-sm text-[var(--accent)]"
          >
            Ver todos os {debates.length} debates →
          </Link>
        </div>
      </section>

      <section id="conceitos" className="gc-page border-t py-20">
        <h2 className="text-center font-serif text-4xl">Conceitos-Ponte</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-[var(--secondary)]">
          Noções que conectam múltiplas grandes ideias e revelam como os domínios do pensamento se entrelaçam.
        </p>
        <AnimatedStagger className="mt-10 flex flex-wrap justify-center gap-3">
          {bridgeConcepts.map((concept) => (
            <AnimatedItem key={concept.id}>
              <Link
                href={`/conceitos/${concept.slug}`}
                className="block border border-[var(--border)] px-5 py-3 font-serif text-lg text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {concept.title}
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
        <div className="mt-8 text-center">
          <Link
            href="/conceitos"
            className="text-sm text-[var(--accent)]"
          >
            Explorar conceitos-ponte →
          </Link>
        </div>
      </section>

      <footer className="px-6 py-16 text-center">
        <div className="gc-rule mx-auto mb-8" />
        <p className="mx-auto max-w-lg text-sm leading-6 text-[var(--faint)]">
          Baseado no trabalho de Mortimer J. Adler, Charles Van Doren e dos editores de
          <em> Great Books of the Western World</em>.
        </p>
        <Link href="/sobre" className="mt-5 inline-block text-sm text-[var(--accent)]">
          O que é a Grande Conversa?
        </Link>
      </footer>
    </>
  );
}
