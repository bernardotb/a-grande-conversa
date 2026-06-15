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
      keyWork: "Segundo Tratado do Governo Civil",
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
      keyWork: "O Manifesto Comunista",
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
      keyWork: "Os Princípios da Psicologia",
      paragraphs: [
        "William James descreve desejo como consciência sentida de algo ausente. A ideia retorna à atenção acompanhada pela percepção de impedimento, e essa tensão distingue querer de apenas imaginar.",
        "O princípio ideomotor afirma que uma ideia de movimento tende a realizá-lo quando nenhuma ideia rival a inibe. Nos conflitos difíceis, esforço de vontade é esforço de atenção para manter uma possibilidade presente até que se converta em ato.",
        "A vontade deixa de ser poder oculto e torna-se disputa entre conteúdos pela posse da mente. Freud levará o conflito para além da atenção consciente, sustentando que desejos reprimidos continuam ativos sob formas deslocadas."
      ],
      quotes: [
        {
          text:
            "Desejo, anseio e vontade são estados mentais que todos conhecem e que nenhuma definição pode tornar mais claros.",
          source: "Os Princípios da Psicologia, Capítulo XXVI"
        },
        {
          text:
            "O esforço de atenção é, portanto, o fenômeno essencial da vontade.",
          source: "Os Princípios da Psicologia, Capítulo XI"
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
      keyWork: "Segundo Tratado do Governo Civil",
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
      keyWork: "Os Princípios da Psicologia",
      paragraphs: [
        "William James inverte a explicação ordinária da emoção. Não trememos porque sentimos medo; sentimos medo porque percebemos as mudanças corporais desencadeadas pela situação excitante.",
        "Se retirarmos aceleração cardíaca, postura, respiração e tensão muscular, restaria uma avaliação intelectual fria, não a emoção vivida. O corpo não expressa um sentimento já formado; constitui sua matéria consciente.",
        "A teoria de James-Lange transforma cultivo emocional em trabalho sobre hábitos e gestos. Freud irá além do corpo sentido e investigará afetos cujas fontes pulsionais foram afastadas da consciência."
      ],
      quotes: [
        {
          text:
            "Minha tese é que as mudanças corporais seguem diretamente a percepção do fato excitante e que nosso sentimento dessas mesmas mudanças, enquanto ocorrem, é a emoção.",
          source: "Os Princípios da Psicologia, Capítulo 25"
        },
        {
          text:
            "Se desejamos vencer tendências emocionais indesejáveis, devemos realizar assiduamente, e a princípio a sangue-frio, os movimentos externos das disposições contrárias que preferimos cultivar.",
          source: "Os Princípios da Psicologia, Capítulo 25"
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

const prazerEDorEssay: IdeaEssay = {
  slug: "prazer-e-dor",
  title: "A conversa sobre o prazer e a dor",
  introduction:
    "A questão de se o prazer constitui ou apenas acompanha o bem divide a tradição ocidental em dois grandes campos — os que fundam a moralidade na experiência do prazer e da dor, e os que recusam essa fundação. Do diálogo socrático à clínica psicanalítica, o debate revela que a pergunta mais aparentemente simples — o que queremos quando queremos prazer? — é uma das mais resistentes a qualquer resposta definitiva.",
  sourceNote:
    "Texto em português preparado a partir das fontes primárias do corpus Great Books, com citações verificadas.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "Fílebo e Górgias",
      paragraphs: [
        "Para Platão, nem a vida do prazer puro nem a da pura razão satisfaz o que o ser humano realmente precisa. No Fílebo, Sócrates e seu interlocutor concordam que a vida boa é uma mistura: prazeres puros da contemplação intelectual, dos sons musicais e das formas belas combinados com o conhecimento. A vida que prefere apenas a satisfação corporal é a de uma ostra — sem memória, antecipação ou consciência.",
        "O Górgias aprofunda a questão. Cálicles defende que o feliz é quem satisfaz todos os desejos, os maiores possíveis. Sócrates responde com a imagem do homem que tem comichão e coça sem parar — nem toda satisfação de desejo constitui felicidade. A vida boa exige calibração, não maximização do prazer bruto.",
        "Platão distingue prazeres puros dos prazeres misturados com dor. Os prazeres misturados — alívio da fome, da sede, do desejo sexual — parecem intensos apenas porque a carência que os precede era grande. Prazeres puros, como os da contemplação, não dependem de privação prévia e não deixam vazio depois. Essa distinção será o ponto de partida de toda a ética do prazer posterior."
      ],
      quotes: [
        {
          text: "A vida do prazer não é para ser desejada por si mesma, nem a vida da mente, mas a vida que tem uma mistura adequada de ambas.",
          source: "Fílebo, 22a"
        },
        {
          text: "O homem que tem uma comichão e pode coçar e coça à vontade — ele está vivendo feliz?",
          source: "Górgias, 494c"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles recusa a oposição platônica entre prazer e bem. O prazer não é obstáculo à virtude nem distração perigosa — é o complemento natural de qualquer atividade perfeitamente realizada. Como a flor da juventude sobre quem está no auge das forças, o prazer sobrevém à ação virtuosa sem ser seu motor.",
        "A diferença que importa não é entre mais ou menos prazer, mas entre prazeres bons e maus. A qualidade do prazer depende da qualidade da atividade que o produz. O homem perverso pode fruir da crueldade; isso não torna a crueldade boa. O virtuoso sente prazer exatamente nas coisas certas, no momento e na medida que a razão ordena.",
        "A identificação do prazer como coroamento da atividade abre uma tensão que Hobbes aproveitará para demolir a distinção entre bem real e prazer percebido: se o prazer segue a atividade boa, quem define o que é boa atividade? Para Aristóteles, a resposta é a razão e o caráter formado pelo hábito. Para Hobbes, será apenas a preferência do indivíduo."
      ],
      quotes: [
        {
          text: "O prazer completa a atividade, não como a disposição inerente faz, mas como um fim que se acrescenta, como a flor da juventude naqueles que estão no vigor da vida.",
          source: "Ética a Nicômaco, X.4"
        }
      ]
    },
    {
      thinkerId: "lucretius",
      keyWork: "De Rerum Natura",
      paragraphs: [
        "O epicurismo de Lucrécio radicaliza a tese de que o prazer é o padrão, mas ao contrário do estereótipo dissoluto, a meta epicurista é a ataraxia — a tranquilidade de quem removeu todo medo, toda perturbação e todo desejo insaciável. A natureza não pede luxo; pede ausência de dor no corpo e de agitação no espírito.",
        "Lucrécio traduz essa ética em física: os átomos, os choques, o vazio. Se a alma se dispersa com a morte como fumaça no vento, o medo do além é irracional. Quem teme o nada depois da morte confunde-se tanto quanto quem temeria o nada que havia antes do nascimento.",
        "A promessa epicurista é paradoxal: ao abdicar de prazeres intensos e transitórios, o sábio alcança um prazer estável, duradouro e superior. Epicteto aceitará a estrutura do desapego mas deslocará inteiramente o eixo — não basta querer menos, é preciso retirar o prazer e a dor da lista de coisas que nos constituem."
      ],
      quotes: [
        {
          text: "A natureza clama por nada mais senão que a dor seja mantida bem afastada do corpo e que, livre do cuidado e do medo, a mente desfrute do sentido do prazer.",
          source: "De Rerum Natura, Livro II"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Enquiridion",
      paragraphs: [
        "Para Epicteto, prazer e dor são eventos externos — acontecem ao corpo, ao patrimônio, à reputação. Chamá-los de bens ou males é o erro fundamental. O que depende de nós não é o que acontece, mas o julgamento que fazemos sobre o que acontece. Não são as coisas que nos perturbam, mas os nossos julgamentos sobre elas.",
        "Esse deslocamento é radical. Não se trata de moderar o prazer ou encontrar sua justa medida. Trata-se de remover prazer e dor da lista de coisas que constituem o bem. A doença é um impedimento do corpo; não é um impedimento da vontade, a menos que a vontade consinta. O filósofo estoico pratica o desapego não por ascetismo severo, mas por lucidez.",
        "A Kant esse argumento interessará profundamente: a razão moral não pode ser fundada em inclinações variáveis. Mas Kant não seguirá Epicteto até o fim — o dever kantiano não é impassibilidade emocional, mas legislação racional que pode conviver com sentimentos, desde que eles não sejam o fundamento da ação moral."
      ],
      quotes: [
        {
          text: "Não são as coisas que nos perturbam, mas os nossos julgamentos sobre elas.",
          source: "Enquiridion, Capítulo 5"
        },
        {
          text: "A doença é um impedimento para o corpo, mas não para a vontade, a menos que a vontade consinta.",
          source: "Enquiridion, Capítulo 9"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino herda de Aristóteles a análise do prazer como movimento do apetite em direção ao bem. O prazer (delectatio) ocorre quando o apetite repousa no bem obtido; a dor, quando é impedido ou separado dele. Nem um nem outro são intrinsecamente maus — são respostas naturais a bens e males reais.",
        "O que distingue prazeres bons de maus é a conformidade com a razão e a ordem natural. Prazeres da contemplação e da amizade são naturalmente moderados; os prazeres do tato — comida, bebida, sexualidade — ameaçam o excesso porque satisfazem necessidades vitais e o apetite sensitivo não tem limite natural próprio.",
        "Aquino acompanha Aristóteles na recusa de identificar bem e prazer: o prazer é sinal de que o apetite alcançou seu objeto, mas não é o bem em si mesmo. A felicidade última está na visão de Deus — e essa beatitude inclui a mais profunda alegria, mas não se reduz a prazer sensível de nenhuma espécie."
      ],
      quotes: [
        {
          text: "O prazer é um repouso do apetite no bem que possui.",
          source: "Suma Teológica, I-II, q. 31, a. 1"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes vira o esquema de cabeça para baixo. Não chamamos algo de 'bom' porque é bom e depois sentimos prazer nele — chamamos de bom o que nos dá prazer, e de mau o que nos causa dor. Não existe bem ou mal objetivo no mundo, apenas preferências de criaturas movidas mecanicamente pelo apetite e pela aversão.",
        "Essa tese tem consequências políticas imensas. Se todos os homens perseguem seu prazer como definidor do bem, e se o bem de um choca com o do outro, o estado de natureza é necessariamente guerra. O Leviatã não existe para ensinar virtude, mas para tornar possível a vida ao impor regras que permitam a cada um buscar seu prazer sem destruir os demais.",
        "A redução hobbesiana libera a filosofia moral de pretensões metafísicas, mas cria um problema que Kant formulará com precisão: se o bem é apenas o que me agrada, como fundar qualquer imperativo que se aplique a todos? A resposta de Hobbes — o contrato pelo medo — não satisfaz quem quer que a moral tenha fundamento além da coerção."
      ],
      quotes: [
        {
          text: "O prazer, portanto, ou deleite, é a aparência ou sentido do bem; e o incômodo ou desprazer, a aparência ou sentido do mal.",
          source: "Leviatã, I.6"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Ensaio sobre o Entendimento Humano",
      paragraphs: [
        "Locke aceita a premissa hobbesiana: prazer e dor são os motores da ação humana. O que chamamos de 'bom' é o que nos produz prazer; o 'mau', o que produz dor. Mas insere um elemento que Hobbes recusara: Deus criou prazer e dor precisamente para orientar nossas escolhas em direção ao que é bom para nós e para a convivência com os outros.",
        "A felicidade é o estado de maior prazer possível, tanto nesta vida quanto na vida futura. A perspectiva da recompensa ou punição divina entra como cálculo racional — o prazer eterno de Deus supera infinitamente qualquer prazer temporal, de modo que a ação moralmente correta é também a racionalmente prudente.",
        "O que Locke preserva que Hobbes dissolve é a possibilidade de um bem comum: se Deus projetou o prazer e a dor para guiar os homens à cooperação, então há uma convergência de interesses que torna a vida social mais do que um armistício forçado. Mill aproveitará esse otimismo, despojando-o inteiramente da teologia."
      ],
      quotes: [
        {
          text: "As coisas são boas ou más apenas em referência ao prazer ou à dor.",
          source: "Ensaio sobre o Entendimento Humano, II.20"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Crítica da Razão Prática",
      paragraphs: [
        "Kant rompe com toda a tradição que funda a moral no prazer. Prazer e dor são estados empíricos, subjetivos e contingentes: o que agrada a um não agrada a outro, e mesmo o que agrada a um agora pode não agradar amanhã. Fundar a lei moral em algo tão volúvel é condená-la à arbitrariedade.",
        "A lei moral deve ser universalmente válida — e universalidade exige que a lei seja derivada apenas da razão pura, independente de qualquer inclinação. Um ato tem valor moral apenas quando é feito por dever, não por inclinação nem por cálculo de prazer. O homem que ajuda o próximo porque sente prazer em ajudar age bem, mas não age moralmente no sentido kantiano.",
        "Kant não ignora o prazer; apenas o remove do fundamento da ética. A felicidade — que inclui o prazer — é um bem condicionado: merece ser perseguida, mas apenas quando conjugada com a virtude. O sumo bem não é prazer, mas virtude merecedora de felicidade. Essa distinção será o grande alvo da crítica de Mill."
      ],
      quotes: [
        {
          text: "A razão pura prática não quer dizer que o prazer seja uma coisa ruim, mas que ao se fazer do princípio do prazer a lei moral, ela deixa de ser universal.",
          source: "Crítica da Razão Prática"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Utilitarismo",
      paragraphs: [
        "Mill aceita a premissa hedonista: prazer e ausência de dor são os únicos bens em si mesmos. Mas refuta Bentham, para quem prazeres diferem apenas em quantidade. Mill insiste que diferem em qualidade — os prazeres do intelecto, da criatividade e dos sentimentos morais são superiores, não apenas maiores, do que os prazeres corporais.",
        "A evidência de Mill é o testemunho de quem conhece ambos os tipos. Quem já experimentou a insatisfação de Sócrates não trocaria esse estado pela satisfação completa de um tolo. O critério é a preferência de quem viveu os dois modos, não um cálculo abstrato de intensidade.",
        "A distinção qualitativa expõe uma tensão que Mill não dissolve completamente: se prazeres diferem em qualidade, quem os qualifica? A resposta — o perito que os conheceu — introduz uma hierarquia de experiências que Freud subverterá ao mostrar que o que julgamos prazer superior pode ser apenas prazer inferior bem disfarçado."
      ],
      quotes: [
        {
          text: "É melhor ser um ser humano insatisfeito do que um porco satisfeito; melhor ser Sócrates insatisfeito do que um tolo satisfeito.",
          source: "Utilitarismo, Capítulo 2"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Mal-Estar na Civilização",
      paragraphs: [
        "O princípio do prazer governa a vida mental desde o início: o aparelho psíquico busca descarregar tensão, atingir o mínimo de excitação. Mas esse princípio colide com o princípio da realidade — o mundo não entrega prazer na hora certa — e com a pulsão de morte, que deseja a dissolução mais radical de toda tensão.",
        "A civilização exige a renúncia das satisfações pulsionais mais imediatas. O preço dessa renúncia é o mal-estar: angústia difusa, culpa inconsciente, insatisfação crônica. A promessa de felicidade que o prazer faz não pode ser cumprida no interior da vida social organizada.",
        "Freud encerra o debate com uma sobriedade impiedosa: o programa de tornar-se feliz que o princípio do prazer nos impõe não pode ser realizado, mas também não podemos abandonar o esforço de nos aproximarmos dele. A conversa permanece aberta — não porque não saibamos o que o prazer é, mas porque sabemos demais sobre o que nos impede de alcançá-lo."
      ],
      quotes: [
        {
          text: "O programa de tornar-se feliz que o princípio do prazer nos impõe não pode ser realizado; contudo, não devemos — na verdade, não podemos — abandonar os esforços para o aproximar da realização.",
          source: "O Mal-Estar na Civilização, Capítulo 2"
        }
      ]
    }
  ]
};

const honraEssay: IdeaEssay = {
  slug: "honra",
  title: "A conversa sobre a honra",
  introduction:
    "A honra é o bem mais disputado da tradição ocidental — e o mais ambíguo. Entre a timé homérica que move o guerreiro à morte gloriosa e a análise hobbesiana que a reduz ao preço de mercado de um indivíduo, percorremos a tensão entre fama pública e consciência privada, entre reputação merecida e vaidade fabricada. A pergunta permanece: a honra é virtude que os outros reconhecem em nós, ou apenas o reflexo do que querem que sejamos?",
  sourceNote:
    "Texto em português preparado a partir das fontes primárias do corpus Great Books, com citações verificadas.",
  sections: [
    {
      thinkerId: "homer",
      keyWork: "Ilíada",
      paragraphs: [
        "A timé — honra, valor, estima pública — é o bem supremo no mundo épico de Homero. Aquiles, convocado pelo destino a escolher entre vida longa e obscura ou vida breve e gloriosa, elege a glória. O kleos, a fama que ecoa além da morte pela boca dos poetas, é a única forma de imortalidade disponível ao herói grego.",
        "O enredo da Ilíada nasce do insulto à honra de Aquiles: Agamémnon confisca Briseida, a parte do espólio que marcava o valor do herói. A ira de Aquiles não é capricho — é a resposta necessária de quem tem sua posição pública violada. Sem honra, Aquiles perde o sentido de sua própria existência guerreira.",
        "O mundo homérico estabelece os termos que toda a tradição subsequente terá de enfrentar: a honra como bem externo que depende do reconhecimento dos outros. Aristóteles aceitará sua importância mas questionará sua suficiência; Montaigne a rejeitará em favor da consciência privada; Hobbes a dissolverá em preço de mercado."
      ],
      quotes: [
        {
          text: "Minha mãe Tétis, deusa dos pés de prata, diz que carrego dois destinos em direção ao dia de minha morte. Ou, se ficar e combater junto à cidade dos troianos, meu retorno se vai, mas minha glória será eterna...",
          source: "Ilíada, IX"
        }
      ]
    },
    {
      thinkerId: "thucydides",
      keyWork: "História da Guerra do Peloponeso",
      paragraphs: [
        "No discurso fúnebre de Péricles, a honra migra do herói individual para a cidade inteira. Atenas é honrada pela coragem coletiva de seus cidadãos, pela beleza de suas obras públicas e pela peculiaridade de um povo que cultiva mente e força sem que uma enfraqueça a outra. A glória é agora da pólis.",
        "Tucídides também identifica, com frieza analítica, os motores reais das guerras: medo, interesse e honra. A honra aparece aqui não como virtude mas como força política — os Estados se lançam ao conflito para preservar sua reputação diante dos rivais. A prudência de Péricles e a crueldade em Melos convivem sob o mesmo estandarte.",
        "A tensão entre a honra cívica celebrada no discurso fúnebre e a honra como poder que Tucídides descreve nas guerras cria uma dissonância que Agostinho aproveitará para atacar a glória romana como ficção: o amor pela fama que gerou a república também gerou seus impérios."
      ],
      quotes: [
        {
          text: "Somos amantes do belo, mas sem extravagância; e cultivamos a mente sem perder a virilidade.",
          source: "História da Guerra do Peloponeso, II (Oração Fúnebre)"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Para Aristóteles, a honra é o maior dos bens externos — e é devida à virtude como recompensa justa. O homem magnânimo (megalopsychos) conhece exatamente o que merece e não aceita nem mais nem menos. Aceitar honra desproporcional é vaidade; recusá-la é falsa modéstia.",
        "Mas a honra não é o fim da vida boa — é seu sinal externo. O magnânimo a aceita porque é recompensa merecida, mas não a persegue por si mesma. Sua identidade não depende do aplauso dos outros: confere benefícios mas se envergonha de recebê-los, porque conferir é atributo do superior.",
        "A análise aristotélica coloca a honra em seu lugar adequado: necessária para confirmar externamente o valor do virtuoso, mas insuficiente para constituí-lo. Ela anuncia o que se merece; não cria o mérito. Aquino refinará esse ponto; Hobbes o negará inteiramente ao reduzir o valor humano a preço."
      ],
      quotes: [
        {
          text: "O magnânimo é o tipo de homem que presta benefícios, mas se envergonha de recebê-los; pois o primeiro é sinal de um superior, o segundo de um inferior.",
          source: "Ética a Nicômaco, IV.3"
        }
      ]
    },
    {
      thinkerId: "plutarch",
      keyWork: "Vidas Paralelas",
      paragraphs: [
        "Plutarco escreve vidas, não histórias — a distinção é sua, feita no prefácio de Alexandre. Os grandes feitos militares importam menos do que os gestos miúdos que revelam caráter: uma palavra sutil, uma recusa silenciosa, uma generosidade discreta. A honra verdadeira se manifesta nessas fissuras do comportamento cotidiano.",
        "A estrutura comparativa das Vidas Paralelas serve uma pedagogia moral. Ao aproximar um romano de um grego com trajetórias similares, Plutarco convida o leitor a julgar onde cada um foi fiel ao ideal que perseguia. A honra torna-se critério de avaliação histórica — mas um critério complexo, cheio de paradoxos entre intenção e resultado.",
        "Plutarco herda de Aristóteles a ideia de que a verdadeira honra está ligada à virtude real, não ao renome passageiro. Mas sua escolha por personagens políticos e trágicos mostra que virtude e honra raramente coincidem sem custo. Agostinho usará esse material para atacar a glória romana como soberba disfarçada."
      ],
      quotes: [
        {
          text: "Não são histórias que escrevo, mas vidas; e nas ações mais ilustrosas nem sempre há manifestação de virtude ou vício.",
          source: "Vidas Paralelas, Alexandre"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "A Cidade de Deus",
      paragraphs: [
        "Agostinho reconhece que o amor romano pela glória produziu feitos admiráveis: homens que resistiram à corrupção, que morreram pela república, que preferiram a pobreza à desonra. Mas esse amor pela fama pública é uma forma refinada de soberba — o pecado que substitui Deus pela imagem que os outros fazem de nós.",
        "A república romana teve suficiente semelhança com a justiça para se sustentar, e suficiente amor pela glória para alcançar grandeza por ela. Mas essa grandeza não é a glória verdadeira: é o prêmio que Deus concede aos virtuosos pagãos no único nível em que podem recebê-lo, o nível terreno e transitório.",
        "A contraposição entre Cidade de Deus e Cidade dos Homens atravessa o tema da honra: na primeira, os santos buscam a glória que só Deus pode conferir; na segunda, os grandes homens buscam a memória pública. Aquino tentará salvar um espaço para a honra legítima dentro da ordem cristã sem que ela vire soberba."
      ],
      quotes: [
        {
          text: "Os romanos não tinham justiça verdadeira; mas tinham suficiente do que se assemelha à justiça para manter a república viva, e suficiente amor pela glória para preferi-la a tudo o mais.",
          source: "A Cidade de Deus, II"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino distingue honra legítima de vainglory. A honra é devida em justiça à excelência real — o superior merece ser reconhecido, e recusar esse reconhecimento é uma forma de injustiça. O virtuoso aceita honra como recompensa extrínseca que corresponde à virtude intrínseca.",
        "A vainglory perturba essa ordem: busca honra sem mérito real, ou por mérito que não é o próprio, ou de quem não tem condições de julgar. O pecado não está em ser honrado — está em fazer da honra o fim a que a virtude serve, invertendo a relação entre meio e fim.",
        "Aquino preserva espaço para a honra humana legítima que Agostinho deixara problemática. Mas insiste que a honra última, aquela que constitui o sumo bem do homem, é a glória divina — o reconhecimento de Deus que nenhuma fama terrena pode substituir. Montaigne deslocará o eixo para a consciência privada."
      ],
      quotes: [
        {
          text: "A honra é a recompensa da virtude; por isso não é seu fim, mas pertence à virtude no sentido de que a virtude se ordena a ela como a uma recompensa extrínseca.",
          source: "Suma Teológica, II-II, q. 129"
        }
      ]
    },
    {
      thinkerId: "montaigne",
      keyWork: "Ensaios",
      paragraphs: [
        "Montaigne desconfia da fama porque depende de outros: é instável, arbitrária, condicionada pelos humores do público e pelos acasos da história. Um homem pode passar à posteridade por algo que fez em descuido, enquanto o que mais valorizou fica sepultado no esquecimento. A honra pública é uma loteria.",
        "Sua alternativa não é a ascese cristã nem a virtude aristotélica, mas o testemunho da consciência privada. Importa mais saber o que se é do que ser reconhecido pelo que se fez. Montaigne prefere se apresentar e se justificar a si mesmo a convencer qualquer outro — a integridade interna substitui a aprovação externa.",
        "Esse deslocamento inaugura uma tradição moderna de interioridade que separará a ética da reputação social. Cervantes pega esse fio e o torce com ironia: é possível fabricar honra por ato de vontade pura, mesmo contra toda evidência externa?"
      ],
      quotes: [
        {
          text: "Quero me apresentar e me justificar a mim mesmo, não a outrem. Nada ganho em ser visto como virtuoso se de fato não o sou.",
          source: "Ensaios, II.16 (Da Glória)"
        }
      ]
    },
    {
      thinkerId: "cervantes",
      keyWork: "Dom Quixote",
      paragraphs: [
        "Dom Quixote decide por vontade que é cavaleiro. Sem cerimônia, sem armadura aprovada, sem reconhecimento de nenhuma autoridade, declara-se nobre e parte para suas aventuras. A frase 'Eu sei quem sou' é a mais audaciosa do romance: contra toda evidência externa, o protagonista fabrica sua própria honra.",
        "O leitor oscila entre admiração pela integridade absurda e compaixão pelo isolamento trágico. Quixote honra um código que o mundo abandonou — e nisso é simultaneamente mais íntegro e mais perdido que qualquer personagem ao seu redor. A honra solitária pode ser glória genuína ou ilusão patética?",
        "Cervantes não responde. A ambiguidade é o ponto. A modernidade herda esse problema: quando os critérios externos de honra desapareceram, sobrou apenas a consciência privada — mas a consciência privada pode estar errada de formas que ninguém ao redor corrige. Shakespeare dramatizará a catástrofe dessa ambiguidade."
      ],
      quotes: [
        {
          text: "Eu sei quem sou, e quem posso ser, se escolher.",
          source: "Dom Quixote, Parte I, Capítulo 5"
        }
      ]
    },
    {
      thinkerId: "shakespeare",
      keyWork: "Otelo",
      paragraphs: [
        "Em Otelo, Iago compreende que a honra é reputação — e que reputação pode ser fabricada e destruída por palavras. Otelo destrói Desdêmona e a si mesmo porque é incapaz de sustentar a dúvida sobre a fidelidade da esposa. A honra que ele perderia — ser o marido traído — é insuportável não pelo fato em si mas pela imagem que os outros terão dele.",
        "A tragédia revela a fragilidade da honra quando fundada em como somos vistos pelos outros: basta um mentiroso competente para que o edifício desabe. Brutus, em Júlio César, representa o avesso — honra como integridade da consciência que o leva a erros políticos fatais, como a recusa de eliminar Antônio por considerá-lo honorável.",
        "Shakespeare não resolve a tensão entre honra-reputação e honra-consciência: mostra as duas formas destruindo seus portadores por razões diferentes. É a dramatização mais severa do dilema entre Montaigne e Aristóteles que a literatura ocidental produziu."
      ],
      quotes: [
        {
          text: "O bom nome em homem e mulher, caro senhor, é a joia imediata de suas almas.",
          source: "Otelo, Ato III"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes reduz a honra a preço. O valor de um homem é o que se pagaria pelo uso de seu poder — não é absoluto, mas relativo ao julgamento e à necessidade dos outros. A 'dignidade' é o preço público; a 'honra' é a atribuição de poder superior. Não existe honra sem quem a conceda.",
        "Essa análise dissolve qualquer distinção entre honra merecida e honra obtida por intimidação. O que importa é a eficácia do poder — sua capacidade de mover os outros a valorizarem quem o detém. O mérito aristotélico, a consciência montaigniana, a virtude cristã: todas essas noções de honra intrínseca são, para Hobbes, autoenganos que camuflam relações de poder nuas.",
        "A frieza da análise hobbesiana é seu trunfo analítico: ela descreve o que a honra realmente faz na política e nos mercados. A questão de se isso é o que a honra deve ser fica suspensa — e é exatamente essa suspensão que Tolstói não suportará."
      ],
      quotes: [
        {
          text: "O valor de um homem é, como de todas as outras coisas, o seu preço; isto é, tanto quanto seria dado pelo uso de seu poder; e portanto não é absoluto, mas coisa que depende da necessidade e do julgamento de outro.",
          source: "Leviatã, I.10"
        }
      ]
    },
    {
      thinkerId: "tolstoy",
      keyWork: "Guerra e Paz",
      paragraphs: [
        "O general Kutuzov e o príncipe Andrei representam dois modos opostos de honra em Guerra e Paz. Andrei busca a glória napoleônica — a conquista individual, a afirmação pessoal no campo de batalha. Kutuzov espera, evita batalhas desnecessárias e age com a paciência de quem sabe que a grandeza não se anuncia.",
        "A batalha de Borodino é o momento em que as ilusões se desfazem. A glória militar, que parecia o bem mais alto, revela-se vaidade coletiva: homens morrendo por abstrações, generais fingindo controlar o que o acaso decide. Pierre, ao final, chega à mesma conclusão por caminho diferente e mais silencioso.",
        "Para Tolstói, onde reinam simplicidade, bondade e verdade existe grandeza real. A honra que Homero celebrava e que Napoleão encarnava é, nesse julgamento final, indistinguível da vaidade mais comum. A conversa fecha-se com uma inversão: o herói autêntico é quem não busca ser herói."
      ],
      quotes: [
        {
          text: "Não há grandeza onde não existem simplicidade, bondade e verdade.",
          source: "Guerra e Paz, Epílogo"
        }
      ]
    }
  ]
};

const habitoEssay: IdeaEssay = {
  slug: "habito",
  title: "A conversa sobre o hábito",
  introduction:
    "Tornamo-nos o que repetidamente fazemos. A formulação condensa um dos consensos mais resistentes da filosofia ocidental — mas a aparente concordância se fratura quando a questão muda de 'o que é o hábito' para 'quem o controla'. Entre a segunda natureza que Aristóteles entreviu e a compulsão à repetição que Freud descobriu, o hábito oscila entre aliado da liberdade e sua mais eficiente prisão.",
  sourceNote:
    "Texto em português preparado a partir das fontes primárias do corpus Great Books, com citações verificadas.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "A República",
      paragraphs: [
        "Platão coloca o hábito no fundamento da educação porque a razão chega tarde: o caráter se forma antes de termos condições de justificá-lo. A criança é como cera mole — os gestos, as histórias, os ritmos musicais que recebe nos primeiros anos deixam marcas que a razão adulta, quando enfim chega, encontrará já esculpidas.",
        "Por isso a República é tão rigorosa quanto à seleção dos mitos, das músicas e dos ritmos permitidos às crianças. Não é censura por medo da verdade — é reconhecimento de que o hábito precede e facilita ou obstaculiza a razão. Uma alma habituada a reações violentas resistirá à filosofia da alma moderada.",
        "Platão vê no hábito uma força ambígua: é indispensável que os jovens sejam moldados bem antes de poderem deliberar, mas isso significa que o caráter de um adulto já foi em grande parte decidido por outros antes que ele pudesse consentir. Aristóteles aproveitará essa intuição e a tornará mais precisa; Agostinho questionará se a moldagem consciente é suficiente."
      ],
      quotes: [
        {
          text: "E o início, como sabem, é sempre a parte mais importante, especialmente ao lidar com algo jovem e tenro. Pois é o momento em que o caráter está sendo formado.",
          source: "A República, II"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "O ponto central de Aristóteles é que a virtude não é dom nem teoria — é prática. Tornamo-nos justos fazendo atos justos; corajosos, fazendo atos corajosos; temperantes, fazendo atos temperantes. O hábito (ethos, de onde vem 'ética') é o processo pelo qual a ação repetida se converte em disposição estável do caráter.",
        "Aristóteles distingue disposição de impulso. O impulso é momentâneo; a hexis, a disposição habitual, é parte constituinte do caráter. O homem habituado ao bem não apenas age bem: sente prazer no bem, enfrenta o mal sem esforço agônico, porque a virtude tornou-se sua segunda natureza.",
        "A questão que Aristóteles deixa em aberto é a origem dos primeiros hábitos. A resposta implícita — os pais, a cidade, os legisladores — revela que o caráter individual depende da saúde da comunidade que o forma. Isso antecipa Hegel: o hábito como mediação necessária entre o indivíduo singular e a vida ética coletiva."
      ],
      quotes: [
        {
          text: "Tornamo-nos justos praticando atos justos, temperantes praticando atos temperantes, corajosos praticando atos corajosos.",
          source: "Ética a Nicômaco, II.1"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Discursos",
      paragraphs: [
        "Epicteto inverte a perspectiva: o hábito que mais importa não é o de atos externos, mas o de julgamentos internos. Habituar-se é habituar-se a distinguir o que depende de nós — julgamentos, impulsos, desejos — do que não depende. Cada vez que consentimos com uma impressão falsa, reforçamos um hábito mental ruim.",
        "A prática diária estoica é uma reeducação das reações automáticas: ao invés de recuar instintivamente diante da dor, o filósofo pratica perceber que é apenas um fato do corpo, não um mal para a alma. Ao invés de ser arrastado pelo prazer, aprende a dar um passo atrás antes do assentimento.",
        "O hábito estoico é, paradoxalmente, o hábito de não ter hábitos que condicionem a liberdade interior. Agostinho verá esse projeto como quimera — não porque a prática seja inútil, mas porque a vontade humana está fraturada em um nível mais profundo do que qualquer treinamento filosófico alcança por si mesmo."
      ],
      quotes: [
        {
          text: "Geralmente, então, se queres fazer de algo um hábito, faz isso; se não queres torná-lo hábito, não o faças, mas acostuma-te a fazer outra coisa em seu lugar.",
          source: "Discursos, II.18"
        }
      ]
    },
    {
      thinkerId: "marcus-aurelius",
      keyWork: "Meditações",
      paragraphs: [
        "As Meditações são o diário de um hábito: Marco Aurélio retorna diariamente aos mesmos princípios estoicos, não porque os tenha esquecido, mas porque a vida o afasta deles a cada hora. O hábito essencial é a renovação constante — acordar com a intenção de agir segundo a razão e retornar a ela depois de cada desvio.",
        "Como imperador, Marco Aurélio enfrenta o paradoxo de exercer poder enquanto prega a indiferença ao poder. As Meditações revelam não a serenidade conquistada, mas a luta contínua de quem sabe o que deve ser e força o ritmo diário a se conformar a esse saber.",
        "A prática marciana é menos teoria que exercício espiritual repetido. Nisso antecipa William James: hábito é fisiologia antes de ser filosofia. Mas para Marco Aurélio a fisiologia serve ao espírito, não o constitui — distinção que o século XIX inverterá."
      ],
      quotes: [
        {
          text: "Tens poder sobre a tua mente, não sobre os acontecimentos externos. Percebe isso, e encontrarás força.",
          source: "Meditações, VI.8"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Confissões",
      paragraphs: [
        "'Hábito não resistido torna-se necessidade.' Com essa sentença, Agostinho dinamita o otimismo greco-romano: o filósofo pode conhecer o bem, querer o bem, praticar o bem — e ainda assim ser arrastado pelos hábitos do vício formados antes de conhecer a verdade. A vontade está partida.",
        "O Livro VIII das Confissões é a anatomia dessa fratura. Agostinho relata sua paralisia diante da conversão: a mente manda à vontade que queira converter-se, e a vontade obedece pela metade. Dois querers opostos coexistem; a razão não resolve. O hábito do prazer corporal, formado em anos de indulgência, resiste com força que nenhuma deliberação racional supera sozinha.",
        "A saída agostiniana é a graça — não um esforço adicional do sujeito, mas uma intervenção que refaz a vontade de dentro. Isso relança a questão do hábito: se o hábito bom exige graça, qual o papel do esforço individual? Aquino tentará salvar o contributo humano sem negar a necessidade divina."
      ],
      quotes: [
        {
          text: "O hábito não resistido torna-se necessidade.",
          source: "Confissões, VIII"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino integra Aristóteles e Agostinho. O hábito é uma qualidade estável que dispõe o ser bem ou mal com respeito a si mesmo ou a outro. Há hábitos naturais — adquiridos por repetição de atos — e hábitos sobrenaturais — virtudes teologais como fé, esperança e caridade, infundidas diretamente por Deus.",
        "No domínio natural, Aristóteles tem razão: repetição forma disposição. No domínio sobrenatural, Agostinho tem razão: certas virtudes excedem a capacidade humana de aquisição por esforço isolado. A graça não anula o hábito natural — eleva-o para além do que o esforço sozinho poderia atingir.",
        "A síntese tomista preserva o valor da prática moral sem a ingenuidade de que qualquer prática humana baste. Hume atacará o fundamento sobrenatural; James e Freud substituirão 'graça' por neurologia — com consequências que nem um nem outro previu completamente."
      ],
      quotes: [
        {
          text: "O hábito é uma qualidade pela qual um ser está bem ou mal disposto com relação a si mesmo ou a outro.",
          source: "Suma Teológica, I-II, q. 49, a. 1"
        }
      ]
    },
    {
      thinkerId: "hume",
      keyWork: "Investigação sobre o Entendimento Humano",
      paragraphs: [
        "Hume transfere o hábito do território moral para o epistemológico: o costume é o fundamento de toda crença na causalidade. Não porque tenhamos provado logicamente que o futuro se assemelhará ao passado, mas porque nossa mente foi habituada a esperar isso. Toda ciência empírica, toda expectativa prática, repousa nessa rotina psicológica.",
        "Isso tem implicações perturbadoras: se o hábito é o guia da razão prática, então a diferença entre crenças racionais e superstições é menos uma questão de fundamento lógico do que de quais hábitos foram formados pela experiência. O hábito não serve à razão — a razão serve ao hábito.",
        "Hegel pegará esse fio e o tornará fecundo: o hábito não é apenas o guia do sujeito individual, mas a substância viva da vida ética de uma comunidade. O que Hume leu como limitação epistemológica, Hegel lerá como mediação ontológica necessária entre liberdade abstrata e vida concreta."
      ],
      quotes: [
        {
          text: "O costume, então, é o grande guia da vida humana. É esse princípio sozinho que torna a experiência útil para nós.",
          source: "Investigação sobre o Entendimento Humano, Seção V"
        }
      ]
    },
    {
      thinkerId: "hegel",
      keyWork: "Filosofia do Espírito",
      paragraphs: [
        "O hábito é, para Hegel, a 'segunda natureza' que o sujeito produz para si mesmo ao interiorizar as formas objetivas da vida ética. Quando o dever moral deixa de ser uma imposição externa — o deves socrático, o imperativo kantiano — e se torna a morada espiritual onde o indivíduo se sente em casa, o hábito ético foi completamente formado.",
        "Essa domesticação do dever não é alienação — é liberdade concreta. A criança que aprendeu a ser justa não precisa mais calcular cada ato; a justiça tornou-se sua forma natural de existir com os outros. O esforço moralizante foi absorvido pelo caráter, que agora age com a espontaneidade de quem age segundo sua natureza mais profunda.",
        "Hegel dialetiza o hábito: é uma negação da espontaneidade natural (primeira natureza), mas uma negação que afirma uma espontaneidade superior, ética. William James adicionará a fisiologia a essa dialética sem saber que estava repetindo Hegel em linguagem científica."
      ],
      quotes: [
        {
          text: "O hábito é chamado com razão de segunda natureza; primeiro, porque é uma imediatidade natural, e segundo, porque é uma negação dessa primeira imediatidade, uma imediatidade posta pela própria alma.",
          source: "Filosofia do Espírito, §410"
        }
      ]
    },
    {
      thinkerId: "william-james",
      keyWork: "Os Princípios da Psicologia",
      paragraphs: [
        "James naturaliza o hábito: é um fato do sistema nervoso. Comportamentos repetidos cavam trilhas nos tecidos cerebrais plásticos, tornando os impulsos automáticos. O hábito não é metáfora — é anatomia da conduta, e a neurologia da repetição confirma o que Aristóteles intuiu por observação do caráter.",
        "O 'volante da sociedade' é a imagem que James escolhe: o hábito mantém a maioria das pessoas dentro dos limites da ordenação sem exigir esforço deliberado contínuo. Isso liberta energia mental para problemas novos. Mas também conserva estamentos, preconceitos e formas de vida que o progresso deveria superar.",
        "O conselho prático de James é concreto: não deixar que um único dia passe sem praticar algum ato de coragem ou esforço que não seja estritamente necessário, para que o sistema nervoso seja aliado, e não adversário, de quem se propõe melhorar. Freud mostrará por que isso não basta."
      ],
      quotes: [
        {
          text: "O hábito é o enorme volante da sociedade, seu agente conservador mais precioso. Ele sozinho é o que nos mantém a todos dentro dos limites da ordenação.",
          source: "Os Princípios da Psicologia, Capítulo IV"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "Conferências Introdutórias à Psicanálise",
      paragraphs: [
        "Freud descobre que os hábitos mais resistentes são formados abaixo do limiar da consciência. A compulsão à repetição não é erro de julgamento — é a reencenação automática de material reprimido que o sujeito não lembra mas não consegue parar de reencarnar em suas relações presentes.",
        "O paciente não sabe que está repetindo. Ao contrário: imagina que está reagindo a algo novo. O analista reconhece o padrão porque o viu antes, em outras formas, com outros personagens. O hábito traumático é o mais tenaz precisamente porque não foi formado por prática consciente — foi impresso por experiências que o sujeito não pôde processar na época.",
        "A conversa sobre o hábito fecha-se num paradoxo: os hábitos que mais nos definem são aqueles que menos escolhemos. A promessa aristotélica — tornamo-nos virtuosos praticando atos virtuosos — permanece válida, mas sua abrangência é menor do que Aristóteles supunha. Há uma camada mais funda onde a repetição governa sem pedir consentimento."
      ],
      quotes: [
        {
          text: "O paciente é obrigado a repetir o material reprimido como experiência contemporânea, em vez de... lembrá-lo como algo pertencente ao passado.",
          source: "Conferências Introdutórias sobre Psicanálise, Conferência 18"
        }
      ]
    }
  ]
};

const temperancaEssay: IdeaEssay = {
  slug: "temperanca",
  title: "A conversa sobre a temperança",
  introduction:
    "A temperança é a virtude mais mal-compreendida da tradição ocidental: confundida com austeridade puritana, reduzida a uma lista de proibições, ou descartada como repressão disfarçada de virtude. Mas desde Platão até Freud, o debate revela uma questão mais profunda — não quanto prazer é permitido, mas quem governa quem dentro de nós quando queremos.",
  sourceNote:
    "Texto em português preparado a partir das fontes primárias do corpus Great Books, com citações verificadas.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "A República",
      paragraphs: [
        "Para Platão, temperança é harmonia na alma: o estado em que o apetite concorda em obedecer à razão, não porque foi suprimido pela força, mas porque reconheceu sua posição adequada na ordem psíquica. É a única virtude que pertence à cidade inteira — enquanto coragem é dos guardiões e sabedoria é dos filósofos, a temperança é o acordo de todas as partes.",
        "No Fédon, Platão distingue a verdadeira temperança da falsa: quem resiste ao prazer apenas para obter prazer maior pratica uma forma de hedonismo disfarçado — troca prazer por prazer. A temperança genuína é indiferença ao prazer como padrão de valor, não seu cálculo mais refinado.",
        "O aspecto mais fecundo da análise platônica é a ideia de que a temperança não aniquila o desejo — ordena-o. O apetite temperante não é o que nada deseja, mas o que deseja as coisas certas. Aristóteles desenvolverá exatamente essa distinção com mais precisão empírica."
      ],
      quotes: [
        {
          text: "A temperança é uma espécie de ordem e continência de certos prazeres e desejos.",
          source: "A República, IV"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles é preciso: o temperante deseja as coisas certas, à maneira certa e no momento certo. Não luta contra seus apetites por força de vontade — seus apetites já foram educados para querer o que a razão aprova. Isso o distingue do 'continente' (enkratos), que resiste heroicamente à tentação mas ainda a sente como tentação.",
        "A distinção entre temperança e continência é sutil mas decisiva: ambos agem bem, mas apenas o temperante age sem conflito interno. O continente ainda tem duas vozes dentro de si — o apetite que quer o excesso e a razão que resiste. A virtude completa é a fusão, não o equilíbrio tenso.",
        "Aristóteles limita a temperança aos prazeres do tato — comida, bebida, sexualidade — porque são os únicos que compartilhamos com todos os animais e os únicos em que o excesso é mais fácil e mais frequente. Epicteto questionará essa limitação ao propor que a raiz do problema não é o excesso mas a dependência."
      ],
      quotes: [
        {
          text: "O temperante deseja as coisas certas, da maneira certa e no momento certo; e é o que o princípio racional dirige.",
          source: "Ética a Nicômaco, III.11"
        }
      ]
    },
    {
      thinkerId: "epictetus",
      keyWork: "Enquiridion",
      paragraphs: [
        "Epicteto desafia a própria arquitetura do problema. A questão não é moderar o prazer sensual — é libertar-se da dependência de qualquer resultado externo. O que perturba não é o excesso, mas o apego: a crença de que precisamos desta comida, desta relação, desta saúde para sermos felizes.",
        "A temperança estoica não é moderação; é desapego. O sábio pode comer bem ou comer mal — o que não pode é sofrer porque comeu mal. A liberdade interior exige que o prazer e a dor sejam identificados como indiferentes para que a vontade permaneça soberana sobre qualquer circunstância.",
        "Esse radicalismo tem consequências práticas: o estoico aprende a ser grato pelo que tem enquanto tem, sabendo que pode ser retirado sem que sua paz seja perturbada. Montaigne aproveitará o espírito mas recusará o ascetismo; Kant aceitará a ideia de governar as inclinações mas a fundará em bases completamente diferentes."
      ],
      quotes: [
        {
          text: "Não busques que as coisas que acontecem aconteçam como desejas; mas deseja que as coisas que acontecem sejam como são, e terás uma vida tranquila.",
          source: "Enquiridion, Capítulo 8"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino parte de uma premissa que distingue sua posição da cristã mais pessimista: os apetites corporais não são maus em si. Foram criados por Deus para fins legítimos — o prazer da comida sustenta a vida; o prazer sexual serve à procriação. A temperança não é a negação desses prazeres, mas sua ordenação à natureza e à razão.",
        "A virtude da temperança tem duas dimensões: a moderação dos prazeres que excedem o necessário, e a disposição pela qual o excessivo se torna intrinsecamente repugnante ao temperante. O homem virtuoso não apenas resiste ao excesso — encontra-o genuinamente feio e inconveniente.",
        "Aquino preserva o corpo como parte integrante da pessoa humana, recusando o dualismo que o degradaria. Montaigne ampliará essa reabilitação do corporal até o ponto em que a temperança se torna arte de desfrutar, não arte de renunciar."
      ],
      quotes: [
        {
          text: "A temperança é a virtude que modera o movimento do apetite sensitivo em relação aos prazeres do tato, de acordo com a razão e a ordem da natureza.",
          source: "Suma Teológica, II-II, q. 141"
        }
      ]
    },
    {
      thinkerId: "montaigne",
      keyWork: "Ensaios",
      paragraphs: [
        "Para Montaigne, a intemperança é a praga do prazer — e a temperança não é seu chicote, mas seu tempero. O homem que come com moderação e atenção retira mais prazer da refeição do que o glutão que devora sem presença. A temperança como arte de viver bem é mais prazeirosa do que a intemperança.",
        "O asceta e o libertino erram do mesmo modo, porque ambos estão distraídos da experiência presente — um por medo de gozar, o outro pela compulsão de gozar mais. O temperante é quem está completamente presente no prazer que tem, sem antecipar o próximo nem lamentar o que passou.",
        "A sabedoria de Montaigne aqui é a do suficiente — a noção de que há um ponto em que o prazer é perfeito e que ultrapassá-lo o degrada. Esse ponto é diferente para cada um, em cada circunstância. Por isso a temperança é uma arte, não uma regra — julgamento, não código."
      ],
      quotes: [
        {
          text: "A intemperança é a praga do prazer; e a temperança não é seu flagelo, mas seu tempero.",
          source: "Ensaios, III.13 (Da Experiência)"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Crítica da Razão Prática",
      paragraphs: [
        "Kant rejeita a temperança como virtude prudencial — a moderação pelos benefícios que traz — e a refunda como dever da razão. Governar as inclinações tem valor moral não porque nos torne mais felizes ou mais saudáveis, mas porque a lei moral exige que sejamos autores racionais de nossa própria conduta, não objetos passivos das inclinações.",
        "A diferença entre Kant e Aristóteles aqui é de fundamento, não apenas de vocabulário. Aristóteles valoriza a temperança porque produz o florescimento humano — um fim natural. Kant valora o autocontrole porque é expressão da autonomia racional — independente de qualquer fim empírico determinado.",
        "Para Kant, um ato de moderação praticado por medo das consequências ou por busca de prazer maior não tem valor moral, mesmo que seja externamente idêntico ao ato do genuinamente temperante. O que conta é o motivo: obediência ao dever, não cálculo de resultados. Mill verá nessa exigência uma abstração que ignora como os seres humanos realmente funcionam."
      ],
      quotes: [
        {
          text: "O controle das inclinações é um dever da razão prática; não porque traga benefícios, mas porque a autonomia racional o exige.",
          source: "Crítica da Razão Prática"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Sobre a Liberdade",
      paragraphs: [
        "Mill desloca o debate da psicologia do indivíduo para os limites do Estado. A temperança diz respeito apenas a si mesmo — e enquanto o indivíduo ferir apenas a si mesmo com sua intemperança, o Estado não tem direito de intervir. A única liberdade que merece o nome é a de buscar o próprio bem à própria maneira.",
        "O argumento milleano não é que a intemperança seja boa — é que coagi-la legalmente produz males piores do que ela mesma. A pressão da opinião pública já é um instrumento de conformidade poderoso o suficiente; acrescentar coerção legal à pressão social é sufocar a individualidade que torna a civilização criativa.",
        "A posição de Mill tem uma tensão que ele não resolve: ele acredita que prazeres superiores do intelecto são melhores que os inferiores dos sentidos, mas recusa que o Estado imponha essa hierarquia. Como convencer alguém a preferir prazeres mais altos, sem nunca coagi-lo? Pela educação e pelo exemplo — única resposta compatível com sua ética liberal."
      ],
      quotes: [
        {
          text: "A única liberdade que merece o nome é a de perseguir o nosso próprio bem à nossa própria maneira, desde que não tentemos privar outros do deles.",
          source: "Sobre a Liberdade, Capítulo I"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Mal-Estar na Civilização",
      paragraphs: [
        "Freud encerra o debate com o diagnóstico mais sombrio: a temperança que a civilização exige foi imposta ao sujeito de fora para dentro, pela família e pela cultura, e internalizou-se como Superego — instância psíquica que proíbe, pune e vigia sem cessar. O custo não é a virtude, mas a neurose.",
        "A moderação generalizada que permite a vida em comum foi adquirida ao preço de uma renúncia pulsional maciça que a energia psíquica não simplesmente aceita — ela se transforma em angústia, agressividade voltada contra o próprio ego, ou sintoma. A pergunta que Platão formulou — quem governa quem dentro de nós? — recebe a resposta freudiana: o Superego governa, e o custo de seu governo é alto.",
        "A conversa sobre temperança fica em aberto: é possível educar o desejo sem destruir a alegria? Platão acreditava que sim, desde que a educação começasse cedo e bem. Freud duvida não porque o projeto seja errado, mas porque o preço que cobra de todos — mesmo quando funciona — é maior do que qualquer ética anterior quis admitir."
      ],
      quotes: [
        {
          text: "A questão é se é possível, e em que medida, escapar ao fardo das exigências culturais.",
          source: "O Mal-Estar na Civilização, Capítulo V"
        }
      ]
    }
  ]
};

const costumeEConvencaoEssay: IdeaEssay = {
  slug: "costume-e-convencao",
  title: "A conversa sobre o costume e a convenção",
  introduction:
    "Dois guerreiros se encontram no campo de batalha. Um carrega seus mortos; o outro os come. Heródoto observa que cada um considera a prática do outro abominável. A cena condensa a questão: existe alguma ordem moral que transcende os costumes particulares, ou o costume é a única moral disponível? A conversa dura vinte e cinco séculos sem resolução.",
  sourceNote:
    "Texto em português preparado a partir das fontes primárias do corpus Great Books, com citações verificadas.",
  sections: [
    {
      thinkerId: "herodotus",
      keyWork: "As Histórias",
      paragraphs: [
        "A intuição de Heródoto no Livro III é inaugural: se você oferecer a cada povo a chance de escolher os melhores costumes do mundo e depois de examinar todos cada povo preferirá os seus. O costume não é apenas prática herdada — é a lente pela qual o que é herdado parece natural, óbvio e inevitável.",
        "Heródoto usa isso descritivamente, não como abdicação moral. Ele registra práticas egípcias, persas, citas e gregas com a mesma curiosidade, revelando que o que cada cultura chama de 'natural' é historicamente contingente. Essa suspensão do julgamento etnocêntrico é uma das fundações do pensamento antropológico moderno.",
        "A pergunta que ele deixa em aberto — se a diversidade implica relativismo moral ou apenas pluralismo de práticas dentro de valores mais universais — dividirá todos os pensadores seguintes. Platão irá direto ao confronto com os que tiram dessa diversidade a conclusão de que a moral é mera convenção dos mais fortes."
      ],
      quotes: [
        {
          text: "Se se oferecesse a todos os homens a escolha de todos os costumes do mundo para que selecionassem os melhores, cada nação, depois de examinar todos eles, acabaria escolhendo os seus próprios.",
          source: "As Histórias, III.38"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "A República",
      paragraphs: [
        "Platão reage à tese sofística de que o justo é simplesmente o que a cidade decide — uma convenção em favor dos mais fortes. Contra isso, a República propõe que existe uma Justiça atrelada à ordem da alma e do universo, que serve de padrão pelo qual julgamos os costumes falhos.",
        "O argumento não nega que os homens discordem sobre o justo — evidentemente discordam. Mas dissenso não implica relativismo: os homens também discordam sobre medicina, e isso não prova que não exista saúde objetiva. A Ideia de Justiça existe independente dos costumes que a encarnam ou traem.",
        "Essa posição tem um custo político: quem conhece a Justiça verdadeira tem o direito de reformar os costumes que dela se afastam. O filósofo-rei é o corretor dos costumes pela razão pura. Aristóteles aceitará a distinção natural-convencional mas a tornará menos absoluta e mais sensível ao papel insubstituível da tradição."
      ],
      quotes: [
        {
          text: "A justiça é, não é assim, fazer o que é seu e não se meter no que é alheio?",
          source: "A República, IV"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles estabelece uma distinção cuidadosa entre justo natural — como o fogo, que queima aqui e na Pérsia — e justo convencional, que poderia ser diferente do que é mas que, uma vez estabelecido em lei ou costume, obriga. A lei positiva não é arbitrária, mas tampouco é necessária: requer deliberação e convenção para existir.",
        "O costume preenche o espaço entre o princípio geral da lei natural e as circunstâncias particulares sempre variáveis. A lei diz que o homicídio é ilícito; o costume e a convenção determinam como se organiza o julgamento, como se distribui a punição, quem tem o direito de acusar. Sem convenção, o princípio fica suspenso no abstrato.",
        "Aristóteles salva tanto o padrão natural quanto a necessidade da convenção. Essa dupla âncora — recusando o relativismo sofístico e o racionalismo platônico que despreza o histórico — será o modelo que Aquino ampliará ao adicionar a lei divina como terceiro nível."
      ],
      quotes: [
        {
          text: "Da justiça política, uma parte é natural e outra parte é legal. Natural é aquela que tem em todo lugar a mesma força e não depende de aprovarmos ou não.",
          source: "Ética a Nicômaco, V.7"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Confissões",
      paragraphs: [
        "Agostinho aceita a diversidade dos costumes humanos como fato — mas acrescenta que atrás da história variável existe uma lei imutável e eterna que é a vontade de Deus. Os costumes mais bárbaros não provam o relativismo; provam a corrupção do homem pecador ao longo de caminhos diferentes.",
        "O que Heródoto lera como objeto de curiosidade antropológica, Agostinho lê como evidência da Queda. A diversidade de práticas não é sinal de riqueza cultural — é sinal de que a humanidade se afastou do padrão divino. O crítico dos costumes não é o filósofo com sua Ideia, mas o crente com sua lei revelada.",
        "A lei divina imutável que Agostinho invoca tem mais autoridade que a Ideia platônica — é pessoal, histórica e pronunciada por um legislador com nome próprio. Aquino tentará integrar lei natural e lei divina de modo que a razão, mesmo sem revelação, possa conhecer ao menos os princípios gerais."
      ],
      quotes: [
        {
          text: "Os costumes dos homens são diversos, mas ainda assim uma só lei, eterna, abarca todos os povos; e essa lei é chamada de vontade de Deus.",
          source: "Confissões, III"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino eleva o costume ao estatuto de lei interpretada: quando uma prática é repetida sistematicamente por uma comunidade, ela revela o julgamento deliberado da razão coletiva sobre o que é útil e justo naquela situação. O costume não é oposição à lei — é sua expressão mais viva e adaptada.",
        "A sistematização tomista é precisa: o costume pode criar lei nova, abolir lei existente e determinar como uma lei geral deve ser aplicada em casos particulares. O que parecia mero hábito coletivo torna-se, nessa leitura, um processo racional de adaptação do princípio à circunstância histórica.",
        "Essa dignificação do costume tem um limite: costumes que contradizem a lei natural ou a lei divina não podem, por acúmulo de uso, tornar-se legítimos. Montaigne verá nessa linha um problema — quem a traça, e com que autoridade, é sempre uma questão de poder além da lógica."
      ],
      quotes: [
        {
          text: "Quando uma coisa é feita repetidamente, parece que procede de um julgamento deliberado da razão. Por isso o costume tem força de lei, e abole a lei, e é o intérprete da lei.",
          source: "Suma Teológica, I-II, q. 97, a. 3"
        }
      ]
    },
    {
      thinkerId: "montaigne",
      keyWork: "Ensaios",
      paragraphs: [
        "Montaigne é o grande crítico do costume de dentro: ele mesmo é um filho de costumes, e por isso sabe melhor do que ninguém como eles operam. O costume é uma mestra violenta e traiçoeira — violenta porque impõe suas regras sem argumentar, traiçoeira porque nos faz confundir o habitual com o racional.",
        "O ensaio sobre o costume reúne práticas que diferentes culturas consideram naturais e necessárias — e que são completamente opostas entre si. Montaigne usa essa diversidade não para concluir que tudo é relativo, mas para tornar-nos mais humildes diante dos nossos próprios costumes: o que me parece evidente pode parecer absurdo a outro, e ambos estamos dentro de nossa moldura sem enxergar a moldura.",
        "A saída de Montaigne não é o relativismo cético — é a modéstia reflexiva. Questionar os próprios costumes não é abandonar toda norma, mas aprender a distinguir o que veio do hábito do que vem da razão. Hobbes tirará desse ceticismo conclusões completamente diferentes."
      ],
      quotes: [
        {
          text: "Pois, com efeito, o costume é uma mestra violenta e traiçoeira.",
          source: "Ensaios, I.22 (Do Costume)"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes radicaliza Montaigne: não existe justo e injusto antes do Estado. Toda noção de ordem social é convencional — nasce do medo mútuo e do contrato que cria o soberano. O costume tem força de lei apenas na medida em que o poder político o sustenta e o faz cumprir.",
        "Isso não é niilismo: Hobbes não diz que qualquer convenção é igualmente boa. Diz que sem convenção imposta por um poder real, os costumes são instáveis — qualquer grupo pode invocar 'os velhos costumes' para justificar desobediência. A paz social exige que o soberano tenha autoridade para decidir quais costumes prevalecem.",
        "A visão hobbesiana é politicamente conservadora no sentido mais profundo: o costume que existe e que é sustentado pelo poder é preferível ao costume ideal que ninguém pode impor. Hume herdará o empirismo sem o mecanismo do medo como fundamento único."
      ],
      quotes: [
        {
          text: "As noções de certo e errado, justiça e injustiça, não têm lugar aí. São qualidades que se referem aos homens em sociedade, não em solidão.",
          source: "Leviatã, XIII"
        }
      ]
    },
    {
      thinkerId: "hume",
      keyWork: "Investigação sobre o Entendimento Humano",
      paragraphs: [
        "Hume aprofunda a análise do costume para além da política: o costume molda não apenas os julgamentos morais, mas os próprios processos cognitivos. A crença de que o passado se repetirá no futuro — base de toda expectativa prática e científica — é um costume mental, não uma dedução lógica.",
        "Para Hume, isso não é um defeito da razão humana — é simplesmente a sua estrutura. Somos criaturas de hábito antes de sermos criaturas de razão. O filósofo que pretende deduzir a moral de princípios puros está desconhecendo como a mente humana realmente opera.",
        "A conclusão é pragmática: já que o costume é inevitável e irredutível, a questão é quais costumes cultivar, não como escapar deles. Rousseau vai na direção oposta: os costumes modernos são a doença, e a questão é como substituí-los por um contrato genuíno fundado na vontade geral."
      ],
      quotes: [
        {
          text: "Toda crença em matéria de fato ou existência real deriva meramente de algum objeto presente à memória ou aos sentidos, e de uma conjunção costumeira entre esse e algum outro objeto.",
          source: "Investigação sobre o Entendimento Humano, Seção V"
        }
      ]
    },
    {
      thinkerId: "rousseau",
      keyWork: "Discurso sobre a Origem da Desigualdade",
      paragraphs: [
        "Rousseau inverte o juízo favorável ao costume civilizado. As convenções da sociedade moderna não são o amadurecimento da razão coletiva — são o acúmulo de desigualdades institucionalizadas, protegidas pela aparência de legalidade e necessidade. O homem que primeiro cercou um pedaço de terra e encontrou pessoas crédulas o suficiente para acreditar que lhe pertencia foi o fundador real da sociedade — e de toda a miséria.",
        "O homem natural de Rousseau não é o guerreiro hobbesiano de todos contra todos. É uma criatura simples, com necessidades limitadas, que a civilização corrompeu ao criar dependências artificiais, vaidades sociais e desigualdades que nenhum costume natural justifica.",
        "A tensão rousseauniana é permanente: não podemos voltar ao estado natural, e as convenções existentes são injustas. A resposta — o contrato fundado na vontade geral — é uma convenção nova que supostamente desfaz a injustiça das antigas. Hegel verá nessa proposta uma ilusão abstrata que ignora o desenvolvimento histórico real da vida ética."
      ],
      quotes: [
        {
          text: "O primeiro homem que, tendo cercado um pedaço de terra, pensou em dizer 'isto é meu' e encontrou pessoas simples o suficiente para acreditar nele, foi o verdadeiro fundador da sociedade civil.",
          source: "Discurso sobre a Origem da Desigualdade, Parte II"
        }
      ]
    },
    {
      thinkerId: "hegel",
      keyWork: "Princípios da Filosofia do Direito",
      paragraphs: [
        "Para Hegel, a Vida Ética (Sittlichkeit) é o sistema de costumes e instituições de uma comunidade historicamente desenvolvida — e é o nível mais concreto da liberdade. Não a liberdade abstrata do indivíduo que inventa normas do nada, mas a liberdade encarnada nas formas de vida que uma nação amadureceu ao longo do tempo.",
        "Numa comunidade ética, saber o que se deve fazer não requer filosofia especulativa: basta seguir as regras explícitas da própria situação. O costume não é obstáculo ao espírito — é sua realização mais imediata. O que Montaigne chamou de tirania do costume, Hegel chama de eticidade consolidada e fecunda.",
        "Hegel não ignora a possibilidade de costumes corrompidos: há momentos históricos em que o costume existente conflita com o estágio mais avançado do Espírito, e a filosofia serve para articular essa contradição. Mas o movimento é sempre de dentro — a razão histórica reformando a tradição, não abolindo-a de fora por decreto racional. Mill verá no hábito coletivo, ao contrário, o inimigo por excelência do progresso."
      ],
      quotes: [
        {
          text: "Numa comunidade ética, é fácil dizer o que o homem deve fazer, quais são os deveres que deve cumprir para ser virtuoso. Ele simplesmente tem de seguir as regras conhecidas e explícitas de sua própria situação.",
          source: "Princípios da Filosofia do Direito, §150"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Sobre a Liberdade",
      paragraphs: [
        "Mill nomeia o adversário: o despotismo do costume. Em toda civilização estabelecida, o hábito coletivo tende a se tornar o padrão que persegue qualquer desvio. Isso pode manter a ordem, mas mata exatamente o que torna uma sociedade capaz de progredir — a originalidade, a energia peculiar, a capacidade de questionar o óbvio.",
        "O que Mill chama de despotismo não é necessariamente violento: é a pressão silenciosa da aprovação e desaprovação social. Ninguém precisa proibir legalmente o excêntrico — basta ignorá-lo, ridicularizá-lo, excluí-lo das recompensas sociais. O efeito é o mesmo: a conformidade se impõe sem deixar marcas visíveis de coerção.",
        "Para Mill, o antídoto não é a anomia, mas a proteção ativa da individualidade. Sociedades que cultivam pessoas originais e dissidentes têm mais recursos para enfrentar problemas novos do que aquelas que punem o desvio. Freud será profundamente pessimista quanto à possibilidade real de libertar-se das convenções que nos constituem."
      ],
      quotes: [
        {
          text: "O despotismo do costume é em toda parte o obstáculo permanente ao avanço humano.",
          source: "Sobre a Liberdade, Capítulo III"
        }
      ]
    },
    {
      thinkerId: "freud",
      keyWork: "O Mal-Estar na Civilização",
      paragraphs: [
        "Freud fecha o debate com seu diagnóstico mais sombrio: as convenções morais de uma cultura são a forma objetivada da repressão coletiva. O Superego do sujeito individual é o representante interno das exigências culturais — e como essas exigências foram impostas à criança antes que ela pudesse resistir, o Superego carrega em si a violência original que toda convenção social esconde.",
        "O custo das convenções não é apenas a perda de certas satisfações — é a transformação das pulsões reprimidas em culpa, angústia e agressividade voltada contra o ego. A cultura exige renúncia; a renúncia não se dissolve — apenas muda de forma, tornando-se o mal-estar difuso que nenhuma organização social eliminou até hoje.",
        "O paradoxo final: sem convenções, não há vida social possível. Com convenções, pagamos um preço em sofrimento que nenhuma filosofia anterior quis calcular completamente. Heródoto abriu a questão com a curiosidade do viajante; Freud a fecha com o diagnóstico do clínico. Entre os dois, a conversa sobre o que os homens devem uns aos outros ainda não encontrou um acordo permanente."
      ],
      quotes: [
        {
          text: "A civilização é construída sobre a renúncia ao instinto.",
          source: "O Mal-Estar na Civilização, III-V"
        }
      ]
    }
  ]
};

const liberdadeEssay: IdeaEssay = {
  slug: "liberdade",
  title: "A conversa sobre Liberdade",
  introduction:
    "Da liberdade cívica grega à autonomia kantiana, passando pela libertação interior dos estoicos, pelo contrato social e pela crítica marxista à emancipação formal, a conversa sobre a liberdade percorre mais de dois milênios como a pergunta que cada geração refaz: livre de quê, e livre para quê?",
  sourceNote:
    "Texto em português preparado com base no arquivo source_liberdade.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "aristotle",
      keyWork: "Política",
      paragraphs: [
        "Aristóteles inaugura a conversa vinculando liberdade à constituição da cidade. Na democracia, a premissa fundamental é que todos os cidadãos são livres por natureza: liberdade significa não ser escravo, não depender da vontade de um senhor para existir politicamente. Daí derivam duas marcas práticas — o cidadão governa e é governado em turnos, e o homem livre vive como quer dentro dos limites da lei.",
        "Essa liberdade é essencialmente pública. Ela se exerce dentro da pólis, pressupondo a comunidade de iguais. Fora da cidade, o conceito perde sentido: o escravo, o bárbaro e o animal carecem da racionalidade que permite participar da deliberação comum e, por isso, não partilham desse estatuto.",
        "Aristóteles alerta que a liberdade democrática mal compreendida degenera em licença. Quando os cidadãos a interpretam como o direito de viver exatamente como desejam, sem submissão a lei ou autoridade alguma, a cidade se dissolve em particularidades incompatíveis. A liberdade política autêntica exige moderação — e a moderação exige educação. O fio que Epicteto puxará em seguida, a liberdade como disciplina interior, não contradiz Aristóteles; aprofunda-o em outra direção."
      ],
      quotes: []
    },
    {
      thinkerId: "epictetus",
      keyWork: "Discursos",
      paragraphs: [
        "Epicteto radicalizou o conceito transportando-o do espaço cívico para a vida interior. Como ex-escravo, conhecia o poder da coerção externa. Sua conclusão foi que tal coerção jamais alcança o que importa: o uso correto das impressões, as escolhas da vontade, os desejos e as aversões. Esses permanecem, em última instância, sob nosso controle — e somente neles reside a liberdade verdadeira.",
        "Quem deseja o que não está em seu poder — riqueza, reputação, saúde, aprovação alheia — faz de si mesmo servo de forças externas. O homem que teme a morte, a dor ou a pobreza é escravo, independentemente de seu título ou posição social. O único senhor que o livre reconhece é a razão que governa seus próprios impulsos.",
        "A provocação de Epicteto para os séculos posteriores é estrutural: se a liberdade não depende de condições externas, então reformas políticas e revoluções sociais são incapazes de produzi-la por si mesmas. Hobbes e Rousseau erguerão teorias opostas, partindo da premissa contrária — de que liberdade e instituições estão radicalmente ligadas."
      ],
      quotes: [
        {
          text:
            "Ninguém que vive em medo ou tristeza é livre. Quem deseja ou teme o que está fora de seu poder é escravo das circunstâncias, mesmo que nenhuma corrente o prenda.",
          source: "Discursos, IV.1"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Sobre o Livre-Arbítrio",
      paragraphs: [
        "Agostinho aceita a premissa estoica de que a liberdade é interior, mas a recoloca em quadro inteiramente novo: o do pecado original e da graça divina. O livre-arbítrio é real — o ser humano pode escolher entre bem e mal —, mas o pecado adâmico corrompeu a vontade de tal forma que, sozinha, ela tende ao mal. A liberdade plena não é o ponto de partida, mas o horizonte: a libertação gradual orientada pelo amor a Deus.",
        "Agostinho distingue assim entre o livre-arbítrio como capacidade formal de escolha, que permanece após a queda, e a liberdade autêntica como orientação da vontade ao bem supremo, que requer a graça. Servidão ao pecado e liberdade cristã transcendem qualquer ordem institucional.",
        "Essa perspectiva introduz na grande conversa uma tensão persistente: se a vontade está corrompida, nenhuma educação filosófica, nenhum contrato social e nenhuma revolução pode libertar o homem por si só. Tomás de Aquino tentará reconciliar essa intuição com a possibilidade de uma boa ordem política; Hobbes a descartará; Rousseau a ignorará; Kant a reformulará em termos racionais."
      ],
      quotes: []
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes realizou o corte mais radical com a tradição. Descartou tanto a liberdade interior dos estoicos quanto o livre-arbítrio agostiniano e propôs uma definição estritamente mecânica: liberdade é a ausência de impedimentos externos ao movimento. Um homem que age é livre enquanto suas forças e inteligência não são bloqueadas por força ou lei externas.",
        "A implicação é desconcertante: o súdito que obedece à lei do soberano porque escolheu racionalmente fazê-lo é, a rigor, livre — nada externo bloqueia seu movimento no momento da obediência. Hobbes elimina a distinção entre liberdade e coerção suave: desde que não haja grilhões físicos, o homem pode ser considerado livre ao obedecer. A liberdade civil é compatível com a dependência política.",
        "Essa definição abriu espaço para duas críticas simétricas. Rousseau respondeu que liberdade sem autodeterminação moral é mero apetite sem dono: não é liberdade, é impulso. Kant acrescentou que reduzir a liberdade ao movimento físico é confundir o ser humano com um objeto mecânico — a liberdade genuína exige razão, não apenas ausência de obstáculos."
      ],
      quotes: [
        {
          text:
            "Liberdade significa propriamente a ausência de oposição — por oposição entendo impedimentos externos ao movimento.",
          source: "Leviatã, Parte II, Capítulo 21"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Segundo Tratado do Governo Civil",
      paragraphs: [
        "Locke distinguiu liberdade natural, presente no estado de natureza, de liberdade civil, conquistada sob a lei. A liberdade natural não é a ausência hobbesiana de impedimentos, mas a submissão apenas à lei da razão, não à vontade arbitrária de outro homem. No estado de natureza, os homens são livres e iguais porque nenhum tem autoridade natural sobre os demais.",
        "A passagem para a sociedade civil não suprime essa liberdade — aperfeiçoa-a. O consentimento dos governados funda a autoridade política, e essa autoridade só é legítima enquanto protege os direitos pré-existentes de vida, liberdade e propriedade. Liberdade civil significa viver sob uma lei estável à qual a comunidade consentiu, em vez de estar sujeita ao capricho do governante.",
        "Locke abriu assim o caminho para uma tradição em que liberdade e lei não se opõem: a lei que resulta do consentimento é a condição, não o adversário, da liberdade. Rousseau tornará ainda mais exigente o critério de consentimento; Mill usará o mesmo princípio para proteger o indivíduo contra a própria lei da maioria."
      ],
      quotes: []
    },
    {
      thinkerId: "rousseau",
      keyWork: "O Contrato Social",
      paragraphs: [
        "Rousseau propôs a distinção mais influente da modernidade entre dois tipos de obediência: obedecer ao apetite é escravidão; obedecer à lei que a própria comunidade prescreve para si mesma é liberdade. A vontade geral — não a soma das vontades individuais, mas o interesse comum racionalmente articulado — é o soberano legítimo, e segui-la é a única forma de liberdade civil plena.",
        "A grande novidade é que a liberdade não pode ser separada da participação ativa no processo legislativo. O cidadão que simplesmente obedece a leis que outros fizeram, mesmo que boas, permanece dependente de vontades alheias. A autenticidade da liberdade exige que o indivíduo seja ao mesmo tempo autor e destinatário da norma.",
        "A tensão interna da proposta, detectada desde Benjamin Constant, é que a vontade geral pode ser usada para forçar o indivíduo a ser livre. Kant extrairá a força do argumento da autonomia sem aceitar esse corolário coercitivo."
      ],
      quotes: [
        {
          text:
            "O mero impulso do apetite é escravidão; a obediência a uma lei que nós mesmos nos prescrevemos é liberdade.",
          source: "O Contrato Social, Livro I, Capítulo 8"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Ciência do Direito",
      paragraphs: [
        "Kant sintetizou a tradição reformulando a autonomia como fundamento da liberdade. Ser livre é ser capaz de legislar para si mesmo segundo princípios universais da razão, independentemente de coerções externas e de inclinações empíricas. A liberdade não é a ausência hobbesiana de obstáculos físicos nem a participação rousseauniana na vontade geral; é a capacidade racional de determinar a própria conduta por uma lei que qualquer ser racional poderia querer.",
        "No plano político, Kant deduz desse fundamento um direito natural inato: a liberdade de cada pessoa, na medida em que pode coexistir com a liberdade de todos segundo uma lei universal. Esse direito pertence ao ser humano em virtude de sua humanidade racional — não depende da bondade do soberano nem do consentimento contratual.",
        "A consequência mais duradoura é a separação entre moralidade e legalidade. A lei jurídica regula ações externas; a moral exige que o sujeito aja por dever reconhecido interiormente. Mill, seu principal interlocutor no século XIX, argumentará que tal concepção é demasiado formal e ignora o cultivo das faculdades que torna a liberdade concretamente valiosa."
      ],
      quotes: [
        {
          text:
            "Liberdade é independência da vontade coercitiva de outrem; na medida em que pode coexistir com a liberdade de todos segundo uma lei universal, é o único direito original pertencente a todo homem em virtude de sua humanidade.",
          source: "Ciência do Direito, Introdução"
        }
      ]
    },
    {
      thinkerId: "mill",
      keyWork: "Sobre a Liberdade",
      paragraphs: [
        "Mill reorientou o debate para um novo adversário: não mais o déspota, mas a tirania social da opinião majoritária. No século XIX, as sociedades democráticas mostravam-se capazes de sufocar a dissidência sem leis, apenas por meio da pressão conformista. O problema da liberdade tornou-se proteger o indivíduo contra a maioria que ele mesmo elegeu.",
        "Mill formulou o princípio do dano: a intervenção da sociedade na conduta individual só é legítima para prevenir dano a terceiros. Sobre si mesmo, sobre seu próprio corpo e mente, o indivíduo é soberano. Esse limite protege não apenas o excêntrico, mas a vitalidade intelectual de toda a sociedade: sem liberdade de pensamento e expressão, opiniões verdadeiras se tornam dogmas mortos.",
        "A liberdade milliana não é indiferença ao bem-estar humano — é condição para ele. O desenvolvimento pleno das faculdades individuais requer espaço para experimentos de vida. Dostoiévski questionará se esse ideal não subestima o peso que a liberdade impõe: muitos preferem a segurança da dependência à exigência da escolha autônoma."
      ],
      quotes: []
    },
    {
      thinkerId: "dostoyevsky",
      keyWork: "Os Irmãos Karamázov",
      paragraphs: [
        "Na Lenda do Grande Inquisidor, Dostoiévski formula a objeção mais perturbadora a toda a tradição liberal. Cristo teria oferecido liberdade — e a humanidade, incapaz de suportá-la, teria optado pelo pão, pelo milagre e pela autoridade. A liberdade não é um bem natural que os homens anseiam; é um fardo que a maioria prefere depositar nas mãos de um líder misericordioso.",
        "O argumento não é a favor da tirania, mas é um diagnóstico psicológico: a liberdade exige responsabilidade, e a responsabilidade produz angústia. Sistemas que prometem segurança e certeza em troca de obediência triunfam não pela força — triunfam porque oferecem alívio a uma necessidade real. A crítica atinge simultaneamente o otimismo de Mill sobre o indivíduo autodeterminado e o de Rousseau sobre a autodeterminação coletiva.",
        "Marx responderá que a questão não é psicológica, mas econômica: enquanto a maioria for economicamente dependente, a liberdade formal é privilégio dos proprietários. A emancipação real requer a abolição das condições materiais que a tornam impossível para a maior parte dos seres humanos. O debate entre as visões liberal, existencial e marxista da liberdade permanece aberto — e cada resposta convoca as demais."
      ],
      quotes: []
    }
  ]
};

const governoEssay: IdeaEssay = {
  slug: "governo",
  title: "A conversa sobre Governo",
  introduction:
    "Do governo como comunidade natural em Aristóteles ao instrumento de dominação de classe em Marx, a conversa percorre dois milênios de disputas sobre a origem, a legitimidade e os fins do poder político — e jamais resolve a tensão entre a necessidade da ordem e o risco permanente da tirania.",
  sourceNote:
    "Texto em português preparado com base no arquivo source_governo.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "aristotle",
      keyWork: "Política",
      paragraphs: [
        "Aristóteles define o governo como expressão natural da sociabilidade humana. O ser humano é um animal político: somente na comunidade pode desenvolver a linguagem, a razão moral e as virtudes que o distinguem da besta ou do deus solitário. O governo não é, portanto, um mal necessário imposto de fora — é a forma pela qual a comunidade de iguais coordena a perseguição do bem comum.",
        "A classificação dos regimes se baseia em dois critérios: o número de governantes (um, poucos ou muitos) e o interesse a que servem (o bem comum ou o interesse próprio). Os regimes corretos — realeza, aristocracia e politeia — governam para todos; os desvios — tirania, oligarquia e democracia — governam para si. Nenhum regime está imune à corrupção: o governante singular tende à tirania, os poucos à oligarquia, os muitos à demagogia.",
        "O melhor regime praticável não é o mais puro, mas o mais estável: uma constituição mista que combina elementos de todos, sustentada por uma classe média numerosa capaz de moderar os extremos da riqueza e da pobreza. Aquino aprofundará essa lição; Maquiavel e Hobbes a desmantelarão com premissas radicalmente distintas."
      ],
      quotes: []
    },
    {
      thinkerId: "aquinas",
      keyWork: "Do Reino",
      paragraphs: [
        "Tomás de Aquino herdou de Aristóteles a tese de que o governo é natural, mas a reformulou em termos cristãos. Os homens são seres sociais não apenas por necessidade biológica, mas porque o fim da razão e da virtude exige comunidade. A ausência de governo não produziria liberdade — produziria dissolução. Assim, o governo não é consequência do pecado original, como queria Agostinho, mas uma exigência da própria natureza racional do homem.",
        "A distinção de Aquino entre governo legítimo e tirania é crucial. O governante que ordena a comunidade ao bem comum exerce autoridade genuína; aquele que governa para seu próprio benefício é tirano e pode, em casos extremos, ser resistido. A lei humana só obriga moralmente quando é justa — derivada da lei natural —, e a lei natural é a participação racional na lei eterna de Deus.",
        "O princípio do bem comum como causa final do governo tornar-se-ia pedra angular da filosofia política medieval e, transformado em linguagem secular, reaparecerá nas teorias modernas do Estado de direito. Maquiavel será o primeiro a negar esse fundamento com toda a clareza."
      ],
      quotes: [
        {
          text:
            "A vida social não pode existir entre muitas pessoas a menos que alguém governe visando ao bem comum.",
          source: "Do Reino"
        }
      ]
    },
    {
      thinkerId: "machiavelli",
      keyWork: "O Príncipe",
      paragraphs: [
        "Maquiavel separou a política da moral cristã e da filosofia teleológica com uma clareza que escandalizou seus contemporâneos e fascinou os modernos. O governante não deve perguntar o que é virtuoso, mas o que é eficaz para adquirir e manter o poder. A força e a astúcia — o leão e a raposa — são os instrumentos reais do governo, não o bem comum nem a lei natural.",
        "Isso não significa que Maquiavel seja indiferente ao bem público; nos Discursos, ele é republicano convicto e afirma que o povo, em conjunto, julga melhor do que os príncipes. Mas mesmo o bem público exige, às vezes, meios moralmente reprováveis. Um príncipe que não souber ser mau quando necessário perderá o poder — e sem poder não governa.",
        "A herança de Maquiavel é dupla. Por um lado, fundou o realismo político que percorre Hobbes, Hegel e Weber. Por outro, levantou uma questão que esses autores tentarão responder de modos diferentes: pode o governo ser ao mesmo tempo eficaz e justo, ou a eficácia política exige inevitavelmente a suspensão de princípios morais?"
      ],
      quotes: []
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes construiu sobre Maquiavel uma teoria mais radical: o governo não é natural, mas artificial. No estado de natureza, sem governo, os homens vivem em guerra perpétua de todos contra todos — uma existência solitária, pobre, sórdida, brutal e breve. O governo surge quando os indivíduos celebram um pacto e transferem seu poder natural a um soberano.",
        "A autoridade soberana, para Hobbes, deve ser absoluta e indivisível. Dividir o poder entre rei, parlamento e tribunais é plantar a semente da guerra civil. O soberano pode ser um monarca, uma assembleia de poucos ou uma assembleia de todos — não importa a forma, importa a unidade. A obediência é racional porque qualquer governo, por mais severo, é preferível à anarquia.",
        "Locke e Rousseau responderão que Hobbes comprou a paz a um preço demasiado alto: a supressão do direito de resistir ao tirano. Se o governo existe para proteger os governados, que justificativa tem quando os oprime?"
      ],
      quotes: [
        {
          text:
            "O único modo de erigir tal poder comum é conferir todo poder e força a um homem, ou a uma assembleia de homens.",
          source: "Leviatã, Parte II, Capítulo 17"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Segundo Tratado do Governo Civil",
      paragraphs: [
        "Locke aceitou o ponto de partida de Hobbes — o governo como resultado de um contrato — mas recusou suas conclusões. No estado de natureza lockeano, os homens não vivem em guerra: possuem razão suficiente para reconhecer a lei natural e os direitos que ela garante. O problema não é a anarquia, mas a ausência de árbitro imparcial para resolver disputas.",
        "O governo surge, portanto, não para subjugar os indivíduos, mas para administrar melhor os direitos que eles já possuem antes do contrato. A propriedade — entendida como vida, liberdade e bens — é pré-política: o governo não a cria, apenas a protege. Se o governante violar essa finalidade, o contrato é rompido e o povo tem o direito de dissolvê-lo.",
        "A teoria lockeana do governo limitado e responsável perante os governados tornou-se o alicerce do constitucionalismo liberal moderno. Montesquieu desenvolverá os mecanismos institucionais que tornam esse governo viável; Rousseau questionará se a representação é suficiente para capturar a vontade do povo."
      ],
      quotes: [
        {
          text:
            "O grande e principal objetivo dos homens ao unirem-se em comunidades e submeterem-se ao governo é a preservação de sua propriedade.",
          source: "Segundo Tratado do Governo Civil, Capítulo IX, §124"
        }
      ]
    },
    {
      thinkerId: "montesquieu",
      keyWork: "O Espírito das Leis",
      paragraphs: [
        "Montesquieu transformou a questão da legitimidade do governo em questão de estrutura institucional. O problema não é apenas em nome de que o governo governa, mas como seus poderes estão organizados. Sua contribuição fundamental é a doutrina da separação dos poderes: legislativo, executivo e judiciário devem ser exercidos por órgãos distintos, de modo que cada um limite os demais.",
        "Sem essa divisão, o governo mais bem-intencionado tende à tirania: quem faz a lei não deve aplicá-la; quem a aplica não deve julgá-la. A liberdade política não depende de princípios abstratos, mas de disposições institucionais concretas que distribuem o poder e impedem sua concentração.",
        "A análise de Montesquieu baseou-se na observação comparativa de diferentes regimes — monarquias, repúblicas, despotismos — e na conclusão de que cada forma de governo pressupõe uma cultura política correspondente. Essa atenção às condições sociais e históricas do governo influenciará profundamente Tocqueville e a ciência política moderna."
      ],
      quotes: []
    },
    {
      thinkerId: "hegel",
      keyWork: "Princípios da Filosofia do Direito",
      paragraphs: [
        "Hegel inverteu a perspectiva contratualista de modo radical. Para ele, o Estado não é resultado de um acordo entre indivíduos pré-políticos: é a realidade objetiva da eticidade, o lugar onde a liberdade racional se encarna no mundo histórico. Antes do Estado, os indivíduos existem apenas como abstrações; é nele e por meio dele que alcançam existência ética concreta.",
        "O Estado hegeliano não é o instrumento do indivíduo — o indivíduo é, em certo sentido, produto do Estado. Direitos, deveres e identidade se constituem dentro da vida ética que o Estado organiza. Locke errou ao imaginar indivíduos com direitos pré-políticos; Rousseau errou ao reduzir o Estado à vontade coletiva. O governo não expressa a vontade dos cidadãos: expressa a razão histórica objetiva.",
        "Marx partirá de Hegel para chegar a uma conclusão oposta: se o Estado é uma realização histórica, é também uma realização contingente e superável — e o Estado burguês, em particular, é a institucionalização da dominação de classe, não da razão universal."
      ],
      quotes: [
        {
          text:
            "O Estado é a atualidade da ideia ética.",
          source: "Princípios da Filosofia do Direito, Parte III"
        }
      ]
    },
    {
      thinkerId: "marx",
      keyWork: "O Manifesto Comunista",
      paragraphs: [
        "Marx diagnosticou o governo moderno como instrumento de dominação de classe travestido de interesse geral. O Estado não existe para proteger os direitos naturais de todos, como queria Locke, nem para realizar a razão histórica, como afirmava Hegel. Existe para garantir as condições de reprodução do capital e da dominação da burguesia sobre o proletariado.",
        "O governo capitalista executa funções de repressão direta — exército, polícia, judiciário — e funções ideológicas: apresenta os interesses da classe dominante como interesses universais, naturalizando relações de poder contingentes. A democracia liberal não supera esse problema; aprofunda-o, ao dar aparência de consenso a uma dominação estrutural.",
        "A solução não é reformar o governo, mas transcendê-lo. Com a abolição das classes, o Estado perderia sua razão de ser e definharia. O que ficaria não seria anarquia, mas uma associação de indivíduos livres gerindo coletivamente a produção comum. Essa visão permanece o horizonte mais ambicioso — e mais disputado — de toda a filosofia política ocidental."
      ],
      quotes: []
    }
  ]
};

const leiEssay: IdeaEssay = {
  slug: "lei",
  title: "A conversa sobre Lei",
  introduction:
    "De Sófocles a Marx, a conversa sobre a lei percorre a pergunta fundamental que nenhuma constituição resolve de vez: existe uma lei acima das leis humanas, e quando — se é que alguma vez — a consciência pode desobedecê-las?",
  sourceNote:
    "Texto em português preparado com base no arquivo source_lei.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "sophocles",
      keyWork: "Antígona",
      paragraphs: [
        "Sófocles inaugura a conversa com um conflito que nenhum argumento resolve: Creonte proíbe que Antígona sepulte o irmão morto em combate contra Tebas; Antígona desobedece, invocando as leis não escritas e eternas dos deuses, anteriores a qualquer decreto humano. Ambos falam de lei; nenhum dos dois cede.",
        "O que o drama expõe não é simplesmente o choque entre lei divina e lei humana, mas a impossibilidade de resolver esse choque dentro da própria ordem política. Creonte fala como governante: a lei da cidade é a condição da comunidade, e quem a viola ameaça o próprio tecido social. Antígona fala como filha e irmã: há deveres mais antigos e mais fundos do que qualquer édito, e violá-los é cometer a verdadeira impiedade.",
        "A tragédia não coroa nenhum dos dois: Creonte perde o filho, a mulher e a legitimidade; Antígona morre sem ver sua causa triunfar. Sófocles legou ao pensamento político uma tensão que Platão tentará resolver racionalmente, Aquino hierarquizará teologicamente e Hobbes simplesmente recusará — declarando que não há lei acima do soberano."
      ],
      quotes: []
    },
    {
      thinkerId: "plato",
      keyWork: "As Leis",
      paragraphs: [
        "Platão respondeu ao dilema sofocleano propondo que a lei genuína é a expressão da razão, não da vontade arbitrária do governante. Em As Leis, seu diálogo mais longo e mais político, ele imagina uma cidade onde as leis são precedidas por preâmbulos que explicam sua razão de ser — não apenas comandam, mas persuadem. O bom legislador é aquele que educa os cidadãos sobre o porquê das normas, tornando a obediência racional em vez de meramente forçada.",
        "A distinção entre lei tiranicamente imposta e lei racionalmente fundamentada antecipa a questão central da filosofia jurídica: uma norma injusta ainda é lei? Platão sugere que não — a lei genuína visa ao bem da cidade inteira, e o que apenas favorece o legislador é mero decreto de força.",
        "Esse padrão racional de avaliação da lei será sistematizado por Aristóteles e depois integrado por Aquino à hierarquia das leis. A linha de tensão com Hobbes já está traçada: para Platão e seus herdeiros, a lei tem conteúdo moral necessário; para Hobbes, tem apenas origem formal no poder soberano."
      ],
      quotes: []
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Tomás de Aquino sistematizou a tradição em uma hierarquia quádrupla. A lei eterna é a razão divina que governa toda a criação. A lei natural é a participação da criatura racional nessa lei eterna: a inclinação ao bem, à vida em comunidade, à verdade e à ordem. A lei divina é a Escritura revelada, que corrige e complementa a razão nos assuntos concernentes à salvação. A lei humana, por fim, é a determinação particular que cada comunidade estabelece para circunstâncias concretas — e só tem validade se deriva da lei natural.",
        "A consequência prática é que uma lei humana injusta não obriga moralmente. Ela pode ser tecnicamente vigente, mas perde sua autoridade genuína porque se afasta da fonte que lhe dá sentido. Aquino admite que a resistência a tais leis pode ser justificada — embora com cautela, para evitar escândalos maiores.",
        "Essa teoria forneceu o fundamento teórico para séculos de resistência consciente à lei positiva: de Martinho Lutero King à resistência contra o nazismo, o argumento da lei superior foi invocado. Hobbes será o primeiro a bloquear explicitamente essa possibilidade, declarando que a dissidência de consciência não pode ter status jurídico."
      ],
      quotes: [
        {
          text:
            "Toda lei humana tem tanto de natureza de lei quanto deriva da lei da natureza. Mas se em algum ponto se afasta da lei natural, já não é lei, mas corrupção da lei.",
          source: "Suma Teológica, Parte I-II, Questão 95"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes cortou o nó com uma afirmação que ainda hoje provoca: antes da lei não há injustiça. A lei não deriva da razão, da natureza ou de Deus, mas exclusivamente do comando do soberano lastreado pela força. O que a lei ordena é o justo por definição — não porque o soberano seja virtuoso, mas porque a alternativa ao seu comando é a guerra civil, que é o único mal genuinamente absoluto.",
        "A positivismo jurídico hobbesiano elimina a possibilidade de desobediência de consciência com fundamento em lei superior. Se cada indivíduo pudesse invocar Deus, a natureza ou a razão para resistir ao soberano, o resultado seria cada um seguindo sua própria consciência — e a paz seria impossível. A única coisa que dá à lei seu caráter de lei é a capacidade do soberano de fazê-la cumprir.",
        "Locke responderá que isso confunde lei com tirania. Kant argumentará que a lei que não pode coexistir com a liberdade racional de todos não é lei no sentido pleno. Mas o desafio hobbesiano permanece: quem decide, em última instância, o que a razão ou a natureza exigem — e que poder impede que essa decisão seja imposta pela força?"
      ],
      quotes: [
        {
          text:
            "Onde não há poder comum, não há lei; onde não há lei, não há injustiça.",
          source: "Leviatã, Parte I, Capítulo 13"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Segundo Tratado do Governo Civil",
      paragraphs: [
        "Locke devolveu à lei seu caráter normativo sem recorrer à hierarquia teológica de Aquino. A lei natural — acessível pela razão a todos os homens — estabelece que ninguém deve lesar outro em sua vida, saúde, liberdade ou posses. A lei civil é legítima quando expressa o consentimento da comunidade para aplicar e garantir esses princípios racionais em situações concretas.",
        "A diferença decisiva em relação a Hobbes é que a autoridade da lei não vem apenas da capacidade de fazer cumprir: vem do consentimento dos governados e da conformidade com os direitos naturais pré-políticos. Uma lei que viola esses direitos — que confisca propriedades sem julgamento, que prende sem causa — não é lei legítima, e os governados têm o direito de resistir.",
        "Montesquieu estenderá essa análise para mostrar que a garantia da lei não depende apenas de seu conteúdo, mas de sua estrutura institucional: a separação dos poderes é a condição para que nenhum grupo utilize a lei como instrumento de dominação particular."
      ],
      quotes: []
    },
    {
      thinkerId: "rousseau",
      keyWork: "O Contrato Social",
      paragraphs: [
        "Rousseau deslocou o fundamento da lei do consentimento individual para a vontade geral. A lei legítima não é aquela à qual cada cidadão individualmente consentiu, mas aquela que expressa o interesse comum de toda a comunidade — o que cada um desejaria se pensasse como cidadão em vez de como interesse particular.",
        "Essa distinção tem uma implicação radical: a lei pode obrigar mesmo aquele que votou contra ela, desde que a maioria tenha expressado corretamente a vontade geral. Rousseau resolve o paradoxo dizendo que quem resiste à vontade geral está, de fato, resistindo à sua própria vontade mais profunda enquanto membro da comunidade.",
        "Kant encontrará na ideia de autolegislação o núcleo correto do argumento de Rousseau — mas o transplantará para o sujeito racional individual, evitando a dependência rousseauniana de uma maioria que poderia errar em sua leitura do interesse comum."
      ],
      quotes: []
    },
    {
      thinkerId: "kant",
      keyWork: "Ciência do Direito",
      paragraphs: [
        "Kant distinguiu lei jurídica e lei moral por seu domínio, não por sua origem racional. A lei jurídica regula as ações externas dos indivíduos entre si: preocupa-se com o que fazemos, não com o motivo pelo qual agimos. A lei moral, ao contrário, exige que o sujeito aja por dever livremente reconhecido. Ambas derivam da razão, mas têm esferas distintas.",
        "O princípio que define a lei jurídica é formal e não-material: uma lei é legítima quando harmoniza a liberdade de cada um com a liberdade de todos segundo um princípio universal. Kant não pergunta se a lei é boa para o bem-estar, mas se pode valer como lei para todos os seres racionais sem contradição.",
        "Esse formalismo tem consequências conservadoras e revolucionárias ao mesmo tempo. Conservadoras, porque Kant é muito cauteloso com o direito de resistência — a desordem causada pela revolução pode ser pior do que a injustiça que combate. Revolucionárias, porque qualquer lei que não passe no teste da universalidade racional perde a pretensão de obrigar moralmente. Marx utilizará o mesmo princípio para mostrar que a lei burguesa, que pretende ser universal, na verdade expressa apenas o interesse de uma classe."
      ],
      quotes: [
        {
          text:
            "Age externamente de tal modo que o livre exercício de tua vontade possa coexistir com a liberdade de todos os outros segundo uma lei universal.",
          source: "Ciência do Direito, Introdução"
        }
      ]
    },
    {
      thinkerId: "marx",
      keyWork: "O Manifesto Comunista",
      paragraphs: [
        "Marx encerrou o percurso desmontando a pretensão de neutralidade da lei. A lei não é a expressão da razão universal nem do consentimento geral: é o conjunto de normas que uma classe dominante precisa para reproduzir as condições de sua dominação. O direito à propriedade privada não é uma conquista da razão — é a forma jurídica que o capitalismo exige para funcionar.",
        "A lei criminal protege a propriedade dos que possuem contra os que não possuem; a lei contratual regula trocas entre partes formalmente iguais mas materialmente desiguais; o direito internacional garante a propriedade colonial. Por baixo da linguagem universal dos direitos corre a lógica particular dos interesses de classe.",
        "A crítica marxista não dissolve a pergunta sobre a lei justa — radicaliza-a. Se a lei atual é ideológica, a pergunta passa a ser: que tipo de lei seria possível em uma sociedade sem classes? Marx não responde detalhadamente; a tradição socialista posterior debaterá se o direito pode ser transformado de instrumento de dominação em instrumento de emancipação, ou se deve simplesmente definhair junto com o Estado."
      ],
      quotes: []
    }
  ]
};

const estadoEssay: IdeaEssay = {
  slug: "estado",
  title: "A conversa sobre Estado",
  introduction:
    "De Aristóteles, que viu no Estado a condição natural da vida humana plena, a Marx, que o denunciou como instrumento de dominação transitório, o debate sobre o Estado atravessa as questões mais radicais da filosofia política: o que nos une como comunidade, quem tem autoridade sobre quem, e o que aconteceria se o Estado simplesmente desaparecesse.",
  sourceNote:
    "Texto em português preparado com base no arquivo source_estado.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "A República",
      paragraphs: [
        "Platão concebeu o Estado como alma ampliada: assim como a alma justa é aquela em que razão, ânimo e apetite ocupam seus lugares hierárquicos corretos, o Estado justo é aquele em que filósofos governam, guerreiros defendem e artesãos produzem, cada classe exercendo sua função própria sem invadir as demais. A justiça no Estado e na alma são a mesma coisa vista em escalas diferentes.",
        "O Estado não é um acordo entre interesses particulares, como sugerirão os contratualistas: é uma unidade orgânica com uma função teleológica — conduzir seus membros à vida boa. Platão desconfia da democracia precisamente porque ela trata a pluralidade de interesses como um bem em si, em vez de exigir que todos se subordinem à razão.",
        "O Estado ideal platônico é uma teocracia filosófica: os governantes são aqueles que contemplaram o Bem e voltaram para a caverna para servir à comunidade. Aristóteles criticará esse modelo por ser irrealisticamente abstrato; os contratualistas o rejeitarão por ser autoritário. Mas a ideia de que o Estado tem fins substantivos que transcendem a soma das preferências individuais ressurgirá em Hegel."
      ],
      quotes: []
    },
    {
      thinkerId: "aristotle",
      keyWork: "Política",
      paragraphs: [
        "Aristóteles fundou a definição que orientou séculos de reflexão: o Estado é a comunidade suprema que engloba todas as outras — família, aldeia, associações — e existe não apenas para garantir a sobrevivência, mas para tornar possível a vida boa. Sua origem é natural, porque o ser humano é, por natureza, um animal político.",
        "A naturalidade do Estado não significa que toda forma de Estado seja igualmente natural. O Estado que serve ao bem de todos expressa a natureza humana; o Estado que serve apenas ao governante a perverte. Aristóteles cataloga as formas de Estado com olhar empírico — estudou as constituições de cento e cinquenta e oito cidades gregas — e conclui que a melhor forma praticável é a que combina elementos de vários regimes e é sustentada por uma classe média estável.",
        "A tese da naturalidade do Estado será o alvo preferencial dos contratualistas modernos. Hobbes argumentará que o Estado é o mais artificial dos artefatos humanos; Locke, que é um instrumento criado por indivíduos com direitos pré-políticos; Rousseau, que a sociedade civil deformou a natureza original do homem. Nenhum deles, porém, escapa completamente do problema que Aristóteles levantou: que tipo de bem o Estado deve promover, e para quem?"
      ],
      quotes: [
        {
          text:
            "O Estado não é apenas uma comunidade de seres vivos, mas uma comunidade de iguais que visa à melhor vida possível.",
          source: "Política, Livro VII, Capítulo 8"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "A Cidade de Deus",
      paragraphs: [
        "Agostinho escreveu A Cidade de Deus após o saque de Roma pelos visigodos em 410, quando pagãos culpavam o Cristianismo pelo enfraquecimento do Império. Sua resposta transformou a questão do Estado em questão de salvação e de amor. Existem duas cidades: a de Deus, cujos membros amam a Deus até o ponto de desprezarem a si mesmos, e a dos Homens, cujos membros amam a si mesmos até o ponto de desprezarem a Deus.",
        "O Estado político pertence à cidade dos Homens: não é inteiramente mau — mantém uma paz relativa, que é um bem real —, mas é fundamentalmente marcado pelo pecado e pelo amor próprio. Nenhum Estado terreno, por mais virtuoso que pareça, pode ser a comunidade perfeita que o ser humano deseja. Roma não caiu por falta de deuses pagãos; caiu por falta da justiça que só o amor a Deus pode fundar.",
        "A posição de Agostinho terá consequências políticas duradouras. Ela subordina o Estado à Igreja — instituição da cidade de Deus na terra — e limita as pretensões de qualquer autoridade política de ser o fim último da vida humana. Aquino tentará reabilitar o Estado como instituição natural com fins próprios; os reformadores protestantes voltarão a usar o dualismo agostiniano contra o poder papal e depois contra o poder estatal."
      ],
      quotes: []
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes propôs a teoria mais radicalmente artificial do Estado. Sem ele, a vida humana é solitária, pobre, sórdida, brutal e breve. O Estado não nasce de uma sociabilidade natural: nasce do medo da morte violenta e do cálculo racional que conclui que a paz vale o preço da obediência. O Leviatã é um deus mortal, uma máquina enorme feita de corpos humanos que cederam seu direito natural de autogoverno.",
        "A soberania do Estado hobbesiano é absoluta porque qualquer divisão de autoridade produz conflito. Rei, parlamento, Igreja — apenas um pode ter a última palavra, ou a guerra civil retorna. O Leviatã não conhece limites externos de direito: só o dever de manter a paz que justificou sua criação.",
        "É nesse ponto que Locke insurge: se o Estado pode fazer qualquer coisa em nome da paz, onde termina a proteção dos governados e começa a tirania? A resposta de Locke — os direitos naturais como limite da autoridade — definirá a tradição liberal; a resposta de Hegel — que o Estado não é instrumento dos indivíduos, mas sua realização ética — definirá o idealismo político."
      ],
      quotes: []
    },
    {
      thinkerId: "locke",
      keyWork: "Segundo Tratado do Governo Civil",
      paragraphs: [
        "Locke recusou a premissa hobbesiana do estado de natureza como guerra. Para ele, antes do Estado os homens já possuem razão, direitos naturais e — ao menos em princípio — a capacidade de resolver pacificamente a maior parte dos conflitos. O problema é a ausência de um árbitro imparcial: cada um tende a julgar sua própria causa com parcialidade.",
        "O Estado é criado para resolver esse problema estrutural: não para substituir a liberdade natural, mas para garantir mais eficazmente os direitos que ela já contém. É um trust, uma delegação revogável: se o Estado violar a propriedade que lhe foi confiada para proteger, o poder retorna ao povo, que pode constituir novo governo.",
        "A teoria lockeana do Estado limitado influenciou as revoluções americana e francesa e permanece como o argumento canônico do liberalismo político. Sua vulnerabilidade é a que Marx apontará: um Estado que protege a propriedade privada como direito natural está servindo, estruturalmente, aos que possuem contra os que não possuem."
      ],
      quotes: [
        {
          text:
            "O grande e principal objetivo dos homens ao unirem-se em comunidades e submeterem-se ao governo é a preservação de sua propriedade.",
          source: "Segundo Tratado do Governo Civil, Capítulo IX"
        }
      ]
    },
    {
      thinkerId: "hegel",
      keyWork: "Princípios da Filosofia do Direito",
      paragraphs: [
        "Hegel inverteu o argumento contratualista de modo radical. O Estado não é instrumento criado por indivíduos pré-políticos com direitos anteriores; é a condição para que os indivíduos existam como seres éticos e racionais. Antes do Estado — ou fora dele — o que existe são apenas abstrações: vontades particulares sem forma objetiva. É no Estado que a liberdade deixa de ser mera capacidade interior e se realiza concretamente no mundo.",
        "O Estado hegeliano não é o Estado real de qualquer nação histórica particular — é a Ideia do Estado, a forma racional que os Estados históricos aproximam em graus variados. A Prússia de seu tempo era, para Hegel, uma aproximação superior, mas não o término do desenvolvimento histórico.",
        "A crítica de Marx será construída dentro da linguagem de Hegel: concordar que o Estado é um produto histórico e acrescentar que esse produto histórico é um produto da luta de classes, não da razão universal. O Estado não realiza a liberdade de todos — realiza a dominação de quem detém os meios de produção. E se é histórico, pode ser superado pela história."
      ],
      quotes: []
    },
    {
      thinkerId: "marx",
      keyWork: "O Manifesto Comunista",
      paragraphs: [
        "Marx reuniu as críticas anteriores e acrescentou uma nova: o Estado não é o bem comum aristotélico, não é o Leviatã hobbesiano, não é o trust lockeano, não é a Ideia hegeliana. É o comitê executivo da burguesia — o conjunto de instituições que garantem a reprodução das relações de produção capitalistas.",
        "A história é a história da luta de classes, e o Estado é o campo em que essa luta se institucionaliza. O Estado feudal servia aos senhores de terras; o Estado moderno serve ao capital. A democracia representativa é a forma política mais adequada ao capitalismo porque mascara com linguagem de universalidade uma dominação de classe real.",
        "A consequência lógica é que a emancipação não virá de dentro do Estado, mas de sua superação. Com a abolição das classes, o Estado não precisaria ser destruído por força — definharia, porque perderia sua razão de ser. Essa visão de Estado como instituição transitória permanece o horizonte mais radical proposto pela grande conversa política ocidental."
      ],
      quotes: [
        {
          text:
            "A história de toda sociedade até hoje existente é a história das lutas de classes.",
          source: "O Manifesto Comunista, Parte I"
        }
      ]
    }
  ]
};

const riquezaEssay: IdeaEssay = {
  slug: "riqueza",
  title: "A conversa sobre Riqueza",
  introduction:
    "De Aristóteles, que a julgou mero instrumento, a Marx, que a expôs como relação social de poder, a conversa sobre a riqueza interroga sua origem, seus limites morais e sua distribuição — perguntando se o enriquecimento individual serve ou destrói o bem comum.",
  sourceNote:
    "Texto em português preparado com base no arquivo source_riqueza.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "A República",
      paragraphs: [
        "Platão abordou a riqueza com desconfiança estrutural. Na República, o amor ao dinheiro é o traço distintivo da alma oligárquica — aquela em que o apetite domina a razão e o ânimo. Uma cidade dominada por esse amor transforma-se em duas cidades em conflito permanente: a dos ricos e a dos pobres. A riqueza excessiva corrompe tanto os que a possuem quanto os que a invejam.",
        "Para os guardiões do Estado ideal, a propriedade privada e a família são abolidas: os que governam não devem possuir nada que os incline a governar em favor próprio. A riqueza, por sua natureza, desvia a atenção do bem comum para o interesse particular. Somente quem não possui pode governar com olhos voltados para o todo.",
        "Aristóteles discordará dessa solução, argumentando que a propriedade comum tende ao negligenciamento: o que é de todos é cuidado por nenhum. Mas herdará de Platão a desconfiança fundamental em relação à acumulação ilimitada."
      ],
      quotes: []
    },
    {
      thinkerId: "aristotle",
      keyWork: "Ética a Nicômaco",
      paragraphs: [
        "Aristóteles estabeleceu a distinção que dominará séculos de reflexão econômica e moral: há um limite natural e saudável para a acumulação de riqueza — a quantidade necessária para viver virtuosamente e participar da vida cívica. Além desse limite, a busca de riqueza deixa de ser meio e transforma-se em fim, corrompendo o caráter.",
        "A usura — o dinheiro gerando dinheiro — é particularmente antinatural porque reverte a função do dinheiro como instrumento de troca. O mercador que compra para revender lucrativamente usa os outros como meios; o usurário faz o mesmo com o próprio dinheiro. Em ambos os casos, a riqueza deixa de servir à vida boa e passa a ser perseguida por si mesma.",
        "A posição aristotélica não é antibusiness avant la lettre: a produção agrícola, o artesanato e o comércio de abastecimento são legítimos. O que é condenado é a crematística — a arte de fazer dinheiro sem limite e sem referência a um uso específico. Aquino desenvolverá esse argumento no contexto cristão; Locke o demolirá com a justificativa do trabalho."
      ],
      quotes: [
        {
          text:
            "A vida de quem faz dinheiro é uma vida empreendida sob compulsão, e a riqueza evidentemente não é o bem que buscamos; é apenas útil e existe em função de outra coisa.",
          source: "Ética a Nicômaco, Livro I"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Aquino defendeu a propriedade privada por razões práticas: o que é privado é mais bem cuidado, a responsabilidade é mais clara e as disputas são menores do que na posse comum. Mas a propriedade privada é legítima apenas dentro de limites morais: o proprietário deve usar seus bens também para o bem alheio, especialmente em caso de necessidade.",
        "O argumento mais radical de Aquino sobre a riqueza é o do excedente: em situação de necessidade extrema, a propriedade perde seu caráter exclusivo. Quem rouba para não morrer de fome não comete, em sentido estrito, um roubo injusto — porque o excedente do rico pertence, por direito natural, ao pobre que passa fome. O proprietário é administrador, não senhor absoluto, dos bens que possui.",
        "A usura continua proibida por Aquino, pois o dinheiro, como meio de troca, não pode ser vendido — seria cobrar pelo uso do tempo, que pertence a Deus. Locke inverterá completamente essa perspectiva ao mostrar que o dinheiro é uma convenção humana que não está sujeita a limites naturais de acumulação."
      ],
      quotes: [
        {
          text:
            "As riquezas externas são úteis para as necessidades do corpo... Mas o bem do homem não consiste nelas.",
          source: "Suma Teológica, Parte I-II, Questão 2, Artigo 1"
        }
      ]
    },
    {
      thinkerId: "locke",
      keyWork: "Segundo Tratado do Governo Civil",
      paragraphs: [
        "Locke fundou a propriedade no trabalho: quando o homem mistura seu trabalho com a natureza, torna aquela parte dela sua. No estado de natureza, o limite da acumulação legítima era a deterioração: não se pode apropriar mais do que se pode usar antes de estragar.",
        "A invenção do dinheiro, porém, derrubou esse limite natural. O dinheiro não apodrece: permite acumular valor indefinidamente sem desperdício. E como a convenção monetária exige o consentimento tácito de toda a comunidade, a acumulação ilimitada de dinheiro é implicitamente aprovada por todos que participam de uma economia monetizada.",
        "A consequência é uma ruptura decisiva com Aristóteles e Aquino: a acumulação ilimitada de riqueza é não apenas permitida, mas racionalmente justificada pelo trabalho e pelo consentimento. Adam Smith construirá sobre esse fundamento a teoria do mercado como mecanismo benéfico de coordenação; Marx mostrará que o que Locke chamou de consentimento é, na verdade, a naturalização de uma relação de poder histórica."
      ],
      quotes: [
        {
          text:
            "O que ele retira do estado que a natureza dispôs e deixou, misturou com seu trabalho e juntou a ele algo seu, tornando-o, assim, sua propriedade.",
          source: "Segundo Tratado do Governo Civil, Capítulo V"
        }
      ]
    },
    {
      thinkerId: "rousseau",
      keyWork: "Discurso sobre a Origem da Desigualdade",
      paragraphs: [
        "Rousseau inverteu a narrativa lockeana: o primeiro homem que cercou um pedaço de terra, declarou 'isto é meu' e encontrou pessoas simples o suficiente para acreditar nele foi o verdadeiro fundador da sociedade civil — e de todos os seus crimes. A propriedade privada não protegeu a liberdade natural: destruiu-a, substituindo a independência primitiva pela dependência recíproca e pela desigualdade.",
        "No estado de natureza rousseauniano, o homem era livre, são e bom — não porque fosse racional, mas porque suas necessidades eram simples e a natureza as satisfazia. A sociedade civil corrompeu essa condição introduzindo a comparação, a inveja, o status e a dependência econômica. A riqueza não é o fruto do trabalho honesto; é o produto da desigualdade que o contrato social original legalizou.",
        "Adam Smith lerá os mesmos fenômenos — divisão do trabalho, acumulação, mercado — como mecanismos benéficos. Rousseau os leu como fontes de alienação. Marx unirá os dois: a leitura smithiana de como a riqueza é produzida com a intuição rousseauniana de que ela é produzida às custas dos que a criam."
      ],
      quotes: []
    },
    {
      thinkerId: "smith",
      keyWork: "A Riqueza das Nações",
      paragraphs: [
        "Adam Smith transformou a pergunta sobre a riqueza: em vez de perguntar se ela é moralmente legítima, perguntou como ela é produzida e distribuída. Sua resposta fundamental é que a origem da riqueza não é a terra (como pensavam os fisiocratas) nem o comércio (como pensavam os mercantilistas), mas o trabalho dinamizado pela divisão de tarefas.",
        "O exemplo do alfinete é famoso: dez trabalhadores dividindo as etapas da produção produzem incomparavelmente mais do que dez artesãos trabalhando cada um sozinho do início ao fim. A especialização multiplica a produtividade; o mercado coordena a especialização através dos preços. E o mecanismo de coordenação não requer benevolência — requer apenas que cada agente persiga seu próprio interesse.",
        "A mão invisível não é uma metáfora mística: é a hipótese de que, em condições de concorrência, a busca privada do lucro tende a produzir resultados coletivamente benéficos sem planejamento central. Marx respeitará a análise da produção capitalista em Smith — e a usará para mostrar que o que Smith chamou de benefício comum é, na verdade, extração sistemática de mais-valia."
      ],
      quotes: [
        {
          text:
            "Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos nosso jantar, mas da consideração que eles têm por seu próprio interesse.",
          source: "A Riqueza das Nações, Livro I, Capítulo 2"
        }
      ]
    },
    {
      thinkerId: "marx",
      keyWork: "O Capital",
      paragraphs: [
        "Marx aceitou a análise smithiana como ponto de partida e a radicalizou. O capital não é uma 'coisa' — uma máquina, uma fábrica, uma soma de dinheiro — mas uma relação social específica: a relação entre quem possui os meios de produção e quem vende sua força de trabalho para sobreviver. A riqueza capitalista se produz extraindo desses trabalhadores uma mais-valia — um tempo de trabalho não pago que se acumula como lucro.",
        "O processo é sistêmico, não pessoal. O capitalista não precisa ser cruel nem o trabalhador preguiçoso: a lógica do mercado competitivo obriga ambos. Quem não extrai mais-valia suficiente perde capital para os concorrentes; quem não vende sua força de trabalho não sobrevive. A desigualdade não é acidente moral, é produto estrutural do sistema.",
        "A dialética marxista da riqueza é a mais provocante: a acumulação de riqueza em um polo produz necessariamente acumulação de miséria no polo oposto. A teoria do valor-trabalho, a análise da mais-valia e a lei da concentração do capital compõem o diagnóstico mais sistemático do capitalismo jamais produzido dentro da tradição dos Great Books — e o mais disputado."
      ],
      quotes: [
        {
          text:
            "A acumulação de riqueza num polo é ao mesmo tempo acumulação de miséria, agonia do trabalho, escravidão, ignorância, brutalidade, degradação moral no polo oposto.",
          source: "O Capital, Volume I, Capítulo 25"
        }
      ]
    }
  ]
};

const guerraEPazEssay: IdeaEssay = {
  slug: "guerra-e-paz",
  title: "A conversa sobre Guerra e Paz",
  introduction:
    "Da glória heróica da Ilíada ao diagnóstico estrutural do capitalismo em Marx, a guerra e a paz percorrem toda a tradição ocidental como o par de tensões mais permanente da vida política. O que legitima a guerra? O que torna a paz possível? E quem, afinal, paga o preço de cada resposta?",
  sourceNote:
    "Texto em português preparado com base no arquivo source_guerra-e-paz.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "homer",
      keyWork: "Ilíada",
      paragraphs: [
        "A Ilíada de Homero não é um canto de triunfo militar — é a tragédia do custo da guerra. Aquiles sabe desde o início que vai morrer; Heitor sabe que Troia vai cair. Os dois lutam mesmo assim, porque a alternativa — recuar, sobreviver sem glória — seria pior do que a morte. A kleos, o renome que sobrevive ao guerreiro, é o único sentido que a morte violenta pode ter.",
        "Homero apresenta a guerra com toda a sua brutalidade, incluindo os lamentos dos vencidos, as viúvas, os filhos orphãos. Andrômaca suplica Heitor que não volte ao campo de batalha. Heitor reconhece que Troia vai ser destruída, que sua esposa vai ser escravizada, mas não consegue ficar. A honra e o dever para com os companheiros pesam mais do que a sobrevivência pessoal.",
        "A Odisseia completa o quadro: o regresso da guerra é tão perigoso quanto a guerra em si. Odisseu demora dez anos para voltar para casa. O herói de guerra retorna transformado, quase irreconhecível, e precisa de outra batalha — desta vez no interior do próprio lar — para reencontrar a paz. Homero estabelece que a guerra e a paz não são simplesmente opostos; a paz precisa ser conquistada tão difícil quanto a vitória militar.",
        "No universo homérico, os deuses interferem diretamente nos conflitos. Zeus pesa as almas na balança do destino; Ares e Afrodite entram no campo de batalha. Mas essa dimensão divina não elimina a responsabilidade humana: Zeus mesmo, na abertura da Odisseia, distingue entre a moira, a fração de destino proporcional a cada um, e a desgraça autoinfligida pela hybris. A guerra que os homens iniciam por orgulho desmedido vai além do que os deuses ordenaram."
      ],
      quotes: [
        {
          text: "Uma morte gloriosa é daquele que, pela pátria, cai na linha de frente da batalha.",
          source: "Ilíada, Livro XV"
        }
      ]
    },
    {
      thinkerId: "herodotus",
      keyWork: "Histórias",
      paragraphs: [
        "Heródoto abre as Histórias com uma pergunta: por que gregos e bárbaros guerrearam entre si? Sua resposta percorre séculos de raptos, vingança e retaliação, mas o motor real que ele identifica é a hybris — o orgulho desmedido que leva líderes poderosos a acreditar que podem desafiar os limites da fortuna. Creso ignora o aviso de Sólon; Xerxes chicoteia o mar após a tempestade destruir sua ponte de barcos.",
        "A sentença de Sólon a Creso — 'não chames nenhum homem feliz antes de sua morte' — funciona como epígrafe moral das Guerras Pérsicas. Creso a ignorou, atacou os persas e perdeu tudo. Xerxes reuniu o maior exército que o mundo já vira e foi derrotado por cidades menores que lutavam pela liberdade.",
        "Heródoto sugere uma diferença qualitativa entre os exércitos: os gregos lutavam como cidadãos livres que defendiam sua própria comunidade; os persas, como súditos obedecendo a um senhor. Essa diferença de motivação explica vitórias improvávies como as de Maratona e Salamina. A liberdade política é, para Heródoto, uma fonte de força militar que nenhuma superioridade numérica consegue compensar.",
        "O historiador também registra as consequências da guerra para os vencidos — cidades destruídas, populações escravizadas, templos incendiados. Não romantiza a vitória grega. As Guerras Pérsicas ensinam que a fortuna gira, que a hybris precipita a queda, e que a grandeza hoje não é garantia de nada amanhã."
      ],
      quotes: [
        {
          text: "Na paz, os filhos enterram seus pais. Na guerra, os pais enterram seus filhos.",
          source: "Histórias, Livro I (Creso a Ciro, após a derrota)"
        }
      ]
    },
    {
      thinkerId: "thucydides",
      keyWork: "História da Guerra do Peloponeso",
      paragraphs: [
        "Tucídides foi o primeiro a tentar uma análise rigorosamente causal da guerra. Seu diagnóstico das causas da Guerra do Peloponeso distingue entre os pretextos declarados e a causa verdadeira: o crescimento do poder de Atenas e o medo que esse crescimento inspirou em Esparta. Não foi uma questão de ideologia, de ofensa moral ou de honra — foi poder e medo.",
        "O Diálogo dos Mélios radicaliza essa tese. Quando os atenienses negociam com os habitantes de Melos, recusam explicitamente discutir justiça: os fortes fazem o que podem, os fracos sofrem o que devem. A lógica do poder nu, sem verniz moral, nunca foi enunciada mais claramente na literatura ocidental.",
        "Mas Tucídides não endossa essa posição — ele a documenta para mostrar suas consequências. Atenas massacrou os mélios e pouco depois sofreu o desastre da Sicília, a expedição mais ambiciosa e mais catastrófica de sua história. O excesso de poder inspira excesso de ambição, e o excesso de ambição leva à ruína.",
        "A Oração Fúnebre de Péricles no Livro II apresenta o polo oposto: o ideal ateniense de liberdade, cultura, deliberação pública, igualdade perante a lei. Tucídides coloca lado a lado esse ideal e sua corrupção progressiva — a guerra desgasta a democracia, multiplica as facções internas, embrutece a linguagem política e dissolve os laços de confiança que tornavam a cidade possível. A guerra do Peloponeso é a história de uma civilização que se autodestrói."
      ],
      quotes: [
        {
          text: "O crescimento do poder de Atenas, e o alarme que isso inspirou em Esparta, tornaram a guerra inevitável.",
          source: "História da Guerra do Peloponeso, Livro I, Cap. 23"
        },
        {
          text: "Os fortes fazem o que podem e os fracos sofrem o que devem.",
          source: "História da Guerra do Peloponeso, Livro V, Cap. 89 (Diálogo dos Mélios)"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República / Fédon",
      paragraphs: [
        "Para Platão, a raiz da guerra é o desejo irrestrito — em particular o desejo por mais riqueza do que o necessário. Na República, Sócrates descreve como a 'cidade saudável' (aquela que satisfaz as necessidades básicas) se transforma na 'cidade febril' por acumulação de luxos. Quando a cidade quer mais do que o necessário, precisa tomar de outras; as outras resistem; a guerra é o resultado inevitável.",
        "No Fédon, Platão articula essa tese mais diretamente: todas as guerras são empreendidas para adquirir riqueza, e a razão pela qual precisamos adquirir riqueza é o corpo — porque somos escravos de suas demandas. A guerra não é um fenômeno político autônomo; é sintoma de uma alma coletiva desordenada, dominada pelo apetite em vez da razão.",
        "A paz verdadeira, para Platão, exigiria uma reestruturação radical da alma coletiva. Uma cidade justa — aquela em que razão, coragem e apetite estão em equilíbrio sob o comando da sabedoria — não teria motivo para guerrear por cobiça. As guerras defensivas podem ser necessárias, mas a política externa de uma cidade saudável seria fundamentalmente diferente da política imperial de Atenas.",
        "Essa análise psicológica da guerra permanece incômoda porque localiza a causa não nos inimigos externos, mas nos desejos internos. Não é o bárbaro que ameaça a paz — é a parte apetitiva de cada alma e de cada cidade que não foi educada para reconhecer seus próprios limites."
      ],
      quotes: [
        {
          text: "As guerras e as facções e os combates não têm outra fonte além do corpo e de seus desejos.",
          source: "Fédon, 66c"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Política / Ética a Nicômaco",
      paragraphs: [
        "Aristóteles inverte a perspectiva dominante em Esparta — a de que o Estado existe para fazer guerra. Para ele, a guerra é um meio; a paz é o fim. Uma constituição que forme cidadãos apenas para o combate não sabe o que fazer com a vitória: conquista o ócio, mas não tem a virtude necessária para usá-lo bem.",
        "O exemplo espartano era eloquente. Esparta dominou o Peloponeso pela força e depois declinou rapidamente quando não havia mais guerras para fazer. Uma cidade construída em torno da guerra é inútil em tempo de paz — e o tempo de paz, para Aristóteles, é o tempo da vida política plena, da deliberação, da amizade cívica, da contemplação.",
        "Aristóteles também analisa os diferentes tipos de guerra: guerra defensiva (legítima), guerra para dominar povos que merecem ser escravizados (controversa em si mesma), guerras de conquista imperial (ilegítimas porque visam apenas ao poder). O critério é sempre teleológico: a guerra é justificada quando é meio necessário para alcançar a paz e a vida virtuosa, não quando é um fim em si mesma.",
        "A paz verdadeira não é simplesmente ausência de guerra — é a condição em que os cidadãos podem exercer plenamente suas capacidades, cultivar virtudes, deliberar juntos sobre o bem comum. Essa concepção positiva da paz, distinta da mera trégua militar, influenciará tanto os pensadores medievais quanto o projeto kantiano de paz perpétua."
      ],
      quotes: [
        {
          text: "Fazemos guerra para que possamos viver em paz.",
          source: "Ética a Nicômaco, Livro X, Cap. 7"
        }
      ]
    },
    {
      thinkerId: "cicero",
      keyWork: "Dos Deveres",
      paragraphs: [
        "Cícero foi o primeiro pensador ocidental a sistematizar as condições que tornam uma guerra legítima. Em Dos Deveres, ele estabelece que nenhuma guerra é justa a menos que tenha sido precedida de uma demanda formal de satisfação, de uma advertência e de uma declaração formal — o que os romanos chamavam de feciales, o direito sagrado dos arautos.",
        "As condições de Cícero para o jus ad bellum (o direito de ir à guerra) são: causa justa (geralmente autodefesa ou reparação de injustiça), autoridade legítima (não facções privadas), declaração formal, e a guerra como último recurso. Uma paz honrosa é sempre preferível a uma guerra vitoriosa. Isso não é pacifismo — Cícero era romano e entendia a força — mas é a ideia de que a força deve ser subordinada ao direito.",
        "O jus in bello (a conduta dentro da guerra) também tem regras. Devem ser poupados os que se rendem; as promessas feitas ao inimigo devem ser cumpridas; o objetivo é sempre a paz, não o extermínio. A memória do comportamento romano em guerras — às vezes generoso, às vezes brutal — tornava esses princípios tanto um ideal normativo quanto uma autocrítica implícita.",
        "A tradição da guerra justa que Cícero fundou será retomada por Agostinho, sistematizada por Aquino e rearticulada no direito internacional moderno por Hugo Grotius. O projeto é sempre o mesmo: distinguir guerra legítima de pura violência, impor limites morais onde a força parece ilimitada."
      ],
      quotes: [
        {
          text: "Nenhuma guerra é justa, a menos que seja travada após uma demanda oficial de satisfação ter sido submetida, ou após aviso dado e declaração formal feita.",
          source: "Dos Deveres, Livro I, Cap. 11, §36"
        }
      ]
    },
    {
      thinkerId: "hobbes",
      keyWork: "Leviatã",
      paragraphs: [
        "Hobbes produziu o diagnóstico mais sombrio da condição humana sem governo: um estado de natureza em que a vida é 'solitária, pobre, sórdida, brutal e curta'. Não se trata de batalhas constantes, mas da disposição permanente para o combate — a guerra de todos contra todos como condição estrutural na ausência de um poder soberano.",
        "Para Hobbes, a paz não emerge espontaneamente da natureza humana; precisa ser construída artificialmente pelo pacto social. Os indivíduos transferem seus direitos naturais a um soberano que, em troca, garante a segurança coletiva. Sem esse Leviatã, nenhuma arte, nenhuma ciência, nenhuma cultura é possível — porque todos os recursos devem ser destinados à sobrevivência imediata.",
        "A consequência para a política internacional é perturbadora: entre soberanos, não existe poder superior capaz de garantir a paz. O estado de natureza hobbesiano — guerra permanente de todos contra todos — é exatamente o estado em que as nações se encontram entre si. A paz internacional, portanto, é sempre precária, dependente de equilíbrios de poder e acordos que nenhum soberano está obrigado a respeitar.",
        "Hobbes não era militarista — reconhecia que a guerra era irracional e que os humanos tinham bons motivos para evitá-la. Mas sua análise tornou a paz perpétua kantiana necessária precisamente ao mostrar que sem instituições que a produzam, a guerra é o estado natural das relações entre Estados soberanos."
      ],
      quotes: [
        {
          text: "O homem que vive sem um poder comum que o mantenha em respeito encontra-se naquela condição chamada guerra; e tal guerra é de todo homem contra todo homem.",
          source: "Leviatã, Parte I, Cap. 13"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "À Paz Perpétua",
      paragraphs: [
        "Kant aceitou o diagnóstico hobbesiano — sem instituições, a guerra é o estado natural entre nações — e tirou a conclusão oposta. Se a paz não surge espontaneamente, ela deve ser construída intencionalmente. À Paz Perpétua (1795) é o projeto mais ambicioso de arquitetura institucional para a paz na história da filosofia.",
        "As condições de Kant para a paz perpétua incluem: que os Estados sejam repúblicas (porque os cidadãos que pagarão o custo da guerra terão voz na decisão de declará-la); que exista uma federação de Estados livres (não um Estado mundial, que seria tirania, mas uma aliança voluntária de respeito mútuo); e que exista um direito cosmopolita que proteja os cidadãos do mundo como viajantes e visitantes, não apenas como súditos de seus próprios Estados.",
        "O argumento é ao mesmo tempo moral e estratégico. Moralmente, a guerra entre seres racionais é sempre um mal a ser evitado; politicamente, as repúblicas têm menos incentivo para guerrear do que as monarquias absolutas, porque o povo que sofre as consequências da guerra é o mesmo que decide por ela. Kant antecipou aqui o que o século XX chamaria de 'paz democrática' — a observação empírica de que democracias raramente guerreiam entre si.",
        "Kant também distingue a paz perpétua de uma mera trégua. A paz verdadeira não é simplesmente cessação das hostilidades enquanto as partes se rearma; exige transformação das instituições políticas e do direito internacional. É um projeto histórico de longo prazo, não um estado que os Estados possam alcançar por decreto."
      ],
      quotes: [
        {
          text: "O estado de paz entre homens que vivem lado a lado não é o estado natural; o estado natural é de guerra... um estado de paz deve, portanto, ser estabelecido.",
          source: "À Paz Perpétua, Seção I"
        }
      ]
    },
    {
      thinkerId: "marx",
      keyWork: "O Manifesto Comunista / O Capital",
      paragraphs: [
        "Marx rejeitou as análises morais e institucionalistas da guerra como insuficientes. Para ele, as guerras modernas são conflitos de classe disfarçados de conflitos nacionais — expressões das contradições do capitalismo na disputa por mercados, matérias-primas, rotas comerciais e zonas de influência.",
        "O Manifesto Comunista proclama que os trabalhadores não têm pátria. Isso não é apenas retórica: significa que as lealdades nacionais que mobilizam os trabalhadores para as guerras são uma forma de falsa consciência — um instrumento pelo qual as classes dominantes recrutam os oprimidos para defender interesses que não são os seus. O proletário que morre numa guerra imperialista defende o capital do seu patrão, não a si mesmo.",
        "A análise marxista da guerra é estrutural: enquanto existir concorrência capitalista entre potências, haverá guerras para controlar recursos e mercados. A paz duradoura exige a transformação das relações de produção, não apenas novas instituições diplomáticas. Kant propõe uma federação de repúblicas; Marx propõe a dissolução do sistema que torna as guerras imperialistas necessárias.",
        "A ironia histórica é que os regimes que se proclamaram marxistas no século XX produziram guerras tão devastadoras quanto os capitalistas — o que tanto marxistas heterodoxos quanto liberais usaram como argumento: os primeiros para criticar a deformação burocrática da revolução, os segundos para refutar a análise marxista da guerra como fenômeno puramente capitalista."
      ],
      quotes: [
        {
          text: "Os trabalhadores não têm pátria. Não podemos tirar deles o que não têm.",
          source: "O Manifesto Comunista, Seção II"
        }
      ]
    },
    {
      thinkerId: "tolstoy",
      keyWork: "Guerra e Paz",
      paragraphs: [
        "Tolstói escreveu o romance mais ambicioso sobre a guerra na tradição ocidental — e usou-o para demolir todas as teorias que encontrou. Guerra e Paz é ao mesmo tempo narrativa épica e ensaio filosófico: nos capítulos entre as cenas de batalha, Tolstói argumenta que os historiadores e estrategistas entendem mal o que acontece nas guerras.",
        "O argumento central é que as batalhas não são controladas pelos generais. As ordens chegam tarde, a informação é incompleta, o terreno desobedece aos mapas, os soldados agem por instinto e medo mais do que por tática. Napoleão, o gênio militar mais admirado de sua época, em Waterloo deu ordens que não foram executadas, recebeu relatórios falsos e manteve a ilusão de controle enquanto a batalha ia para onde ia por sua própria inércia.",
        "Kutúzov, o general russo, representa a sabedoria oposta: ele recua, espera, desgasta o inimigo, rejeita batalhas desnecessárias. Sua estratégia não é brilhante — é paciente. Ele entende que o destino de Napoleão na Rússia já estava decidido pelo inverno, pela imensidão do território e pelo espírito das tropas. O general sábio não controla a guerra — reconhece o que não pode ser controlado e age em conformidade.",
        "A mensagem moral de Tolstói é inseparável de sua análise histórica: a grandeza autêntica não tem nada a ver com conquistas militares. Pierre Bezukhov, o personagem mais próximo do ideal tolstoiano, encontra a paz interior não nas batalhas, mas na simplicidade, na bondade, na verdade vivida no cotidiano. A guerra é o lugar onde a ilusão de poder humano se revela mais claramente — e mais tragicamente."
      ],
      quotes: [
        {
          text: "Os mais fortes de todos os guerreiros são estes dois — o Tempo e a Paciência.",
          source: "Guerra e Paz, Vol. III, Parte 3, Cap. 1"
        },
        {
          text: "Não há grandeza onde não há simplicidade, bondade e verdade.",
          source: "Guerra e Paz, Vol. III"
        }
      ]
    }
  ]
};

const destinoEssay: IdeaEssay = {
  slug: "destino",
  title: "A conversa sobre o Destino",
  introduction:
    "Da moira implacável de Homero à dissolução kantiana do fatalismo na liberdade moral, o destino percorre a tradição ocidental como a tensão irresolvida entre o que é fixado antes de nós e o que depende de nossas escolhas. Cada resposta ao destino revela uma teoria do humano.",
  sourceNote:
    "Texto em português preparado com base no arquivo source_destino.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "homer",
      keyWork: "Ilíada / Odisseia",
      paragraphs: [
        "Em Homero, o destino (moira) é uma força impessoal que nem os deuses podem contrariar plenamente. Quando Zeus considera salvar Sarpédon da morte que lhe está destinada, Hera o adverte: os outros deuses farão o mesmo com seus favoritos, e a ordem do mundo vai desmoronar. Zeus obedece ao destino. Os humanos, então, existem numa tensão permanente entre a fatalidade cósmica e a escolha de como enfrentá-la.",
        "Aquiles é o exemplo perfeito. Ele sabe desde o início que vai morrer jovem se ficar em Troia; poderia voltar para casa e viver longa vida sem glória. Ele escolhe ficar. A morte é destino fixo; a glória (kleos) é a resposta que o herói dá a esse destino — a única forma de afirmar a liberdade dentro da necessidade. O herói homérico não muda o que vai acontecer; decide como acontece.",
        "A Odisseia complica o quadro. Zeus, no canto inicial, distingue entre moira — a fração de destino que cabe a cada um — e a desgraça autoinfligida pela hybris. Os companheiros de Odisseu morreram não apenas porque era seu destino, mas porque devoraram os bois sagrados de Hélio e provocaram sua própria destruição além da medida. Há uma parte do destino que é inevitável e uma parte que depende da prudência ou da imprudência do agente.",
        "Esse é o problema que a tragédia grega vai herdar e radicalizar: onde termina a moira e começa a responsabilidade humana? A tradição homérica não tem uma resposta clara — e talvez seja justamente essa ambiguidade que tornará o tema inesgotável para os séculos seguintes."
      ],
      quotes: [
        {
          text: "Mesmo o mais forte de todos os seres vivos deve curvar-se ao destino. Também eu jaço morto quando minha hora chegar. Mas agora que eu ganhe renome nobre.",
          source: "Ilíada, Livro XVIII"
        }
      ]
    },
    {
      thinkerId: "aeschylus",
      keyWork: "Oresteia",
      paragraphs: [
        "Em Ésquilo, o destino assume a forma de maldição ancestral que percorre gerações. A casa dos Atridas carrega um crime original — o banquete de Tiestes — que se propaga de pai a filho em ciclos de vingança e sangue. Agamêmnon mata Ifigênia; Clitemnestra mata Agamêmnon; Orestes mata Clitemnestra; as Erínias perseguem Orestes. O destino não é apenas individual — é uma linhagem inteira aprisionada numa cadeia de violência.",
        "A fórmula esquiliana do destino é pathei mathos: aprender pelo sofrimento. O coro de Agamêmnon medita sobre isso enquanto espera notícias da guerra: o sofrimento não é arbitrário, mas pedagógico — Zeus inscreveu no cosmos a lei de que a sabedoria chega pela dor. O destino educa; a questão é se o preço do aprendizado é justo.",
        "A Oresteia é a única trilogia completa de Ésquilo que sobreviveu, e sua resolução é notável. O ciclo de vingança é interrompido não por um deus que intervém por capricho, mas pela fundação do tribunal do Areópago — a primeira corte de homicídios em Atenas. O destino trágico da casa dos Atridas é superado pela instituição da justiça civil. Ésquilo sugere que a história humana pode avançar, que a maldição pode ser quebrada, que o destino não precisa ser eterno.",
        "Essa confiança nas instituições humanas como remédio para o destino é peculiar a Ésquilo. Sófocles e Eurípides serão muito mais céticos quanto à capacidade do direito e da razão humanos para conter o que os deuses e o destino puseram em movimento."
      ],
      quotes: [
        {
          text: "Zeus, que guiou os homens a pensar, que estabeleceu que a sabedoria chega apenas pelo sofrimento.",
          source: "Agamêmnon, versos 176–182"
        }
      ]
    },
    {
      thinkerId: "sophocles",
      keyWork: "Édipo Rei",
      paragraphs: [
        "O Édipo Rei de Sófocles é a formulação mais célebre e mais perturbadora do destino na literatura ocidental. A profecia — que Édipo mataria o pai e desposaria a mãe — se cumpre precisamente porque os envolvidos tentam evitá-la. Laio abandona o filho para escapar da profecia; Édipo foge de Corinto pelo mesmo motivo; os dois se encontram numa encruzilhada e a tragédia se consuma.",
        "A ironia trágica central é que a investigação que Édipo conduz com tanta inteligência e determinação é exatamente o que revela seu próprio crime. Cada passo dado em direção à verdade é um passo em direção à destruição. A competência de Édipo — sua capacidade de decifrar enigmas, de investigar, de não desistir — é o instrumento do próprio destino. A inteligência não escapa ao destino; o destino a usa.",
        "Tirésias, o profeta cego que vê o que o rei vidente recusa, representa a posição que Sófocles parece endossar: o destino já se cumpriu antes mesmo de a investigação começar. Édipo procura o assassino de Laio sem saber que o assassino é ele mesmo; o coro e o público sabem desde o início. A dimensão de horror vem precisamente dessa distância entre o que Édipo sabe e o que o público já sabe.",
        "O coro final extrai a lição mais sombria: não chames nenhum homem feliz antes de sua morte. Enquanto a vida continua, o destino permanece insondável. A única conclusão possível é a humildade radical diante da imprevisibilidade — não do acaso, mas do destino que age através das próprias ações do herói."
      ],
      quotes: [
        {
          text: "Digo que tu és o assassino do homem cujo assassino buscas.",
          source: "Édipo Rei, verso 362 (Tirésias a Édipo)"
        },
        {
          text: "Não chames nenhum homem feliz antes de sua morte.",
          source: "Édipo Rei, verso 1530 (coro final)"
        }
      ]
    },
    {
      thinkerId: "euripides",
      keyWork: "Medeia / As Bacantes",
      paragraphs: [
        "Eurípides torna o destino ainda mais perturbador ao remover qualquer plano providencial coerente. Em suas tragédias, os deuses são caprichosos ou indiferentes, e o destino se manifesta menos como ordem cósmica do que como paixão incontrolável que o logos não consegue domar. Medeia age movida por eros e furor; Penteu é destruído por Dionísio por resistir ao deus que não reconhecia; Hipólito é punido por Afrodite por uma devoção exclusiva a Ártemis.",
        "A diferença em relação a Sófocles é significativa. Em Édipo, o destino tem uma lógica — é horrível, mas coerente. Em Eurípides, o destino parece quase arbitrário: os deuses deflagram forças irracionais nos humanos e depois os abandonam às consequências. Não há aprendizado, não há pedagogia divina. Há apenas vítimas.",
        "Medeia é o caso mais extremo. Ela sabe que vai matar os filhos; delibera, vacila, e no fim executa. A paixão — a mistura de amor ferido e sede de vingança — é mais forte do que o amor materno e do que a razão. Eurípides mostra que o destino pode se manifestar como força interna irresistível, não como decreto externo. O que nos destrói pode estar dentro de nós mesmos.",
        "A fórmula de encerramento de várias tragédias de Eurípides é deliberadamente desconcertante: o destino decepciona qualquer expectativa racional — o que parecia esperado não acontece; o inesperado encontra um caminho. Essa imprevisibilidade estrutural é o último argumento de Eurípides contra qualquer teodiceia que pretenda explicar o sofrimento como justo ou pedagógico."
      ],
      quotes: [
        {
          text: "Os deuses realizam muitas coisas contra nossa esperança; o que parecia esperado não se cumpre, e para o inesperado um deus encontra um caminho.",
          source: "Medeia, versos finais (coro)"
        }
      ]
    },
    {
      thinkerId: "plato",
      keyWork: "República / Fedro",
      paragraphs: [
        "Platão inverte radicalmente a tradição trágica. No Mito de Er, no final da República, as almas que estão prestes a reencarnar escolhem seu próximo destino antes de beber do rio do Esquecimento. A escolha é livre — e um profeta adverte que a responsabilidade é da alma que escolhe, não de Deus. 'A virtude não tem senhor; cada um a terá em maior ou menor grau conforme a honrar ou desonrar.'",
        "A inversão é completa. Em Homero e na tragédia, o destino é o que os deuses impõem ao humano; em Platão, o destino é a consequência das escolhas que a própria alma fez quando ainda possuía plena liberdade. A moira não é cósmica — é moral. O herói que se lamenta do destino lamenta, no fundo, as escolhas que sua alma fez em vidas anteriores.",
        "Essa estrutura exige a imortalidade da alma e a reencarnação como pré-condições metafísicas. Se a alma morre com o corpo, não há como responsabilizá-la por escolhas feitas antes do nascimento. O Fedro apresenta a alma como fonte de todo movimento, imortal por natureza, capaz de percorrer o cosmos e contemplar as Formas antes de descer à vida encarnada.",
        "Platão preserva algo da grandeza trágica — a vida ainda é difícil, ainda há sofrimento, ainda há escolhas erradas que arrastam a alma para vidas degradadas. Mas o quadro é fundamentalmente diferente: o cosmos é justo, cada alma recebe o que merece, e a educação filosófica é o instrumento pelo qual o humano aprende a fazer as escolhas certas antes de reencarnar."
      ],
      quotes: [
        {
          text: "A alma que escolheu deve tomar total responsabilidade por sua escolha. Deus é inocente.",
          source: "A República, Livro X, 617e (Mito de Er)"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Poética",
      paragraphs: [
        "Aristóteles não trata o destino como categoria metafísica — essa discussão ele deixa para os teólogos e cosmólogos. O que lhe interessa na Poética é a lógica dramática do destino: como o destino opera dentro de uma narrativa trágica de modo a produzir o efeito de piedade e terror no espectador.",
        "Os dois conceitos aristotélicos centrais são hamartia (a falha trágica que precipita a queda do herói) e peripéteia (a reviravolta, a mudança de boa fortuna para má ou vice-versa). O destino trágico eficaz não resulta de um herói perfeitamente virtuoso destruído por força arbitrária — isso produziria revolta, não catarse. Ele resulta de um herói que, sendo essencialmente bom, comete um erro de julgamento cujas consequências se revelam progressivamente devastadoras.",
        "A anagnorisis — o reconhecimento, a passagem da ignorância ao conhecimento — é o momento em que o destino se revela ao herói. Em Édipo, é quando ele descobre quem é. O terror que isso provoca no espectador vem do reconhecimento de que o herói não era ignorante por covardia ou má-fé, mas porque o destino estava oculto na textura das próprias ações.",
        "Aristóteles desloca o destino do plano cosmológico para o plano narrativo. O que importa não é se Édipo estava 'destinado' por forças cósmicas, mas se a sequência de ações que o levou à ruína obedece à necessidade ou verossimilhança interna. O destino eficaz, para Aristóteles, é aquele que parece inevitável em retrospecto sem ter parecido inevitável no momento — isso é o que produz a experiência trágica autêntica."
      ],
      quotes: [
        {
          text: "A reviravolta de intenção é uma mudança pela qual a ação gira para o seu oposto... O reconhecimento é uma mudança da ignorância para o conhecimento.",
          source: "Poética, Capítulo XI"
        }
      ]
    },
    {
      thinkerId: "boethius",
      keyWork: "A Consolação da Filosofia",
      paragraphs: [
        "Boécio escreveu A Consolação da Filosofia na prisão, aguardando a execução. A Fortuna que o havia elevado ao cargo de cônsul e depois o derrubou é a protagonista de uma das imagens mais duradouras da Idade Média: a Roda da Fortuna. A própria Fortuna fala na obra e declara sua natureza: ela gira continuamente, eleva quem estava em baixo e derruba quem estava em cima. Não é crueldade — é sua essência. Quem confia nos dons da Fortuna está confiando em algo que é, por definição, instável.",
        "Boécio distingue entre Fortuna (o destino mundano, variável) e Providência (o plano divino estável que dirige tudo ao bem). Por trás da aparente arbitrariedade da Fortuna existe uma Providência que Deus conhece integralmente, embora os humanos não possam apreendê-la. O mal que nos parece injusto pode ser, do ponto de vista da eternidade, um bem disfarçado.",
        "O problema mais agudo que Boécio formula — e que dominará a teologia medieval — é a tensão entre providência e livre-arbítrio. Se Deus conhece todos os eventos futuros, inclusive as escolhas humanas, como pode o humano ser livre? Boécio resolve com o conceito de eternidade divina: Deus não conhece o futuro como futuro, mas como eterno presente. O que, para nós, ainda não aconteceu, para Deus já está diante de si. A presciência divina não constrange a escolha humana assim como ver alguém caminhar não o força a caminhar.",
        "A Consolação tornou-se um dos livros mais lidos da Idade Média — traduzido por Alfred, o Grande, por Chaucer e por Rainha Elizabeth I. A Roda da Fortuna penetrou na iconografia e na literatura medievais como a imagem mais precisa do que o destino mundano pode fazer: elevar e derrubar, sem distinção de mérito."
      ],
      quotes: [
        {
          text: "Giro a roda que gira. Alegro-me em ver o alto descer e o baixo ascender. Sobe se queres, mas, pela mesma regra, não tomes como ofensa descer quando é minha lei.",
          source: "A Consolação da Filosofia, Livro II, Prosa 2 (Fortuna falando)"
        }
      ]
    },
    {
      thinkerId: "dante",
      keyWork: "Divina Comédia",
      paragraphs: [
        "A Divina Comédia é o grande poema do destino redimido. Dante herda de Boécio a distinção entre Fortuna e Providência e a integra num sistema teológico completo: o Inferno mostra o destino eterno dos que escolheram o amor próprio acima de tudo; o Purgatório, o caminho de purificação dos que escolheram bem mas com amor mal ordenado; o Paraíso, a plenitude do destino para os que chegaram a amar o que merece ser amado.",
        "O livre-arbítrio é preservado integralmente. A inscrição no portal do Inferno — 'Abandonai toda esperança, vós que entrais' — sela um destino eterno, mas esse destino é sempre autoinfligido. Ninguém está no Inferno por decreto arbitrário divino; cada condenado está exatamente onde suas escolhas o colocaram. A Providência de Dante não anula a liberdade — a confirma, tornando cada escolha eternamente consequente.",
        "A teleologia dantesca substitui a fatalidade trágica. Na tragédia grega, o destino é aquilo de que não se escapa; em Dante, o destino é o lugar aonde as escolhas chegam. O Paraíso não é uma recompensa externa — é a consumação do desejo que foi gradualmente purificado e orientado. O verso final — 'o amor que move o sol e as outras estrelas' — é ao mesmo tempo cosmologia e antropologia: a força que rege o universo é a mesma que, quando alinhada com a vontade humana, constitui a bem-aventurança.",
        "Dante unifica o destino grego, a providência cristã e o amor neoplatônico numa única visão coerente. O ser humano não está submetido a um destino cego, nem é completamente livre de consequências; está situado num cosmos onde a liberdade e o amor são a mesma coisa quando plenamente exercidos."
      ],
      quotes: [
        {
          text: "Abandonai toda esperança, vós que entrais.",
          source: "Inferno, Canto III, verso 9"
        },
        {
          text: "O amor que move o sol e as outras estrelas.",
          source: "Paraíso, Canto XXXIII, verso final"
        }
      ]
    },
    {
      thinkerId: "shakespeare",
      keyWork: "Macbeth / Hamlet",
      paragraphs: [
        "Shakespeare explora o destino como tensão irresolvida — e jamais a resolve. Em Macbeth, as bruxas profetizam que Macbeth será rei; mas a profecia não determina o como. É a ambição que a profecia desperta, e a ambição de Lady Macbeth que acelera as coisas, que transforma uma possibilidade em ato. O destino cria o campo; a escolha humana executa.",
        "Macbeth é ao mesmo tempo vítima e autor de seu destino. Ele poderia ter esperado; a profecia não dizia quando. Escolheu acelerar e pagou com a paranoia, os assassinatos em série e a dissolução moral. As bruxas não mentiram — disseram a verdade de um modo que a ambição humana não conseguiu ouvir sem distorcer.",
        "Hamlet é o oposto complementar. Onde Macbeth age rápido demais, Hamlet hesita. O fantasma do pai impõe-lhe um destino — vingar o assassinato — que Hamlet resiste, procrastina, questiona. Essa resistência também é parte do destino: Hamlet reconcilia livre-arbítrio e providência no quinto ato com a famosa frase — 'há uma divindade que molda nossos fins, por mais que os desbastemos à nossa maneira'. O homem esboça; a divindade conclui.",
        "O corpus shakespeariano contém, ao mesmo tempo, as duas posições. Cássio diz a Brutus que a culpa não está nas estrelas, mas em nós mesmos — posição antifatalista clara. Hamlet diz que há uma divindade que molda nossos fins — posição providencialista. Shakespeare não escolhe entre elas; apresenta o problema em toda a sua complexidade e deixa o espectador com a tensão intacta."
      ],
      quotes: [
        {
          text: "Há uma divindade que molda nossos fins, por mais que os desbastemos à nossa maneira.",
          source: "Hamlet, Ato V, Cena 2"
        },
        {
          text: "A culpa, caro Brutus, não está em nossas estrelas, mas em nós mesmos, que somos inferiores.",
          source: "Júlio César, Ato I, Cena 2 (Cássio a Brutus)"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Crítica da Razão Pura / Crítica da Razão Prática",
      paragraphs: [
        "Kant dissolve o destino como categoria metafísica ao separar rigorosamente dois domínios: o da natureza, onde impera a causalidade necessária e determinista, e o da razão prática, onde a liberdade é postulada como condição de possibilidade do dever moral. O 'destino' no sentido fatalista pertence ao primeiro domínio — é a cadeia causal que a física descreve. Mas o humano como agente moral pertence ao segundo.",
        "O ser humano é o único ente que Kant coloca em dois mundos simultaneamente: como fenômeno, está sujeito às leis da natureza; como noumeno, como ser racional, é livre. Essa dualidade não é uma contradição — é a estrutura mesma do humano. Quando Kant diz que devemos agir de certo modo, pressupõe que podemos — e 'poder' implica liberdade real, não determinismo mascarado.",
        "A consequência para o debate sobre o destino é dupla. De um lado, Kant invalida qualquer astrologismo ou fatalismo que pretenda ler o destino nas estrelas ou nos eventos externos: o reino da natureza é causal, não teleológico no sentido providencial. De outro, rejeita também o ceticismo radical sobre a liberdade: sem liberdade, não há moralidade, não há imputação, não há responsabilidade.",
        "A imagem final da Crítica da Razão Prática — os dois objetos de admiração crescente: o céu estrelado acima e a lei moral dentro de mim — captura a dualidade kantiana. O céu estrelado representa o determinismo cosmológico; a lei moral representa a liberdade. Os dois coexistem sem se contradizer. Essa coexistência é a resposta kantiana à questão que os gregos, Boécio, Dante e Shakespeare deixaram aberta."
      ],
      quotes: [
        {
          text: "Duas coisas enchem a mente de admiração e reverência sempre crescentes: o céu estrelado acima de mim e a lei moral dentro de mim.",
          source: "Crítica da Razão Prática, Conclusão"
        }
      ]
    }
  ]
};

const deusEssay: IdeaEssay = {
  slug: "deus",
  title: "A conversa sobre Deus",
  introduction:
    "Da ordenação racional do cosmos pelo Demiurgo platônico ao diagnóstico nietzscheano da morte cultural de Deus, a conversa sobre Deus atravessa toda a tradição ocidental como o debate mais fundamental sobre o fundamento de tudo o mais — conhecimento, moral, política, sentido.",
  sourceNote:
    "Texto em português preparado com base no arquivo source_deus.md e nos textos primários do corpus Great Books.",
  sections: [
    {
      thinkerId: "plato",
      keyWork: "Timeu",
      paragraphs: [
        "O Timeu apresenta a cosmologia mais influente da Antiguidade: um Demiurgo — artesão divino, não criador onipotente — que, contemplando as Formas eternas como modelo, imprime ordem ao caos original e produz o mundo visível. Deus não cria o universo do nada (ex nihilo) — ele organiza a matéria pré-existente segundo o padrão do bem e do belo.",
        "A bondade do Demiurgo é a explicação para a bondade do cosmos. Porque o criador é bom e deseja que tudo se assemelhe o máximo possível a ele, o universo que ele produz é ordenado, inteligível e tende ao bem. O cosmos é racional porque tem origem racional. O caos original — a matéria sem forma — não tem bondade; a bondade é o que a razão divina introduz ao ordenar.",
        "O Demiurgo platônico não é pessoal no sentido cristão: não intervém na história, não ouve orações, não se envolve com os humanos individualmente. É razão pura orientada para o bem, artesão que faz o melhor possível com o material disponível. O 'possível' é importante: há uma resistência da matéria ao plano divino, e é por isso que o mundo não é perfeito.",
        "Essa cosmologia estabelece os termos do debate filosófico sobre Deus para os séculos seguintes. Deus como razão ordenadora, como bondade fundamental, como origem da inteligibilidade do cosmos — essas ideias serão retomadas, transformadas e contestadas por Aristóteles, pelos neoplatônicos, pelos teólogos cristãos e pelos filósofos modernos."
      ],
      quotes: [
        {
          text: "O deus, desejando que todas as coisas fossem boas e, tanto quanto possível, nada fosse imperfeito, encontrando o universo visível num estado não de repouso mas de movimento inarmônico e desordenado, reduziu-o da desordem à ordem.",
          source: "Timeu, 30a"
        }
      ]
    },
    {
      thinkerId: "aristotle",
      keyWork: "Metafísica",
      paragraphs: [
        "O Deus de Aristóteles é radicalmente diferente do Demiurgo platônico. O Primeiro Motor Imóvel, apresentado no Livro XII da Metafísica, é ato puro — ser sem potencialidade, sem matéria, sem mudança. Tudo o que existe no cosmos está em movimento; todo movimento requer uma causa; a cadeia de causas não pode ser infinita; portanto, deve existir um primeiro motor que move sem ser movido.",
        "Mas como o Primeiro Motor move sem ser movido? Não como causa eficiente — não empurrando ou puxando as coisas. Ele move como causa final: como o objeto do desejo e do amor. Assim como o amado move o amante sem se mover, o Primeiro Motor atrai o cosmos para si. O universo está, em algum sentido, apaixonado por Deus — ou pelo bem que Deus representa.",
        "A atividade divina é noesis noeseos — pensamento que pensa a si mesmo, contemplação pura. Deus não pensa o mundo, não conhece as criaturas individualmente, não se preocupa com os humanos. Pensar algo inferior à sua perfeição seria diminuir-se. Deus é a perfeição autossuficiente que serve de polo de atração para todo o movimento cósmico, sem nunca se engajar com o particular.",
        "O Deus aristotélico é profundamente diferente do Deus pessoal das tradições abraâmicas. Não cria, não governa, não ama no sentido usual. Mas a sua estrutura formal — ato puro, causa final, pensamento puro — será incorporada por Tomás de Aquino ao projeto de síntese entre razão grega e fé cristã, tornando-se o esqueleto filosófico da teologia escolástica."
      ],
      quotes: [
        {
          text: "O pensamento pensa a si mesmo porque participa da natureza do objeto do pensamento; pois torna-se objeto de pensamento ao entrar em contato e pensar seus objetos, de modo que pensamento e objeto do pensamento são o mesmo.",
          source: "Metafísica, Livro XII (Lambda), 1072b"
        },
        {
          text: "Há algo que move sem ser movido, sendo eterno, substância e atualidade... E o objeto do desejo e o objeto do pensamento movem desta maneira; movem sem serem movidos.",
          source: "Metafísica, Livro XII (Lambda), 1072a"
        }
      ]
    },
    {
      thinkerId: "augustine",
      keyWork: "Confissões / A Cidade de Deus",
      paragraphs: [
        "Agostinho é o primeiro pensador a partir de uma crise pessoal para uma teologia filosófica de âmbito universal. As Confissões abrem com uma das frases mais citadas da história do pensamento ocidental: 'Fizeste-nos para Ti, e nosso coração está inquieto até que repousa em Ti.' A inquietude não é uma falha moral — é a estrutura ontológica do ser humano criado por Deus e incompleto sem ele.",
        "O percurso agostiniano até Deus passa pelo maniqueísmo (que explicava o mal com um segundo princípio divino) e pelo neoplatonismo (que apontava para a imaterialidade e a transcendência do bem) antes de chegar ao Deus cristão. A contribuição específica do neoplatonismo foi mostrar que Deus não pode ser uma substância corpórea — que a verdade é interior, imaterial, imutável. A contribuição específica do Evangelho foi mostrar que esse Deus imaterial e transcendente se tornou carne e sofreu.",
        "A frase do Livro X das Confissões — 'tarde Te amei, ó Beleza tão antiga e tão nova; tarde Te amei!' — captura o paradoxo agostiniano: Deus estava dentro de mim o tempo todo, e eu o buscava fora. A busca exterior — nos livros, nos prazeres, nas honras — era a busca pela coisa errada no lugar errado. A conversão é a inversão de direção: de fora para dentro, do múltiplo para o uno.",
        "A Cidade de Deus desenvolve as implicações políticas dessa teologia. Há duas cidades que se entrelaçam na história: a Cidade de Deus, cujos membros amam a Deus acima de tudo, e a cidade terrena, cujos membros amam a si mesmos acima de Deus. A história humana é o drama do conflito e entrelaçamento dessas duas cidades — até o julgamento final que as separará definitivamente."
      ],
      quotes: [
        {
          text: "Fizeste-nos para Ti, e nosso coração está inquieto até que repousa em Ti.",
          source: "Confissões, Livro I, Capítulo 1"
        },
        {
          text: "Tarde Te amei, ó Beleza tão antiga e tão nova; tarde Te amei! Pois eis que Tu estavas dentro de mim e eu estava fora; e eu Te buscava fora.",
          source: "Confissões, Livro X, Capítulo 27"
        }
      ]
    },
    {
      thinkerId: "anselm",
      keyWork: "Proslogion",
      paragraphs: [
        "Anselmo de Cantuária produziu o argumento mais audacioso da história da filosofia da religião: a prova ontológica da existência de Deus. O argumento parte não do mundo externo, mas do próprio conceito de Deus: Deus é 'aquilo além do qual nada maior pode ser concebido' (id quo maius cogitari nequit). Se esse ser existisse apenas no intelecto e não na realidade, poder-se-ia conceber algo maior — um ser que existisse tanto no intelecto quanto na realidade. Mas isso contradiz a definição. Logo, Deus necessariamente existe.",
        "O argumento opera puramente a partir do conceito de Deus — não precisa de evidências empíricas, não precisa de experiências religiosas, não precisa de revelação. A própria ideia de Deus como o maior ser concebível implica sua existência. É o primeiro argumento a priori da teologia filosófica ocidental.",
        "O 'insensato' do Salmo 14 — aquele que disse no coração que não há Deus — funciona como interlocutor interno do argumento. Anselmo concede que o insensato nega Deus, mas argumenta que mesmo ao negar, ele tem em mente o conceito do maior ser concebível. E ter esse conceito na mente e ao mesmo tempo afirmar que ele não existe na realidade é uma contradição.",
        "Anselmo vai além do próprio argumento no capítulo 15 do Proslogion: Deus é não apenas aquilo além do qual nada maior pode ser concebido, mas algo maior do que qualquer coisa que possa ser concebida. Deus transcende até o limite do concebível — antecipando a teologia negativa que afirma que Deus está sempre além de qualquer conceito que dele formemos."
      ],
      quotes: [
        {
          text: "E cremos que Tu és um ser além do qual nada maior pode ser concebido.",
          source: "Proslogion, Capítulo 2"
        },
        {
          text: "Portanto, Senhor, não só és aquilo além do qual nada maior pode ser concebido, mas és algo maior do que pode ser concebido.",
          source: "Proslogion, Capítulo 15"
        }
      ]
    },
    {
      thinkerId: "aquinas",
      keyWork: "Suma Teológica",
      paragraphs: [
        "Tomás de Aquino não começa pela fé e busca racionalizá-la — começa pela razão e mostra que ela conduz ao mesmo lugar que a fé. A Suma Teológica abre com as Cinco Vias, cinco caminhos que partem de efeitos observáveis no mundo e chegam a Deus como sua causa necessária. São provas a posteriori, não a priori como Anselmo: partem da experiência, não do conceito.",
        "A Primeira Via — a do movimento — herda diretamente Aristóteles: tudo o que se move é movido por outro; a cadeia não pode ser infinita; logo, existe um Primeiro Motor Imóvel. As outras quatro seguem estruturas paralelas: a cadeia de causas eficientes (Segunda Via), a contingência dos seres (Terceira Via), os graus de perfeição (Quarta Via) e a ordem teleológica dos seres não racionais (Quinta Via). Cada uma conclui num Ser Necessário, Causa Primeira, Perfeição Máxima ou Inteligência Ordenadora — e esse ser, diz Aquino, 'todos entendem que é Deus'.",
        "Além das provas, Aquino trabalha a questão do mal: como pode um Deus bom e onipotente permitir o mal? A resposta, herdada de Agostinho e sistematizada por Aquino, é que o mal é privatio boni — privação de bem, não uma substância independente. Deus não cria o mal; o mal é o que acontece quando algo bom é corrompido ou está incompleto. O fogo é bom; a queimadura é privação da integridade do tecido, não uma coisa criada por Deus.",
        "A síntese tomista é o projeto mais ambicioso de harmonização entre razão e fé na história do pensamento cristão. Razão e revelação não se contradizem — percorrem dois caminhos para a mesma verdade. A razão chega a Deus como Ser Necessário e Causa Primeira; a revelação acrescenta que esse Deus é amor, que se encarna, que redime. O que a razão não pode alcançar — os mistérios da Trindade, da Encarnação, da graça — não contradiz a razão; simplesmente a excede."
      ],
      quotes: [
        {
          text: "É evidente para nossos sentidos que algumas coisas se movem. Ora, tudo o que é movido é movido por outro... Portanto, é necessário chegar a um primeiro motor, movido por nenhum outro; e isso todos entendem que é Deus.",
          source: "Suma Teológica, Parte I, Questão 2, Artigo 3 (Primeira Via)"
        }
      ]
    },
    {
      thinkerId: "dante",
      keyWork: "Divina Comédia",
      paragraphs: [
        "Dante não prova Deus — ele o vê. A Divina Comédia é a tentativa mais ambiciosa da literatura ocidental de converter em experiência poética o que a teologia expressou em argumentos. O poema inteiro é uma allegoria da alma que, extraviada no meio do caminho da vida, precisa percorrer o Inferno, o Purgatório e o Paraíso para recuperar a orientação correta — e essa orientação correta é Deus.",
        "No Paraíso, Dante se aproxima gradualmente da luz divina — cada esfera celeste que sobe é uma intensificação da luminosidade e da beatitude. O problema é que a luz final excede a capacidade de ver e de lembrar: o poeta admite que não consegue descrever o que viu porque sua memória não suportou a intensidade. Só pode registrar o efeito: sua vontade e seu desejo foram colocados em movimento perfeito, 'como uma roda que gira com movimento uniforme, pelo Amor que move o sol e as outras estrelas'.",
        "Dante unifica as grandes tradições sobre Deus que o precederam. Do Demiurgo platônico herda a ideia de Deus como razão ordenadora do cosmos. Do Primeiro Motor aristotélico herda a ideia de Deus como polo de atração de todo movimento. De Agostinho herda a ideia de Deus como Beleza interior que a alma busca fora antes de encontrar dentro. De Aquino herda a arquitetura teológica que estrutura os três reinos da Comédia.",
        "O Deus de Dante é simultaneamente transcendente (acima de qualquer capacidade humana de compreender) e imanente (sua glória penetra e ilumina gradualmente toda a realidade, em um lugar mais e em outro menos). Os versos de abertura do Paraíso estabelecem isso: a glória divina atravessa o universo e brilha em um lugar mais e em outro menos — essa gradação da luz é a estrutura do cosmos dantesco."
      ],
      quotes: [
        {
          text: "Mas agora meu desejo e minha vontade, como uma roda que gira com movimento uniforme, eram movidos pelo Amor que move o sol e as outras estrelas.",
          source: "Divina Comédia, Paraíso, Canto XXXIII, versos 143-145"
        }
      ]
    },
    {
      thinkerId: "descartes",
      keyWork: "Meditações sobre Filosofia Primeira",
      paragraphs: [
        "Descartes recomeça a filosofia do zero — e Deus é indispensável ao projeto. Depois de estabelecer o cogito (penso, logo existo) como única certeza indubitável, Descartes pergunta: de onde vem a ideia de um ser infinitamente perfeito na minha mente finita? A ideia de infinito não pode ter sido produzida por uma mente finita — o efeito não pode ter mais realidade que a causa. Logo, deve existir um ser realmente infinito que plantou essa ideia em mim: Deus.",
        "O argumento cartesiano é uma versão do argumento cosmológico, mas com uma torção: parte não do mundo externo, mas da existência do sujeito que tem a ideia de Deus. É subjetivo sem ser puramente conceitual como o argumento de Anselmo — a existência do eu que tem a ideia é o ponto de partida, não a análise do conceito de Deus.",
        "Uma vez provada a existência de Deus, Descartes usa a perfeição divina como âncora epistemológica. Porque Deus é perfeito, ele não é enganador. Porque não é enganador, garante que as percepções claras e distintas da razão correspondem à realidade. Sem Deus, o cogito ficaria suspenso numa bolha de certeza subjetiva sem qualquer conexão com o mundo externo — o que os contemporâneos chamaram de 'problema do mundo externo'. Deus é o que conecta a mente e o mundo.",
        "A consequência filosófica é que toda a ciência moderna, para Descartes, repousa em última análise sobre a garantia divina. O método matemático-dedutivo que ele propõe é confiável porque Deus garantiu a confiabilidade da razão. Os ataques posteriores à existência de Deus — de Hume, de Kant, de Nietzsche — terão, portanto, implicações que vão muito além da teologia: ameaçam a fundação do edifício do conhecimento tal como Descartes o construiu."
      ],
      quotes: [
        {
          text: "O simples fato de que existo e tenho dentro de mim uma ideia de um ser mais perfeito — isto é, Deus — fornece uma prova muito clara de que Deus de fato existe.",
          source: "Meditações sobre Filosofia Primeira, Meditação III"
        }
      ]
    },
    {
      thinkerId: "spinoza",
      keyWork: "Ética",
      paragraphs: [
        "Espinosa produziu a teologia mais radical da era moderna: Deus é a Natureza, e a Natureza é Deus (Deus sive Natura). Não existe nada fora de Deus — tudo o que existe são modos, expressões de uma única substância infinita com infinitos atributos. Pensar Deus como um ser pessoal que criou o mundo de fora e intervém nele é uma projeção antropomórfica, não um argumento filosófico.",
        "A Ética de Espinosa é organizada more geometrico — como um sistema de geometria, com definições, axiomas, proposições e demonstrações. A existência de Deus não é uma questão de fé ou de argumento empírico: decorre com necessidade lógica das definições. Assim como os ângulos de um triângulo somam necessariamente 180 graus, assim Deus necessariamente existe — porque a definição de substância como aquilo que existe por si mesmo e é concebido por si mesmo implica que há exatamente uma substância desse tipo, e ela é infinita.",
        "A consequência mais perturbadora é que não há milagres, não há providência pessoal, não há oração que altere o curso dos eventos. Tudo segue de Deus com necessidade geométrica — não porque Deus quis assim, mas porque o sistema racional do cosmos não poderia ser de outro modo. Livre-arbítrio é, para Espinosa, uma ilusão nascida da ignorância das causas que nos determinam.",
        "Paradoxalmente, a liberdade em Espinosa não é ausente — é redefinida. Somos livres quando agimos a partir da necessidade da nossa própria natureza, quando entendemos as causas que nos determinam e as acolhemos com alegria em vez de resistir a elas com paixões tristes. O amor intelectual a Deus — a compreensão sub specie aeternitatis da necessidade do cosmos — é a forma mais alta de liberdade e beatitude que Espinosa conhece."
      ],
      quotes: [
        {
          text: "Por Deus entendo um ser absolutamente infinito, isto é, uma substância que consiste em infinitos atributos, cada um dos quais exprime uma essência eterna e infinita.",
          source: "Ética, Parte I, Definição VI"
        },
        {
          text: "Tudo o que é, é em Deus, e nada pode ser ou ser concebido sem Deus.",
          source: "Ética, Parte I, Proposição XV"
        }
      ]
    },
    {
      thinkerId: "kant",
      keyWork: "Crítica da Razão Pura / Crítica da Razão Prática",
      paragraphs: [
        "Kant executa a crítica mais sistemática e influente das provas tradicionais da existência de Deus. Na Dialética Transcendental da Crítica da Razão Pura, examina os três argumentos clássicos — ontológico (Anselmo, Descartes), cosmológico (Aquino) e físico-teológico (o argumento do design) — e mostra que todos eles cometem o mesmo erro: aplicam conceitos do entendimento (como causalidade, substância, perfeição) para além do âmbito da experiência possível, onde esses conceitos têm uso legítimo.",
        "O argumento ontológico falha porque existência não é um predicado — afirmar que algo existe não acrescenta nada ao conceito do objeto. Posso conceber um ser perfeito; mas a perfeição do conceito não garante a existência da coisa concebida. O argumento cosmológico falha porque a lei de causalidade só vale dentro da experiência, não pode ser aplicada à totalidade do cosmos para concluir uma causa primeira fora dela. O argumento físico-teológico falha por razões similares.",
        "Mas Kant não é ateu — ele apenas limita o âmbito da razão teórica. A Crítica da Razão Prática reintroduz Deus como postulado necessário da moralidade. A lei moral exige que virtude e felicidade se harmonizem no sumo bem. Mas a natureza não garante essa harmonia — os virtuosos podem sofrer, os injustos podem prosperar. Para que a moralidade faça sentido completo, precisa existir um ser que garanta, a longo prazo, a correspondência entre virtude e felicidade. Esse ser é Deus — não provado, mas postulado como condição de possibilidade da vida moral.",
        "A frase mais célebre de Kant sobre religião resume tudo: 'tive de negar o conhecimento para abrir espaço para a fé'. O limite do conhecimento especulativo é a condição de possibilidade da fé moral. Deus não pode ser objeto de ciência; pode ser objeto de fé racional fundada na exigência da moralidade."
      ],
      quotes: [
        {
          text: "O ideal do Ser Supremo não é nada além de um princípio regulativo da razão, que nos dirige a olhar toda conexão no mundo como se ela se originasse de uma causa necessária e suficiente.",
          source: "Crítica da Razão Pura, Dialética Transcendental, Livro II"
        },
        {
          text: "Tive de negar o conhecimento para abrir espaço para a fé.",
          source: "Crítica da Razão Pura, Prefácio à Segunda Edição"
        }
      ]
    },
    {
      thinkerId: "nietzsche",
      keyWork: "A Gaia Ciência / Assim Falou Zaratustra",
      paragraphs: [
        "'Deus está morto' — a proclamação do louco na Gaia Ciência (§125) não é um argumento filosófico contra a existência de Deus. É um diagnóstico cultural: a civilização europeia, ao desenvolver sua própria racionalidade crítica, sua ciência e seu historicismo, tornou inviável a crença sincera no Deus cristão como fundamento da vida e dos valores. A morte de Deus não é um evento teológico — é um evento cultural que ainda não foi absorvido em todas as suas consequências.",
        "O 'nós' que matou Deus é a própria modernidade racional — não os ateus declarados, mas toda a tradição de busca pela verdade que o próprio Deus cristão havia iniciado. A honestidade intelectual que o Deus da moral cristã exigia tornou-se, por fim, incompatível com a crença no próprio Deus. Nietzsche vê nisso uma ironia histórica profunda.",
        "O problema não é a morte de Deus em si — é o vácuo que deixa. Todos os valores morais e epistemológicos do Ocidente haviam sido fundamentados em Deus. Sem esse fundamento, eles perdem o alicerce. O niilismo — a conclusão de que nada tem valor, de que tudo é indiferente — é a sombra que avança sobre a Europa depois da morte de Deus. O louco que anuncia a morte de Deus na praça pública encontra apenas riso e incompreensão: as pessoas ainda não entenderam o que fizeram.",
        "A resposta nietzscheana não é o luto — é a criação de novos valores. O além-do-homem (Übermensch) é o projeto de uma humanidade que, em vez de se agarrar aos valores mortos ou desabar no niilismo, assume a tarefa de criar novos valores a partir da afirmação da vida. Zaratustra desce da montanha não para pregar uma nova doutrina, mas para ensinar como se transforma o espírito: de camelo (que carrega o peso da tradição) em leão (que diz 'não' aos valores estabelecidos) em criança (que cria novos valores com inocência e leveza)."
      ],
      quotes: [
        {
          text: "Deus está morto. Deus permanece morto. E nós o matamos. Como nos consolaremos, nós, os assassinos de todos os assassinos?",
          source: "A Gaia Ciência, §125 — 'O Louco'"
        },
        {
          text: "Que festas expiatórias, que jogos sagrados teremos de inventar? A grandeza deste ato não é demasiado grande para nós? Não devemos nós mesmos nos tornar deuses para simplesmente parecer dignos dela?",
          source: "A Gaia Ciência, §125 — 'O Louco'"
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
  [democracyEssay.slug]: democracyEssay,
  [prazerEDorEssay.slug]: prazerEDorEssay,
  [honraEssay.slug]: honraEssay,
  [habitoEssay.slug]: habitoEssay,
  [temperancaEssay.slug]: temperancaEssay,
  [costumeEConvencaoEssay.slug]: costumeEConvencaoEssay,
  [liberdadeEssay.slug]: liberdadeEssay,
  [governoEssay.slug]: governoEssay,
  [leiEssay.slug]: leiEssay,
  [estadoEssay.slug]: estadoEssay,
  [riquezaEssay.slug]: riquezaEssay,
  [guerraEPazEssay.slug]: guerraEPazEssay,
  [destinoEssay.slug]: destinoEssay,
  [deusEssay.slug]: deusEssay
};

export function getIdeaEssay(slug: string) {
  return ideaEssays[slug];
}
