import type { WorkNode } from "./types";

export const workNodes: WorkNode[] = [
  {
    id: "work-antigona",
    label: "Antígona",
    type: "work",
    slug: "antigona",
    authorId: "author-sofocles",
    summary:
      "Tragédia de Sófocles que narra o conflito entre a lei divina e a lei humana na Tebas de Creonte.",
    relatedIdeas: ["idea-justice", "idea-liberty"],
  },
  {
    id: "work-republica",
    label: "A República",
    type: "work",
    slug: "a-republica",
    authorId: "author-platao",
    summary:
      "Diálogo de Platão sobre a natureza da justiça, o Estado ideal e a teoria das Formas.",
    relatedIdeas: ["idea-justice", "idea-truth", "idea-goodness"],
  },
  {
    id: "work-gorgias",
    label: "Górgias",
    type: "work",
    slug: "gorgias",
    authorId: "author-platao",
    summary:
      "Diálogo de Platão sobre retórica, poder e a distinção entre aparência e verdade.",
    relatedIdeas: ["idea-truth", "idea-justice"],
  },
  {
    id: "work-etica-nicomaco",
    label: "Ética a Nicômaco",
    type: "work",
    slug: "etica-a-nicomaco",
    authorId: "author-aristoteles",
    summary:
      "Obra de Aristóteles que investiga a virtude, a felicidade e a vida boa como fim do ser humano.",
    relatedIdeas: ["idea-goodness", "idea-justice"],
  },
  {
    id: "work-politica",
    label: "Política",
    type: "work",
    slug: "politica",
    authorId: "author-aristoteles",
    summary:
      "Obra de Aristóteles sobre as formas de governo, a cidadania e a justiça política.",
    relatedIdeas: ["idea-justice", "idea-equality", "idea-liberty"],
  },
  {
    id: "work-confissoes",
    label: "Confissões",
    type: "work",
    slug: "confissoes",
    authorId: "author-agostinho",
    summary:
      "Autobiografia espiritual de Agostinho que explora o bem, a vontade e a busca de Deus.",
    relatedIdeas: ["idea-goodness", "idea-liberty"],
  },
  {
    id: "work-cidade-de-deus",
    label: "Cidade de Deus",
    type: "work",
    slug: "cidade-de-deus",
    authorId: "author-agostinho",
    summary:
      "Obra de Agostinho que contrasta a cidade terrena e a cidade divina, investigando a justiça e a paz.",
    relatedIdeas: ["idea-justice", "idea-goodness"],
  },
  {
    id: "work-suma-teologica",
    label: "Suma Teológica",
    type: "work",
    slug: "suma-teologica",
    authorId: "author-tomas-de-aquino",
    summary:
      "Síntese de Tomás de Aquino que integra razão e fé, desenvolvendo a doutrina da lei natural e da justiça.",
    relatedIdeas: ["idea-truth", "idea-goodness", "idea-justice"],
  },
  {
    id: "work-leviata",
    label: "Leviatã",
    type: "work",
    slug: "leviata",
    authorId: "author-hobbes",
    summary:
      "Obra de Hobbes que funda o Estado no contrato social para superar o estado de natureza.",
    relatedIdeas: ["idea-justice", "idea-liberty", "idea-equality"],
  },
  {
    id: "work-segundo-tratado",
    label: "Segundo Tratado sobre o Governo",
    type: "work",
    slug: "segundo-tratado-sobre-o-governo",
    authorId: "author-locke",
    summary:
      "Obra de Locke que justifica a limitação do poder governamental pelos direitos naturais à vida, liberdade e propriedade.",
    relatedIdeas: ["idea-liberty", "idea-justice"],
  },
  {
    id: "work-contrato-social",
    label: "Contrato Social",
    type: "work",
    slug: "contrato-social",
    authorId: "author-rousseau",
    summary:
      "Obra de Rousseau que funda a legitimidade política na vontade geral e na igualdade dos cidadãos.",
    relatedIdeas: ["idea-liberty", "idea-equality", "idea-justice"],
  },
  {
    id: "work-critica-razao-pura",
    label: "Crítica da Razão Pura",
    type: "work",
    slug: "critica-da-razao-pura",
    authorId: "author-kant",
    summary:
      "Obra de Kant que investiga os limites e as condições do conhecimento humano.",
    relatedIdeas: ["idea-truth"],
  },
  {
    id: "work-critica-juizo",
    label: "Crítica do Juízo",
    type: "work",
    slug: "critica-do-juizo",
    authorId: "author-kant",
    summary:
      "Obra de Kant sobre os juízos estéticos e teleológicos, investigando a beleza e o sublime.",
    relatedIdeas: ["idea-beauty"],
  },
  {
    id: "work-sobre-a-liberdade",
    label: "Sobre a Liberdade",
    type: "work",
    slug: "sobre-a-liberdade",
    authorId: "author-mill",
    summary:
      "Obra de Mill que defende a liberdade individual contra a tirania da maioria e do Estado.",
    relatedIdeas: ["idea-liberty"],
  },
  {
    id: "work-utilitarismo",
    label: "Utilitarismo",
    type: "work",
    slug: "utilitarismo",
    authorId: "author-mill",
    summary:
      "Obra de Mill que fundamenta a moral na maximização da felicidade para o maior número de pessoas.",
    relatedIdeas: ["idea-goodness", "idea-justice"],
  },
  {
    id: "work-pragmatismo",
    label: "Pragmatismo",
    type: "work",
    slug: "pragmatismo",
    authorId: "author-william-james",
    summary:
      "Obra de William James que define a verdade pelo que funciona e tem valor prático na experiência.",
    relatedIdeas: ["idea-truth"],
  },
  {
    id: "work-six-great-ideas",
    label: "Six Great Ideas",
    type: "work",
    slug: "six-great-ideas",
    authorId: "author-adler",
    summary:
      "Obra de Mortimer Adler que analisa as seis grandes ideias — Verdade, Bondade, Beleza, Liberdade, Igualdade, Justiça.",
    relatedIdeas: [
      "idea-truth",
      "idea-goodness",
      "idea-beauty",
      "idea-liberty",
      "idea-equality",
      "idea-justice",
    ],
  },
];
