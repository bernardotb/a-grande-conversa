export function QuoteBlock({
  children,
  cite
}: {
  children: React.ReactNode;
  cite?: string;
}) {
  return (
    <figure className="my-10 border-y border-antique-500/40 py-8 text-center">
      <blockquote className="font-display text-2xl italic leading-9 sm:text-3xl">
        “{children}”
      </blockquote>
      {cite && (
        <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted">
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
