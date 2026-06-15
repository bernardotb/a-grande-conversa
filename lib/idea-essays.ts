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

const justicaEssay: IdeaEssay = {
  slug: "justica",
  title: "A conversa sobre Justiça",
  introduction:
    "A justiça começa, na tragédia grega, como uma tentativa de interromper o ciclo da vingança e se torna uma investigação sobre a ordem da alma, a distribuição dos bens, a autoridade da lei e os direitos da pessoa. Ao longo de mais de dois milênios, o debate desloca seu fundamento dos deuses e da natureza para o pacto, a utilidade, a liberdade e as condições econômicas da vida social.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/justice e nos textos primários.",
  sections: [
    {
      thinkerId: "aeschylus",
      keyWork: "Oresteia",
      paragraphs: [
        "Em Ésquilo, a justiça ainda nasce dentro da linguagem arcaica do sangue. Um assassinato exige outro, cada vingador se considera representante de uma obrigação legítima e nenhuma retaliação consegue encerrar a dívida que pretende pagar.",
        "A Oresteia transforma esse impasse numa narrativa sobre a criação da justiça pública. Quando Orestes é julgado em Atenas, a reivindicação privada das Erínias é acolhida, mas transferida para um tribunal capaz de ouvir razões, proferir uma decisão e pôr fim à perseguição.",
        "A solução não elimina a força moral da vingança; ela a incorpora numa instituição da cidade. Ésquilo abre assim a pergunta que acompanhará toda a tradição: como converter o sofrimento da vítima em julgamento sem permitir que a punição reproduza indefinidamente o mal que combate?"
      ],
      quotes: [
        {
          text: "Somente pelo sofrimento chega a sabedoria.",
          source: "Agamêmnon"
        },
        {
          text:
            "Neste lugar, o temor e a reverência de meu povo deverão impedi-los de praticar o mal.",
          source: "Eumênides"
        }
      ]
    },
    {
      thinkerId: "sophocles",
      keyWork: "Antígona",
      paragraphs: [
        "Sófocles desloca o problema da passagem da vingança ao tribunal para o conflito entre duas ordens normativas. Creonte fala em nome da sobrevivência da cidade depois da guerra civil; Antígona, em nome dos deveres familiares e religiosos que nenhuma decisão política teria poder para revogar.",
        "A tragédia não apresenta uma pessoa justa contra outra injusta. Cada personagem absolutiza uma exigência real: Creonte confunde a autoridade da lei com infalibilidade, enquanto Antígona aceita pagar com a própria vida pela fidelidade a uma justiça não escrita.",
        "O conflito prepara a distinção posterior entre lei natural e lei positiva. Platão e Aristóteles procurarão uma ordem racional capaz de julgar pretensões concorrentes, mas Sófocles preserva uma advertência: certas escolhas trágicas não desaparecem quando formulamos princípios mais gerais."
      ],
      quotes: [
        {
          text:
            "Não foi Zeus quem publicou esse decreto para mim; não são essas as leis estabelecidas entre os homens pela Justiça que habita com os deuses de baixo.",
          source: "Antígona"
        },
        {
          text:
            "Teus decretos não eram fortes o bastante para superar os estatutos não escritos e infalíveis do céu.",
          source: "Antígona"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "Platão responde à instabilidade trágica procurando a justiça na estrutura da alma e da cidade. Contra Trasímaco, que a reduz ao interesse do mais forte, Sócrates sustenta que o justo não é apenas aquilo que um poder consegue impor.",
        "A cidade bem ordenada possui classes com funções distintas; a alma bem ordenada possui razão, ânimo e apetites sob uma hierarquia correta. Justiça é cada parte realizar sua tarefa sem usurpar a função das demais, produzindo uma harmonia interior que torna boas também as ações externas.",
        "Essa definição faz da injustiça uma doença do agente antes de ser um dano à vítima. Aristóteles aceitará que a justiça é virtude, mas contestará sua excessiva interiorização ao insistir que ela se refere especificamente ao que devemos a outras pessoas."
      ],
      quotes: [
        {
          text:
            "A justiça consiste em fazer o próprio trabalho e não se intrometer no que não nos pertence.",
          source: "República, Livro IV"
        },
        {
          text:
            "O homem justo não permitirá que os princípios dentro dele interfiram uns nos outros ou façam o trabalho alheio.",
          source: "República, Livro IV"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles torna explícito o caráter relacional da justiça. Ela pode designar a virtude completa quando exercida em relação ao próximo, mas também uma virtude particular ocupada com repartições, trocas e reparações.",
        "A justiça distributiva usa igualdade proporcional: pessoas consideradas iguais segundo um critério relevante devem receber partes iguais, e diferenças de mérito podem justificar partes diferentes. A justiça corretiva usa igualdade aritmética para reparar a vantagem e a perda produzidas por fraude, violência ou transação desigual.",
        "O método esclarece a forma da igualdade, mas deixa em disputa o padrão de mérito. Democratas, oligarcas e aristocratas escolherão critérios diferentes; por isso, a teoria aristotélica será herdada por Aquino e continuará presente nos debates modernos sobre direitos, necessidade e contribuição."
      ],
      quotes: [
        {
          text: "O justo é o proporcional; o injusto é aquilo que viola a proporção.",
          source: "Ética a Nicômaco, Livro V"
        },
        {
          text:
            "A justiça política encontra-se entre homens que compartilham a vida visando à autossuficiência, livres e iguais proporcional ou aritmeticamente.",
          source: "Ética a Nicômaco, Livro V"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "A Cidade de Deus",
      paragraphs: [
        "Agostinho altera o horizonte clássico ao afirmar que nenhuma comunidade pode ser plenamente justa se não oferece a Deus o que lhe é devido. Uma cidade pode possuir leis, magistrados e ordem civil e ainda assim permanecer desordenada em seu amor fundamental.",
        "A comparação entre reino e bando de ladrões não nega toda diferença prática entre governos; ela nega que poder, extensão territorial ou legalidade bastem para legitimar um Estado. A medida última está numa ordem divina que transcende qualquer comunidade histórica.",
        "A Cidade de Deus não coincide com um regime terreno, e isso limita tanto a sacralização da política quanto sua autossuficiência. Aquino sistematizará esse padrão como lei natural; Hobbes, mais tarde, tentará fundar a justiça sem recorrer a uma ordem superior ao soberano."
      ],
      quotes: [
        {
          text: "Retirada a justiça, o que são os reinos senão grandes roubos?",
          source: "A Cidade de Deus, Livro IV, Capítulo 4"
        },
        {
          text:
            "A verdadeira justiça não existe senão naquela república cujo fundador e governante é Cristo.",
          source: "A Cidade de Deus, Livro II, Capítulo 21"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Tomás de Aquino reúne a análise social de Aristóteles e o fundamento teológico de Agostinho. Justiça é uma disposição estável da vontade pela qual cada pessoa recebe aquilo que lhe é devido, não um sentimento ocasional de benevolência.",
        "As formas distributiva e comutativa permanecem, mas passam a integrar uma teoria da lei. A razão humana participa da lei eterna por meio da lei natural, de modo que decretos positivos podem ser avaliados segundo princípios anteriores à vontade do governante.",
        "Uma norma que contradiz a lei natural perde a qualidade moral de lei e pode não obrigar em consciência. Hobbes contestará precisamente esse ponto ao fazer a validade dos deveres depender da existência de um poder civil capaz de garanti-los."
      ],
      quotes: [
        {
          text:
            "A justiça é o hábito pelo qual um homem, com vontade constante e perpétua, dá a cada um o que lhe é devido.",
          source: "Suma Teológica, II-II, Questão 58"
        },
        {
          text:
            "Toda lei humana tem natureza de lei na medida em que deriva da lei natural; se dela se afasta, já não é lei, mas corrupção da lei.",
          source: "Suma Teológica, I-II, Questão 95"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes rompe com a tese de que instituições podem ser julgadas por uma justiça plenamente definida antes delas. No estado de natureza existem desejos, medo, prudência e direito a tudo, mas não há propriedade estável nem autoridade comum que torne obrigatórios os pactos.",
        "A justiça surge quando uma soberania civil torna os acordos válidos e exige seu cumprimento. Ser justo é cumprir convenções reconhecidas; sem poder comum, a promessa permanece vulnerável à desconfiança racional dos participantes.",
        "Essa solução garante critérios públicos, mas parece tornar o soberano imune à acusação de injustiça. Hume preservará a origem convencional das regras, porém substituirá o ato fundador de submissão por uma explicação gradual baseada nas necessidades e utilidades da cooperação."
      ],
      quotes: [
        {
          text:
            "Onde não há poder comum, não há lei; onde não há lei, não há injustiça.",
          source: "Leviatã, Parte I, Capítulo 13"
        },
        {
          text:
            "A natureza da justiça consiste no cumprimento de pactos válidos; mas a validade dos pactos só começa com a constituição de um poder civil.",
          source: "Leviatã, Parte I, Capítulo 15"
        }
      ]
    },
    {
      thinkerId: "hume",
      keyWork: "Tratado da Natureza Humana",
      paragraphs: [
        "Hume chama a justiça de virtude artificial, sem com isso considerá-la falsa ou arbitrária. Suas regras não brotam de um instinto moral específico nem de relações eternas percebidas pela razão; resultam de convenções que a experiência mostra serem indispensáveis.",
        "A justiça se torna necessária sob condições de escassez moderada e generosidade limitada. Se todos possuíssem tudo ou fossem perfeitamente benevolentes, propriedade e promessa perderiam sua função; no mundo humano, regras estáveis permitem confiança, produção e cooperação.",
        "A utilidade pública explica tanto a origem quanto a aprovação moral dessas regras. Kant rejeitará essa dependência das circunstâncias e buscará um princípio de direito válido para toda vontade racional, independentemente dos benefícios produzidos."
      ],
      quotes: [
        {
          text:
            "É somente do egoísmo e da generosidade limitada dos homens, junto à escassa provisão feita pela natureza, que a justiça deriva sua origem.",
          source: "Tratado da Natureza Humana, Livro III, Parte II"
        },
        {
          text: "A utilidade pública é a única origem da justiça.",
          source: "Investigação sobre os Princípios da Moral, Seção III"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Metafísica dos Costumes",
      paragraphs: [
        "Kant define o direito pela possibilidade de coexistência entre liberdades externas. Uma ação é juridicamente correta quando sua máxima permite que a liberdade de uma pessoa conviva com a liberdade de todas as outras segundo uma lei universal.",
        "Esse princípio não distribui felicidade nem recompensa mérito moral; delimita uma esfera de independência que pode ser garantida coercitivamente. A coerção justa não destrói a liberdade, mas impede uma interferência incompatível com a liberdade universal.",
        "Ao tratar cada pessoa como fim, Kant oferece uma base não utilitária para direitos e deveres. Mill tentará explicar a força especial da justiça a partir do bem-estar humano, enquanto Marx perguntará se a igualdade jurídica pode ser real quando as condições materiais permanecem profundamente desiguais."
      ],
      quotes: [
        {
          text:
            "Age exteriormente de modo que o livre uso de tua escolha possa coexistir com a liberdade de todos segundo uma lei universal.",
          source: "Metafísica dos Costumes, Introdução"
        },
        {
          text:
            "Age de tal maneira que trates a humanidade, em tua pessoa e na de qualquer outro, sempre como fim e nunca apenas como meio.",
          source: "Fundamentação da Metafísica dos Costumes"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Utilitarismo",
      paragraphs: [
        "Mill procura reconciliar a origem sentimental da moral com um critério consequencialista. O sentimento de justiça combina impulso de retaliação e simpatia ampliada, mas só se torna moral quando subordinado ao interesse geral.",
        "Direitos são interesses cuja proteção social possui utilidade extraordinária. As regras de justiça parecem mais obrigatórias que outros preceitos porque resguardam segurança, liberdade e condições essenciais do bem-estar humano.",
        "A teoria explica por que instituições devem ser julgadas por seus efeitos sobre pessoas reais, mas enfrenta a objeção de que utilidades agregadas poderiam sacrificar indivíduos. Marx deslocará novamente a análise ao sustentar que os próprios critérios públicos de justiça refletem uma estrutura de classes."
      ],
      quotes: [
        {
          text:
            "Justiça é o nome de certas regras morais que concernem mais de perto aos elementos essenciais do bem-estar humano e têm obrigação mais absoluta.",
          source: "Utilitarismo, Capítulo V"
        },
        {
          text:
            "Ter um direito é possuir algo cuja posse a sociedade deve defender.",
          source: "Utilitarismo, Capítulo V"
        }
      ]
    },
    {
      thinkerId: "marx",
      keyWork: "Crítica do Programa de Gotha",
      paragraphs: [
        "Marx desconfia das teorias que apresentam uma fórmula de justiça como independente da história. As ideias dominantes de uma época tendem a expressar relações sociais nas quais uma classe controla a produção material e os meios de formular publicamente seus interesses.",
        "A igualdade formal da troca e do direito pode conviver com exploração, porque trabalhadores juridicamente livres vendem sua força de trabalho sob condições materiais assimétricas. Mesmo uma distribuição proporcional à contribuição ainda conserva diferenças de capacidade, necessidade e posição.",
        "A superação das classes permitiria passar de um direito abstratamente igual para uma distribuição orientada pelas necessidades. Com isso, Marx encerra o percurso questionando se justiça significa aperfeiçoar as regras existentes ou transformar as condições sociais que tornam essas regras necessárias."
      ],
      quotes: [
        {
          text:
            "As ideias dominantes de cada época sempre foram as ideias de sua classe dominante.",
          source: "Manifesto do Partido Comunista"
        },
        {
          text: "De cada qual segundo sua capacidade; a cada qual segundo suas necessidades!",
          source: "Crítica do Programa de Gotha"
        }
      ]
    }
  ]
};

const bemEMalEssay: IdeaEssay = {
  slug: "bem-e-mal",
  title: "A conversa sobre Bem e Mal",
  introduction:
    "Bem e mal podem ser compreendidos como estruturas objetivas da realidade, qualidades da vontade, resultados da ação ou construções produzidas pela vida social e psíquica. A conversa atravessa metafísica, ética, teologia, literatura e psicanálise para perguntar por que desejamos o mal, se ele possui existência própria e qual autoridade permite distingui-lo do bem.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/good-and-evil e nos textos primários.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "Para Platão, o Bem não é apenas uma coisa boa entre outras, mas o princípio que torna inteligíveis e valiosas todas as coisas. A analogia do sol mostra que o Bem está para a inteligência assim como a luz está para a visão.",
        "A tese de que ninguém pratica o mal voluntariamente liga erro moral e ignorância. Mesmo quando escolhemos algo destrutivo, fazemos isso sob a aparência de algum bem, porque o desejo depende de um juízo, ainda que deformado.",
        "A educação moral precisa, portanto, converter a alma e ordenar seus desejos segundo uma medida objetiva. Aristóteles manterá a orientação ao bem, mas rejeitará a separação platônica ao procurar o bem humano na atividade concreta de uma vida completa."
      ],
      quotes: [
        {
          text:
            "O Bem não é apenas causa do conhecimento nas coisas conhecidas, mas também de seu ser e de sua essência.",
          source: "República, Livro VI"
        },
        {
          text: "Ninguém pratica o mal voluntariamente.",
          source: "Protágoras"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles começa afirmando que toda arte, investigação e escolha tende a algum bem. O problema ético não é alcançar uma Forma separada, mas identificar o fim próprio da vida humana.",
        "Esse fim é a eudaimonia: atividade racional conforme a virtude durante uma vida completa. O bem não se reduz a prazer ou posse; exige caráter, deliberação, relações e alguma medida de bens externos.",
        "O mal moral aparece quando desejos e escolhas se afastam da medida racional que permite florescer. Epicteto radicalizará a interioridade dessa avaliação, retirando dos acontecimentos externos qualquer poder de serem bons ou maus em si mesmos."
      ],
      quotes: [
        {
          text:
            "O bem humano é uma atividade da alma conforme a virtude e, havendo mais de uma, conforme a melhor e mais completa.",
          source: "Ética a Nicômaco, Livro I, Capítulo 7"
        },
        {
          text:
            "Uma andorinha não faz verão, nem um só dia; do mesmo modo, um dia ou breve tempo não torna alguém feliz.",
          source: "Ética a Nicômaco, Livro I, Capítulo 7"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Manual",
      paragraphs: [
        "Epicteto concentra bem e mal naquilo que depende de nós: juízos, assentimentos, desejos e recusas. Saúde, riqueza, reputação e morte podem ser preferidos ou evitados, mas não possuem valor moral independente do uso que fazemos deles.",
        "A perturbação nasce quando tratamos acontecimentos como se contivessem por si mesmos uma avaliação. Corrigir a impressão permite preservar a liberdade interior mesmo sob perda, exílio ou sofrimento.",
        "Essa doutrina fortalece a responsabilidade pelo próprio juízo, mas parece minimizar males sofridos e estruturas injustas. Agostinho aceitará que o mal não é uma substância externa, porém o explicará como privação de uma ordem criada e como desvio da vontade."
      ],
      quotes: [
        {
          text:
            "Os homens são perturbados não pelas coisas que acontecem, mas pelas opiniões que formam sobre elas.",
          source: "Manual, 5"
        },
        {
          text:
            "Onde está o bem? Na vontade. Onde está o mal? Na vontade. Onde não está nenhum deles? Nas coisas independentes da vontade.",
          source: "Discursos, Livro II, Capítulo 16"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Confissões",
      paragraphs: [
        "Agostinho combate a ideia maniqueísta de dois princípios substanciais, um bom e outro mau. Tudo o que existe procede de um criador supremamente bom e, enquanto possui ser, conserva alguma bondade.",
        "O mal é privação: perda, corrupção ou desordem de um bem devido. A vontade má não cria uma substância nova; afasta-se do bem superior e se apega de maneira desordenada a bens inferiores.",
        "Essa resposta preserva a bondade da criação, mas torna mais agudo o problema da liberdade e da responsabilidade. Aquino sistematizará a identidade entre ser e bem e explicará como uma ação pode visar algum bem parcial enquanto falha em sua ordem completa."
      ],
      quotes: [
        {
          text:
            "O mal não possui natureza positiva; a perda do bem é que recebeu o nome de mal.",
          source: "A Cidade de Deus, Livro XI, Capítulo 9"
        },
        {
          text:
            "Todas as coisas que existem, visto que seu Criador é supremamente bom, são elas mesmas boas.",
          source: "Enquirídio, Capítulo 12"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino afirma que bem e ser são idênticos na realidade, embora concebidos de maneiras diferentes. Chamamos bom aquilo que é desejável, e toda ação se dirige a alguma perfeição percebida.",
        "O mal depende do bem que corrompe: cegueira é falta de visão num ser a quem a visão é devida; pecado é falta de ordem numa ação voluntária. Até quem age mal busca um bem limitado, como prazer, poder ou segurança, mas o busca contra a ordem racional do conjunto.",
        "A análise explica o mal sem transformá-lo em princípio rival de Deus. Shakespeare dará forma dramática à dificuldade que resta: agentes podem reconhecer a maldade de seus projetos e ainda assim escolhê-los deliberadamente."
      ],
      quotes: [
        {
          text: "Bem e ser são realmente a mesma coisa, diferindo apenas segundo a razão.",
          source: "Suma Teológica, I, Questão 5"
        },
        {
          text:
            "O mal não é outra coisa senão a privação daquilo que é natural e devido a alguém.",
          source: "Suma Teológica, I, Questão 49"
        }
      ]
    },
    {
      thinkerId: "shakespeare",
      keyWork: "Rei Lear",
      paragraphs: [
        "Nas tragédias de Shakespeare, o mal deixa de ser apenas conceito e ganha voz, gesto e estratégia. Iago declara sua duplicidade, Edmundo invoca uma natureza desligada dos deveres de parentesco, e ambos exploram vulnerabilidades já presentes nas pessoas que manipulam.",
        "Pequenos ressentimentos e ambições crescem por repetição até destruir famílias e governos. O mal dramático não elimina a inteligência; frequentemente depende de lucidez instrumental combinada com recusa deliberada dos vínculos que deveriam limitar a ação.",
        "Essa representação contesta a máxima de que todo mal é simples ignorância, mas também mostra que o agente precisa nomear algum interesse como bem para si. Hobbes transformará essa relatividade prática em teoria: bom e mau seriam nomes dados aos objetos de desejo e aversão."
      ],
      quotes: [
        {
          text:
            "Trarei meu coração na manga para que os corvos o biquem. Não sou o que sou.",
          source: "Otelo, Ato I"
        },
        {
          text: "Tu, Natureza, és minha deusa; à tua lei estão ligados meus serviços.",
          source: "Rei Lear, Ato I"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes rejeita um bem supremo comum que ordene naturalmente todos os desejos. Cada pessoa chama bom ao que deseja, mau ao que evita e desprezível ao que considera sem valor.",
        "As avaliações variam com temperamento, circunstância e interesse; por isso, desacordos sobre o bem podem alimentar conflito. A autoridade civil fornece medidas públicas necessárias à paz, embora não transforme preferências particulares numa essência objetiva.",
        "A teoria explica a pluralidade dos fins humanos, mas ameaça reduzir a moral à força e à preferência. Kant reagirá procurando algo bom sem qualificação: não um objeto desejado, mas uma vontade determinada pelo dever."
      ],
      quotes: [
        {
          text:
            "As palavras bom, mau e desprezível são sempre usadas em relação à pessoa que as emprega, pois nada é simples e absolutamente assim.",
          source: "Leviatã, Parte I, Capítulo 6"
        },
        {
          text:
            "Tudo aquilo que é objeto do apetite ou desejo de um homem é o que ele, por sua parte, chama de bom.",
          source: "Leviatã, Parte I, Capítulo 6"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Fundamentação da Metafísica dos Costumes",
      paragraphs: [
        "Kant começa a ética com a afirmação de que apenas a boa vontade é boa sem limitação. Talentos, coragem, felicidade e poder podem se tornar perigosos quando usados por uma vontade moralmente corrompida.",
        "A bondade da vontade não depende do sucesso alcançado, mas do princípio pelo qual ela age. Agir por dever é submeter a máxima da ação ao teste de poder valer como lei universal para toda pessoa racional.",
        "O mal moral deixa de ser erro sobre fins naturais e passa a ser escolha de uma máxima que concede exceção a si mesma. Mill contestará essa independência dos resultados e definirá o certo e o errado por sua contribuição à felicidade."
      ],
      quotes: [
        {
          text:
            "É impossível pensar em qualquer coisa no mundo, ou mesmo fora dele, que possa ser considerada boa sem limitação, exceto uma boa vontade.",
          source: "Fundamentação da Metafísica dos Costumes, Seção I"
        },
        {
          text:
            "Age apenas segundo a máxima pela qual possas ao mesmo tempo querer que ela se torne uma lei universal.",
          source: "Fundamentação da Metafísica dos Costumes, Seção II"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Utilitarismo",
      paragraphs: [
        "Mill identifica o bem com a felicidade, entendida como prazer e ausência de dor, e o mal com o sofrimento e a privação de formas valiosas de vida. A moralidade de uma ação depende de sua tendência a promover o bem-estar de todos os afetados.",
        "Sua distinção entre prazeres superiores e inferiores impede que a teoria seja mero cálculo de sensações homogêneas. Pessoas familiarizadas com ambos tendem a preferir atividades que exercitam faculdades intelectuais, afetivas e morais, mesmo acompanhadas de insatisfação.",
        "O utilitarismo torna consequências indispensáveis à avaliação, mas enfrenta perguntas sobre justiça, dignidade e limites do sacrifício individual. Dostoiévski dramatizará uma objeção mais profunda: a felicidade pode sustentar o bem se a ordem moral não possui fundamento transcendente?"
      ],
      quotes: [
        {
          text:
            "As ações são corretas na proporção em que tendem a promover a felicidade e erradas quando tendem a produzir o contrário da felicidade.",
          source: "Utilitarismo, Capítulo II"
        },
        {
          text: "É melhor ser um ser humano insatisfeito do que um porco satisfeito.",
          source: "Utilitarismo, Capítulo II"
        }
      ]
    },
    {
      thinkerId: "dostoyevsky",
      keyWork: "Os Irmãos Karamázov",
      paragraphs: [
        "Dostoiévski põe ideias morais em conflito dentro de personagens que sofrem suas consequências existenciais. A pergunta sobre tudo ser permitido sem Deus não aparece como teorema simples, mas como tentação que circula entre pensamento, ressentimento e crime.",
        "Ivan rejeita uma harmonia futura comprada pelo sofrimento inocente; o Grande Inquisidor sugere que liberdade e responsabilidade são fardos dos quais os seres humanos preferem escapar. O mal nasce tanto da autorização intelectual quanto da recusa em responder pelo outro.",
        "A literatura expõe limites de sistemas que reduzem a moral ao dever formal ou à soma de felicidade. Freud conservará a suspeita sobre as motivações conscientes, mas explicará culpa e consciência pela história psíquica da agressividade e da repressão."
      ],
      quotes: [
        {
          text:
            "Sem Deus e sem vida futura, então tudo é permitido agora, e pode-se fazer qualquer coisa?",
          source: "Os Irmãos Karamázov, Livro XI"
        },
        {
          text:
            "A dor e o sofrimento são sempre inevitáveis para uma grande inteligência e um coração profundo.",
          source: "Crime e Castigo, Parte III"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Mal-Estar na Civilização",
      paragraphs: [
        "Freud interpreta bem, mal e consciência a partir do conflito entre pulsões e exigências civilizatórias. A sociedade precisa limitar a agressividade e a busca irrestrita de satisfação para tornar possível a convivência.",
        "A autoridade externa é interiorizada no supereu, que dirige contra o próprio sujeito parte da agressividade reprimida. A culpa pode, por isso, exceder atos efetivamente cometidos e crescer justamente quando a pessoa renuncia mais severamente aos impulsos.",
        "A distinção moral não desaparece, mas perde a transparência de uma voz eterna imediatamente acessível. A conversa termina perguntando se uma genealogia psicológica da consciência explica sua autoridade ou apenas as condições pelas quais conseguimos ouvi-la."
      ],
      quotes: [
        {
          text:
            "A civilização foi construída, sob a pressão da luta pela existência, mediante sacrifícios na satisfação dos impulsos primitivos.",
          source: "O Mal-Estar na Civilização"
        },
        {
          text:
            "A consciência é resultado da renúncia pulsional; a renúncia imposta de fora cria a consciência, que então exige novas renúncias.",
          source: "O Mal-Estar na Civilização"
        }
      ]
    }
  ]
};

const virtudeEVicioEssay: IdeaEssay = {
  slug: "virtude-e-vicio",
  title: "A conversa sobre Virtude e Vício",
  introduction:
    "A conversa sobre virtude começa com a excelência heroica celebrada por Homero e se transforma numa investigação sobre a ordem da alma, a formação do caráter e a força da vontade. Entre a honra pública, o hábito, o amor, o sentimento e o dever, a tradição preserva a pergunta central: tornamo-nos bons por natureza, educação, escolha ou graça?",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/virtue-and-vice e nos textos primários.",
  sections: [
    {
      thinkerId: "homer",
      keyWork: "Ilíada",
      paragraphs: [
        "Em Homero, virtude traduz a areté, a excelência pela qual alguém cumpre de modo eminente o papel que lhe cabe. No mundo guerreiro da Ilíada, ela aparece como coragem, força, lealdade e capacidade de conquistar uma honra que será reconhecida pela comunidade.",
        "Aquiles encarna a tensão dessa excelência. Seu desejo de superar os demais produz feitos memoráveis, mas a ira que acompanha sua honra ferida ameaça destruir os vínculos que tornam a própria glória inteligível.",
        "A virtude heroica depende do olhar público e pode coexistir com ações devastadoras. Platão herdará esse ideal competitivo, mas perguntará se uma alma pode ser chamada excelente quando suas paixões dominam a razão."
      ],
      quotes: [
        {
          text: "Ser sempre o melhor e superar os outros.",
          source: "Ilíada, Livro VI"
        },
        {
          text:
            "Que eu não morra sem glória e sem luta, mas que primeiro realize algum grande feito que seja contado entre os homens no futuro.",
          source: "Ilíada, Livro XXII"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "Platão interioriza a excelência que Homero media pela vitória e pela fama. Na República, a virtude é a boa disposição da alma, alcançada quando razão, ânimo e desejo exercem suas funções sob uma ordem comum.",
        "Sabedoria, coragem, temperança e justiça formam as virtudes cardeais. A coragem já não consiste apenas em enfrentar o inimigo, mas em preservar, apesar do prazer e do medo, o juízo correto sobre o que deve ser temido.",
        "Essa harmonia faz do vício uma desordem interna antes de ser uma derrota pública. Aristóteles conservará a ligação entre caráter e razão, porém dará ao hábito e às circunstâncias concretas um papel maior do que a arquitetura platônica da alma."
      ],
      quotes: [
        {
          text:
            "A virtude é uma espécie de saúde, beleza e boa condição da alma.",
          source: "República, Livro IV"
        },
        {
          text:
            "Ao homem justo não é permitido pela justiça prejudicar um amigo ou qualquer outra pessoa.",
          source: "República, Livro I"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles desloca a atenção da divisão da alma para a formação estável do caráter. Virtude é uma disposição adquirida para escolher bem, e essa disposição se forma pela repetição de atos até que prazer, desejo e julgamento passem a cooperar.",
        "A doutrina do meio afirma que a ação virtuosa evita excesso e deficiência em relação a nós, segundo a razão prática. Esse meio não é uma média numérica: a coragem, por exemplo, encontra a medida adequada entre temeridade e covardia diante de uma situação determinada.",
        "A prudência, capacidade de deliberar bem sobre o que pode ser feito, impede que a regra se torne mecânica. Cícero levará essa formação moral ao campo dos deveres públicos, enquanto a tradição cristã perguntará se hábitos adquiridos bastam para orientar o ser humano ao seu fim último."
      ],
      quotes: [
        {
          text:
            "A virtude é uma disposição de caráter relacionada com a escolha, situada num meio-termo determinado pela razão.",
          source: "Ética a Nicômaco, Livro II, Capítulo 6"
        },
        {
          text:
            "Tornamo-nos justos praticando atos justos, temperantes praticando atos temperantes e corajosos praticando atos corajosos.",
          source: "Ética a Nicômaco, Livro II, Capítulo 1"
        }
      ]
    },
    {
      thinkerId: "cicero",
      keyWork: "Dos Deveres",
      paragraphs: [
        "Cícero recebe as virtudes gregas e as traduz para a vida cívica romana. A excelência moral deve aparecer no cumprimento dos deveres, na preservação da confiança e no serviço à comunidade política.",
        "Em Dos Deveres, o honesto não pode ser separado do útil sem que o cálculo se corrompa. Justiça, grandeza de alma, sabedoria e decoro orientam escolhas nas quais interesses privados parecem competir com obrigações públicas.",
        "A virtude torna-se uma disciplina da ação em meio a conflitos reais, não apenas uma ordem interior. Epicteto radicalizará essa disciplina ao retirar do agente o controle sobre fortuna e reputação, concentrando o bem moral no uso que fazemos de nossos juízos."
      ],
      quotes: [
        {
          text:
            "Nada é tão difícil que a força de espírito e a diligência não possam vencer.",
          source: "Discussões Tusculanas, Livro II"
        },
        {
          text:
            "A primeira tarefa da justiça é preservar e atribuir a cada um aquilo que lhe pertence.",
          source: "Dos Deveres, Livro I"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Discursos",
      paragraphs: [
        "Epicteto situa virtude e vício no único domínio que permanece verdadeiramente nosso: a faculdade de julgar e escolher. Corpo, riqueza e reputação podem ser perdidos; a maneira como acolhemos as impressões depende do assentimento que lhes concedemos.",
        "A disciplina estoica exige distinguir fatos de avaliações. Medo, inveja e ressentimento não são impostos diretamente pelos acontecimentos, mas nascem dos juízos pelos quais tratamos bens externos como se fossem condições do bem moral.",
        "Essa liberdade interior reduz o poder da fortuna, mas também levanta a questão do vínculo entre virtude e mundo comum. Agostinho aceitará que o desejo precisa ser reordenado, embora sustente que a vontade não se cura apenas por treinamento racional."
      ],
      quotes: [
        {
          text:
            "Não são as coisas que perturbam os homens, mas os juízos que eles fazem sobre essas coisas.",
          source: "Manual, 5"
        },
        {
          text:
            "Se desejas ser bom, começa por acreditar que és mau.",
          source: "Discursos, Livro IV"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "A Cidade de Deus",
      paragraphs: [
        "Agostinho interpreta o caráter a partir do amor que orienta a vontade. Virtude é amor ordenado: amar cada bem segundo sua posição na criação e amar a Deus como o bem que não pode ser usado em função de outro.",
        "Essa tese relê Platão e os estoicos sob o problema do pecado. Conhecer a ordem correta não garante segui-la, pois a vontade pode aderir a bens inferiores e construir hábitos que aprofundam sua própria servidão.",
        "As virtudes pagãs podem produzir disciplina e grandeza cívica, mas permanecem incompletas se dirigidas à glória humana. Aquino procurará integrar hábitos adquiridos e graça, distinguindo as virtudes que aperfeiçoam a natureza das que a orientam para um fim sobrenatural."
      ],
      quotes: [
        {
          text: "A virtude é o amor corretamente ordenado.",
          source: "A Cidade de Deus, Livro XV, Capítulo 22"
        },
        {
          text:
            "Se o caminho de Deus não é amado, a mente não é purificada.",
          source: "Dos Costumes da Igreja Católica"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino reúne a teoria aristotélica do hábito e a doutrina agostiniana da graça. Virtude é um hábito bom que aperfeiçoa uma potência humana e a dispõe a agir de acordo com a razão.",
        "Prudência, justiça, fortaleza e temperança podem ser adquiridas pela prática. Fé, esperança e caridade são virtudes teologais, isto é, disposições infundidas que têm Deus como objeto e conduzem a uma felicidade que excede as capacidades naturais.",
        "A síntese preserva dois níveis de excelência sem os confundir. Maquiavel romperá essa unidade ao perguntar se as qualidades admiradas moralmente também são adequadas para conservar um Estado em condições de conflito."
      ],
      quotes: [
        {
          text: "A virtude é um hábito bom que se refere à ação.",
          source: "Suma Teológica, I-II, Questão 55"
        },
        {
          text:
            "As virtudes teologais dirigem o homem à felicidade sobrenatural.",
          source: "Suma Teológica, I-II, Questão 62"
        }
      ]
    },
    {
      thinkerId: "machiavelli",
      keyWork: "O Príncipe",
      paragraphs: [
        "Maquiavel altera o vocabulário da virtude ao falar em virtù, capacidade de agir com eficácia diante da instabilidade da fortuna. O governante é julgado pelos efeitos políticos de suas decisões, não pela conformidade constante com virtudes privadas.",
        "Em O Príncipe, generosidade, clemência e fidelidade podem destruir quem as pratica sem atenção às circunstâncias. A necessidade política pode exigir dureza ou dissimulação, embora o governante ainda precise parecer portador das qualidades que os cidadãos respeitam.",
        "O conflito entre bondade moral e competência política desafia a continuidade entre ética e governo defendida por Cícero e Aquino. Hume responderá sem restaurar aquela unidade metafísica: investigará por que certas qualidades recebem aprovação humana e outras provocam censura."
      ],
      quotes: [
        {
          text:
            "Um príncipe que queira conservar-se deve aprender a não ser bom e a usar ou não usar esse conhecimento conforme a necessidade.",
          source: "O Príncipe, Capítulo 15"
        },
        {
          text:
            "Seria melhor ser amado e temido ao mesmo tempo; mas, como é difícil reunir ambos, é muito mais seguro ser temido.",
          source: "O Príncipe, Capítulo 17"
        }
      ]
    },
    {
      thinkerId: "hume",
      keyWork: "Tratado da Natureza Humana",
      paragraphs: [
        "Hume abandona a busca de uma essência racional ou sobrenatural da virtude e observa os sentimentos de aprovação que surgem na vida comum. Chamamos virtuosas as qualidades úteis ou agradáveis para a própria pessoa ou para os outros.",
        "A simpatia permite que participemos dos efeitos de um caráter além de nossos interesses imediatos. A razão informa relações e consequências, mas não produz por si mesma a aprovação ou a aversão que tornam moral uma distinção.",
        "A moralidade passa a depender de uma natureza afetiva compartilhada, sem se reduzir ao capricho individual. Kant verá nessa dependência uma ameaça à necessidade do dever e procurará localizar a virtude na força de uma vontade governada por lei racional."
      ],
      quotes: [
        {
          text:
            "A virtude distingue-se pelo prazer, e o vício pela dor, que uma ação, sentimento ou caráter nos proporciona por sua mera contemplação.",
          source: "Tratado da Natureza Humana, Livro III"
        },
        {
          text:
            "A razão é, e deve ser apenas, escrava das paixões.",
          source: "Tratado da Natureza Humana, Livro II"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Metafísica dos Costumes",
      paragraphs: [
        "Kant recusa que o valor moral dependa do prazer de quem observa ou das consequências que uma ação produz. Virtude é a força da vontade para cumprir o dever quando inclinações contrárias tornam esse cumprimento difícil.",
        "A boa vontade age por respeito à lei que a razão pode querer como universal. O valor da ação não reside apenas em coincidir com o dever, mas na máxima pela qual o agente escolhe, reconhecendo cada pessoa como fim e nunca apenas como meio.",
        "A virtude kantiana recupera a autonomia, o autogoverno racional, contra a moral do sentimento. Mill contestará que essa forma do dever possa orientar escolhas sem considerar a felicidade concreta dos seres afetados."
      ],
      quotes: [
        {
          text:
            "A virtude é a força moral da vontade de um homem no cumprimento de seu dever.",
          source: "Metafísica dos Costumes, Introdução à Doutrina da Virtude"
        },
        {
          text:
            "Uma boa vontade não é boa pelo que realiza ou produz; é boa em si mesma.",
          source: "Fundamentação da Metafísica dos Costumes, Seção I"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Utilitarismo",
      paragraphs: [
        "Mill recoloca a virtude dentro da busca da felicidade, mas evita tratá-la apenas como instrumento externo. Algo inicialmente desejado por favorecer o bem-estar pode tornar-se parte constitutiva daquilo que a pessoa considera uma vida feliz.",
        "A educação moral associa prazer à conduta benéfica e dor à conduta nociva, formando caracteres que desejam a virtude por ela mesma. O utilitarismo inclui ainda diferenças qualitativas entre prazeres, recusando medir a vida humana apenas pela quantidade de satisfação.",
        "Essa resposta aproxima hábito, sentimento e consequência sem eliminar a tensão entre integridade pessoal e bem coletivo. A conversa permanece aberta entre a excelência que desejamos incorporar e o critério pelo qual julgamos os efeitos de nossas escolhas sobre todos."
      ],
      quotes: [
        {
          text:
            "A virtude não é natural e originalmente parte do fim, mas é capaz de tornar-se parte dele.",
          source: "Utilitarismo, Capítulo IV"
        },
        {
          text:
            "Poucas criaturas humanas consentiriam em ser transformadas em animais inferiores em troca da promessa da mais completa satisfação dos prazeres de um animal.",
          source: "Utilitarismo, Capítulo II"
        }
      ]
    }
  ]
};

const felicidadeEssay: IdeaEssay = {
  slug: "felicidade",
  title: "A conversa sobre Felicidade",
  introduction:
    "A felicidade percorre a tradição como nome de uma vida inteira, não de um instante agradável. Da alma justa de Platão à tensão freudiana entre desejo e civilização, o debate pergunta se viver bem depende da virtude, da contemplação, da liberdade interior, do prazer ou de bens que a fortuna pode retirar.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/happiness e nos textos primários.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "Platão liga felicidade e justiça contra a suspeita de que o injusto bem-sucedido viveria melhor. A República procura mostrar que governar cidades, acumular riquezas ou escapar da punição não compensa a desordem de uma alma submetida aos apetites.",
        "O prazer é avaliado segundo a parte da alma que o busca. Quando a razão governa e se dirige ao que é verdadeiro, desejos e ânimo encontram uma medida que torna a vida una em vez de fragmentada.",
        "A felicidade passa a ser inseparável do caráter do agente, ainda que a cidade possa persegui-lo ou ignorar sua justiça. Aristóteles manterá essa ligação, mas perguntará se uma disposição interior basta sem atividade, tempo e certos bens externos."
      ],
      quotes: [
        {
          text: "O homem justo é feliz, e o injusto, miserável.",
          source: "República, Livro IX"
        },
        {
          text:
            "Nenhum mal pode acontecer a um homem bom, nem em vida nem depois da morte.",
          source: "Apologia de Sócrates"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles define eudaimonia, a realização plena de uma vida humana, como atividade da alma de acordo com a virtude. Felicidade não é um estado que possuímos passivamente, mas o modo como exercemos nossas capacidades ao longo de uma existência completa.",
        "Virtude moral, prudência, amizade e contemplação entram nessa vida, assim como bens corporais e materiais suficientes para agir. A fortuna não cria o caráter, porém perdas extremas podem limitar ou ferir a realização humana.",
        "A tese evita tanto identificar felicidade com prazer imediato quanto isolá-la do mundo. Epicteto considerará excessiva essa concessão aos bens externos e procurará uma liberdade que permaneça disponível mesmo sob doença, exílio ou pobreza."
      ],
      quotes: [
        {
          text:
            "A felicidade é uma atividade da alma de acordo com a virtude completa.",
          source: "Ética a Nicômaco, Livro I, Capítulo 13"
        },
        {
          text:
            "Assim como uma andorinha não faz verão, tampouco um só dia ou um breve tempo torna um homem feliz.",
          source: "Ética a Nicômaco, Livro I, Capítulo 7"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Discursos",
      paragraphs: [
        "Epicteto procura tornar a felicidade independente daquilo que não controlamos. A distinção entre nossas escolhas e os acontecimentos externos concentra o bem na liberdade de julgar e agir segundo a razão.",
        "Sofrimento e perda permanecem reais, mas não possuem por si mesmos o poder de tornar má uma vida. Esse poder surge quando o agente entrega sua paz a objetos que a fortuna governa e passa a exigir do mundo aquilo que o mundo não promete.",
        "A serenidade estoica responde ao lugar concedido por Aristóteles aos bens externos. Plotino conservará sua independência em relação à fortuna, porém deslocará o centro da felicidade para a vida contemplativa da alma unida ao inteligível."
      ],
      quotes: [
        {
          text:
            "A felicidade e a liberdade começam com a compreensão de um princípio: algumas coisas estão sob nosso controle, e outras não.",
          source: "Manual, 1"
        },
        {
          text:
            "Os homens são perturbados não pelas coisas, mas pelas opiniões que formam sobre elas.",
          source: "Manual, 5"
        }
      ]
    },
    {
      thinkerId: "plotinus",
      keyWork: "Enéadas",
      paragraphs: [
        "Plotino identifica a felicidade com a atividade superior da alma, voltada ao Intelecto e, por meio dele, ao Uno. A pessoa feliz não deixa de possuir corpo, mas não mede sua vida pelo que acontece à dimensão corporal.",
        "A contemplação recolhe a alma de sua dispersão entre objetos externos. Quanto mais ela reconhece sua origem inteligível, menos sua plenitude depende de prazer, prestígio ou ausência de sofrimento.",
        "Essa independência amplia a interioridade estoica numa metafísica de retorno. Agostinho receberá a linguagem da ascensão, mas transformará seu termo: a inquietação humana encontrará repouso não numa absorção impessoal, e sim no Deus criador e amado."
      ],
      quotes: [
        {
          text:
            "Aquele que tem muito a sofrer não possui por isso menos felicidade.",
          source: "Enéadas, I.4.7"
        },
        {
          text:
            "O homem feliz cuida do corpo como o músico cuida de sua lira.",
          source: "Enéadas, I.4.16"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Confissões",
      paragraphs: [
        "Agostinho descreve a busca da felicidade como desejo universal que se engana quanto ao objeto capaz de satisfazê-lo. Honra, prazer e conhecimento são bens finitos; quando recebem o peso do fim último, produzem inquietação em vez de repouso.",
        "Nas Confissões, a memória de desejos sucessivos revela uma vontade dividida. A conversão não apaga o desejo, mas reordena o amor para que os bens temporais sejam recebidos sem ocupar o lugar de Deus.",
        "A felicidade perfeita ultrapassa a história porque depende da união estável com o bem eterno. Aquino distinguirá essa bem-aventurança final da felicidade imperfeita alcançável nesta vida pela virtude e pela contemplação."
      ],
      quotes: [
        {
          text:
            "Fizeste-nos para ti, e inquieto está o nosso coração enquanto não repousa em ti.",
          source: "Confissões, Livro I, Capítulo 1"
        },
        {
          text:
            "Não há verdadeira felicidade senão na vida eterna.",
          source: "A Cidade de Deus, Livro XIX, Capítulo 20"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino organiza as heranças de Aristóteles e Agostinho numa teoria de dois alcances. A atividade virtuosa e a contemplação da verdade oferecem felicidade real, embora imperfeita, nas condições desta vida.",
        "Nenhum bem criado satisfaz plenamente uma inteligência aberta ao bem universal. A felicidade perfeita consiste na visão da essência divina, chamada visão beatífica, na qual conhecer e amar encontram o objeto que não pode ser perdido.",
        "Natureza e graça não são rivais, mas também não se confundem: capacidades naturais preparam uma busca cujo termo as excede. Montaigne reduzirá essa distância do além e perguntará como viver adequadamente dentro da instabilidade cotidiana."
      ],
      quotes: [
        {
          text:
            "A felicidade final e perfeita não pode consistir em outra coisa senão na visão da essência divina.",
          source: "Suma Teológica, I-II, Questão 3, Artigo 8"
        },
        {
          text:
            "A felicidade última do homem consiste na contemplação da verdade.",
          source: "Suma Teológica, I-II, Questão 3, Artigo 7"
        }
      ]
    },
    {
      thinkerId: "montaigne",
      keyWork: "Ensaios",
      paragraphs: [
        "Montaigne devolve a felicidade à experiência variável de um ser corporal e mortal. Sua sabedoria não promete imunidade à fortuna, mas uma relação menos servil com expectativas, costumes e imagens grandiosas de realização.",
        "Viver apropriadamente significa habitar a condição recebida, cultivar julgamento e aceitar que prazer, doença, amizade e morte pertencem à mesma vida. A alegria contínua atribuída à sabedoria é uma elasticidade do espírito, não euforia permanente.",
        "Esse humanismo cotidiano resiste tanto ao heroísmo quanto à fuga do mundo. Locke conservará o ponto de partida na experiência, porém descreverá a felicidade em termos de prazer, dor e escolhas movidas pelo desconforto presente."
      ],
      quotes: [
        {
          text:
            "O sinal mais manifesto da sabedoria é uma alegria constante.",
          source: "Ensaios, Livro II, Capítulo 12"
        },
        {
          text:
            "Nossa grande e gloriosa obra-prima é viver adequadamente.",
          source: "Ensaios, Livro III, Capítulo 13"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Ensaio sobre o Entendimento Humano",
      paragraphs: [
        "Locke trata felicidade e miséria como os extremos do prazer e da dor. A vontade é mobilizada pelo mal-estar atual, que dirige a atenção para ações capazes de alterar nossa condição.",
        "A liberdade exige suspender a satisfação imediata para examinar quais desejos conduzem a uma felicidade sólida. Educação e reflexão corrigem avaliações precipitadas que sacrificam bens duradouros a impulsos próximos.",
        "A felicidade torna-se objeto de cálculo pessoal, mas não de um cálculo infalível: podemos desejar mal porque julgamos mal. Kant contestará que essa busca, variável entre indivíduos, possa fornecer o fundamento universal da moralidade."
      ],
      quotes: [
        {
          text:
            "A mais alta perfeição da natureza intelectual reside numa busca cuidadosa e constante da felicidade verdadeira e sólida.",
          source: "Ensaio sobre o Entendimento Humano, Livro II, Capítulo XXI, §51"
        },
        {
          text:
            "A felicidade, em sua plena extensão, é o maior prazer de que somos capazes.",
          source: "Ensaio sobre o Entendimento Humano, Livro II, Capítulo XXI, §42"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Crítica da Razão Prática",
      paragraphs: [
        "Kant separa a pergunta sobre ser feliz da pergunta sobre ser digno da felicidade. Como cada pessoa imagina o bem-estar de modo diferente, nenhuma receita empírica de satisfação possui a universalidade exigida pela lei moral.",
        "O dever não promete que a ação correta produzirá contentamento. A boa vontade conserva seu valor mesmo quando fracassa em alcançar os efeitos desejados, pois sua medida está no princípio livremente adotado.",
        "A razão prática ainda busca o sumo bem, união entre virtude e felicidade, mas não autoriza trocar uma pela outra. Mill responderá que uma moral divorciada das consequências para o bem-estar perde o critério pelo qual o sofrimento humano deve contar."
      ],
      quotes: [
        {
          text:
            "A moralidade não é propriamente a doutrina de como nos tornamos felizes, mas de como nos tornamos dignos da felicidade.",
          source: "Crítica da Razão Prática"
        },
        {
          text:
            "Uma boa vontade é boa não pelo que efetua ou realiza, mas apenas pelo querer.",
          source: "Fundamentação da Metafísica dos Costumes, Seção I"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Utilitarismo",
      paragraphs: [
        "Mill faz da felicidade o critério das ações: elas são corretas na medida em que tendem a promovê-la e erradas quando tendem a produzir o contrário. O cálculo é imparcial, pois o bem de cada pessoa conta sem privilégio intrínseco.",
        "Prazer e ausência de dor definem a felicidade, mas os prazeres diferem em qualidade. Capacidades intelectuais, afetivas e morais podem tornar uma vida mais exigente e ainda assim preferível a uma satisfação mais estreita.",
        "O utilitarismo transforma o bem-estar em questão pública e comparável, enfrentando a separação kantiana entre mérito e resultado. Dostoiévski perguntará se uma felicidade administrada pode valer o preço da liberdade e da responsabilidade."
      ],
      quotes: [
        {
          text:
            "As ações são corretas na proporção em que tendem a promover a felicidade e erradas quando tendem a produzir o contrário da felicidade.",
          source: "Utilitarismo, Capítulo II"
        },
        {
          text:
            "É melhor ser um ser humano insatisfeito do que um porco satisfeito; melhor ser Sócrates insatisfeito do que um tolo satisfeito.",
          source: "Utilitarismo, Capítulo II"
        }
      ]
    },
    {
      thinkerId: "dostoyevsky",
      keyWork: "Os Irmãos Karamázov",
      paragraphs: [
        "Dostoiévski dramatiza a oposição entre liberdade e felicidade na lenda do Grande Inquisidor. Cristo teria oferecido uma liberdade pesada demais, enquanto a instituição promete pão, autoridade e segurança em troca da renúncia à escolha.",
        "O argumento não despreza o sofrimento das pessoas; sua força nasce da compaixão usada para justificar tutela. Se a maioria prefere tranquilidade à responsabilidade, o governante pode apresentar a submissão como benefício e a mentira como serviço.",
        "A crítica atinge projetos que calculam o bem-estar sem escutar o desejo humano de responder por si. Freud aceitará que a liberdade não elimina o sofrimento, mas atribuirá o conflito menos a uma instituição particular do que à própria estrutura das pulsões e da vida civilizada."
      ],
      quotes: [
        {
          text:
            "Nenhuma ciência lhes dará pão enquanto permanecerem livres; no fim, porém, depositarão sua liberdade a nossos pés e nos dirão: escravizai-nos, mas alimentai-nos.",
          source: "Os Irmãos Karamázov, Livro V, Capítulo 5"
        },
        {
          text:
            "Nós lhes daremos a felicidade tranquila e humilde das criaturas fracas que são, e eles nos olharão como deuses.",
          source: "Os Irmãos Karamázov, Livro V, Capítulo 5"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Mal-Estar na Civilização",
      paragraphs: [
        "Freud encerra o percurso recusando a expectativa de felicidade contínua. O aparelho psíquico busca prazer, mas o corpo, o mundo externo e as relações com outras pessoas expõem cada indivíduo a fontes permanentes de sofrimento.",
        "A civilização reduz perigos e torna a cooperação possível, ao preço de limitar a satisfação pulsional. Trabalho, amor, arte e religião oferecem caminhos de realização ou consolo, nenhum deles capaz de eliminar o conflito entre desejo, realidade e consciência.",
        "A felicidade aparece em episódios intensos, não como estado garantido pela virtude ou pela ordem social. A análise freudiana não dissolve as respostas anteriores; obriga-nos a perguntar quanto de frustração pertence a instituições transformáveis e quanto acompanha qualquer forma possível de vida em comum."
      ],
      quotes: [
        {
          text:
            "O que chamamos felicidade, no sentido mais estrito, provém da satisfação repentina de necessidades represadas em alto grau.",
          source: "O Mal-Estar na Civilização, Capítulo II"
        },
        {
          text:
            "O propósito de que o homem seja feliz não está incluído no plano da criação.",
          source: "O Mal-Estar na Civilização, Capítulo II"
        }
      ]
    }
  ]
};

const amorEssay: IdeaEssay = {
  slug: "amor",
  title: "A conversa sobre Amor",
  introduction:
    "O amor entra na grande conversa como paixão capaz de criar vínculos e produzir ruína, depois se torna ascensão ao belo, amizade, caridade, desejo social e energia psíquica. Durante mais de dois milênios, cada resposta preserva a tensão entre amar alguém por si mesmo e amar nele um bem que o ultrapassa.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/love e nos textos primários.",
  sections: [
    {
      thinkerId: "euripides",
      keyWork: "Medeia",
      paragraphs: [
        "Eurípides inicia a conversa com o amor ferido que se converte em ódio sem perder sua intensidade. Medeia abandonou família e pátria por Jasão; quando ele a troca por uma aliança política, a devoção absoluta encontra no mesmo objeto o alvo de uma vingança absoluta.",
        "A tragédia não atribui o crime à ignorância. Medeia reconhece o mal que fará e continua amando os filhos, mas permite que a fúria contra Jasão domine toda deliberação e use aquilo que lhe é mais caro como instrumento.",
        "O amor aparece como poder de fixação que pode destruir o amado, o amante e terceiros. Platão responderá procurando uma forma de eros que se eleve do apego exclusivo a um corpo para um bem que não possa ser possuído nem traído."
      ],
      quotes: [
        {
          text:
            "Sei muito bem que mal pretendo fazer, mas mais forte que todas as minhas reflexões é a fúria, a fúria que traz aos mortais os maiores males.",
          source: "Medeia, versos 1078–1080"
        },
        {
          text:
            "De todas as criaturas vivas capazes de formar um juízo, nós, mulheres, somos as mais desafortunadas.",
          source: "Medeia, versos 230–231"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "O Banquete",
      paragraphs: [
        "Platão transforma eros de paixão exclusiva em movimento de ascensão. No ensinamento de Diotima, amar é desejar o belo e o bom que nos faltam, buscando participar de uma permanência que a condição mortal não possui.",
        "A escada do amor parte de um corpo belo, reconhece a beleza em outros corpos, passa às almas, às leis e aos conhecimentos, até contemplar o Belo em si. O desejo é educado quando aprende a não confundir uma manifestação particular com a fonte de toda beleza.",
        "A ascensão responde ao aprisionamento de Medeia, mas cria outra dificuldade: a pessoa amada corre o risco de virar degrau abandonado. Aristóteles insistirá que a forma mais completa de amor deseja o bem deste amigo concreto por aquilo que ele é."
      ],
      quotes: [
        {
          text:
            "Aquele que quiser proceder corretamente deve começar na juventude a buscar formas belas, passar da beleza da alma à beleza das leis e instituições, e destas às ciências.",
          source: "O Banquete, 210"
        },
        {
          text: "O amor é o desejo do todo e a busca por ele.",
          source: "O Banquete, 192e"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles desloca o centro de eros para philia, o vínculo de amizade que sustenta tanto a vida pessoal quanto a cidade. Ninguém escolheria possuir todos os outros bens sem ter com quem partilhá-los.",
        "Há amizades de utilidade, prazer e virtude. As duas primeiras duram enquanto dura o benefício; a amizade completa une pessoas que reconhecem e desejam mutuamente o bem do caráter uma da outra.",
        "O amigo torna-se outro eu sem perder sua particularidade, oferecendo uma resposta ao universalismo platônico. Lucrécio contestará a idealização do desejo erótico e tratará sua fixação como efeito corporal que a lucidez deve desfazer."
      ],
      quotes: [
        {
          text:
            "Sem amigos ninguém escolheria viver, ainda que possuísse todos os outros bens.",
          source: "Ética a Nicômaco, Livro VIII, Capítulo 1"
        },
        {
          text: "Um amigo é outro eu.",
          source: "Ética a Nicômaco, Livro IX, Capítulo 4"
        }
      ]
    },
    {
      thinkerId: "lucretius",
      keyWork: "Da Natureza das Coisas",
      paragraphs: [
        "Lucrécio oferece uma terapia materialista do amor erótico. Imagens dos corpos atingem os sentidos, inflamam o desejo e levam o amante a projetar perfeições sobre uma pessoa que não pode satisfazer a fantasia de fusão.",
        "O problema não é o prazer sexual, mas a escravidão a um objeto exclusivo e às ilusões que o cercam. O sábio busca prazer sem permitir que ciúme, ansiedade e dependência convertam uma inclinação natural em tormento.",
        "Essa crítica aproxima o amor de uma febre a ser compreendida, não de uma ascensão metafísica. Agostinho aceitará o diagnóstico da fixação desordenada, porém sustentará que o desejo humano precisa de um objeto último, em vez de apenas libertar-se da ilusão."
      ],
      quotes: [
        {
          text:
            "Do íntimo do homem, uma gota da doçura de Vênus destilou-se no coração, e em seguida vem o frio cuidado.",
          source: "Da Natureza das Coisas, Livro IV"
        },
        {
          text:
            "Evita as armadilhas do amor, se não queres ser enredado.",
          source: "Da Natureza das Coisas, Livro IV"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Confissões",
      paragraphs: [
        "Agostinho faz do amor o peso que orienta toda vontade. Não escolhemos entre amar e não amar; escolhemos, muitas vezes de maneira dividida, quais bens receberão nossa adesão e em que ordem.",
        "Caritas é o amor ordenado a Deus e, nele, às criaturas; cupiditas é o apego que trata um bem criado como fim absoluto. As duas cidades representam historicamente essas orientações: amor de si até o desprezo de Deus e amor de Deus até o deslocamento do eu do centro.",
        "A resposta cristã preserva a ascensão platônica e rejeita a tentativa epicurista de neutralizar o desejo. Aquino dará forma conceitual a essa visão ao definir caridade com a linguagem aristotélica da amizade."
      ],
      quotes: [
        {
          text:
            "Meu peso é o meu amor; por ele sou levado aonde quer que eu seja levado.",
          source: "Confissões, Livro XIII, Capítulo 9"
        },
        {
          text:
            "Dois amores fizeram duas cidades: o amor de si até o desprezo de Deus, a terrena; o amor de Deus até o desprezo de si, a celestial.",
          source: "A Cidade de Deus, Livro XIV, Capítulo 28"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino distingue o amor como paixão, ato da vontade e virtude teologal. Em todos esses níveis, amar significa uma inclinação ao bem, razão pela qual o amor é a raiz dos demais movimentos afetivos.",
        "A caridade é amizade entre o ser humano e Deus, fundada numa comunicação de vida que a graça torna possível. Dessa amizade deriva o amor ao próximo, inclusive ao inimigo, não por aprovação de todo ato, mas por desejo do bem último da pessoa.",
        "Aristóteles fornece a estrutura da benevolência mútua; Agostinho, a ordem do amor; a teologia acrescenta a iniciativa divina. Dante converterá essa síntese numa visão poética em que amor move simultaneamente a alma e o cosmos."
      ],
      quotes: [
        {
          text: "A caridade é a amizade do homem com Deus.",
          source: "Suma Teológica, II-II, Questão 23, Artigo 1"
        },
        {
          text: "O amor é a origem de toda emoção.",
          source: "Suma Teológica, I-II, Questão 27, Artigo 4"
        }
      ]
    },
    {
      thinkerId: "dante",
      keyWork: "Divina Comédia",
      paragraphs: [
        "Dante dramatiza a tese de que todo movimento moral é movimento do amor. No Inferno, desejos que perderam a medida aprisionam as almas; no Purgatório, amores deficientes, excessivos ou mal dirigidos são purificados; no Paraíso, o desejo participa da ordem divina.",
        "Beatriz conserva a singularidade da pessoa amada e se torna guia para além de si. A estrutura lembra a ascensão platônica, mas o encontro não dissolve o particular: a criatura conduz ao Criador dentro de uma história de graça.",
        "O verso final apresenta o amor como princípio que harmoniza vontade humana e movimento cósmico. Montaigne voltará a uma escala mais terrestre, descrevendo uma amizade cuja verdade resiste justamente a qualquer explicação universal."
      ],
      quotes: [
        {
          text: "O amor que move o sol e as outras estrelas.",
          source: "Paraíso, Canto XXXIII"
        },
        {
          text: "Amor, que depressa se apodera do coração gentil.",
          source: "Inferno, Canto V"
        }
      ]
    },
    {
      thinkerId: "montaigne",
      keyWork: "Ensaios",
      paragraphs: [
        "Montaigne encontra em sua amizade com Étienne de La Boétie um vínculo que não se deixa reduzir a utilidade, parentesco ou desejo erótico. Sua singularidade impede que uma lista de qualidades explique por que aqueles dois se escolheram.",
        "As almas se misturam a ponto de apagar a linha da união, mas essa entrega não nasce de carência possessiva. A amizade perfeita é livre, recíproca e tão rara que Montaigne não espera repeti-la.",
        "A fórmula 'porque era ele, porque era eu' dá expressão pessoal ao amigo como outro eu de Aristóteles. Shakespeare mostrará como um amor também fundado em confiança pode ser desfeito quando a interpretação do outro é capturada pela suspeita."
      ],
      quotes: [
        {
          text:
            "Se me pressionarem a dizer por que o amava, sinto que isso só pode ser expresso respondendo: porque era ele, porque era eu.",
          source: "Ensaios, Livro I, Capítulo 28"
        },
        {
          text:
            "Na amizade de que falo, as almas se misturam e se confundem tão inteiramente que apagam a linha que as uniu.",
          source: "Ensaios, Livro I, Capítulo 28"
        }
      ]
    },
    {
      thinkerId: "shakespeare",
      keyWork: "Otelo",
      paragraphs: [
        "Shakespeare examina o amor quando sua confiança é corroída por uma interpretação falsa. Otelo e Desdêmona constroem o vínculo pela narrativa compartilhada de perigos, compaixão e escolha contra as expectativas de Veneza.",
        "Iago não cria o amor nem oferece prova decisiva de traição; ele reorganiza sinais até que o ciúme pareça conhecimento. A imaginação que antes permitiu a Otelo receber o amor de Desdêmona passa a produzir uma certeza destrutiva.",
        "A tragédia retoma Eurípides: amor e ódio podem ocupar o mesmo vínculo quando o juízo se volta contra o amado. Spinoza analisará essa passagem como composição de alegria, tristeza e ideia de causa, procurando substituir a servidão passional pela compreensão."
      ],
      quotes: [
        {
          text:
            "Ela me amou pelos perigos que atravessei, e eu a amei porque deles se compadeceu.",
          source: "Otelo, Ato I"
        },
        {
          text:
            "Cuidado, meu senhor, com o ciúme; é o monstro de olhos verdes que zomba da carne de que se alimenta.",
          source: "Otelo, Ato III"
        }
      ]
    },
    {
      thinkerId: "spinoza",
      keyWork: "Ética",
      paragraphs: [
        "Spinoza define amor como alegria acompanhada da ideia de uma causa externa. Quando essa ideia é inadequada, o amante permanece passivo, oscilando entre esperança, medo, ciúme e ódio conforme imagina mudanças no objeto.",
        "O amor intelectual de Deus nasce de uma compreensão adequada de Deus ou Natureza como causa de todas as coisas. Ele não pede reciprocidade, pois a mente participa da própria atividade pela qual a realidade se conhece e se afirma.",
        "A ascensão deixa de ser encontro com um Deus pessoal e se torna liberdade pelo conhecimento necessário. Rousseau deslocará novamente o debate, perguntando como relações sociais e educação transformam disposições naturais em paixão, comparação e dependência."
      ],
      quotes: [
        {
          text:
            "O amor intelectual da mente por Deus é parte do amor infinito com que Deus ama a si mesmo.",
          source: "Ética, Parte V, Proposição 36"
        },
        {
          text:
            "Quem ama a Deus não pode esforçar-se para que Deus o ame em troca.",
          source: "Ética, Parte V, Proposição 19"
        }
      ]
    },
    {
      thinkerId: "rousseau",
      keyWork: "Emílio",
      paragraphs: [
        "Rousseau situa o amor numa história do desenvolvimento humano. O amor de si, cuidado natural pela própria conservação, e a piedade antecedem a comparação social; o amor-próprio competitivo nasce quando passamos a depender do olhar alheio.",
        "Na adolescência, o desejo pode ampliar a sensibilidade ao outro ou tornar-se vaidade, ciúme e necessidade de reconhecimento. A educação deve formar a imaginação e o julgamento para que a afeição encontre uma pessoa sem se submeter às convenções que distorcem o vínculo.",
        "O amor não é apenas impulso natural nem contemplação de um bem eterno: é paixão moldada por instituições. Freud conservará essa atenção ao desenvolvimento, mas encontrará sob as formas culturais uma energia libidinal comum que pode ser desviada, reprimida e sublimada."
      ],
      quotes: [
        {
          text:
            "Amar é ter necessidade de outro; ser amado é não ter necessidade de nada.",
          source: "Emílio, Livro IV"
        },
        {
          text:
            "O primeiro sentimento do homem é o de sua existência; seu primeiro cuidado é o de sua conservação.",
          source: "Emílio, Livro I"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Mal-Estar na Civilização",
      paragraphs: [
        "Freud reúne amor sexual, ternura familiar, amizade e dedicação a ideais sob a história da libido, energia das pulsões sexuais. Essas formas diferem pelos objetos escolhidos e pelos destinos de repressão, inibição ou sublimação que o desejo atravessa.",
        "Eros liga indivíduos e grupos, tornando possível a civilização, mas suas exigências entram em conflito com exclusividade, agressividade e normas sociais. O mesmo processo que transforma energia sexual em trabalho e cultura produz renúncia e mal-estar.",
        "Ao lado de Eros, a pulsão de morte nomeia forças de desagregação que nenhuma união elimina. Freud naturaliza a conversa sem encerrá-la: permanece em disputa se as variedades do amor são transformações de uma fonte comum ou bens distintos que pedem critérios próprios."
      ],
      quotes: [
        {
          text:
            "O amor e o trabalho são as pedras angulares de nossa humanidade.",
          source: "Atribuída a Freud"
        },
        {
          text:
            "Eros, o preservador de todas as coisas, luta eternamente com seu adversário imortal.",
          source: "O Mal-Estar na Civilização, Capítulo VI"
        }
      ]
    }
  ]
};

const coragemEssay: IdeaEssay = {
  slug: "coragem",
  title: "A conversa sobre Coragem",
  introduction:
    "A coragem começa como glória do guerreiro que enfrenta a morte e, ao longo de mais de dois milênios, torna-se conhecimento do que temer, hábito moral, firmeza interior, serviço político e resistência cotidiana. A tradição nunca elimina a tensão entre avançar e suportar, entre o gesto visível e a força silenciosa, nem entre a valentia como potência e o bem que deveria orientá-la.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/courage e nos textos primários.",
  sections: [
    {
      thinkerId: "homer",
      keyWork: "Ilíada",
      paragraphs: [
        "Em Homero, a coragem pertence ao mundo público da honra. O guerreiro enfrenta o perigo para cumprir o papel que lhe cabe, proteger os seus e conquistar kleos, a glória imperecível preservada pela memória dos que narram seus feitos.",
        "Heitor conhece a provável destruição de Troia e ainda assim retorna ao combate. Sua bravura não nasce da expectativa de vitória, mas da decisão de sustentar deveres familiares e cívicos diante de um destino que não pode controlar.",
        "Essa coragem possui grandeza e custo: o desejo de honra pode prolongar a violência e tornar difícil distinguir sacrifício de orgulho. Tucídides herdará o vínculo entre coragem e cidade, mas trocará a glória aristocrática pela liberdade compartilhada entre cidadãos."
      ],
      quotes: [
        {
          text:
            "Gloriosa é a morte daquele que, por sua pátria, cai na linha de frente da batalha.",
          source: "Ilíada, Livro XV"
        },
        {
          text:
            "Sei bem, em meu coração e em minha alma, que chegará o dia em que a sagrada Ílion será destruída.",
          source: "Ilíada, Livro VI"
        }
      ]
    },
    {
      thinkerId: "thucydides",
      keyWork: "História da Guerra do Peloponeso",
      paragraphs: [
        "Tucídides desloca a coragem do herói singular para a cultura política de Atenas. Na oração fúnebre atribuída a Péricles, cidadãos livres defendem a cidade não por coerção permanente, mas porque reconhecem nela uma forma de vida que merece ser preservada.",
        "A liberdade alimenta coragem ao permitir que deliberação, beleza e cultivo intelectual coexistam com firmeza militar. O combatente democrático sabe o que arrisca porque participa do mundo comum que sua ação protege.",
        "A guerra e a peste revelam, porém, a fragilidade dessa formação: quando leis e confiança se desfazem, a audácia pode substituir a coragem. Platão responderá procurando uma disposição mais estável, produzida pela educação e resistente às pressões do medo e do prazer."
      ],
      quotes: [
        {
          text:
            "O segredo da felicidade é a liberdade, e o segredo da liberdade é a coragem.",
          source: "História da Guerra do Peloponeso, Livro II, Capítulo 43"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "Platão recusa identificar coragem com exposição ao perigo ou sucesso militar. Uma pessoa pode permanecer no campo de batalha por ignorância, vergonha ou cálculo e ainda não possuir a virtude que parece demonstrar.",
        "Na República, coragem é conservar a opinião correta, formada pela lei e pela educação, sobre aquilo que deve ser temido. Prazer, dor e ameaça funcionam como solventes; o caráter corajoso preserva o juízo racional quando essas forças procuram deformá-lo.",
        "A definição intelectualiza a herança de Homero e Tucídides, tornando a educação da alma decisiva. Aristóteles conservará a necessidade do julgamento, mas insistirá que coragem é também uma disposição adquirida para sentir e agir na medida adequada."
      ],
      quotes: [
        {
          text:
            "A coragem é a preservação da opinião produzida pela lei, por meio da educação, acerca das coisas e espécies de coisas que devem ser temidas.",
          source: "República, Livro IV"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles situa a coragem entre covardia e temeridade. O covarde teme em excesso; o temerário se lança ao risco como se nada fosse ameaçador; o corajoso reconhece o perigo sem permitir que ele determine sozinho sua escolha.",
        "A virtude exige objeto, motivo, modo e ocasião corretos. Enfrentar a morte por impulso, experiência técnica ou expectativa de recompensa pode imitar a coragem, mas falta-lhe a escolha do nobre como razão da ação.",
        "A medida aristotélica reúne sentimento e razão por meio do hábito. Plutarco levará esse critério às biografias políticas, mostrando que audácia sem justiça e prudência pode servir tanto à cidade quanto à sua destruição."
      ],
      quotes: [
        {
          text:
            "O homem corajoso suporta e teme as coisas certas, pelo motivo certo, da maneira certa e no momento certo.",
          source: "Ética a Nicômaco, Livro III"
        }
      ]
    },
    {
      thinkerId: "plutarch",
      keyWork: "Vidas Paralelas",
      paragraphs: [
        "Plutarco examina a coragem por meio de vidas concretas, nas quais caráter e instituições se formam mutuamente. Seus protagonistas revelam modalidades diferentes de bravura, desde a disciplina espartana até a iniciativa do comandante que assume riscos diante de uma crise.",
        "O perigo moral está na separação entre ousadia, justiça e julgamento. A mesma energia capaz de salvar uma comunidade pode produzir ambição, crueldade ou desprezo pelas leis quando a causa deixa de ser justa.",
        "As Vidas preservam a medida aristotélica, mas mostram como exemplos e companhias educam as paixões. Epicteto reduzirá a dependência dessas circunstâncias externas ao localizar o campo decisivo da coragem naquilo que a vontade pode governar."
      ],
      quotes: [
        {
          text:
            "A coragem não consiste em arriscar-se sem medo, mas em permanecer resolutamente disposto numa causa justa.",
          source: "Vidas Paralelas, Pelópidas"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Discursos",
      paragraphs: [
        "Epicteto transfere a batalha para a prohairesis, a faculdade de escolha pela qual julgamos e orientamos nossa conduta. A coragem nasce da distinção entre acontecimentos externos, que não controlamos, e o uso moral que fazemos de nossas impressões.",
        "O estoico pode ser confiante diante de doença, exílio ou morte porque esses eventos não retiram a integridade da escolha. Deve, ao mesmo tempo, ser cauteloso no domínio da vontade, onde erro, assentimento precipitado e desejo desordenado dependem dele.",
        "Essa inversão impede que firmeza se confunda com imprudência: há coisas diante das quais não precisamos tremer e escolhas diante das quais nunca devemos ser descuidados. Marco Aurélio aplicará a disciplina à rotina do dever, afastando-a ainda mais do espetáculo heroico."
      ],
      quotes: [
        {
          text:
            "Que a maior parte do que sabes permaneça no fundo de ti; sê confiante apenas quanto ao que está além do controle da vontade e cauteloso em tudo o que depende dela.",
          source: "Discursos, Livro II, Capítulo 1"
        }
      ]
    },
    {
      thinkerId: "marcus-aurelius",
      keyWork: "Meditações",
      paragraphs: [
        "Marco Aurélio apresenta a coragem como retorno diário ao trabalho próprio de um ser racional e social. Levantar-se, cumprir o dever e suportar pessoas difíceis podem exigir uma firmeza menos visível do que a batalha, mas mais constante.",
        "A mente não governa os acontecimentos externos; governa a resposta que lhes dá. O obstáculo pode tornar-se matéria da ação quando o juízo deixa de tratá-lo como afronta pessoal e procura nele uma tarefa compatível com justiça e cooperação.",
        "A coragem estoica se mede pela continuidade do serviço, inclusive sob cansaço e frustração. Aquino receberá a centralidade da resistência, mas ligará a fortaleza a uma ordem de bens e ao amor que torna possível suportar até a morte."
      ],
      quotes: [
        {
          text:
            "Pela manhã, quando te levantares sem vontade, tenha presente este pensamento: estou me levantando para o trabalho de um ser humano.",
          source: "Meditações, Livro V, §1"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino chama a coragem de fortaleza e a inclui entre as virtudes cardeais. Sua função é firmar o apetite diante dos males que ameaçam afastar a pessoa do bem reconhecido pela razão.",
        "Resistir é o ato principal da fortaleza porque permanecer no bem sob um perigo prolongado exige estabilidade maior do que atacar num impulso. O martírio aperfeiçoa essa lógica quando alguém suporta a morte por fidelidade à verdade e por caridade.",
        "A coragem não cria seu próprio fim: recebe da prudência e da justiça o bem pelo qual vale sofrer. Maquiavel contestará essa subordinação ao perguntar se a ação política eficaz pode obedecer aos mesmos critérios que governam a perfeição moral."
      ],
      quotes: [
        {
          text:
            "O ato principal da fortaleza é resistir, isto é, permanecer imóvel em meio aos perigos.",
          source: "Suma Teológica, II-II, Questão 123, Artigo 6"
        },
        {
          text:
            "O martírio é a maior prova da perfeição da caridade.",
          source: "Suma Teológica, II-II, Questão 124, Artigo 3"
        }
      ]
    },
    {
      thinkerId: "machiavelli",
      keyWork: "O Príncipe",
      paragraphs: [
        "Maquiavel avalia a coragem dentro da luta com a fortuna, nome dado à instabilidade que escapa ao cálculo humano. Virtù significa capacidade de agir com energia, adaptar-se às circunstâncias e impor alguma forma aos acontecimentos.",
        "A cautela pode ser adequada em certo tempo e fatal em outro. O governante audacioso possui vantagem quando a ocasião exige rapidez, pois resultados políticos dependem menos da pureza da intenção do que da correspondência entre temperamento e conjuntura.",
        "Essa eficácia rompe com a fortaleza orientada ao bem de Aquino e com a medida moral de Aristóteles. Montaigne reagirá ao heroísmo do domínio examinando o medo por dentro e desconfiando das imagens públicas com que escondemos nossas fraquezas."
      ],
      quotes: [
        {
          text:
            "É melhor ser impetuoso do que cauteloso, porque a fortuna é mulher e, para mantê-la submissa, é necessário golpeá-la e maltratá-la.",
          source: "O Príncipe, Capítulo XXV"
        }
      ]
    },
    {
      thinkerId: "montaigne",
      keyWork: "Ensaios",
      paragraphs: [
        "Montaigne retira a coragem do palco das conquistas e a aproxima da experiência comum do medo, da dor e da morte. Confessar a própria vulnerabilidade exige uma honestidade incompatível com poses heroicas.",
        "O medo pode desorganizar percepção e conduta antes que a razão formule uma resposta. Preparar-se para morrer não significa eliminar o temor, mas reduzir o poder das fantasias que o tornam mais opressivo do que o acontecimento.",
        "A coragem passa a incluir lucidez sobre os limites do caráter. Hobbes também tratará o medo e a confiança como paixões naturais, porém os inserirá numa teoria em que a força individual precisa ser contida pela autoridade política."
      ],
      quotes: [
        {
          text: "A coisa que mais temo é o medo.",
          source: "Ensaios, Livro I, \"Do Medo\""
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes define a coragem como paixão produzida pela imaginação de poder superar um obstáculo. Ela não é, por natureza, virtude: expressa uma estimativa de força que pode estar correta, equivocada ou inflada pela vaidade.",
        "No estado de natureza, confiança e medo participam da competição que torna cada pessoa ameaça potencial para as demais. A coragem individual adquire utilidade civil quando a ordem soberana a dirige para a defesa comum e limita seu emprego privado.",
        "O critério passa da excelência do caráter à função política da paixão. Spinoza conservará a análise causal dos afetos, mas distinguirá a força guiada pela razão da confiança que apenas imagina possuir poder."
      ],
      quotes: [
        {
          text:
            "A coragem súbita é uma paixão que procede da imaginação de poder superar o obstáculo que aparece.",
          source: "Leviatã, Parte I, Capítulo 6"
        }
      ]
    },
    {
      thinkerId: "spinoza",
      keyWork: "Ética",
      paragraphs: [
        "Spinoza compreende a fortitudo, força de ânimo, como desejo de preservar o próprio ser sob orientação da razão. Ela reúne firmeza, cuidado racional de si, e generosidade, esforço para auxiliar os outros e uni-los por amizade.",
        "Combater e recuar não possuem valor fixo fora das circunstâncias. Permanecer numa luta destrutiva por vergonha ou raiva pode revelar servidão às paixões, enquanto afastar-se no momento adequado pode expressar compreensão e domínio de si.",
        "A coragem racional corrige tanto a audácia de Maquiavel quanto a paixão de confiança descrita por Hobbes. Kant perguntará, contudo, se razão e autopreservação bastam para conferir valor moral ou se a força deve ser julgada pela boa vontade que a emprega."
      ],
      quotes: [
        {
          text:
            "Fugir no momento apropriado, tanto quanto lutar, deve ser considerado uma demonstração de força de ânimo.",
          source: "Ética, Parte IV, Proposição 69, Escólio"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Fundamentação da Metafísica dos Costumes",
      paragraphs: [
        "Kant separa qualidades de temperamento e valor moral. Coragem, resolução e perseverança ampliam a capacidade de agir, mas essa potência pode servir a fins cruéis com a mesma eficiência com que serve ao dever.",
        "A boa vontade fornece a orientação que falta à mera firmeza. Uma ação corajosa possui mérito moral quando nasce do respeito à lei que a razão pode reconhecer como válida para todos, não apenas da inclinação ao risco ou do desejo de honra.",
        "A crítica retoma a pergunta de Aquino sobre o fim da fortaleza sem depender de uma teologia das virtudes. Hegel contestará o isolamento do agente moral ao situar a coragem no pertencimento concreto à vida ética do Estado."
      ],
      quotes: [
        {
          text:
            "Coragem, resolução e perseverança, como qualidades do temperamento, são sem dúvida boas e desejáveis sob muitos aspectos; mas podem também tornar-se extremamente más e nocivas se a vontade que deve utilizá-las não for boa.",
          source: "Fundamentação da Metafísica dos Costumes, Seção I"
        }
      ]
    },
    {
      thinkerId: "hegel",
      keyWork: "Princípios da Filosofia do Direito",
      paragraphs: [
        "Hegel insere a coragem na eticidade, a vida moral objetiva formada por instituições, costumes e pertencimentos. O indivíduo encontra deveres concretos como membro da família, da sociedade civil e do Estado, não como consciência separada do mundo histórico.",
        "Na guerra, a disposição de arriscar a vida manifesta que o interesse privado não é o valor absoluto. A coragem política consiste em aceitar o sacrifício pessoal pelo universal encarnado na comunidade organizada.",
        "Essa tese transforma a glória homérica em serviço institucional e responde ao formalismo que Hegel atribui a Kant. Tolstói atacará precisamente a distância entre essa nobre formulação e a experiência confusa daqueles que recebem ordens e enfrentam o fogo."
      ],
      quotes: [
        {
          text:
            "A coragem não é apenas uma virtude pessoal, mas exige a disposição de sacrificar-se a serviço do Estado.",
          source: "Princípios da Filosofia do Direito, Parte III"
        }
      ]
    },
    {
      thinkerId: "tolstoy",
      keyWork: "Guerra e Paz",
      paragraphs: [
        "Tolstói submete as teorias da coragem ao caos vivido da guerra. Em Guerra e Paz, soldados considerados valentes agem por tédio, excitação, hábito ou confusão, enquanto feitos decisivos ocorrem sem a consciência clara que os sistemas morais parecem pressupor.",
        "Ruído, medo e velocidade destroem a imagem de uma batalha governada pela deliberação dos comandantes. Relatórios posteriores impõem ordem aos acontecimentos, mas a bravura real frequentemente pertence a pessoas comuns que continuam sua tarefa sem compreender o conjunto nem esperar glória.",
        "A resistência de Pierre no cativeiro, de Maria diante da crueldade e do povo durante a invasão amplia a coragem para além do ataque. Tolstói não encerra a tradição; deixa aberta a pergunta sobre quanto de suas definições sobrevive quando a experiência retira do agente controle, clareza e reconhecimento."
      ],
      quotes: [
        {
          text:
            "Os mais fortes de todos os guerreiros são estes dois: o Tempo e a Paciência.",
          source: "Guerra e Paz, Livro X"
        }
      ]
    }
  ]
};

const desejoEssay: IdeaEssay = {
  slug: "desejo",
  title: "A conversa sobre Desejo",
  introduction:
    "O desejo aparece ora como falta que escraviza, ora como energia que move a alma em direção ao bem. De Platão a Freud, a conversa pergunta se devemos educá-lo, curá-lo, obedecê-lo ou interpretar as forças ocultas que falam por meio dele.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/desire e nos textos primários.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "O Banquete",
      paragraphs: [
        "Platão oferece duas imagens do desejo. Na República, o apetite pode arrastar a alma para uma sucessão sem medida de prazeres; no Banquete, eros nasce da falta e impulsiona a busca do belo que não possuímos.",
        "A educação filosófica não destrói essa energia, mas muda seu objeto. O amante passa de um corpo belo às almas, às leis, aos conhecimentos e, por fim, à contemplação do Belo em si.",
        "Desejo pode, portanto, degradar ou elevar conforme a ordem que recebe da razão. Aristóteles recusará uma oposição tão aguda entre apetite e pensamento, procurando formar um caráter que deseje espontaneamente aquilo que reconhece como bom."
      ],
      quotes: [
        {
          text: "Aquele que o Amor toca não caminha nas trevas.",
          source: "O Banquete"
        },
        {
          text:
            "A alma de cada homem possui o poder de aprender a verdade e o órgão para contemplá-la.",
          source: "República, Livro VII"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles reúne sob orexis, desejo, o apetite corporal, o ânimo e a aspiração racional. Pensamento isolado não põe o corpo em movimento; agir exige que alguma coisa apareça como desejável.",
        "A virtude forma prazeres e dores até que o agente queira a medida indicada pela razão prática. O temperante não vive numa guerra contínua consigo mesmo: aprendeu a desejar a quantidade e o objeto adequados.",
        "A harmonia entre razão e desejo faz da educação moral uma formação afetiva. Lucrécio responderá que muitos desejos não precisam de aperfeiçoamento, mas de diagnóstico, pois nascem de crenças falsas e não possuem termo natural."
      ],
      quotes: [
        {
          text:
            "O pensamento por si só nada move; move-nos o pensamento combinado com o desejo.",
          source: "Ética a Nicômaco, Livro VI"
        },
        {
          text:
            "O homem virtuoso deseja o que é verdadeiramente bom e encontra prazer nisso.",
          source: "Ética a Nicômaco, Livro III"
        }
      ]
    },
    {
      thinkerId: "lucretius",
      keyWork: "Da Natureza das Coisas",
      paragraphs: [
        "Lucrécio trata desejos ilimitados como causas de perturbação. Natureza requer alimento, abrigo e ausência de dor; riqueza sem fim, fama e imortalidade imaginária acrescentam ansiedade a necessidades modestas.",
        "O medo da morte sustenta boa parte dessa corrida. Quando entendemos que morrer é a dissolução dos átomos e não uma experiência futura de sofrimento, a urgência de acumular e dominar perde força.",
        "A terapia epicurista substitui ascensão por lucidez: examinar causas e limites pode desfazer a fixação. Agostinho aceitará que desejos se desordenam, mas sustentará que a inquietação revela um fim mais alto, não apenas um erro a ser removido."
      ],
      quotes: [
        {
          text:
            "É mais útil observar um homem em tempos de dificuldade e perigo, pois então a verdadeira voz emerge do fundo de seu coração.",
          source: "Da Natureza das Coisas, Livro III"
        },
        {
          text:
            "Do coração dessa fonte de delícias brota algo amargo que os sufoca mesmo entre as flores.",
          source: "Da Natureza das Coisas, Livro IV"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Confissões",
      paragraphs: [
        "Agostinho narra o desejo como busca do bem que se perde quando transforma bens finitos em absolutos. Luxúria, ambição e orgulho não são amor em excesso a coisas más, mas amor fora de ordem.",
        "Ordo amoris, a ordem do amor, dispõe cada bem segundo seu valor e dirige a vontade para Deus. A conversão não extingue desejo; reorienta uma inquietação que nenhuma criatura consegue satisfazer por completo.",
        "A graça introduz um elemento que a disciplina filosófica não produz sozinha: a vontade dividida precisa ser auxiliada para querer plenamente o que reconhece. Aquino organizará essa dinâmica distinguindo apetites naturais, sensíveis e racionais."
      ],
      quotes: [
        {
          text:
            "Fizeste-nos para ti, Senhor, e inquieto está o nosso coração enquanto não repousa em ti.",
          source: "Confissões, Livro I"
        },
        {
          text: "Dá-me castidade e continência, mas não ainda.",
          source: "Confissões, Livro VIII"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino distingue apetite natural, apetite sensível e vontade, o apetite racional. Cada ser tende ao bem segundo seu modo: corpos por inclinação natural, animais pela sensação e seres humanos também pela apreensão intelectual.",
        "As paixões não são más em si. A vontade consente, resiste e ordena desejos sensíveis, enquanto busca necessariamente o bem sob alguma aparência, mesmo quando escolhe um objeto inadequado.",
        "Nenhum bem finito encerra a abertura da vontade ao bem universal. Spinoza rejeitará esse fim transcendente e fará do próprio esforço de perseverar, o conatus, a essência efetiva do desejo humano."
      ],
      quotes: [
        {
          text:
            "A vontade tende naturalmente ao bem como ao seu objeto próprio.",
          source: "Suma Teológica, I-II, Questão 8, Artigo 1"
        },
        {
          text:
            "A felicidade última do homem consiste na contemplação da verdade, que é a visão da essência divina.",
          source: "Suma Teológica, I-II, Questão 3, Artigo 8"
        }
      ]
    },
    {
      thinkerId: "dante",
      keyWork: "Divina Comédia",
      paragraphs: [
        "Dante converte em poesia a tese de que toda criatura se move por amor. O fogo busca sua esfera, a planta busca a luz e a vontade humana busca uma forma de plenitude.",
        "O desejo eletivo pode errar pelo objeto, pelo excesso ou pela deficiência. A arquitetura do Purgatório não elimina o amor, mas corrige sua direção e medida até que vontade e desejo concordem.",
        "No Paraíso, a realização não é imobilidade, mas movimento perfeitamente afinado ao amor que ordena o cosmos. Hobbes romperá com esse universo de fins naturais ao descrever desejo como movimento interminável entre objetos sucessivos."
      ],
      quotes: [
        {
          text:
            "Nem Criador nem criatura, meu filho, jamais existiram sem amor, natural ou da mente.",
          source: "Divina Comédia, Purgatório, Canto XVII"
        },
        {
          text:
            "Mas já meu desejo e minha vontade giravam, como roda em movimento uniforme, pelo Amor que move o sol e as outras estrelas.",
          source: "Divina Comédia, Paraíso, Canto XXXIII"
        }
      ]
    },
    {
      thinkerId: "spinoza",
      keyWork: "Ética",
      paragraphs: [
        "Spinoza define desejo como conatus consciente, o esforço pelo qual cada coisa persevera em seu ser. Ele não é uma faculdade inferior esperando ordens da razão, mas a própria essência ativa do indivíduo.",
        "O juízo de valor segue o desejo: chamamos bom aquilo que buscamos, em vez de buscá-lo porque primeiro o julgamos bom. A diferença decisiva está entre paixões produzidas por causas externas e desejos ativos nascidos de compreensão adequada.",
        "Liberdade não significa ausência de desejo, mas entendimento de suas causas e aumento da potência de agir. Hobbes compartilha o naturalismo, embora veja uma sucessão mecânica de apetites que exige contenção política."
      ],
      quotes: [
        {
          text:
            "O desejo é a própria essência do homem, enquanto concebida como determinada a alguma ação por uma condição dada.",
          source: "Ética, Parte III, Definição dos Afetos"
        },
        {
          text:
            "Não nos esforçamos, queremos, buscamos ou desejamos algo porque o julgamos bom; ao contrário, julgamos algo bom porque nos esforçamos, queremos, buscamos ou desejamos.",
          source: "Ética, Parte III, Proposição 9, Escólio"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes descreve desejo como início de movimento em direção a um objeto e aversão como movimento de afastamento. Não existe uma vontade separada: a vontade é o último apetite que prevalece na deliberação.",
        "A felicidade não é repouso num bem supremo, mas êxito contínuo na passagem de um desejo ao seguinte. Poder torna-se desejável porque assegura meios futuros para satisfazer apetites que ainda surgirão.",
        "Essa inquietação permanente produz competição e torna necessária uma autoridade capaz de conter seus efeitos violentos. Kant reagirá separando moralidade da satisfação, afirmando que a vontade livre deve agir contra inclinações quando o dever assim exige."
      ],
      quotes: [
        {
          text:
            "A felicidade desta vida não consiste no repouso de uma mente satisfeita, mas no progresso contínuo do desejo de um objeto a outro.",
          source: "Leviatã, Parte I, Capítulo 11"
        },
        {
          text:
            "Apresento como inclinação geral de toda a humanidade um desejo perpétuo e inquieto de poder após poder, que cessa apenas na morte.",
          source: "Leviatã, Parte I, Capítulo 11"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Crítica da Razão Prática",
      paragraphs: [
        "Kant recusa que desejos, mesmo educados, possam fundamentar obrigação universal. Inclinações pertencem à sensibilidade e variam; a lei moral deve valer independentemente do objeto que alguém queira alcançar.",
        "Agir por dever é escolher uma máxima por respeito à lei, não pelo prazer esperado. A liberdade prática aparece quando a razão determina a vontade apesar da atração ou repulsa produzida pelas circunstâncias.",
        "A separação preserva a autonomia, mas deixa aberta a pergunta sobre a origem de motivações que se apresentam como racionais. Melville e Freud explorarão desejos que ocupam o sujeito de modo tão profundo que sua liberdade se torna incerta."
      ],
      quotes: [
        {
          text:
            "Dever é a necessidade de uma ação praticada por respeito à lei.",
          source: "Fundamentação da Metafísica dos Costumes"
        },
        {
          text:
            "A inclinação, seja benigna ou de outro tipo, é cega e servil.",
          source: "Crítica da Razão Prática"
        }
      ]
    },
    {
      thinkerId: "melville",
      keyWork: "Moby Dick",
      paragraphs: [
        "Melville dá ao desejo monomaníaco a figura de Ahab. A baleia deixa de ser um animal e se torna máscara de uma ofensa cósmica que o capitão precisa atravessar, mesmo sem conseguir nomear o que imagina existir por trás dela.",
        "A perseguição reorganiza navio, tripulação, trabalho e natureza segundo um único objeto. Advertências, afeto e prudência não competem com esse desejo porque ele já absorveu a identidade daquele que deveria julgá-lo.",
        "Ahab mostra uma vontade que parece soberana enquanto confessa estar presa a uma força inescrutável. William James deslocará a questão para os mecanismos da atenção, perguntando como uma ideia se torna dominante e passa à ação."
      ],
      quotes: [
        {
          text:
            "Não me fales de blasfêmia, homem; eu golpearia o sol se ele me insultasse.",
          source: "Moby Dick, Capítulo 36"
        },
        {
          text:
            "Agora te conheço, espírito claro, e sei que tua verdadeira adoração é o desafio.",
          source: "Moby Dick, Capítulo 119"
        }
      ]
    },
    {
      thinkerId: "william-james",
      keyWork: "Princípios de Psicologia",
      paragraphs: [
        "William James descreve desejo como consciência sentida de algo ausente. A ideia retorna à atenção acompanhada pela percepção de impedimento, e essa tensão distingue querer de apenas imaginar.",
        "O princípio ideomotor afirma que uma ideia de movimento tende a realizá-lo quando nenhuma ideia rival a inibe. Nos conflitos difíceis, esforço de vontade é esforço de atenção para manter uma possibilidade presente até que se converta em ato.",
        "A vontade deixa de ser poder oculto e torna-se disputa entre conteúdos pela posse da mente. Freud levará o conflito para além da atenção consciente, sustentando que desejos reprimidos continuam ativos sob formas deslocadas."
      ],
      quotes: [
        {
          text:
            "Desejo, anseio e vontade são estados mentais que todos conhecem e que nenhuma definição pode tornar mais claros.",
          source: "Princípios de Psicologia, Capítulo XXVI"
        },
        {
          text:
            "O esforço de atenção é, portanto, o fenômeno essencial da vontade.",
          source: "Princípios de Psicologia, Capítulo XI"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Mal-Estar na Civilização",
      paragraphs: [
        "Freud rompe com a suposição de que conhecemos nossos desejos. Repressão afasta representações da consciência, mas não elimina sua energia, que retorna em sonhos, sintomas, lapsos e escolhas aparentemente inexplicáveis.",
        "A libido pode ser desviada e sublimada em trabalho, arte, religião e vínculos sociais. A civilização depende dessas transformações, ao mesmo tempo que aumenta culpa e frustração ao exigir renúncias crescentes.",
        "Até o dever pode carregar desejos internalizados e agressividade voltada contra o próprio eu. A conversa termina sem decidir se compreender o desejo o liberta, como esperava Spinoza, ou apenas revela que a consciência nunca governou sozinha."
      ],
      quotes: [
        {
          text:
            "O preço que pagamos por nosso avanço na civilização é uma perda de felicidade pelo aumento do sentimento de culpa.",
          source: "O Mal-Estar na Civilização"
        },
        {
          text: "O eu não é senhor em sua própria casa.",
          source: "Uma Dificuldade no Caminho da Psicanálise"
        }
      ]
    }
  ]
};

const punicaoEssay: IdeaEssay = {
  slug: "punicao",
  title: "A conversa sobre Punição",
  introduction:
    "A punição nasce como vingança de sangue e se converte em poder público de julgar, corrigir, dissuadir e restaurar o direito. O debate atravessa uma tensão que permanece viva: fazemos sofrer porque o culpado merece, porque esperamos reformá-lo ou porque queremos proteger a comunidade?",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/punishment e nos textos primários.",
  sections: [
    {
      thinkerId: "aeschylus",
      keyWork: "Oresteia",
      paragraphs: [
        "Ésquilo apresenta a punição em sua forma arcaica: o sangue derramado exige novo sangue, e a dívida alcança a casa inteira. As Erínias perseguem Orestes porque a morte da mãe não pode permanecer sem resposta.",
        "A lei de retribuição contém uma exigência de responsabilidade, mas produz novas vítimas quando executada pelos diretamente ofendidos. Atena institui um tribunal que retira a decisão das mãos da vingança privada sem desprezar a reclamação das antigas deusas.",
        "Punição torna-se julgamento público capaz de encerrar a sequência de represálias. Platão aceitará a autoridade da cidade, mas deslocará o fim da pena da satisfação do dano para a cura moral do infrator."
      ],
      quotes: [
        {
          text: "Quem faz sofrerá. Essa é a lei antiga.",
          source: "Agamêmnon"
        },
        {
          text:
            "Que nenhum homem viva sem o freio da lei, nem seja escravizado pela tirania.",
          source: "Eumênides"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "Górgias",
      paragraphs: [
        "Platão inverte a intuição de que escapar da pena é vantagem. A injustiça adoece a alma; sofrer a correção é menos ruim do que conservar intacta a desordem produzida pelo crime.",
        "A analogia médica permite graduar penas segundo a condição do agente. Alguns podem ser reformados, enquanto os incorrigíveis servem de exemplo ou são afastados para proteger a cidade.",
        "A pena não é vingança, mas intervenção orientada por um bem objetivo. Aristóteles tornará essa medicina menos abrangente ao situar a punição na restauração de uma igualdade rompida entre pessoas."
      ],
      quotes: [
        {
          text:
            "A função própria da punição é dupla: aquele que é justamente punido deve tornar-se melhor e beneficiar-se dela, ou deve servir de exemplo aos seus semelhantes.",
          source: "Górgias, 525b"
        },
        {
          text:
            "A maior de todas as desgraças ligadas à injustiça é ter cometido o mal e não pagar a pena.",
          source: "Górgias, 479d"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles compreende a pena como parte da justiça corretiva. Quando alguém obtém ganho injusto e outro sofre perda, o juiz busca uma igualdade aritmética que retire a vantagem e repare o desequilíbrio.",
        "A responsabilidade depende de voluntariedade, conhecimento e circunstâncias. Atos cometidos sob força ou ignorância relevante não recebem a mesma avaliação que escolhas deliberadas.",
        "A correção aristotélica preserva proporcionalidade sem reduzir punição a tratamento da alma. Agostinho acrescentará o horizonte do pecado e perguntará como a autoridade pode punir sem reproduzir o ódio que condena."
      ],
      quotes: [
        {
          text:
            "Punimos aqueles que agem mal, desde que o ato não tenha sido praticado sob coação ou como resultado de ignorância pela qual o agente não era responsável.",
          source: "Ética a Nicômaco, Livro III, Capítulo 5"
        },
        {
          text:
            "O homem injusto tem demais e aquele que sofre tem de menos; o juiz procura igualar as coisas pela pena, retirando do ganho.",
          source: "Ética a Nicômaco, Livro V, Capítulo 4"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "A Cidade de Deus",
      paragraphs: [
        "Agostinho distingue a justiça da pena e o afeto daquele que a aplica. Uma autoridade pode corrigir por cuidado com a ordem e com o culpado; a mesma ação, movida por crueldade ou prazer na dor, torna-se moralmente corrompida.",
        "A punição terrena permanece limitada porque nenhum juiz conhece inteiramente a interioridade humana. Ela pode restringir o mal e favorecer arrependimento, mas não substitui o juízo divino.",
        "A misericórdia não cancela a responsabilidade, nem a responsabilidade autoriza vingança pessoal. Aquino sistematizará essa dupla finalidade, fazendo da restauração da ordem o fim primeiro e da reforma um bem possível."
      ],
      quotes: [
        {
          text:
            "A paz dos injustos, comparada à paz dos justos, não merece sequer ser chamada de paz.",
          source: "A Cidade de Deus, Livro XIX, Capítulo 12"
        },
        {
          text:
            "Que a punição dos maus é eterna está ensinado de modo explícito pelos oráculos divinos, e é vão que alguém conteste isso.",
          source: "A Cidade de Deus, Livro XXI, Capítulo 23"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino situa a pena dentro da ordem violada pelo pecado. A ação má obtém um bem fora de medida; a punição retira algo do culpado e restabelece a proporção exigida pela justiça.",
        "A pena pode também medicinalmente corrigir o infrator e proteger outros. Esses efeitos não substituem a retribuição, mas mostram que uma resposta justa pode servir à cura individual e ao bem comum.",
        "A autoridade pública recebe o poder de punir porque julga em nome da comunidade, não para satisfazer ira privada. Hobbes manterá o monopólio soberano, porém definirá a pena exclusivamente por sua finalidade futura de produzir obediência."
      ],
      quotes: [
        {
          text:
            "A punição é de dois tipos: uma é retributiva, que restaura a igualdade da justiça; a outra é medicinal, que tende à correção do pecador.",
          source: "Suma Teológica, I-II, Questão 87, Artigo 3"
        },
        {
          text:
            "É lícito matar um malfeitor na medida em que isso se dirige ao bem-estar de toda a comunidade.",
          source: "Suma Teológica, II-II, Questão 64, Artigo 2"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes define punição como mal infligido pela autoridade pública a quem violou a lei. Sem lei promulgada e soberano reconhecido, pode haver hostilidade, mas não punição no sentido jurídico.",
        "Sua finalidade é dispor vontades à obediência futura. Sofrimento que não pretende corrigir conduta, intimidar potenciais infratores ou proteger a paz é vingança, não exercício legítimo do poder penal.",
        "A pena torna-se instrumento político mensurado por seus efeitos. Locke contestará que o direito de punir nasça apenas do Estado, atribuindo-o originalmente a cada pessoa sob a lei natural."
      ],
      quotes: [
        {
          text:
            "Punição é um mal infligido pela autoridade pública àquele que fez ou omitiu o que essa mesma autoridade julga transgressão da lei, para que a vontade dos homens fique mais disposta à obediência.",
          source: "Leviatã, Parte II, Capítulo 28"
        },
        {
          text:
            "A vingança sem consideração pelo exemplo e pelo benefício futuro é triunfo ou glória no dano de outro, sem tender a fim algum; e gloriar-se sem fim é vanglória e contrário à razão.",
          source: "Leviatã, Parte I, Capítulo 15"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Segundo Tratado sobre o Governo",
      paragraphs: [
        "Locke afirma que a lei natural obriga antes da sociedade civil e concede a cada pessoa poder de conter seus violadores. Esse direito não autoriza crueldade: a pena deve ser proporcional à reparação e à prevenção.",
        "Ao entrar na comunidade política, indivíduos transferem ao magistrado o poder de executar a lei. A vítima conserva interesse na reparação, enquanto o Estado exerce a punição em nome da segurança comum.",
        "Locke combina responsabilidade anterior ao soberano com fins de dissuasão e reforma. Montesquieu examinará como a intensidade concreta dessas penas revela o tipo de regime que as administra."
      ],
      quotes: [
        {
          text:
            "Cada homem tem o direito de punir o infrator e ser executor da lei da natureza.",
          source: "Segundo Tratado sobre o Governo, Capítulo II"
        },
        {
          text:
            "Cada transgressão pode ser punida no grau e com a severidade suficientes para torná-la mau negócio ao infrator, levá-lo ao arrependimento e, pelo exemplo, impedir que outros façam o mesmo.",
          source: "Segundo Tratado sobre o Governo, Capítulo II"
        }
      ]
    },
    {
      thinkerId: "montesquieu",
      keyWork: "O Espírito das Leis",
      paragraphs: [
        "Montesquieu relaciona punição e estrutura política. Despotismos dependem do terror e multiplicam suplícios; repúblicas livres podem empregar penas moderadas porque honra e vínculo cívico também sustentam obediência.",
        "Proporcionalidade é requisito moral e prático. Quando crimes diferentes recebem a mesma pena extrema, o infrator não possui razão para evitar o delito maior e a lei perde capacidade de distinguir gravidades.",
        "Publicidade, clareza e separação de poderes limitam o arbítrio de quem pune. Kant rejeitará, porém, que eficácia e moderação sejam o fundamento último: para ele, a medida deve vir exclusivamente do merecimento."
      ],
      quotes: [
        {
          text:
            "A severidade das penas convém mais aos governos despóticos, cujo princípio é o terror, do que à monarquia ou à república, movidas pela honra e pela virtude.",
          source: "O Espírito das Leis, Livro VI, Capítulo 9"
        },
        {
          text:
            "É essencial que haja certa proporção nas punições, porque é essencial evitar um grande crime mais do que um menor.",
          source: "O Espírito das Leis, Livro VI, Capítulo 16"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Metafísica dos Costumes",
      paragraphs: [
        "Kant formula a mais rigorosa defesa moderna da retribuição. Punir alguém para intimidar outros ou produzir benefício social transforma uma pessoa em instrumento de uma finalidade externa.",
        "A pena deve ser imposta porque o crime foi cometido e segundo a gravidade que ele merece. A lei de talião expressa igualdade jurídica, não permissão para paixões privadas ou imitação literal de todo dano.",
        "A inocência torna-se limite absoluto: nenhum resultado autoriza punir quem não é culpado. Hegel aceitará esse olhar retrospectivo, mas reinterpretará a pena como restauração dialética do direito negado pelo crime."
      ],
      quotes: [
        {
          text:
            "A punição judicial nunca pode ser usada meramente como meio de promover algum outro bem para o próprio criminoso ou para a sociedade civil. Deve ser imposta apenas porque o indivíduo cometeu um crime.",
          source: "Metafísica dos Costumes, Doutrina do Direito, Observação Geral E"
        },
        {
          text:
            "Mesmo que uma sociedade civil resolvesse dissolver-se, o último assassino na prisão deveria ser executado antes que a resolução fosse cumprida.",
          source: "Metafísica dos Costumes, Doutrina do Direito, Observação Geral E"
        }
      ]
    },
    {
      thinkerId: "hegel",
      keyWork: "Princípios da Filosofia do Direito",
      paragraphs: [
        "Hegel descreve o crime como negação do direito. O ladrão rejeita a validade da propriedade alheia enquanto pretende que sua posse do objeto roubado seja reconhecida, produzindo uma vontade contraditória.",
        "A punição nega essa negação e restabelece a validade da ordem jurídica. Ao responsabilizar o criminoso pelas consequências racionais do ato, ela o trata como agente e não apenas como perigo a ser condicionado.",
        "A pena seria, nesse sentido, um direito do próprio culpado, administrado pelo Estado e separado da vingança. Mill recusará essa linguagem de reconhecimento e perguntará quais sofrimentos futuros a prática penal efetivamente evita."
      ],
      quotes: [
        {
          text:
            "O dano que recai sobre o criminoso não é apenas implicitamente justo; como justo, é ao mesmo tempo sua vontade implícita, uma realização de sua liberdade e de seu direito.",
          source: "Princípios da Filosofia do Direito, §100"
        },
        {
          text:
            "A punição contém o direito do criminoso e, ao ser punido, ele é honrado como ser racional.",
          source: "Princípios da Filosofia do Direito, §100, Adendo"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Utilitarismo",
      paragraphs: [
        "Mill distingue o desejo natural de retaliar da justificação moral da pena. Simpatia amplia a reação à agressão e forma o sentimento de justiça, mas intensidade afetiva não prova que infligir sofrimento seja correto.",
        "Deterrência, reforma e proteção pública são fins legítimos quando reduzem danos. A pena deve ser a mínima necessária, pois sofrimento adicional sem benefício compensador aumenta o mal que a moral deveria diminuir.",
        "Garantias contra punir inocentes recebem fundamento consequencialista: um sistema que tolera isso destrói confiança e segurança. Permanece a tensão entre considerar a pena devida ao passado e justificá-la inteiramente por seus resultados futuros."
      ],
      quotes: [
        {
          text:
            "Considera-se universalmente justo que cada pessoa obtenha aquilo que merece, seja bem ou mal, e injusto que receba um bem ou sofra um mal que não merece.",
          source: "Utilitarismo, Capítulo V"
        },
        {
          text:
            "O único fim pelo qual o poder pode ser legitimamente exercido sobre um membro de uma comunidade civilizada, contra sua vontade, é impedir dano a outros.",
          source: "Sobre a Liberdade, Capítulo I"
        }
      ]
    }
  ]
};

const deverEssay: IdeaEssay = {
  slug: "dever",
  title: "A conversa sobre Dever",
  introduction:
    "O dever surge na tragédia como colisão entre obrigações legítimas e se transforma numa busca pelo fundamento daquilo que devemos fazer. Lei divina, justiça, função social, pacto, consciência racional e felicidade coletiva disputam a autoridade de tornar uma ação obrigatória.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/duty e nos textos primários.",
  sections: [
    {
      thinkerId: "sophocles",
      keyWork: "Antígona",
      paragraphs: [
        "Sófocles apresenta deveres que não podem ser cumpridos juntos. Antígona deve obediência ao decreto da cidade, mas também ao irmão morto e às leis religiosas que exigem seu sepultamento.",
        "Creonte e Antígona falam a partir de ordens reais de obrigação. A tragédia não oferece uma regra superior capaz de dissolver o conflito sem perda, e agir significa violar alguma exigência reconhecida.",
        "O dever aparece antes como experiência trágica do que como sistema coerente. Platão procurará eliminar essa fragmentação fazendo da ação correta expressão de uma alma internamente ordenada."
      ],
      quotes: [
        {
          text:
            "Eu sabia que devia morrer e, se morrer antes do tempo, considero isso um ganho.",
          source: "Antígona"
        },
        {
          text:
            "Não julguei teus decretos fortes o bastante para superar os estatutos não escritos e infalíveis dos deuses.",
          source: "Antígona"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "Platão pergunta por que alguém deveria ser justo quando poderia obter vantagem sem ser descoberto. Sua resposta aproxima obrigação e saúde: injustiça é conflito entre partes da alma, não apenas violação de uma regra externa.",
        "Quando razão, ânimo e apetite cumprem suas funções, o agente faz o que é correto porque isso pertence à sua própria realização. O dever não se opõe ao bem daquele que o cumpre; exprime a forma de uma vida ordenada.",
        "Essa unidade responde à colisão trágica ao postular uma ordem racional comum. Aristóteles restringirá o campo do devido, distinguindo excelência pessoal da justiça dirigida especificamente ao bem de outra pessoa."
      ],
      quotes: [
        {
          text:
            "A justiça consiste em fazer o próprio trabalho e não se intrometer no que não nos pertence.",
          source: "República, Livro IV"
        },
        {
          text:
            "O homem justo não permite que os diversos elementos dentro dele interfiram uns nos outros.",
          source: "República, Livro IV"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles localiza o dever sobretudo na justiça, pois ela se refere ao que é devido a outro. Coragem e temperança aperfeiçoam quem age; justiça regula distribuições, reparações e relações.",
        "O devido assume forma proporcional na vida pública e forma relacional nas amizades. Promessas, lealdade e reciprocidade criam obrigações que nenhuma lei consegue descrever por inteiro.",
        "A teoria fundamenta deveres na estrutura das relações, não num comando separado da vida boa. Cícero transformará essa herança numa linguagem sistemática de ofícios ligados à natureza racional e à posição social."
      ],
      quotes: [
        {
          text:
            "Somente a justiça entre as virtudes é considerada o bem de outro, porque se relaciona com o próximo e faz o que é vantajoso para ele.",
          source: "Ética a Nicômaco, Livro V"
        },
        {
          text:
            "Entre amigos não há necessidade de justiça, mas os justos ainda necessitam da qualidade da amizade.",
          source: "Ética a Nicômaco, Livro VIII"
        }
      ]
    },
    {
      thinkerId: "cicero",
      keyWork: "Dos Deveres",
      paragraphs: [
        "Cícero organiza a filosofia moral em torno de officium, aquilo que convém a um ser racional realizar em sua posição. Dever liga natureza humana comum, papéis particulares e exigências da vida republicana.",
        "O aparente conflito entre o honesto e o útil ocupa o centro de Dos Deveres. Uma vantagem que exige injustiça não é verdadeiramente útil, pois destrói confiança e comunidade, condições dos próprios benefícios humanos.",
        "A obrigação ganha linguagem prática para magistrados, amigos, pais e cidadãos. Epicteto conservará a ideia de papéis, mas colocará a integridade do princípio racional acima dos resultados externos de seu cumprimento."
      ],
      quotes: [
        {
          text:
            "Nenhum dever é mais imperativo do que o de demonstrar gratidão.",
          source: "Dos Deveres, Livro I"
        },
        {
          text:
            "Os homens não diferem tanto por natureza quanto por hábito.",
          source: "Dos Deveres, Livro I"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Discursos",
      paragraphs: [
        "Epicteto faz do dever a fidelidade ao princípio dirigente da razão. Cada pessoa ocupa relações de filho, irmão, cidadão ou governante, e deve perguntar o que essas relações exigem sem tornar sua virtude dependente da resposta alheia.",
        "A distinção entre o que depende de nós e o que não depende protege a obrigação contra a fortuna. Podemos cumprir nosso papel com justiça mesmo quando a ação fracassa ou recebe ingratidão.",
        "O papel não justifica submissão a atos indignos, pois a primeira obrigação é preservar o caráter racional. Marco Aurélio levará essa disciplina ao governo, onde dever pessoal e bem comum se encontram diariamente."
      ],
      quotes: [
        {
          text:
            "Qual é o fruto de teu ensino? Tranquilidade, destemor e liberdade.",
          source: "Discursos, Livro II"
        },
        {
          text:
            "Confronta toda impressão severa com estas palavras: és apenas uma impressão e não a coisa que pareces ser. Depois, examina-a pelas regras que possuis.",
          source: "Manual, 1"
        }
      ]
    },
    {
      thinkerId: "marcus-aurelius",
      keyWork: "Meditações",
      paragraphs: [
        "Marco Aurélio descreve dever como trabalho cotidiano de um ser humano inserido numa comunidade racional. Nem o poder imperial dispensa a tarefa de agir com justiça, paciência e atenção ao bem comum.",
        "A natureza social fornece o critério: aquilo que não beneficia a colmeia não beneficia a abelha. Cumprir a função humana exige cooperar, corrigir sem ódio e retornar à ação quando fadiga ou irritação desviam a mente.",
        "A obrigação estoica nasce do pertencimento ao cosmos e à cidade. Aquino traduzirá essa racionalidade comum em lei natural, conferindo aos preceitos morais uma origem criadora e um fim último."
      ],
      quotes: [
        {
          text:
            "Ao amanhecer, quando te custar levantar, tenha presente: levanto-me para o trabalho de um ser humano.",
          source: "Meditações, Livro V, §1"
        },
        {
          text:
            "O objetivo da vida não é estar ao lado da maioria, mas escapar de encontrar-se nas fileiras dos insanos.",
          source: "Meditações, Livro VI"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino entende a lei natural como participação da criatura racional na lei eterna. Seus primeiros preceitos ordenam buscar o bem, evitar o mal e preservar os bens adequados à natureza humana.",
        "Justiça produz obrigações estritas porque se dirige ao devido a outra pessoa. As demais virtudes também caem sob a lei natural quando seus atos são necessários à vida racional e ao bem comum.",
        "Deveres aparentes não podem verdadeiramente contradizer-se numa ordem divina coerente; o erro está na interpretação de um deles. Hobbes romperá com essa anterioridade ao afirmar que obrigação jurídica efetiva começa apenas com o poder comum."
      ],
      quotes: [
        {
          text:
            "A lei natural nada mais é que a luz do entendimento colocada em nós por Deus; por ela sabemos o que devemos fazer e o que devemos evitar.",
          source: "Suma Teológica, I-II, Questão 94"
        },
        {
          text:
            "Toda lei humana tem tanto da natureza da lei quanto deriva da lei natural; se em algum ponto se afasta dela, já não é lei, mas perversão da lei.",
          source: "Suma Teológica, I-II, Questão 95"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes distingue leis naturais, que aconselham a paz, de obrigações eficazes garantidas por um soberano. Sem poder comum, promessas permanecem frágeis porque ninguém possui segurança de que os demais cumprirão sua parte.",
        "O pacto cria dever quando transfere direitos e estabelece uma autoridade capaz de punir sua violação. Justiça passa a significar cumprimento de convenções válidas dentro da comunidade política.",
        "A obrigação depende de instituição e coerção, não de uma ordem de virtudes anterior ao Estado. Locke responderá que deveres naturais já vinculam pessoas antes do contrato e limitam aquilo que governos podem exigir."
      ],
      quotes: [
        {
          text:
            "Onde não há poder comum, não há lei; onde não há lei, não há injustiça.",
          source: "Leviatã, Parte I, Capítulo 13"
        },
        {
          text:
            "Os pactos sem a espada não passam de palavras e não têm força alguma para dar segurança a um homem.",
          source: "Leviatã, Parte II, Capítulo 17"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Ensaio sobre o Entendimento Humano",
      paragraphs: [
        "Locke identifica três regras que influenciam obrigação: lei divina, lei civil e lei da opinião. Cada uma associa ações a sanções diferentes, do juízo religioso à punição estatal e à reputação social.",
        "No estado de natureza, a razão já ensina que ninguém deve prejudicar vida, liberdade ou posses de outro. O governo melhora a aplicação dessa lei, mas não cria do nada os deveres que justificam sua autoridade.",
        "Locke mede parte da motivação por prazer e dor, enquanto preserva uma lei racional anterior ao Estado. Kant eliminará sanções e felicidade do fundamento moral para localizar dever na autonomia da razão."
      ],
      quotes: [
        {
          text:
            "Bem e mal nada mais são que prazer ou dor, ou aquilo que ocasiona ou proporciona prazer ou dor.",
          source: "Ensaio sobre o Entendimento Humano, Livro II, Capítulo 28"
        },
        {
          text:
            "O estado de natureza possui uma lei da natureza que o governa e obriga a todos; e a razão, que é essa lei, ensina toda a humanidade que queira consultá-la.",
          source: "Segundo Tratado sobre o Governo, Capítulo II"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Fundamentação da Metafísica dos Costumes",
      paragraphs: [
        "Kant faz do dever a necessidade de agir por respeito à lei moral. Uma ação pode coincidir com o dever por interesse ou inclinação, mas seu valor especificamente moral aparece quando a máxima é escolhida porque pode valer universalmente.",
        "O imperativo categórico não depende de desejos, recompensas ou autoridade externa. A pessoa racional legisla a lei para si e, ao obedecê-la, exerce autonomia em vez de submissão heterônoma.",
        "Deveres perfeitos proíbem sem exceção; deveres imperfeitos deixam latitude para desenvolver talentos e auxiliar outros. Hegel contestará que essa forma universal forneça conteúdo suficiente fora das instituições históricas."
      ],
      quotes: [
        {
          text:
            "Dever! Nome sublime e poderoso, que nada contém de encantador ou insinuante, mas exige submissão.",
          source: "Crítica da Razão Prática"
        },
        {
          text:
            "Age apenas segundo a máxima pela qual possas ao mesmo tempo querer que ela se torne lei universal.",
          source: "Fundamentação da Metafísica dos Costumes"
        }
      ]
    },
    {
      thinkerId: "hegel",
      keyWork: "Princípios da Filosofia do Direito",
      paragraphs: [
        "Hegel aceita a racionalidade do dever kantiano, mas rejeita sua abstração. Uma forma universal não indica sozinha como agir sem o conteúdo fornecido por práticas, relações e instituições concretas.",
        "Sittlichkeit, a vida ética, realiza obrigação na família, na sociedade civil e no Estado. Cuidado, contrato e cidadania possuem lógicas distintas; dever não é uma regra idêntica aplicada de fora a todos os vínculos.",
        "Instituições podem encarnar liberdade e também reivindicar obediência. Mill responderá que sua autoridade deve ser julgada pelas consequências para o bem-estar, não apenas pela posição ocupada numa ordem histórica."
      ],
      quotes: [
        {
          text:
            "Uma teoria imanente e coerente dos deveres só pode ser a exposição ordenada das relações exigidas pela Ideia de liberdade.",
          source: "Princípios da Filosofia do Direito, §148"
        },
        {
          text:
            "O dever não é uma restrição à liberdade, mas apenas à liberdade abstrata, isto é, à não liberdade. O dever é alcançar nossa essência, conquistar a liberdade positiva.",
          source: "Princípios da Filosofia do Direito, §149"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Utilitarismo",
      paragraphs: [
        "Mill fundamenta dever nas consequências para a felicidade, sem reduzi-lo a ordens do soberano. Uma ação é obrigatória quando sua omissão merece sanção legal, social ou interna.",
        "As obrigações mais fortes protegem interesses essenciais: não causar dano, cumprir promessas e tratar pessoas imparcialmente. O sentimento de justiça reforça regras cuja observância sustenta confiança e segurança.",
        "O princípio do dano limita o alcance da coerção social sobre escolhas que afetam apenas o próprio agente. A disputa com Kant permanece: dever recebe autoridade da forma racional da máxima ou do bem que sua observância produz?"
      ],
      quotes: [
        {
          text:
            "Não chamamos algo de errado sem querer dizer que uma pessoa deveria ser punida de algum modo por fazê-lo: pela lei, pela opinião de seus semelhantes ou pelas censuras de sua própria consciência.",
          source: "Utilitarismo, Capítulo V"
        },
        {
          text:
            "O único fim pelo qual o poder pode ser legitimamente exercido sobre um membro de uma comunidade civilizada, contra sua vontade, é impedir dano a outros.",
          source: "Sobre a Liberdade, Capítulo I"
        }
      ]
    }
  ]
};

const emocaoEssay: IdeaEssay = {
  slug: "emocao",
  title: "A conversa sobre Emoção",
  introduction:
    "A emoção entra na conversa como força capaz de derrotar o melhor juízo e se transforma em parte da alma, movimento corporal, avaliação, paixão social e expressão do inconsciente. O debate pergunta menos se sentimos do que quem governa quando sentimos: a razão, o corpo, o hábito ou forças que permanecem fora da consciência.",
  sourceNote:
    "Texto em português preparado com base em greatconversationmap.com/ideas/emotion e nos textos primários.",
  sections: [
    {
      thinkerId: "euripides",
      keyWork: "Medeia",
      paragraphs: [
        "Eurípides dramatiza emoção como potência que não depende de ignorância. Medeia sabe que matar os filhos é pior do que poupá-los e, ainda assim, reconhece que sua fúria possui força maior do que suas deliberações.",
        "A paixão não acompanha uma escolha já tomada; ela produz a ação e transforma a razão em testemunha de sua derrota. Inteligência e autoconhecimento não bastam para restaurar o governo de si.",
        "A tragédia oferece um problema que sistemas posteriores tentarão explicar: como alguém age contra o próprio melhor juízo? Platão responderá dividindo a alma em partes com desejos e funções diferentes."
      ],
      quotes: [
        {
          text:
            "Sei muito bem que mal pretendo fazer, mas mais forte que todas as minhas reflexões é a fúria, a fúria que traz aos mortais os maiores males.",
          source: "Medeia, versos 1078–1080"
        },
        {
          text:
            "Sou vencida pelo mal. Sei que crimes estou prestes a cometer, mas a paixão domina meus conselhos.",
          source: "Medeia, verso 1079"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República",
      paragraphs: [
        "Platão distribui os impulsos entre razão, ânimo e apetite. Emoções ligadas à honra e à ira pertencem ao ânimo, enquanto desejos corporais pertencem ao apetite; razão deve conhecer o bem e governar ambos.",
        "No Fedro, o cocheiro conduz dois cavalos, um cooperativo e outro indisciplinado. A imagem não exige destruir paixão, mas treiná-la para que sua energia participe da ascensão da alma.",
        "A harmonia platônica explica conflito pela pluralidade interna, mas conserva uma hierarquia rígida. Aristóteles dará às emoções conteúdo cognitivo, tratando-as como respostas que avaliam pessoas, situações e danos."
      ],
      quotes: [
        {
          text:
            "A alma é como um cocheiro com uma parelha de cavalos alados, um nobre e outro não.",
          source: "Fedro, 246a"
        },
        {
          text:
            "Em todos nós, mesmo nos homens bons, existe uma natureza selvagem e sem lei, que espreita durante o sono.",
          source: "República, Livro IX"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Retórica",
      paragraphs: [
        "Aristóteles define emoções como afecções que alteram julgamentos e são acompanhadas por prazer ou dor. Ira, medo e piedade têm objetos, crenças e circunstâncias que podem ser analisados.",
        "A ira, por exemplo, envolve crença de desprezo injusto e desejo de reparação. Mudar a interpretação da ofensa pode, portanto, mudar a própria emoção, o que torna retórica e educação moral capazes de formá-la.",
        "Virtude não é ausência de sentimento, mas sentir em relação ao objeto certo, na medida e no momento adequados. Aquino receberá essa estrutura e a organizará numa psicologia das potências sensíveis."
      ],
      quotes: [
        {
          text:
            "As emoções são todas aquelas afecções que levam os homens a mudar de opinião em relação a seus julgamentos e são acompanhadas por prazer e dor.",
          source: "Retórica, Livro II"
        },
        {
          text:
            "Qualquer um pode ficar irado; difícil é irar-se com a pessoa certa, na medida certa, no momento certo, pelo motivo certo e do modo certo.",
          source: "Ética a Nicômaco, Livro II"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino chama paixões aos movimentos do apetite sensível. Amor, desejo, prazer, ódio, aversão e tristeza pertencem à potência concupiscível; esperança, desespero, audácia, medo e ira respondem a bens e males difíceis.",
        "Paixões não são pecados por existir. Recebem qualidade moral quando a vontade consente nelas, as dirige ou se deixa arrastar contra o juízo da razão.",
        "A síntese preserva a análise aristotélica e a responsabilidade do agente, admitindo que o corpo participa da vida afetiva. Shakespeare mostrará em ação aquilo que a classificação descreve, acompanhando paixões que reorganizam uma vida inteira."
      ],
      quotes: [
        {
          text:
            "As paixões da alma, na medida em que contrariam a ordem da razão, inclinam-nos ao pecado; na medida em que são controladas pela razão, pertencem à virtude.",
          source: "Suma Teológica, I-II, Questão 24"
        },
        {
          text:
            "Pertence à perfeição do bem moral que o homem seja movido ao bem não apenas por sua vontade, mas também por seu apetite sensível.",
          source: "Suma Teológica, I-II, Questão 24"
        }
      ]
    },
    {
      thinkerId: "shakespeare",
      keyWork: "Otelo",
      paragraphs: [
        "Shakespeare transforma paixões em estrutura dramática. Ciúme, ambição, luto e culpa não aparecem como episódios interiores isolados, mas como forças que alteram linguagem, percepção e relação com os outros.",
        "Em Otelo, Iago não precisa provar a infidelidade de Desdêmona; basta ensinar Otelo a interpretar cada sinal sob a forma do ciúme. A emoção cria o mundo de evidências que parece justificá-la.",
        "A tragédia mostra que paixão e pensamento podem cooperar na destruição: o raciocínio torna-se engenhoso servidor de uma premissa afetiva. Hobbes reduzirá essa diversidade a movimentos de aproximação e afastamento que impulsionam toda ação voluntária."
      ],
      quotes: [
        {
          text:
            "Cuidado, meu senhor, com o ciúme; é o monstro de olhos verdes que zomba da carne de que se alimenta.",
          source: "Otelo, Ato III"
        },
        {
          text:
            "Sou um homem contra quem pecaram mais do que ele pecou.",
          source: "Rei Lear, Ato III"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes naturaliza emoções como movimentos corporais em direção a objetos desejados ou para longe dos aversivos. Amor, ódio, esperança e medo recebem nomes diferentes conforme a situação do mesmo mecanismo.",
        "Essas paixões são as fontes da ação voluntária. A razão calcula meios, mas não produz os fins que movem pessoas; medo da morte e desejo de uma vida confortável podem conduzir ao pacto político.",
        "Emoção deixa de ser acidente moral e torna-se motor da sociedade. Descartes compartilha o mecanicismo corporal, porém preserva uma alma distinta que percebe e pode governar as paixões pela vontade."
      ],
      quotes: [
        {
          text:
            "Tudo aquilo que é objeto do apetite ou desejo de um homem é o que ele, por sua parte, chama de bom.",
          source: "Leviatã, Parte I, Capítulo 6"
        },
        {
          text:
            "As paixões que mais causam diferenças de engenho são principalmente o maior ou menor desejo de poder, riqueza, conhecimento e honra.",
          source: "Leviatã, Parte I, Capítulo 8"
        }
      ]
    },
    {
      thinkerId: "descartes",
      keyWork: "As Paixões da Alma",
      paragraphs: [
        "Descartes investiga paixões no ponto de união entre alma e corpo. Espíritos animais, partículas sutis em movimento pelos nervos, modificam o cérebro e produzem na alma percepções referidas ao próprio sujeito.",
        "Admiração, amor, ódio, desejo, alegria e tristeza são as seis paixões primitivas. Todas possuem função natural, preparando o corpo e fixando a atenção em coisas úteis, embora hábitos e juízos possam ligá-las a objetos inadequados.",
        "A vontade não controla diretamente cada reação corporal, mas pode associar pensamentos diferentes aos movimentos que as provocam. Spinoza rejeitará essa soberania da alma e explicará liberdade emocional por conhecimento das causas."
      ],
      quotes: [
        {
          text:
            "O principal efeito de todas as paixões nos homens é incitar e dispor a alma a querer as coisas para as quais elas preparam o corpo.",
          source: "As Paixões da Alma, Artigo 40"
        },
        {
          text:
            "O principal uso da sabedoria está em ensinar-nos a ser senhores de nossas paixões e a controlá-las de modo que os males que causam se tornem suportáveis.",
          source: "As Paixões da Alma, Artigo 212"
        }
      ]
    },
    {
      thinkerId: "spinoza",
      keyWork: "Ética",
      paragraphs: [
        "Spinoza define afeto como modificação que aumenta ou diminui a potência de agir, acompanhada pela ideia dessa modificação. Alegria é passagem a maior perfeição; tristeza, passagem a menor.",
        "Paixões resultam de ideias inadequadas, isto é, compreensão parcial das causas que nos determinam. Não são vencidas por uma decisão abstrata da vontade, mas por afetos mais fortes associados a conhecimento mais adequado.",
        "Compreender uma emoção muda nossa relação com ela e pode convertê-la em atividade. Hume conservará a prioridade motivacional das paixões, mas recusará que a razão possua autoridade independente para escolher fins."
      ],
      quotes: [
        {
          text:
            "Um afeto que é paixão deixa de ser paixão assim que formamos dele uma ideia clara e distinta.",
          source: "Ética, Parte V, Proposição 3"
        },
        {
          text:
            "Considerarei as ações e os apetites humanos como se fossem uma questão de linhas, planos e corpos.",
          source: "Ética, Parte III, Prefácio"
        }
      ]
    },
    {
      thinkerId: "hume",
      keyWork: "Tratado da Natureza Humana",
      paragraphs: [
        "Hume afirma que razão descobre relações e meios, mas não cria os fins da ação. Paixões movem a vontade; razão serve ao mostrar como alcançar aquilo que desejamos.",
        "Distinções morais também dependem de sentimento. Aprovação e censura surgem quando contemplamos caracteres e ações por uma perspectiva compartilhada, ampliada pela simpatia.",
        "Essa prioridade não faz toda emoção correta, pois paixões podem repousar em crenças falsas e ser corrigidas quando a razão altera os fatos percebidos. Kant considerará insuficiente qualquer moral cujo motivo determinante venha da sensibilidade."
      ],
      quotes: [
        {
          text:
            "A razão é, e deve ser apenas, escrava das paixões, e nunca pode pretender outro ofício senão servi-las e obedecer-lhes.",
          source: "Tratado da Natureza Humana, Livro II, Parte III, Seção 3"
        },
        {
          text:
            "Não é contrário à razão preferir a destruição do mundo inteiro a um arranhão em meu dedo.",
          source: "Tratado da Natureza Humana, Livro II"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Crítica da Razão Prática",
      paragraphs: [
        "Kant não nega a força das emoções, mas recusa que elas determinem o valor moral. Compaixão, entusiasmo ou afeto podem acompanhar a ação correta; não fornecem uma máxima universal.",
        "Respeito pela lei moral é um sentimento singular porque nasce do reconhecimento racional da autoridade do dever. Ele humilha a presunção do eu sensível e torna presente a autonomia.",
        "A austeridade kantiana separa fazer o bem de sentir prazer em fazê-lo. William James mudará o terreno da discussão ao perguntar o que uma emoção é fisiologicamente, não qual papel deveria ocupar na moral."
      ],
      quotes: [
        {
          text:
            "Dever! Nome sublime e poderoso, que nada contém de encantador ou insinuante, mas exige submissão e não procura mover a vontade por ameaças.",
          source: "Crítica da Razão Prática"
        },
        {
          text:
            "Uma ação praticada por dever possui seu valor moral não no propósito a ser alcançado, mas na máxima segundo a qual é decidida.",
          source: "Fundamentação da Metafísica dos Costumes"
        }
      ]
    },
    {
      thinkerId: "william-james",
      keyWork: "Princípios de Psicologia",
      paragraphs: [
        "William James inverte a explicação ordinária da emoção. Não trememos porque sentimos medo; sentimos medo porque percebemos as mudanças corporais desencadeadas pela situação excitante.",
        "Se retirarmos aceleração cardíaca, postura, respiração e tensão muscular, restaria uma avaliação intelectual fria, não a emoção vivida. O corpo não expressa um sentimento já formado; constitui sua matéria consciente.",
        "A teoria de James-Lange transforma cultivo emocional em trabalho sobre hábitos e gestos. Freud irá além do corpo sentido e investigará afetos cujas fontes pulsionais foram afastadas da consciência."
      ],
      quotes: [
        {
          text:
            "Minha tese é que as mudanças corporais seguem diretamente a percepção do fato excitante e que nosso sentimento dessas mesmas mudanças, enquanto ocorrem, é a emoção.",
          source: "Princípios de Psicologia, Capítulo 25"
        },
        {
          text:
            "Se desejamos vencer tendências emocionais indesejáveis, devemos realizar assiduamente, e a princípio a sangue-frio, os movimentos externos das disposições contrárias que preferimos cultivar.",
          source: "Princípios de Psicologia, Capítulo 25"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Eu e o Id",
      paragraphs: [
        "Freud questiona a suposição de que as emoções conscientes são as forças decisivas. Afetos podem derivar de pulsões reprimidas e aparecer deslocados, de modo que ansiedade, culpa ou raiva não revelem imediatamente sua origem.",
        "Id, eu e supereu formam uma economia de exigências conflitantes. O eu medeia realidade e pulsão; o supereu internaliza autoridade e transforma agressividade em culpa dirigida contra o próprio sujeito.",
        "Civilização depende da renúncia pulsional, mas a energia renunciada não desaparece. A conversa termina diante de uma emoção que é simultaneamente corporal, histórica e opaca para quem a sente."
      ],
      quotes: [
        {
          text: "O eu não é senhor em sua própria casa.",
          source: "O Eu e o Id"
        },
        {
          text:
            "É impossível ignorar em que medida a civilização se constrói sobre uma renúncia ao instinto.",
          source: "O Mal-Estar na Civilização"
        }
      ]
    }
  ]
};

const ideaEssays: Record<string, IdeaEssay> = {
  [justicaEssay.slug]: justicaEssay,
  [bemEMalEssay.slug]: bemEMalEssay,
  [virtudeEVicioEssay.slug]: virtudeEVicioEssay,
  [felicidadeEssay.slug]: felicidadeEssay,
  [amorEssay.slug]: amorEssay,
  [coragemEssay.slug]: coragemEssay,
  [desejoEssay.slug]: desejoEssay,
  [punicaoEssay.slug]: punicaoEssay,
  [deverEssay.slug]: deverEssay,
  [emocaoEssay.slug]: emocaoEssay,
  [democracyEssay.slug]: democracyEssay
};

export function getIdeaEssay(slug: string) {
  return ideaEssays[slug];
}
