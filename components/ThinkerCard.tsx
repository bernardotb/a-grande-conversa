"use client";

import { useState } from "react";
import type { SyntopiconThinker } from "@/lib/types";

function formatRespondsTo(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  return names.slice(0, -1).join(", ") + " e " + names[names.length - 1];
}

export function ThinkerCard({ thinker }: { thinker: SyntopiconThinker }) {
  const [isOpen, setIsOpen] = useState(false);

  const respondsLabel = formatRespondsTo(thinker.respondsTo);

  return (
    <div id={`p-${thinker.id}`} className="gc-card mx-auto w-full max-w-xl">
      <div className="px-5 py-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl leading-none">{thinker.name}</h3>
          <span className="whitespace-nowrap text-xs text-[var(--secondary)]">{thinker.dates}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{thinker.summary}</p>
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className="mt-3 text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)] transition-opacity hover:opacity-70"
        >
          {isOpen ? "Ocultar conexão" : "Ver conexão"}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4 border-t px-5 py-4">
          <div className="border border-[var(--border)] bg-[var(--cream)] p-4">
            {respondsLabel ? (
              <p className="font-serif text-base leading-7 text-[var(--primary)]">
                <span className="font-semibold">{thinker.name}</span>{" "}
                <span className="text-[var(--secondary)]">responde a</span>{" "}
                <span className="text-[var(--accent)]">{respondsLabel}</span>
              </p>
            ) : (
              <p className="font-serif text-base italic text-[var(--secondary)]">
                Ponto inicial deste fio cronológico.
              </p>
            )}
          </div>

          {thinker.quotes && thinker.quotes.length > 0 && (
            <div className="space-y-4">
              {thinker.quotes.map((q, i) => (
                <blockquote key={i} className="border-l-2 border-[var(--accent)] pl-4">
                  <p className="font-serif text-base italic leading-7 text-[var(--primary)]">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <cite className="mt-1.5 block text-[0.68rem] not-italic tracking-wide text-[var(--faint)]">
                    — {q.source}
                  </cite>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
