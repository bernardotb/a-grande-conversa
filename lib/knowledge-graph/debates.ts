import type { Debate } from "./types";

export const debates: Debate[] = [
  {
    id: "debate-justica-e-lei",
    slug: "justica-e-lei",
    title: "Justiça e lei",
    centralQuestion: "A lei cria a justiça ou depende de uma justiça anterior?",
    description:
      "Desde Sófocles e Platão, filósofos debatem se a lei positiva é a fonte da justiça ou se existe uma justiça natural que a lei deve refletir — e que pode condenar a lei injusta.",
    relatedIdeaIds: ["justica", "lei", "estado", "liberdade"],
    quotes: [
      {
        text: "Onde a lei não governa, não há constituição.",
        author: "Aristóteles",
        work: "Política",
        sourceStatus: "primary_text_passage",
      },
    ],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "debate-liberdade-e-autoridade",
    slug: "liberdade-e-autoridade",
    title: "Liberdade e autoridade",
    centralQuestion: "Como conciliar liberdade individual e autoridade política?",
    description:
      "A tensão entre a autonomia do indivíduo e as exigências da ordem coletiva atravessa toda a filosofia política, de Hobbes e Locke a Rawls e Habermas.",
    relatedIdeaIds: ["liberdade", "governo", "estado", "lei"],
    quotes: [
      {
        text: "O homem nasceu livre e por toda parte encontra-se acorrentado.",
        author: "Jean-Jacques Rousseau",
        work: "O Contrato Social",
        sourceStatus: "primary_text_passage",
      },
    ],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "debate-fe-e-razao",
    slug: "fe-e-razao",
    title: "Fé e razão",
    centralQuestion: "A fé completa, supera ou contradiz a razão?",
    description:
      "Do diálogo entre fé e filosofia em Agostinho e Tomás de Aquino até a crítica iluminista de Hume e a filosofia da religião contemporânea, este debate é central à teologia e à epistemologia.",
    relatedIdeaIds: ["deus", "religiao", "teologia", "conhecimento"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "debate-alma-e-corpo",
    slug: "alma-e-corpo",
    title: "Alma e corpo",
    centralQuestion: "A alma é separável do corpo ou depende dele?",
    description:
      "Platão separa alma e corpo como substâncias distintas. Aristóteles vê a alma como forma do corpo. Descartes radicaliza o dualismo. A neurociência contemporânea questiona toda separação substancial.",
    relatedIdeaIds: ["alma", "homem", "mente", "vida-e-morte"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "debate-conhecimento-e-opiniao",
    slug: "conhecimento-e-opiniao",
    title: "Conhecimento e opinião",
    centralQuestion: "Conhecimento e opinião diferem em grau ou em natureza?",
    description:
      "Para Platão, conhecimento é da realidade imutável; opinião é da aparência mutável. O empirismo moderno dissolve essa fronteira. A epistemologia analítica debate o que distingue crença verdadeira justificada de mera opinião.",
    relatedIdeaIds: ["conhecimento", "opiniao", "verdade", "experiencia"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "debate-virtude-e-felicidade",
    slug: "virtude-e-felicidade",
    title: "Virtude e felicidade",
    centralQuestion:
      "A felicidade depende da virtude, do prazer, da contemplação ou da salvação?",
    description:
      "Aristóteles identifica felicidade com eudaimonia — atividade excelente da alma. Os estoicos a encontram na virtude independente das circunstâncias. Os hedonistas, no prazer. Os cristãos, na bem-aventurança eterna.",
    relatedIdeaIds: ["virtude-e-vicio", "felicidade", "prazer-e-dor", "bem-e-mal"],
    evidenceStatus: "editorial_inference",
  },
  {
    id: "debate-riqueza-trabalho-e-justica",
    slug: "riqueza-trabalho-e-justica",
    title: "Riqueza, trabalho e justiça",
    centralQuestion:
      "Como riqueza, trabalho e propriedade devem ser ordenados por critérios de justiça?",
    description:
      "De Aristóteles e Tomás de Aquino até Smith, Marx e Rawls, a questão de como distribuir recursos e reconhecer o trabalho atravessa toda a filosofia moral e política.",
    relatedIdeaIds: ["riqueza", "trabalho", "justica", "liberdade", "estado"],
    evidenceStatus: "editorial_inference",
  },
];

export const getDebate = (slug: string) =>
  debates.find((d) => d.slug === slug || d.id === slug);
