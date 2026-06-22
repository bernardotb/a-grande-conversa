import type { AtlasNode, AtlasOverviewIdea } from './types'
import type { SynthesisGroup } from './v3-model'

export const V3_COLORS = {
  background: '#071a15',
  synthesis: '#c79a43',
  syntopicon: '#8b78c7',
  judgment: '#8e79d6',
  action: '#4ca86d',
  evidence: '#b66743',
  muted: '#8c978f',
  ivory: '#f1e8d2',
}

export const SYNTHESIS_GROUP_META: Record<SynthesisGroup, { title: string; short: string }> = {
  aspects: { title: 'Aspectos conceituais', short: 'aspectos' },
  chapters: { title: 'Capítulos centrais', short: 'capítulos' },
  questions: { title: 'Perguntas', short: 'perguntas' },
  tensions: { title: 'Tensões filosóficas', short: 'tensões' },
}

const JUSTICE_TOPICS: Record<string, string> = {
  '1': 'Concepções diversas de Justiça',
  '2': 'Preceitos da Justiça',
  '3': 'Justiça, amor e amizade',
  '4': 'Justiça e conveniência',
  '5': 'Justiça e igualdade',
  '6': 'Justiça e liberdade',
  '7': 'Justiça doméstica',
  '8': 'Justiça econômica',
  '9': 'Justiça política',
  '10': 'Justiça e lei',
  '11': 'Justiça divina',
}

const JUSTICE_SUBTOPICS: Record<string, string> = {
  '1a': 'Interesse do mais forte ou vontade do soberano',
  '1b': 'Harmonia ou ordem correta da alma',
  '1c': 'Virtude em relação aos outros e à comunidade',
  '1d': 'Virtude total e virtude particular',
  '1e': 'Vontade, dever e bem comum',
  '1f': 'Costume ou sentimento moral baseado na utilidade',
  '6a': 'Direitos naturais, lei natural e Justiça natural',
  '6b': 'Direitos naturais e positivos',
  '6c': 'Direitos inalienáveis, tirania e despotismo',
  '6d': 'Liberdade e licença',
  '6e': 'Direitos naturais e liberdade civil',
  '8a': 'Propriedade e distribuição',
  '8b': 'Salários e preços justos',
  '8c': 'Organização da produção',
  '8c(1)': 'Exploração econômica',
  '8c(2)': 'Lucro e incremento não merecido',
  '8d': 'Dinheiro, usura e juros',
  '9a': 'Natural e convencional na Justiça política',
  '9b': 'Princípio moral da organização política',
  '9c': 'Formas de governo e constituições',
  '9d': 'Governantes e governados',
  '9e': 'Honras, cargos, posições e sufrágio',
  '9f': 'Direito, força, guerra e paz',
  '9g': 'Clemência, anistia, asilo e perdão',
  '10a': 'Medida da Justiça nas leis do Estado',
  '10b': 'Leis injustas e dever de obediência',
  '10c': 'Punição, retribuição e vingança',
  '10d': 'Equidade na aplicação da lei humana',
  '11a': 'Governo divino, Justiça e misericórdia',
  '11b': 'Dívida humana, piedade e culto',
}

const JUSTICE_ASPECTS: Record<string, string> = {
  justice_as_sovereign: 'Soberania da Justiça',
  justice_as_due: 'Dar a cada um o que lhe é devido',
  justice_and_rights: 'Direitos naturais e positivos',
  justice_and_duties: 'Deveres e obrigações',
  justice_and_equality: 'Igualdade e desigualdade',
  justice_and_liberty: 'Liberdade e licença',
  justice_and_law: 'Justiça e lei',
  justice_and_common_good: 'Justiça e bem comum',
}

export const RELATION_CONTEXT_BY_TOPIC: Record<string, string[]> = {
  '1': ['Verdade', 'Bondade', 'Virtude', 'Governo', 'Lei'],
  '5': ['Igualdade', 'Liberdade', 'Bondade', 'Direitos', 'Distribuição'],
  '6': ['Liberdade', 'Direitos', 'Lei', 'Tirania', 'Igualdade'],
  '7': ['Família', 'Dever', 'Direitos', 'Amor', 'Governo'],
  '8': ['Riqueza', 'Trabalho', 'Escravidão', 'Igualdade', 'Liberdade', 'Propriedade', 'Governo'],
  '9': ['Governo', 'Constituição', 'Democracia', 'Tirania', 'Guerra e Paz', 'Lei'],
  '10': ['Lei', 'Punição', 'Dever', 'Governo', 'Direitos', 'Equidade'],
  '11': ['Deus', 'Punição', 'Pecado', 'Bondade', 'Misericórdia'],
}

export const JUSTICE_CHAPTERS = [
  '18 — The Sovereignty of Justice',
  '23 — The Inequalities That Justice Also Requires',
  '24 — The Domain of Justice',
  '25 — The Justice and the Authority of Law',
  '28 — Concerning Liberty, Equality, and Justice',
]

export const JUSTICE_QUESTIONS = [
  'O que devemos uns aos outros e como distribuir direitos, deveres, liberdades, bens e punições?',
  'Por que Justiça não pode ser reduzida à lei positiva?',
  'Qual é a diferença entre igualdade em tipo e em grau?',
  'Quando uma desigualdade de recompensa é justa?',
  'Por que a suficiência precede a recompensa?',
  'Como distinguir uma limitação justa de uma coerção injusta?',
  'Como as justiças comutativa, distributiva e contributiva se complementam?',
]

export function getV3NodeTitle(node: AtlasNode, ideaEn?: string | null): string {
  if (ideaEn === 'Justice' && node.original_number) {
    if (node.type === 'syntopicon_topic') return JUSTICE_TOPICS[node.original_number] ?? node.title ?? node.id
    if (node.type === 'syntopicon_subtopic') return JUSTICE_SUBTOPICS[node.original_number] ?? node.title ?? node.id
  }
  if (ideaEn === 'Justice' && node.type === 'adler_aspect') {
    const suffix = node.id.split('adler-justice-')[1]
    return JUSTICE_ASPECTS[suffix] ?? node.summary ?? node.title ?? node.id
  }
  return node.summary ?? node.title ?? node.label ?? node.id
}

export function getSynthesisCounts(meta: AtlasOverviewIdea, nodes: AtlasNode[]) {
  return {
    aspects: nodes.filter(n => n.type === 'adler_aspect').length || meta.counts.adler_aspects,
    chapters: meta.idea_en === 'Justice' ? JUSTICE_CHAPTERS.length : meta.adler_chapters.length,
    questions: meta.idea_en === 'Justice' ? JUSTICE_QUESTIONS.length : Math.max(1, nodes.filter(n => n.type === 'question').length),
    tensions: nodes.filter(n => n.type === 'tension').length || meta.counts.tensions,
  }
}
