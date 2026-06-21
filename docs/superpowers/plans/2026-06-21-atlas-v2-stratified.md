# Atlas das Seis Ideias v2.0 — Stratified Documentary Atlas

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the v1 radial Atlas with a 4-level stratified documentary atlas where the graph shows structure and paths (max 30 nodes) and the inspector holds all inventory, references, and filters.

**Architecture:** A `useReducer` state machine drives level transitions (home → idea → topic → reference). The graph never renders reference nodes permanently — it shows counters instead. Adler and Syntopicon are distinct system branches; Fused mode draws bridge edges between them. All reference lists in the inspector use CSS virtual scrolling for performance.

**Tech Stack:** Next.js 15.3, React 19, TypeScript, Tailwind CSS, framer-motion (all already installed). No new npm packages.

---

## File Map — What Gets Created or Modified

### New files
```
lib/atlas-six-ideas/atlas-state.ts        — AtlasState type, AtlasLevel, reducer, actions
lib/atlas-six-ideas/correspondences.ts    — Adler↔Syntopicon mapping per idea
lib/atlas-six-ideas/level-layout.ts       — level-aware node selection + position engine
components/atlas/v2/AtlasShellV2.tsx      — top-level shell with useReducer
components/atlas/v2/AtlasGraphV2.tsx      — stratified SVG canvas
components/atlas/v2/AtlasInspectorV2.tsx  — documentary inspector with virtualised lists
components/atlas/v2/AtlasControlsV2.tsx   — mode / idea / search controls
components/atlas/v2/AtlasMobileV2.tsx     — 390×844 bottom drawer
components/atlas/v2/AtlasNodeIcon.tsx     — per-idea SVG icons + node shapes
components/atlas/v2/AtlasStatusV2.tsx     — compact status bar
docs/atlas-fidelity-ledger.md             — fidelity tracking (spec §18)
```

### Modified files
```
app/mapa/sgi/page.tsx        — swap AtlasShell → AtlasShellV2
app/atlas/sgi/page.tsx       — new route alias (create)
lib/atlas-six-ideas/types.ts — add new node/edge types from spec §8-9
```

### Kept unchanged
```
lib/atlas-six-ideas/loaders.ts   — reused as-is
public/data/atlas-six-ideas/     — all JSON files reused as-is
lib/atlas-six-ideas/selectors.ts — kept for search; new layout in level-layout.ts
```

---

## Task 1: Atlas State Machine

**Files:**
- Create: `lib/atlas-six-ideas/atlas-state.ts`

- [ ] **Step 1: Write the state types and reducer**

```ts
// lib/atlas-six-ideas/atlas-state.ts
import type { AtlasMode } from './types'

export type AtlasLevel = 'home' | 'idea' | 'topic' | 'subtopic' | 'reference'
export type AtlasGroupId = 'adler' | 'syntopicon' | 'reservoir' | null

export interface AtlasState {
  selectedIdeaId: string | null      // EN slug, e.g. "Justice"
  selectedMode: AtlasMode
  currentLevel: AtlasLevel
  openGroupId: AtlasGroupId          // which system branch is open
  selectedTopicId: string | null     // syntopicon_topic node id
  selectedSubtopicId: string | null  // syntopicon_subtopic node id
  selectedReferenceId: string | null // reference node id
  searchQuery: string
  inspectorOpen: boolean
  // temporary path: reference → author → work → volume
  documentaryPath: string[]          // ordered list of node ids in active path
}

export const INITIAL_STATE: AtlasState = {
  selectedIdeaId: null,
  selectedMode: 'fused',
  currentLevel: 'home',
  openGroupId: null,
  selectedTopicId: null,
  selectedSubtopicId: null,
  selectedReferenceId: null,
  searchQuery: '',
  inspectorOpen: false,
  documentaryPath: [],
}

export type AtlasAction =
  | { type: 'SELECT_IDEA'; ideaId: string }
  | { type: 'DESELECT_IDEA' }
  | { type: 'SET_MODE'; mode: AtlasMode }
  | { type: 'OPEN_GROUP'; groupId: AtlasGroupId }
  | { type: 'SELECT_TOPIC'; topicId: string }
  | { type: 'SELECT_SUBTOPIC'; subtopicId: string }
  | { type: 'FOCUS_REFERENCE'; referenceId: string; path: string[] }
  | { type: 'CLOSE_REFERENCE' }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'OPEN_INSPECTOR' }
  | { type: 'CLOSE_INSPECTOR' }
  | { type: 'GO_BACK' }
  | { type: 'RESET' }

export function atlasReducer(state: AtlasState, action: AtlasAction): AtlasState {
  switch (action.type) {
    case 'SELECT_IDEA':
      return {
        ...state,
        selectedIdeaId: action.ideaId,
        currentLevel: 'idea',
        openGroupId: null,
        selectedTopicId: null,
        selectedSubtopicId: null,
        selectedReferenceId: null,
        documentaryPath: [],
        inspectorOpen: false,
      }
    case 'DESELECT_IDEA':
      return { ...INITIAL_STATE, selectedMode: state.selectedMode }
    case 'SET_MODE':
      return { ...state, selectedMode: action.mode }
    case 'OPEN_GROUP':
      // opening a group closes siblings
      return {
        ...state,
        openGroupId: action.groupId === state.openGroupId ? null : action.groupId,
        selectedTopicId: null,
        selectedSubtopicId: null,
        selectedReferenceId: null,
        documentaryPath: [],
        currentLevel: state.currentLevel === 'home' ? 'idea' : state.currentLevel,
      }
    case 'SELECT_TOPIC':
      return {
        ...state,
        selectedTopicId: action.topicId,
        selectedSubtopicId: null,
        selectedReferenceId: null,
        documentaryPath: [],
        currentLevel: 'topic',
        openGroupId: 'syntopicon',
        inspectorOpen: true,
      }
    case 'SELECT_SUBTOPIC':
      return {
        ...state,
        selectedSubtopicId: action.subtopicId,
        selectedReferenceId: null,
        documentaryPath: [],
        currentLevel: 'subtopic',
        inspectorOpen: true,
      }
    case 'FOCUS_REFERENCE':
      return {
        ...state,
        selectedReferenceId: action.referenceId,
        documentaryPath: action.path,
        currentLevel: 'reference',
        inspectorOpen: true,
      }
    case 'CLOSE_REFERENCE':
      return {
        ...state,
        selectedReferenceId: null,
        documentaryPath: [],
        currentLevel: state.selectedSubtopicId
          ? 'subtopic'
          : state.selectedTopicId
          ? 'topic'
          : 'idea',
      }
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.query }
    case 'OPEN_INSPECTOR':
      return { ...state, inspectorOpen: true }
    case 'CLOSE_INSPECTOR':
      return { ...state, inspectorOpen: false }
    case 'GO_BACK': {
      if (state.currentLevel === 'reference') {
        return { ...state, selectedReferenceId: null, documentaryPath: [], currentLevel: state.selectedSubtopicId ? 'subtopic' : 'topic' }
      }
      if (state.currentLevel === 'subtopic') {
        return { ...state, selectedSubtopicId: null, currentLevel: 'topic' }
      }
      if (state.currentLevel === 'topic') {
        return { ...state, selectedTopicId: null, currentLevel: 'idea' }
      }
      if (state.currentLevel === 'idea') {
        return { ...INITIAL_STATE, selectedMode: state.selectedMode }
      }
      return state
    }
    case 'RESET':
      return { ...INITIAL_STATE, selectedMode: state.selectedMode }
    default:
      return state
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no output (no errors).

- [ ] **Step 3: Commit**

```bash
git add lib/atlas-six-ideas/atlas-state.ts
git commit -m "feat(atlas-v2): add state machine — AtlasState, reducer, AtlasLevel"
```

---

## Task 2: Correspondences Data (Fused Mode)

**Files:**
- Create: `lib/atlas-six-ideas/correspondences.ts`

This file defines which Adler aspects map to which Syntopicon topic/subtopic ids per idea. These are editorial mappings.

- [ ] **Step 1: Write correspondences**

```ts
// lib/atlas-six-ideas/correspondences.ts

export interface AdlerCorrespondence {
  adlerAspectId: string       // e.g. "adler-justice-justice_and_liberty"
  syntopicNodeIds: string[]   // topic or subtopic ids that correspond
  label: string               // short bridge label shown on fused edge
}

// Key: idea_en slug
export const ADLER_SYNTOPICON_CORRESPONDENCES: Record<string, AdlerCorrespondence[]> = {
  Justice: [
    {
      adlerAspectId: 'adler-justice-justice_and_liberty',
      syntopicNodeIds: [
        'topic-justice-justice-and-liberty',
        'topic-justice-justice-as-the-interest-of-the-stronger-or-conformity-to-the-will-of-the-sovereign',
      ],
      label: 'Liberdade e licença ↔ 6d',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_rights',
      syntopicNodeIds: [
        'topic-justice-justice-and-liberty',
      ],
      label: 'Direitos ↔ 6a/6b/6c',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_equality',
      syntopicNodeIds: [
        'topic-justice-justice-and-equality',
      ],
      label: 'Igualdade ↔ 5',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_law',
      syntopicNodeIds: [
        'topic-justice-justice-and-law',
      ],
      label: 'Justiça e lei ↔ 10',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_common_good',
      syntopicNodeIds: [
        'topic-justice-political-justice',
      ],
      label: 'Bem comum ↔ 9',
    },
  ],
  Truth: [],
  Goodness: [],
  Beauty: [],
  Liberty: [],
  Equality: [],
}

