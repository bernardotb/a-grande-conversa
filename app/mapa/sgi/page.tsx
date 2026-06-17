import type { Metadata } from 'next'
import { MapaIntelectualSGI } from '@/components/sgi/MapaIntelectualSGI'

export const metadata: Metadata = {
  title: 'Mapa Intelectual — Seis Grandes Ideias',
  description:
    'Navegue pelo mapa interativo das Seis Grandes Ideias de Adler e explore os pensadores que moldaram cada conceito ao longo de 2.500 anos.',
}

export default function MapaSGIPage() {
  return (
    <main style={{ height: 'calc(100vh - 5rem)' }} className="relative">
      <MapaIntelectualSGI />
    </main>
  )
}
