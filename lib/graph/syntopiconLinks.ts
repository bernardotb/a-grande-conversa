/** Topic → Tension links: which topic reveals which philosophical tension */
export const topicTensionLinks: { topicId: string; tensionId: string }[] = [
  // ── Verdade ──
  { topicId: 'assoc-conhecimento', tensionId: 'tension-truth-relativism' },
  { topicId: 'assoc-opiniao',      tensionId: 'tension-truth-relativism' },
  { topicId: 'assoc-ceticismo',    tensionId: 'tension-truth-relativism' },

  // ── Bondade ──
  { topicId: 'assoc-desejo',   tensionId: 'tension-real-apparent-good' },
  { topicId: 'assoc-virtude',  tensionId: 'tension-real-apparent-good' },
  { topicId: 'assoc-felicidade', tensionId: 'tension-real-apparent-good' },

  // ── Beleza ──
  { topicId: 'assoc-gosto',     tensionId: 'tension-beauty-objective-subjective' },
  { topicId: 'assoc-proporcao', tensionId: 'tension-beauty-objective-subjective' },
  { topicId: 'assoc-forma',     tensionId: 'tension-beauty-objective-subjective' },

  // ── Liberdade ──
  { topicId: 'assoc-lei',     tensionId: 'tension-liberty-license' },
  { topicId: 'assoc-lei',     tensionId: 'tension-law-barrier-guarantee' },
  { topicId: 'assoc-licenca', tensionId: 'tension-liberty-license' },
  { topicId: 'assoc-coercao', tensionId: 'tension-law-barrier-guarantee' },

  // ── Igualdade ──
  { topicId: 'assoc-dignidade',    tensionId: 'tension-dignity-outcome-equality' },
  { topicId: 'assoc-merito',       tensionId: 'tension-dignity-outcome-equality' },
  { topicId: 'assoc-merito',       tensionId: 'tension-arithmetic-proportional-equality' },
  { topicId: 'assoc-distribuicao', tensionId: 'tension-arithmetic-proportional-equality' },

  // ── Justiça ──
  { topicId: 'assoc-lei-positiva', tensionId: 'tension-natural-conventional-justice' },
  { topicId: 'assoc-lei-positiva', tensionId: 'tension-law-barrier-guarantee' },
  { topicId: 'assoc-direito',      tensionId: 'tension-force-right' },
  { topicId: 'assoc-equidade',     tensionId: 'tension-arithmetic-proportional-equality' },
]

/** Tension → Author links: which authors appear in each philosophical tension */
export const tensionAuthorLinks: { tensionId: string; authorId: string }[] = [
  // tension-truth-relativism
  { tensionId: 'tension-truth-relativism', authorId: 'author-aristoteles' },
  { tensionId: 'tension-truth-relativism', authorId: 'author-platao' },
  { tensionId: 'tension-truth-relativism', authorId: 'author-william-james' },

  // tension-real-apparent-good
  { tensionId: 'tension-real-apparent-good', authorId: 'author-aristoteles' },
  { tensionId: 'tension-real-apparent-good', authorId: 'author-platao' },
  { tensionId: 'tension-real-apparent-good', authorId: 'author-agostinho' },

  // tension-beauty-objective-subjective
  { tensionId: 'tension-beauty-objective-subjective', authorId: 'author-platao' },
  { tensionId: 'tension-beauty-objective-subjective', authorId: 'author-kant' },
  { tensionId: 'tension-beauty-objective-subjective', authorId: 'author-aristoteles' },

  // tension-liberty-license
  { tensionId: 'tension-liberty-license', authorId: 'author-mill' },
  { tensionId: 'tension-liberty-license', authorId: 'author-locke' },
  { tensionId: 'tension-liberty-license', authorId: 'author-kant' },

  // tension-dignity-outcome-equality
  { tensionId: 'tension-dignity-outcome-equality', authorId: 'author-aristoteles' },
  { tensionId: 'tension-dignity-outcome-equality', authorId: 'author-rousseau' },
  { tensionId: 'tension-dignity-outcome-equality', authorId: 'author-marx' },

  // tension-natural-conventional-justice
  { tensionId: 'tension-natural-conventional-justice', authorId: 'author-sofocles' },
  { tensionId: 'tension-natural-conventional-justice', authorId: 'author-tomas-de-aquino' },
  { tensionId: 'tension-natural-conventional-justice', authorId: 'author-hobbes' },

  // tension-force-right
  { tensionId: 'tension-force-right', authorId: 'author-agostinho' },
  { tensionId: 'tension-force-right', authorId: 'author-hobbes' },
  { tensionId: 'tension-force-right', authorId: 'author-platao' },

  // tension-law-barrier-guarantee
  { tensionId: 'tension-law-barrier-guarantee', authorId: 'author-locke' },
  { tensionId: 'tension-law-barrier-guarantee', authorId: 'author-rousseau' },
  { tensionId: 'tension-law-barrier-guarantee', authorId: 'author-hobbes' },

  // tension-arithmetic-proportional-equality
  { tensionId: 'tension-arithmetic-proportional-equality', authorId: 'author-aristoteles' },
  { tensionId: 'tension-arithmetic-proportional-equality', authorId: 'author-marx' },
]
