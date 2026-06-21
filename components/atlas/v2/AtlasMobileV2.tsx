'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { AtlasState, AtlasAction } from '@/lib/atlas-six-ideas/atlas-state'
import type { AtlasIdeaData, AtlasOverviewIdea } from '@/lib/atlas-six-ideas/types'
import { AtlasInspectorV2 } from './AtlasInspectorV2'

interface Props {
  open: boolean
  atlasState: AtlasState
  dispatch: (a: AtlasAction) => void
  ideaMeta: AtlasOverviewIdea | null
  ideaData: AtlasIdeaData | null
}

export function AtlasMobileV2({ open, atlasState, dispatch, ideaMeta, ideaData }: Props) {
  const drawerRef = useRef<HTMLDivElement>(null)

  // Focus first focusable element when drawer opens
  useEffect(() => {
    if (!open) return
    const timer = setTimeout(() => {
      const el = drawerRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      el?.focus()
    }, 120)
    return () => clearTimeout(timer)
  }, [open])

  // Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch({ type: 'CLOSE_INSPECTOR' })
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, dispatch])

  const close = () => dispatch({ type: 'CLOSE_INSPECTOR' })

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-30 bg-library-950/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Inspetor documental"
            className="fixed bottom-0 left-0 right-0 z-40 flex flex-col rounded-t-2xl bg-library-900 shadow-2xl"
            style={{ maxHeight: '74vh' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80) close()
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pb-1 pt-3">
              <div className="h-1 w-10 rounded-full bg-parchment-100/18" />
            </div>

            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-antique-500/15 px-4 py-2">
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.2em] text-antique-400/65">
                Inspetor documental
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar inspetor"
                className="rounded px-2 py-1 font-sans text-[0.62rem] text-parchment-100/45 hover:text-antique-400 transition"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              <AtlasInspectorV2
                atlasState={atlasState}
                dispatch={dispatch}
                ideaMeta={ideaMeta}
                ideaData={ideaData}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
