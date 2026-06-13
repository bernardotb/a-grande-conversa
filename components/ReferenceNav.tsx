"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  ["Início", "/"],
  ["As 102 Grandes Ideias", "/ideias"],
  ["Planos de Leitura", "/planos-de-leitura"],
  ["Grandes Obras", "/obras"],
  ["Busca", "/busca"],
  ["Sobre", "/sobre"]
];

export function ReferenceNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-6 top-6 z-40 grid size-10 place-items-center rounded-full border bg-[var(--cream)] font-serif text-xl text-[var(--accent)] shadow-sm"
        aria-label="Abrir navegação"
      >
        §
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <nav
            className="h-full w-[min(88vw,360px)] border-r bg-[var(--cream)] px-8 py-10 shadow-2xl"
            aria-label="Navegação"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="gc-kicker">A Grande Conversa</p>
              <button type="button" onClick={() => setOpen(false)} className="text-2xl" aria-label="Fechar navegação">
                ×
              </button>
            </div>
            <div className="mt-12 grid gap-1">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b py-4 font-serif text-2xl text-[var(--primary)] hover:text-[var(--accent)]"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[var(--secondary)]">Aparência</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
