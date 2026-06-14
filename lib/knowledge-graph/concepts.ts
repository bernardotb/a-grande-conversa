import type { BridgeConcept } from "./types";

export const bridgeConcepts: BridgeConcept[] = [
  {
    id: "concept-lei-natural",
    slug: "lei-natural",
    title: "Lei natural",
    description:
      "Princípio moral ou jurídico derivado da natureza humana ou da razão, anterior e superior à lei positiva. Central em Cícero, Tomás de Aquino, Grotius e na teoria dos direitos naturais.",
    relatedIdeaIds: ["lei", "justica", "natureza", "deus", "dever"],
    relatedDebateIds: ["debate-justica-e-lei", "debate-liberdade-e-autoridade"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "concept-contrato-social",
    slug: "contrato-social",
    title: "Contrato social",
    description:
      "Acordo (real ou hipotético) pelo qual indivíduos cedem parte de sua liberdade natural em troca de segurança e direitos garantidos pelo Estado. Hobbes, Locke, Rousseau e Rawls oferecem versões radicalmente distintas.",
    relatedIdeaIds: ["governo", "estado", "liberdade", "lei", "justica"],
    relatedDebateIds: ["debate-liberdade-e-autoridade", "debate-justica-e-lei"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "concept-bem-comum",
    slug: "bem-comum",
    title: "Bem comum",
    description:
      "O conjunto de condições que permite aos membros de uma comunidade atingir sua realização. Aristóteles funda o conceito; a escolástica o elabora; o liberalismo o contesta em nome dos direitos individuais.",
    relatedIdeaIds: ["justica", "estado", "governo", "virtude-e-vicio", "felicidade"],
    relatedDebateIds: ["debate-liberdade-e-autoridade", "debate-virtude-e-felicidade"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "concept-propriedade",
    slug: "propriedade",
    title: "Propriedade",
    description:
      "Direito de posse exclusiva sobre bens. Locke funda a propriedade no trabalho; Marx a vê como fundamento da exploração; Rawls a subordina a critérios de justiça distributiva.",
    relatedIdeaIds: ["riqueza", "trabalho", "justica", "liberdade", "estado"],
    relatedDebateIds: ["debate-riqueza-trabalho-e-justica", "debate-justica-e-lei"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "concept-soberania",
    slug: "soberania",
    title: "Soberania",
    description:
      "Poder supremo e irresistível dentro de um território. Bodin a torna conceito central; Hobbes a concentra no soberano; Rousseau a transfere ao povo; o direito internacional moderno a relativiza.",
    relatedIdeaIds: ["estado", "governo", "lei", "guerra-e-paz", "liberdade"],
    relatedDebateIds: ["debate-liberdade-e-autoridade", "debate-justica-e-lei"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "concept-causa-final",
    slug: "causa-final",
    title: "Causa final",
    description:
      "Uma das quatro causas aristotélicas: o fim ou propósito pelo qual algo existe ou acontece. Fundamento do teleologismo na filosofia e na teologia natural; questionado pelo mecanicismo moderno.",
    relatedIdeaIds: ["causa", "natureza", "forma", "ciencia", "metafisica"],
    evidenceStatus: "editorial_inference",
  },
];

export const getConcept = (slug: string) =>
  bridgeConcepts.find((c) => c.slug === slug || c.id === slug);
