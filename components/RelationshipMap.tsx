"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  KnowledgeGraphLink,
  KnowledgeGraphNode,
} from "@/lib/knowledge-graph";
import { bridgeConcepts } from "@/lib/knowledge-graph";

const graphWidth = 1040;
const graphHeight = 680;
const graphCenter = { x: graphWidth / 2, y: graphHeight / 2 };

const domainColors: Record<string, string> = {
  etica: "#a55242",
  politica: "#376879",
  "teologia-e-metafisica": "#80639a",
  metafisica: "#665079",
  "eternidade-e-infinito": "#a8772d",
  epistemologia: "#3279a1",
  "logica-e-metodo": "#52796f",
  "filosofia-e-pratica": "#9a6648",
  "estetica-e-historia": "#b46b2c",
  "vida-e-natureza": "#588157",
  "ciencias-naturais": "#6f7880",
  "conceitos-ponte": "#2e6b5a",
};

const CONCEPT_DOMAIN = "conceitos-ponte";

type Point = {
  x: number;
  y: number;
};

type GraphMode = "overview" | "bridge_concepts";

type RelationshipMapProps = {
  nodes: KnowledgeGraphNode[];
  links: KnowledgeGraphLink[];
  initialSlug?: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLocaleLowerCase("pt-BR");
}

function linkKey(link: KnowledgeGraphLink) {
  return `${link.source}|${link.target}`;
}

function otherEnd(link: KnowledgeGraphLink, slug: string) {
  return link.source === slug ? link.target : link.source;
}

function truncateLabel(value: string, limit = 21) {
  return value.length > limit ? `${value.slice(0, limit - 1)}...` : value;
}

function selectStrongestLinks(
  nodes: KnowledgeGraphNode[],
  links: KnowledgeGraphLink[],
  limitPerNode: number,
) {
  const selected = new Map<string, KnowledgeGraphLink>();

  for (const node of nodes) {
    links
      .filter((link) => link.source === node.slug || link.target === node.slug)
      .sort((left, right) => right.score - left.score)
      .slice(0, limitPerNode)
      .forEach((link) => selected.set(linkKey(link), link));
  }

  return Array.from(selected.values());
}

function buildOverviewLayout(
  nodes: KnowledgeGraphNode[],
  links: KnowledgeGraphLink[],
): Map<string, Point> {
  const domains = Array.from(new Set(nodes.map((node) => node.domain)));
  const singleDomain = domains.length <= 1;
  const domainCenters = new Map(
    domains.map((domain, index) => {
      const angle = (index / domains.length) * Math.PI * 2 - Math.PI / 2;
      return [
        domain,
        {
          x: singleDomain ? graphCenter.x : graphCenter.x + Math.cos(angle) * 285,
          y: singleDomain ? graphCenter.y : graphCenter.y + Math.sin(angle) * 220,
        },
      ] as const;
    }),
  );
  const positions = new Map<string, Point>();

  for (const domain of domains) {
    const domainNodes = nodes.filter((node) => node.domain === domain);
    const center = domainCenters.get(domain) ?? graphCenter;

    domainNodes.forEach((node, index) => {
      const angle = index * 2.399963229728653;
      const radius = 14 + Math.sqrt(index) * 18;
      positions.set(node.slug, {
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,
      });
    });
  }

  const activeLinks = links.filter(
    (link) => positions.has(link.source) && positions.has(link.target),
  );

  for (let iteration = 0; iteration < 90; iteration += 1) {
    const movement = new Map(nodes.map((node) => [node.slug, { x: 0, y: 0 }]));

    for (let leftIndex = 0; leftIndex < nodes.length; leftIndex += 1) {
      for (
        let rightIndex = leftIndex + 1;
        rightIndex < nodes.length;
        rightIndex += 1
      ) {
        const left = nodes[leftIndex];
        const right = nodes[rightIndex];
        const leftPoint = positions.get(left.slug);
        const rightPoint = positions.get(right.slug);
        if (!leftPoint || !rightPoint) continue;

        const dx = rightPoint.x - leftPoint.x || 0.1;
        const dy = rightPoint.y - leftPoint.y || 0.1;
        const distanceSquared = Math.max(dx * dx + dy * dy, 100);
        const distance = Math.sqrt(distanceSquared);
        const force = Math.min(8, 850 / distanceSquared);
        const offsetX = (dx / distance) * force;
        const offsetY = (dy / distance) * force;
        const leftMovement = movement.get(left.slug);
        const rightMovement = movement.get(right.slug);

        if (leftMovement && rightMovement) {
          leftMovement.x -= offsetX;
          leftMovement.y -= offsetY;
          rightMovement.x += offsetX;
          rightMovement.y += offsetY;
        }
      }
    }

    for (const link of activeLinks) {
      const source = positions.get(link.source);
      const target = positions.get(link.target);
      const sourceMovement = movement.get(link.source);
      const targetMovement = movement.get(link.target);
      if (!source || !target || !sourceMovement || !targetMovement) continue;

      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const distance = Math.max(Math.hypot(dx, dy), 1);
      const desiredDistance = Math.max(58, 108 - link.score * 1.1);
      const force = (distance - desiredDistance) * 0.008;
      const offsetX = (dx / distance) * force;
      const offsetY = (dy / distance) * force;

      sourceMovement.x += offsetX;
      sourceMovement.y += offsetY;
      targetMovement.x -= offsetX;
      targetMovement.y -= offsetY;
    }

    for (const node of nodes) {
      const point = positions.get(node.slug);
      const delta = movement.get(node.slug);
      const domainCenter = domainCenters.get(node.domain);
      if (!point || !delta || !domainCenter) continue;

      delta.x += (domainCenter.x - point.x) * 0.018;
      delta.y += (domainCenter.y - point.y) * 0.018;
      point.x = Math.max(32, Math.min(graphWidth - 32, point.x + delta.x));
      point.y = Math.max(32, Math.min(graphHeight - 32, point.y + delta.y));
    }
  }

  return positions;
}

