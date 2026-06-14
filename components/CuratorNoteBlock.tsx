import { EvidenceBadge } from "@/components/EvidenceBadge";
import type { CuratorNote } from "@/lib/knowledge-graph";

type Props = {
  note: CuratorNote;
  showBadge?: boolean;
};

export function CuratorNoteBlock({ note, showBadge = false }: Props) {
  return (
    <div className="border-l-2 border-[var(--accent)]/20 pl-4">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--faint)]">
        Nota do curador
      </p>
      <p className="mt-1 text-sm leading-6 text-[var(--secondary)]">{note.text}</p>
      {showBadge && (
        <div className="mt-2">
          <EvidenceBadge status={note.sourceStatus} />
        </div>
      )}
    </div>
  );
}
