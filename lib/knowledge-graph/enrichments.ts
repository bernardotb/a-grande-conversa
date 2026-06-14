import type { IdeaEnrichment, PlanStepEnrichment } from "./types";

// Quotes importadas do protótipo B.
// sourceStatus: "prototype_editorial" = não há referência textual precisa verificada.
// sourceStatus: "primary_text_passage" = passagem conhecida e atribuída corretamente.

export const ideaEnrichments: IdeaEnrichment[] = [
  {
    slug: "justica",
    quotes: [
      {
        text: "A justiça é a mais elevada das virtudes, e é mais admirável do que a estrela da manhã ou da tarde.",
        author: "Aristóteles",
        work: "Ética a Nicômaco",
        sourceStatus: "primary_text_passage",
      },
      {
        text: "A justiça nada mais é do que a vantagem do mais forte.",
        author: "Trasímaco (personagem em Platão)",
        work: "A República",
        sourceStatus: "primary_text_passage",
      },
      {
        text: "As desigualdades sociais e econômicas devem ser ordenadas de modo que sejam para o maior benefício dos membros menos favorecidos da sociedade.",
        author: "John Rawls",
        work: "Uma Teoria da Justiça",
        sourceStatus: "primary_text_passage",
      },
    ],
    relatedDebateIds: ["debate-justica-e-lei", "debate-riqueza-trabalho-e-justica"],
    relatedConceptIds: ["concept-lei-natural", "concept-contrato-social", "concept-bem-comum"],
  },
  {
    slug: "liberdade",
    quotes: [
      {
        text: "O homem nasceu livre e por toda parte encontra-se acorrentado.",
        author: "Jean-Jacques Rousseau",
        work: "O Contrato Social",
        sourceStatus: "primary_text_passage",
      },
      {
        text: "A liberdade é a obediência à lei que nos prescrevemos a nós mesmos.",
        author: "Jean-Jacques Rousseau",
        work: "O Contrato Social",
        sourceStatus: "primary_text_passage",
      },
      {
        text: "O homem está condenado a ser livre.",
        author: "Jean-Paul Sartre",
        work: "O Existencialismo é um Humanismo",
        sourceStatus: "primary_text_passage",
      },
    ],
    relatedDebateIds: ["debate-liberdade-e-autoridade"],
    relatedConceptIds: ["concept-contrato-social", "concept-soberania"],
  },
  {
    slug: "verdade",
    quotes: [
      {
        text: "Dizer do que é que é, e do que não é que não é, eis a verdade.",
        author: "Aristóteles",
        work: "Metafísica",
        sourceStatus: "primary_text_passage",
      },
      {
        text: "A verdade é o todo. Mas o todo é apenas a essência que se completa por meio de seu próprio desenvolvimento.",
        author: "Georg Wilhelm Friedrich Hegel",
        work: "Fenomenologia do Espírito",
        sourceStatus: "primary_text_passage",
      },
    ],
    relatedDebateIds: ["debate-conhecimento-e-opiniao"],
  },
  {
    slug: "bem-e-mal",
    quotes: [
      {
        text: "O bem é o que todas as coisas desejam.",
        author: "Aristóteles",
        work: "Ética a Nicômaco",
        sourceStatus: "primary_text_passage",
      },
      {
        text: "Não há nada no mundo que possa ser considerado bom sem restrição exceto a boa vontade.",
        author: "Immanuel Kant",
        work: "Fundamentação da Metafísica dos Costumes",
        sourceStatus: "primary_text_passage",
      },
    ],
    relatedDebateIds: ["debate-virtude-e-felicidade"],
    relatedConceptIds: ["concept-bem-comum"],
  },
  {
    slug: "conhecimento",
    quotes: [
      {
        text: "Penso, logo existo.",
        author: "René Descartes",
        work: "Discurso do Método",
        sourceStatus: "primary_text_passage",
      },
    ],
    relatedDebateIds: ["debate-conhecimento-e-opiniao", "debate-fe-e-razao"],
  },
  {
    slug: "virtude-e-vicio",
    quotes: [],
    relatedDebateIds: ["debate-virtude-e-felicidade"],
    relatedConceptIds: ["concept-bem-comum"],
  },
  {
    slug: "alma",
    quotes: [],
    relatedDebateIds: ["debate-alma-e-corpo", "debate-fe-e-razao"],
  },
  {
    slug: "estado",
    quotes: [],
    relatedDebateIds: ["debate-justica-e-lei", "debate-liberdade-e-autoridade", "debate-riqueza-trabalho-e-justica"],
    relatedConceptIds: ["concept-soberania", "concept-contrato-social", "concept-bem-comum"],
  },
  {
    slug: "governo",
    quotes: [],
    relatedDebateIds: ["debate-liberdade-e-autoridade"],
    relatedConceptIds: ["concept-soberania", "concept-contrato-social"],
  },
  {
    slug: "lei",
    quotes: [],
    relatedDebateIds: ["debate-justica-e-lei", "debate-liberdade-e-autoridade"],
    relatedConceptIds: ["concept-lei-natural", "concept-soberania"],
  },
];

export const planStepEnrichments: PlanStepEnrichment[] = [
  // Plano: fundamentos-da-filosofia-ocidental (slug hipotético — ajustar ao slug real)
  {
    planSlug: "fundamentos",
    stepNumber: 1,
    curatorNote: {
      text: "Comece pela República apenas com os livros I e IV: o primeiro apresenta o problema da justiça, o quarto oferece a solução de Platão. Os livros intermediários (teoria das Formas, Alegoria da Caverna) podem ser explorados depois.",
      sourceStatus: "editorial_inference",
    },
  },
  {
    planSlug: "fundamentos",
    stepNumber: 2,
    curatorNote: {
      text: "A Ética a Nicômaco, livros I, II e X, é o núcleo: o que é a felicidade, como a virtude é adquirida pelo hábito e por que a vida contemplativa é o fim mais elevado. Aristóteles dialoga diretamente com Platão.",
      sourceStatus: "editorial_inference",
    },
  },
];

export const getIdeaEnrichment = (slug: string) =>
  ideaEnrichments.find((e) => e.slug === slug);

export const getPlanStepEnrichment = (planSlug: string, stepNumber: number) =>
  planStepEnrichments.find(
    (e) => e.planSlug === planSlug && e.stepNumber === stepNumber,
  );
