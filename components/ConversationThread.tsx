import type { SyntopiconThinker } from "@/lib/types";

export function ConversationThread({ thinkers }: { thinkers: SyntopiconThinker[] }) {
  const groups = thinkers.reduce<Array<{ era: string; thinkers: SyntopiconThinker[] }>>(
    (result, thinker) => {
      const current = result.at(-1);
      if (!current || current.era !== thinker.era) {
        result.push({ era: thinker.era, thinkers: [thinker] });
      } else {
        current.thinkers.push(thinker);
      }
      return result;
    },
    []
  );

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute bottom-0 left-1/2 top-0 -z-10 w-px -translate-x-1/2 bg-[var(--border)]" aria-hidden="true" />
      {groups.map((group) => (
        <section key={`${group.era}-${group.thinkers[0]?.id}`} className="mb-12">
          <p className="mx-auto mb-8 w-fit bg-[var(--cream)] px-4 text-center text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">
            {group.era}
          </p>
          <div className="grid gap-8">
            {group.thinkers.map((thinker) => (
              <details key={thinker.id} id={`p-${thinker.id}`} className="gc-card group mx-auto w-full max-w-xl">
                <summary className="cursor-pointer list-none px-5 py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl leading-none">{thinker.name}</h3>
                    <span className="whitespace-nowrap text-xs text-[var(--secondary)]">{thinker.dates}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{thinker.summary}</p>
                  <span className="mt-3 block text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                    <span className="group-open:hidden">Abrir conexão</span>
                    <span className="hidden group-open:inline">Fechar conexão</span>
                  </span>
                </summary>
                <div className="border-t px-5 py-4">
                  {thinker.respondsTo.length ? (
                    <>
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-[var(--faint)]">
                        Responde a
                      </p>
                      <p className="mt-2 font-serif text-lg text-[var(--accent)]">
                        {thinker.respondsTo.join(" · ")}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm italic text-[var(--secondary)]">
                      Ponto inicial deste fio cronológico.
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
