import type { AtlasGlobalCounts } from '@/lib/atlas-six-ideas/types'

interface AtlasStatusBarProps {
  counts: AtlasGlobalCounts | null
  visibleCount?: number
}

export function AtlasStatusBar({ counts, visibleCount }: AtlasStatusBarProps) {
  if (!counts) return null
  return (
    <div className="flex items-center gap-3 border-t border-antique-500/15 bg-library-950 px-4 py-2 font-sans text-[0.56rem] text-parchment-200/30">
      <span>{counts.nodes.toLocaleString('pt-BR')} nós</span>
      <span className="text-parchment-200/15">·</span>
      <span>{counts.edges.toLocaleString('pt-BR')} arestas</span>
      <span className="text-parchment-200/15">·</span>
      <span>{counts.topics.toLocaleString('pt-BR')} tópicos</span>
      <span className="text-parchment-200/15">·</span>
      <span>{counts.references.toLocaleString('pt-BR')} referências</span>
      <span className="text-parchment-200/15">·</span>
      <span>{counts.passages} passagens</span>
      {visibleCount !== undefined && (
        <>
          <span className="ml-auto text-parchment-200/15">·</span>
          <span>{visibleCount} nós visíveis</span>
        </>
      )}
    </div>
  )
}