function buildFocusLayout(
  selectedSlug: string,
  links: KnowledgeGraphLink[],
): {
  positions: Map<string, Point>;
  visibleSlugs: Set<string>;
} {
  const directLinks = links
    .filter((link) => link.source === selectedSlug || link.target === selectedSlug)
    .sort((left, right) => right.score - left.score)
    .slice(0, 24);
  const neighbors = directLinks.map((link) => otherEnd(link, selectedSlug));
  const positions = new Map<string, Point>([[selectedSlug, graphCenter]]);

  neighbors.forEach((slug, index) => {
    const firstRingCount = Math.min(12, neighbors.length);
    const isFirstRing = index < firstRingCount;
    const ringIndex = isFirstRing ? index : index - firstRingCount;
    const ringCount = isFirstRing
      ? firstRingCount
      : neighbors.length - firstRingCount;
    const radius = isFirstRing ? 205 : 305;
    const angle =
      (ringIndex / Math.max(ringCount, 1)) * Math.PI * 2 - Math.PI / 2;

    positions.set(slug, {
      x: graphCenter.x + Math.cos(angle) * radius,
      y: graphCenter.y + Math.sin(angle) * radius * 0.82,
    });
  });

  return {
    positions,
    visibleSlugs: new Set([selectedSlug, ...neighbors]),
  };
}

