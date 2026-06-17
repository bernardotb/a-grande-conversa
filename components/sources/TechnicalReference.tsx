'use client'

import { useState } from 'react'
import type { SyntopiconReference } from '@/lib/sources/types'

interface TechnicalReferenceProps {
  reference: SyntopiconReference
}

export function TechnicalReference({ reference }: TechnicalReferenceProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[var(--faint)] hover:text-[var(--accent)] transition-colors flex items-center gap-1"
        aria-expanded={expanded}
      >
        Fonte técnica
        <span aria-hidden>{expanded ? '▲' : '▼'}</span>
      </button>
      {expanded && (
        <p className="mt-1 font-mono text-[0.65rem] text-[var(--faint)] leading-5">
          {reference.technicalReference}
        </p>
      )}
    </div>
  )
}
