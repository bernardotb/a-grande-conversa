import type { Metadata } from 'next'
import Link from 'next/link'
import { getJusticeReferences, justiceTopics } from '@/lib/sources'
import { ReferencesTable } from '@/components/sources/ReferencesTable'

export const metadata: Metadata = {
  title: 'Referências Documentais — Justiça',
  description:
    'Índice documental rastreável das fontes primárias para o debate filosófico sobre Justiça. Referências dos Great Books of the Western World, organizadas por tópico, autor, volume e status de verificação.',
}

export default async function JusticaReferenciasPage({
  searchParams,
}: {
  searchParams: Promise<{ topico?: string }>
}) {
  const { topico } = await searchParams
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
            <span className="font-sans text-xs text-[var(--primary)]">Referências</span>
          </div>
          <span className="section-eyebrow mt-4 block">Índice documental</span>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-[var(--primary)] sm:text-5xl">
            Referências da Justiça
          </h1>
          <p className="mt-4 max-w-prose font-serif text-lg leading-7 text-[var(--secondary)]">
            Fontes primárias rastreáveis dos{' '}
            <em>Great Books of the Western World</em>. Cada referência aponta para o volume exato,
            a obra e a função no debate filosófico sobre Justiça.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="stat-pill">{references.length} referências</span>
            <span className="stat-pill">{justiceTopics.length} tópicos</span>
            <span className="badge-domain">em verificação</span>
          </div>
        </div>
      </header>

      {/* Nota de verificação */}
      <div className="border-b border-amber-200 bg-amber-50 px-4 py-3">
        <p className="gc-page font-sans text-xs leading-5 text-amber-800">
          <strong>Nota de curadoria:</strong> as referências marcadas como{' '}
          <em>em verificação</em> foram estruturadas com base no Syntopicon mas ainda não tiveram
          as localizações de página conferidas contra o PDF original.
        </p>
      </div>

      {/* Tabela filtrável */}
      <div className="gc-page px-4 py-10">
        <ReferencesTable
          references={references}
          topics={justiceTopics}
          initialTopicFilter={topico}
        />
      </div>

      {/* Navegação */}
      <div className="border-t border-[var(--border)] py-8">
        <div className="gc-page px-4 flex flex-wrap gap-6 text-sm">
          <Link href="/ideias/justica" className="text-[var(--accent)] hover:underline">
            ← Justiça
          </Link>
          <Link href="/ideias/justica/volumes" className="text-[var(--accent)] hover:underline">
            Ver volumes →
          </Link>
          <Link href="/volumes" className="text-[var(--accent)] hover:underline">
            Todos os volumes →
          </Link>
        </div>
      </div>
    </main>
  )
}
