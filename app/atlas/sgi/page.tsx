import type { Metadata } from 'next'
import { AtlasShellV2 } from '@/components/atlas/v2/AtlasShellV2'

export const metadata: Metadata = {
  title: 'Atlas das Seis Ideias',
  description:
    'Explore as seis grandes ideias do Syntopicon — Verdade, Bondade, Beleza, Liberdade, Igualdade e Justiça — através de 3.575 nós, 11.372 arestas e 2.461 referências documentais.',
}

export default function AtlasSGICanonicalPage() {
  return <AtlasShellV2 />
}