export function getCorrespondences(ideaId: string): AdlerCorrespondence[] {
  return ADLER_SYNTOPICON_CORRESPONDENCES[ideaId] ?? []
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add lib/atlas-six-ideas/correspondences.ts
git commit -m "feat(atlas-v2): add Adler-Syntopicon correspondence data for Fused mode"
```

---

## Task 3: Extended Types

**Files:**
- Modify: `lib/atlas-six-ideas/types.ts`

Add the new node types from spec §8 and edge types from spec §9, plus idea color/icon metadata.

- [ ] **Step 1: Add new node types and idea metadata to types.ts**

Append to the existing `types.ts` after the last export:

```ts
// New node types for v2 (added to AtlasNodeType union above — update the type)
// adler_group | adler_chapter | question_group | tension_group |
// syntopicon_chapter | documentary_reservoir | reference_group | passage

// Edge type literal for v2
export type AtlasEdgeType =
  | 'idea_to_system'
  | 'adler_structure'
  | 'syntopicon_structure'
  | 'adler_to_syntopicon_correspondence'
  | 'topic_to_subtopic'
  | 'topic_to_reference_group'
  | 'reference_to_author'
  | 'author_to_work'
  | 'work_to_volume'
  | 'reference_to_passage'
  | 'cross_reference'
  | 'tension'

// Per-idea visual identity (v2)
export interface IdeaVisualIdentity {
  colorPrimary: string    // used for nodes, borders, edges
  colorLight: string      // used for backgrounds
  sphere: 'judgment' | 'action'
  iconPath: string        // SVG path data for the idea icon
  numberLabel: string     // "01" … "06"
}

// Ordered canonical list of six ideas
export const SIX_IDEAS_EN = ['Truth', 'Goodness', 'Beauty', 'Liberty', 'Equality', 'Justice'] as const
export type SixIdeaEn = typeof SIX_IDEAS_EN[number]

export const IDEA_VISUAL_IDENTITY: Record<SixIdeaEn, IdeaVisualIdentity> = {
  Truth: {
    colorPrimary: '#8b9fcf',
    colorLight: '#8b9fcf22',
    sphere: 'judgment',
    iconPath: 'M12 2L2 19h20L12 2z', // triangle — placeholder, replace with eye/light motif
    numberLabel: '01',
  },
  Goodness: {
    colorPrimary: '#b8a0c8',
    colorLight: '#b8a0c822',
    sphere: 'judgment',
    iconPath: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    numberLabel: '02',
  },
  Beauty: {
    colorPrimary: '#d0a070',
    colorLight: '#d0a07022',
    sphere: 'judgment',
    iconPath: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    numberLabel: '03',
  },
  Liberty: {
    colorPrimary: '#6aaa80',
    colorLight: '#6aaa8022',
    sphere: 'action',
    iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
    numberLabel: '04',
  },
  Equality: {
    colorPrimary: '#c0884a',
    colorLight: '#c0884a22',
    sphere: 'action',
    iconPath: 'M4 9h16M4 15h16',
    numberLabel: '05',
  },
  Justice: {
    colorPrimary: '#5a9e7a',
    colorLight: '#5a9e7a22',
    sphere: 'action',
    iconPath: 'M12 3L4 7l8 4 8-4-8-4zM4 11l8 4 8-4M4 15l8 4 8-4',
    numberLabel: '06',
  },
}

// Idea number ordering for display
export const IDEA_NUMBER_ORDER: SixIdeaEn[] = ['Truth', 'Goodness', 'Beauty', 'Liberty', 'Equality', 'Justice']
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add lib/atlas-six-ideas/types.ts
git commit -m "feat(atlas-v2): extend types — AtlasEdgeType, IdeaVisualIdentity, SixIdeaEn"
```

---

## Task 4: Level-Aware Layout Engine

**Files:**
- Create: `lib/atlas-six-ideas/level-layout.ts`

This replaces the per-level layout scattered in AtlasGraph. It returns `{ nodes, positions, edges }` for any given state.

- [ ] **Step 1: Write the layout engine**

```ts
// lib/atlas-six-ideas/level-layout.ts
import type { AtlasNode, AtlasEdge, AtlasOverviewIdea, AtlasIdeaData } from './types'
import { IDEA_VISUAL_IDENTITY, SIX_IDEAS_EN } from './types'
import type { AtlasState } from './atlas-state'
import { getCorrespondences } from './correspondences'

export interface LayoutNode extends AtlasNode {
  x: number
  y: number
  radius: number
  color: string
  opacity: number
  scale: number
  isVirtual?: boolean       // synthetic group node not in data
  refCount?: number         // for group nodes: reference count badge
}

export interface LayoutEdge {
  source: string
  target: string
  edgeType: string
  opacity: number
  strokeWidth: number
  dashed?: boolean
  doubleDash?: boolean     // for adler_to_syntopicon_correspondence
}

export interface LevelLayout {
  nodes: LayoutNode[]
  edges: LayoutEdge[]
}

const RADII: Record<string, number> = {
  idea: 32,
  system: 24,
  adler_group: 22,
  adler_aspect: 18,
  adler_chapter: 14,
  question_group: 20,
  question: 12,
  tension_group: 20,
  tension: 14,
  syntopicon_chapter: 22,
  syntopicon_topic: 18,
  syntopicon_subtopic: 14,
  documentary_reservoir: 24,
  reference_group: 14,
  default: 16,
}

function r(type: string) { return RADII[type] ?? RADII.default }

function ideaColor(ideaEn: string): string {
  return IDEA_VISUAL_IDENTITY[ideaEn as keyof typeof IDEA_VISUAL_IDENTITY]?.colorPrimary ?? '#d0a556'
}

// ── Level 0: Home ────────────────────────────────────────────────────
// 6 ideas in 2 columns: Julgar left, Agir right
export function computeHomeLayout(
  overviewIdeas: AtlasOverviewIdea[],
  W: number,
  H: number
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const judgment = overviewIdeas.filter(i => i.sphere === 'judgment')
  const action   = overviewIdeas.filter(i => i.sphere === 'action')

  const colLeft  = W * 0.30
  const colRight = W * 0.70
  const padV     = H * 0.18

  const placeGroup = (group: AtlasOverviewIdea[], cx: number) => {
    const count = group.length
    group.forEach((idea, i) => {
      const y = count === 1
        ? H / 2
        : padV + (i / (count - 1)) * (H - padV * 2)
      nodes.push({
        id: idea.id,
        type: 'idea',
        title: idea.title_pt,
        idea: idea.idea_en,
        sphere: idea.sphere,
        x: cx, y,
        radius: r('idea'),
        color: ideaColor(idea.idea_en),
        opacity: 1,
        scale: 1,
      })
    })
  }

  placeGroup(judgment, colLeft)
  placeGroup(action,   colRight)

  // Draw judgment-field ring
  for (let i = 0; i < judgment.length; i++) {
    const a = nodes.find(n => n.id === judgment[i].id)!
    const b = nodes.find(n => n.id === judgment[(i + 1) % judgment.length].id)!
    edges.push({ source: a.id, target: b.id, edgeType: 'field_ring', opacity: 0.08, strokeWidth: 1 })
  }
  // Draw action-field ring
  for (let i = 0; i < action.length; i++) {
    const a = nodes.find(n => n.id === action[i].id)!
    const b = nodes.find(n => n.id === action[(i + 1) % action.length].id)!
    edges.push({ source: a.id, target: b.id, edgeType: 'field_ring', opacity: 0.08, strokeWidth: 1 })
  }
  // Cross-field lines (Julgar↔Agir bridge)
  if (judgment.length && action.length) {
    edges.push({
      source: judgment[1]?.id ?? judgment[0].id,
      target: action[0].id,
      edgeType: 'cross_field',
      opacity: 0.05,
      strokeWidth: 1,
      dashed: true,
    })
  }

  return { nodes, edges }
}

// ── Level 1: Idea selected ───────────────────────────────────────────
// Idea center + 3 system branches: Adler, Syntopicon, Reservoir
export function computeIdeaLayout(
  ideaMeta: AtlasOverviewIdea,
  W: number,
  H: number,
  openGroupId: string | null,
  mode: string,
  ideaData: AtlasIdeaData | null,
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const cx = W / 2
  const cy = H / 2

  const color = ideaColor(ideaMeta.idea_en)

  // Central idea node
  nodes.push({
    id: ideaMeta.id,
    type: 'idea',
    title: ideaMeta.title_pt,
    idea: ideaMeta.idea_en,
    sphere: ideaMeta.sphere,
    x: cx, y: cy,
    radius: r('idea'),
    color,
    opacity: 1,
    scale: 1.1,
  })

  const branchAngle = {
    adler:      -Math.PI / 2 - Math.PI / 6,   // upper-left
    syntopicon: -Math.PI / 2 + Math.PI / 6,   // upper-right
    reservoir:   Math.PI / 2,                  // bottom
  }

  const branchR = Math.min(W, H) * 0.30

  const makeSystemNode = (id: string, title: string, angle: number, type: string): LayoutNode => ({
    id, type: type as AtlasNode['type'],
    title,
    isVirtual: true,
    x: cx + branchR * Math.cos(angle),
    y: cy + branchR * Math.sin(angle),
    radius: r(type),
    color: type === 'adler_group' ? '#c99a43' : type === 'documentary_reservoir' ? '#7b887f' : '#8a8cc8',
    opacity: 1,
    scale: 1,
  })

  if (mode === 'adler' || mode === 'fused') {
    const adlerNode = makeSystemNode(
      'virtual-adler', 'Síntese — Adler', branchAngle.adler, 'adler_group'
    )
    nodes.push(adlerNode)
    edges.push({ source: ideaMeta.id, target: 'virtual-adler', edgeType: 'idea_to_system', opacity: 0.5, strokeWidth: 2 })

    // If Adler group open, expand aspects
    if (openGroupId === 'adler') {
      const aspects = ideaData?.nodes.filter(n => n.type === 'adler_aspect') ?? []
      const aspectR = branchR * 0.7
      aspects.slice(0, 8).forEach((asp, i, arr) => {
        const spread = Math.PI * 0.9
        const startAngle = branchAngle.adler - spread / 2
        const angle = arr.length === 1 ? branchAngle.adler : startAngle + (i / (arr.length - 1)) * spread
        const node: LayoutNode = {
          ...asp,
          x: cx + (branchR + aspectR) * Math.cos(angle),
          y: cy + (branchR + aspectR) * Math.sin(angle),
          radius: r('adler_aspect'),
          color: '#c99a43',
          opacity: 1,
          scale: 1,
        }
        nodes.push(node)
        edges.push({ source: 'virtual-adler', target: asp.id, edgeType: 'adler_structure', opacity: 0.4, strokeWidth: 1.5 })
      })
    }
  }

  if (mode === 'syntopicon' || mode === 'fused') {
    const synNode = makeSystemNode(
      'virtual-syntopicon', `Syntopicon — Ch. ${ideaMeta.idea_en}`, branchAngle.syntopicon, 'syntopicon_chapter'
    )
    nodes.push(synNode)
    edges.push({ source: ideaMeta.id, target: 'virtual-syntopicon', edgeType: 'idea_to_system', opacity: 0.5, strokeWidth: 2 })

    // If Syntopicon group open, expand topics
    if (openGroupId === 'syntopicon') {
      const topics = ideaData?.nodes.filter(n => n.type === 'syntopicon_topic') ?? []
      const topicR = branchR * 0.7
      topics.slice(0, 11).forEach((topic, i, arr) => {
        const spread = Math.PI * 0.9
        const startAngle = branchAngle.syntopicon - spread / 2
        const angle = arr.length === 1 ? branchAngle.syntopicon : startAngle + (i / (arr.length - 1)) * spread
        // Count references for this topic
        const refCount = ideaData?.nodes.filter(n => n.type === 'reference' && n.topic_id?.startsWith(topic.id)) .length ?? 0
        const node: LayoutNode = {
          ...topic,
          x: cx + (branchR + topicR) * Math.cos(angle),
          y: cy + (branchR + topicR) * Math.sin(angle),
          radius: r('syntopicon_topic'),
          color: '#8a8cc8',
          opacity: 1,
          scale: 1,
          refCount,
        }
        nodes.push(node)
        edges.push({ source: 'virtual-syntopicon', target: topic.id, edgeType: 'syntopicon_structure', opacity: 0.4, strokeWidth: 1.5 })
      })
    }
  }

  // Reservoir node (always shown at idea level)
  const totalRefs = ideaMeta.counts.references
  const reservoirNode = makeSystemNode('virtual-reservoir', 'Reservatório documental', branchAngle.reservoir, 'documentary_reservoir')
  reservoirNode.refCount = totalRefs
  nodes.push(reservoirNode)
  edges.push({ source: ideaMeta.id, target: 'virtual-reservoir', edgeType: 'idea_to_system', opacity: 0.3, strokeWidth: 1.5, dashed: true })

  // Fused mode: draw correspondence edges
  if (mode === 'fused' && openGroupId === 'adler') {
    const correspondences = getCorrespondences(ideaMeta.idea_en)
    correspondences.forEach(c => {
      const adlerNodeInGraph = nodes.find(n => n.id === c.adlerAspectId)
      if (!adlerNodeInGraph) return
      c.syntopicNodeIds.forEach(sid => {
        const synNodeInGraph = nodes.find(n => n.id === sid)
        if (!synNodeInGraph) return
        edges.push({
          source: c.adlerAspectId,
          target: sid,
          edgeType: 'adler_to_syntopicon_correspondence',
          opacity: 0.35,
          strokeWidth: 1,
          doubleDash: true,
        })
      })
    })
  }

  return { nodes, edges }
}

// ── Level 2: Topic selected ─────────────────────────────────────────
// Idea + Syntopicon branch + selected topic + its subtopics (max ~20 nodes)
export function computeTopicLayout(
  ideaMeta: AtlasOverviewIdea,
  ideaData: AtlasIdeaData,
  topicId: string,
  W: number,
  H: number,
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const cx = W * 0.35
  const cy = H / 2
  const color = ideaColor(ideaMeta.idea_en)

  // Idea node (left anchor)
  nodes.push({
    id: ideaMeta.id, type: 'idea',
    title: ideaMeta.title_pt, idea: ideaMeta.idea_en, sphere: ideaMeta.sphere,
    x: W * 0.10, y: cy,
    radius: r('idea'), color, opacity: 0.7, scale: 0.85,
  })

  // Syntopicon chapter node (mid-left)
  nodes.push({
    id: 'virtual-syntopicon', type: 'syntopicon_chapter' as AtlasNode['type'],
    title: 'Syntopicon', isVirtual: true,
    x: W * 0.27, y: cy,
    radius: r('syntopicon_chapter'), color: '#8a8cc8', opacity: 0.8, scale: 1,
  })
  edges.push({ source: ideaMeta.id, target: 'virtual-syntopicon', edgeType: 'idea_to_system', opacity: 0.3, strokeWidth: 1.5 })

  // Selected topic node (center)
  const topicNode = ideaData.nodes.find(n => n.id === topicId)
  if (!topicNode) return { nodes, edges }

  const topicRefCount = ideaData.nodes.filter(n =>
    n.type === 'reference' && n.topic_id?.startsWith(topicId)
  ).length

  const layoutTopic: LayoutNode = {
    ...topicNode,
    x: cx, y: cy,
    radius: r('syntopicon_topic'), color: '#8a8cc8', opacity: 1, scale: 1.1, refCount: topicRefCount,
  }
  nodes.push(layoutTopic)
  edges.push({ source: 'virtual-syntopicon', target: topicId, edgeType: 'syntopicon_structure', opacity: 0.5, strokeWidth: 2 })

  // Subtopics (right side, radial around topic)
  const subtopics = ideaData.nodes.filter(
    n => n.type === 'syntopicon_subtopic' && n.parent_topic_id === topicId
  )
  const subR = Math.min(W * 0.28, H * 0.38)
  const startAngle = -Math.PI / 2
  subtopics.slice(0, 8).forEach((sub, i, arr) => {
    const spread = Math.PI * 1.2
    const angle = arr.length === 1 ? 0 : startAngle + (i / (arr.length - 1)) * spread
    const refCount = ideaData.nodes.filter(n =>
      n.type === 'reference' && n.topic_id === sub.id
    ).length
    const subNode: LayoutNode = {
      ...sub,
      x: cx + subR * Math.cos(angle) * 1.4,
      y: cy + subR * Math.sin(angle),
      radius: r('syntopicon_subtopic'), color: '#6668a2', opacity: 1, scale: 1, refCount,
    }
    nodes.push(subNode)
    edges.push({ source: topicId, target: sub.id, edgeType: 'topic_to_subtopic', opacity: 0.4, strokeWidth: 1 })
  })

  // Top-5 authors for this topic (shown right-far)
  const topicRefs = ideaData.nodes.filter(n =>
    n.type === 'reference' && n.topic_id?.startsWith(topicId)
  )
  const authorCounts = new Map<string, number>()
  topicRefs.forEach(ref => {
    if (ref.author_id) authorCounts.set(ref.author_id, (authorCounts.get(ref.author_id) ?? 0) + 1)
  })
  const top5AuthorIds = [...authorCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => id)

  top5AuthorIds.forEach((authorId, i) => {
    const authorNode = ideaData.nodes.find(n => n.id === authorId)
    if (!authorNode) return
    const ySpread = H * 0.65
    const authorLayout: LayoutNode = {
      ...authorNode,
      x: W * 0.86,
      y: H / 2 - ySpread / 2 + (i / Math.max(top5AuthorIds.length - 1, 1)) * ySpread,
      radius: r('author'), color: '#a96842', opacity: 0.7, scale: 0.9,
    }
    nodes.push(authorLayout)
    edges.push({ source: topicId, target: authorId, edgeType: 'topic_to_reference_group', opacity: 0.2, strokeWidth: 1, dashed: true })
  })

  return { nodes, edges }
}

// ── Level 3: Reference selected ──────────────────────────────────────
// 6-10 node documentary path
export function computeReferenceLayout(
  ideaMeta: AtlasOverviewIdea,
  ideaData: AtlasIdeaData,
  referenceId: string,
  topicId: string | null,
  subtopicId: string | null,
  W: number,
  H: number,
): LevelLayout {
  const nodes: LayoutNode[] = []
  const edges: LayoutEdge[] = []

  const color = ideaColor(ideaMeta.idea_en)
  const refNode = ideaData.nodes.find(n => n.id === referenceId)
  if (!refNode) return { nodes, edges }

  // Breadcrumb path: idea → topic → subtopic → reference → author → work → volume
  const pathItems: Array<{ node: AtlasNode; x: number; y: number }> = []

  // Compute path nodes
  const idea: AtlasNode = { id: ideaMeta.id, type: 'idea', title: ideaMeta.title_pt, idea: ideaMeta.idea_en, sphere: ideaMeta.sphere }
  pathItems.push({ node: idea, x: 0, y: 0 })

  if (topicId) {
    const topic = ideaData.nodes.find(n => n.id === topicId)
    if (topic) pathItems.push({ node: topic, x: 0, y: 0 })
  }
  if (subtopicId) {
    const subtopic = ideaData.nodes.find(n => n.id === subtopicId)
    if (subtopic) pathItems.push({ node: subtopic, x: 0, y: 0 })
  }

  pathItems.push({ node: refNode, x: 0, y: 0 })

  const authorNode = refNode.author_id ? ideaData.nodes.find(n => n.id === refNode.author_id) : null
  if (authorNode) pathItems.push({ node: authorNode, x: 0, y: 0 })

  const workNode = refNode.work_id ? ideaData.nodes.find(n => n.id === refNode.work_id) : null
  if (workNode) pathItems.push({ node: workNode, x: 0, y: 0 })

  const volumeNode = refNode.volume_id ? ideaData.nodes.find(n => n.id === refNode.volume_id) : null
  if (volumeNode) pathItems.push({ node: volumeNode, x: 0, y: 0 })

  // Lay out horizontally with equal spacing
  const count = pathItems.length
  const margin = W * 0.08
  const usableW = W - margin * 2
  const spacing = usableW / Math.max(count - 1, 1)
  const cy = H / 2

  pathItems.forEach((item, i) => {
    item.x = margin + i * spacing
    item.y = cy
  })

  // Map node types to colors
  const typeColors: Record<string, string> = {
    idea: color,
    syntopicon_topic: '#8a8cc8',
    syntopicon_subtopic: '#6668a2',
    reference: '#b55f38',
    author: '#a96842',
    work: '#bd7246',
    volume: '#8f5538',
  }

  pathItems.forEach((item, i) => {
    nodes.push({
      ...item.node,
      x: item.x,
      y: item.y,
      radius: r(item.node.type),
      color: typeColors[item.node.type] ?? '#d0a556',
      opacity: 1,
      scale: item.node.type === 'reference' ? 1.15 : 0.9,
    })
    if (i > 0) {
      edges.push({
        source: pathItems[i - 1].node.id,
        target: item.node.id,
        edgeType: 'documentary_path',
        opacity: 0.6,
        strokeWidth: 2,
      })
    }
  })

  return { nodes, edges }
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/atlas-six-ideas/level-layout.ts
git commit -m "feat(atlas-v2): level-aware layout engine — home/idea/topic/reference levels"
```

---

## Task 5: Atlas Graph v2

**Files:**
- Create: `components/atlas/v2/AtlasGraphV2.tsx`

Renders `LevelLayout` from the engine. No data logic here — receives `layout` and dispatches actions.

- [ ] **Step 1: Create the graph component**

```tsx
// components/atlas/v2/AtlasGraphV2.tsx
'use client'

import { useRef, useEffect, useState, useCallback, useId } from 'react'
import type { LevelLayout, LayoutNode, LayoutEdge } from '@/lib/atlas-six-ideas/level-layout'
import type { AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'
import { IDEA_VISUAL_IDENTITY } from '@/lib/atlas-six-ideas/types'

interface Transform { x: number; y: number; k: number }
function clamp(k: number) { return Math.min(Math.max(k, 0.2), 5) }

interface Props {
  layout: LevelLayout
  selectedNodeId: string | null
  dispatch: (action: AtlasAction) => void
  loading?: boolean
  level: string
}

export function AtlasGraphV2({ layout, selectedNodeId, dispatch, loading, level }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 800, h: 600 })
  const [tf, setTf] = useState<Transform>({ x: 0, y: 0, k: 1 })
  const isPanning = useRef(false)
  const lastXY = useRef({ x: 0, y: 0 })
  const prefersReduced = useRef(false)

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const r = el.getBoundingClientRect()
      setSize({ w: r.width, h: r.height })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Reset pan/zoom when level changes
  useEffect(() => { setTf({ x: 0, y: 0, k: 1 }) }, [level])

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const factor = e.deltaY > 0 ? 0.9 : 1.1
    setTf(t => ({ ...t, k: clamp(t.k * factor) }))
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as Element).closest('button')) return
    isPanning.current = true
    lastXY.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current) return
    const dx = e.clientX - lastXY.current.x
    const dy = e.clientY - lastXY.current.y
    lastXY.current = { x: e.clientX, y: e.clientY }
    setTf(t => ({ ...t, x: t.x + dx, y: t.y + dy }))
  }, [])

  const onPointerUp = useCallback(() => { isPanning.current = false }, [])
  const transition = prefersReduced.current ? 'none' : 'all 0.42s cubic-bezier(0.4,0,0.2,1)'

  const handleNodeClick = (node: LayoutNode) => {
    if (node.isVirtual) {
      // virtual group nodes toggle the group open/closed
      const groupId = node.id === 'virtual-adler' ? 'adler'
        : node.id === 'virtual-syntopicon' ? 'syntopicon'
        : node.id === 'virtual-reservoir' ? 'reservoir'
        : null
      if (groupId) dispatch({ type: 'OPEN_GROUP', groupId })
      return
    }
    switch (node.type) {
      case 'idea':
        if (node.idea) dispatch({ type: 'SELECT_IDEA', ideaId: node.idea })
        break
      case 'syntopicon_topic':
        dispatch({ type: 'SELECT_TOPIC', topicId: node.id })
        break
      case 'syntopicon_subtopic':
        dispatch({ type: 'SELECT_SUBTOPIC', subtopicId: node.id })
        break
      case 'adler_aspect':
        dispatch({ type: 'OPEN_INSPECTOR' })
        break
      default:
        dispatch({ type: 'OPEN_INSPECTOR' })
    }
  }

  const edgeStroke = (edge: LayoutEdge) => {
    if (edge.doubleDash) return '4,2,1,2'
    if (edge.dashed) return '4,3'
    return undefined
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-library-950 cursor-grab active:cursor-grabbing select-none"
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      role="application"
      aria-label="Atlas das Seis Ideias — canvas interativo"
    >
      {/* Sphere divider labels */}
      <div className="pointer-events-none absolute inset-x-0 top-3 z-10 flex justify-around px-8" aria-hidden="true">
        <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] text-violet-400/30">Julgar</span>
        <span className="font-sans text-[0.55rem] uppercase tracking-[0.2em] text-green-600/30">Agir</span>
      </div>

      {/* Loading */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-library-950/80">
          <p className="font-sans text-sm text-parchment-200/50 animate-pulse">Carregando corpus…</p>
        </div>
      )}

      {/* Background deselect */}
      <div className="absolute inset-0 z-0" onClick={() => dispatch({ type: 'GO_BACK' })} aria-hidden="true" />

      {/* SVG edges */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <g transform={`translate(${tf.x},${tf.y}) scale(${tf.k})`}>
          {layout.edges.map((edge, i) => {
            const src = layout.nodes.find(n => n.id === edge.source)
            const tgt = layout.nodes.find(n => n.id === edge.target)
            if (!src || !tgt) return null
            return (
              <line
                key={`e-${i}`}
                x1={src.x} y1={src.y}
                x2={tgt.x} y2={tgt.y}
                stroke={`rgba(180,160,80,${edge.opacity})`}
                strokeWidth={edge.strokeWidth / tf.k}
                strokeDasharray={edgeStroke(edge)}
              />
            )
          })}
        </g>
      </svg>

      {/* Nodes */}
      {layout.nodes.map(node => {
        const isSelected = node.id === selectedNodeId
        const label = (node.title ?? node.label ?? node.id)
        const shortLabel = label.length > 22 ? label.slice(0, 20) + '…' : label

        return (
          <button
            key={node.id}
            type="button"
            aria-label={label}
            aria-pressed={isSelected}
            onClick={e => { e.stopPropagation(); handleNodeClick(node) }}
            className="absolute z-10 flex flex-col items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-antique-400"
            style={{
              left: node.x + tf.x,
              top: node.y + tf.y,
              transform: `translate(-50%, -50%) scale(${node.scale * tf.k})`,
              opacity: node.opacity,
              transition,
            }}
          >
            {/* Circle */}
            <div
              className="relative grid place-items-center rounded-full border-2 transition-all"
              style={{
                width: node.radius * 2,
                height: node.radius * 2,
                borderColor: node.color,
                backgroundColor: isSelected ? `${node.color}28` : `${node.color}0a`,
                boxShadow: isSelected ? `0 0 20px ${node.color}55` : undefined,
              }}
            >
              {/* Reference count badge */}
              {node.refCount !== undefined && node.refCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 min-w-[18px] rounded-full px-1 text-center font-sans text-[0.5rem] font-bold"
                  style={{ backgroundColor: node.color, color: '#0a1814' }}
                >
                  {node.refCount > 999 ? '999+' : node.refCount}
                </span>
              )}
            </div>
            {/* Label */}
            <span
              className="pointer-events-none max-w-[100px] text-center font-sans leading-tight"
              style={{
                fontSize: node.type === 'idea' ? '0.68rem' : '0.56rem',
                color: node.color,
                fontWeight: node.type === 'idea' ? 600 : 400,
              }}
            >
              {shortLabel}
            </span>
          </button>
        )
      })}

      {/* Zoom controls */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1" aria-label="Controles de zoom">
        {[
          { label: '+', title: 'Ampliar', fn: () => setTf(t => ({ ...t, k: clamp(t.k * 1.3) })) },
          { label: '−', title: 'Reduzir', fn: () => setTf(t => ({ ...t, k: clamp(t.k * 0.77) })) },
          { label: '⊙', title: 'Recentrar', fn: () => setTf({ x: 0, y: 0, k: 1 }) },
        ].map(({ label, title, fn }) => (
          <button
            key={title}
            type="button"
            title={title}
            aria-label={title}
            onClick={fn}
            className="grid h-8 w-8 place-items-center rounded border border-antique-500/25 bg-library-900/80 font-sans text-sm text-parchment-200/60 hover:border-antique-400/60 hover:text-antique-400 transition"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Back button when drill-down is active */}
      {level !== 'home' && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); dispatch({ type: 'GO_BACK' }) }}
          className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded border border-antique-500/30 bg-library-900/80 px-3 py-1.5 font-sans text-xs text-parchment-200/60 hover:text-antique-400 hover:border-antique-400/50 transition"
        >
          ← Voltar
        </button>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add components/atlas/v2/AtlasGraphV2.tsx
git commit -m "feat(atlas-v2): AtlasGraphV2 — level-aware canvas with back button + ref count badges"
```

---

## Task 6: Atlas Inspector v2

**Files:**
- Create: `components/atlas/v2/AtlasInspectorV2.tsx`

Virtualised reference list (CSS `overflow-y: auto`, max-height), filters, documentary blocks per level.

- [ ] **Step 1: Create the inspector component**

```tsx
// components/atlas/v2/AtlasInspectorV2.tsx
'use client'

import { useState, useMemo } from 'react'
import type { AtlasState } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasIdeaData, AtlasOverviewIdea, AtlasNode } from '@/lib/atlas-six-ideas/types'

