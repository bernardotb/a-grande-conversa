import type { TensionNode } from "./types";

export const tensionNodes: TensionNode[] = [
  {
    id: "tension-truth-relativism",
    label: "Verdade objetiva vs. relativismo",
    type: "tension",
    slug: "verdade-objetiva-vs-relativismo",
    summary:
      "Existe uma verdade independente de quem a percebe, ou toda verdade é relativa a um ponto de vista, cultura ou interesse?",
    relatedIdeas: ["idea-truth"],
  },
  {
    id: "tension-real-apparent-good",
    label: "Bem real vs. bem aparente",
    type: "tension",
    slug: "bem-real-vs-bem-aparente",
    summary:
      "O que desejamos é necessariamente o que nos faz bem? Ou podemos desejar coisas que nos prejudicam?",
    relatedIdeas: ["idea-goodness"],
  },
  {
    id: "tension-beauty-objective-subjective",
    label: "Beleza objetiva vs. beleza subjetiva",
    type: "tension",
    slug: "beleza-objetiva-vs-subjetiva",
    summary:
      "A beleza é uma propriedade do objeto ou uma projeção do sujeito que aprecia?",
    relatedIdeas: ["idea-beauty"],
  },
  {
    id: "tension-liberty-license",
    label: "Liberdade vs. licença",
    type: "tension",
    slug: "liberdade-vs-licenca",
    summary:
      "Fazer o que se quer é o mesmo que ser livre? Ou a liberdade exige autodomínio e respeito pelo outro?",
    relatedIdeas: ["idea-liberty"],
  },
  {
    id: "tension-dignity-outcome-equality",
    label: "Igualdade de dignidade vs. igualdade de resultado",
    type: "tension",
    slug: "igualdade-dignidade-vs-resultado",
    summary:
      "Basta reconhecer a igual dignidade de todos, ou é preciso garantir resultados iguais?",
    relatedIdeas: ["idea-equality"],
  },
  {
    id: "tension-natural-conventional-justice",
    label: "Justiça natural vs. justiça convencional",
    type: "tension",
    slug: "justica-natural-vs-convencional",
    summary:
      "Existe uma justiça que vale independente das leis humanas, ou a justiça é sempre o que a lei positiva estabelece?",
    relatedIdeas: ["idea-justice"],
  },
  {
    id: "tension-force-right",
    label: "Força vs. direito",
    type: "tension",
    slug: "forca-vs-direito",
    summary:
      "O mais forte tem direito a governar, ou o direito existe independente da força?",
    relatedIdeas: ["idea-justice", "idea-liberty"],
  },
  {
    id: "tension-law-barrier-guarantee",
    label: "Lei como limite vs. lei como garantia da liberdade",
    type: "tension",
    slug: "lei-limite-vs-lei-garantia",
    summary:
      "A lei restringe nossa liberdade ou é a condição que a torna possível?",
    relatedIdeas: ["idea-liberty", "idea-justice"],
  },
  {
    id: "tension-arithmetic-proportional-equality",
    label: "Igualdade aritmética vs. igualdade proporcional",
    type: "tension",
    slug: "igualdade-aritmetica-vs-proporcional",
    summary:
      "Tratar todos da mesma forma ou tratar cada um segundo seus méritos e condições?",
    relatedIdeas: ["idea-equality", "idea-justice"],
  },
];
