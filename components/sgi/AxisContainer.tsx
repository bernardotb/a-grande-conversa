import type { Axis, SixIdea } from '@/lib/seis-grandes-ideias'
import { getAxisLabel, getAxisDescription } from '@/lib/seis-grandes-ideias'
import { IdeaCardSGI } from '@/components/sgi/IdeaCardSGI'

const axisStyles: Record<Axis, { wrapper: string; label: string }> = {
  julgar: {
    wrapper: 'bg-violet-50/50 border border-violet-100',
    label: 'text-violet-700',
  },
  agir: {
    wrapper: 'bg-green-50/50 border border-green-100',
    label: 'text-green-700',
  },
}

interface AxisContainerProps {
  axis: Axis
  ideas: SixIdea[]
}

export function AxisContainer({ axis, ideas }: AxisContainerProps) {
  const styles = axisStyles[axis]

  return (
    <div className={`rounded-sm p-6 sm:p-8 ${styles.wrapper}`}>
      <div className="mb-6">
        <p
          className={`font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${styles.label}`}
        >
          {getAxisLabel(axis)}
        </p>
        <p className="mt-1.5 text-sm leading-6 text-[var(--secondary)]">
          {getAxisDescription(axis)}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <IdeaCardSGI key={idea.slug} idea={idea} />
        ))}
      </div>
    </div>
  )
}
