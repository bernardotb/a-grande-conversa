import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { AtlasIdeaSection } from '@/components/atlas/AtlasIdeaSection'
import { notFound } from 'next/navigation'
import overviewData from '@/data/atlas-six-ideas/overview.json'

export const metadata: Metadata = {
  title: 'Liberdade — A Grande Conversa',
  description:
    'Liberdade como ausência de obstáculos (Mill) ou como capacidade de agir segundo a razão (Kant)? A distinção entre liberdade e licença é uma das mais importantes na filosofia política.',
}

export default function LiberdadePage() {
  const idea = getSixIdea('liberdade')
  if (!idea) notFound()
  const atlasIdea = overviewData.ideas.find((i: { idea_en: string }) => i.idea_en === 'Liberty')
  return (
    <>
      <IdeaPageTemplate idea={idea} />
      {atlasIdea && <AtlasIdeaSection idea={atlasIdea as never} ptSlug="liberdade" />}
    </>
  )
}
