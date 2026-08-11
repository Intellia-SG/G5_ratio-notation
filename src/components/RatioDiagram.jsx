// src/components/RatioDiagram.jsx
// Topic-adapted equivalent of reference's EqualGroupsDiagram.jsx
// Same SVG structure, same prop contract (groups/size/total/missing),
// relabelled for ratio: Whole (top), Part A (bottom-left), Part B (bottom-right).

export default function RatioDiagram({ groups, size, total, missing = 'none', animated = false }) {
  const isMissing = (slot) => missing === slot;
  const display = (val, slot) => isMissing(slot) ? '?' : val;
  const fillFor = (slot) => isMissing(slot) ? '#FFF9C4' : (slot === 'total' ? '#4A90D9' : '#FF8A50');
  const strokeFor = (slot) => isMissing(slot) ? '#FFB300' : (slot === 'total' ? '#2E5C8A' : '#E65C00');
  const dashFor = (slot) => isMissing(slot) ? '6 4' : 'none';

  return (
    <svg
      viewBox="0 0 280 230"
      className={`equal-groups-diagram${animated ? ' animated' : ''}`}
      role="img"
      aria-label={`Ratio diagram: Part A ${groups} to Part B ${size}, whole ${total}`}
    >
      {/* Branch lines */}
      <line x1="140" y1="78" x2="75"  y2="152" stroke="#9B8AC4" strokeWidth="3" />
      <line x1="140" y1="78" x2="205" y2="152" stroke="#9B8AC4" strokeWidth="3" />

      {/* Whole — top circle */}
      <circle cx="140" cy="52" r="44" fill={fillFor('total')} stroke={strokeFor('total')}
        strokeWidth="3" strokeDasharray={dashFor('total')} />
      <text x="140" y="59" textAnchor="middle" className="diagram-num">{display(total, 'total')}</text>
      <text x="140" y="18" textAnchor="middle" className="diagram-label">Whole</text>

      {/* Part A — bottom-left */}
      <circle cx="75" cy="178" r="36" fill={fillFor('groups')} stroke={strokeFor('groups')}
        strokeWidth="3" strokeDasharray={dashFor('groups')} />
      <text x="75" y="185" textAnchor="middle" className="diagram-num">{display(groups, 'groups')}</text>
      <text x="75" y="224" textAnchor="middle" className="diagram-label">Part A</text>

      {/* Part B — bottom-right */}
      <circle cx="205" cy="178" r="36" fill={fillFor('size')} stroke={strokeFor('size')}
        strokeWidth="3" strokeDasharray={dashFor('size')} />
      <text x="205" y="185" textAnchor="middle" className="diagram-num">{display(size, 'size')}</text>
      <text x="205" y="224" textAnchor="middle" className="diagram-label">Part B</text>
    </svg>
  );
}
