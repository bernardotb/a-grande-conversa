import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ideaIndex = JSON.parse(
  await fs.readFile(path.join(root, "data", "idea-index.json"), "utf8")
);
const cachePath = path.join(root, "work", "translation-cache-ptbr.json");
const outputPath = path.join(root, "data", "syntopicon.json");

const domainNames = {
  etica: "Ética",
  politica: "Política",
  "teologia-e-metafisica": "Teologia e Metafísica",
  metafisica: "Metafísica",
  "eternidade-e-infinito": "Eternidade e Infinito",
  epistemologia: "Epistemologia",
  "logica-e-metodo": "Lógica e Método",
  "filosofia-e-pratica": "Filosofia e Prática",
  "estetica-e-historia": "Estética e História",
  "vida-e-natureza": "Vida e Natureza",
  "ciencias-naturais": "Ciências Naturais"
};

const eraNames = {
  "Ancient Greek": "Grécia Antiga",
  "Hellenistic/Roman": "Período Helenístico e Romano",
  "Patristic/Medieval": "Patrística e Idade Média",
  "Renaissance/Early Modern": "Renascimento e Primeira Modernidade",
  Enlightenment: "Iluminismo",
  "19th Century": "Século XIX",
  "20th Century": "Século XX",
  Modern: "Modernidade"
};

const knownEras = Object.keys(eraNames);
const authorNames = {
  Aeschylus: "Ésquilo",
  Sophocles: "Sófocles",
  Plato: "Platão",
  Aristotle: "Aristóteles",
  Homer: "Homero",
  Herodotus: "Heródoto",
  Thucydides: "Tucídides",
  Virgil: "Virgílio",
  Cicero: "Cícero",
  Lucretius: "Lucrécio",
  Epictetus: "Epicteto",
  Plotinus: "Plotino",
  "Marcus Aurelius": "Marco Aurélio",
  Augustine: "Agostinho de Hipona",
  "Thomas Aquinas": "Tomás de Aquino",
  Aquinas: "Tomás de Aquino",
  Machiavelli: "Maquiavel",
  "René Descartes": "René Descartes",
  Descartes: "René Descartes",
  "Baruch Spinoza": "Baruch Spinoza",
  Spinoza: "Baruch Spinoza",
  "Jean-Jacques Rousseau": "Jean-Jacques Rousseau",
  Rousseau: "Jean-Jacques Rousseau",
  "Immanuel Kant": "Immanuel Kant",
  Kant: "Immanuel Kant",
  "Karl Marx": "Karl Marx",
  Marx: "Karl Marx",
  "Friedrich Nietzsche": "Friedrich Nietzsche",
  Nietzsche: "Friedrich Nietzsche",
  "Sigmund Freud": "Sigmund Freud",
  Freud: "Sigmund Freud",
  "Charles Darwin": "Charles Darwin",
  Darwin: "Charles Darwin",
  "Isaac Newton": "Isaac Newton",
  Newton: "Isaac Newton"
};

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
    .trim();
}

function normalizePtBr(value = "") {
  return value
    .replace(/\breflecte\b/gi, "reflete")
    .replace(/\bfactos\b/gi, "fatos")
    .replace(/\bfacto\b/gi, "fato")
    .replace(/\bacção\b/gi, "ação")
    .replace(/\bacções\b/gi, "ações")
    .replace(/\bcorrecta\b/gi, "correta")
    .replace(/\bcorrecto\b/gi, "correto")
    .replace(/\bcómico\b/gi, "cômico");
}

function firstMatch(value, pattern) {
  return value.match(pattern)?.[1] ?? "";
}

