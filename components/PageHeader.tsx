import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}) {
  return (
    <header className="border-b bg-library-950 py-14 text-parchment-100 sm:py-20">
      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-antique-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl font-display text-xl leading-8 text-parchment-100/68">
          {description}
        </p>
      </Container>
    </header>
  );
}
