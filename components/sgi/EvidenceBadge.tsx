import type { EvidenceStatus, Confidence } from '@/lib/seis-grandes-ideias'

const statusConfig: Record<EvidenceStatus, { label: string; className: string }> = {
  verified:    { label: 'Confirmado', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  partial:     { label: 'Parcial',    className: 'bg-amber-50 text-amber-700 border-amber-200' },
  empty_state: { label: 'Pendente',   className: 'bg-gray-100 text-gray-500 border-gray-200' },
}

const confidenceLabel: Record<Confidence, string> = {
  high:   'Alta',
  medium: 'Média',
  low:    'Baixa',
}

interface EvidenceBadgeProps {
  status: EvidenceStatus
  confidence?: Confidence
  className?: string
}

export function EvidenceBadge({ status, confidence, className = '' }: EvidenceBadgeProps) {
  const { label, className: statusCls } = statusConfig[status]
  return (
    <span
      className={`inline-flex items-center gap-1 border px-1.5 py-0.5 font-sans text-[0.6rem] font-semibold ${statusCls} ${className}`}
      title={confidence ? `Confiança: ${confidenceLabel[confidence]}` : undefined}
    >
      {label}
      {confidence && (
        <span className="opacity-50">· {confidenceLabel[confidence]}</span>
      )}
    </span>
  )
}
