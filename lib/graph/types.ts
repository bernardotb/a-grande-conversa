export type NodeType =
  | "great_idea"
  | "associated_idea"
  | "author"
  | "work"
  | "tension"
  | "thesis"
  | "passage"
  | "trail";

export type EvidenceStatus =
  | "documental"
  | "inferida"
  | "pedagogica"
  | "em_verificacao";

export type EdgeRelation =
  | "fundamenta"
  | "limita"
  | "tensiona"
  | "opoe_se_a"
  | "desenvolve"
  | "aparece_em"
  | "e_discutido_por"
  | "e_provado_por"
  | "aplica_se_a"
  | "depende_de"
  | "corrige"
  | "contrasta_com"
  | "expande";

export type GraphNode = {
  id: string;
  label: string;
  type: NodeType;
  slug: string;
  summary: string;
  description?: string;
  axis?: "como_julgamos" | "como_agimos" | "transversal";
  question?: string;
  tags?: string[];
  sourceStatus?: EvidenceStatus;
};

export type SourceReference = {
  id: string;
  title: string;
  author?: string;
  work?: string;
  chapter?: string;
  section?: string;
  page?: string;
  quote?: string;
  url?: string;
  note?: string;
};

export type GraphEdge = {
  id: string;
  source: string;
  target: string;
  relation: EdgeRelation;
  label: string;
  explanation?: string;
  evidenceStatus: EvidenceStatus;
  sourceReferences?: SourceReference[];
  strength?: 1 | 2 | 3 | 4 | 5;
};

export type AuthorNode = GraphNode & {
  type: "author";
  period?: string;
  relatedIdeas: string[];
};

export type WorkNode = GraphNode & {
  type: "work";
  authorId?: string;
  relatedIdeas: string[];
};

export type TensionNode = GraphNode & {
  type: "tension";
  relatedIdeas: string[];
};
