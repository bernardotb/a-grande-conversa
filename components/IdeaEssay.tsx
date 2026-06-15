import type { IdeaEssay as IdeaEssayData, SyntopiconThinker } from "@/lib/types";

type Props = {
  essay: IdeaEssayData;
  thinkers: SyntopiconThinker[];
};

export function IdeaEssay({ essay, thinkers }: Props) {
  const thinkerById = new Map(thinkers.map((thinker) => [thinker.id, thinker]));

  return (
    <section className="mx-auto mt-20 max-w-3xl" aria-labelledby="ensaio-completo">
      <div className="border-y py-10 text-center">
        <p className="gc-kicker">Edição longa</p>
        <h2 id="ensaio-completo" className="mt-3 font-serif text-4xl">
          {essay.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--secondary)]">
          {essay.introduction}
        </p>
      </div>

      <div className="mt-14 space-y-20">
        {essay.sections.map((section, index) => {
          const thinker = thinkerById.get(section.thinkerId);
          if (!thinker) return null;

          return (
            <article key={section.thinkerId} id={`ensaio-${section.thinkerId}`}>
              <header className="border-b pb-5">
                <p className="font-mono text-xs tracking-[0.15em] text-[var(--faint)]">
                  {String(index + 1).padStart(2, "0")} · {thinker.dates} · {thinker.era}
                </p>
                <h3 className="mt-2 font-serif text-4xl">{thinker.name}</h3>
                <p className="mt-3 font-serif text-xl italic leading-8 text-[var(--secondary)]">
                  {thinker.summary}
                </p>
              </header>

              <div className="gc-prose mt-7 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.quotes.length > 0 && (
                <div className="mt-8 grid gap-5">
                  {section.quotes.map((quote) => (
                    <blockquote
                      key={`${quote.source}-${quote.text}`}
                      className="border-l-2 border-[var(--accent)] bg-[var(--surface)] px-6 py-5"
                    >
                      <p className="font-serif text-lg italic leading-8 text-[var(--primary)]">
                        “{quote.text}”
                      </p>
                      <cite className="mt-3 block text-xs not-italic tracking-wide text-[var(--faint)]">
                        {quote.source}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              )}

              <p className="mt-7 text-xs uppercase tracking-[0.16em] text-[var(--faint)]">
                Obra-chave: <span className="text-[var(--accent)]">{section.keyWork}</span>
              </p>
            </article>
          );
        })}
      </div>

      <p className="mt-16 border-t pt-5 text-center text-xs leading-5 text-[var(--faint)]">
        {essay.sourceNote}
      </p>
    </section>
  );
}
