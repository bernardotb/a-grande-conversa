import type { GBWWVolume, SyntopiconReference, JusticeTopic } from "./types";
import { gbwwVolumes } from "./gbww-volumes";
import { syntopiconReferences } from "./syntopicon-references";
import { justiceTopics } from "./justice-topics";

export function getVolume(n: number): GBWWVolume | undefined {
  return gbwwVolumes.find((v) => v.volumeNumber === n);
}

export function getTopicRefs(topicId: string): SyntopiconReference[] {
  return syntopiconReferences.filter((r) => r.topicId === topicId);
}

export function getVolumeRefs(volumeNumber: number): SyntopiconReference[] {
  return syntopiconReferences.filter((r) => r.gbwwVolume === volumeNumber);
}

export function getIdeaRefs(ideaSlug: string): SyntopiconReference[] {
  return syntopiconReferences.filter((r) => r.ideaSlug === ideaSlug);
}

export function getTopicsByVolumeNumber(volumeNumber: number): JusticeTopic[] {
  return justiceTopics.filter((t) => t.volumeIds.includes(volumeNumber));
}

export function groupRefsByTopic(
  refs: SyntopiconReference[]
): Record<string, SyntopiconReference[]> {
  return refs.reduce<Record<string, SyntopiconReference[]>>((acc, ref) => {
    const key = ref.topicId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(ref);
    return acc;
  }, {});
}

export function getEvidenceLabel(
  status: SyntopiconReference["evidenceStatus"]
): string {
  const labels: Record<SyntopiconReference["evidenceStatus"], string> = {
    documental: "Documentado",
    em_verificacao: "Em verificação",
    inferida: "Inferida",
    pedagogica: "Pedagógica",
  };
  return labels[status];
}

export function getRelevanceLabel(
  relevance: SyntopiconReference["relevance"]
): string {
  const labels: Record<SyntopiconReference["relevance"], string> = {
    central: "Central",
    supporting: "Complementar",
    contextual: "Contextual",
  };
  return labels[relevance];
}

export function getPeriodLabel(category: GBWWVolume["category"]): string {
  const labels: Record<GBWWVolume["category"], string> = {
    introductory: "Introdutório",
    classical_antiquity: "Antiguidade Clássica",
    middle_ages_renaissance: "Idade Média e Renascimento",
    early_modern: "Modernidade Inicial",
    nineteenth_century: "Século XIX",
    twentieth_century: "Século XX",
  };
  return labels[category];
}
