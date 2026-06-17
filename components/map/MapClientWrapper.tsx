'use client'

import dynamic from 'next/dynamic'

const IntellectualMap = dynamic(
  () =>
    import('./IntellectualMap').then((m) => ({ default: m.IntellectualMap })),
  { ssr: false },
)

export function MapClientWrapper() {
  return <IntellectualMap />
}
