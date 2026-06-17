import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Verdade — A Grande Conversa',
  description:
    'Quando dizemos que algo é verdadeiro, nos referimos a uma correspondência com a realidade — ou simplesmente ao que funciona para nós? Essa tensão divide filósofos há 2.500 anos.',
}

export default function VerdadePage() {
  const idea = getSixIdea('verdade')
  if (!idea) notFound()
  return <IdeaPageTemplate idea={idea} />
}
