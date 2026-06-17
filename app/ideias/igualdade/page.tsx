import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Igualdade — A Grande Conversa',
  description:
    'Jefferson declarou que "todos os homens são criados iguais", mas Aristóteles defendia que a justiça trata iguais igualmente e desiguais desigualmente. Como conciliar os dois?',
}

export default function IgualdadePage() {
  const idea = getSixIdea('igualdade')
  if (!idea) notFound()
  return <IdeaPageTemplate idea={idea} />
}
