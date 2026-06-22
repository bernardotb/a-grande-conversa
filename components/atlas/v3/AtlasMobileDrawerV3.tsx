'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { AtlasIdeaData, AtlasOverviewIdea } from '@/lib/atlas-six-ideas/types'
import type { AtlasV3Action, AtlasV3GraphNode, AtlasV3Layout, AtlasV3State } from '@/lib/atlas-six-ideas/v3-model'
import { AtlasInspectorV3 } from './AtlasInspectorV3'

interface Props {
  state: AtlasV3State
  activeNode: AtlasV3GraphNode | null
  layout: AtlasV3Layout
  meta: AtlasOverviewIdea | null
  data: AtlasIdeaData | null
  dispatch: (action: AtlasV3Action) => void
}

export function AtlasMobileDrawerV3({ state, activeNode, layout, meta, data, dispatch }: Props) {
  return (
    <AnimatePresence>
      {state.inspectorOpen && !['home', 'idea'].includes(state.view) ? (
        <>
          <motion.button
            type="button"
            aria-label="Fechar inspetor"
            className="fixed inset-0 z-40 bg-library-950/70 md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'CLOSE_INSPECTOR' })}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Inspetor documental"
            className="fixed inset-x-0 bottom-0 z-50 max-h-[78vh] overflow-y-auto border-t border-antique-400/45 bg-library-900 md:hidden"
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
          >
            <AtlasInspectorV3
              state={state} activeNode={activeNode} layout={layout} meta={meta} data={data} dispatch={dispatch}
              onClose={() => dispatch({ type: 'CLOSE_INSPECTOR' })}
            />
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
