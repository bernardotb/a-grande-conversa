import type { Metadata } from 'next'
import { AtlasShellV3 } from '@/components/atlas/v3/AtlasShellV3'

export const metadata: Metadata = {
  title: 'Atlas das Seis Ideias',
  description:
    'Explore as seis grandes ideias do Syntopicon — Verdade, Bondade, Beleza, Liberdade, Igualdade e Justiça — através de 3.575 nós, 11.372 arestas e 2.461 referências documentais.',
}

export default function AtlasSGIPage() {
  return <AtlasShellV3 />
}