function parsePage(html, indexEntry) {
  const h1Index = html.indexOf("<h1");
  const headerEnd = html.indexOf("</header>", h1Index);
  const header = html.slice(Math.max(0, h1Index - 1800), headerEnd + 9);
  const paragraphs = [...header.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) =>
    textContent(match[1])
  );
  const question = paragraphs.at(-1) ?? "";
  const visualEnd = html.indexOf("<details");
  const visual = html.slice(0, visualEnd > 0 ? visualEnd : html.length);
  const markers = [...visual.matchAll(/data-thinker="([^"]+)"/g)];

  const thinkers = markers.map((marker, position) => {
    const start = marker.index ?? 0;
    const end = markers[position + 1]?.index ?? visual.length;
    const segment = visual.slice(start, end);
    const before = visual.slice(0, start);
    let era = "Modern";
    let nearestEraIndex = -1;

    for (const candidate of knownEras) {
      const candidateIndex = before.lastIndexOf(`>${candidate}<`);
      if (candidateIndex > nearestEraIndex) {
        nearestEraIndex = candidateIndex;
        era = candidate;
      }
    }

    const name = textContent(firstMatch(segment, /<h3[^>]*>([\s\S]*?)<\/h3>/));
    const afterHeading = segment.slice(segment.indexOf("</h3>") + 5);
    const dates = textContent(firstMatch(afterHeading, /<span[^>]*>([\s\S]*?)<\/span>/));
    const summary = textContent(firstMatch(afterHeading, /<p[^>]*>([\s\S]*?)<\/p>/));
    const responseIndex = segment.indexOf("Responds to:");
    const rawResponseSegment = responseIndex >= 0 ? segment.slice(responseIndex) : "";
    const responseEnd = rawResponseSegment.indexOf("</div></div></div>");
    const responseSegment =
      responseEnd >= 0 ? rawResponseSegment.slice(0, responseEnd) : rawResponseSegment;
    const respondsTo = [...responseSegment.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/g)]
      .map((match) => textContent(match[1]))
      .filter(Boolean);

    return {
      id: marker[1],
      name,
      dates: dates.replace(/\bBC\b/g, "a.C.").replace(/\bAD\b/g, "d.C."),
      era: eraNames[era] ?? era,
      summary,
      respondsTo
    };
  });

  const readingStart = visual.indexOf("The Reading List");
  const readingSection = readingStart >= 0 ? visual.slice(readingStart) : "";
  const readingList = [...readingSection.matchAll(/<div class="py-0\.5">([\s\S]*?)<\/div>/g)]
    .map((match) => textContent(match[1]))
    .filter(Boolean);

  return {
    ...indexEntry,
    number: ideaIndex.findIndex((item) => item.originalSlug === indexEntry.originalSlug) + 1,
    domainName: domainNames[indexEntry.domain],
    question,
    thinkers,
    readingList,
    sourceUrl: `https://greatconversationmap.com/ideas/${indexEntry.originalSlug}`
  };
}

async function fetchText(url, attempts = 3) {
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

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

async function loadCache() {
  try {
    return JSON.parse(await fs.readFile(cachePath, "utf8"));
  } catch {
    return {};
  }
}

async function translateText(text, cache) {
  if (!text || /^[\d\s.,;:()–—-]+$/.test(text)) return text;
  if (cache[text]) return cache[text];

  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt-BR&dt=t&q=" +
    encodeURIComponent(text);
  const body = JSON.parse(await fetchText(url, 5));
  const translated = body[0].map((part) => part[0]).join("").trim();
  cache[text] = translated;
  return translated;
}

async function main() {
  await fs.mkdir(path.join(root, "work"), { recursive: true });
  console.log(`Coletando ${ideaIndex.length} ideias...`);

  const scraped = await mapLimit(ideaIndex, 8, async (entry, index) => {
    const html = await fetchText(
      `https://greatconversationmap.com/ideas/${entry.originalSlug}`
    );
    const idea = parsePage(html, entry);
    console.log(
      `[${index + 1}/${ideaIndex.length}] ${entry.name}: ${idea.thinkers.length} pensadores`
    );
    return idea;
  });

  const cache = await loadCache();
  const texts = [
    ...scraped.map((idea) => idea.question),
    ...scraped.flatMap((idea) => idea.thinkers.map((item) => item.summary)),
    ...scraped.flatMap((idea) => idea.readingList)
  ].filter(Boolean);
  const uniqueTexts = [...new Set(texts)].filter((text) => !cache[text]);

  console.log(`Traduzindo ${uniqueTexts.length} trechos novos...`);
  let completed = 0;
  await mapLimit(uniqueTexts, 6, async (text) => {
    await translateText(text, cache);
    completed += 1;
    if (completed % 50 === 0) {
      console.log(`${completed}/${uniqueTexts.length} traduções`);
      await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");
    }
  });
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");

  const translated = scraped.map((idea) => ({
    ...idea,
    question: normalizePtBr(cache[idea.question] ?? idea.question),
    thinkers: idea.thinkers.map((thinker) => ({
      ...thinker,
      name: authorNames[thinker.name] ?? thinker.name,
      summary: normalizePtBr(cache[thinker.summary] ?? thinker.summary),
      respondsTo: thinker.respondsTo.map((name) => authorNames[name] ?? name)
    })),
    readingList: idea.readingList.map((line) => normalizePtBr(cache[line] ?? line))
  }));

  await fs.writeFile(outputPath, JSON.stringify(translated, null, 2), "utf8");
  const thoughtCount = translated.reduce((total, idea) => total + idea.thinkers.length, 0);
  console.log(`Concluído: ${translated.length} ideias e ${thoughtCount} pensamentos.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
