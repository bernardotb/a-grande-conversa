import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Metodologia e Fontes",
  description: "Critérios editoriais, fontes e política de verificação do projeto."
};

const methods = [
  ["1. Síntese", "Cada ideia recebe uma apresentação curta, uma pergunta central e um ensaio introdutório. Sínteses são redações editoriais próprias, não citações das obras."],
  ["2. Relações", "Vínculos entre ideias, autores e obras indicam relevância temática. Eles não significam concordância, influência direta ou equivalência conceitual."],
  ["3. Tradução", "Títulos e termos seguem usos correntes em português do Brasil. Variantes de tradução devem ser registradas nas fichas bibliográficas ampliadas."],
  ["4. Verificação", "Datas, autoria e títulos originais devem ser conferidos em edições críticas, catálogos de bibliotecas e referências acadêmicas antes da publicação definitiva."],
  ["5. Incerteza", "Datas aproximadas recebem “c.”; conteúdo incompleto deve ser rotulado como provisório. Nenhuma lacuna deve ser preenchida como fato verificado."]
];

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aparelho editorial"
        title="Metodologia e Fontes"
        description="Critérios para construir um acervo legível, conectado e intelectualmente responsável."
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-antique-400">Aviso de conteúdo</p>
            <p className="mt-4 text-sm leading-7 text-parchment-100/70">{siteConfig.contentNotice}</p>
            <p className="mt-6 border-t border-parchment-100/15 pt-5 text-xs leading-5 text-parchment-100/50">
              Bibliografia secundária detalhada: placeholder editorial. Deve ser incorporada por ficha durante a
              próxima etapa de pesquisa.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
