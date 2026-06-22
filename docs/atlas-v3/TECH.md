# Atlas das Seis Ideias v3 — Especificação Técnica

## Estado inicial

Base inspecionada: commit `c86dc3c78e61851aa9aea0ccb1e8c946b894fde8`.

O repositório já possui dados progressivos em `public/data/atlas-six-ideas`, loaders tipados e componentes v2. A v3 reutilizará esses dados e substituirá a superfície visual sem apagar a v2 durante a implementação.

## Arquitetura

- `components/atlas/v3/AtlasShellV3.tsx`: carregamento paralelo, estado e composição.
- `components/atlas/v3/AtlasSidebarV3.tsx`: ideias, busca e legenda.
- `components/atlas/v3/AtlasGraphV3.tsx`: canvas SVG/HTML sincronizado, zoom e pan.
- `components/atlas/v3/AtlasInspectorV3.tsx`: conteúdo do estado ativo.
- `components/atlas/v3/AtlasMobileDrawerV3.tsx`: detalhe mobile.
- `components/home/HomeConstellation.tsx`: entrada interativa na homepage.
- `lib/atlas-six-ideas/v3-model.ts`: reducer sem modos Adler/Syntopicon/Fundida.
- `lib/atlas-six-ideas/v3-layout.ts`: layouts determinísticos com limite de nós.
- `lib/atlas-six-ideas/v3-content.ts`: traduções, capítulos e agrupamentos editoriais.

## Estados

`home → idea → synthesis-group | syntopicon-topics → topic → subtopic → relations`

## Dados

- O overview e os arquivos por ideia continuam sendo carregados progressivamente.
- A UI não renderiza referências individuais nesta fase.
- Contagens de referência podem existir nos dados, mas a interface as rotula como auditoria posterior.
- Relações contextuais usam filhos estruturais, `cross_reference` e um mapa editorial explícito; cada aresta informa seu tipo.

## Renderização

- Nós e arestas compartilham a mesma transformação matemática para impedir dessincronização no zoom.
- Layouts são memoizados e determinísticos.
- O limite de nós é aplicado antes da renderização.
- Títulos longos são quebrados em até três linhas, não truncados silenciosamente.

## Validação

- TypeScript e build de produção.
- Contagem máxima de nós por layout.
- Testes visuais em 1440×900 e 390×844.
- Fluxo: homepage → Justiça → Syntopicon → Justiça econômica → Explorar relações → Voltar à estrutura.
- `design-qa.md` obrigatório antes do deploy.
