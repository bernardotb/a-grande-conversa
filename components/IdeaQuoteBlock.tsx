import { EvidenceBadge } from "@/components/EvidenceBadge";
import type { Quote } from "@/lib/knowledge-graph";

type Props = {
  quote: Quote;
  showBadge?: boolean;
};

export function IdeaQuoteBlock({ quote, showBadge = false }: Props) {
  return (
    <blockquote className="border-l-2 border-[var(--accent)]/60 pl-6">
      <p className="font-serif text-[1.1rem] italic leading-8 text-[var(--primary)]">
        &ldquo;{quote.text}&rdquo;
      </p>
      <footer className="mt-3 flex flex-wrap items-center gap-3">
        {(quote.author || quote.work) && (
          <span className="text-sm text-[var(--secondary)]">
            {quote.author}
            {quote.work && (
              <span className="text-[var(--faint)]"> — <em>{quote.work}</em></span>
            )}
            {quote.location && (
              <span className="text-[var(--faint)]">, {quote.location}</span>
            )}
          </span>
        )}
        {showBadge && <EvidenceBadge status={quote.sourceStatus} />}
      </footer>
    </blockquote>
  );
}
