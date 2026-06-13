import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputPath = path.join(root, "data", "book-index.json");
const cachePath = path.join(root, "work", "book-translation-cache-ptbr.json");
const ideaIndex = JSON.parse(
  await fs.readFile(path.join(root, "data", "idea-index.json"), "utf8")
);
const ideaSlugMap = new Map(ideaIndex.map((idea) => [idea.originalSlug, idea.slug]));

const authorNames = {
  Aeschylus: "Ésquilo",
  Aristotle: "Aristóteles",
  Augustine: "Agostinho de Hipona",
  Cicero: "Cícero",
  Homer: "Homero",
  Plato: "Platão",
  Sophocles: "Sófocles",
  "Marcus Aurelius": "Marco Aurélio",
  "Thomas Aquinas": "Tomás de Aquino",
  "Nicolaus Copernicus": "Nicolau Copérnico",
  "Niccolò Machiavelli": "Nicolau Maquiavel",
  "Immanuel Kant": "Immanuel Kant",
  "Karl Marx": "Karl Marx",
  "René Descartes": "René Descartes"
};

const titleOverrides = {
  Republic: "A República",
  Politics: "Política",
  Metaphysics: "Metafísica",
  Physics: "Física",
  Poetics: "Poética",
  Rhetoric: "Retórica",
  Confessions: "Confissões",
  "City of God": "A Cidade de Deus",
  "Divine Comedy": "A Divina Comédia",
  Inferno: "Inferno",
  Paradiso: "Paraíso",
  Purgatorio: "Purgatório",
  "Nicomachean Ethics": "Ética a Nicômaco",
  "Summa Theologica": "Suma Teológica",
  Meditations: "Meditações",
  "The Iliad": "A Ilíada",
  Iliad: "Ilíada",
  "The Odyssey": "A Odisseia",
  Odyssey: "Odisseia",
  "Don Quixote": "Dom Quixote",
  "Crime and Punishment": "Crime e Castigo",
  "The Origin of Species": "A Origem das Espécies",
  "Discourse on Method": "Discurso do Método",
  "Meditations on First Philosophy": "Meditações sobre Filosofia Primeira"
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
    .replace(/\bactividade\b/gi, "atividade")
    .replace(/\bactividades\b/gi, "atividades")
    .replace(/\bobjectivo\b/gi, "objetivo")
    .replace(/\bobjectivos\b/gi, "objetivos")
    .replace(/\bobjectiva\b/gi, "objetiva")
    .replace(/\bobjectivas\b/gi, "objetivas")
    .replace(/\bcorrecta\b/gi, "correta")
    .replace(/\bcorrecto\b/gi, "correto");
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
  const translated = normalizePtBr(body[0].map((part) => part[0]).join("").trim());
  cache[text] = translated;
  return translated;
}

function parseBookIndex(html) {
  const articleStart = html.indexOf("<article");
  const articleEnd = html.indexOf("</article>", articleStart);
  const article = html.slice(articleStart, articleEnd);
  const headings = [...article.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  const books = [];

  headings.forEach((heading, index) => {
    const author = textContent(heading[1]);
    const start = heading.index ?? 0;
    const end = headings[index + 1]?.index ?? article.length;
    const segment = article.slice(start, end);
    const links = [...segment.matchAll(/<a[^>]+href="\/books\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
    links.forEach((link) => {
      const inner = link[2];
      const fullText = textContent(inner);
      const count = Number(fullText.match(/(\d+)\s+Great\s+Ideas?/)?.[1] ?? 0);
      const title = textContent(inner.match(/<span[^>]*>([\s\S]*?)<\/span>/)?.[1] ?? "");
      if (title) {
        books.push({
          slug: link[1],
          originalTitle: title,
          author: authorNames[author] ?? author,
          ideaCount: count
        });
      }
    });
  });

  return books;
}

function parseBookDetail(html) {
  const articleStart = html.indexOf("<article");
  const articleEnd = html.indexOf("</article>", articleStart);
  const article = html.slice(articleStart, articleEnd);
  const aboutStart = article.search(/<h2[^>]*>About /);
  const appearsStart = article.search(/<h2[^>]*>Appears in /);
  const about = aboutStart >= 0
    ? article.slice(aboutStart, appearsStart > aboutStart ? appearsStart : article.length)
    : "";
  const description = [...about.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((match) => textContent(match[1]))
    .filter(Boolean);
  const ideaSlugs = [
    ...new Set(
      [...article.matchAll(/href="\/ideas\/([^"]+)"/g)]
        .map((match) => ideaSlugMap.get(match[1]))
        .filter(Boolean)
    )
  ];
  const freeUrl = article.match(/<a[^>]+href="([^"]+)"[^>]*>Read free<\/a>/)?.[1] ?? null;
  return { description, ideas: ideaSlugs, freeUrl };
}

async function main() {
  const indexHtml = await fetchText("https://greatconversationmap.com/books");
  const index = parseBookIndex(indexHtml);
  console.log(`Catálogo encontrado: ${index.length} obras.`);

  const detailed = await mapLimit(index, 10, async (book, indexPosition) => {
    const html = await fetchText(`https://greatconversationmap.com/books/${book.slug}`);
    const detail = parseBookDetail(html);
    if ((indexPosition + 1) % 25 === 0) {
      console.log(`${indexPosition + 1}/${index.length} fichas coletadas`);
    }
    return {
      ...book,
      ...detail,
      sourceUrl: `https://greatconversationmap.com/books/${book.slug}`
    };
  });

  const cache = await loadCache();
  const texts = [
    ...detailed
      .filter((book) => !titleOverrides[book.originalTitle])
      .map((book) => book.originalTitle),
    ...detailed.flatMap((book) => book.description)
  ];
  const unique = [...new Set(texts)].filter((text) => !cache[text]);
  console.log(`Traduzindo ${unique.length} trechos...`);
  let completed = 0;
  await mapLimit(unique, 6, async (text) => {
    await translateText(text, cache);
    completed += 1;
    if (completed % 50 === 0) {
      console.log(`${completed}/${unique.length} traduções`);
      await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");
    }
  });
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");

  const translated = detailed.map((book) => ({
    ...book,
    title: titleOverrides[book.originalTitle] ?? cache[book.originalTitle] ?? book.originalTitle,
    description: book.description.map((paragraph) =>
      normalizePtBr(cache[paragraph] ?? paragraph)
    )
  }));
  await fs.writeFile(outputPath, JSON.stringify(translated, null, 2), "utf8");
  console.log(`Concluído: ${translated.length} obras.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
