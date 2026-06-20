import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Metodologia e Fontes",
  description: "Criterios editoriais, fontes e politica de verificacao do projeto."
};

const methods: [string, string][] = [
  ['1. Sintese', 'Cada ideia recebe uma apresentacao curta, uma pergunta central e um ensaio introdutorio. Sinteses sao redacoes editoriais proprias, nao citacoes das obras.'],
  ['2. Relacoes', 'Vinculos entre ideias, autores e obras indicam relevancia tematica. Eles nao significam concordancia, influencia direta ou equivalencia conceitual.'],
  ['3. Traducao', 'Titulos e termos seguem usos correntes em portugues do Brasil. Variantes de traducao devem ser registradas nas fichas bibliograficas ampliadas.'],
  ['4. Verificacao', 'Datas, autoria e titulos originais devem ser conferidos em edicoes criticas, catalogos de bibliotecas e referencias academicas antes da publicacao definitiva.'],
  ['5. Incerteza', 'Datas aproximadas recebem c.; conteudo incompleto deve ser rotulado como provisorio. Nenhuma lacuna deve ser preenchida como fato verificado.'],
  ['6. Referencia vs. Passagem (Atlas)', 'No Atlas das Seis Ideias, uma referencia e uma coordenada documental indicada pelo Syntopicon: volume, obra e paginas. Uma passagem e o texto primario localizado, lido e conferido. O corpus atual contem 2.461 referencias e zero passagens: a distincao e metodologica e deliberada. Nao ha citacoes inventadas.'],
  ['7. Goodness e Equality no Atlas', "Goodness (Bondade) e mapeada pela entrada 'Good and Evil' do Syntopicon, com mediacao explicita registrada nos metadados. Equality (Igualdade) nao possui capitulo autonomo no Syntopicon; seus topicos e referencias sao mapeados por remissao cruzada documentada. Ambos os casos preservam a rastreabilidade."],
];

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aparelho editorial"
        title="Metodologia e Fontes"
        description="Criterios para construir um acervo legivel, conectado e intelectualmente responsavel."
        breadcrumbs={[{ label: "Metodologia e Fontes" }]}
      />
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5">
            {methods.map(([title, text]) => (
              <section key={title} className="paper-panel p-7">
                <h2 className="font-display text-3xl">{title}</h2>
                <p className="mt-4 leading-7 text-muted">{text}</p>
              </section>
            ))}
          </div>
          <aside className="h-fit border-t-4 border-antique-500 bg-library-900 p-7 text-parchment-100">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-antique-400">Aviso de conteudo</p>
            <p className="mt-4 text-sm leading-7 text-parchment-100/70">{siteConfig.contentNotice}</p>
            <p className="mt-6 border-t border-parchment-100/15 pt-5 text-xs leading-5 text-parchment-100/50">
              Bibliografia secundaria detalhada: placeholder editorial. Deve ser incorporada por ficha durante a proxima etapa de pesquisa.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
