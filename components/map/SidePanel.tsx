'use client'
import type { ExpandedPath } from './types'
import { greatIdeaNodes, associatedIdeaNodes } from '@/lib/graph/nodes'
import { tensionNodes } from '@/lib/graph/tensions'
import { authorNodes } from '@/lib/graph/authors'
import { workNodes } from '@/lib/graph/works'

type Props = {
  path: ExpandedPath
  ideaColor: string
  onClose: () => void
}

const STATUS_LABEL: Record<string, string> = {
  documental:      'Documental',
  inferida:        'Inferida',
  pedagogica:      'Pedagógica',
  em_verificacao:  'Em verificação',
}

export function SidePanel({ path, ideaColor, onClose }: Props) {
  const work   = workNodes.find(w => w.id === path.workId)
  const author = authorNodes.find(a => a.id === (work?.authorId ?? path.authorId ?? ''))
  const idea   = greatIdeaNodes.find(n => n.id === path.ideaId)
  const topic  = associatedIdeaNodes.find(n => n.id === path.topicId)
  const tension = tensionNodes.find(t => t.id === path.tensionId)

  if (!work) return null

  return (
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 280,
        background: 'rgba(8,16,14,0.97)',
        borderLeft: `1px solid ${ideaColor}28`,
        backdropFilter: 'blur(10px)',
        padding: '24px 20px 32px',
        overflowY: 'auto',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          right: 14,
          top: 14,
          background: 'transparent',
          border: 'none',
          color: 'rgba(214,205,195,0.4)',
          fontSize: '1.1rem',
          cursor: 'pointer',
          lineHeight: 1,
          padding: '2px 5px',
        }}
        aria-label="Fechar painel"
      >
        ×
      </button>

      {/* Breadcrumb path */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center', paddingRight: 24 }}>
        {idea && (
          <span style={{ fontSize: '0.46rem', color: ideaColor, fontFamily: 'system-ui', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
            ● {idea.label}
          </span>
        )}
        {topic && (
          <>
            <span style={{ fontSize: '0.42rem', color: 'rgba(214,205,195,0.25)' }}>›</span>
            <span style={{ fontSize: '0.46rem', color: 'rgba(214,205,195,0.45)', fontFamily: 'system-ui', letterSpacing: '0.06em' }}>◆ {topic.label}</span>
          </>
        )}
        {tension && (
          <>
            <span style={{ fontSize: '0.42rem', color: 'rgba(214,205,195,0.25)' }}>›</span>
            <span style={{ fontSize: '0.44rem', color: 'rgba(185,149,79,0.55)', fontFamily: 'system-ui' }}>✦</span>
          </>
        )}
      </div>

      {/* Work */}
      <div>
        <span style={{ display: 'block', fontSize: '0.46rem', letterSpacing: '0.18em', color: '#4a7aaa', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: 6 }}>
          Obra
        </span>
        <h3 style={{ margin: 0, fontSize: '1rem', color: '#f4ecd8', fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 600, lineHeight: 1.3 }}>
          {work.label}
        </h3>
      </div>

      {/* Author */}
      {author && (
        <div>
          <span style={{ display: 'block', fontSize: '0.46rem', letterSpacing: '0.18em', color: '#9b7ce8', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: 5 }}>
            Autor
          </span>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(214,205,195,0.75)', fontFamily: 'system-ui' }}>
            ▲ {author.label}
            {author.period && (
              <span style={{ marginLeft: 6, fontSize: '0.68rem', color: 'rgba(214,205,195,0.35)' }}>{author.period}</span>
            )}
          </p>
        </div>
      )}

      {/* Summary */}
      <div style={{ padding: '12px 14px', border: '1px solid rgba(185,149,79,0.14)', background: 'rgba(185,149,79,0.04)', borderRadius: 2 }}>
        <p style={{ margin: 0, fontSize: '0.72rem', color: 'rgba(214,205,195,0.8)', lineHeight: 1.7, fontStyle: 'italic', fontFamily: '"Crimson Pro", Georgia, serif' }}>
          {work.summary}
        </p>
      </div>

      {/* Tension context */}
      {tension && (
        <div>
          <span style={{ display: 'block', fontSize: '0.46rem', letterSpacing: '0.18em', color: '#b9954f', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: 5 }}>
            Tensão filosófica
          </span>
          <p style={{ margin: 0, fontSize: '0.68rem', color: 'rgba(185,149,79,0.75)', lineHeight: 1.5, fontFamily: 'system-ui' }}>
            ✦ {tension.label}
          </p>
        </div>
      )}

      {/* Evidence status */}
      <div style={{ marginTop: 'auto', padding: '5px 10px', border: '1px solid rgba(185,149,79,0.2)', display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start' }}>
        <span style={{ fontSize: '0.44rem', letterSpacing: '0.14em', color: 'rgba(185,149,79,0.55)', textTransform: 'uppercase', fontFamily: 'system-ui' }}>
          Status
        </span>
        <span style={{ fontSize: '0.48rem', letterSpacing: '0.1em', color: 'rgba(185,149,79,0.75)', fontFamily: 'system-ui', fontWeight: 600, textTransform: 'uppercase' }}>
          {STATUS_LABEL[work.sourceStatus ?? 'pedagogica'] ?? 'Pedagógica'}
        </span>
      </div>
    </div>
  )
}
