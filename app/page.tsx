import { HomeHero } from '@/components/home/HomeHero'
import { HomeConstellation } from '@/components/home/HomeConstellation'
import { HomeQuestions } from '@/components/home/HomeQuestions'

export default function HomePage() {
  return (
    <>
      {/* O Atlas é a porta de entrada principal. */}
      <HomeConstellation />

      {/* Contexto editorial e percursos permanecem abaixo do Atlas. */}
      <HomeHero />
      <HomeQuestions />
    </>
  )
}
