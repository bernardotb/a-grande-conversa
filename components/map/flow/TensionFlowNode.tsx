'use client'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type TensionFlowNodeData = {
  label: string
  ideaColor: string
  isSelected: boolean
  dimmed?: boolean
}

export function TensionFlowNode({ data }: NodeProps) {
  const d = data as TensionFlowNodeData

  return (
    <div
      style={{
        maxWidth: 190,
        padding: '4px 11px',
        borderRadius: 2,
        border: `1px solid ${d.isSelected ? '#b9954f' : '#b9954f40'}`,
        background: d.isSelected ? 'rgba(185,149,79,0.12)' : 'rgba(10,24,20,0.97)',
        opacity: d.dimmed ? 0.18 : 1,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.18s ease',
        boxShadow: d.isSelected ? '0 0 18px rgba(185,149,79,0.22)' : 'none',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '0.56rem',
          fontWeight: 600,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.03em',
          color: d.isSelected ? '#d4a84b' : '#b9954faa',
          lineHeight: 1.4,
        }}
      >
        ✦ {d.label}
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
