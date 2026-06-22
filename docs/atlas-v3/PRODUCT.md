# Atlas das Seis Ideias v3 — Especificação de Produto

## Objetivo

Transformar o Atlas em principal porta de entrada de **A Grande Conversa**, preservando as seis ideias em um único mapa e oferecendo aprofundamento progressivo sem exibir o corpus inteiro simultaneamente.

## Referência visual aprovada

`C:\Users\Usuario\.codex\generated_images\019ee53c-a082-72b2-a138-17abe85ee5a6\exec-1df71597-ebf7-4e5a-bf7f-98f1338875ad.png`

## Experiência aprovada

### Homepage

- O Atlas aparece no primeiro campo visual após o cabeçalho.
- As seis ideias permanecem juntas e clicáveis.
- `Julgar` e `Agir` são marcadores discretos, nunca filtros ou nós.
- Selecionar uma ideia abre `/mapa/sgi?idea=<idea>`.

### Atlas

- Não existem modos `Adler`, `Syntopicon` ou `Fundida`.
- A camada conceitual é denominada **Síntese das Seis Ideias**.
- Cada ideia abre dois ramos: Síntese das Seis Ideias e Syntopicon.
- Um agrupamento detalhado aberto recolhe os demais.
- Limite visual: 25 nós no desktop e 15 no mobile.

### Justiça

- A Síntese apresenta quatro grupos: 8 aspectos, 5 capítulos, perguntas e 6 tensões.
- O Syntopicon apresenta 11 tópicos oficiais.
- Um tópico revela somente seus subtópicos.
- Referências, autores, obras, volumes e passagens aparecem apenas como etapa posterior de auditoria.

### Explorar relações

- Um tópico ou subtópico oferece a ação `Explorar relações`.
- O nó selecionado ocupa o centro.
- O primeiro anel mostra seus filhos estruturais.
- O segundo anel mostra relações cruzadas ou conceitos contextuais.
- Linhas sólidas indicam hierarquia direta; tracejadas, remissão cruzada; pontilhadas, relação editorial/inferida.
- Clique fixa o caminho; outro clique recentraliza; `Voltar à estrutura` retorna ao mapa hierárquico.
- O modo contextual não inventa referências nem passagens.

## Identidade

- Fundo verde quase preto.
- Texto marfim, serif editorial em títulos e sans-serif em controles.
- Dourado envelhecido para a Síntese.
- Violeta para Syntopicon.
- Verde e azul-violeta somente para classificar Agir e Julgar.
- Bordas finas, cantos discretos, sem glassmorphism ou estética de dashboard genérico.

## Responsividade

- Desktop: lista de ideias à esquerda, canvas central e inspetor à direita.
- Mobile: controles compactos, canvas útil e inspetor em gaveta inferior.
- Não depender exclusivamente de hover.

## Critérios de sucesso

- Homepage inicia pelo Atlas.
- Justiça reproduz a arquitetura aprovada.
- Tópicos e subtópicos são progressivos.
- `Explorar relações` funciona e permanece abaixo do limite de nós.
- Busca, teclado, foco, zoom, pan e recentralização funcionam.
- `npx tsc --noEmit` e `npm run build` passam.
- QA visual desktop e mobile aprovado contra a referência.
- Produção publicada e URLs verificadas.

