'use client'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type IdeaFlowNodeData = {
  label: string
  icon: string
  color: string
  slug: string
  isExpanded: boolean
  dimmed?: boolean
}

export function IdeaFlowNode({ data, selected }: NodeProps) {
  const d = data as IdeaFlowNodeData
  const size = selected || d.isExpanded ? 88 : 72

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `${selected ? 2 : 1.5}px solid ${selected ? d.color : d.color + 'aa'}`,
        background: selected ? `${d.color}18` : 'rgba(10,24,20,0.96)',
        boxShadow: selected
          ? `0 0 44px ${d.color}44, 0 0 88px ${d.color}14`
          : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        userSelect: 'none',
        opacity: d.dimmed ? 0.22 : 1,
      }}
    >
      <span
        style={{
          fontSize: selected ? '1.3rem' : '1.05rem',
          lineHeight: 1,
          color: d.color,
          opacity: selected ? 0.55 : 0.38,
          transition: 'all 0.22s ease',
        }}
      >
        {d.icon}
      </span>
      <span
        style={{
          fontSize: selected ? '0.72rem' : '0.62rem',
          fontWeight: 700,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.04em',
          color: selected ? d.color : d.color + 'cc',
          lineHeight: 1,
          transition: 'all 0.22s ease',
        }}
      >
        {d.label}
      </span>

      <Handle
        type="source"
        position={Position.Top}
        style={{ opacity: 0, pointerEvents: 'none', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        style={{ opacity: 0, pointerEvents: 'none', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />
    </div>
  )
}
