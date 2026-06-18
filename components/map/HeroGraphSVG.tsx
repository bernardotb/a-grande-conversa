const IDEAS = [
  { id: 'idea-truth',    label: 'Verdade',   icon: '◎', color: '#7c5cd4', cx: 250, cy: 95  },
  { id: 'idea-beauty',   label: 'Beleza',    icon: '◇', color: '#9260c4', cx: 112, cy: 228 },
  { id: 'idea-goodness', label: 'Bondade',   icon: '◈', color: '#6248b8', cx: 388, cy: 228 },
  { id: 'idea-liberty',  label: 'Liberdade', icon: '◯', color: '#2d8a58', cx: 112, cy: 378 },
  { id: 'idea-equality', label: 'Igualdade', icon: '⊜', color: '#247b4e', cx: 388, cy: 378 },
  { id: 'idea-justice',  label: 'Justiça',   icon: '⊖', color: '#1a6a42', cx: 250, cy: 468 },
]

const EDGES = [
  { s: 'idea-truth',    t: 'idea-justice',  c: '#b9954f', d: '5 3',  op: 0.18 },
  { s: 'idea-truth',    t: 'idea-beauty',   c: '#9b7ce8', d: '',     op: 0.26 },
  { s: 'idea-truth',    t: 'idea-goodness', c: '#9b7ce8', d: '',     op: 0.26 },
  { s: 'idea-goodness', t: 'idea-justice',  c: '#6248b8', d: '',     op: 0.20 },
  { s: 'idea-justice',  t: 'idea-liberty',  c: '#c06060', d: '4 2',  op: 0.28 },
  { s: 'idea-justice',  t: 'idea-equality', c: '#c06060', d: '4 2',  op: 0.28 },
  { s: 'idea-liberty',  t: 'idea-equality', c: '#c06060', d: '6 2',  op: 0.18 },
  { s: 'idea-beauty',   t: 'idea-goodness', c: '#b9954f', d: '',     op: 0.14 },
]

const pos = Object.fromEntries(IDEAS.map(n => [n.id, n]))

export function HeroGraphSVG() {
  return (
    <svg
      viewBox="0 0 500 560"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="hg-purple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c5cd4" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#7c5cd4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hg-green" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a6a42" stopOpacity="0.11" />
          <stop offset="100%" stopColor="#1a6a42" stopOpacity="0" />
        </radialGradient>
        <style>{`
          .hg-node { cursor: default; }
          .hg-node circle.ring { transition: stroke-opacity 0.22s, r 0.22s; }
          .hg-node:hover circle.ring { stroke-opacity: 1 !important; }
          .hg-node text.label { transition: opacity 0.22s; }
          .hg-node:hover text.label { opacity: 1 !important; }
        `}</style>
      </defs>

      {/* Ambient glows */}
      <ellipse cx="250" cy="200" rx="215" ry="175" fill="url(#hg-purple)" opacity="0.7" />
      <ellipse cx="250" cy="395" rx="195" ry="165" fill="url(#hg-green)" opacity="0.65" />

      {/* Edges */}
      {EDGES.map(({ s, t, c, d, op }) => {
        const src = pos[s]
        const tgt = pos[t]
        if (!src || !tgt) return null
        return (
          <line
            key={`${s}-${t}`}
            x1={src.cx} y1={src.cy}
            x2={tgt.cx} y2={tgt.cy}
            stroke={c}
            strokeWidth={0.9}
            strokeDasharray={d || undefined}
            opacity={op}
          />
        )
      })}

      {/* Nodes */}
      {IDEAS.map(idea => (
        <g key={idea.id} className="hg-node">
          {/* Hit area */}
          <circle cx={idea.cx} cy={idea.cy} r={44} fill="transparent" />
          {/* Ring */}
          <circle
            className="ring"
            cx={idea.cx} cy={idea.cy} r={34}
            fill="rgba(10,24,20,0.96)"
            stroke={idea.color}
            strokeWidth={1.5}
            strokeOpacity={0.75}
          />
          {/* Icon */}
          <text
            x={idea.cx} y={idea.cy - 4}
            textAnchor="middle"
            fontSize="12"
            fill={idea.color}
            opacity={0.38}
          >
            {idea.icon}
          </text>
          {/* Label */}
          <text
            className="label"
            x={idea.cx} y={idea.cy + 10}
            textAnchor="middle"
            fontSize="8"
            fill={idea.color}
            fontWeight="600"
            opacity={0.72}
            style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.04em' }}
          >
            {idea.label}
          </text>
        </g>
      ))}

      {/* Axis labels */}
      <rect x="12" y="74" width="56" height="14" rx="2" fill="rgba(124,92,212,0.08)" stroke="rgba(124,92,212,0.18)" strokeWidth="0.7" />
      <text x="40" y="85" textAnchor="middle" fontSize="6.5" fill="#9b7ce8" style={{ fontFamily: 'sans-serif', fontWeight: 700, letterSpacing: '0.1em' }}>JULGAR</text>

      <rect x="12" y="358" width="46" height="14" rx="2" fill="rgba(26,106,66,0.08)" stroke="rgba(26,106,66,0.22)" strokeWidth="0.7" />
      <text x="35" y="369" textAnchor="middle" fontSize="6.5" fill="#2d8a58" style={{ fontFamily: 'sans-serif', fontWeight: 700, letterSpacing: '0.1em' }}>AGIR</text>

      <text
        x="250" y="548"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(244,236,216,0.16)"
        style={{ fontFamily: 'sans-serif' }}
      >
        Clique numa ideia abaixo · Ver mapa completo →
      </text>
    </svg>
  )
}
