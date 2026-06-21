export interface AdlerCorrespondence {
  adlerAspectId: string
  syntopicNodeIds: string[]
  label: string
}

export const ADLER_SYNTOPICON_CORRESPONDENCES: Record<string, AdlerCorrespondence[]> = {
  Justice: [
    {
      adlerAspectId: 'adler-justice-justice_and_liberty',
      syntopicNodeIds: ['topic-justice-justice-and-liberty'],
      label: 'Liberdade e licença',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_rights',
      syntopicNodeIds: ['topic-justice-justice-as-the-interest-of-the-stronger-or-conformity-to-the-will-of-the-sovereign'],
      label: 'Direitos naturais',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_equality',
      syntopicNodeIds: ['topic-justice-justice-and-equality'],
      label: 'Igualdade e mérito',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_law',
      syntopicNodeIds: ['topic-justice-justice-and-law'],
      label: 'Justiça e lei positiva',
    },
    {
      adlerAspectId: 'adler-justice-justice_and_common_good',
      syntopicNodeIds: ['topic-justice-political-justice'],
      label: 'Bem comum e política',
    },
  ],
  Truth: [],
  Goodness: [],
  Beauty: [],
  Liberty: [],
  Equality: [],
}

export function getCorrespondences(ideaId: string): AdlerCorrespondence[] {
  return ADLER_SYNTOPICON_CORRESPONDENCES[ideaId] ?? []
}
