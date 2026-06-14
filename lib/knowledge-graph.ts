import type { ReferenceBook, SyntopiconIdea } from "@/lib/types";

export type KnowledgeGraphNode = {
  slug: string;
  name: string;
  domain: string;
  domainName: string;
  question: string;
  thinkerCount: number;
  bookCount: number;
};

export type KnowledgeGraphLink = {
  source: string;
  target: string;
  score: number;
  sharedThinkers: string[];
  sharedBooks: Array<{
    slug: string;
    title: string;
  }>;
};

export type KnowledgeGraph = {
  nodes: KnowledgeGraphNode[];
  links: KnowledgeGraphLink[];
};

type CandidateLink = KnowledgeGraphLink & {
  key: string;
};

// The client uses a smaller subset in the overview, but keeps a richer
// neighborhood available when the reader focuses an individual idea.
const connectionLimitPerIdea = 8;

export function buildKnowledgeGraph(
  ideas: SyntopiconIdea[],
  books: ReferenceBook[],
): KnowledgeGraph {
  const booksByIdea = new Map<string, ReferenceBook[]>(
    ideas.map((idea) => [idea.slug, []]),
  );

  for (const book of books) {
    for (const ideaSlug of new Set(book.ideas)) {
      booksByIdea.get(ideaSlug)?.push(book);
    }
  }

  const candidates: CandidateLink[] = [];

  for (let sourceIndex = 0; sourceIndex < ideas.length; sourceIndex += 1) {
    const source = ideas[sourceIndex];
    const sourceThinkers = new Map(
      source.thinkers.map((thinker) => [thinker.id, thinker.name]),
    );
    const sourceBooks = new Map(
      (booksByIdea.get(source.slug) ?? []).map((book) => [book.slug, book]),
    );

    for (
      let targetIndex = sourceIndex + 1;
      targetIndex < ideas.length;
      targetIndex += 1
    ) {
      const target = ideas[targetIndex];
      const sharedThinkers = target.thinkers
        .filter((thinker) => sourceThinkers.has(thinker.id))
        .map((thinker) => thinker.name);
      const sharedBooks = (booksByIdea.get(target.slug) ?? [])
        .filter((book) => sourceBooks.has(book.slug))
        .map((book) => ({ slug: book.slug, title: book.title }));

      if (sharedBooks.length === 0 && sharedThinkers.length < 3) continue;

      candidates.push({
        key: `${source.slug}|${target.slug}`,
        source: source.slug,
        target: target.slug,
        score: sharedBooks.length * 3 + sharedThinkers.length,
        sharedThinkers,
        sharedBooks,
      });
    }
  }

  const selectedLinks = new Map<string, CandidateLink>();

  for (const idea of ideas) {
    candidates
      .filter((link) => link.source === idea.slug || link.target === idea.slug)
      .sort(
        (left, right) =>
          right.score - left.score ||
          right.sharedBooks.length - left.sharedBooks.length ||
          right.sharedThinkers.length - left.sharedThinkers.length,
      )
      .slice(0, connectionLimitPerIdea)
      .forEach((link) => selectedLinks.set(link.key, link));
  }

  return {
    nodes: ideas.map((idea) => ({
      slug: idea.slug,
      name: idea.name,
      domain: idea.domain,
      domainName: idea.domainName,
      question: idea.question,
      thinkerCount: idea.thinkers.length,
      bookCount: booksByIdea.get(idea.slug)?.length ?? 0,
    })),
    links: Array.from(selectedLinks.values()).map(({ key: _key, ...link }) => link),
  };
}

// ─── Re-export enrichment layer (debates, concepts, quotes, evidence) ─────────
// Note: KnowledgeGraph from ./knowledge-graph/types is intentionally not
// re-exported here to avoid a name collision with the display KnowledgeGraph
// type defined above.

export type {
  EvidenceStatus,
  Quote,
  CuratorNote,
  NodeType,
  RelationType,
  KnowledgeNode,
  KnowledgeRelation,
  Debate,
  BridgeConcept,
  IdeaEnrichment,
  PlanStepEnrichment,
} from "./knowledge-graph/types";
export { debates, getDebate } from "./knowledge-graph/debates";
export { bridgeConcepts, getConcept } from "./knowledge-graph/concepts";
export {
  ideaEnrichments,
  planStepEnrichments,
  getIdeaEnrichment,
  getPlanStepEnrichment,
} from "./knowledge-graph/enrichments";
export { validateKnowledgeGraph } from "./knowledge-graph/validate";
export type { ValidationReport } from "./knowledge-graph/validate";
