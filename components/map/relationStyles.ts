import type { EdgeRelation } from '@/lib/graph/types'

export type RelationStyle = {
  color: string
  dashArray: string
  strokeWidth: number
  verb: string
}

const STYLES: Record<EdgeRelation, RelationStyle> = {
  fundamenta:      { color: '#7c5cd4', dashArray: '',        strokeWidth: 2,   verb: 'fundamenta' },
  limita:          { color: '#e07340', dashArray: '6 3',     strokeWidth: 1.5, verb: 'limita' },
  tensiona:        { color: '#c06060', dashArray: '4 4',     strokeWidth: 1.5, verb: 'tensiona' },
  opoe_se_a:       { color: '#c03030', dashArray: '2 4',     strokeWidth: 1.5, verb: 'opõe-se a' },
  desenvolve:      { color: '#4a9a6e', dashArray: '',        strokeWidth: 1.5, verb: 'desenvolve' },
  aparece_em:      { color: '#8a8a7a', dashArray: '2 3',     strokeWidth: 1,   verb: 'aparece em' },
  e_discutido_por: { color: '#b9954f', dashArray: '3 3',     strokeWidth: 1,   verb: 'é discutido por' },
  e_provado_por:   { color: '#4a9a6e', dashArray: '',        strokeWidth: 1.5, verb: 'é provado por' },
  aplica_se_a:     { color: '#8a7ab0', dashArray: '4 2',     strokeWidth: 1,   verb: 'aplica-se a' },
  depende_de:      { color: '#a09070', dashArray: '5 3',     strokeWidth: 1.5, verb: 'depende de' },
  corrige:         { color: '#c9a83f', dashArray: '3 2',     strokeWidth: 1.5, verb: 'corrige' },
  contrasta_com:   { color: '#9080a0', dashArray: '6 2 2',   strokeWidth: 1.5, verb: 'contrasta com' },
  expande:         { color: '#6490c0', dashArray: '',        strokeWidth: 2,   verb: 'expande' },
}

export function getRelationStyle(relation: EdgeRelation): RelationStyle {
  return STYLES[relation]
}
