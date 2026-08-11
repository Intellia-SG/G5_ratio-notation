// src/components/RatioBars.jsx
// Topic-adapted equivalent of reference's ArrayGrid.jsx
// Same CSS classes (array-grid / array-row / array-item), but renders two
// side-by-side bars of dots — a Singapore-style bar model for comparing
// Part A to Part B in a ratio, instead of a rows×cols multiplication array.

export default function RatioBars({ a, b, itemEmoji = '🔵', itemEmoji2 = '🟠', compact = false }) {
  return (
    <div className={`array-grid ratio-bars${compact ? ' compact' : ''}`} role="img"
      aria-label={`Ratio: ${a} to ${b}`}>
      <div className="array-row">
        {Array.from({ length: a }).map((_, i) => (
          <span key={`a${i}`} className="array-item">{itemEmoji}</span>
        ))}
      </div>
      <div className="array-row">
        {Array.from({ length: b }).map((_, i) => (
          <span key={`b${i}`} className="array-item">{itemEmoji2}</span>
        ))}
      </div>
    </div>
  );
}
