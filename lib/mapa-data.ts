// AVISO: Citações nesta camada são paráfrases editoriais para fins de demonstração.
// Não representam traduções literais ou localizadas das obras originais.

export type Axis = 'julgar' | 'agir'

export interface IdeiaNode {
  id: string
  label: string
  icon: string
  axis: Axis
  color: string
  linkTo: string
}

export interface AutorNode {
  id: string
  name: string
  dates: string
  relatedIdeia: string
  obra: string
  obraSlug: string
  quote: string
  quoteContext: string
  disciplina: string
}

export interface LadoConflito {
  filosofo: string
  dates: string
  obra: string
  posicao: string
  passagem: string
  referencia: string
}

export interface ConflictoFilosofico {
  id: string
  title: string
  ideiaSlug: string
  tensaoSlug: string
  tese: LadoConflito
  antitese: LadoConflito
}

export const ideiaNodes: IdeiaNode[] = [
  { id: 'verdade',   label: 'Verdade',   icon: '◎', axis: 'julgar', color: '#6d28d9', linkTo: '/ideias/verdade'   },
  { id: 'bem',       label: 'Bem',       icon: '◈', axis: 'julgar', color: '#6d28d9', linkTo: '/ideias/bem'       },
  { id: 'beleza',    label: 'Beleza',    icon: '◇', axis: 'julgar', color: '#6d28d9', linkTo: '/ideias/beleza'    },
  { id: 'liberdade', label: 'Liberdade', icon: '◉', axis: 'agir',   color: '#15803d', linkTo: '/ideias/liberdade' },
  { id: 'igualdade', label: 'Igualdade', icon: '◬', axis: 'agir',   color: '#15803d', linkTo: '/ideias/igualdade' },
  { id: 'justica',   label: 'Justiça',   icon: '⊡', axis: 'agir',   color: '#15803d', linkTo: '/ideias/justica'   },
]