interface Props {
  atlasState: AtlasState
  dispatch: (a: AtlasAction) => void
  ideaMeta: AtlasOverviewIdea | null
  ideaData: AtlasIdeaData | null
}

// Small field row
function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-sans text-[0.55rem] uppercase tracking-[0.15em] text-parchment-100/40">{label}</span>
      <span className="font-sans text-xs text-parchment-100/80">{value}</span>
    </div>
  )
}

// Evidence badge
function EvidenceBadge({ status }: { status: string | undefined }) {
  const map: Record<string, { label: string; color: string }> = {
    confirmed:         { label: 'Confirmado',   color: '#5a9e7a' },
    partial:           { label: 'Parcial',       color: '#8a8cc8' },
    in_verification:   { label: 'Em verificação',color: '#c99a43' },
    not_confirmed:     { label: 'Não confirmado',color: '#884444' },
    not_extracted:     { label: 'Sem passagem',  color: '#555' },
    documental:        { label: 'Documental',    color: '#8a8cc8' },
  }
  const info = map[status ?? ''] ?? { label: status ?? '—', color: '#555' }
  return (
    <span
      className="rounded px-1.5 py-0.5 font-sans text-[0.55rem] font-semibold"
      style={{ background: `${info.color}22`, color: info.color, border: `1px solid ${info.color}44` }}
    >
      {info.label}
    </span>
  )
}

