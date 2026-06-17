import Link from 'next/link'

interface CTAItem {
  label: string
  href: string
}

interface IdeaCTAGroupProps {
  primary: CTAItem
  secondary?: CTAItem
  axisAccentClass: string
}

export function IdeaCTAGroup({ primary, secondary, axisAccentClass }: IdeaCTAGroupProps) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <Link
        href={primary.href}
        className={`border px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] transition ${axisAccentClass}`}
      >
        {primary.label} →
      </Link>
      {secondary && (
        <Link
          href={secondary.href}
          className="border border-[var(--border)] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)] transition hover:border-[var(--ink)] hover:text-[var(--ink)]"
        >
          {secondary.label} →
        </Link>
      )}
    </div>
  )
}
