import type { GraphNode, GraphEdge, NodeType, EvidenceStatus } from "./types";
import type { AuthorNode, WorkNode, TensionNode } from "./types";
import { greatIdeaNodes, associatedIdeaNodes, allNodes } from "./nodes";
import { graphEdges } from "./edges";
import { tensionNodes } from "./tensions";
import { authorNodes } from "./authors";
import { workNodes } from "./works";

const allGraphNodes: GraphNode[] = [
  ...allNodes,
  ...tensionNodes,
  ...authorNodes,
  ...workNodes,
];

export function getNodeById(id: string): GraphNode | undefined {
  return allGraphNodes.find((n) => n.id === id);
}

export function getNodesByType(type: NodeType): GraphNode[] {
  switch (type) {
    case "great_idea":
      return greatIdeaNodes;
    case "associated_idea":
      return associatedIdeaNodes;
    case "tension":
      return tensionNodes;
    case "author":
      return authorNodes;
    case "work":
      return workNodes;
    default:
      return allGraphNodes.filter((n) => n.type === type);
  }
}

export function getEdgesForNode(nodeId: string): GraphEdge[] {
  return graphEdges.filter(
    (e) => e.source === nodeId || e.target === nodeId,
  );
}

export function getNeighborNodes(nodeId: string): GraphNode[] {
  const edges = getEdgesForNode(nodeId);
  const neighborIds = edges.map((e) =>
    e.source === nodeId ? e.target : e.source,
  );
  return neighborIds
    .map((id) => getNodeById(id))
    .filter((n): n is GraphNode => Boolean(n));
}

export function getGreatIdeas(): GraphNode[] {
  return greatIdeaNodes;
}

export function getIdeasByAxis(
  axis: "como_julgamos" | "como_agimos" | "transversal",
): GraphNode[] {
  return allNodes.filter((n) => n.axis === axis);
}

export function getAuthorsForIdea(ideaId: string): AuthorNode[] {
  return authorNodes.filter((a) => a.relatedIdeas.includes(ideaId));
}

export function getWorksForIdea(ideaId: string): WorkNode[] {
  return workNodes.filter((w) => w.relatedIdeas.includes(ideaId));
}

export function getTensionsForIdea(ideaId: string): TensionNode[] {
  return tensionNodes.filter((t) => t.relatedIdeas.includes(ideaId));
}

export function getEvidenceForEdge(edgeId: string): EvidenceStatus | undefined {
  return graphEdges.find((e) => e.id === edgeId)?.evidenceStatus;
}
