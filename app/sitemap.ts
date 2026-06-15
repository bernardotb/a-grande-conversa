import type { MetadataRoute } from "next";
import { syntopiconIdeas, referenceBooks, authors, readingPlans } from "@/lib/data";
import { debates, bridgeConcepts } from "@/lib/knowledge-graph";

const BASE_URL = "https://a-grande-conversa.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/ideias`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/debates`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/conceitos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/obras`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/autores`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/planos-de-leitura`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mapa-intelectual`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/busca`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/metodologia-e-fontes`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const ideias: MetadataRoute.Sitemap = syntopiconIdeas.map((idea) => ({
    url: `${BASE_URL}/ideias/${idea.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const debatesUrls: MetadataRoute.Sitemap = debates.map((debate) => ({
    url: `${BASE_URL}/debates/${debate.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const conceitosUrls: MetadataRoute.Sitemap = bridgeConcepts.map((concept) => ({
    url: `${BASE_URL}/conceitos/${concept.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const obrasUrls: MetadataRoute.Sitemap = referenceBooks.map((book) => ({
    url: `${BASE_URL}/obras/${book.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const autoresUrls: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${BASE_URL}/autores/${author.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const planosUrls: MetadataRoute.Sitemap = readingPlans.map((plan) => ({
    url: `${BASE_URL}/planos-de-leitura/${plan.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [
    ...statics,
    ...ideias,
    ...debatesUrls,
    ...conceitosUrls,
    ...obrasUrls,
    ...autoresUrls,
    ...planosUrls,
  ];
}
