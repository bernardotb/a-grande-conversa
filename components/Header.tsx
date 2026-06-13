"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-antique-500/25 bg-library-950/95 text-parchment-100 shadow-lg backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center border border-antique-400/60 font-display text-xl text-antique-400 shadow-insetline">
            GC
          </span>
          <span>
            <span className="block font-display text-xl leading-none tracking-wide">
              A Grande Conversa
            </span>
            <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.18em] text-parchment-200/60 sm:block">
              Biblioteca de ideias
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-parchment-100/78 transition hover:text-antique-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/busca"
            className="grid size-10 place-items-center rounded-full border border-antique-500/40 text-antique-400 transition hover:bg-antique-400/10"
            aria-label="Abrir busca"
          >
            ⌕
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-antique-500/40 text-antique-400 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label="Alternar menu"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-antique-500/20 px-5 py-4 lg:hidden"
          aria-label="Navegação móvel"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-parchment-100/10 py-3 text-parchment-100/85"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
