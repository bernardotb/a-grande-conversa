import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { AtlasIdeaSection } from '@/components/atlas/AtlasIdeaSection'
import { notFound } from 'next/navigation'
import overviewData from '@/data/atlas-six-ideas/overview.json'

export const metadata: Metadata = {
  title: 'Verdade — A Grande Conversa',
  description:
    'Quando dizemos que algo é verdadeiro, nos referimos a uma correspondência com a realidade — ou simplesmente ao que funciona para nós? Essa tensão divide filósofos há 2.500 anos.',
}

export default function VerdadePage() {
  const idea = getSixIdea('verdade')
  if (!idea) notFound()
  const atlasIdea = overviewData.ideas.find((i: { idea_en: string }) => i.idea_en === 'Truth')
  return (
    <>
      <IdeaPageTemplate idea={idea} />
      {atlasIdea && <AtlasIdeaSection idea={atlasIdea as never} ptSlug="verdade" />}
    </>
  )
}
