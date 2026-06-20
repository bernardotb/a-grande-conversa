import type { AtlasOverview, AtlasIdeaData, AtlasSearchItem } from './types'

const cache = new Map<string, Promise<unknown>>()

function fetchCached<T>(url: string): Promise<T> {
  if (!cache.has(url)) {
    cache.set(url, fetch(url).then(r => {
      if (!r.ok) throw new Error(`Failed to load ${url}: ${r.status}`)
      return r.json()
    }))
  }
  return cache.get(url) as Promise<T>
}

export function fetchOverview(): Promise<AtlasOverview> {
  return fetchCached<AtlasOverview>('/data/atlas-six-ideas/overview.json')
}

export function fetchIdeaData(ptSlug: string): Promise<AtlasIdeaData> {
  return fetchCached<AtlasIdeaData>(`/data/atlas-six-ideas/idea-${ptSlug}.json`)
}

export function fetchSearchIndex(): Promise<AtlasSearchItem[]> {
  return fetchCached<AtlasSearchItem[]>('/data/atlas-six-ideas/search-index.json')
}
