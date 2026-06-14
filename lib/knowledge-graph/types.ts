// ─── Evidence status ──────────────────────────────────────────────────────────

export type EvidenceStatus =
  | "syntopicon_explicit"      // Trecho ou posição diretamente registrada no Syntopicon
  | "syntopicon_reference"     // Referência indireta ao Syntopicon original
  | "primary_text_passage"     // Passagem verificada em texto primário
  | "shared_author_or_work"    // Inferida por autor ou obra em comum
  | "prototype_editorial"      // Importada do protótipo B sem fonte precisa
  | "editorial_inference"      // Inferência editorial do time
  | "to_verify"                // Aguarda verificação
  | "pending";                 // Não investigada ainda

// ─── Quotes ───────────────────────────────────────────────────────────────────

export type Quote = {
  text: string;
  author?: string;
  work?: string;
  location?: string;
  sourceStatus: EvidenceStatus;
};

// ─── Curator note ─────────────────────────────────────────────────────────────

export type CuratorNote = {
  text: string;
  sourceStatus: EvidenceStatus;
};

// ─── Node types ───────────────────────────────────────────────────────────────

export type NodeType =
  | "great_idea"
  | "topic"
  | "question"
  | "debate"
  | "position"
  | "author"
  | "work"
  | "reference"
  | "passage"
  | "bridge_concept"
  | "period"
  | "tradition"
  | "domain";

// ─── Relation types ───────────────────────────────────────────────────────────

export type RelationType =
  | "has_topic"
  | "raises_question"
  | "participates_in_debate"
  | "has_position"
  | "position_held_by"
  | "cites_work"
  | "authored_by"
  | "has_reference"
  | "has_passage"
  | "cross_references"
  | "tensions_with"
  | "depends_on"
  | "opposes"
  | "bridges_to"
  | "reframes"
  | "develops"
  | "criticizes"
  | "belongs_to_domain"
  | "belongs_to_period"
  | "belongs_to_tradition"
  | "shares_author"
  | "shares_work";

// ─── Graph primitives ─────────────────────────────────────────────────────────

export type KnowledgeNode = {
  id: string;
  type: NodeType;
  label: string;
  slug?: string;
  description?: string;
  domain?: string;
  priority?: 1 | 2 | 3;
  weight?: number;
  evidenceStatus?: EvidenceStatus;
  metadata?: Record<string, unknown>;
};

export type KnowledgeRelation = {
  id: string;
  source: string;
  target: string;
  type: RelationType;
  label?: string;
  explanation?: string;
  weight?: number;
  evidenceStatus: EvidenceStatus;
  confidence?: "high" | "medium" | "low";
  metadata?: Record<string, unknown>;
};

export type KnowledgeGraph = {
  nodes: KnowledgeNode[];
  relations: KnowledgeRelation[];
};

// ─── Debate ───────────────────────────────────────────────────────────────────

export type Debate = {
  id: string;
  slug: string;
  title: string;
  centralQuestion: string;
  description?: string;
  relatedIdeaIds: string[];
  quotes?: Quote[];
  evidenceStatus: EvidenceStatus;
};

// ─── Bridge concept ───────────────────────────────────────────────────────────

export type BridgeConcept = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  relatedIdeaIds: string[];
  relatedDebateIds?: string[];
  quotes?: Quote[];
  evidenceStatus: EvidenceStatus;
};

// ─── Enrichment (additive layer over SyntopiconIdea) ─────────────────────────

export type IdeaEnrichment = {
  slug: string;
  quotes?: Quote[];
  relatedDebateIds?: string[];
  relatedConceptIds?: string[];
  curatorNote?: CuratorNote;
};

export type PlanStepEnrichment = {
  planSlug: string;
  stepNumber: number;
  curatorNote: CuratorNote;
};
