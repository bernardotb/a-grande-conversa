import type { KnowledgeGraph } from "./types";

export type ValidationReport = {
  valid: boolean;
  errors: string[];
  warnings: string[];
};

export function validateKnowledgeGraph(graph: KnowledgeGraph): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  const nodeIds = new Set(graph.nodes.map((n) => n.id));
  const seen = new Set<string>();

  // Duplicate node IDs
  for (const node of graph.nodes) {
    if (seen.has(node.id)) {
      errors.push(`Duplicate node id: "${node.id}"`);
    }
    seen.add(node.id);
  }

  // Nodes missing slug for navigable types
  const navigableTypes = new Set(["great_idea", "author", "work", "debate", "bridge_concept"]);
  for (const node of graph.nodes) {
    if (navigableTypes.has(node.type) && !node.slug) {
      warnings.push(`Node "${node.id}" (${node.type}) is navigable but has no slug`);
    }
    if (node.type === "great_idea" && !node.domain) {
      warnings.push(`Idea node "${node.id}" has no domain`);
    }
  }

  // Relations referencing non-existent nodes
  const relationSeen = new Set<string>();
  for (const rel of graph.relations) {
    if (!nodeIds.has(rel.source)) {
      errors.push(`Relation "${rel.id}" references unknown source: "${rel.source}"`);
    }
    if (!nodeIds.has(rel.target)) {
      errors.push(`Relation "${rel.id}" references unknown target: "${rel.target}"`);
    }
    if (!rel.evidenceStatus) {
      warnings.push(`Relation "${rel.id}" has no evidenceStatus`);
    }
    if (relationSeen.has(rel.id)) {
      errors.push(`Duplicate relation id: "${rel.id}"`);
    }
    relationSeen.add(rel.id);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
