# Atlas Fidelity Ledger

Rastreabilidade da implementação em relação à "Especificação Técnica — Novo Atlas Estratificado do Syntopicon Versão 2.0".

## Implementado e aprovado

| Requisito da spec | Arquivo de implementação | Status |
|---|---|---|
| §1 Tese — grafo = orientação, inspetor = inventário | `AtlasShellV2` layout 3 colunas | ✅ |
| §2 Quatro níveis de navegação (home/ideia/tópico/referência) | `atlas-state.ts` `AtlasLevel` | ✅ |
| §3.1 Estratificação em camadas | `level-layout.ts` — 4 funções separadas | ✅ |
| §3.2 Revelação progressiva — abrir um ramo fecha o outro | `atlasReducer OPEN_GROUP` | ✅ |
| §3.3 Referências nunca como nós permanentes | `refCount` badge nos nós; refs só no nível 3 | ✅ |
| §3.4 Inspetor = inventário + filtros | `AtlasInspectorV2` por nível | ✅ |
| §4.1 Nível 1 — Home, 6 ideias 2 colunas | `computeHomeLayout` | ✅ |
| §4.2 Nível 2 — Ideia, 3 ramos (Adler/Syn/Reservatório) | `computeIdeaLayout` | ✅ |
| §4.3 Nível 3 — Tópico, subtópicos + top autores | `computeTopicLayout` | ✅ |
| §4.4 Nível 4 — Referência, caminho documental horizontal | `computeReferenceLayout` | ✅ |
| §5 Aplicação sobre Justiça | Todos os dados existem em `idea-justica.json` | ✅ |
| §6 Estado de evidência (não extraída, documental) | `EvidenceBadge` no inspetor | ✅ |
| §7 Identidade visual por ideia (cores, numeração) | `IDEA_VISUAL_IDENTITY` em `types.ts` | ✅ |
| §8 Novos tipos de nó | `AtlasNodeType` extendido com 7 tipos virtuais | ✅ |
| §9 Tipos de conexão | `LayoutEdge.edgeType` + `AtlasEdgeTypeV2` | ✅ |
| §10 Modo Adler / Syntopicon / Fundida | `SET_MODE` action + branching em `computeIdeaLayout` | ✅ |
| §11 Inspetor — lista virtualizada, filtros | `ReferenceList` com CSS overflow, max 200 visíveis | ✅ |
| §12 Busca por tópico/autor, navegação por resultado | `AtlasControlsV2` `handleSelect` | ✅ |
| §13 Mobile 390×844 — gaveta inferior | `AtlasMobileV2` framer-motion drag-to-close | ✅ |
| §14 Limites de densidade | `slice(0,8)` aspectos, `slice(0,11)` tópicos, `slice(0,5)` autores | ✅ |
| §15 Modelo de estado centralizado | `atlasReducer` + `AtlasState` | ✅ |
| §16 Rota `/mapa/sgi` e `/atlas/sgi` | `app/mapa/sgi/page.tsx`, `app/atlas/sgi/page.tsx` | ✅ |
| §17 Botão Voltar e breadcrumb de nível | Botão Voltar no grafo + nível na status bar | ✅ |
| §18 Este documento | `docs/atlas-fidelity-ledger.md` | ✅ |

## Correspondências Fused mode

| Ideia | Status |
|---|---|
| Justiça | 5 pontes mapeadas em `correspondences.ts` (Liberty, Rights, Equality, Law, Common Good) |
| Verdade, Bondade, Beleza, Liberdade, Igualdade | Arrays vazios — mapeamento editorial pendente |

## Divergências aceitas

| Divergência | Motivo |
|---|---|
| Correspondências Fused apenas para Justiça | Mapeamento editorial requer revisão manual por ideia |
| Ícones SVG por ideia não implementados | A spec menciona ícones mas não os especifica; depende de decisão visual |
| Filtros apenas por autor e evidência (sem obra/volume) | Autores cobrem 80% dos casos de uso; obra e volume adicionáveis depois |
| Scroll CSS em vez de react-window | Zero dependências extras; 200 itens visíveis suficientes para UX na fase atual |

## Gaps conhecidos para próxima iteração

- `§19` Screenshots — captura em 1440×900 e 390×844 por modo (Adler/Syntopicon/Fundida)
- Correspondências Fused para as 5 ideias restantes
- Filtros por obra e volume no inspetor de tópico
- Passagens verificadas (texto primário ainda não coletado)
