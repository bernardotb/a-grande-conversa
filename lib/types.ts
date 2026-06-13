export type Idea = {
  slug: string;
  name: string;
  number: number;
  category: string;
  areas: string[];
  summary: string;
  centralQuestion: string;
  academicExplanation: string[];
  authors: string[];
  books: string[];
  relatedIdeas: string[];
  readingSuggestions: string[];
  keywords: string[];
  status: "complete" | "placeholder";
};

export type Author = {
  slug: string;
  name: string;
  birthDeath: string;
  period: string;
  areas: string[];
  bio: string;
  ideas: string[];
  books: string[];
  portrait: string | null;
  verified: boolean;
};

export type Book = {
  slug: string;
  title: string;
  originalTitle: string;
  author: string;
  period: string;
  year: string;
  areas: string[];
  ideas: string[];
  description: string;
  readingNote: string;
  verified: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  color: string;
};

export type Period = {
  slug: string;
  name: string;
  range: string;
  order: number;
};

export type ReadingPlan = {
  slug: string;
  title: string;
  subtitle: string;
  level: string;
  duration: string;
  description: string;
  featured: boolean;
  steps: Array<{
    week: number;
    book: string;
    section: string;
    focus: string;
  }>;
};

export type Relationship = {
  source: string;
  target: string;
  type: string;
  strength: number;
  label: string;
};

export type SearchItem = {
  type: "Ideia" | "Autor" | "Obra" | "Plano";
  title: string;
  subtitle: string;
  href: string;
  searchText: string;
  category?: string;
  period?: string;
  author?: string;
  areas?: string[];
};

export type SyntopiconThinker = {
  id: string;
  name: string;
  dates: string;
  era: string;
  summary: string;
  respondsTo: string[];
};

export type SyntopiconIdea = {
  originalSlug: string;
  slug: string;
  name: string;
  domain: string;
  domainName: string;
  number: number;
  question: string;
  thinkers: SyntopiconThinker[];
  readingList: string[];
  sourceUrl: string;
};

export type ReferenceBook = {
  slug: string;
  originalTitle: string;
  title: string;
  author: string;
  ideaCount: number;
  description: string[];
  ideas: string[];
  freeUrl: string | null;
  sourceUrl: string;
};

export type ReferencePlan = {
  originalSlug: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  workCount: number;
  sourceUrl: string;
  steps: Array<{
    number: number;
    heading: string;
    date: string;
    format: string;
    rationale: string;
    connection: string;
    time: string;
    note: string;
    books: string[];
    ideas: string[];
  }>;
};
