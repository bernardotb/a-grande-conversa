'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { AtlasNode, AtlasEdge } from '@/lib/atlas-six-ideas/types'
import { AtlasInspector } from './AtlasInspector'

interface AtlasMobileDrawerProps {
  node: AtlasNode | null
  allNodes: AtlasNode[]
  edges: AtlasEdge[]
  onSelectNode: (node: AtlasNode) => void
  onClose: () => void
}

export function AtlasMobileDrawer({
  node, allNodes, edges, onSelectNode, onClose,
}: AtlasMobileDrawerProps) {
  // Close on Escape
  useEffect(() => {
    if (!node) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [node, onClose])

  return (
    <AnimatePresence>
      {node && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-library-950/60 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80) onClose()
            }}
            className="fixed bottom-0 left-0 right-0 z-40 max-h-[72vh] rounded-t-2xl bg-library-900 shadow-card md:hidden"
            role="dialog"
            aria-label="Inspetor documental"
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-parchment-200/20" />
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: 'calc(72vh - 24px)' }}>
              <AtlasInspector
                node={node}
                allNodes={allNodes}
                edges={edges}
                onSelectNode={onSelectNode}
                onClose={onClose}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
