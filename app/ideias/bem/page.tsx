import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Bem — A Grande Conversa',
  description:
    'Existem coisas que são boas por natureza ou o "bem" é definido por cada um? A diferença entre o que desejamos e o que genuinamente nos faz bem está no centro desta ideia.',
}

export default function BemPage() {
  const idea = getSixIdea('bem')
  if (!idea) notFound()
  return <IdeaPageTemplate idea={idea} />
}
