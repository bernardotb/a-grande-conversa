import { HomeHero } from '@/components/home/HomeHero'
import { HomeConstellation } from '@/components/home/HomeConstellation'
import { HomeQuestions } from '@/components/home/HomeQuestions'
import { HomeAtlasCTA } from '@/components/home/HomeAtlasCTA'

export default function HomePage() {
  return (
    <>
      {/* Camada 1 — Hero: headline + dois campos (Julgar/Agir) */}
      <HomeHero />

      {/* Camada 2 — Constelação interativa das seis ideias */}
      <HomeConstellation />

      {/* Camada 3 — Comece por uma pergunta + gateway 102 ideias */}
      <HomeQuestions />

      {/* Camada 4 — CTA para o Atlas das Seis Ideias */}
      <HomeAtlasCTA />
    </>
  )
}