export function RelationshipMap({ nodes, links, initialSlug }: RelationshipMapProps) {
  const graphViewportRef = useRef<HTMLDivElement>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug ?? null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [domain, setDomain] = useState("todos");
  const [query, setQuery] = useState("");
  const [inspectedLink, setInspectedLink] = useState<string | null>(null);
  const [graphMode, setGraphMode] = useState<GraphMode>("overview");
  const [zoomLevel, setZoomLevel] = useState(1);

  // Concept pseudo-nodes for "bridge_concepts" mode
  const conceptPseudoNodes = useMemo<KnowledgeGraphNode[]>(
    () =>
      bridgeConcepts.map((c) => ({
        slug: c.slug,
        name: c.title,
        domain: CONCEPT_DOMAIN,
        domainName: "Conceito-Ponte",
        question: c.description ?? "",
        thinkerCount: 0,
        bookCount: 0,
      })),
    [],
  );

  const conceptPseudoLinks = useMemo<KnowledgeGraphLink[]>(
    () =>
      bridgeConcepts.flatMap((c) =>
        c.relatedIdeaIds.map((ideaSlug) => ({
          source: c.slug,
          target: ideaSlug,
          score: 5,
          sharedThinkers: [],
          sharedBooks: [],
        })),
      ),
    [],
  );

  const allNodes = useMemo(
    () =>
      graphMode === "bridge_concepts"
        ? [...nodes, ...conceptPseudoNodes]
        : nodes,
    [graphMode, nodes, conceptPseudoNodes],
  );

  const allLinks = useMemo(
    () =>
      graphMode === "bridge_concepts"
        ? [...links, ...conceptPseudoLinks]
        : links,
    [graphMode, links, conceptPseudoLinks],
  );

  const nodeBySlug = useMemo(
    () => new Map(allNodes.map((node) => [node.slug, node])),
    [allNodes],
  );
  const domains = useMemo(
    () =>
      Array.from(
        new Map(nodes.map((node) => [node.domain, node.domainName])).entries(),
      ),
    [nodes],
  );
  const filteredNodes = useMemo(
    () => allNodes.filter((node) => domain === "todos" || node.domain === domain),
    [domain, allNodes],
  );
  const filteredSlugs = useMemo(
    () => new Set(filteredNodes.map((node) => node.slug)),
    [filteredNodes],
  );
  const filteredLinks = useMemo(
    () =>
      allLinks.filter(
        (link) => filteredSlugs.has(link.source) && filteredSlugs.has(link.target),
      ),
    [filteredSlugs, allLinks],
  );
  const overviewLinks = useMemo(
    () => selectStrongestLinks(filteredNodes, filteredLinks, 3),
    [filteredLinks, filteredNodes],
  );
  const activeSelectedSlug =
    selectedSlug && filteredSlugs.has(selectedSlug) ? selectedSlug : null;
  const focusLayout = useMemo(
    () =>
      activeSelectedSlug
        ? buildFocusLayout(activeSelectedSlug, filteredLinks)
        : null,
    [activeSelectedSlug, filteredLinks],
  );
  const visibleNodes = useMemo(
    () =>
      focusLayout
        ? filteredNodes.filter((node) => focusLayout.visibleSlugs.has(node.slug))
        : filteredNodes,
    [filteredNodes, focusLayout],
  );
  const visibleSlugs = useMemo(
    () => new Set(visibleNodes.map((node) => node.slug)),
    [visibleNodes],
  );
  const visibleLinks = useMemo(() => {
    const layoutLinks = focusLayout ? filteredLinks : overviewLinks;
    const base = layoutLinks.filter(
      (link) => visibleSlugs.has(link.source) && visibleSlugs.has(link.target),
    );
    // In bridge_concepts overview, always include all concept links
    if (graphMode === "bridge_concepts" && !focusLayout) {
      const baseKeys = new Set(base.map(linkKey));
      const extra = filteredLinks.filter(
        (l) =>
          visibleSlugs.has(l.source) &&
          visibleSlugs.has(l.target) &&
          (nodeBySlug.get(l.source)?.domain === CONCEPT_DOMAIN ||
            nodeBySlug.get(l.target)?.domain === CONCEPT_DOMAIN) &&
          !baseKeys.has(linkKey(l)),
      );
      return [...base, ...extra];
    }
    return base;
  }, [filteredLinks, focusLayout, graphMode, nodeBySlug, overviewLinks, visibleSlugs]);

  const overviewLayout = useMemo(
    () =>
      focusLayout
        ? new Map<string, Point>()
        : buildOverviewLayout(visibleNodes, visibleLinks),
    [focusLayout, visibleLinks, visibleNodes],
  );
  const positions = focusLayout?.positions ?? overviewLayout;

  const svgViewBox = useMemo(() => {
    const points = visibleNodes
      .map((n) => positions.get(n.slug))
      .filter((p): p is Point => p !== undefined);

    if (points.length === 0) {
      return `0 0 ${graphWidth} ${graphHeight}`;
    }

    const pad = 72;
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    const minX = Math.min(...xs) - pad;
    const minY = Math.min(...ys) - pad;
    const fitW = Math.max(...xs) + pad - minX;
    const fitH = Math.max(...ys) + pad - minY;
    const cx = minX + fitW / 2;
    const cy = minY + fitH / 2;

    return `${cx - fitW / 2 / zoomLevel} ${cy - fitH / 2 / zoomLevel} ${fitW / zoomLevel} ${fitH / zoomLevel}`;
  }, [positions, visibleNodes, zoomLevel]);

  const degreeBySlug = useMemo(() => {
    const degrees = new Map<string, number>();
    visibleLinks.forEach((link) => {
      degrees.set(link.source, (degrees.get(link.source) ?? 0) + 1);
      degrees.set(link.target, (degrees.get(link.target) ?? 0) + 1);
    });
    return degrees;
  }, [visibleLinks]);

  const highlightedSlugs = useMemo(() => {
    const activeSlug = hoveredSlug ?? activeSelectedSlug;
    if (!activeSlug) return null;
    const highlighted = new Set([activeSlug]);
    visibleLinks.forEach((link) => {
      if (link.source === activeSlug) highlighted.add(link.target);
      if (link.target === activeSlug) highlighted.add(link.source);
    });
    return highlighted;
  }, [activeSelectedSlug, hoveredSlug, visibleLinks]);

  const selectedNode = activeSelectedSlug
    ? nodeBySlug.get(activeSelectedSlug) ?? null
    : null;
  const selectedConcept =
    selectedNode?.domain === CONCEPT_DOMAIN
      ? bridgeConcepts.find((c) => c.slug === selectedNode.slug) ?? null
      : null;
  const selectedConnections = useMemo(
    () =>
      activeSelectedSlug
        ? filteredLinks
            .filter(
              (link) =>
                link.source === activeSelectedSlug ||
                link.target === activeSelectedSlug,
            )
            .sort((left, right) => right.score - left.score)
        : [],
    [activeSelectedSlug, filteredLinks],
  );
  const evidenceLink =
    selectedConnections.find((link) => linkKey(link) === inspectedLink) ??
    selectedConnections[0] ??
    null;
  const evidenceNode =
    evidenceLink && activeSelectedSlug
      ? nodeBySlug.get(otherEnd(evidenceLink, activeSelectedSlug))
      : null;

  const searchMatches = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    if (normalizedQuery.length < 2) return [];
    return allNodes
      .filter((node) =>
        normalize(`${node.name} ${node.domainName} ${node.question}`).includes(
          normalizedQuery,
        ),
      )
      .slice(0, 7);
  }, [allNodes, query]);

  useEffect(() => {
    const viewport = graphViewportRef.current;
    if (!viewport) return;

    const frame = requestAnimationFrame(() => {
      viewport.scrollLeft = Math.max(
        0,
        (viewport.scrollWidth - viewport.clientWidth) / 2,
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [activeSelectedSlug, domain]);

  useEffect(() => {
    const viewport = graphViewportRef.current;
    if (!viewport) return;
    const handler = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      setZoomLevel((prev) =>
        Math.max(0.3, Math.min(4, prev * (e.deltaY < 0 ? 1.1 : 0.9))),
      );
    };
    viewport.addEventListener("wheel", handler, { passive: false });
    return () => viewport.removeEventListener("wheel", handler);
  }, []);

  function focusNode(slug: string) {
    const node = nodeBySlug.get(slug);
    if (!node) return;
    if (domain !== "todos" && node.domain !== domain) setDomain("todos");
    setSelectedSlug(slug);
    setInspectedLink(null);
    setQuery("");
  }

  function resetGraph() {
    setSelectedSlug(null);
    setHoveredSlug(null);
    setInspectedLink(null);
  }

  function switchMode(mode: GraphMode) {
    setGraphMode(mode);
    setSelectedSlug(null);
    setInspectedLink(null);
  }

  return (
    <section className="paper-panel overflow-hidden">
      {/* Mode selector */}
      <div className="flex items-center gap-1 border-b px-5 py-3">
        <span className="gc-kicker mr-3 hidden sm:block">Modo</span>
        {(["overview", "bridge_concepts"] as const).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => switchMode(mode)}
            className={`border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition ${
              graphMode === mode
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-transparent text-[var(--secondary)] hover:border-[var(--border)] hover:text-[var(--primary)]"
            }`}
          >
            {mode === "overview" ? "Ideias" : "Conceitos-Ponte"}
          </button>
        ))}
      </div>

      <div className="grid gap-4 border-b p-4 sm:grid-cols-[minmax(0,1fr)_15rem_auto] sm:p-5">
        <div className="relative">
          <label htmlFor="graph-search" className="gc-kicker block">
            Buscar {graphMode === "bridge_concepts" ? "ideia ou conceito" : "uma ideia"}
          </label>
          <input
            id="graph-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: liberdade, alma, ciência..."
            className="mt-2 w-full border-b bg-transparent py-2 font-serif text-xl text-[var(--primary)] outline-none placeholder:text-[var(--faint)] focus:border-[var(--accent)]"
          />
          {searchMatches.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-20 mt-2 border bg-[var(--surface)] p-1 shadow-card">
              {searchMatches.map((node) => (
                <button
                  key={node.slug}
                  type="button"
                  onClick={() => focusNode(node.slug)}
                  className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-[var(--cream)]"
                >
                  <span
                    className={`h-2.5 w-2.5 shrink-0 ${node.domain === CONCEPT_DOMAIN ? "rotate-45" : "rounded-full"}`}
                    style={{ backgroundColor: domainColors[node.domain] ?? "#7a746d" }}
                  />
                  <span>
                    <span className="block font-serif text-lg text-[var(--primary)]">
                      {node.name}
                    </span>
                    <span className="block text-xs text-[var(--secondary)]">
                      {node.domainName}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <label>
          <span className="gc-kicker block">Domínio</span>
          <select
            value={domain}
            onChange={(event) => {
              setDomain(event.target.value);
              setSelectedSlug(null);
              setInspectedLink(null);
              setZoomLevel(1);
            }}
            className="mt-2 w-full border-b bg-[var(--surface)] py-2.5 text-sm text-[var(--primary)] outline-none focus:border-[var(--accent)]"
          >
            <option value="todos">Todos os domínios</option>
            {domains.map(([slug, name]) => (
              <option key={slug} value={slug}>
                {name}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={resetGraph}
          disabled={!activeSelectedSlug}
          className="self-end border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] transition hover:border-[var(--accent)] disabled:cursor-default disabled:opacity-35"
        >
          Visão geral
        </button>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div
          ref={graphViewportRef}
          className="relative min-h-[32rem] overflow-x-auto"
          style={{
            background:
              "radial-gradient(circle at center, color-mix(in srgb, var(--accent) 5%, transparent), transparent 62%)",
          }}
        >
          <svg
            viewBox={svgViewBox}
            role="img"
            aria-labelledby="knowledge-graph-title knowledge-graph-description"
            className="min-h-[32rem] min-w-[760px] lg:min-w-0"
          >
            <title id="knowledge-graph-title">
              Grafo das conexões entre as grandes ideias
            </title>
            <desc id="knowledge-graph-description">
              As ideias são conectadas por pensadores e obras compartilhados.
              Selecione um nó para colocá-lo no centro da visualização.
            </desc>

            <g aria-hidden="true">
              {visibleLinks.map((link) => {
                const source = positions.get(link.source);
                const target = positions.get(link.target);
                if (!source || !target) return null;
                const isDirect =
                  !activeSelectedSlug ||
                  link.source === activeSelectedSlug ||
                  link.target === activeSelectedSlug;
                const isHighlighted =
                  !highlightedSlugs ||
                  (highlightedSlugs.has(link.source) &&
                    highlightedSlugs.has(link.target));
                const isConceptLink =
                  nodeBySlug.get(link.source)?.domain === CONCEPT_DOMAIN ||
                  nodeBySlug.get(link.target)?.domain === CONCEPT_DOMAIN;

                return (
                  <line
                    key={linkKey(link)}
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={
                      isConceptLink
                        ? domainColors[CONCEPT_DOMAIN]
                        : "var(--secondary)"
                    }
                    strokeWidth={
                      isConceptLink
                        ? 1.5
                        : Math.min(3.6, 0.65 + link.score / 18)
                    }
                    strokeDasharray={
                      isConceptLink ? "5 4" : isDirect ? undefined : "4 7"
                    }
                    style={{
                      opacity: isHighlighted
                        ? isDirect
                          ? isConceptLink
                            ? 0.6
                            : 0.42
                          : 0.14
                        : 0.035,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                );
              })}
            </g>

            <g>
              {visibleNodes.map((node) => {
                const point = positions.get(node.slug);
                if (!point) return null;
                const isSelected = node.slug === activeSelectedSlug;
                const isHovered = node.slug === hoveredSlug;
                const isHighlighted =
                  !highlightedSlugs || highlightedSlugs.has(node.slug);
                const degree = degreeBySlug.get(node.slug) ?? 0;
                const radius = isSelected
                  ? 15
                  : Math.min(11, 5.5 + Math.sqrt(degree) * 1.25);
                const showLabel =
                  Boolean(activeSelectedSlug) ||
                  isHovered ||
                  degree >= 7 ||
                  visibleNodes.length <= 28;
                const labelOnLeft = point.x > graphCenter.x + 40;
                const isConcept = node.domain === CONCEPT_DOMAIN;
                const nodeColor = domainColors[node.domain] ?? "#7a746d";
                const haloRadius = radius + (isSelected || isHovered ? (isConcept ? 9 : 7) : (isConcept ? 5 : 3));

                return (
                  <g
                    key={node.slug}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.name}, ${node.domainName}. ${degree} conexões visíveis.`}
                    onMouseEnter={() => setHoveredSlug(node.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    onFocus={() => setHoveredSlug(node.slug)}
                    onBlur={() => setHoveredSlug(null)}
                    onClick={() => focusNode(node.slug)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        focusNode(node.slug);
                      }
                    }}
                    className="cursor-pointer outline-none"
                    style={{
                      transform: `translate(${point.x}px, ${point.y}px)`,
                      opacity: isHighlighted ? 1 : 0.16,
                      transition:
                        "transform 0.42s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease",
                    }}
                  >
                    {isConcept ? (
                      <>
                        <polygon
                          points={`0,${-haloRadius} ${haloRadius},0 0,${haloRadius} ${-haloRadius},0`}
                          fill={nodeColor}
                          opacity={isSelected || isHovered ? 0.2 : 0.08}
                        />
                        <polygon
                          points={`0,${-radius} ${radius},0 0,${radius} ${-radius},0`}
                          fill={nodeColor}
                          stroke="var(--surface)"
                          strokeWidth={isSelected ? 3 : 2}
                        />
                      </>
                    ) : (
                      <>
                        <circle
                          r={haloRadius}
                          fill={nodeColor}
                          opacity={isSelected || isHovered ? 0.18 : 0.08}
                        />
                        <circle
                          r={radius}
                          fill={nodeColor}
                          stroke="var(--surface)"
                          strokeWidth={isSelected ? 4 : 2}
                        />
                      </>
                    )}
                    {showLabel && (
                      <text
                        x={isSelected ? 0 : labelOnLeft ? -radius - 7 : radius + 7}
                        y={isSelected ? -24 : 4}
                        textAnchor={
                          isSelected ? "middle" : labelOnLeft ? "end" : "start"
                        }
                        fill={isConcept ? domainColors[CONCEPT_DOMAIN] : "var(--primary)"}
                        className="pointer-events-none select-none font-serif text-[13px]"
                        style={{
                          fontWeight: isSelected || isHovered ? 700 : isConcept ? 600 : 500,
                          paintOrder: "stroke",
                          stroke: "var(--surface)",
                          strokeWidth: 4,
                          strokeLinejoin: "round",
                        }}
                      >
                        {truncateLabel(node.name)}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          <div className="absolute bottom-3 right-3 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.max(0.3, z * 0.8))}
              aria-label="Reduzir zoom"
              className="flex h-7 w-7 items-center justify-center border bg-[var(--surface)] text-sm text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              −
            </button>
            <button
              type="button"
              onClick={() => setZoomLevel(1)}
              aria-label="Zoom original"
              className="border bg-[var(--surface)] px-2 py-1 font-mono text-[0.6rem] text-[var(--secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.min(4, z * 1.25))}
              aria-label="Aumentar zoom"
              className="flex h-7 w-7 items-center justify-center border bg-[var(--surface)] text-sm text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              +
            </button>
          </div>

          <div className="pointer-events-none absolute bottom-3 left-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.68rem] text-[var(--secondary)]">
            {graphMode === "bridge_concepts" ? (
              <>
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-2.5 w-2.5 rotate-45"
                    style={{ backgroundColor: domainColors[CONCEPT_DOMAIN] }}
                  />
                  conceito-ponte
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--secondary)]" />
                  ideia
                </span>
                <span>linha tracejada = ligação por conceito</span>
              </>
            ) : (
              <>
                <span>círculo maior = mais conexões</span>
                <span>linha mais espessa = mais evidências compartilhadas</span>
              </>
            )}
          </div>
        </div>

        <aside className="border-t p-5 lg:border-l lg:border-t-0">
          {selectedConcept ? (
            <>
              <p className="gc-kicker">Conceito-Ponte</p>
              <h2
                className="mt-3 font-serif text-3xl"
                style={{ color: domainColors[CONCEPT_DOMAIN] }}
              >
                {selectedConcept.title}
              </h2>
              {selectedConcept.description && (
                <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">
                  {selectedConcept.description}
                </p>
              )}
              <Link
                href={`/conceitos/${selectedConcept.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]"
              >
                Abrir página do conceito →
              </Link>

              <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                Ideias relacionadas
              </h3>
              <div className="mt-3 space-y-1">
                {selectedConcept.relatedIdeaIds.map((ideaSlug) => {
                  const idea = nodeBySlug.get(ideaSlug);
                  return idea ? (
                    <button
                      key={ideaSlug}
                      type="button"
                      onClick={() => focusNode(ideaSlug)}
                      className="flex w-full items-center gap-2 py-1 text-left hover:text-[var(--accent)]"
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{
                          backgroundColor: domainColors[idea.domain] ?? "#7a746d",
                        }}
                      />
                      <span className="font-serif text-base text-[var(--primary)]">
                        {idea.name}
                      </span>
                    </button>
                  ) : null;
                })}
              </div>
            </>
          ) : selectedNode ? (
            <>
              <p className="gc-kicker">{selectedNode.domainName}</p>
              <h2 className="mt-3 font-serif text-3xl">{selectedNode.name}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">
                {selectedNode.question}
              </p>
              <div className="mt-4 flex gap-4 border-y py-3 text-xs text-[var(--secondary)]">
                <span>{selectedNode.thinkerCount} pensadores</span>
                <span>{selectedNode.bookCount} obras</span>
              </div>
              <Link
                href={`/ideias/${selectedNode.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]"
              >
                Abrir página da ideia →
              </Link>

              <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                Conexões mais fortes
              </h3>
              <div className="mt-3 max-h-56 space-y-1 overflow-y-auto pr-1">
                {selectedConnections.map((connection) => {
                  const neighborSlug = otherEnd(connection, selectedNode.slug);
                  const neighbor = nodeBySlug.get(neighborSlug);
                  const isInspected =
                    evidenceLink !== null &&
                    linkKey(connection) === linkKey(evidenceLink);
                  if (!neighbor) return null;
                  const isConceptNeighbor = neighbor.domain === CONCEPT_DOMAIN;

                  return (
                    <button
                      key={linkKey(connection)}
                      type="button"
                      onClick={() => setInspectedLink(linkKey(connection))}
                      className={`flex w-full items-start gap-2 border-l-2 px-3 py-2 text-left transition ${
                        isInspected
                          ? "border-[var(--accent)] bg-[var(--cream)]"
                          : "border-transparent hover:border-[var(--border)]"
                      }`}
                    >
                      <span
                        className={`mt-1.5 h-2 w-2 shrink-0 ${isConceptNeighbor ? "rotate-45" : "rounded-full"}`}
                        style={{ backgroundColor: domainColors[neighbor.domain] ?? "#7a746d" }}
                      />
                      <span>
                        <span className="block font-serif text-base text-[var(--primary)]">
                          {neighbor.name}
                        </span>
                        {isConceptNeighbor ? (
                          <span className="block text-[0.68rem] text-[var(--secondary)]">
                            conceito-ponte
                          </span>
                        ) : (
                          <span className="block text-[0.68rem] text-[var(--secondary)]">
                            {connection.sharedThinkers.length} pensadores ·{" "}
                            {connection.sharedBooks.length} obras
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {evidenceLink &&
                evidenceNode &&
                evidenceNode.domain !== CONCEPT_DOMAIN && (
                  <div className="mt-6 border-t pt-5">
                    <p className="gc-kicker">Por que se conectam</p>
                    <p className="mt-2 font-serif text-xl">
                      {selectedNode.name} + {evidenceNode.name}
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em]">
                      Pensadores em comum
                    </p>
                    <p className="mt-1 text-sm leading-5 text-[var(--secondary)]">
                      {evidenceLink.sharedThinkers.slice(0, 5).join(", ")}
                      {evidenceLink.sharedThinkers.length > 5
                        ? ` e mais ${evidenceLink.sharedThinkers.length - 5}`
                        : ""}
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em]">
                      Obras em comum
                    </p>
                    <div className="mt-1 space-y-1">
                      {evidenceLink.sharedBooks.slice(0, 4).map((book) => (
                        <Link
                          key={book.slug}
                          href={`/obras/${book.slug}`}
                          className="block text-sm leading-5 text-[var(--accent)] hover:underline"
                        >
                          {book.title}
                        </Link>
                      ))}
                      {evidenceLink.sharedBooks.length > 4 && (
                        <p className="text-xs text-[var(--secondary)]">
                          + {evidenceLink.sharedBooks.length - 4} outras obras
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => focusNode(evidenceNode.slug)}
                      className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"
                    >
                      Colocar {evidenceNode.name} no centro
                    </button>
                  </div>
                )}
            </>
          ) : (
            <>
              <p className="gc-kicker">Como explorar</p>
              <h2 className="mt-3 font-serif text-3xl">
                Uma cartografia das ideias
              </h2>
              {graphMode === "bridge_concepts" ? (
                <>
                  <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">
                    Os losangos representam conceitos-ponte — noções que conectam
                    múltiplas grandes ideias. Clique em um para ver quais ideias
                    ele articula.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">
                    Clique em qualquer círculo para ver as ideias e conceitos ao
                    redor dela.
                  </p>
                  <div className="mt-7 space-y-2">
                    {bridgeConcepts.map((c) => (
                      <button
                        key={c.slug}
                        type="button"
                        onClick={() => focusNode(c.slug)}
                        className="flex w-full items-center gap-2 py-1 text-left text-sm hover:text-[var(--accent)]"
                      >
                        <span
                          className="h-2.5 w-2.5 shrink-0 rotate-45"
                          style={{ backgroundColor: domainColors[CONCEPT_DOMAIN] }}
                        />
                        <span className="font-serif text-[var(--primary)]">
                          {c.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">
                    Cada círculo representa uma das 102 grandes ideias. As cores
                    indicam domínios; as linhas mostram obras e pensadores
                    compartilhados.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[var(--secondary)]">
                    Selecione um círculo para colocá-lo no centro e revelar sua
                    vizinhança intelectual.
                  </p>
                  <div className="mt-7 space-y-2">
                    {domains.map(([slug, name]) => (
                      <button
                        key={slug}
                        type="button"
                        onClick={() => setDomain(slug)}
                        className="flex w-full items-center justify-between py-1 text-left text-sm hover:text-[var(--accent)]"
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: domainColors[slug] }}
                          />
                          {name}
                        </span>
                        <span className="text-xs text-[var(--faint)]">
                          {nodes.filter((node) => node.domain === slug).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
