import Link from "next/link";
import type { ReadingPlan } from "@/lib/types";

export function ReadingPlanCard({ plan }: { plan: ReadingPlan }) {
  return (
    <article className="paper-panel relative overflow-hidden border-l-4 border-l-library-800 p-7 dark:border-l-antique-500">
      <p className="eyebrow">
        {plan.level} · {plan.duration}
      </p>
      <h3 className="mt-3 font-display text-3xl">{plan.title}</h3>
      <p className="mt-2 font-display text-lg italic text-muted">{plan.subtitle}</p>
      <p className="mt-5 text-sm leading-6 text-muted">{plan.description}</p>
      <Link
        href={`/planos-de-leitura/${plan.slug}`}
        className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-wine-700 dark:text-antique-400"
      >
        Abrir plano →
      </Link>
    </article>
  );
}
