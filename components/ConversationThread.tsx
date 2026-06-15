import type { SyntopiconThinker } from "@/lib/types";
import { ThinkerCard } from "@/components/ThinkerCard";

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
              <ThinkerCard key={thinker.id} thinker={thinker} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
