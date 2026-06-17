import type { JusticeDebate } from "./types";

export const justiceDebates: JusticeDebate[] = [
  {
    id: "force-vs-right",
    title: "Força vs. Direito",
    question: "A justiça é apenas a vantagem do mais forte?",
    poleA: "Sim — o poder define o direito; 'justo' é o que serve ao dominante.",
    poleB: "Não — existe um padrão normativo de justiça independente do poder.",
    authorsA: ["Trasímaco (via Platão)", "Tucídides (Diálogo dos Mélios)"],
    authorsB: ["Platão", "Aristóteles", "Kant"],
    connectedIdeaIds: ["justica", "lei", "liberdade"],
    referenceIds: [
      "ref-justice-plato-republic-thrasymachus",
      "ref-justice-thucydides-melian-dialogue",
    ],
  },
  {
    id: "natural-vs-conventional-justice",
    title: "Justiça Natural vs. Justiça Convencional",
    question: "A justiça tem fundamento na natureza, ou é invenção humana?",
    poleA: "Natural — há princípios de justiça que valem em qualquer lugar e tempo.",
    poleB: "Convencional — a justiça é uma construção social útil, sem fundamento transcendente.",
    authorsA: ["Aristóteles", "Tomás de Aquino", "Kant"],
    authorsB: ["Hobbes", "Hume"],
    connectedIdeaIds: ["justica", "lei", "natureza"],
    referenceIds: [
      "ref-justice-aristotle-ethics-book-v",
      "ref-justice-aquinas-summa-law",
      "ref-justice-hobbes-leviathan-covenant",
      "ref-justice-hume-enquiry-artificial-virtue",
    ],
  },
  {
    id: "arithmetic-vs-proportional-equality",
    title: "Igualdade Aritmética vs. Proporcional",
    question: "Tratar todos igualmente é dar a cada um o mesmo, ou dar a cada um segundo seu mérito?",
    poleA: "Aritmética — todos recebem exatamente o mesmo (igualdade formal).",
    poleB: "Proporcional — cada um recebe segundo seu mérito, necessidade ou contribuição.",
    authorsA: [],
    authorsB: ["Aristóteles", "Platão"],
    connectedIdeaIds: ["justica", "igualdade"],
    referenceIds: [
      "ref-justice-aristotle-ethics-book-v",
      "ref-justice-plato-republic-harmony",
    ],
  },
  {
    id: "liberty-and-justice",
    title: "Liberdade e Justiça",
    question: "A justiça limita a liberdade ou é condição para ela?",
    poleA: "A justiça limita — toda lei justa restringe o que posso fazer.",
    poleB: "A justiça possibilita — sem um quadro justo, a liberdade de uns destrói a dos outros.",
    authorsA: [],
    authorsB: ["Kant", "Mill", "Rawls (modernamente)"],
    connectedIdeaIds: ["justica", "liberdade"],
    referenceIds: [
      "ref-justice-kant-science-of-right",
      "ref-justice-mill-utilitarianism",
    ],
  },
  {
    id: "justice-vs-utility",
    title: "Justiça vs. Utilidade",
    question: "A justiça se define pelo que maximiza o bem-estar geral, ou tem exigências independentes?",
    poleA: "Utilidade — justo é o que maximiza a felicidade do maior número.",
    poleB: "Independente — algumas coisas são injustas mesmo que aumentem a felicidade geral.",
    authorsA: ["Mill", "Bentham"],
    authorsB: ["Kant"],
    connectedIdeaIds: ["justica", "felicidade", "dever"],
    referenceIds: [
      "ref-justice-mill-utilitarianism",
      "ref-justice-kant-science-of-right",
    ],
  },
];

export function getDebateById(id: string): JusticeDebate | undefined {
  return justiceDebates.find((d) => d.id === id);
}
