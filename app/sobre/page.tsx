import type { Metadata } from "next";
import Link from "next/link";
import { ReferenceNav } from "@/components/ReferenceNav";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a proposta editorial e acadêmica do projeto A Grande Conversa.",
};

export default function AboutPage() {
  return (
    <main className="gc-page min-h-screen">
      <ReferenceNav />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12">
        <Link href="/" className="gc-kicker hover:text-[var(--accent)]">
          A Grande Conversa
        </Link>

        <header className="mb-14 mt-16 border-b border-[var(--border)] pb-12">
          <p className="gc-kicker">Sobre o projeto</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-[var(--ink)] sm:text-7xl">
            Uma biblioteca para acompanhar ideias através dos séculos.
          </h1>
        </header>

        <div className="gc-prose">
          <p className="font-serif text-2xl leading-relaxed text-[var(--ink)]">
            A Grande Conversa apresenta, em português do Brasil, um mapa de
            questões fundamentais que atravessam a tradição intelectual do
            Ocidente.
          </p>

          <h2>O que significa “Grande Conversa”?</h2>
          <p>
            Grandes obras raramente existem isoladas. Filósofos, historiadores,
            cientistas, poetas e teólogos retomam perguntas anteriores,
            discordam de respostas consagradas e oferecem novas maneiras de
            compreender o mundo. Ler essa tradição como conversa permite
            perceber continuidades, rupturas e relações que uma cronologia
            simples não mostra.
          </p>

          <h2>As 102 Grandes Ideias</h2>
          <p>
            O índice de ideias funciona como um catálogo temático. Cada verbete
            reúne uma pergunta central, posições de pensadores em ordem
            histórica, relações intelectuais e uma lista de obras para
            aprofundamento. O conjunto deriva da tradição do{" "}
            <em>Syntopicon</em>, criado para tornar comparável o tratamento de
            um mesmo tema em diferentes autores e épocas.
          </p>

          <h2>Como usar este site</h2>
          <p>
            Você pode começar por uma ideia, seguir para os autores citados e
            então abrir as obras relacionadas. Os planos de leitura oferecem
            percursos menores e progressivos. A busca geral permite localizar
            um conceito, pensador ou título em todo o acervo.
          </p>

          <h2>Tradução e edição</h2>
          <p>
            Esta edição preserva a estrutura conceitual e as relações do
            projeto de referência, com tradução e adaptação editorial para o
            português do Brasil. Nomes de obras consagrados em português são
            preferidos quando identificados; títulos e textos que ainda
            exigem revisão especializada devem ser tratados como tradução de
            trabalho.
          </p>

          <h2>Referência</h2>
          <p>
            O conteúdo e a arquitetura intelectual foram adaptados de{" "}
            <a
              href="https://greatconversationmap.com/"
              target="_blank"
              rel="noreferrer"
            >
              Great Conversation Map
            </a>
            . A interface desta edição foi redesenhada para leitura em
            português, preservando a navegação por ideias, obras e percursos.
          </p>
        </div>
      </article>
    </main>
  );
}
