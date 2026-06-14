import type { EvidenceStatus } from "@/lib/knowledge-graph";

const labels: Record<EvidenceStatus, string> = {
  syntopicon_explicit: "Syntopicon",
  syntopicon_reference: "Referência Syntopicon",
  primary_text_passage: "Texto primário",
  shared_author_or_work: "Autor/obra em comum",
  prototype_editorial: "Editorial (protótipo)",
  editorial_inference: "Inferência editorial",
  to_verify: "A verificar",
  pending: "Pendente",
};

const colors: Record<EvidenceStatus, string> = {
  syntopicon_explicit: "bg-[var(--antique-500)] text-[var(--surface)]",
  syntopicon_reference: "bg-[var(--antique-400)] text-[var(--surface)]",
  primary_text_passage: "bg-[var(--library-800)] text-[var(--surface)]",
  shared_author_or_work: "bg-[var(--library-600)] text-[var(--surface)]",
  prototype_editorial: "bg-[var(--wine-700)] text-[var(--surface)]",
  editorial_inference: "border border-[var(--border)] text-[var(--secondary)]",
  to_verify: "border border-[var(--accent)] text-[var(--accent)]",
  pending: "border border-[var(--border)] text-[var(--faint)]",
};

type Props = {
  status: EvidenceStatus;
  className?: string;
};

export function EvidenceBadge({ status, className = "" }: Props) {
  return (
    <span
      className={`inline-block rounded-none px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${colors[status]} ${className}`}
    >
      {labels[status]}
    </span>
  );
}
