import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { AtlasIdeaSection } from '@/components/atlas/AtlasIdeaSection'
import { notFound } from 'next/navigation'
import overviewData from '@/data/atlas-six-ideas/overview.json'

export const metadata: Metadata = {
  title: 'Igualdade — A Grande Conversa',
  description:
    'Jefferson declarou que "todos os homens são criados iguais", mas Aristóteles defendia que a justiça trata iguais igualmente e desiguais desigualmente. Como conciliar os dois?',
}

export default function IgualdadePage() {
  const idea = getSixIdea('igualdade')
  if (!idea) notFound()
  const atlasIdea = overviewData.ideas.find((i: { idea_en: string }) => i.idea_en === 'Equality')
  return (
    <>
      <IdeaPageTemplate idea={idea} />
      {atlasIdea && <AtlasIdeaSection idea={atlasIdea as never} ptSlug="igualdade" />}
    </>
  )
}
