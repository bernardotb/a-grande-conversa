import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputPath = path.join(root, "data", "reference-plans.json");
const cachePath = path.join(root, "work", "plan-translation-cache-ptbr.json");
const ideaIndex = JSON.parse(
  await fs.readFile(path.join(root, "data", "idea-index.json"), "utf8")
);
const ideaSlugMap = new Map(ideaIndex.map((idea) => [idea.originalSlug, idea.slug]));

const plans = [
  {
    originalSlug: "start-here",
    slug: "ponto-de-partida",
    title: "O ponto de partida dos Grandes Livros",
    subtitle: "Um primeiro caminho pela Grande Conversa",
    description: "Um percurso por vinte Grandes Livros para leitores que desejam um lugar claro para começar.",
    workCount: 20
  },
  {
    originalSlug: "faith-doubt-and-the-soul",
    slug: "fe-duvida-e-alma",
    title: "Fé, Dúvida e Alma",
    subtitle: "Criação, morte, graça, dúvida e juízo",
    description: "Criação, morte, graça, dúvida e juízo se encontram enquanto a crença religiosa responde às suas testemunhas mais exigentes.",
    workCount: 12
  },
  {
    originalSlug: "how-we-know",
    slug: "como-conhecemos",
    title: "Como Conhecemos",
    subtitle: "Prova, experiência, medida e história natural",
    description: "Euclides demonstra. Bacon coleta. Newton mede. Darwin reúne pequenas diferenças até que a natureza começa a parecer histórica.",
    workCount: 12
  },
  {
    originalSlug: "power-law-and-the-citizen",
    slug: "poder-lei-e-cidadao",
    title: "Poder, Lei e Cidadão",
    subtitle: "Da proibição do sepultamento à liberdade de expressão",
    description: "Acompanhe o argumento da proibição do sepultamento à liberdade de expressão, com cada obra testando o que os cidadãos devem à lei e o que a lei deve a eles.",
    workCount: 12
  }
];

function decodeHtml(value = "") {
  return value
    .replace(/<!--.*?-->/gs, "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function textContent(value = "") {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(?:p|div|li)>/gi, " ")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/\s+/g, " ")
    .replace(/(\d+)\s+\./, "$1.")
    .trim();
}

function normalizePtBr(value = "") {
  return value
    .replace(/\bTrabalho completo\b/g, "Obra completa")
    .replace(/\bOdisséia\b/g, "Odisseia")
    .replace(/\bAC\b|\baC\b/g, "a.C.")
    .replace(/^(\d+)\.(?=\S)/, "$1. ");
}

async function fetchText(url, attempts = 4) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "A-Grande-Conversa/1.0 editorial sync" }
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
  throw lastError;
}

async function loadCache() {
  try {
    return JSON.parse(await fs.readFile(cachePath, "utf8"));
  } catch {
    return {};
  }
}

async function translateText(text, cache) {
  if (!text || cache[text]) return cache[text] ?? text;
  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt-BR&dt=t&q=" +
    encodeURIComponent(text);
  const body = JSON.parse(await fetchText(url, 5));
  const translated = body[0].map((part) => part[0]).join("").trim();
  cache[text] = translated;
  return translated;
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

function parsePlan(html) {
  const planStart = html.indexOf(">The plan</h2>");
  const planArea = html.slice(planStart);
  const sections = [...planArea.matchAll(/<section class="border-t border-border pt-8">([\s\S]*?)<\/section>/g)];

  return sections.map((match, index) => {
    const section = match[1];
    const heading = textContent(section.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1] ?? "");
    const date = textContent(section.match(/<h3[\s\S]*?<\/h3><p[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? "");
    const labelled = [...section.matchAll(/uppercase text-accent mb-1">([^<]+)<\/p><p>([\s\S]*?)<\/p>/g)];
    const fields = Object.fromEntries(
      labelled.map((item) => [textContent(item[1]), textContent(item[2])])
    );
    const time = textContent(
      section.match(/uppercase text-secondary mb-3">Time<\/p><p[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? ""
    );
    const note = textContent(
      section.match(/<p class="mt-6 border-l-2[^"]*">([\s\S]*?)<\/p>/)?.[1] ?? ""
    );
    const books = [...section.matchAll(/href="\/books\/([^"]+)"/g)].map((item) => item[1]);
    const ideas = [
      ...new Set(
        [...section.matchAll(/href="\/ideas\/([^"]+)"/g)]
          .map((item) => ideaSlugMap.get(item[1]))
          .filter(Boolean)
      )
    ];

    return {
      number: index + 1,
      heading,
      date,
      format: fields.Format ?? "",
      rationale: fields["Why this work"] ?? "",
      connection:
        fields["Why start here"] ??
        fields["The connection"] ??
        fields["Why end here"] ??
        "",
      time,
      note,
      books,
      ideas
    };
  });
}

async function main() {
  const scraped = [];
  for (const plan of plans) {
    const html = await fetchText(`https://greatconversationmap.com/plans/${plan.originalSlug}`);
    const steps = parsePlan(html);
    console.log(`${plan.title}: ${steps.length} etapas`);
    scraped.push({
      ...plan,
      steps,
      sourceUrl: `https://greatconversationmap.com/plans/${plan.originalSlug}`
    });
  }

  const cache = await loadCache();
  const texts = scraped.flatMap((plan) =>
    plan.steps.flatMap((step) => [
      step.heading,
      step.date,
      step.format,
      step.rationale,
      step.connection,
      step.time,
      step.note
    ])
  );
  const unique = [...new Set(texts.filter(Boolean))].filter((text) => !cache[text]);
  console.log(`Traduzindo ${unique.length} trechos...`);
  await mapLimit(unique, 6, (text) => translateText(text, cache));
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");

  const translated = scraped.map((plan) => ({
    ...plan,
    steps: plan.steps.map((step) => ({
      ...step,
      heading: normalizePtBr(cache[step.heading] ?? step.heading),
      date: normalizePtBr(cache[step.date] ?? step.date),
      format: normalizePtBr(cache[step.format] ?? step.format),
      rationale: normalizePtBr(cache[step.rationale] ?? step.rationale),
      connection: normalizePtBr(cache[step.connection] ?? step.connection),
      time: normalizePtBr(cache[step.time] ?? step.time),
      note: normalizePtBr(cache[step.note] ?? step.note)
    }))
  }));
  await fs.writeFile(outputPath, JSON.stringify(translated, null, 2), "utf8");
  console.log("Planos sincronizados.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
