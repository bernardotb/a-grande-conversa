'use client'

import dynamic from 'next/dynamic'

const FlowMap = dynamic(
  () => import('./FlowMap').then(m => ({ default: m.FlowMap })),
  { ssr: false },
)

export function MapClientWrapper() {
  return <FlowMap />
}