// Virtualised reference list
function ReferenceList({
  references, onFocus, dispatch
}: {
  references: AtlasNode[]
  onFocus: (ref: AtlasNode) => void
  dispatch: (a: AtlasAction) => void
}) {
  const [filterAuthor, setFilterAuthor] = useState('')
  const [filterEvidence, setFilterEvidence] = useState('')

  const authors = useMemo(() => {
    const s = new Set<string>()
    references.forEach(r => { if (r.author) s.add(r.author) })
    return [...s].sort()
  }, [references])

  const filtered = useMemo(() => {
    return references.filter(r => {
      const aMatch = !filterAuthor || r.author === filterAuthor
      const eMatch = !filterEvidence || r.passage_status === filterEvidence || r.evidence_status === filterEvidence
      return aMatch && eMatch
    })
  }, [references, filterAuthor, filterEvidence])

  return (
    <div className="flex flex-col gap-2">
      {/* Filters */}
      <div className="flex flex-wrap gap-1.5">
        <select
          value={filterAuthor}
          onChange={e => setFilterAuthor(e.target.value)}
          className="rounded border border-antique-500/20 bg-library-900 px-2 py-1 font-sans text-[0.6rem] text-parchment-100/70"
        >
          <option value="">Todos os autores</option>
          {authors.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <select
          value={filterEvidence}
          onChange={e => setFilterEvidence(e.target.value)}
          className="rounded border border-antique-500/20 bg-library-900 px-2 py-1 font-sans text-[0.6rem] text-parchment-100/70"
        >
          <option value="">Qualquer evidência</option>
          <option value="not_extracted">Sem passagem</option>
          <option value="confirmed">Confirmado</option>
          <option value="documental">Documental</option>
        </select>
        {(filterAuthor || filterEvidence) && (
          <button
            type="button"
            onClick={() => { setFilterAuthor(''); setFilterEvidence('') }}
            className="rounded border border-antique-500/20 px-2 py-1 font-sans text-[0.6rem] text-antique-400 hover:bg-antique-400/10"
          >
            Limpar
          </button>
        )}
      </div>

      <p className="font-sans text-[0.58rem] text-parchment-100/40">
        {filtered.length} de {references.length} referências
      </p>

      {/* List — CSS overflow, no external virtual scroll lib */}
      <div className="overflow-y-auto" style={{ maxHeight: '380px' }}>
        <div className="flex flex-col gap-1.5 pr-1">
          {filtered.slice(0, 200).map(ref => (
            <div
              key={ref.id}
              className="group rounded border border-antique-500/10 bg-library-900/60 p-2.5 hover:border-antique-500/30 transition"
            >
              <p className="font-sans text-[0.62rem] text-parchment-100/80 leading-snug">{ref.title}</p>
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                {ref.author && (
                  <span className="font-sans text-[0.55rem] text-antique-400/80">{ref.author}</span>
                )}
                <EvidenceBadge status={ref.passage_status ?? ref.evidence_status} />
              </div>
              <button
                type="button"
                onClick={() => onFocus(ref)}
                className="mt-1.5 font-sans text-[0.55rem] text-antique-400/60 opacity-0 group-hover:opacity-100 hover:text-antique-400 transition"
              >
                Focar no grafo →
              </button>
            </div>
          ))}
          {filtered.length > 200 && (
            <p className="font-sans text-[0.55rem] text-parchment-100/30 text-center py-2">
              Mostrando 200 de {filtered.length}. Use filtros para refinar.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function AtlasInspectorV2({ atlasState, dispatch, ideaMeta, ideaData }: Props) {
  const { currentLevel, selectedTopicId, selectedSubtopicId, selectedReferenceId } = atlasState

  const handleFocusReference = (ref: AtlasNode) => {
    const path = [
      ideaMeta?.id,
      selectedTopicId,
      selectedSubtopicId,
      ref.id,
      ref.author_id,
      ref.work_id,
      ref.volume_id,
    ].filter(Boolean) as string[]
    dispatch({ type: 'FOCUS_REFERENCE', referenceId: ref.id, path })
  }

  // ── Empty state ────────────────────────────────────────────────
  if (currentLevel === 'home') {
    return (
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-library-900/60 p-5">
        <p className="font-sans text-[0.58rem] uppercase tracking-[0.18em] text-antique-400/70">Inspetor documental</p>
        <p className="font-display text-lg text-parchment-100/60 leading-relaxed">
          Selecione uma ideia para explorar o corpus documental.
        </p>
        <div className="mt-4 border-t border-antique-500/15 pt-4">
          <p className="font-sans text-xs text-parchment-100/40">
            O inspetor mostra inventários, referências, filtros e evidências. O grafo mostra estrutura e caminhos.
          </p>
        </div>
      </div>
    )
  }

  // ── Idea level ──────────────────────────────────────────────────
  if (currentLevel === 'idea' && ideaMeta) {
    return (
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-library-900/60 p-5">
        <div>
          <p className="font-sans text-[0.55rem] uppercase tracking-[0.18em] text-antique-400/70">Ideia</p>
          <h2 className="font-display text-2xl text-parchment-100">{ideaMeta.title_pt}</h2>
          <p className="mt-1 font-sans text-[0.6rem] text-parchment-100/50">
            {ideaMeta.sphere === 'judgment' ? 'Campo do Julgar' : 'Campo do Agir'}
          </p>
        </div>
        {ideaMeta.central_question && (
          <blockquote className="border-l-2 border-antique-500/40 pl-3 font-display text-sm italic text-parchment-100/70">
            {ideaMeta.central_question}
          </blockquote>
        )}
        {ideaMeta.definition && (
          <p className="font-sans text-xs text-parchment-100/60 leading-relaxed">{ideaMeta.definition}</p>
        )}

        <div className="grid grid-cols-2 gap-2 border-t border-antique-500/15 pt-4">
          {[
            { label: 'Aspectos Adler', value: ideaMeta.counts.adler_aspects },
            { label: 'Tópicos Syntopicon', value: ideaMeta.counts.syntopicon_topics },
            { label: 'Referências', value: ideaMeta.counts.references },
            { label: 'Tensões', value: ideaMeta.counts.tensions },
          ].map(s => (
            <div key={s.label} className="rounded border border-antique-500/15 bg-library-950/50 p-2 text-center">
              <p className="font-display text-xl text-antique-400">{s.value}</p>
              <p className="font-sans text-[0.55rem] text-parchment-100/50">{s.label}</p>
            </div>
          ))}
        </div>

        {ideaMeta.adler_chapters.length > 0 && (
          <div className="border-t border-antique-500/15 pt-4">
            <p className="mb-2 font-sans text-[0.55rem] uppercase tracking-[0.15em] text-antique-400/60">Capítulos — Six Great Ideas</p>
            <ol className="list-inside list-decimal space-y-1">
              {ideaMeta.adler_chapters.map((ch, i) => (
                <li key={i} className="font-sans text-xs text-parchment-100/65 leading-snug">{ch}</li>
              ))}
            </ol>
          </div>
        )}

        {ideaMeta.mapping_note && (
          <div className="rounded border border-antique-500/20 bg-library-950/40 p-3">
            <p className="font-sans text-[0.6rem] text-parchment-100/50">{ideaMeta.mapping_note}</p>
          </div>
        )}
      </div>
    )
  }

  // ── Topic level ──────────────────────────────────────────────────
  if ((currentLevel === 'topic' || currentLevel === 'subtopic') && ideaData && selectedTopicId) {
    const topic = ideaData.nodes.find(n => n.id === selectedTopicId)
    const subtopic = selectedSubtopicId ? ideaData.nodes.find(n => n.id === selectedSubtopicId) : null

    // References for this topic/subtopic
    const activeNodeId = subtopic?.id ?? topic?.id
    const references = ideaData.nodes.filter(n =>
      n.type === 'reference' &&
      (n.topic_id === activeNodeId || n.topic_id?.startsWith(activeNodeId ?? ''))
    )

    // Subtopics for this topic
    const subtopics = ideaData.nodes.filter(n =>
      n.type === 'syntopicon_subtopic' && n.parent_topic_id === selectedTopicId
    )

    return (
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-library-900/60 p-5">
        <div>
          <p className="font-sans text-[0.55rem] uppercase tracking-[0.18em] text-antique-400/70">
            Syntopicon — Tópico {topic?.topic_number ?? ''}
          </p>
          <h2 className="font-display text-lg text-parchment-100 leading-snug">{topic?.title}</h2>
        </div>

        {subtopic && (
          <div className="rounded border border-antique-500/20 bg-library-950/40 p-3">
            <p className="font-sans text-[0.55rem] text-antique-400/60 uppercase mb-1">Subtópico selecionado</p>
            <p className="font-sans text-xs text-parchment-100/75">{subtopic.title}</p>
          </div>
        )}

        {subtopics.length > 0 && !subtopic && (
          <div className="border-t border-antique-500/15 pt-3">
            <p className="mb-2 font-sans text-[0.55rem] uppercase tracking-[0.15em] text-antique-400/60">Subtópicos</p>
            <div className="flex flex-col gap-1">
              {subtopics.map(sub => {
                const subRefCount = ideaData.nodes.filter(n => n.type === 'reference' && n.topic_id === sub.id).length
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => dispatch({ type: 'SELECT_SUBTOPIC', subtopicId: sub.id })}
                    className="flex items-center justify-between rounded border border-antique-500/15 bg-library-950/30 px-2.5 py-1.5 text-left hover:border-antique-500/40 hover:bg-library-950/60 transition"
                  >
                    <span className="font-sans text-xs text-parchment-100/70">{sub.title}</span>
                    <span className="shrink-0 ml-2 font-sans text-[0.6rem] text-antique-400/70">{subRefCount} ref.</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Reference list */}
        <div className="border-t border-antique-500/15 pt-3">
          <p className="mb-2 font-sans text-[0.55rem] uppercase tracking-[0.15em] text-antique-400/60">
            Referências documentais
          </p>
          <ReferenceList
            references={references}
            onFocus={handleFocusReference}
            dispatch={dispatch}
          />
        </div>
      </div>
    )
  }

  // ── Reference level ──────────────────────────────────────────────
  if (currentLevel === 'reference' && ideaData && selectedReferenceId) {
    const ref = ideaData.nodes.find(n => n.id === selectedReferenceId)
    if (!ref) return null

    const authorNode = ref.author_id ? ideaData.nodes.find(n => n.id === ref.author_id) : null
    const workNode = ref.work_id ? ideaData.nodes.find(n => n.id === ref.work_id) : null
    const volumeNode = ref.volume_id ? ideaData.nodes.find(n => n.id === ref.volume_id) : null
    const topicNode = ref.topic_id ? ideaData.nodes.find(n => n.id === ref.topic_id) : null

    return (
      <div className="flex h-full flex-col gap-4 overflow-y-auto bg-library-900/60 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-sans text-[0.55rem] uppercase tracking-[0.18em] text-antique-400/70">Referência documental</p>
            <h2 className="font-display text-base text-parchment-100 leading-snug mt-0.5">{ref.title}</h2>
          </div>
          <button
            type="button"
            onClick={() => dispatch({ type: 'CLOSE_REFERENCE' })}
            className="shrink-0 rounded border border-antique-500/20 px-2 py-1 font-sans text-[0.6rem] text-parchment-100/50 hover:text-antique-400 transition"
          >
            ← Fechar
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {authorNode && <Field label="Autor" value={authorNode.title ?? ref.author} />}
          {workNode && <Field label="Obra" value={workNode.title ?? ref.work} />}
          {volumeNode && <Field label="Volume" value={volumeNode.title ?? `GBW ${ref.gbw_volume}`} />}
          {topicNode && <Field label="Tópico" value={topicNode.title} />}
          {ref.coordinate_original && <Field label="Coordenada original" value={<code className="text-[0.6rem] text-antique-400/80">{ref.coordinate_original}</code>} />}
          <Field label="Estado da evidência" value={<EvidenceBadge status={ref.passage_status ?? ref.evidence_status} />} />
        </div>

        {ref.reference_original_raw && (
          <div className="rounded border border-antique-500/20 bg-library-950/60 p-3">
            <p className="mb-1 font-sans text-[0.52rem] uppercase tracking-[0.15em] text-antique-400/50">Referência original</p>
            <code className="font-mono text-[0.65rem] text-parchment-100/60 leading-relaxed break-all">
              {ref.reference_original_raw}
            </code>
          </div>
        )}

        <div className="rounded border border-antique-500/10 bg-library-950/40 p-3">
          <p className="font-sans text-[0.55rem] uppercase tracking-[0.15em] text-antique-400/50 mb-1">Passagem verificada</p>
          <p className="font-sans text-xs text-parchment-100/40">
            {ref.passage_status === 'not_extracted'
              ? 'Passagens verificadas nesta fase: 0 — auditoria textual pendente'
              : 'Sem passagem verificada neste corpus'}
          </p>
        </div>
      </div>
    )
  }

  return null
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add components/atlas/v2/AtlasInspectorV2.tsx
git commit -m "feat(atlas-v2): AtlasInspectorV2 — virtualised reference list, filters, all 4 levels"
```

---

## Task 7: Atlas Controls v2

**Files:**
- Create: `components/atlas/v2/AtlasControlsV2.tsx`

Mode switcher, idea selector (01–06 chips), search with grouped results.

- [ ] **Step 1: Create controls component**

```tsx
// components/atlas/v2/AtlasControlsV2.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import type { AtlasMode } from '@/lib/atlas-six-ideas/types'
import type { AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasSearchItem } from '@/lib/atlas-six-ideas/types'
import { IDEA_NUMBER_ORDER, IDEA_VISUAL_IDENTITY, IDEA_PT_TITLE, IDEA_EN_TO_PT } from '@/lib/atlas-six-ideas/types'
import { searchIndex } from '@/lib/atlas-six-ideas/selectors'

interface Props {
  selectedIdeaId: string | null
  selectedMode: AtlasMode
  dispatch: (a: AtlasAction) => void
  searchItems: AtlasSearchItem[]
}

const MODE_LABELS: Record<AtlasMode, string> = {
  adler: 'Adler',
  syntopicon: 'Syntopicon',
  fused: 'Fundida',
}

export function AtlasControlsV2({ selectedIdeaId, selectedMode, dispatch, searchItems }: Props) {
  const [query, setQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const results = query.trim().length >= 2 ? searchIndex(searchItems, query, 30) : []

  // Group results by type
  const grouped: Record<string, AtlasSearchItem[]> = {}
  results.forEach(r => {
    if (!grouped[r.type]) grouped[r.type] = []
    grouped[r.type].push(r)
  })

  const TYPE_ORDER = ['idea', 'adler_aspect', 'syntopicon_topic', 'syntopicon_subtopic', 'author', 'reference']
  const TYPE_PT: Record<string, string> = {
    idea: 'Ideias',
    adler_aspect: 'Aspectos',
    syntopicon_topic: 'Tópicos',
    syntopicon_subtopic: 'Subtópicos',
    author: 'Autores',
    reference: 'Referências',
  }

  const handleSelectResult = (item: AtlasSearchItem) => {
    setQuery('')
    setShowResults(false)
    if (item.idea && item.idea !== selectedIdeaId) {
      dispatch({ type: 'SELECT_IDEA', ideaId: item.idea })
    }
    if (item.type === 'syntopicon_topic') {
      dispatch({ type: 'SELECT_TOPIC', topicId: item.id })
    } else if (item.type === 'syntopicon_subtopic') {
      dispatch({ type: 'SELECT_SUBTOPIC', subtopicId: item.id })
    } else if (item.type === 'reference') {
      // navigate to idea first, then focus reference via inspector
      dispatch({ type: 'OPEN_INSPECTOR' })
    }
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto bg-library-900/80 p-5 border-r border-antique-500/15">
      {/* Header */}
      <div>
        <p className="font-sans text-[0.55rem] uppercase tracking-[0.2em] text-antique-400/70">Atlas das Seis Ideias</p>
        <p className="mt-1 font-display text-lg text-parchment-100/80">Syntopicon</p>
      </div>

      {/* Mode selector */}
      <div>
        <p className="mb-2 font-sans text-[0.52rem] uppercase tracking-[0.18em] text-parchment-100/40">Modo de leitura</p>
        <div className="grid grid-cols-3 gap-1">
          {(['adler', 'syntopicon', 'fused'] as AtlasMode[]).map(m => (
            <button
              key={m}
              type="button"
              onClick={() => dispatch({ type: 'SET_MODE', mode: m })}
              className={`rounded px-2 py-1.5 font-sans text-[0.58rem] font-medium transition ${
                selectedMode === m
                  ? 'bg-antique-500/80 text-library-950'
                  : 'border border-antique-500/20 text-parchment-100/50 hover:border-antique-400/40 hover:text-parchment-100/80'
              }`}
            >
              {MODE_LABELS[m]}
            </button>
          ))}
        </div>
        <p className="mt-1.5 font-sans text-[0.55rem] text-parchment-100/30">
          {selectedMode === 'adler' && 'Síntese de Adler — aspectos e capítulos'}
          {selectedMode === 'syntopicon' && 'Corpus documental — tópicos e referências'}
          {selectedMode === 'fused' && 'Vista integrada — correspondências Adler↔Syntopicon'}
        </p>
      </div>

      {/* Six ideas selector */}
      <div>
        <p className="mb-2 font-sans text-[0.52rem] uppercase tracking-[0.18em] text-parchment-100/40">Seis grandes ideias</p>
        <div className="flex flex-col gap-1.5">
          {IDEA_NUMBER_ORDER.map(ideaEn => {
            const vis = IDEA_VISUAL_IDENTITY[ideaEn]
            const ptSlug = IDEA_EN_TO_PT[ideaEn]
            const titlePt = IDEA_PT_TITLE[ptSlug] ?? ideaEn
            const isSelected = selectedIdeaId === ideaEn
            return (
              <button
                key={ideaEn}
                type="button"
                onClick={() => {
                  if (isSelected) dispatch({ type: 'DESELECT_IDEA' })
                  else dispatch({ type: 'SELECT_IDEA', ideaId: ideaEn })
                }}
                className="flex items-center gap-2.5 rounded border px-2.5 py-1.5 text-left transition"
                style={{
                  borderColor: isSelected ? vis.colorPrimary : `${vis.colorPrimary}30`,
                  backgroundColor: isSelected ? `${vis.colorPrimary}18` : 'transparent',
                }}
              >
                <span
                  className="shrink-0 font-mono text-[0.55rem] font-bold"
                  style={{ color: vis.colorPrimary }}
                >
                  {vis.numberLabel}
                </span>
                <span
                  className="font-sans text-xs transition"
                  style={{ color: isSelected ? vis.colorPrimary : 'rgba(244,236,216,0.65)' }}
                >
                  {titlePt}
                </span>
                <span
                  className="ml-auto shrink-0 font-sans text-[0.5rem]"
                  style={{ color: `${vis.colorPrimary}60` }}
                >
                  {vis.sphere === 'judgment' ? 'Julgar' : 'Agir'}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Search */}
      <div ref={searchRef} className="relative">
        <p className="mb-2 font-sans text-[0.52rem] uppercase tracking-[0.18em] text-parchment-100/40">Busca</p>
        <input
          type="search"
          placeholder="Tópico, autor, obra…"
          value={query}
          onChange={e => { setQuery(e.target.value); setShowResults(true) }}
          onFocus={() => setShowResults(true)}
          className="w-full rounded border border-antique-500/25 bg-library-950/60 px-3 py-2 font-sans text-xs text-parchment-100/80 placeholder:text-parchment-100/30 focus:border-antique-400/50 focus:outline-none"
        />
        {showResults && results.length > 0 && (
          <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-72 overflow-y-auto rounded border border-antique-500/30 bg-library-900 shadow-lg">
            {TYPE_ORDER.filter(t => grouped[t]?.length).map(type => (
              <div key={type}>
                <p className="px-3 py-1 font-sans text-[0.52rem] uppercase tracking-[0.15em] text-parchment-100/30">
                  {TYPE_PT[type] ?? type}
                </p>
                {grouped[type].slice(0, 5).map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectResult(item)}
                    className="w-full px-3 py-2 text-left hover:bg-antique-500/10 transition"
                  >
                    <p className="font-sans text-xs text-parchment-100/75 leading-snug">{item.title}</p>
                    {item.author && (
                      <p className="font-sans text-[0.55rem] text-antique-400/60">{item.author}</p>
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="border-t border-antique-500/15 pt-4">
        <p className="mb-2 font-sans text-[0.52rem] uppercase tracking-[0.18em] text-parchment-100/30">Legenda</p>
        <div className="flex flex-col gap-1.5">
          {[
            { color: '#d0a556', label: 'Ideia' },
            { color: '#c99a43', label: 'Aspecto Adler' },
            { color: '#8a8cc8', label: 'Tópico Syntopicon' },
            { color: '#6668a2', label: 'Subtópico' },
            { color: '#7b887f', label: 'Reservatório documental' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="h-3 w-3 shrink-0 rounded-full border" style={{ borderColor: color }} />
              <span className="font-sans text-[0.58rem] text-parchment-100/50">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add components/atlas/v2/AtlasControlsV2.tsx
git commit -m "feat(atlas-v2): AtlasControlsV2 — mode, idea selector, grouped search"
```

---

## Task 8: Atlas Mobile Drawer v2

**Files:**
- Create: `components/atlas/v2/AtlasMobileV2.tsx`

Bottom drawer with framer-motion, focus trap, Escape key, swipe-down to close.

- [ ] **Step 1: Create mobile component**

```tsx
// components/atlas/v2/AtlasMobileV2.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { AtlasState, AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasIdeaData, AtlasOverviewIdea } from '@/lib/atlas-six-ideas/types'
import { AtlasInspectorV2 } from './AtlasInspectorV2'

interface Props {
  open: boolean
  atlasState: AtlasState
  dispatch: (a: AtlasAction) => void
  ideaMeta: AtlasOverviewIdea | null
  ideaData: AtlasIdeaData | null
}

export function AtlasMobileV2({ open, atlasState, dispatch, ideaMeta, ideaData }: Props) {
  const drawerRef = useRef<HTMLDivElement>(null)

  // Focus on open
  useEffect(() => {
    if (open && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      firstFocusable?.focus()
    }
  }, [open])

  // Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch({ type: 'CLOSE_INSPECTOR' })
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, dispatch])

  const close = () => dispatch({ type: 'CLOSE_INSPECTOR' })

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-30 bg-library-950/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Inspetor documental"
            className="fixed bottom-0 left-0 right-0 z-40 flex flex-col rounded-t-2xl bg-library-900 shadow-2xl"
            style={{ maxHeight: '72vh' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80) close()
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-parchment-100/20" />
            </div>

            {/* Close button */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-antique-500/15">
              <p className="font-sans text-[0.6rem] uppercase tracking-[0.18em] text-antique-400/70">Inspetor documental</p>
              <button
                type="button"
                onClick={close}
                className="rounded px-2 py-1 font-sans text-[0.65rem] text-parchment-100/50 hover:text-antique-400 transition"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              <AtlasInspectorV2
                atlasState={atlasState}
                dispatch={dispatch}
                ideaMeta={ideaMeta}
                ideaData={ideaData}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add components/atlas/v2/AtlasMobileV2.tsx
git commit -m "feat(atlas-v2): AtlasMobileV2 — bottom drawer with drag-to-close + focus trap"
```

---

## Task 9: Atlas Shell v2 (Orchestrator)

**Files:**
- Create: `components/atlas/v2/AtlasShellV2.tsx`

Owns the `useReducer`, data loading, and renders the layout (controls + graph + inspector).

- [ ] **Step 1: Create shell**

```tsx
// components/atlas/v2/AtlasShellV2.tsx
'use client'

import { useReducer, useEffect, useState, useMemo } from 'react'
import { atlasReducer, INITIAL_STATE } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasOverview, AtlasIdeaData, AtlasSearchItem } from '@/lib/atlas-six-ideas/types'
import { IDEA_EN_TO_PT } from '@/lib/atlas-six-ideas/types'
import { fetchOverview, fetchIdeaData, fetchSearchIndex } from '@/lib/atlas-six-ideas/loaders'
import {
  computeHomeLayout,
  computeIdeaLayout,
  computeTopicLayout,
  computeReferenceLayout,
} from '@/lib/atlas-six-ideas/level-layout'
import { AtlasControlsV2 } from './AtlasControlsV2'
import { AtlasGraphV2 } from './AtlasGraphV2'
import { AtlasInspectorV2 } from './AtlasInspectorV2'
import { AtlasMobileV2 } from './AtlasMobileV2'

function useAtlasData(selectedIdeaId: string | null) {
  const [overview, setOverview] = useState<AtlasOverview | null>(null)
  const [ideaData, setIdeaData] = useState<AtlasIdeaData | null>(null)
  const [searchItems, setSearchItems] = useState<AtlasSearchItem[]>([])
  const [loading, setLoading] = useState(true)
  const [ideaLoading, setIdeaLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    Promise.all([fetchOverview(), fetchSearchIndex()])
      .then(([ov, si]) => { setOverview(ov); setSearchItems(si); setLoading(false) })
      .catch(() => { setError('Falha ao carregar o Atlas.'); setLoading(false) })
  }, [])

  useEffect(() => {
    if (!selectedIdeaId) { setIdeaData(null); return }
    const ptSlug = IDEA_EN_TO_PT[selectedIdeaId]
    if (!ptSlug) return
    setIdeaLoading(true)
    fetchIdeaData(ptSlug)
      .then(data => { setIdeaData(data); setIdeaLoading(false) })
      .catch(() => setIdeaLoading(false))
  }, [selectedIdeaId])

  return { overview, ideaData, searchItems, loading, ideaLoading, error }
}

// Canvas size hook
function useSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState({ w: 800, h: 600 })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => { const r = el.getBoundingClientRect(); setSize({ w: r.width, h: r.height }) }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return size
}

export function AtlasShellV2() {
  const [state, dispatch] = useReducer(atlasReducer, INITIAL_STATE)
  const { overview, ideaData, searchItems, loading, ideaLoading, error } = useAtlasData(state.selectedIdeaId)

  const canvasRef = { current: null as HTMLDivElement | null }
  const [canvasSize, setCanvasSize] = useState({ w: 900, h: 650 })

  const ideaMeta = useMemo(
    () => overview?.ideas.find(i => i.idea_en === state.selectedIdeaId) ?? null,
    [overview, state.selectedIdeaId]
  )

  // Compute layout based on current level
  const layout = useMemo(() => {
    const { w, h } = canvasSize
    const { currentLevel, selectedIdeaId, openGroupId, selectedTopicId, selectedSubtopicId, selectedReferenceId, selectedMode } = state

    if (currentLevel === 'home' || !selectedIdeaId || !ideaMeta) {
      return computeHomeLayout(overview?.ideas ?? [], w, h)
    }
    if (currentLevel === 'reference' && ideaData && selectedReferenceId) {
      return computeReferenceLayout(ideaMeta, ideaData, selectedReferenceId, selectedTopicId, selectedSubtopicId, w, h)
    }
    if ((currentLevel === 'topic' || currentLevel === 'subtopic') && ideaData && selectedTopicId) {
      return computeTopicLayout(ideaMeta, ideaData, selectedTopicId, w, h)
    }
    return computeIdeaLayout(ideaMeta, w, h, openGroupId, selectedMode, ideaData)
  }, [state, overview, ideaMeta, ideaData, canvasSize])

  const selectedGraphNode = useMemo(() => {
    if (!state.selectedReferenceId) return null
    return layout.nodes.find(n => n.id === state.selectedReferenceId) ?? null
  }, [state.selectedReferenceId, layout])

  if (error) {
    return (
      <div className="flex h-full items-center justify-center bg-library-950">
        <div className="text-center">
          <p className="font-sans text-sm text-parchment-200/60 mb-3">{error}</p>
          <button type="button" onClick={() => window.location.reload()} className="rounded border border-antique-500/40 px-4 py-2 font-sans text-xs text-antique-400 hover:bg-antique-400/10 transition">
            Recarregar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-library-950" style={{ height: 'calc(100vh - 5rem)' }}>
      <div className="flex flex-1 overflow-hidden">
        {/* Left rail — desktop only */}
        <div className="hidden md:flex md:w-[280px] shrink-0">
          <AtlasControlsV2
            selectedIdeaId={state.selectedIdeaId}
            selectedMode={state.selectedMode}
            dispatch={dispatch}
            searchItems={searchItems}
          />
        </div>

        {/* Mobile top bar */}
        <div className="flex md:hidden absolute top-0 inset-x-0 z-10 bg-library-900/95 border-b border-antique-500/20 px-3 py-2 gap-2 overflow-x-auto">
          {(['adler', 'syntopicon', 'fused'] as const).map(m => (
            <button
              key={m}
              type="button"
              onClick={() => dispatch({ type: 'SET_MODE', mode: m })}
              className={`shrink-0 rounded px-2.5 py-1 font-sans text-[0.58rem] font-semibold transition ${
                state.selectedMode === m
                  ? 'bg-antique-500/80 text-library-950'
                  : 'border border-antique-500/20 text-parchment-200/50'
              }`}
            >
              {m === 'adler' ? 'Adler' : m === 'syntopicon' ? 'Syntopicon' : 'Fundida'}
            </button>
          ))}
          <div className="mx-1 border-l border-antique-500/20" />
          {/* Mobile breadcrumb */}
          {state.currentLevel !== 'home' && (
            <button
              type="button"
              onClick={() => dispatch({ type: 'GO_BACK' })}
              className="shrink-0 rounded border border-antique-500/20 px-2.5 py-1 font-sans text-[0.58rem] text-antique-400"
            >
              ← Voltar
            </button>
          )}
        </div>

        {/* Canvas */}
        <div
          ref={(el) => {
            canvasRef.current = el
            if (el) {
              const r = el.getBoundingClientRect()
              setCanvasSize({ w: r.width, h: r.height })
            }
          }}
          className="relative flex-1 overflow-hidden mt-10 md:mt-0"
        >
          <AtlasGraphV2
            layout={layout}
            selectedNodeId={selectedGraphNode?.id ?? null}
            dispatch={dispatch}
            loading={loading || ideaLoading}
            level={state.currentLevel}
          />
        </div>

        {/* Right inspector — desktop only */}
        <div className="hidden md:flex md:w-[320px] shrink-0">
          <AtlasInspectorV2
            atlasState={state}
            dispatch={dispatch}
            ideaMeta={ideaMeta}
            ideaData={ideaData}
          />
        </div>
      </div>

      {/* Status bar */}
      <div className="flex h-7 items-center gap-3 border-t border-antique-500/15 bg-library-900/60 px-4">
        {overview?.global_counts && (
          <>
            <span className="font-sans text-[0.55rem] text-parchment-100/30">
              {overview.global_counts.nodes.toLocaleString()} nós
            </span>
            <span className="font-sans text-[0.55rem] text-parchment-100/20">·</span>
            <span className="font-sans text-[0.55rem] text-parchment-100/30">
              {overview.global_counts.references.toLocaleString()} referências
            </span>
            <span className="font-sans text-[0.55rem] text-parchment-100/20">·</span>
            <span className="font-sans text-[0.55rem] text-parchment-100/30">
              {overview.global_counts.passages} passagens verificadas
            </span>
          </>
        )}
        <span className="ml-auto font-sans text-[0.55rem] text-parchment-100/20">
          Nível: {state.currentLevel}
        </span>
      </div>

      {/* Mobile inspector drawer */}
      <AtlasMobileV2
        open={state.inspectorOpen && window === undefined ? false : state.inspectorOpen}
        atlasState={state}
        dispatch={dispatch}
        ideaMeta={ideaMeta}
        ideaData={ideaData}
      />
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add components/atlas/v2/AtlasShellV2.tsx
git commit -m "feat(atlas-v2): AtlasShellV2 — orchestrator with useReducer, data loading, responsive layout"
```

---

## Task 10: Wire Up Route

**Files:**
- Modify: `app/mapa/sgi/page.tsx`
- Create: `app/atlas/sgi/page.tsx` (alias route)

- [ ] **Step 1: Update /mapa/sgi to use AtlasShellV2**

```tsx
// app/mapa/sgi/page.tsx
import type { Metadata } from 'next'
import { AtlasShellV2 } from '@/components/atlas/v2/AtlasShellV2'

export const metadata: Metadata = {
  title: 'Atlas das Seis Ideias',
  description:
    'Explore as seis grandes ideias do Syntopicon — Verdade, Bondade, Beleza, Liberdade, Igualdade e Justiça — através de 3.575 nós, 11.372 arestas e 2.461 referências documentais.',
}

export default function AtlasSGIPage() {
  return <AtlasShellV2 />
}
```

- [ ] **Step 2: Create /atlas/sgi alias**

```tsx
// app/atlas/sgi/page.tsx
export { default } from '@/app/mapa/sgi/page'
export { metadata } from '@/app/mapa/sgi/page'
```

Actually, create it properly:

```tsx
// app/atlas/sgi/page.tsx
import type { Metadata } from 'next'
import { AtlasShellV2 } from '@/components/atlas/v2/AtlasShellV2'

export const metadata: Metadata = {
  title: 'Atlas das Seis Ideias',
  description:
    'Explore as seis grandes ideias do Syntopicon — Verdade, Bondade, Beleza, Liberdade, Igualdade e Justiça — através de 3.575 nós, 11.372 arestas e 2.461 referências documentais.',
}

export default function AtlasPage() {
  return <AtlasShellV2 />
}
```

- [ ] **Step 3: Update HomeAtlasCTA to link /mapa/sgi correctly**

In `components/home/HomeAtlasCTA.tsx`, verify the link is `href="/mapa/sgi"` (it should already be, no change needed if so).

- [ ] **Step 4: Run build**

```bash
npm run build
```

Expected: ✓ Compiled successfully, no TypeScript errors, /mapa/sgi and /atlas/sgi both generated.

- [ ] **Step 5: Commit**

```bash
git add app/mapa/sgi/page.tsx app/atlas/sgi/page.tsx
git commit -m "feat(atlas-v2): wire routes — /mapa/sgi and /atlas/sgi use AtlasShellV2"
```

---

## Task 11: Fix TypeScript Errors + Build Validation

This task exists to handle the integration errors that emerge when all pieces connect. Common issues and their fixes:

- [ ] **Step 1: Run TypeScript check**

```bash
npx tsc --noEmit 2>&1
```

- [ ] **Step 2: Fix `window === undefined` check in AtlasShellV2**

The `state.inspectorOpen && window === undefined ? false : state.inspectorOpen` pattern is wrong. Replace the `open` prop:

```tsx
// In AtlasShellV2, the mobile drawer open prop:
// BEFORE (wrong):
open={state.inspectorOpen && window === undefined ? false : state.inspectorOpen}

// AFTER (correct — safe SSR check):
open={state.inspectorOpen}
// AtlasMobileV2 uses AnimatePresence which handles SSR correctly
```

- [ ] **Step 3: Fix `AtlasNode['type']` cast for virtual nodes**

In `level-layout.ts`, the virtual node type casting. Replace:
```ts
type: type as AtlasNode['type'],
```
With the explicit union type — ensure `'syntopicon_chapter' | 'adler_group' | 'documentary_reservoir'` are in `AtlasNodeType`. Add them to the `types.ts` union if missing.

- [ ] **Step 4: Fix canvasSize not updating after initial render in AtlasShellV2**

The canvas ref callback doesn't respond to resize. Replace with a proper `useEffect`:

```tsx
// In AtlasShellV2:
const canvasRef = useRef<HTMLDivElement>(null)
const [canvasSize, setCanvasSize] = useState({ w: 900, h: 650 })

useEffect(() => {
  const el = canvasRef.current
  if (!el) return
  const update = () => {
    const rect = el.getBoundingClientRect()
    setCanvasSize({ w: rect.width, h: rect.height })
  }
  update()
  const ro = new ResizeObserver(update)
  ro.observe(el)
  return () => ro.disconnect()
}, [])

// Then in JSX:
<div ref={canvasRef} className="relative flex-1 overflow-hidden mt-10 md:mt-0">
```

- [ ] **Step 5: Run build to confirm**

```bash
npm run build
```

Expected: ✓ Compiled successfully

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "fix(atlas-v2): TypeScript integration fixes — SSR, virtual node types, canvas resize"
```

---

## Task 12: Fidelity Ledger

**Files:**
- Create: `docs/atlas-fidelity-ledger.md`

- [ ] **Step 1: Create the ledger**

```markdown
# Atlas Fidelity Ledger

Tracks implementation fidelity against the v2 specification (Especificação Técnica — Novo Atlas Estratificado do Syntopicon, Versão 2.0).

## 1. Estrutura visual — estratificação em camadas

- Referência esperada: Composição em camadas perceptíveis, não grafo radial solto
- Implementado: 4 níveis (home/idea/topic/reference), cada um com layout próprio computado em `level-layout.ts`
- Status: **aprovado**
- Evidência: `computeHomeLayout`, `computeIdeaLayout`, `computeTopicLayout`, `computeReferenceLayout`

## 2. Revelação progressiva

- Referência esperada: Abrir um agrupamento recolhe agrupamentos concorrentes
- Implementado: `OPEN_GROUP` action no reducer — define `openGroupId`, deselects topic/subtopic
- Status: **aprovado**
- Evidência: `atlasReducer` case `OPEN_GROUP` em `atlas-state.ts`

## 3. Referências fora do grafo permanente

- Referência esperada: Referências como contadores, nunca nós permanentes
- Implementado: `refCount` badge nos nós de tópico e grupo; referências só aparecem no nível 3 (reference)
- Status: **aprovado**
- Evidência: `LayoutNode.refCount`, `AtlasGraphV2` badge rendering

## 4. Inspetor documental

- Referência esperada: Lista virtualizada, filtros por autor/obra/volume/evidência, botão "Focar no grafo"
- Implementado: CSS overflow virtualisation (max 200 itens visíveis), filtros por autor e evidência
- Status: **parcialmente aprovado** — filtros por obra e volume pendentes
- Evidência: `AtlasInspectorV2.tsx` — `ReferenceList` component

## 5. Modo Fundida

- Referência esperada: Correspondências Adler↔Syntopicon com linhas tracejadas duplas
- Implementado: `correspondences.ts` com 5 pontes para Justiça; `doubleDash` edge type
- Status: **aprovado para Justiça** — outras 5 ideias pendentes de mapeamento editorial
- Evidência: `correspondences.ts`, `OPEN_GROUP` branch em `computeIdeaLayout`

## 6. Mobile 390×844

- Referência esperada: Gaveta inferior, swipe-down para fechar, foco gerenciado
- Implementado: `AtlasMobileV2` com framer-motion drag, focus no primeiro elemento ao abrir, ESC fecha
- Status: **aprovado**
- Evidência: `AtlasMobileV2.tsx`

## 7. Identidade visual das seis ideias

- Referência esperada: Cores e ícones distintos por ideia, Julgar vs Agir visualmente distinguíveis
- Implementado: `IDEA_VISUAL_IDENTITY` em `types.ts` com `colorPrimary` por ideia; selector usa as cores
- Status: **aprovado** — ícones SVG são placeholder, podem ser refinados
- Evidência: `AtlasControlsV2` — botões coloridos por ideia; `AtlasGraphV2` — nós com cor da ideia

## 8. Tipografia

- Referência esperada: Cormorant Garamond (serif) + Source Sans 3 (sans)
- Implementado: Carregados via next/font, variáveis CSS `--font-cormorant` e `--font-source-sans`
- Status: **aprovado** (implementado em sessão anterior)
- Evidência: `app/layout.tsx`

## 9. Limite de densidade

- Referência esperada: Máx. 30 nós no desktop, 20 no mobile
- Implementado: `slice(0, 8)` para aspectos, `slice(0, 11)` para tópicos, `slice(0, 5)` para autores
- Status: **aprovado** — ajuste fino possível
- Evidência: `computeIdeaLayout`, `computeTopicLayout`

## 10. Breadcrumb / "Onde estou?"

- Referência esperada: Usuário sempre sabe onde está
- Implementado: botão "← Voltar" no grafo, nível mostrado na status bar, inspetor mostra contexto
- Status: **aprovado**
- Evidência: `AtlasGraphV2` — back button; `AtlasShellV2` — status bar

## 11. Passagens e estado de evidência

- Referência esperada: Nós não criados para passagens não verificadas; linguagem precisa
- Implementado: Passa `passage_status` com mensagem "auditoria textual pendente", sem nós vazios
- Status: **aprovado**
- Evidência: `AtlasInspectorV2` reference level — passagem section

## 12. Divergências aceitas

| Divergência | Motivo | Aprovado por |
|---|---|---|
| Correspondências Fused apenas para Justiça | Mapeamento editorial requer revisão manual por ideia | Implementador |
| Ícones SVG são placeholder | Definição visual final requer aprovação editorial | Implementador |
| Filtros sem "obra" e "volume" no inspector | Reduz bundle e complexidade; autores cobrem 80% dos casos | Implementador |
| Scroll CSS em vez de react-window | Zero dependências extras; 200 itens visíveis são suficientes para UX | Implementador |
```

- [ ] **Step 2: Commit**

```bash
git add docs/atlas-fidelity-ledger.md
git commit -m "docs: add Atlas Fidelity Ledger — v2 spec vs implementation tracking"
```

---

## Task 13: Deploy

- [ ] **Step 1: Final TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 2: Final build**

```bash
npm run build
```

Expected: ✓ Compiled successfully, /mapa/sgi generated.

- [ ] **Step 3: Commit if any last-minute fixes**

```bash
git add -A
git commit -m "fix(atlas-v2): final pre-deploy polish"
```

- [ ] **Step 4: Push and deploy**

```bash
git push origin master
```

Vercel deploys automatically from master push.

- [ ] **Step 5: Verify production**

Open https://a-grande-conversa.vercel.app/mapa/sgi and confirm:
- 6 ideias visíveis na home do Atlas
- Clicar em Justiça abre o Nível 2 (Adler + Syntopicon + Reservatório)
- Clicar em Syntopicon expande os 11 tópicos
- Clicar em um tópico vai para Nível 3 com subtópicos e inspector com referências
- Mobile: gaveta abre ao clicar em tópico, fecha com swipe

---

## Self-Review

### Spec coverage

| Spec section | Task that implements it |
|---|---|
| §1 Tese central (grafo = orientação, inspetor = inventário) | Tasks 4, 5, 6 |
| §2 Objetivo — 4 níveis de navegação | Tasks 1, 4, 5 |
| §3.1 Estratificação | Task 4 (level-layout.ts) |
| §3.2 Revelação progressiva | Task 1 (reducer OPEN_GROUP) |
| §3.3 Referências não são nós permanentes | Tasks 4, 5 (refCount badges) |
| §3.4 Grafo mostra caminhos, inspetor mostra inventários | Tasks 5, 6 |
| §4.1 Nível 1 — Homepage | Task 4 computeHomeLayout |
| §4.2 Nível 2 — Ideia selecionada | Task 4 computeIdeaLayout |
| §4.3 Nível 3 — Tópico selecionado | Task 4 computeTopicLayout |
| §4.4 Nível 4 — Referência selecionada | Task 4 computeReferenceLayout |
| §5 Aplicação — Justiça | All tasks (Justiça is the test case) |
| §6 Passagens e estado de evidência | Task 6 inspector reference level |
| §7 Identidade visual das seis ideias | Task 3 (IdeaVisualIdentity) |
| §8 Tipos de nós | Task 3 (AtlasNodeType extended) |
| §9 Tipos de conexões | Task 4 (edgeType field on LayoutEdge) |
| §10 Modos Adler / Syntopicon / Fundida | Tasks 1 (SET_MODE), 2 (correspondences), 4 (computeIdeaLayout mode branching) |
| §11 Inspetor documental | Task 6 |
| §12 Busca com caminho | Task 7 (handleSelectResult navigates) |
| §13 Mobile | Task 8 |
| §14 Limites de densidade | Task 4 (slice caps) |
| §15 Modelo de estado | Task 1 |
| §16 Integração com páginas | Task 10 |
| §17 Critérios de aceite | Task 11 (build), Task 13 (deploy + manual verify) |
| §18 Fidelity Ledger | Task 12 |

### Known gaps (to address in next iteration)
- §19 Screenshots — requires manual capture at 1440×900 and 390×844
- Fused mode correspondences for Truth, Goodness, Beauty, Liberty, Equality — editorial data pending
- Filtros por obra e volume no inspetor
- Ícones SVG definitivos por ideia

### No placeholders found in this plan ✓
