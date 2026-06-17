import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Beleza — A Grande Conversa',
  description:
    'Quando dizemos que algo é belo, descrevemos o objeto ou revelamos algo sobre nós mesmos? A resposta determina se o gosto pode ser educado ou apenas respeitado.',
}

export default function BelezaPage() {
  const idea = getSixIdea('beleza')
  if (!idea) notFound()
  return <IdeaPageTemplate idea={idea} />
}
