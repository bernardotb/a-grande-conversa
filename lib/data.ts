import ideasData from "@/data/ideas.json";
import authorsData from "@/data/authors.json";
import booksData from "@/data/books.json";
import categoriesData from "@/data/categories.json";
import plansData from "@/data/reading-plans.json";
import relationshipsData from "@/data/relationships.json";
import periodsData from "@/data/periods.json";
import siteConfigData from "@/data/site-config.json";
import syntopiconData from "@/data/syntopicon.json";
import bookIndexData from "@/data/book-index.json";
import referencePlansData from "@/data/reference-plans.json";
import type {
  Author,
  Book,
  Category,
  Idea,
  Period,
  ReadingPlan,
  Relationship,
  SyntopiconIdea,
  ReferenceBook,
  ReferencePlan
} from "@/lib/types";

export const ideas = ideasData as Idea[];
export const authors = authorsData as Author[];
export const books = booksData as Book[];
export const categories = categoriesData as Category[];
export const readingPlans = plansData as ReadingPlan[];
export const relationships = relationshipsData as Relationship[];
export const periods = periodsData as Period[];
export const siteConfig = siteConfigData;
export const syntopiconIdeas = syntopiconData as SyntopiconIdea[];
export const referenceBooks = bookIndexData as ReferenceBook[];
export const referencePlans = referencePlansData as ReferencePlan[];
export const syntopiconDomains = Array.from(
  new Map(
    syntopiconIdeas.map((idea) => [
      idea.domain,
      { slug: idea.domain, name: idea.domainName }
    ])
  ).values()
);

export const getIdea = (slug: string) => ideas.find((item) => item.slug === slug);
export const getAuthor = (slug: string) => authors.find((item) => item.slug === slug);
export const getBook = (slug: string) => books.find((item) => item.slug === slug);
export const getPlan = (slug: string) =>
  readingPlans.find((item) => item.slug === slug);
export const getCategory = (slug: string) =>
  categories.find((item) => item.slug === slug);
export const getPeriod = (slug: string) =>
  periods.find((item) => item.slug === slug);
export const getSyntopiconIdea = (slug: string) =>
  syntopiconIdeas.find(
    (item) => item.slug === slug || item.originalSlug === slug
  );
export const getReferenceBook = (slug: string) =>
  referenceBooks.find((item) => item.slug === slug);
export const getReferencePlan = (slug: string) =>
  referencePlans.find(
    (item) => item.slug === slug || item.originalSlug === slug
  );

export const resolveAuthors = (slugs: string[]) =>
  slugs.map(getAuthor).filter((item): item is Author => Boolean(item));
export const resolveBooks = (slugs: string[]) =>
  slugs.map(getBook).filter((item): item is Book => Boolean(item));
export const resolveIdeas = (slugs: string[]) =>
  slugs.map(getIdea).filter((item): item is Idea => Boolean(item));
