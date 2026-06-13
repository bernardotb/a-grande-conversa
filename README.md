# A Grande Conversa

Edição em português do Brasil inspirada no Great Conversation Map, construída
com Next.js, App Router, TypeScript, Tailwind CSS e conteúdo local em JSON.

O acervo principal contém:

- 102 Grandes Ideias e 1.088 posições de pensadores;
- 263 obras de 74 autores;
- 4 planos de leitura, com 56 etapas ao todo;
- relações entre ideias, pensadores, obras e percursos.

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para testar a versão de produção:

```bash
npm run build
npm start
```

## Onde editar o conteúdo

Os catálogos usados pelas páginas principais estão em:

- `data/syntopicon.json`: 102 ideias, perguntas e posições dos pensadores;
- `data/book-index.json`: catálogo completo de obras;
- `data/reference-plans.json`: planos e etapas de leitura;
- `data/idea-index.json`: nomes e slugs das ideias.

Os demais arquivos JSON da pasta `data/` mantêm dados editoriais
complementares e as páginas de autores, categorias e mapa.

## Como adicionar uma ideia

1. Crie a entrada em `data/syntopicon.json` com um `slug` único.
2. Adicione o mesmo slug e seu domínio em `data/idea-index.json`.
3. Relacione obras pelo campo `ideas` de `data/book-index.json`.
4. Rode `npm run build` para validar e gerar a nova página.

As URLs individuais são criadas automaticamente em `/ideias/[slug]`.

## Atualização a partir da referência

Os scripts em `scripts/` recompõem os catálogos a partir dos materiais públicos
de referência. Como a tradução exige revisão editorial, faça uma cópia dos
dados antes de sincronizar novamente.

## Publicação

Na Vercel, importe esta pasta como projeto Next.js e publique. Em outro
provedor Node.js, execute `npm run build` e use `npm start`. Troque a
propriedade `url` de `data/site-config.json` pelo domínio definitivo.

## Painel de controle

Esta versão não usa banco de dados nem CMS. O conteúdo é administrado
diretamente nos arquivos JSON da pasta `data/`. Um painel com edição no
navegador exigiria autenticação, uma API e armazenamento persistente.
