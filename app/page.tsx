import Link from "next/link";
import { referenceBooks, syntopiconIdeas } from "@/lib/data";
import { buildKnowledgeGraph } from "@/lib/knowledge-graph";
import { RelationshipMap } from "@/components/RelationshipMap";

const featuredSlugs = ["justica", "liberdade", "verdade"];
const featured = featuredSlugs
  .map((slug) => syntopiconIdeas.find((idea) => idea.slug === slug))
  .filter((idea): idea is (typeof syntopiconIdeas)[number] => Boolean(idea));
const thoughtCount = syntopiconIdeas.reduce((total, idea) => total + idea.thinkers.length, 0);
const graph = buildKnowledgeGraph(syntopiconIdeas, referenceBooks);

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center px-6 py-20 text-center">
        <div className="gc-fade-up max-w-3xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--secondary)]">
            Explore os Grandes Livros do Mundo Ocidental
          </p>
          <h1 className="mt-10 font-serif text-[clamp(4rem,10vw,7.5rem)] font-light italic leading-[0.78] tracking-[-0.045em]">
            A Grande
            <span className="mt-3 block">Conversa</span>
          </h1>
          <div className="gc-rule mx-auto mt-12" />
          <p className="mt-8 font-serif text-xl italic text-[var(--secondary)] sm:text-2xl">
            Siga uma ideia através de 2.500 anos de pensamento ocidental.
          </p>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-[var(--faint)]">
            Uma ferramenta interativa baseada no <em>Syntopicon</em>, de Adler e Van Doren,
            com autores, obras e percursos de leitura em português.
          </p>
          <p className="mt-8 font-mono text-xs tracking-[0.12em] text-[var(--faint)]">
            {syntopiconIdeas.length} ideias <span className="px-2">·</span> {thoughtCount.toLocaleString("pt-BR")}+ pensamentos
          </p>
          <Link href="#mapa" className="mt-16 inline-flex flex-col items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Explorar
            <span className="text-lg">⌄</span>
          </Link>
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
        <div className="mt-12 grid gap-5">
          {featured.map((idea) => (
            <Link key={idea.slug} href={`/ideias/${idea.slug}`} className="gc-card block p-7 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
              <p className="font-serif text-3xl text-[var(--primary)]">{idea.name}</p>
              <p className="mt-3 font-serif text-lg italic leading-7 text-[var(--secondary)]">{idea.question}</p>
              <p className="mt-6 text-xs text-[var(--faint)]">
                {idea.thinkers.length} pensadores · {idea.readingList.length} obras e leituras
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border bg-[var(--border)] md:grid-cols-3">
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
