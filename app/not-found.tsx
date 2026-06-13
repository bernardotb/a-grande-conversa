import Link from "next/link";
import { ReferenceNav } from "@/components/ReferenceNav";

export default function NotFound() {
  return (
    <main className="gc-page flex min-h-screen items-center justify-center px-5">
      <ReferenceNav />
      <div className="max-w-xl text-center">
        <p className="gc-kicker">Erro 404</p>
        <h1 className="mt-5 font-serif text-5xl text-[var(--ink)] sm:text-7xl">
          Página não encontrada
        </h1>
        <p className="mt-6 leading-7 text-[var(--secondary)]">
          Este verbete não está no catálogo ou foi movido para outra estante.
        </p>
        <Link
          href="/"
          className="mt-9 inline-block border-b border-[var(--ink)] pb-1 text-sm uppercase tracking-[0.18em] text-[var(--ink)] hover:text-[var(--accent)]"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
