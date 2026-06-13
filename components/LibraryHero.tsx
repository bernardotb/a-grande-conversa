import Link from "next/link";
import { Container } from "@/components/Container";

export function LibraryHero() {
  return (
    <section className="relative overflow-hidden bg-library-950 text-parchment-100">
      <div
        className="absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(185,149,79,.24), transparent 24%), linear-gradient(115deg, transparent 55%, rgba(112,47,55,.28) 55%)"
        }}
      />
      <Container className="relative grid min-h-[620px] items-center gap-14 py-20 lg:grid-cols-[1.12fr_.88fr]">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-antique-400">
            Um atlas para leitores
          </p>
          <h1 className="max-w-4xl font-display text-6xl leading-[0.96] sm:text-7xl lg:text-[6.7rem]">
            A Grande
            <span className="block italic text-antique-400">Conversa</span>
          </h1>
          <p className="mt-8 max-w-2xl font-display text-xl leading-8 text-parchment-100/72 sm:text-2xl">
            Ideias que atravessam séculos. Leituras que continuam a conversa.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/ideias"
              className="bg-antique-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-library-950 transition hover:bg-parchment-200"
            >
              Explorar as ideias
            </Link>
            <Link
              href="/planos-de-leitura"
              className="border border-parchment-100/30 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:border-antique-400 hover:text-antique-400"
            >
              Escolher um percurso
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-md lg:block" aria-hidden="true">
          <div className="absolute inset-4 rotate-3 border border-antique-400/25 bg-wine-900 shadow-2xl" />
          <div className="absolute inset-0 -rotate-2 border border-antique-400/45 bg-[#efe3c8] p-9 text-ink shadow-2xl">
            <div className="border-b border-double border-antique-600 pb-5 text-center">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-antique-600">
                Catálogo de conceitos
              </p>
              <p className="mt-3 font-display text-4xl">Ficha n.º 001</p>
            </div>
            <p className="mt-8 font-display text-6xl italic">Justiça</p>
            <p className="mt-4 border-l-2 border-wine-700 pl-4 font-display text-lg leading-7">
              O que torna uma ação, uma lei ou uma sociedade justa?
            </p>
            <div className="mt-10 grid grid-cols-2 gap-y-5 border-t border-antique-600/40 pt-6 text-xs uppercase tracking-wider text-[#66563d]">
              <span>Platão</span>
              <span>Aristóteles</span>
              <span>Mill</span>
              <span>Arendt</span>
            </div>
            <div className="absolute bottom-8 left-9 right-9 flex items-center gap-3">
              <span className="h-px flex-1 bg-antique-600/50" />
              <span className="font-display text-2xl text-wine-800">GC</span>
              <span className="h-px flex-1 bg-antique-600/50" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
