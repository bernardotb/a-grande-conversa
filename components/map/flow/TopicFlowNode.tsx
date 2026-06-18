'use client'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type TopicFlowNodeData = {
  label: string
  ideaColor: string
  isSelected: boolean
  dimmed?: boolean
  hasTensions?: boolean
}

export function TopicFlowNode({ data }: NodeProps) {
  const d = data as TopicFlowNodeData

  return (
    <div
      style={{
        padding: '3px 10px',
        borderRadius: 2,
        border: `1px solid ${d.isSelected ? d.ideaColor : d.ideaColor + '44'}`,
        background: d.isSelected ? `${d.ideaColor}1a` : 'rgba(10,24,20,0.96)',
        opacity: d.dimmed ? 0.18 : 1,
        cursor: 'pointer',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        transition: 'all 0.18s ease',
        boxShadow: d.isSelected ? `0 0 14px ${d.ideaColor}28` : 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <span
        style={{
          fontSize: '0.58rem',
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.02em',
          color: d.isSelected ? d.ideaColor : d.ideaColor + 'aa',
        }}
      >
        ◆
      </span>
      <span
        style={{
          fontSize: '0.6rem',
          fontWeight: 600,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.04em',
          color: d.isSelected ? d.ideaColor : d.ideaColor + 'bb',
          lineHeight: 1,
        }}
      >
        {d.label}
      </span>
      {d.hasTensions && !d.isSelected && (
        <span
          style={{
            fontSize: '0.48rem',
            color: d.ideaColor + '55',
            lineHeight: 1,
          }}
        >
          ▸
        </span>
      )}
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
