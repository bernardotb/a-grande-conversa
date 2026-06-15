# DATA_REVIEW_TODO

Ocorrências suspeitas de erros de tradução ou copy automática.
**NÃO corrigir automaticamente.** Revisar com especialista antes de alterar.

| Ocorrência | Arquivo + linha(s) | Sugestão | Certeza |
|---|---|---|---|
| `"Prometeu vinculado"` | `data/book-index.json:34` · `data/syntopicon.json:8576` | "Prometeu Acorrentado" (título consagrado) | Alta |
| `"Sobre o equilíbrio dos aviões"` | `data/book-index.json:394` | Provavelmente tradução automática de título científico de Arquimedes; revisar título original | Alta |
| `"Aldeia"` | `data/book-index.json:4949` · `data/syntopicon.json:1536, 3816` | Provavelmente "Hamlet" (Hamlet → transliterado incorretamente) ou "Aldeia" como nome de peça; revisar | Alta |
| `"Moinho"` | `data/syntopicon.json:2393, 9846` | Provavelmente "Mill" (John Stuart Mill) traduzido como sobrenome em português | Alta |
| `"término das aulas"` | `data/syntopicon.json:2361` | Provável erro de tradução automática; contexto: "A verdadeira liberdade requer o término das aulas." — sentido estranho; revisar passagem original | Alta |

## Contexto das ocorrências

### `"Moinho"` (Mill)
`data/syntopicon.json:2393` → `"11. Moinho, Na Liberdade"`
`data/syntopicon.json:9846` → `"11. Moinho, Na Liberdade Capítulo 2"`

Provável causa: o sobrenome "Mill" foi traduzido como "Moinho" (tradução literal).
Autor real: John Stuart Mill, obra "On Liberty" → "Sobre a Liberdade".

### `"Aldeia"` (Hamlet)
`data/syntopicon.json:1536` → `"5. Shakespeare, Otelo; Rei Lear; Aldeia; Macbeth"`
`data/syntopicon.json:3816` → `"7. Shakespeare, Rei Lear; Aldeia; A Tempestade"`

Provável causa: "Hamlet" foi traduzido como "Aldeia" (hamlet = aldeia pequena em inglês).
Obra real: Hamlet, de Shakespeare.

### `"término das aulas"` 
`data/syntopicon.json:2361` → summary de pensador na ideia "Liberdade"

Frase: "A verdadeira liberdade requer o término das aulas."
Provável causa: tradução automática de passagem sobre fim de contrato de aprendizagem ou abolição de tutela; sentido político, não educacional.

### `"Prometeu vinculado"` (Prometheus Bound)
`data/book-index.json:34` e `data/syntopicon.json:8576`

Título consagrado em português: "Prometeu Acorrentado" (Ésquilo).
"Vinculado" é tradução literal válida mas incomum.

### `"Sobre o equilíbrio dos aviões"`
`data/book-index.json:394`

Provavelmente refere-se a obra de Arquimedes sobre equilíbrio de planos ("On the Equilibrium of Planes").
Tradução: "aviões" no lugar de "planos" (planes → planos/aviões).
Título correto: "Sobre o Equilíbrio dos Planos".
