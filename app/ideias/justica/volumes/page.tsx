import type { Metadata } from 'next'
import Link from 'next/link'
import { getJusticeVolumes, getJusticeReferences } from '@/lib/sources'
import { JusticeVolumes } from '@/components/ideas/justice/JusticeVolumes'

export const metadata: Metadata = {
  title: 'Volumes — Justiça',
  description:
    'Percurso cronológico da ideia de Justiça nos Great Books of the Western World: da tragédia grega ao marxismo, passando por Platão, Aristóteles, Agostinho, Tomás de Aquino, Hobbes, Locke, Hume, Kant e Mill.',
}

export default function JusticaVolumesPage() {
  const volumes = getJusticeVolumes()
  const references = getJusticeReferences()

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero */}
      <header className="border-b border-[var(--border)] bg-[var(--cream)] pb-10 pt-12">
        <div className="gc-page px-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/ideias/justica"
              className="font-sans text-xs text-[var(--faint)] hover:text-[var(--accent)] transition-colors"
            >
              Justiça
            </Link>
            <span className="text-[var(--border)]">/</span>
            <span className="font-sans text-xs text-[var(--primary)]">Volumes</span>
          </div>
          <span className="section-eyebrow mt-4 block">Percurso documental</span>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
            A Justiça nos Great Books
          </h1>
          <p className="mt-4 max-w-prose font-serif text-lg leading-7 text-[var(--secondary)]">
            Da tragédia grega ao marxismo, a ideia de Justiça atravessa 2.500 anos de pensamento
            ocidental. Cada volume acrescenta uma camada ao debate — e às vezes o vira de ponta
            a cabeça.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="stat-pill">{volumes.length} volumes</span>
            <span className="stat-pill">{references.length} referências</span>
            <span className="badge-domain">Séc. V a.C. — Séc. XIX</span>
          </div>
        </div>
      </header>

      {/* Linha do tempo dos volumes */}
      <div className="gc-page px-4 py-12">
        <JusticeVolumes volumes={volumes} references={references} />
      </div>

      {/* Navegação */}
      <div className="border-t border-[var(--border)] py-8">
        <div className="gc-page px-4 flex flex-wrap gap-6 text-sm">
          <Link href="/ideias/justica" className="text-[var(--accent)] hover:underline">
            ← Justiça
          </Link>
          <Link href="/ideias/justica/referencias" className="text-[var(--accent)] hover:underline">
            Referências documentais →
          </Link>
          <Link href="/volumes" className="text-[var(--accent)] hover:underline">
            Todos os volumes →
          </Link>
        </div>
      </div>
    </main>
  )
}
