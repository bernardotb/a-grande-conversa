// Reads Atlas JSON files and partitions data for the web app.
// Run: node scripts/build-atlas-data.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const ATLAS_DIR = 'C:\\Users\\Usuario\\Downloads\\Skills Hub\\Syntopicon+102ideias\\Syntopicon + Six ideas book\\atlas-seis-ideias-2026-06-20\\data'
const OUT_DIR = 'public/data/atlas-six-ideas'

const EN_TO_PT = {
  Truth: 'verdade',
  Goodness: 'bondade',
  Beauty: 'beleza',
  Liberty: 'liberdade',
  Equality: 'igualdade',
  Justice: 'justica',
}

const IDEAS_EN = Object.keys(EN_TO_PT)

function readJson(file) {
  return JSON.parse(readFileSync(join(ATLAS_DIR, file), 'utf-8'))
}

function write(file, data) {
  writeFileSync(join(OUT_DIR, file), JSON.stringify(data), 'utf-8')
  console.log(`  wrote ${file} (${JSON.stringify(data).length} bytes)`)
}

mkdirSync(OUT_DIR, { recursive: true })

const allNodes = readJson('nodes.json')
const allEdges = readJson('edges.json')
const ideasMeta = readJson('ideas.json')
const sources = readJson('sources.json')

console.log(`Loaded: ${allNodes.length} nodes, ${allEdges.length} edges`)

const nodeById = new Map(allNodes.map(n => [n.id, n]))

// Per-idea files: nodes that belong to this idea directly,
// PLUS author/work/volume nodes referenced by those nodes
IDEAS_EN.forEach(idea => {
  const ptSlug = EN_TO_PT[idea]

  // Direct nodes with this idea
  const directNodes = allNodes.filter(n => n.idea === idea)
  const directIds = new Set(directNodes.map(n => n.id))

  // Collect author/work/volume IDs referenced by direct nodes
  const linkedIds = new Set()
  directNodes.forEach(n => {
    if (n.author_id) linkedIds.add(n.author_id)
    if (n.work_id) linkedIds.add(n.work_id)
    if (n.volume_id) linkedIds.add(n.volume_id)
    if (n.topic_id) linkedIds.add(n.topic_id)
  })

  // Edges between any of these nodes
  const allRelevantIds = new Set([...directIds, ...linkedIds])
  const relevantEdges = allEdges.filter(
    e => allRelevantIds.has(e.source) && allRelevantIds.has(e.target)
  )

  // Also include author/work/volume nodes that are referenced
  const linkedNodes = [...linkedIds]
    .map(id => nodeById.get(id))
    .filter(Boolean)
    .filter(n => !directIds.has(n.id))

  const nodes = [...directNodes, ...linkedNodes]

  // Find the idea metadata
  const ideaMeta = ideasMeta.find(i => i.slug === idea.toLowerCase() || i.idea_en === idea)

  // Counts
  const counts = {
    total_nodes: nodes.length,
    adler_aspects: nodes.filter(n => n.type === 'adler_aspect').length,
    syntopicon_topics: nodes.filter(n => n.type === 'syntopicon_topic').length,
    syntopicon_subtopics: nodes.filter(n => n.type === 'syntopicon_subtopic').length,
    references: nodes.filter(n => n.type === 'reference').length,
    authors: nodes.filter(n => n.type === 'author').length,
    works: nodes.filter(n => n.type === 'work').length,
    volumes: nodes.filter(n => n.type === 'volume').length,
    tensions: nodes.filter(n => n.type === 'tension').length,
  }

  write(`idea-${ptSlug}.json`, {
    idea_en: idea,
    idea_pt: ptSlug,
    sphere: ideaMeta?.sphere ?? (IDEAS_EN.indexOf(idea) < 3 ? 'judgment' : 'action'),
    meta: ideaMeta ?? null,
    counts,
    nodes,
    edges: relevantEdges,
  })
})

// Overview: one card per idea with counts + adler_aspects
const overviewIdeas = IDEAS_EN.map(idea => {
  const ptSlug = EN_TO_PT[idea]
  const ideaMeta = ideasMeta.find(i => i.idea_en === idea)
  const ideaNode = allNodes.find(n => n.type === 'idea' && n.idea === idea)
  const aspects = allNodes.filter(n => n.type === 'adler_aspect' && n.idea === idea)
  const topics = allNodes.filter(n => n.type === 'syntopicon_topic' && n.idea === idea)
  const refs = allNodes.filter(n => n.type === 'reference' && n.idea === idea)
  const tensions = allNodes.filter(n => n.type === 'tension' && n.idea === idea)

  return {
    id: ideaNode?.id ?? `idea-${idea.toLowerCase()}`,
    idea_en: idea,
    idea_pt: ptSlug,
    title_pt: {
      Truth: 'Verdade',
      Goodness: 'Bondade',
      Beauty: 'Beleza',
      Liberty: 'Liberdade',
      Equality: 'Igualdade',
      Justice: 'Justiça',
    }[idea],
    sphere: ideaMeta?.sphere ?? (IDEAS_EN.indexOf(idea) < 3 ? 'judgment' : 'action'),
    central_question: ideaMeta?.central_question ?? null,
    definition: ideaMeta?.definition ?? null,
    adler_chapters: ideaMeta?.adler_chapters ?? [],
    adler_status: ideaMeta?.adler_status ?? 'direct',
    syntopicon_status: ideaMeta?.syntopicon_status ?? 'direct',
    mapping_note: ideaMeta?.mapping_note ?? null,
    aspects: aspects.map(a => ({ id: a.id, title: a.title, summary: a.summary ?? null })),
    counts: {
      adler_aspects: aspects.length,
      syntopicon_topics: topics.length,
      references: refs.length,
      tensions: tensions.length,
    },
  }
})

// Global counts
const globalCounts = {
  nodes: allNodes.length,
  edges: allEdges.length,
  references: allNodes.filter(n => n.type === 'reference').length,
  topics: allNodes.filter(n => n.type === 'syntopicon_topic' || n.type === 'syntopicon_subtopic').length,
  authors: allNodes.filter(n => n.type === 'author').length,
  works: allNodes.filter(n => n.type === 'work').length,
  volumes: allNodes.filter(n => n.type === 'volume').length,
  passages: 0,
}

write('overview.json', { ideas: overviewIdeas, global_counts: globalCounts, sources })

// Search index: lightweight array for client-side fuzzy search
// Only searchable node types, no huge reference node count
const SEARCHABLE = new Set([
  'idea', 'adler_aspect', 'syntopicon_topic', 'syntopicon_subtopic',
  'reference', 'author', 'work', 'tension', 'question',
])
const searchIndex = allNodes
  .filter(n => SEARCHABLE.has(n.type))
  .map(n => ({
    id: n.id,
    title: n.title ?? n.label ?? '',
    type: n.type,
    idea: n.idea ?? null,
    sphere: n.sphere ?? null,
    summary: n.summary ? n.summary.slice(0, 120) : null,
    // For references: include raw coordinate for search
    raw: n.reference_original_raw ?? null,
    author: n.author ?? null,
    work: n.work ?? null,
  }))

write('search-index.json', searchIndex)

console.log('\nGlobal counts:')
console.log(JSON.stringify(globalCounts, null, 2))
console.log('\nDone.')
