import Link from "next/link";

export function ReferenceList({
  title = "Referências nesta página",
  items
}: {
  title?: string;
  items: Array<{ label: string; href: string; detail?: string }>;
}) {
  return (
    <section>
      <h2 className="font-display text-3xl">{title}</h2>
      <ol className="mt-5 divide-y border-y">
        {items.map((item, index) => (
          <li key={item.href} className="grid grid-cols-[32px_1fr] gap-3 py-4">
            <span className="font-display text-antique-500">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <Link href={item.href} className="font-bold hover:text-antique-500">
                {item.label}
              </Link>
              {item.detail && <span className="mt-1 block text-sm text-muted">{item.detail}</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
