import Link from 'next/link'
import type { JusticeTopic } from '@/lib/sources/types'

interface JusticeTopicsProps {
  topics: JusticeTopic[]
}

export function JusticeTopics({ topics }: JusticeTopicsProps) {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="section-eyebrow">Tópicos do Syntopicon</span>
          <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
            Os grandes problemas da Justiça
          </h2>
          <p className="mt-2 font-sans text-sm text-[var(--secondary)]">
            {topics.length} tópicos · do problema mais antigo às disputas contemporâneas
          </p>
        </div>
        <Link
          href="/ideias/justica/referencias"
          className="shrink-0 font-sans text-xs font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
        >
          Ver referências →
        </Link>
      </div>

      <div className="mt-6 divide-y divide-[var(--border)] border border-[var(--border)]">
        {topics.map((topic) => (
          <div key={topic.id} className="bg-white px-6 py-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-base font-medium text-[var(--primary)]">
                  {topic.title}
                </h3>
                <p className="mt-1 font-serif text-sm italic text-[var(--secondary)]">
                  {topic.question}
                </p>
                <p className="mt-2 font-sans text-sm leading-6 text-[var(--secondary)]">
                  {topic.summary}
                </p>
              </div>
              {topic.referenceIds.length > 0 && (
                <span className="stat-pill shrink-0">
                  {topic.referenceIds.length} ref.
                </span>
              )}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {topic.volumeIds.map((v) => (
                <span key={v} className="stat-pill">
                  Vol. {v}
                </span>
              ))}
              <Link
                href={`/ideias/justica/referencias?topico=${topic.id}`}
                className="ml-auto font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline"
              >
                Ver referências →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
