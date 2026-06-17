export type Axis = 'julgar' | 'agir'
export type EvidenceStatus = 'verified' | 'partial' | 'empty_state'
export type Confidence = 'high' | 'medium' | 'low'

export interface RelatedIdea {
  slug: string
  name: string
  evidence_status: EvidenceStatus
  confidence: Confidence
}

export interface SixIdea {
  slug: string
  name: string
  publicName: string
  axis: Axis
  icon: string
  humanQuestion: string
  teaser: string
  emPoucasPalavras: string
  naVidaCotidiana: string[]
  perguntasReflexivas: string[]
  tensoes: Array<{ slug: string; label: string }>
  autores: Array<{ slug: string; name: string }>
  obras: Array<{ slug: string; title: string; author: string }>
  debates: Array<{ slug: string; title: string }>
  relatedIdeas: RelatedIdea[]
}

export const sixIdeas: SixIdea[] = [
  {
    slug: 'verdade',
    name: 'Verdade',
    publicName: 'Verdade',
    axis: 'julgar',
    icon: '◎',
    humanQuestion: 'O que significa afirmar que algo é verdadeiro?',
    teaser:
      'Quando dizemos que algo é verdadeiro, nos referimos a uma correspondência com a realidade — ou simplesmente ao que funciona para nós? Essa tensão divide filósofos há 2.500 anos.',
    emPoucasPalavras:
      'A verdade é a correspondência entre o que pensamos e o que as coisas são. Mas Platão perguntava se conseguimos mesmo conhecer as coisas como são; Hume duvidava que nossas percepções nos mostrassem a realidade; William James propôs que uma ideia é verdadeira quando funciona. Adler defende que a distinção entre conhecimento e opinião exige uma concepção objetiva de verdade — sem ela, nenhum debate é possível.',
    naVidaCotidiana: [
      'Quando você lê notícias de fontes diferentes e tenta descobrir "o que realmente aconteceu".',
      'Quando alguém diz "isso é verdade para mim" e você questiona se isso faz sentido.',
      'Quando um testemunho em tribunal é contestado: quem está descrevendo os fatos?',
      'Quando a ciência revisa o que antes era certo — isso significa que não havia verdade antes?',
    ],
    perguntasReflexivas: [
      '"Tudo é relativo" — mas será que essa afirmação também é relativa?',
      'Se duas pessoas discordam sinceramente sobre um fato, podem ambas estar certas ao mesmo tempo?',
      'Uma crença útil que não corresponde à realidade pode ser chamada de verdadeira?',
      'O que diferencia uma opinião bem fundamentada de um conhecimento?',
    ],
    tensoes: [
      { slug: 'correspondencia-vs-pragmatismo', label: 'Correspondência vs. pragmatismo' },
      { slug: 'objetividade-vs-relativismo', label: 'Objetividade vs. relativismo' },
      { slug: 'imutavel-vs-mutavel', label: 'Verdade imutável vs. revisável' },
      { slug: 'conhecimento-vs-opiniao', label: 'Conhecimento vs. opinião' },
    ],
    autores: [
      { slug: 'platao', name: 'Platão' },
      { slug: 'aristoteles', name: 'Aristóteles' },
      { slug: 'sao-tomas-de-aquino', name: 'Tomás de Aquino' },
      { slug: 'descartes', name: 'Descartes' },
      { slug: 'hume', name: 'Hume' },
      { slug: 'kant', name: 'Kant' },
      { slug: 'william-james', name: 'William James' },
      { slug: 'adler', name: 'Mortimer J. Adler' },
    ],
    obras: [
      { slug: 'a-republica', title: 'A República', author: 'Platão' },
      { slug: 'organon', title: 'Organon', author: 'Aristóteles' },
      { slug: 'meditacoes', title: 'Meditações', author: 'Descartes' },
      { slug: 'critica-da-razao-pura', title: 'Crítica da Razão Pura', author: 'Kant' },
    ],
    debates: [
      { slug: 'verdade-absoluta-ou-relativa', title: 'A verdade é absoluta ou relativa?' },
      { slug: 'conhecer-ou-opinar', title: 'Podemos conhecer ou apenas opinar?' },
    ],
    relatedIdeas: [
      { slug: 'bem', name: 'Bem', evidence_status: 'verified', confidence: 'high' },
      { slug: 'beleza', name: 'Beleza', evidence_status: 'verified', confidence: 'high' },
      { slug: 'conhecimento', name: 'Conhecimento', evidence_status: 'partial', confidence: 'medium' },
    ],
  },

  {
    slug: 'bem',
    name: 'Bem / Bondade',
    publicName: 'Bem',
    axis: 'julgar',
    icon: '◈',
    humanQuestion: 'Como reconhecemos o que realmente nos faz bem?',
    teaser:
      'Existem coisas que são boas por natureza ou o "bem" é definido por cada um? A diferença entre o que desejamos e o que genuinamente nos faz bem está no centro desta ideia.',
    emPoucasPalavras:
      'Aristóteles distinguia bens reais — que satisfazem necessidades humanas genuínas — de bens aparentes, que apenas parecem bons. Agostinho acrescentou que o amor ordenado (amar as coisas na proporção do seu valor) é o caminho para o bem. Kant deslocou o foco: o único bem incondicional é a boa vontade. Montaigne e Spinoza questionaram se "bem" é uma categoria objetiva ou uma projeção subjetiva.',
    naVidaCotidiana: [
      'Quando você escolhe entre o que quer agora e o que sabe que é melhor a longo prazo.',
      'Quando alguém faz algo prejudicial com boas intenções — o ato foi bom ou mau?',
      'Quando culturas diferentes têm padrões morais distintos: algum é mais correto?',
      'Quando riqueza, saúde ou fama parecem ser bens, mas nem sempre tornam as pessoas felizes.',
    ],
    perguntasReflexivas: [
      'Algo pode ser bom para mim mas mau para você ao mesmo tempo?',
      'A boa intenção é suficiente para tornar um ato moralmente bom?',
      'Existe uma lista objetiva de coisas que são boas para todos os seres humanos?',
      'Se a virtude não garante a felicidade, faz sentido ser virtuoso?',
    ],
    tensoes: [
      { slug: 'bens-reais-vs-aparentes', label: 'Bens reais vs. bens aparentes' },
      { slug: 'virtude-vs-fortuna', label: 'Virtude vs. fortuna' },
      { slug: 'relativismo-vs-natureza-humana', label: 'Relativismo vs. natureza humana' },
      { slug: 'necessidade-vs-desejo', label: 'Necessidade vs. desejo' },
    ],
    autores: [
      { slug: 'aristoteles', name: 'Aristóteles' },
      { slug: 'agostinho', name: 'Agostinho' },
      { slug: 'montaigne', name: 'Montaigne' },
      { slug: 'spinoza', name: 'Spinoza' },
      { slug: 'kant', name: 'Kant' },
    ],
    obras: [
      { slug: 'etica-a-nicomaco', title: 'Ética a Nicômaco', author: 'Aristóteles' },
      { slug: 'confissoes', title: 'Confissões', author: 'Agostinho' },
      {
        slug: 'fundamentacao-da-metafisica-dos-costumes',
        title: 'Fundamentação da Metafísica dos Costumes',
        author: 'Kant',
      },
    ],
    debates: [
      { slug: 'bem-objetivo-ou-subjetivo', title: 'O bem é objetivo ou subjetivo?' },
      { slug: 'virtude-e-felicidade', title: 'A virtude garante a felicidade?' },
    ],
    relatedIdeas: [
      { slug: 'verdade', name: 'Verdade', evidence_status: 'verified', confidence: 'high' },
      { slug: 'justica', name: 'Justiça', evidence_status: 'verified', confidence: 'high' },
      { slug: 'felicidade', name: 'Felicidade', evidence_status: 'partial', confidence: 'medium' },
    ],
  },

  {
    slug: 'beleza',
    name: 'Beleza',
    publicName: 'Beleza',
    axis: 'julgar',
    icon: '◇',
    humanQuestion: 'A beleza está no objeto ou em quem olha?',
    teaser:
      'Quando dizemos que algo é belo, descrevemos o objeto ou revelamos algo sobre nós mesmos? A resposta determina se o gosto pode ser educado ou apenas respeitado.',
    emPoucasPalavras:
      'Platão colocou a Beleza entre as Formas eternas — ela existe independentemente de quem a percebe. Hume e Kant divergiram: a beleza exige um sujeito que a experiencie, mas Kant insistiu que os juízos estéticos genuínos reclamam concordância universal — não são meras preferências pessoais. Darwin sugeriu que o sentido estético tem raízes biológicas. O debate sobre se a beleza é objetiva, subjetiva ou intersubjetiva permanece em aberto.',
    naVidaCotidiana: [
      'Quando você discorda com alguém sobre se uma música ou filme é belo.',
      'Quando padrões de beleza variam entre culturas — isso prova que a beleza é relativa?',
      'Quando uma obra de arte "feia" provoca admiração e reconhecimento — como explicar isso?',
      'Quando a natureza parece bela sem nenhum propósito de nos agradar.',
    ],
    perguntasReflexivas: [
      '"Gosto não se discute" — mas você tenta convencer amigos sobre arte. Por quê?',
      'Se a beleza é apenas preferência, como explicamos a admiração quase universal por certas obras?',
      'O sublime — o que nos amedronta e maravilha — é o mesmo que o belo?',
      'Pode existir beleza que ninguém jamais perceberá?',
    ],
    tensoes: [
      { slug: 'objetiva-vs-subjetiva', label: 'Beleza objetiva vs. subjetiva' },
      { slug: 'admiravel-vs-agradavel', label: 'Admirável vs. agradável' },
      { slug: 'desinteressado-vs-instinto', label: 'Juízo desinteressado vs. instinto' },
      { slug: 'belo-vs-sublime', label: 'Belo vs. sublime' },
    ],
    autores: [
      { slug: 'platao', name: 'Platão' },
      { slug: 'aristoteles', name: 'Aristóteles' },
      { slug: 'agostinho', name: 'Agostinho' },
      { slug: 'hume', name: 'Hume' },
      { slug: 'kant', name: 'Kant' },
      { slug: 'darwin', name: 'Darwin' },
    ],
    obras: [
      { slug: 'o-banquete', title: 'O Banquete', author: 'Platão' },
      { slug: 'poetica', title: 'Poética', author: 'Aristóteles' },
      { slug: 'critica-do-juizo', title: 'Crítica do Juízo', author: 'Kant' },
    ],
    debates: [
      { slug: 'gosto-objetivo-ou-subjetivo', title: 'O gosto é objetivo ou subjetivo?' },
      { slug: 'belo-e-sublime', title: 'Belo e sublime são a mesma coisa?' },
    ],
    relatedIdeas: [
      { slug: 'verdade', name: 'Verdade', evidence_status: 'verified', confidence: 'high' },
      { slug: 'arte', name: 'Arte', evidence_status: 'partial', confidence: 'medium' },
      { slug: 'prazer', name: 'Prazer', evidence_status: 'partial', confidence: 'low' },
    ],
  },

  {
    slug: 'liberdade',
    name: 'Liberdade',
    publicName: 'Liberdade',
    axis: 'agir',
    icon: '◯',
    humanQuestion: 'Somos livres para fazer o que queremos, ou para fazer o que é certo?',
    teaser:
      'Liberdade como ausência de obstáculos (Mill) ou como capacidade de agir segundo a razão (Kant)? A distinção entre liberdade e licença é uma das mais importantes na filosofia política.',
    emPoucasPalavras:
      'Há ao menos quatro formas de liberdade no pensamento ocidental: natural (ausência de coerção), moral (autodomínio pela razão), circunstancial (meios e oportunidades reais) e política (participação na lei). Locke vinculou liberdade e propriedade; Mill defendeu a liberdade de expressão mesmo para ideias que detestamos; Kant insistiu que a verdadeira liberdade é obedecer à lei moral que você mesmo estabelece pela razão; Tocqueville alertou sobre a tirania da maioria como ameaça sutil à liberdade.',
    naVidaCotidiana: [
      'Quando você pode fazer algo, mas escolhe não fazer porque seria errado.',
      'Quando uma lei que você não escolheu restringe o que você pode fazer — isso viola sua liberdade?',
      'Quando alguém viciado em algo diz que está "escolhendo livremente" — você concorda?',
      'Quando "liberdade de expressão" é invocada para discursos que causam dano real a outras pessoas.',
    ],
    perguntasReflexivas: [
      'Quem tem mais liberdade: quem pode fazer tudo que quer, ou quem consegue fazer o que é certo?',
      'Uma lei justa que você não escolheu limita ou garante sua liberdade?',
      'Pode existir liberdade real sem igualdade de condições?',
      'A liberdade de um pode ser a prisão de outro?',
    ],
    tensoes: [
      { slug: 'liberdade-vs-licenca', label: 'Liberdade vs. licença' },
      { slug: 'lei-como-barreira-ou-garantia', label: 'Lei como barreira ou garantia' },
      { slug: 'interior-vs-exterior', label: 'Liberdade interior vs. exterior' },
      { slug: 'individual-vs-maioria', label: 'Indivíduo vs. maioria' },
    ],
    autores: [
      { slug: 'locke', name: 'Locke' },
      { slug: 'rousseau', name: 'Rousseau' },
      { slug: 'kant', name: 'Kant' },
      { slug: 'mill', name: 'John Stuart Mill' },
      { slug: 'spinoza', name: 'Spinoza' },
      { slug: 'tocqueville', name: 'Tocqueville' },
    ],
    obras: [
      { slug: 'segundo-tratado-do-governo', title: 'Segundo Tratado do Governo', author: 'Locke' },
      { slug: 'sobre-a-liberdade', title: 'Sobre a Liberdade', author: 'Mill' },
      { slug: 'critica-da-razao-pratica', title: 'Crítica da Razão Prática', author: 'Kant' },
      { slug: 'a-democracia-na-america', title: 'A Democracia na América', author: 'Tocqueville' },
    ],
    debates: [
      { slug: 'liberdade-negativa-vs-positiva', title: 'Liberdade negativa vs. liberdade positiva' },
      { slug: 'liberdade-e-lei', title: 'A lei garante ou limita a liberdade?' },
    ],
    relatedIdeas: [
      { slug: 'igualdade', name: 'Igualdade', evidence_status: 'verified', confidence: 'high' },
      { slug: 'justica', name: 'Justiça', evidence_status: 'verified', confidence: 'high' },
      { slug: 'governo', name: 'Governo', evidence_status: 'partial', confidence: 'medium' },
    ],
  },

  {
    slug: 'igualdade',
    name: 'Igualdade',
    publicName: 'Igualdade',
    axis: 'agir',
    icon: '⊜',
    humanQuestion: 'Em que sentido todos os seres humanos são iguais?',
    teaser:
      'Jefferson declarou que "todos os homens são criados iguais", mas Aristóteles defendia que a justiça trata iguais igualmente e desiguais desigualmente. Como conciliar os dois?',
    emPoucasPalavras:
      'A distinção central é entre igualdade de espécie (todos somos igualmente humanos) e igualdade de grau (diferimos em talentos, virtude, esforço). Adler propõe a síntese: um piso comum de dignidade para todos, com desigualdades de resultado justificáveis apenas quando proporcionais e abertas a todos. Marx radicalizou: a igualdade formal sem igualdade de condições é uma ilusão. Rousseau localizou a origem da desigualdade na propriedade privada.',
    naVidaCotidiana: [
      'Quando cotas são debatidas: igualdade de oportunidade ou igualdade de resultado?',
      'Quando dois estudantes recebem a mesma prova mas chegaram com histórias muito diferentes.',
      'Quando "tratar todos igualmente" pode ser injusto com quem está em desvantagem estrutural.',
      'Quando heranças e nascimento determinam o ponto de partida — isso é aceitável?',
    ],
    perguntasReflexivas: [
      'Igualdade de oportunidade é suficiente, ou precisamos de igualdade de condições?',
      'Pode uma sociedade ser justa sem ser igualitária?',
      'Respeitar as diferenças é incompatível com defender a igualdade?',
      'O que a metáfora da "corrida da vida" revela sobre oportunidades reais?',
    ],
    tensoes: [
      { slug: 'especie-vs-grau', label: 'Igualdade de espécie vs. de grau' },
      { slug: 'oportunidade-vs-condicoes', label: 'Oportunidade vs. condições' },
      { slug: 'aritmetica-vs-proporcional', label: 'Igualdade aritmética vs. proporcional' },
      { slug: 'formal-vs-material', label: 'Igualdade formal vs. material' },
    ],
    autores: [
      { slug: 'aristoteles', name: 'Aristóteles' },
      { slug: 'rousseau', name: 'Rousseau' },
      { slug: 'marx', name: 'Marx' },
      { slug: 'adler', name: 'Mortimer J. Adler' },
    ],
    obras: [
      {
        slug: 'discurso-sobre-a-desigualdade',
        title: 'Discurso sobre a Desigualdade',
        author: 'Rousseau',
      },
      { slug: 'o-capital', title: 'O Capital', author: 'Marx' },
      { slug: 'politica', title: 'Política', author: 'Aristóteles' },
    ],
    debates: [
      {
        slug: 'igualdade-de-oportunidade-ou-resultado',
        title: 'Igualdade de oportunidade ou de resultado?',
      },
      { slug: 'origem-da-desigualdade', title: 'A desigualdade é natural ou construída?' },
    ],
    relatedIdeas: [
      { slug: 'justica', name: 'Justiça', evidence_status: 'verified', confidence: 'high' },
      { slug: 'liberdade', name: 'Liberdade', evidence_status: 'verified', confidence: 'high' },
      { slug: 'governo', name: 'Governo', evidence_status: 'partial', confidence: 'medium' },
    ],
  },

  {
    slug: 'justica',
    name: 'Justiça',
    publicName: 'Justiça',
    axis: 'agir',
    icon: '⊖',
    humanQuestion: 'O que transforma uma lei em lei justa?',
    teaser:
      'A força faz a lei, ou existe um padrão acima das leis positivas pelo qual podemos julgá-las? Desde Sófocles, essa pergunta não encontrou resposta definitiva — mas moldou cada constituição que lemos.',
    emPoucasPalavras:
      'Platão propôs que a justiça é cada parte cumprindo sua função na ordem certa. Aristóteles distinguiu justiça aritmética (partes iguais para todos) de proporcional (partes segundo o mérito). Hobbes afirmou que só há injustiça onde há lei — sem soberano, não há justiça. Locke e Kant insistiram que existe uma lei natural ou racional que avalia as leis positivas. Marx apontou que a "justiça" das sociedades de classe serve aos interesses dos dominantes.',
    naVidaCotidiana: [
      'Quando uma lei parece legal mas claramente injusta — você a obedece ou resiste?',
      'Quando um réu recebe pena diferente por ter dinheiro para contratar um bom advogado.',
      'Quando uma reparação histórica é debatida: o que seria justo para gerações passadas e futuras?',
      'Quando testemunhas de uma injustiça debatem se agir é seu dever ou apenas de quem foi designado.',
    ],
    perguntasReflexivas: [
      'Sem leis, existe injustiça? Ou a injustiça pressupõe uma lei que foi violada?',
      'Cometer uma injustiça é pior do que sofrê-la? Sócrates achava que sim — você concorda?',
      'A força dos mais fortes pode ser legítima, ou é sempre injustiça disfarçada?',
      'O que o Anel de Giges revela sobre a relação entre justiça e medo de ser visto?',
    ],
    tensoes: [
      { slug: 'forca-vs-direito', label: 'Força vs. direito' },
      { slug: 'natural-vs-convencional', label: 'Justiça natural vs. convencional' },
      { slug: 'cometer-vs-sofrer-injustica', label: 'Cometer vs. sofrer injustiça' },
      { slug: 'igualdade-aritmetica-vs-proporcional', label: 'Aritmética vs. proporcional' },
    ],
    autores: [
      { slug: 'sofocles', name: 'Sófocles' },
      { slug: 'platao', name: 'Platão' },
      { slug: 'aristoteles', name: 'Aristóteles' },
      { slug: 'agostinho', name: 'Agostinho' },
      { slug: 'sao-tomas-de-aquino', name: 'Tomás de Aquino' },
      { slug: 'hobbes', name: 'Hobbes' },
      { slug: 'locke', name: 'Locke' },
      { slug: 'kant', name: 'Kant' },
      { slug: 'marx', name: 'Marx' },
    ],
    obras: [
      { slug: 'antigona', title: 'Antígona', author: 'Sófocles' },
      { slug: 'a-republica', title: 'A República', author: 'Platão' },
      { slug: 'etica-a-nicomaco', title: 'Ética a Nicômaco', author: 'Aristóteles' },
      { slug: 'leviata', title: 'Leviatã', author: 'Hobbes' },
      { slug: 'segundo-tratado-do-governo', title: 'Segundo Tratado do Governo', author: 'Locke' },
    ],
    debates: [
      { slug: 'justica-natural-ou-convencional', title: 'A justiça é natural ou convencional?' },
      { slug: 'cometer-ou-sofrer-injustica', title: 'É pior cometer ou sofrer uma injustiça?' },
      { slug: 'forca-e-direito', title: 'A força pode fundar o direito?' },
    ],
    relatedIdeas: [
      { slug: 'liberdade', name: 'Liberdade', evidence_status: 'verified', confidence: 'high' },
      { slug: 'igualdade', name: 'Igualdade', evidence_status: 'verified', confidence: 'high' },
      { slug: 'lei', name: 'Lei', evidence_status: 'partial', confidence: 'medium' },
    ],
  },
]

export const getAxisLabel = (axis: Axis): string =>
  axis === 'julgar' ? 'Eixo do Julgar' : 'Eixo do Agir'

export const getAxisDescription = (axis: Axis): string =>
  axis === 'julgar'
    ? 'Ideias que nos ajudam a avaliar e distinguir o verdadeiro, o bom e o belo'
    : 'Ideias que orientam como agimos juntos — liberdade, igualdade e justiça na vida pública'

export const getSixIdea = (slug: string): SixIdea | undefined =>
  sixIdeas.find((idea) => idea.slug === slug)

export const julgarIdeas = sixIdeas.filter((i) => i.axis === 'julgar')
export const agirIdeas = sixIdeas.filter((i) => i.axis === 'agir')
