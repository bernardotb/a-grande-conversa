import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IdeaCard } from "@/components/IdeaCard";
import { BookCard } from "@/components/BookCard";
import { Timeline } from "@/components/Timeline";
import {
  authors,
  getAuthor,
  getPeriod,
  resolveBooks,
  resolveIdeas
} from "@/lib/data";

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const author = getAuthor((await params).slug);
  return author ? { title: author.name, description: author.bio } : { title: "Autor não encontrado" };
}

export default async function AuthorPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const author = getAuthor((await params).slug);
  if (!author) notFound();

  const period = getPeriod(author.period);
  const authorIdeas = resolveIdeas(author.ideas);
  const authorBooks = resolveBooks(author.books);

  return (
    <>
      <PageHeader
        eyebrow={`${period?.name ?? "Período não informado"} · ${author.birthDeath}`}
        title={author.name}
        description={author.bio}
        breadcrumbs={[{ label: "Autores", href: "/autores" }, { label: author.name }]}
      />
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside>
            <div className="paper-panel p-6">
              <div className="grid aspect-square place-items-center rounded-full border border-antique-500/40 bg-library-900 font-display text-7xl text-antique-400">
                {author.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}
              </div>
              <dl className="mt-6 grid gap-4 text-sm">
                <div>
                  <dt className="eyebrow">Cronologia</dt>
                  <dd className="mt-1 text-muted">{author.birthDeath}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Período</dt>
                  <dd className="mt-1 text-muted">{period?.name} · {period?.range}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Estado editorial</dt>
                  <dd className="mt-1 text-muted">{author.verified ? "Dados básicos revisados" : "Dados provisórios"}</dd>
                </div>
              </dl>
            </div>
          </aside>
          <div>
            <section>
              <p className="eyebrow">Contexto</p>
              <h2 className="mt-2 font-display text-4xl">Lugar na conversa</h2>
              <p className="mt-5 max-w-3xl font-display text-xl leading-9 text-muted">{author.bio}</p>
            </section>
            <section className="mt-12">
              <Timeline
                items={[
                  {
                    date: author.birthDeath,
                    label: "Vida e obra",
                    description: "Cronologia resumida. Uma linha do tempo biográfica detalhada será adicionada após revisão de fontes especializadas."
                  },
                  {
                    date: period?.range ?? "Período em revisão",
                    label: period?.name ?? "Contexto histórico",
                    description: "A classificação por períodos serve como instrumento de navegação e não elimina continuidades ou disputas de periodização."
                  }
                ]}
              />
            </section>
          </div>
        </div>

        <section className="mt-20">
          <p className="eyebrow">Bibliografia selecionada</p>
          <h2 className="mt-2 font-display text-4xl">Obras no acervo</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {authorBooks.map((book) => <BookCard key={book.slug} book={book} />)}
          </div>
        </section>

        <section className="mt-20">
          <p className="eyebrow">Núcleos conceituais</p>
          <h2 className="mt-2 font-display text-4xl">Ideias relacionadas</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {authorIdeas.map((idea) => <IdeaCard key={idea.slug} idea={idea} />)}
          </div>
        </section>
      </Container>
    </>
  );
}
