import type { Metadata } from 'next'
import { AtlasShell } from '@/components/atlas/AtlasShell'

export const metadata: Metadata = {
  title: 'Atlas das Seis Ideias',
  description:
    'Ecossistema documental de Adler, Syntopicon e Great Books. 3.575 nós, 11.372 arestas, 2.461 referências e 159 tópicos navegáveis.',
}

export default function AtlasSGIPage() {
  return <AtlasShell />
}
