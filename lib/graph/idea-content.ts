export type IdeaTensionContent = {
  id: string
  title: string
  question?: string
  thesisA?: string
  thesisB?: string
  authorA?: string
  authorB?: string
  workA?: string
  workB?: string
  evidenceStatus: 'documental' | 'inferida' | 'pedagogica' | 'em_verificacao'
}

export type IdeaPageContent = {
  ideaId: string
  slug: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  tensions: IdeaTensionContent[]
}

const contentMap: Record<string, IdeaPageContent> = {
  verdade: {
    ideaId: 'idea-truth',
    slug: 'verdade',
    primaryCTA: { label: 'Explorar: conhecimento ou opinião?', href: '/debates/conhecer-ou-opinar' },
    secondaryCTA: { label: 'Ver no mapa intelectual', href: '/mapa-intelectual' },
    tensions: [
      {
        id: 'correspondencia-vs-pragmatismo',
        title: 'Correspondência vs. pragmatismo',
        question: 'Uma ideia verdadeira espelha a realidade — ou é a que funciona?',
        thesisA: 'Dizer do que é que é é verdadeiro. A verdade é a correspondência entre o que pensamos e o que as coisas são.',
        thesisB: 'Uma ideia é verdadeira na medida em que é útil para nós — o que funciona, funciona.',
        authorA: 'Aristóteles',
        authorB: 'William James',
        workA: 'Metafísica',
        workB: 'Pragmatismo',
        evidenceStatus: 'inferida',
      },
      {
        id: 'objetividade-vs-relativismo',
        title: 'Objetividade vs. relativismo',
        question: '"Tudo é relativo" — mas será que essa afirmação também é relativa?',
        thesisA: 'Existe uma realidade independente do observador. A verdade não muda segundo quem a formula.',
        thesisB: 'A verdade é sempre uma perspectiva — moldada por cultura, linguagem e experiência pessoal.',
        authorA: 'Aristóteles',
        workA: 'Metafísica',
        evidenceStatus: 'em_verificacao',
      },
      {
        id: 'imutavel-vs-mutavel',
        title: 'Verdade imutável vs. revisável',
        question: 'Quando a ciência revisa o que antes era certo, havia verdade antes?',
        thesisA: 'O conhecimento verdadeiro é recordação: a alma já contemplou as formas eternas antes de habitar um corpo.',
        thesisB: 'Toda ideia deriva de alguma impressão correspondente. O que nunca foi sentido não pode ser pensado — e todo conhecimento é revisável.',
        authorA: 'Platão',
        authorB: 'Hume',
        workA: 'Mênon',
        workB: 'Tratado da Natureza Humana',
        evidenceStatus: 'documental',
      },
      {
        id: 'conhecimento-vs-opiniao',
        title: 'Conhecimento vs. opinião',
        question: 'O que diferencia uma opinião bem fundamentada de um conhecimento?',
        thesisA: 'Conhecimento (episteme) é de grau superior à opinião (doxa): versa sobre o que existe necessariamente, não sobre o que aparece.',
        thesisB: 'Toda afirmação começa como crença. A distinção entre conhecimento e opinião é de grau, não de natureza.',
        authorA: 'Platão',
        workA: 'A República',
        evidenceStatus: 'inferida',
      },
    ],
  },

  bem: {
    ideaId: 'idea-goodness',
    slug: 'bem',
    primaryCTA: { label: 'Descobrir se isso é desejo ou necessidade', href: '/debates/bem-objetivo-ou-subjetivo' },
    secondaryCTA: { label: 'Explorar o Acervo', href: '/acervo' },
    tensions: [
      {
        id: 'bens-reais-vs-aparentes',
        title: 'Bens reais vs. bens aparentes',
        question: 'Como distinguir o que genuinamente nos faz bem do que apenas parece bom?',
        thesisA: 'Toda arte, investigação, ato e escolha visam a algum bem. O bem supremo é a eudaimonia — florescimento humano pela atividade virtuosa.',
        thesisB: 'Bens aparentes seduzem mas não satisfazem necessidades reais. Riqueza, fama e prazer imediato são bens apenas de modo instrumental.',
        authorA: 'Aristóteles',
        workA: 'Ética a Nicômaco',
        evidenceStatus: 'inferida',
      },
      {
        id: 'virtude-vs-fortuna',
        title: 'Virtude vs. fortuna',
        question: 'Se a virtude não garante a felicidade, faz sentido ser virtuoso?',
        thesisA: 'Toda arte, investigação, ato e escolha visam a algum bem; por isso o bem foi definido como aquilo a que todas as coisas tendem.',
        thesisB: 'Não é possível pensar nada no mundo que possa ser considerado bom sem limitação, exceto a boa vontade.',
        authorA: 'Aristóteles',
        authorB: 'Kant',
        workA: 'Ética a Nicômaco',
        workB: 'Fundamentação da Metafísica dos Costumes',
        evidenceStatus: 'documental',
      },
      {
        id: 'relativismo-vs-natureza-humana',
        title: 'Relativismo vs. natureza humana',
        question: 'Existe uma lista objetiva de coisas que são boas para todos os seres humanos?',
        thesisA: 'O bem é aquilo a que todas as coisas tendem — existe uma natureza humana que define o que nos faz bem.',
        thesisB: 'O que é bom varia entre culturas, épocas e indivíduos. Não há um bem objetivo independente de quem avalia.',
        authorA: 'Aristóteles',
        workA: 'Ética a Nicômaco',
        evidenceStatus: 'inferida',
      },
      {
        id: 'necessidade-vs-desejo',
        title: 'Necessidade vs. desejo',
        question: 'Algo pode ser bom para mim mas mau para você ao mesmo tempo?',
        thesisA: 'Necessidades são objetivas e definem o bem real; desejos podem apontar na direção oposta ao que genuinamente nos faz bem.',
        thesisB: 'Desejos são a expressão mais autêntica do que cada indivíduo considera bom para si.',
        evidenceStatus: 'em_verificacao',
      },
    ],
  },

  beleza: {
    ideaId: 'idea-beauty',
    slug: 'beleza',
    primaryCTA: { label: 'Entrar no debate: o gosto pode ser educado?', href: '/debates/gosto-objetivo-ou-subjetivo' },
    secondaryCTA: { label: 'Ver obras de estética', href: '/obras' },
    tensions: [
      {
        id: 'objetiva-vs-subjetiva',
        title: 'Beleza objetiva vs. subjetiva',
        question: 'A beleza está no objeto ou em quem olha?',
        thesisA: 'A beleza em si mesma — pura, sem mistura, não carregada de carne humana — é divina e única em sua forma.',
        thesisB: 'O belo é o que agrada universalmente sem conceito — objeto de uma satisfação desinteressada, não de uma Forma eterna.',
        authorA: 'Platão',
        authorB: 'Kant',
        workA: 'O Banquete',
        workB: 'Crítica da Faculdade do Juízo',
        evidenceStatus: 'documental',
      },
      {
        id: 'admiravel-vs-agradavel',
        title: 'Admirável vs. agradável',
        question: '"Gosto não se discute" — mas você tenta convencer amigos sobre arte. Por quê?',
        thesisA: 'Um julgamento genuinamente estético não é mera preferência pessoal — reivindica concordância universal de todos os seres racionais.',
        thesisB: 'O que nos agrada é simplesmente o que nos agrada. Tentar convencer alguém sobre beleza é confundir gosto com argumento.',
        authorA: 'Kant',
        workA: 'Crítica da Faculdade do Juízo',
        evidenceStatus: 'inferida',
      },
      {
        id: 'desinteressado-vs-instinto',
        title: 'Juízo desinteressado vs. instinto',
        question: 'O sentido estético é uma conquista da razão ou uma herança biológica?',
        thesisA: 'O belo é objeto de uma satisfação desinteressada — apreciado sem nenhum interesse em possuir ou consumir o objeto.',
        thesisB: 'O sentido estético tem raízes evolutivas. A beleza que percebemos reflete adaptações que aumentaram nossa sobrevivência.',
        authorA: 'Kant',
        authorB: 'Darwin',
        workA: 'Crítica da Faculdade do Juízo',
        workB: 'A Origem das Espécies',
        evidenceStatus: 'inferida',
      },
      {
        id: 'belo-vs-sublime',
        title: 'Belo vs. sublime',
        question: 'O sublime — o que nos amedronta e maravilha — é o mesmo que o belo?',
        thesisA: 'O belo nos dá prazer harmônico. O sublime nos esmaga e nos eleva ao mesmo tempo — é da ordem do que excede nossa compreensão.',
        thesisB: 'Belo e sublime são graus de uma mesma experiência estética — ambos revelam a nossa relação com o que nos transcende.',
        evidenceStatus: 'em_verificacao',
      },
    ],
  },

  liberdade: {
    ideaId: 'idea-liberty',
    slug: 'liberdade',
    primaryCTA: { label: 'Explorar liberdade negativa vs. positiva', href: '/debates/liberdade-negativa-vs-positiva' },
    secondaryCTA: { label: 'Ver percursos práticos', href: '/percursos' },
    tensions: [
      {
        id: 'liberdade-vs-licenca',
        title: 'Liberdade vs. licença',
        question: 'Quem tem mais liberdade: quem pode fazer tudo que quer, ou quem consegue fazer o que é certo?',
        thesisA: 'O único propósito pelo qual a força pode ser exercida sobre qualquer membro de uma comunidade é impedir que prejudique outros.',
        thesisB: 'A liberdade é a autonomia da vontade — a capacidade de dar a si mesmo a lei moral sem depender de impulsos externos.',
        authorA: 'J. S. Mill',
        authorB: 'Kant',
        workA: 'Sobre a Liberdade',
        workB: 'Crítica da Razão Prática',
        evidenceStatus: 'documental',
      },
      {
        id: 'lei-como-barreira-ou-garantia',
        title: 'Lei como barreira ou garantia',
        question: 'Uma lei justa que você não escolheu limita ou garante sua liberdade?',
        thesisA: 'A lei sempre restringe o campo do que o indivíduo pode fazer — qualquer regulação é uma limitação da liberdade natural.',
        thesisB: 'A liberdade dos homens sob um governo consiste em ter uma regra permanente para viver, comum a todos — e não estar sujeito à vontade arbitrária de outro.',
        authorB: 'Locke',
        workB: 'Segundo Tratado do Governo Civil',
        evidenceStatus: 'inferida',
      },
      {
        id: 'interior-vs-exterior',
        title: 'Liberdade interior vs. exterior',
        question: 'Pode existir liberdade real sem igualdade de condições?',
        thesisA: 'A liberdade autêntica é interior: obedecer à lei que a própria razão estabelece. Autonomia é o oposto de heteronomia.',
        thesisB: 'A liberdade exterior — ausência de obstáculos físicos, sociais e econômicos — é a liberdade que realmente importa na vida prática.',
        authorA: 'Kant',
        workA: 'Crítica da Razão Prática',
        evidenceStatus: 'inferida',
      },
      {
        id: 'individual-vs-maioria',
        title: 'Indivíduo vs. maioria',
        question: 'A liberdade de um pode ser a prisão de outro?',
        thesisA: 'A tirania da maioria é tão perigosa quanto a tirania de um príncipe — pode sufocar a liberdade individual sem leis formais.',
        thesisB: 'O bem da maioria deve prevalecer sobre os interesses individuais — a democracia é a forma mais legítima de liberdade coletiva.',
        authorA: 'Tocqueville',
        workA: 'A Democracia na América',
        evidenceStatus: 'inferida',
      },
    ],
  },

  igualdade: {
    ideaId: 'idea-equality',
    slug: 'igualdade',
    primaryCTA: { label: 'Ver o dilema da corrida da vida', href: '/debates/igualdade-de-oportunidade-ou-resultado' },
    secondaryCTA: { label: 'Explorar o Acervo', href: '/acervo' },
    tensions: [
      {
        id: 'especie-vs-grau',
        title: 'Igualdade de espécie vs. de grau',
        question: 'Em que sentido todos os seres humanos são iguais?',
        thesisA: 'Todos os seres humanos compartilham a mesma natureza racional e a mesma dignidade — essa é a igualdade fundamental.',
        thesisB: 'Diferimos em talentos, virtude e esforço. Uma sociedade justa reconhece e recompensa essas diferenças.',
        authorB: 'Aristóteles',
        workB: 'Política',
        evidenceStatus: 'inferida',
      },
      {
        id: 'oportunidade-vs-condicoes',
        title: 'Oportunidade vs. condições',
        question: 'Igualdade de oportunidade é suficiente, ou precisamos de igualdade de condições?',
        thesisA: 'As desigualdades naturais são mínimas; as artificiais, criadas pela propriedade e pela lei civil, são imensas e injustas.',
        thesisB: 'Os homens são produto das circunstâncias. Mudar as circunstâncias é a condição necessária para uma igualdade real.',
        authorA: 'Rousseau',
        authorB: 'Marx',
        workA: 'Discurso sobre a Origem da Desigualdade',
        workB: 'O Capital',
        evidenceStatus: 'documental',
      },
      {
        id: 'aritmetica-vs-proporcional',
        title: 'Igualdade aritmética vs. proporcional',
        question: 'Pode uma sociedade ser justa sem ser igualitária?',
        thesisA: 'Justiça é tratar os iguais igualmente e os desiguais desigualmente, na proporção de sua desigualdade.',
        thesisB: 'De cada um segundo suas capacidades, a cada um segundo suas necessidades.',
        authorA: 'Aristóteles',
        authorB: 'Marx',
        workA: 'Ética a Nicômaco',
        workB: 'Crítica ao Programa de Gotha',
        evidenceStatus: 'documental',
      },
      {
        id: 'formal-vs-material',
        title: 'Igualdade formal vs. material',
        question: 'Quando "tratar todos igualmente" pode ser injusto com quem está em desvantagem estrutural?',
        thesisA: 'A igualdade perante a lei — a mesma regra para todos — é o fundamento de qualquer sociedade justa.',
        thesisB: 'A igualdade formal sem igualdade material é uma ilusão que consagra as vantagens de quem já está à frente.',
        evidenceStatus: 'em_verificacao',
      },
    ],
  },

  justica: {
    ideaId: 'idea-justice',
    slug: 'justica',
    primaryCTA: { label: 'Entrar na Arena de Combate', href: '/debates/justica-natural-ou-convencional' },
    secondaryCTA: { label: 'Ver no mapa intelectual', href: '/mapa-intelectual' },
    tensions: [
      {
        id: 'forca-vs-direito',
        title: 'Força vs. direito',
        question: 'A força dos mais fortes pode ser legítima, ou é sempre injustiça disfarçada?',
        thesisA: 'Os homens nascem livres e iguais no estado de natureza; o governo civil existe para proteger os direitos que lhes pertencem por natureza.',
        thesisB: 'Onde não há lei comum estabelecida, não há injustiça. Justo e injusto são qualidades que só pertencem aos homens em sociedade civil.',
        authorA: 'Locke',
        authorB: 'Hobbes',
        workA: 'Segundo Tratado do Governo Civil',
        workB: 'Leviatã',
        evidenceStatus: 'documental',
      },
      {
        id: 'natural-vs-convencional',
        title: 'Justiça natural vs. convencional',
        question: 'Existe uma lei acima das leis positivas pela qual podemos julgá-las?',
        thesisA: 'A lei humana tem razão de lei apenas quando está de acordo com a reta razão. Quando se afasta da razão, é violência, não lei.',
        thesisB: 'Antes que os nomes de justo e injusto possam ter lugar, deve existir algum poder coercitivo. Onde não há tal poder, não há justiça.',
        authorA: 'Tomás de Aquino',
        authorB: 'Hobbes',
        workA: 'Suma Teológica',
        workB: 'Leviatã',
        evidenceStatus: 'documental',
      },
      {
        id: 'cometer-vs-sofrer-injustica',
        title: 'Cometer vs. sofrer injustiça',
        question: 'Cometer uma injustiça é pior do que sofrê-la? Sócrates achava que sim — você concorda?',
        thesisA: 'É preferível sofrer uma injustiça a cometê-la. Quem comete injustiça prejudica primeiro a sua própria alma.',
        thesisB: 'Sofrer uma injustiça é objetivamente o pior — causa dano real à pessoa que a recebe, não ao agente.',
        authorA: 'Platão',
        workA: 'A República',
        evidenceStatus: 'inferida',
      },
      {
        id: 'igualdade-aritmetica-vs-proporcional',
        title: 'Aritmética vs. proporcional',
        question: 'O que seria mais justo: partes iguais para todos, ou partes segundo o mérito?',
        thesisA: 'A justiça é cada parte cumprindo sua função própria — e cada um recebe segundo sua aptidão e mérito.',
        thesisB: 'De cada um segundo suas capacidades, a cada um segundo suas necessidades.',
        authorA: 'Platão',
        authorB: 'Marx',
        workA: 'A República',
        workB: 'Crítica ao Programa de Gotha',
        evidenceStatus: 'documental',
      },
    ],
  },
}

export function getIdeaPageContent(slug: string): IdeaPageContent | null {
  return contentMap[slug] ?? null
}
