import Link from 'next/link'
import type { IdeaTensionContent } from '@/lib/graph/idea-content'

const evidenceLabels: Record<IdeaTensionContent['evidenceStatus'], string> = {
  documental: 'Fonte documental',
  inferida: 'Inferência editorial',
  pedagogica: 'Reconstrução pedagógica',
  em_verificacao: 'Em curadoria',
}

interface TensionBlockProps {
  tension: IdeaTensionContent
  tensaoHref?: string
  axisAccent: string
}

export function TensionBlock({ tension, tensaoHref, axisAccent }: TensionBlockProps) {
  const hasA = tension.thesisA || tension.authorA
  const hasB = tension.thesisB || tension.authorB

  return (
    <div className="border border-[var(--border)] bg-white">
      {/* Header */}
      <div className="border-b border-[var(--border)] px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[var(--faint)]">
              Tensão
            </p>
            {tensaoHref ? (
              <Link
                href={tensaoHref}
                className={`mt-1 block font-serif text-lg leading-snug ${axisAccent} hover:underline`}
              >
                {tension.title}
              </Link>
            ) : (
              <h3 className="mt-1 font-serif text-lg leading-snug text-[var(--primary)]">
                {tension.title}
              </h3>
            )}
          </div>
          <span className="shrink-0 border border-[var(--border)] px-2 py-0.5 font-sans text-[0.6rem] text-[var(--faint)]">
            {evidenceLabels[tension.evidenceStatus]}
          </span>
        </div>
        {tension.question && (
          <p className="mt-3 font-serif text-sm italic leading-6 text-[var(--secondary)]">
            {tension.question}
          </p>
        )}
      </div>

      {/* Theses */}
      <div className="grid divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="px-6 py-5">
          {tension.authorA && (
            <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">
              {tension.authorA}
              {tension.workA && <span className="font-normal"> · {tension.workA}</span>}
            </p>
          )}
          {tension.thesisA ? (
            <p className="mt-2 font-serif text-sm italic leading-6 text-[var(--primary)]">
              &ldquo;{tension.thesisA}&rdquo;
            </p>
          ) : (
            <p className="mt-2 font-sans text-sm text-[var(--faint)]">
              {hasA ? 'Tese em curadoria' : 'Tese documental em curadoria'}
            </p>
          )}
        </div>
        <div className="px-6 py-5">
          {tension.authorB && (
            <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">
              {tension.authorB}
              {tension.workB && <span className="font-normal"> · {tension.workB}</span>}
            </p>
          )}
          {tension.thesisB ? (
            <p className="mt-2 font-serif text-sm italic leading-6 text-[var(--primary)]">
              &ldquo;{tension.thesisB}&rdquo;
            </p>
          ) : (
            <p className="mt-2 font-sans text-sm text-[var(--faint)]">
              {hasB ? 'Contratese em curadoria' : 'Contratese documental em curadoria'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
