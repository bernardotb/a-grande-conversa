import type { Metadata } from 'next'
import { getSixIdea } from '@/lib/seis-grandes-ideias'
import { IdeaPageTemplate } from '@/components/sgi/IdeaPageTemplate'
import { conflitosFilosoficos } from '@/lib/mapa-data'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Justiça',
  description:
    'O que transforma uma lei em lei justa? Explore como Platão, Aristóteles, Hobbes, Locke e outros pensaram a justiça ao longo de 2.500 anos.',
}

export default function JusticaPage() {
  const idea = getSixIdea('justica')
  if (!idea) notFound()
  const conflitos = conflitosFilosoficos.filter((c) => c.ideiaSlug === 'justica')
  return <IdeaPageTemplate idea={idea} conflitos={conflitos} />
}
