import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConversationThread } from "@/components/ConversationThread";
import { ReferenceNav } from "@/components/ReferenceNav";
import { getSyntopiconIdea, syntopiconIdeas } from "@/lib/data";

export function generateStaticParams() {
  return syntopiconIdeas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const idea = getSyntopiconIdea((await params).slug);
  return idea
    ? { title: idea.name, description: idea.question }
    : { title: "Ideia não encontrada" };
}

export default async function IdeaPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const idea = getSyntopiconIdea((await params).slug);
  if (!idea) notFound();

  return (
    <>
      <ReferenceNav />
      <header className="sticky top-0 z-20 border-b bg-[color:var(--cream)]/95 px-6 py-7 text-center backdrop-blur">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {idea.domainName}
        </p>
        <h1 className="mt-2 font-serif text-4xl leading-none sm:text-5xl">{idea.name}</h1>
        <p className="mx-auto mt-3 max-w-2xl font-serif text-lg italic text-[var(--secondary)]">
          {idea.question}
        </p>
      </header>

      <main className="px-5 pb-20 pt-14">
        <ConversationThread thinkers={idea.thinkers} />

        <div className="mx-auto mt-16 flex max-w-xl items-center justify-center">
          <div className="w-16 border-t" />
          <span className="px-4 font-serif text-sm italic text-[var(--secondary)]">finis</span>
          <div className="w-16 border-t" />
        </div>

        <section className="mx-auto mt-14 max-w-2xl">
          <h2 className="font-serif text-3xl">Lista de leitura</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">
            Siga este fio nos textos primários, na ordem em que entram na conversa.
          </p>
          <ol className="mt-6 border bg-[var(--surface)] p-6">
            {idea.readingList.map((item) => (
              <li key={item} className="py-1 font-serif text-[1.05rem] leading-7">
                {item.replace(/^\d+\.\s*/, "")}
              </li>
            ))}
          </ol>
        </section>

        <details className="mx-auto mt-14 max-w-2xl border-t pt-5">
          <summary className="cursor-pointer text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
            Ler como texto
          </summary>
          <div className="mt-10 grid gap-12">
            {idea.thinkers.map((thinker) => (
              <article key={thinker.id} className="border-b pb-9">
                <h3 className="font-serif text-2xl">{thinker.name}</h3>
                <p className="mt-1 text-xs tracking-wider text-[var(--faint)]">
                  {thinker.dates} · {thinker.era}
                </p>
                <p className="mt-4 font-serif text-lg italic leading-8 text-[var(--secondary)]">
                  {thinker.summary}
                </p>
                {thinker.respondsTo.length > 0 && (
                  <p className="mt-4 text-xs text-[var(--faint)]">
                    Responde a: {thinker.respondsTo.join(", ")}
                  </p>
                )}
              </article>
            ))}
          </div>
        </details>

        <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-5 text-[var(--faint)]">
          Adaptação acadêmica em português do conteúdo de referência.{" "}
          <a href={idea.sourceUrl} target="_blank" rel="noreferrer" className="text-[var(--accent)] underline">
            Consultar a página original
          </a>
          .
        </p>
      </main>
      <div className="pb-12 text-center">
        <Link href="/ideias" className="text-sm text-[var(--accent)]">← Voltar às 102 ideias</Link>
      </div>
    </>
  );
}
