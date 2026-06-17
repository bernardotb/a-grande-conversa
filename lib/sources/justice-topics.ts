import type { JusticeTopic } from "./types";

export const justiceTopics: JusticeTopic[] = [
  {
    id: "justice-force-vs-right",
    title: "Força vs. Direito",
    question: "A justiça é a vantagem do mais forte, ou existe um padrão independente do poder?",
    summary:
      "Trasímaco afirma que a justiça é simplesmente o que convém ao mais forte. Platão e Sócrates resistem: se assim fosse, não haveria critério para julgar nenhum regime como injusto. O Diálogo dos Mélios de Tucídides apresenta a versão histórica mais brutal deste argumento.",
    connectedIdeaIds: ["justica", "liberdade", "lei"],
    referenceIds: [
      "ref-justice-plato-republic-thrasymachus",
      "ref-justice-thucydides-melian-dialogue",
    ],
    volumeIds: [6, 7, 23],
  },
  {
    id: "justice-vengeance-vs-civic-judgment",
    title: "Vingança vs. Julgamento Cívico",
    question: "Quando a punição deixa de ser vingança e passa a ser justiça?",
    summary:
      "A Oresteia de Ésquilo dramatiza a criação do primeiro tribunal ateniense por Atena. Orestes mata a mãe para vingar o pai; as Erínias exigem mais sangue. Atena cria um júri para decidir — e a lógica da vengança cede à da lei.",
    connectedIdeaIds: ["justica", "punição", "lei"],
    referenceIds: [
      "ref-justice-aeschylus-oresteia-eumenides",
    ],
    volumeIds: [5],
  },
  {
    id: "justice-unwritten-law-vs-state-law",
    title: "Lei Não Escrita vs. Lei do Estado",
    question: "Devemos obedecer às leis da cidade quando elas contradizem obrigações mais profundas?",
    summary:
      "Antígona desobedece a Creonte para enterrar o irmão segundo a lei divina. Creonte invoca a necessidade da lei civil. Sófocles não resolve: os dois morrem. A tensão entre lei positiva e lei moral persiste em todo o debate da desobediência civil.",
    connectedIdeaIds: ["justica", "lei", "dever"],
    referenceIds: [
      "ref-justice-sophocles-antigone",
    ],
    volumeIds: [5],
  },
  {
    id: "justice-soul-and-city",
    title: "Justiça na Alma e na Cidade",
    question: "A justiça é uma propriedade da alma, da cidade, ou de ambas em espelho?",
    summary:
      "Platão argumenta que a alma justa tem suas três partes — razão, ânimo e apetite — em harmonia, cada uma cumprindo sua função. A cidade justa tem três classes paralelas: filósofos, guerreiros e produtores. Aristóteles critica a analogia, mas aceita que a justiça política exige cidadãos virtuosos.",
    connectedIdeaIds: ["justica", "virtude", "verdade"],
    referenceIds: [
      "ref-justice-plato-republic-harmony",
      "ref-justice-aristotle-politics-citizen",
    ],
    volumeIds: [7, 9],
  },
  {
    id: "justice-distributive-corrective",
    title: "Justiça Distributiva e Corretiva",
    question: "Como distribuir bens e corrigir trocas injustas de forma justa?",
    summary:
      "Aristóteles distingue dois tipos: a distributiva usa proporção geométrica (a cada um segundo seu mérito); a corretiva usa proporção aritmética (restaurar o equilíbrio nas trocas). A pergunta prática é: igual ao quê? Ao mérito, à necessidade, à contribuição, ou simplesmente por ser humano?",
    connectedIdeaIds: ["justica", "igualdade"],
    referenceIds: [
      "ref-justice-aristotle-ethics-book-v",
    ],
    volumeIds: [9, 43],
  },
  {
    id: "justice-natural-law-positive-law",
    title: "Lei Natural vs. Lei Positiva",
    question: "A justiça é dada pela natureza, pela razão, por Deus, ou pela convenção humana?",
    summary:
      "Para Aristóteles, há uma justiça natural que vale em qualquer lugar. Para Agostinho e Tomás, ela deriva da razão e da lei eterna de Deus. Para Hobbes, a lei natural é apenas o que a razão prescreve para a preservação; a justiça real nasce com o poder civil.",
    connectedIdeaIds: ["justica", "lei", "deus"],
    referenceIds: [
      "ref-justice-aristotle-ethics-book-v",
      "ref-justice-augustine-city-of-god",
      "ref-justice-aquinas-summa-law",
      "ref-justice-hobbes-leviathan-covenant",
    ],
    volumeIds: [9, 18, 19, 20, 23],
  },
  {
    id: "justice-contract-sovereignty",
    title: "Contrato Social e Soberania",
    question: "A justiça depende de um pacto, e o pacto depende de um soberano?",
    summary:
      "Hobbes: no estado de natureza não há injustiça — a guerra de todos contra todos não viola nenhuma lei. O contrato cria o soberano que cria a lei que cria a possibilidade de justo e injusto. Locke: há direitos naturais anteriores ao contrato que o governo deve proteger, não criar.",
    connectedIdeaIds: ["justica", "estado", "liberdade", "lei"],
    referenceIds: [
      "ref-justice-hobbes-leviathan-covenant",
      "ref-justice-locke-second-treatise",
    ],
    volumeIds: [23, 35],
  },
  {
    id: "justice-utility-convention",
    title: "Utilidade e Convenção",
    question: "A justiça é uma virtude natural ou uma invenção útil?",
    summary:
      "Hume argumenta que a justiça é uma virtude artificial: não brotou da natureza, mas do reconhecimento de que regras estáveis de propriedade servem ao interesse de todos. Mill vai além: o padrão de justiça é a utilidade — o que maximiza a felicidade geral a longo prazo.",
    connectedIdeaIds: ["justica", "virtude", "felicidade"],
    referenceIds: [
      "ref-justice-hume-enquiry-artificial-virtue",
      "ref-justice-mill-utilitarianism",
    ],
    volumeIds: [35, 43],
  },
  {
    id: "justice-liberty-universal-law",
    title: "Liberdade e Lei Universal",
    question: "Como a liberdade individual se reconcilia com a exigência de igualdade perante a lei?",
    summary:
      "Kant define a justiça como a coexistência possível das liberdades externas de todos sob uma lei universal. O direito não regula a consciência, mas a conduta externa. Toda lei justa é aquela que poderia ter sido consentida por todos os que são por ela obrigados.",
    connectedIdeaIds: ["justica", "liberdade", "igualdade"],
    referenceIds: [
      "ref-justice-kant-science-of-right",
    ],
    volumeIds: [42],
  },
  {
    id: "justice-economic-class",
    title: "Justiça, Classe e Exploração",
    question: "A justiça é possível numa sociedade de classes, ou é sempre ideologia do dominante?",
    summary:
      "Marx argumenta que a 'justiça' burguesa é a legitimação jurídica da exploração. A forma-salário parece justa (troca livre entre iguais) mas esconde a extração de mais-valia. Justiça real exigiria abolir as condições que produzem a injustiça — não distribuir mais equitativamente dentro delas.",
    connectedIdeaIds: ["justica", "trabalho", "igualdade", "propriedade"],
    referenceIds: [
      "ref-justice-marx-capital-surplus-value",
      "ref-justice-marx-critique-gotha",
    ],
    volumeIds: [50],
  },
  {
    id: "justice-punishment",
    title: "Punição",
    question: "Por que punir? Para retribuir, para dissuadir ou para reabilitar?",
    summary:
      "Três teorias fundamentais: retributivismo (Kant — a pena é devida em si, independente de consequências); dissuasão/utilitarismo (Bentham, Mill — a pena é justificada pelo bem que produz ao prevenir futuros crimes); reabilitação (punição como tratamento ou correção). O debate permanece vivo em filosofia do direito.",
    connectedIdeaIds: ["justica", "punição", "lei"],
    referenceIds: [
      "ref-justice-kant-punishment-retribution",
      "ref-justice-mill-utilitarianism",
    ],
    volumeIds: [42, 43],
  },
];

export function getTopicById(id: string): JusticeTopic | undefined {
  return justiceTopics.find((t) => t.id === id);
}

export function getTopicsByVolume(volumeNumber: number): JusticeTopic[] {
  return justiceTopics.filter((t) => t.volumeIds.includes(volumeNumber));
}
