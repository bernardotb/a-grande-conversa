import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Liberdade — A Grande Conversa',
  description:
    'Liberdade como ausência de obstáculos (Mill) ou como capacidade de agir segundo a razão (Kant)? A distinção entre liberdade e licença é uma das mais importantes na filosofia política.',
}

export default function LiberdadePage() {
  const idea = getSixIdea('liberdade')
  if (!idea) notFound()
  return <IdeaPageTemplate idea={idea} />
}
