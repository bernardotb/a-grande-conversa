import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t-4 border-antique-500/50 bg-library-950 text-parchment-100">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-parchment-100/62">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-antique-400">
            Acervo
          </p>
          <div className="grid gap-2 text-sm text-parchment-100/68">
            {siteConfig.navigation.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-antique-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-antique-400">
            Projeto
          </p>
          <div className="grid gap-2 text-sm text-parchment-100/68">
            {siteConfig.footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-antique-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-parchment-100/10 py-5 text-center text-xs text-parchment-100/45">
        Projeto editorial e educacional. Conteúdo em expansão.
      </div>
    </footer>
  );
}