export const autorNodes: AutorNode[] = [
  // ── Justiça ──────────────────────────────────────────────────────────────
  {
    id: 'sofocles-justica',
    name: 'Sófocles',
    dates: '496–406 a.C.',
    relatedIdeia: 'justica',
    obra: 'Antígona',
    obraSlug: 'antigona',
    quote:
      'Há leis não escritas e imutáveis dos deuses, superiores a qualquer decreto mortal.',
    quoteContext:
      'Antígona defende que a lei divina exige sepultar seu irmão, mesmo contra o édito de Creonte. A peça inaugura o debate entre lei natural e lei positiva.',
    disciplina: 'Tragédia / Direito Natural',
  },
  {
    id: 'platao-justica',
    name: 'Platão',
    dates: '428–348 a.C.',
    relatedIdeia: 'justica',
    obra: 'A República',
    obraSlug: 'a-republica',
    quote:
      'A justiça é cada parte cumprindo sua função própria — o governante governando, o guerreiro defendendo, o artesão produzindo.',
    quoteContext:
      'Na República, Platão define justiça como harmonia funcional: cada classe social ocupa o lugar para o qual é naturalmente apta, sem invadir a função das demais.',
    disciplina: 'Filosofia Política',
  },
  {
    id: 'aristoteles-justica',
    name: 'Aristóteles',
    dates: '384–322 a.C.',
    relatedIdeia: 'justica',
    obra: 'Ética a Nicômaco',
    obraSlug: 'etica-a-nicomaco',
    quote:
      'Justiça é tratar os iguais igualmente e os desiguais desigualmente, na proporção de sua desigualdade.',
    quoteContext:
      'Aristóteles distingue justiça distributiva (proporcional ao mérito) de justiça corretiva (reparação de danos). A igualdade proporcional, não aritmética, é o núcleo de sua ética.',
    disciplina: 'Ética / Filosofia Política',
  },
  {
    id: 'aquino-justica',
    name: 'Tomás de Aquino',
    dates: '1225–1274',
    relatedIdeia: 'justica',
    obra: 'Suma Teológica',
    obraSlug: 'suma-teologica',
    quote:
      'A lei humana tem razão de lei apenas quando está de acordo com a reta razão. Quando se afasta da razão, é violência, não lei.',
    quoteContext:
      'Para Aquino, a legitimidade de qualquer lei civil depende da sua conformidade com a lei natural, que por sua vez deriva da razão divina. Lei injusta não obriga a consciência.',
    disciplina: 'Teologia / Filosofia do Direito',
  },
  {
    id: 'hobbes-justica',
    name: 'Hobbes',
    dates: '1588–1679',
    relatedIdeia: 'justica',
    obra: 'Leviatã',
    obraSlug: 'leviata',
    quote:
      'Onde não há lei comum estabelecida, não há injustiça. Justo e injusto são qualidades que só pertencem aos homens em sociedade civil.',
    quoteContext:
      'Para Hobbes, sem o Estado que cria e impõe a lei, não existe justo nem injusto. A justiça é criação convencional do soberano, não uma ordem moral pré-política.',
    disciplina: 'Filosofia Política / Contratualismo',
  },
  {
    id: 'locke-justica',
    name: 'Locke',
    dates: '1632–1704',
    relatedIdeia: 'justica',
    obra: 'Segundo Tratado do Governo Civil',
    obraSlug: 'segundo-tratado-governo-civil',
    quote:
      'Os homens nascem livres e iguais no estado de natureza; o governo civil existe para proteger os direitos que lhes pertencem por natureza.',
    quoteContext:
      'Locke fundamenta a justiça em direitos naturais — vida, liberdade e propriedade — preexistentes ao Estado. O poder legítimo só existe com consentimento dos governados.',
    disciplina: 'Filosofia Política / Liberalismo',
  },
  {
    id: 'kant-justica',
    name: 'Kant',
    dates: '1724–1804',
    relatedIdeia: 'justica',
    obra: 'A Metafísica dos Costumes',
    obraSlug: 'metafisica-dos-costumes',
    quote:
      'Age segundo a máxima que possas ao mesmo tempo querer que se torne lei universal para todos os seres racionais.',
    quoteContext:
      'O imperativo categórico é o fundamento kantiano da moralidade e da justiça: um ato é justo se a regra que o governa puder ser universalizada sem contradição.',
    disciplina: 'Filosofia Moral / Deontologia',
  },
  {
    id: 'marx-justica',
    name: 'Marx',
    dates: '1818–1883',
    relatedIdeia: 'justica',
    obra: 'Crítica ao Programa de Gotha',
    obraSlug: 'critica-programa-gotha',
    quote:
      'De cada um segundo suas capacidades, a cada um segundo suas necessidades.',
    quoteContext:
      'Marx critica a ideia burguesa de justiça distributiva com base no mérito e propõe distribuição segundo as necessidades reais de cada pessoa, não segundo a sua contribuição produtiva.',
    disciplina: 'Filosofia Política / Socialismo',
  },
  // ── Verdade ───────────────────────────────────────────────────────────────
  {
    id: 'platao-verdade',
    name: 'Platão',
    dates: '428–348 a.C.',
    relatedIdeia: 'verdade',
    obra: 'Mênon',
    obraSlug: 'menon',
    quote:
      'O conhecimento verdadeiro é recordação: a alma já contemplou as formas eternas antes de habitar um corpo.',
    quoteContext:
      'A teoria da anamnese: aprender é re-lembrar o que a alma conheceu no mundo das Formas antes de encarnar.',
    disciplina: 'Epistemologia',
  },
  {
    id: 'aristoteles-verdade',
    name: 'Aristóteles',
    dates: '384–322 a.C.',
    relatedIdeia: 'verdade',
    obra: 'Metafísica',
    obraSlug: 'metafisica',
    quote:
      'Dizer do que é que não é, ou do que não é que é, é falso; dizer do que é que é é verdadeiro.',
    quoteContext:
      'Aristóteles formula a teoria da correspondência: uma proposição é verdadeira quando corresponde à realidade.',
    disciplina: 'Epistemologia / Lógica',
  },
  {
    id: 'hume-verdade',
    name: 'Hume',
    dates: '1711–1776',
    relatedIdeia: 'verdade',
    obra: 'Tratado da Natureza Humana',
    obraSlug: 'tratado-natureza-humana',
    quote:
      'Toda ideia deriva de alguma impressão correspondente. O que nunca foi sentido não pode ser pensado.',
    quoteContext:
      'Para Hume, todo conhecimento legítimo tem origem em impressões sensíveis. Afirmações sem base na experiência são destituídas de significado cognitivo.',
    disciplina: 'Empirismo',
  },
  // ── Bem ──────────────────────────────────────────────────────────────────
  {
    id: 'aristoteles-bem',
    name: 'Aristóteles',
    dates: '384–322 a.C.',
    relatedIdeia: 'bem',
    obra: 'Ética a Nicômaco',
    obraSlug: 'etica-a-nicomaco',
    quote:
      'Toda arte, investigação, ato e escolha visam a algum bem; por isso o bem foi definido como aquilo a que todas as coisas tendem.',
    quoteContext:
      'Aristóteles abre a Ética a Nicômaco afirmando que o bem é o fim de todas as ações. O bem supremo é a eudaimonia — florescimento humano pela atividade virtuosa.',
    disciplina: 'Ética',
  },
  {
    id: 'kant-bem',
    name: 'Kant',
    dates: '1724–1804',
    relatedIdeia: 'bem',
    obra: 'Fundamentação da Metafísica dos Costumes',
    obraSlug: 'fundamentacao-da-metafisica-dos-costumes',
    quote:
      'Não é possível pensar nada no mundo que possa ser considerado bom sem limitação, exceto a boa vontade.',
    quoteContext:
      'Kant rejeita que riqueza, saúde ou felicidade sejam bens incondicionais. Apenas a boa vontade — agir por dever — é intrinsecamente boa.',
    disciplina: 'Ética Deontológica',
  },
  // ── Beleza ────────────────────────────────────────────────────────────────
  {
    id: 'platao-beleza',
    name: 'Platão',
    dates: '428–348 a.C.',
    relatedIdeia: 'beleza',
    obra: 'O Banquete',
    obraSlug: 'o-banquete',
    quote:
      'A beleza em si mesma — pura, sem mistura, não carregada de carne humana — é divina e única em sua forma.',
    quoteContext:
      'No discurso de Diotima no Banquete, a ascensão erótica culmina na contemplação da Forma da Beleza absoluta, eterna, imutável.',
    disciplina: 'Estética / Metafísica',
  },
  {
    id: 'kant-beleza',
    name: 'Kant',
    dates: '1724–1804',
    relatedIdeia: 'beleza',
    obra: 'Crítica da Faculdade do Juízo',
    obraSlug: 'critica-faculdade-juizo',
    quote:
      'O belo é o que agrada universalmente sem conceito — objeto de uma satisfação desinteressada.',
    quoteContext:
      'Para Kant, o julgamento estético é subjetivo (sem conceito determinante) mas reivindica validade universal. A beleza nasce do livre jogo entre imaginação e entendimento.',
    disciplina: 'Estética',
  },
  // ── Liberdade ────────────────────────────────────────────────────────────
  {
    id: 'locke-liberdade',
    name: 'Locke',
    dates: '1632–1704',
    relatedIdeia: 'liberdade',
    obra: 'Segundo Tratado do Governo Civil',
    obraSlug: 'segundo-tratado-governo-civil',
    quote:
      'A liberdade dos homens sob um governo consiste em ter uma regra permanente para viver, comum a todos — e não estar sujeito à vontade arbitrária de outro.',
    quoteContext:
      'Para Locke, liberdade não é ausência de lei, mas segurança de viver sob leis previsíveis, iguais para todos.',
    disciplina: 'Filosofia Política / Liberalismo',
  },
  {
    id: 'mill-liberdade',
    name: 'J. S. Mill',
    dates: '1806–1873',
    relatedIdeia: 'liberdade',
    obra: 'Sobre a Liberdade',
    obraSlug: 'sobre-a-liberdade',
    quote:
      'O único propósito pelo qual a força pode ser exercida sobre qualquer membro de uma comunidade é impedir que prejudique outros.',
    quoteContext:
      'Mill formula o princípio do dano: o Estado pode limitar a liberdade apenas para proteger terceiros. Ações que afetam só o próprio agente devem permanecer livres.',
    disciplina: 'Filosofia Política / Liberalismo',
  },
  {
    id: 'kant-liberdade',
    name: 'Kant',
    dates: '1724–1804',
    relatedIdeia: 'liberdade',
    obra: 'Crítica da Razão Prática',
    obraSlug: 'critica-razao-pratica',
    quote:
      'A liberdade é a autonomia da vontade — a capacidade de dar a si mesmo a lei moral sem depender de impulsos externos.',
    quoteContext:
      'Para Kant, a liberdade autêntica não é fazer o que se quer, mas obedecer à lei que a própria razão estabelece. Autonomia é o oposto de heteronomia (ser governado por desejos ou outros).',
    disciplina: 'Filosofia Moral',
  },
  // ── Igualdade ─────────────────────────────────────────────────────────────
  {
    id: 'rousseau-igualdade',
    name: 'Rousseau',
    dates: '1712–1778',
    relatedIdeia: 'igualdade',
    obra: 'Discurso sobre a Origem da Desigualdade',
    obraSlug: 'discurso-origem-desigualdade',
    quote:
      'As desigualdades naturais são mínimas; as artificiais, criadas pela propriedade e pela lei civil, são imensas e injustas.',
    quoteContext:
      'No Segundo Discurso, Rousseau distingue desigualdade natural (física) de desigualdade moral (social). A segunda nasce da propriedade e da convivência civil, não da natureza.',
    disciplina: 'Filosofia Política',
  },
  {
    id: 'marx-igualdade',
    name: 'Marx',
    dates: '1818–1883',
    relatedIdeia: 'igualdade',
    obra: 'O Capital',
    obraSlug: 'o-capital',
    quote:
      'Os homens são produto das circunstâncias. Mudar as circunstâncias é a condição necessária para uma igualdade real.',
    quoteContext:
      'Marx argumenta que desigualdades não derivam da natureza humana, mas das relações de produção. Mudar as estruturas econômicas é a condição para igualdade real.',
    disciplina: 'Filosofia Política / Marxismo',
  },
]

