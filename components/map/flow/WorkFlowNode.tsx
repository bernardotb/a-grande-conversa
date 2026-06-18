'use client'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type WorkFlowNodeData = {
  label: string
  ideaColor: string
  isSelected: boolean
}

export function WorkFlowNode({ data }: NodeProps) {
  const d = data as WorkFlowNodeData

  return (
    <div
      style={{
        maxWidth: 160,
        padding: '4px 10px',
        borderRadius: 2,
        border: `1px ${d.isSelected ? 'solid' : 'dashed'} ${d.isSelected ? '#4a7aaa' : '#4a7aaa55'}`,
        background: d.isSelected ? 'rgba(74,122,170,0.14)' : 'rgba(10,24,20,0.97)',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.18s ease',
        boxShadow: d.isSelected ? '0 0 16px rgba(74,122,170,0.22)' : 'none',
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
          color: d.isSelected ? '#6ca3d4' : '#4a7aaaaa',
          lineHeight: 1.35,
        }}
      >
        ■ {d.label}
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
