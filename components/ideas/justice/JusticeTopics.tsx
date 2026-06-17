import type { JusticeTopic } from '@/lib/sources/types'

interface JusticeTopicsProps {
  topics: JusticeTopic[]
}

export function JusticeTopics({ topics }: JusticeTopicsProps) {
  return (
    <section>
      <span className="section-eyebrow">Tópicos</span>
      <h2 className="mt-2 font-serif text-2xl text-[var(--primary)]">
        Os grandes problemas da Justiça
      </h2>
      <p className="mt-2 font-sans text-sm text-[var(--secondary)]">
        {topics.length} tópicos · do problema mais antigo às disputas contemporâneas
      </p>

      <div className="mt-6 divide-y divide-[var(--border)] border border-[var(--border)]">
        {topics.map((topic) => (
          <div key={topic.id} className="bg-white px-6 py-5">
            <h3 className="font-serif text-base font-medium text-[var(--primary)]">
              {topic.title}
            </h3>
            <p className="mt-1 font-serif text-sm italic text-[var(--secondary)]">
              {topic.question}
            </p>
            <p className="mt-2 font-sans text-sm leading-6 text-[var(--secondary)]">
              {topic.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {topic.volumeIds.map((v) => (
                <span key={v} className="stat-pill">
                  Vol. {v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
