import type { ConflictoFilosofico } from '@/lib/mapa-data'

interface ConflictCardProps {
  conflito: ConflictoFilosofico
}

export function ConflictCard({ conflito }: ConflictCardProps) {
  return (
    <div className="overflow-hidden border border-library-700/50 bg-library-900">
      <div className="border-b border-library-700/30 px-6 py-4">
        <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-antique-400/60">
          Debate filosófico
        </p>
        <h3 className="mt-1 font-serif text-lg font-light text-parchment-100">
          {conflito.title}
        </h3>
      </div>

      <div className="grid divide-y divide-library-700/30 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {([conflito.tese, conflito.antitese] as const).map((lado, i) => (
          <div key={i} className="p-6">
            <div className="mb-4">
              <p className="font-sans text-xs font-semibold text-antique-400">
                {lado.filosofo}
              </p>
              <p className="mt-0.5 font-sans text-[0.65rem] text-parchment-200/45">
                {lado.dates} ·{' '}
                <span className="italic">{lado.obra}</span>
              </p>
            </div>

            <p className="mb-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-parchment-200/40">
              {lado.posicao}
            </p>

            <blockquote className="border-l-2 border-antique-500/40 pl-4 font-serif text-sm italic leading-7 text-parchment-200/80">
              &ldquo;{lado.passagem}&rdquo;
            </blockquote>

            <p className="mt-4 font-sans text-[0.58rem] text-parchment-200/25">
              {lado.referencia}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
