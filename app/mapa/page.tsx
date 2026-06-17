import type { Metadata } from 'next'
import { MapClientWrapper } from '@/components/map/MapClientWrapper'

export const metadata: Metadata = {
  title: 'Mapa Intelectual — A Grande Conversa',
  description:
    'Navegue pelo mapa das Seis Grandes Ideias e explore as relações filosóficas que as conectam através de 2.500 anos de pensamento ocidental.',
}

export default function MapaPage() {
  return (
    <main style={{ height: 'calc(100vh - 5rem)' }} className="relative bg-library-950">
      <MapClientWrapper />
    </main>
  )
}