export const conflitosFilosoficos: ConflictoFilosofico[] = [
  {
    id: 'hobbes-vs-aquino-justica',
    title: 'Hobbes vs. Tomás de Aquino',
    ideiaSlug: 'justica',
    tensaoSlug: 'lei-natural-vs-lei-positiva',
    tese: {
      filosofo: 'Tomás de Aquino',
      dates: '1225–1274',
      obra: 'Suma Teológica',
      posicao: 'A justiça existe antes e acima da lei humana',
      passagem:
        'A lei humana tem razão de lei somente na medida em que está de acordo com a reta razão — e nesse sentido procede da lei eterna. Na medida em que se afasta da razão, não tem natureza de lei, mas de violência.',
      referencia: 'Suma Teológica, I-II, q. 93, a. 3 [paráfrase editorial]',
    },
    antitese: {
      filosofo: 'Thomas Hobbes',
      dates: '1588–1679',
      obra: 'Leviatã',
      posicao: 'A justiça é criação do Estado — não existe sem lei positiva',
      passagem:
        'Antes que os nomes de justo e injusto possam ter lugar, deve existir algum poder coercitivo que constranja igualmente os homens ao cumprimento de seus pactos. Onde não há tal poder, não há justiça.',
      referencia: 'Leviatã, Parte I, Cap. XV [paráfrase editorial]',
    },
  },
  {
    id: 'platao-vs-marx-justica',
    title: 'Platão vs. Marx',
    ideiaSlug: 'justica',
    tensaoSlug: 'merito-vs-necessidade',
    tese: {
      filosofo: 'Platão',
      dates: '428–348 a.C.',
      obra: 'A República',
      posicao: 'Distribuir segundo o mérito e a aptidão natural',
      passagem:
        'A justiça é que cada um pratique a função que lhe cabe por natureza, sem invadir as dos outros. Cada um recebe o que é seu de direito, na medida em que é o mais capaz para aquela função.',
      referencia: 'A República, Livro IV, 433a [paráfrase editorial]',
    },
    antitese: {
      filosofo: 'Karl Marx',
      dates: '1818–1883',
      obra: 'Crítica ao Programa de Gotha',
      posicao: 'Distribuir segundo as necessidades reais de cada pessoa',
      passagem:
        'Em uma fase superior da sociedade, quando a subordinação escravizante à divisão do trabalho tiver desaparecido, só então será possível ultrapassar o estreito horizonte do direito burguês: de cada um segundo suas capacidades, a cada um segundo suas necessidades.',
      referencia: 'Crítica ao Programa de Gotha [paráfrase editorial]',
    },
  },
]
