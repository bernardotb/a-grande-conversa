import Link from 'next/link'
import type { SixIdea } from '@/lib/seis-grandes-ideias'

const axisStyles = {
  julgar: {
    topBorder: 'border-t-violet-700',
    iconColor: 'text-violet-300/30',
    link: 'hover:text-violet-700 focus-visible:text-violet-700',
  },
  agir: {
    topBorder: 'border-t-green-700',
    iconColor: 'text-green-300/30',
    link: 'hover:text-green-700 focus-visible:text-green-700',
  },
}

interface IdeaCardSGIProps {
  idea: SixIdea
}

export function IdeaCardSGI({ idea }: IdeaCardSGIProps) {
  const styles = axisStyles[idea.axis]

  return (
    <article
      className={`group relative flex min-h-72 flex-col border border-[var(--border)] border-t-4 ${styles.topBorder} bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-card`}
    >
      <span
        className={`mb-4 text-3xl leading-none ${styles.iconColor} transition group-hover:opacity-60`}
        aria-hidden="true"
      >
        {idea.icon}
      </span>

      <h3 className="font-serif text-[1.35rem] leading-tight text-[var(--primary)]">
        {idea.publicName}
      </h3>

      <p className="mt-3 font-serif text-[0.95rem] italic leading-7 text-[var(--secondary)]">
        "{idea.humanQuestion}"
      </p>

      <p className="mt-4 line-clamp-3 text-sm leading-6 text-[var(--secondary)]">
        {idea.teaser}
      </p>

      <div className="mt-auto pt-6">
        <Link
          href={`/ideias/${idea.slug}`}
          className={`font-sans text-sm font-semibold text-[var(--primary)] transition ${styles.link}`}
          aria-label={`Explorar a ideia de ${idea.publicName}`}
        >
          Explorar esta ideia{' '}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
