import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { AuthorCatalog } from "@/components/AuthorCatalog";
import { authors, categories, periods } from "@/lib/data";

export const metadata: Metadata = {
  title: "Autores",
  description: "Autores, pensadores e interlocutores da Grande Conversa."
};

export default function AuthorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catálogo de autoridades"
        title="Autores"
        description="Vozes de épocas distintas, reunidas não para formar um coro unânime, mas para tornar visíveis seus desacordos."
        breadcrumbs={[{ label: "Autores" }]}
      />
      <Container className="py-14">
        <AuthorCatalog authors={authors} periods={periods} categories={categories} />
      </Container>
    </>
  );
}
