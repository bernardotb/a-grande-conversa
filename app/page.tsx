import { HomeHero } from '@/components/home/HomeHero'
import { HomeConstellation } from '@/components/home/HomeConstellation'
import { HomeQuestions } from '@/components/home/HomeQuestions'

export default function HomePage() {
  return (
    <>
      {/* Camada 1 — Hero: headline + dois campos (Julgar/Agir) */}
      <HomeHero />

      {/* Camada 2 — Constelação interativa das seis ideias */}
      <HomeConstellation />

      {/* Camada 3 — Comece por uma pergunta + gateway 102 ideias */}
      <HomeQuestions />
    </>
  )
}
