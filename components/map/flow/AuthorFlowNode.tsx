'use client'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type AuthorFlowNodeData = {
  label: string
  period?: string
  ideaColor: string
  isSelected: boolean
  dimmed?: boolean
}

export function AuthorFlowNode({ data }: NodeProps) {
  const d = data as AuthorFlowNodeData

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        cursor: 'pointer',
        userSelect: 'none',
        opacity: d.dimmed ? 0.18 : 1,
        transition: 'all 0.18s ease',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: `1px solid ${d.isSelected ? '#9b7ce8' : '#9b7ce844'}`,
          background: d.isSelected ? 'rgba(155,124,232,0.14)' : 'rgba(10,24,20,0.97)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.82rem',
          color: d.isSelected ? '#9b7ce8' : '#9b7ce860',
          boxShadow: d.isSelected ? '0 0 16px rgba(155,124,232,0.25)' : 'none',
          transition: 'all 0.18s ease',
        }}
      >
        ▲
      </div>
      <span
        style={{
          fontSize: '0.52rem',
          fontWeight: 700,
          fontFamily: 'system-ui, sans-serif',
          color: d.isSelected ? '#d6cdc3' : '#d6cdc3aa',
          maxWidth: 80,
          textAlign: 'center',
          lineHeight: 1.25,
          display: 'block',
          letterSpacing: '0.02em',
        }}
      >
        {d.label}
      </span>
      {d.period && (
        <span
          style={{
            fontSize: '0.44rem',
            color: '#d6cdc340',
            textAlign: 'center',
            display: 'block',
          }}
        >
          {d.period}
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
