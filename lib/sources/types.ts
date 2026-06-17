export type GBWWVolume = {
  id: string;
  volumeNumber: number;
  title: string;
  shortTitle: string;
  authors: string[];
  works: string[];
  period: string;
  category:
    | "introductory"
    | "classical_antiquity"
    | "middle_ages_renaissance"
    | "early_modern"
    | "nineteenth_century"
    | "twentieth_century";
  archivePdfUrl: string;
  localFilePath?: string;
  externalPdfUrl?: string;
  internalPageUrl: string;
  description?: string;
  connectedIdeaIds: string[];
  connectedTopicIds: string[];
};

export type SyntopiconIdeaSource = {
  ideaSlug: string;
  title: string;
  syntopiconChapter: number;
  syntopiconSourceVolume: number;
  internalPageUrl: string;
  sourcePdfUrl?: string;
  localFilePath?: string;
  connectedVolumeIds: number[];
};

export type SyntopiconReference = {
  id: string;

  ideaSlug: string;
  topicId: string;
  debateId?: string;

  displayReference: string;
  technicalReference: string;

  gbwwVolume: number;
  volumeTitle: string;
  volumePageUrl: string;
  volumePdfUrl: string;

  author: string;
  work: string;
  internalLocation?: string;
  gbwwLocation?: string;

  role: string;

  relevance: "central" | "supporting" | "contextual";
  evidenceStatus: "documental" | "em_verificacao" | "inferida" | "pedagogica";

  connectedIdeaIds?: string[];
};

export type JusticeTopic = {
  id: string;
  title: string;
  question: string;
  summary: string;
  connectedIdeaIds: string[];
  referenceIds: string[];
  volumeIds: number[];
};

export type JusticeDebate = {
  id: string;
  title: string;
  question: string;
  poleA: string;
  poleB: string;
  authorsA?: string[];
  authorsB?: string[];
  connectedIdeaIds: string[];
  referenceIds: string[];
};
