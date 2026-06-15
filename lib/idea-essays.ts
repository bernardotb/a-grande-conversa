export type IdeaEssayQuote = {
  text: string;
  source: string;
};

export type IdeaEssaySection = {
  thinkerId: string;
  keyWork: string;
  paragraphs: string[];
  quotes: IdeaEssayQuote[];
};

export type IdeaEssay = {
  slug: string;
  title: string;
  introduction: string;
  sourceNote: string;
  sections: IdeaEssaySection[];
};

const democracyEssay: IdeaEssay = {
  slug: "democracia",
  title: "A conversa sobre a democracia",
  introduction:
    "Do debate constitucional narrado por Heródoto à crítica econômica de Marx, a democracia aparece como promessa de igualdade política e como problema permanente de competência, liberdade, representação, poder da maioria e desigualdade social.",
  sourceNote:
    "Texto em português preparado a partir do PDF “Democracy - The Great Conversation”, fornecido ao projeto em 14 de junho de 2026.",
  sections: [
    {
      thinkerId: "herodotus",
      keyWork: "Histórias",
      paragraphs: [
        "O debate persa narrado no Livro III, 80–83, é o primeiro texto grego em que as vantagens do governo popular, da oligarquia e da monarquia são discutidas por porta-vozes nomeados. Otanes propõe a isonomia, a igualdade perante a lei, e apresenta seus benefícios: os cargos são distribuídos por sorteio, os magistrados prestam contas ao fim do mandato e os assuntos públicos são conduzidos diante da comunidade reunida. Megabizo responde em favor da oligarquia: a multidão não teria disciplina nem discernimento, e entregar o Estado ao povo seria trocar um tirano por muitos. Dario defende a monarquia, alegando que um único homem excelente governaria com mais justiça do que qualquer conselho. Heródoto registra que a maioria dos sete conspiradores aceita a posição de Dario.",
        "Embora a cena seja apresentada como episódio da história persa, o público grego reconheceria nela os conflitos constitucionais de suas próprias cidades. Os sinais do governo popular enumerados por Otanes se tornariam características definidoras da tradição democrática: cargos temporários em vez de vitalícios, responsabilização dos governantes e deliberação pública perante a assembleia.",
        "Em outras passagens, Heródoto mostra essas práticas em funcionamento. No Livro V, ele destaca a isegoria, o igual direito à palavra conquistado pelos atenienses depois da expulsão dos Pisistrátidas, e atribui a essa igualdade parte da nova energia militar da cidade. No Livro VI, descreve a reorganização das tribos da Ática por Clístenes, que misturou os demos para impedir que antigas lealdades familiares e regionais dominassem o interesse comum. O historiador não declara um vencedor entre as constituições, mas liga claramente a ascensão de Atenas à participação política dos cidadãos comuns.",
        "O relato estabelece os termos de toda a discussão posterior. A acusação de Otanes, segundo a qual o poder absoluto corrompe até o melhor caráter, alimenta a crítica da tirania. A objeção de Megabizo, de que a multidão julga mal, reaparece em Platão e permanece como desafio aos defensores do governo popular. A preferência de Dario pelo melhor homem antecipa a defesa aristotélica da realeza plena e o ideal medieval de monarquia. A democracia será defendida pela justiça da isonomia e atacada pela suposta incompetência do povo."
      ],
      quotes: [
        {
          text:
            "O governo de muitos tem, para começar, o mais belo de todos os nomes: isonomia. Os cargos são distribuídos por sorteio, o magistrado presta contas e todas as questões são submetidas à comunidade.",
          source: "Histórias, III.80"
        },
        {
          text:
            "É evidente que a igualdade da palavra tem grande valor: livres dos déspotas, os atenienses se tornaram de longe os primeiros.",
          source: "Histórias, V.78"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "A análise de Platão no Livro VIII da República é severamente crítica. A democracia surge quando a oligarquia produz tamanha desigualdade que a maioria pobre se revolta e toma o poder. Sua marca distintiva é a liberdade: isonomia, igualdade perante a lei, e parresia, liberdade para dizer qualquer coisa. Todos os desejos passam a ser tratados como equivalentes e cada cidadão vive como bem entende.",
        "Platão reconhece o encanto inicial dessa ordem. Ela é variada, colorida e oferece muitos modos de vida. Mas lhe falta um princípio de hierarquia. Os desejos se multiplicam sem disciplina, o apetite ocupa o lugar da razão, os sábios são desprezados e os aduladores prosperam. Quando um líder popular promete proteger o povo contra os ricos, torna-se primeiro campeão da multidão e depois seu senhor. O excesso de liberdade prepara o excesso de servidão: a democracia dá origem ao tirano.",
        "A acusação central é epistemológica. Um regime baseado apenas em igualdade e liberdade não responde adequadamente à pergunta sobre quem deve governar. Governar exige conhecimento, e nem o sorteio nem o voto garantem competência. Sem sabedoria filosófica no leme, a cidade se assemelha a um navio conduzido por marinheiros que disputam o comando sem compreender a arte da navegação.",
        "Platão deixa para os autores seguintes o problema decisivo: como impedir que o governo da maioria se transforme em governo do apetite, em domínio da lisonja e, por fim, na tirania de um demagogo."
      ],
      quotes: [
        {
          text:
            "A democracia é uma forma encantadora de governo, cheia de variedade e desordem, distribuindo uma espécie de igualdade a iguais e desiguais.",
          source: "República, VIII.558c"
        },
        {
          text: "O excesso de liberdade parece transformar-se apenas no excesso de escravidão.",
          source: "República, VIII.564a"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Política",
      paragraphs: [
        "Aristóteles classifica os regimes segundo o número de governantes e o interesse a que servem. O governo de um, de poucos ou de muitos em favor do bem comum produz realeza, aristocracia e politeia. Quando cada grupo governa em benefício próprio, surgem tirania, oligarquia e democracia. Nesse esquema, a democracia pura é um desvio: o governo dos muitos pobres para vantagem de sua própria classe, não da comunidade inteira.",
        "Sua análise, porém, é mais empírica e flexível do que a de Platão. Aristóteles observa cidades gregas reais e conclui que democracia e oligarquia são os regimes que efetivamente predominam. Por isso, estuda suas diferentes formas. Algumas democracias são moderadas, dão participação aos pobres e preservam o governo das leis; outras são extremas, e nelas o demos atua como um tirano coletivo.",
        "O melhor regime praticável é a politeia, uma mistura de elementos democráticos e oligárquicos sustentada por uma classe média numerosa, capaz de conter os extremos da riqueza e da pobreza. A estabilidade política depende menos de uma forma pura do que de uma composição social equilibrada.",
        "Aristóteles também admite que os muitos, quando deliberam juntos, podem perceber mais do que os poucos. Cada pessoa oferece uma parcela de virtude e sabedoria prática; reunidas, essas parcelas podem produzir um juízo superior ao de qualquer indivíduo. Essa passagem se tornaria a base de argumentos posteriores sobre o valor cognitivo da deliberação democrática.",
        "Permanece uma dificuldade: até que ponto a estabilidade do regime misto exige relativa igualdade econômica? Tocqueville e Mill reencontrariam esse problema quando a igualdade política passou a coexistir com desigualdades comerciais cada vez maiores."
      ],
      quotes: [
        {
          text:
            "Os muitos, embora cada indivíduo não seja um homem bom, quando se reúnem podem ser melhores do que os poucos bons.",
          source: "Política, III.11"
        },
        {
          text: "A melhor comunidade política é formada por cidadãos da classe média.",
          source: "Política, IV.11"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Tomás de Aquino herda de Aristóteles a análise dos regimes e a integra à teologia cristã. Na Suma Teológica, ao examinar a Lei Antiga, pergunta que forma de governo foi instituída por Moisés. Sua resposta é que se tratava de um regime bem misturado: havia um governante singular, depois os juízes; um conselho de anciãos escolhidos por sua virtude; e participação do povo tanto na escolha dos dirigentes quanto no consentimento às leis.",
        "Esse governo misto seria o melhor por natureza. A monarquia pura é eficiente, mas corre o risco de degenerar em tirania. Aristocracia e democracia puras também carregam perigos próprios. A combinação das três formas — governo de um, participação dos virtuosos e consentimento dos muitos — oferece maior estabilidade e justiça.",
        "Aquino insiste ainda que a lei só é verdadeiramente lei quando se orienta ao bem comum e é promulgada por quem tem o cuidado da comunidade, pessoalmente ou por meio de representantes. A autoridade política não é uma posse privada do governante; recebe sentido da comunidade a que serve.",
        "Esse princípio seria desenvolvido pelos escolásticos posteriores e pela tradição do direito natural, contribuindo para a doutrina moderna da soberania popular. O povo participa do regime não apenas como destinatário da lei, mas como fonte de escolha, consentimento e finalidade comum."
      ],
      quotes: [
        {
          text:
            "Tal forma de governo seria a melhor, sendo em parte reino, em parte aristocracia e em parte democracia, pois os governantes podem ser escolhidos entre o povo e o povo tem o direito de escolhê-los.",
          source: "Suma Teológica, I–II, q. 105, a. 1"
        },
        {
          text: "A lei, propriamente falando, considera antes de tudo a ordenação ao bem comum.",
          source: "Suma Teológica, I–II, q. 90, a. 2"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Para Hobbes, a única saída da guerra de todos contra todos é um pacto pelo qual os indivíduos abandonam o direito natural de governar a si mesmos e autorizam um poder soberano. Esse poder pode pertencer a um monarca, a uma assembleia de poucos ou a uma assembleia de todos — monarquia, aristocracia ou democracia —, mas em qualquer caso sua autoridade deve ser absoluta e indivisível.",
        "Hobbes não rejeita a democracia em princípio. Ele admite que o contrato originário produz uma assembleia democrática, que depois pode transferir o poder a outra forma de governo. O que ele recusa é a soberania dividida. A ideia republicana de um governo misto entre rei, nobres e comuns lhe parece uma receita para a guerra civil. Todo corpo político precisa falar com uma só voz ou se dissolver em facções.",
        "Ele também desconfia da deliberação democrática por razões práticas. Assembleias podem ser dominadas pela retórica, são lentas em emergências e abrigam acordos secretos. Contudo, seu argumento mais profundo é estrutural: onde quer que esteja, a soberania precisa ser suprema. A virtude de um regime não depende de ser popular ou monárquico, mas da unidade efetiva de seu comando.",
        "O problema deixado aos democratas posteriores é como fazer os muitos falarem como um só corpo sem produzir paralisia, guerra entre poderes ou tirania."
      ],
      quotes: [
        {
          text:
            "Uma república é instituída quando uma multidão concorda que a maioria dará a um homem ou a uma assembleia o direito de representar a pessoa de todos.",
          source: "Leviatã, II.18"
        },
        {
          text: "Um reino dividido contra si mesmo não pode permanecer.",
          source: "Leviatã, II.18"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Segundo Tratado sobre o Governo",
      paragraphs: [
        "Locke reconstrói a política sobre consentimento e direitos. No estado de natureza, cada pessoa possui direitos à vida, à liberdade e à propriedade, além do poder de defendê-los. Para escapar aos inconvenientes da justiça exercida por conta própria, os indivíduos formam uma sociedade política e consentem em ser governados. Como a unanimidade é impraticável, a comunidade precisa mover-se pela decisão da maioria.",
        "O poder majoritário, entretanto, não é ilimitado. O governo existe para proteger direitos naturais. Quando um governo, inclusive uma legislatura eleita, viola esses direitos, rompe a confiança da qual recebe autoridade. O povo conserva o direito de resistir e, se necessário, de se revoltar. A soberania está no povo, mas o próprio povo permanece vinculado à lei moral que tornou o consentimento obrigatório.",
        "Locke prefere instituições representativas, separação entre poder legislativo e executivo e governo das leis em lugar do comando arbitrário. Ele oferece à democracia liberal sua combinação característica: decisão por maioria, direitos individuais e direito de substituir governantes que traem a confiança pública.",
        "Sua teoria deixa uma tensão. A maioria só é legítima dentro dos limites da lei natural, mas não há uma instituição claramente superior encarregada de impor esses limites. Rousseau considerará essa solução incoerente; os fundadores americanos tentarão enfrentá-la por meio de constituição escrita, separação de poderes e controle judicial."
      ],
      quotes: [
        {
          text: "A maioria tem o direito de agir e decidir pelo restante.",
          source: "Segundo Tratado, §96"
        },
        {
          text:
            "Quando os legisladores procuram destruir a propriedade do povo, colocam-se em estado de guerra contra ele, que fica dispensado de qualquer obediência posterior.",
          source: "Segundo Tratado, §222"
        }
      ]
    },
    {
      thinkerId: "montesquieu",
      keyWork: "O Espírito das Leis",
      paragraphs: [
        "Montesquieu associa cada regime a um princípio, isto é, à paixão que move seus cidadãos. A monarquia funciona pela honra, o despotismo pelo medo e a república, incluindo a democracia, pela virtude: amor à pátria e às leis, disposição de preferir o bem público ao interesse particular. Quando a virtude desaparece, a república se corrompe.",
        "A democracia é, portanto, exigente. Não pode depender apenas do interesse próprio. Precisa formar um ethos cívico por meio da educação, da religião, dos costumes e de uma modesta igualdade de condições. Desigualdade extrema e luxo rompem o vínculo de finalidade comum de que o autogoverno depende.",
        "Sua outra grande contribuição é a separação de poderes. A liberdade se preserva melhor quando as funções legislativa, executiva e judicial pertencem a corpos distintos, capazes de conter uns aos outros. Essa arquitetura, apropriada pelos fundadores americanos, se tornaria a espinha dorsal da democracia constitucional moderna.",
        "A teoria tem, assim, dois lados inseparáveis: uma descrição do caráter cívico necessário ao regime e um desenho institucional que mantém dentro de limites até mesmo o poder de cidadãos virtuosos."
      ],
      quotes: [
        {
          text:
            "Quando a virtude é banida, a ambição invade os espíritos dispostos a recebê-la e a avareza toma conta de toda a comunidade.",
          source: "O Espírito das Leis, III.3"
        },
        {
          text: "É preciso que o poder contenha o poder.",
          source: "O Espírito das Leis, XI.4"
        }
      ]
    },
    {
      thinkerId: "rousseau",
      keyWork: "O Contrato Social",
      paragraphs: [
        "Rousseau radicaliza a tradição do consentimento. A autoridade política só é legítima quando cada indivíduo se entrega por inteiro ao corpo coletivo e obedece à vontade geral, orientada ao bem comum. Ao obedecer a essa vontade, cada cidadão obedece a si mesmo. Daí o célebre paradoxo de que alguém pode ser obrigado a ser livre.",
        "A soberania é inalienável e indivisível. Não pode ser entregue a representantes, dividida entre poderes ou separada do povo. Os ingleses, afirma Rousseau, imaginam ser livres, mas só o são no dia das eleições; assim que escolhem representantes, tornam-se escravos. Uma democracia verdadeira exigiria participação direta e Estados pequenos.",
        "Rousseau reconhece a dificuldade de seu ideal. Duvida que uma democracia pura tenha existido ou possa existir entre seres humanos: um povo de deuses se governaria democraticamente. Mesmo assim, sustenta que todo regime legítimo deve receber autoridade da vontade geral e permanecer dentro do horizonte da soberania popular.",
        "Sua posição torna a soberania popular absoluta. O problema passa a ser como identificar e expressar a vontade geral sem convertê-la em instrumento de opressão majoritária, manipulação ou unanimidade forçada."
      ],
      quotes: [
        {
          text: "O homem nasce livre, e por toda parte encontra-se acorrentado.",
          source: "O Contrato Social, I.1"
        },
        {
          text:
            "A soberania não pode ser representada, pela mesma razão que não pode ser alienada.",
          source: "O Contrato Social, III.15"
        }
      ]
    },
    {
      thinkerId: "jefferson",
      keyWork: "Declaração de Independência",
      paragraphs: [
        "Ao redigir a Declaração de Independência em 1776, Jefferson dá forma pública e concisa às premissas lockeanas dos direitos naturais e do consentimento. Os governos recebem seus poderes justos dos governados; quando destroem os fins para os quais foram instituídos, o povo conserva o direito de alterá-los ou aboli-los.",
        "Jefferson não é principalmente um filósofo sistemático. Como fazendeiro da Virgínia, advogado e estadista, desenvolve as consequências da soberania popular em documentos públicos, legislação e extensa correspondência: sufrágio, religião, educação, escravidão e federalismo. A Declaração, as Notas sobre o Estado da Virgínia e as cartas trocadas com John Adams formam o núcleo de seu pensamento político.",
        "Nas cartas a Adams, distingue a aristocracia natural de virtude e talentos da pseudoaristocracia de riqueza e nascimento. A eleição livre deveria selecionar a primeira e impedir a segunda. Nas Notas, defende pequenas unidades locais de autogoverno, nas quais cada cidadão participaria dos assuntos públicos, e um sistema de ensino capaz de descobrir talentos em todas as condições sociais.",
        "As mesmas Notas expõem a contradição decisiva da república americana: a escravidão de pessoas negras dentro de uma ordem fundada na igualdade de direitos. Jefferson reconhece o problema e o teme, mas não o resolve em sua própria vida.",
        "Contra Rousseau, que desconfiava da representação, e Montesquieu, que julgava a república adequada apenas a pequenos territórios, Jefferson, Madison e Hamilton apostam que a representação pode servir ao governo popular em escala continental. Sua confiança no povo depende, porém, da educação cívica e da possibilidade de fazer subir aos cargos públicos uma aristocracia natural aberta a todas as origens."
      ],
      quotes: [
        {
          text:
            "Consideramos evidentes estas verdades: que todos os homens são criados iguais e dotados de certos direitos inalienáveis, entre os quais a vida, a liberdade e a busca da felicidade.",
          source: "Declaração de Independência"
        },
        {
          text:
            "Existe entre os homens uma aristocracia natural. Seus fundamentos são a virtude e os talentos.",
          source: "Carta a John Adams, 28 de outubro de 1813"
        }
      ]
    },
    {
      thinkerId: "federalists",
      keyWork: "O Federalista",
      paragraphs: [
        "Hamilton, Madison e Jay escrevem O Federalista para defender uma nova espécie de governo popular: a república representativa, distinta das pequenas democracias diretas que a teoria clássica considerava instáveis. Contra Montesquieu, que associava repúblicas a territórios pequenos, Madison argumenta no Federalista nº 10 que uma república extensa oferece proteção adicional: quanto mais facções existirem, mais difícil será para uma delas formar maioria e oprimir as demais.",
        "A inovação combina escala e representação. A participação direta cede lugar a delegados eleitos, capazes de refinar e ampliar as opiniões públicas. A soberania continua pertencendo ao povo, mas passa por instituições destinadas a desacelerar paixões, dividir competências e conter ambições.",
        "O Federalista nº 51 formula o princípio com clareza: se os homens fossem anjos, nenhum governo seria necessário; como não são, a ambição deve conter a ambição. Os poderes precisam ser separados e cada departamento deve dispor de meios para controlar os outros.",
        "A distinção entre democracia direta, de tipo ateniense, e república representativa e extensa se torna central no vocabulário constitucional americano. Os autores defendem a soberania popular ao mesmo tempo que desenham barreiras contra seus excessos: tirania da maioria, calor das facções e adulação dos demagogos."
      ],
      quotes: [
        {
          text:
            "Se os homens fossem anjos, nenhum governo seria necessário. Se anjos governassem os homens, não seriam necessários controles externos nem internos sobre o governo.",
          source: "O Federalista, nº 51"
        },
        {
          text: "As causas latentes da facção estão semeadas na natureza humana.",
          source: "O Federalista, nº 10"
        }
      ]
    },
    {
      thinkerId: "tocqueville",
      keyWork: "A Democracia na América",
      paragraphs: [
        "Tocqueville entende a democracia como algo maior do que uma forma de governo. Ela é uma condição social: o nivelamento gradual e aparentemente providencial das posições que vinha se desenvolvendo no Ocidente havia séculos. Nos Estados Unidos, ele observa essa condição em estágio avançado e pergunta o que pode preservar a liberdade dentro dela.",
        "As associações civis, religiosas e profissionais multiplicam espaços de autogoverno entre o indivíduo e o Estado. A vida municipal, um Judiciário independente, a religião e a imprensa livre habituam os cidadãos à ação pública e limitam a tendência centralizadora da igualdade democrática.",
        "Suas advertências, porém, são célebres. A maioria pode exercer uma tirania mais branda do que o despotismo antigo, mas também mais penetrante. Ela não precisa usar correntes: basta a pressão sufocante da opinião pública sobre o pensamento e a palavra. O individualismo pode retirar os cidadãos para a vida privada, enquanto o Estado cresce oferecendo cuidado e administração para todas as necessidades.",
        "O resultado possível é um despotismo suave: um poder tutelar, detalhista e benevolente que reduz cidadãos a indivíduos passivos, ocupados apenas com interesses particulares. Tocqueville investiga, portanto, tanto as condições que sustentam o governo democrático quanto seus perigos específicos: conformismo, centralização e abandono da vida pública."
      ],
      quotes: [
        {
          text:
            "Não conheço país em que haja tão pouca independência de espírito e verdadeira liberdade de discussão quanto na América.",
          source: "A Democracia na América, I.2.7"
        },
        {
          text:
            "Acima dessa multidão ergue-se um poder imenso e tutelar, absoluto, minucioso, regular, previdente e brando.",
          source: "A Democracia na América, II.4.6"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Considerações sobre o Governo Representativo",
      paragraphs: [
        "Mill é um democrata convicto, mas cauteloso. Nas Considerações, sustenta que o governo representativo é, em princípio, a melhor forma de regime: exercita as faculdades ativas dos cidadãos, protege seus interesses e permite que todos os afetados tenham voz. A democracia, contudo, possui perigos próprios, e Mill procura desenhar instituições capazes de corrigi-los.",
        "O principal risco é a tirania da maioria, expressão herdada de Tocqueville. Sobre a Liberdade defende a individualidade contra a pressão legal e social das maiorias democráticas. O poder só pode ser legitimamente exercido contra a vontade de alguém para impedir dano a terceiros. Opiniões, experiências de vida e modos de caráter não convencionais devem ser protegidos mesmo quando desagradam à maioria.",
        "Mill experimenta ainda soluções institucionais: voto plural ponderado pela educação, representação proporcional, comissões legislativas competentes e um serviço público informado. Seu objetivo não é substituir a democracia, mas aperfeiçoá-la: tornar o governo da maioria eficaz e, ao mesmo tempo, subordinado às exigências superiores da liberdade e do juízo qualificado.",
        "Há uma tensão não resolvida. Se votos educados recebem maior peso, e se trabalhadores e mulheres são excluídos da melhor educação, a democracia qualificada pode reproduzir desigualdades políticas que a tradição dos direitos naturais pretendia eliminar."
      ],
      quotes: [
        {
          text:
            "A única liberdade que merece esse nome é a de buscar nosso próprio bem à nossa maneira.",
          source: "Sobre a Liberdade, I"
        },
        {
          text:
            "Um governo nunca pode ter em excesso a atividade que, em vez de impedir, auxilia e estimula o esforço e o desenvolvimento individuais.",
          source: "Sobre a Liberdade, V"
        }
      ]
    },
    {
      thinkerId: "marx",
      keyWork: "Manifesto do Partido Comunista",
      paragraphs: [
        "Marx trata a democracia liberal com uma mistura de reconhecimento e desprezo. Reconhece que as revoluções burguesas derrubaram hierarquias feudais, proclamaram igualdade perante a lei e conquistaram direitos formais de expressão, reunião e voto. Mas considera esses direitos insuficientes: por trás do Estado democrático está o capital, proprietário dos meios de produção e, portanto, das condições reais da vida.",
        "Em Sobre a Questão Judaica, distingue emancipação política de emancipação humana. O Estado moderno pode reconhecer cidadãos juridicamente iguais enquanto a sociedade permanece fraturada por classes. O sufrágio universal não elimina a relação salarial e as eleições não submetem a economia ao controle coletivo. Enquanto persistir o capitalismo, a democracia permanece, em última análise, uma forma de domínio burguês.",
        "Uma democracia real exigiria a abolição das classes. Os escritos sobre a Comuna de Paris e a Crítica do Programa de Gotha apontam para uma associação autogovernada de produtores, sem um aparelho estatal separado e colocado acima da sociedade. A democracia seria radicalizada para além da esfera política e estendida à vida econômica.",
        "Marx reformula a pergunta democrática. O problema já não é apenas quem vota, quem representa e como os poderes se organizam, mas quem possui e controla as condições sociais da existência. A questão final é se democracia política e desigualdade econômica extrema podem coexistir sem que a primeira se torne meramente formal."
      ],
      quotes: [
        {
          text:
            "O poder executivo do Estado moderno não passa de um comitê para administrar os negócios comuns de toda a burguesia.",
          source: "Manifesto do Partido Comunista, I"
        },
        {
          text: "A emancipação política não é a emancipação humana.",
          source: "Sobre a Questão Judaica"
        }
      ]
    }
  ]
};

const ideaEssays: Record<string, IdeaEssay> = {
  [democracyEssay.slug]: democracyEssay
};

export function getIdeaEssay(slug: string) {
  return ideaEssays[slug];
}
