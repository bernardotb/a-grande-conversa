'use client'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type AssocFlowNodeData = {
  label: string
  parentColor: string
}

export function AssocFlowNode({ data }: NodeProps) {
  const d = data as AssocFlowNodeData

  return (
    <div
      style={{
        padding: '4px 10px',
        borderRadius: 3,
        border: `1px solid ${d.parentColor}55`,
        background: 'rgba(10,24,20,0.96)',
        cursor: 'pointer',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          fontSize: '0.6rem',
          fontWeight: 600,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.04em',
          color: d.parentColor + 'cc',
        }}
      >
        {d.label}
      </span>
      <Handle
        type="target"
        position={Position.Left}
        style={{ opacity: 0, pointerEvents: 'none', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ opacity: 0, pointerEvents: 'none', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
      />
    </div>
  )
}
