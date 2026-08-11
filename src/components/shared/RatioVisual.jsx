// src/components/shared/RatioVisual.jsx
import React from 'react';

export default function RatioVisual({ type = 'bar_model', data, compact = false }) {
  if (!data) return null;

  const {
    valA = 2,
    valB = 3,
    simpA = 2,
    simpB = 3,
    simpC,
    labelA = 'Part A',
    labelB = 'Part B',
    labelC = 'Part C',
  } = data;

  if (type === 'three_part' && simpC !== undefined) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%', margin: '6px 0' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Part A */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,112,67,0.18)', padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(255,112,67,0.35)' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(Math.min(simpA, 8))].map((_, i) => (
                <div key={i} style={{ width: compact ? '16px' : '22px', height: compact ? '16px' : '22px', background: '#ff7043', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff9f43' }}>{labelA} ({simpA})</span>
          </div>

          <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffc107' }}>:</span>

          {/* Part B */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(63,81,181,0.18)', padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(63,81,181,0.35)' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(Math.min(simpB, 8))].map((_, i) => (
                <div key={i} style={{ width: compact ? '16px' : '22px', height: compact ? '16px' : '22px', background: '#3f51b5', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#818cf8' }}>{labelB} ({simpB})</span>
          </div>

          <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffc107' }}>:</span>

          {/* Part C */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(76,175,80,0.18)', padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(76,175,80,0.35)' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(Math.min(simpC, 8))].map((_, i) => (
                <div key={i} style={{ width: compact ? '16px' : '22px', height: compact ? '16px' : '22px', background: '#4caf50', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#81c784' }}>{labelC} ({simpC})</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%', margin: '4px 0' }}>
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Part A */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,112,67,0.15)', padding: '6px 14px', borderRadius: '12px', border: '1px solid rgba(255,112,67,0.35)' }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {[...Array(Math.min(simpA, 8))].map((_, i) => (
              <div key={i} style={{ width: compact ? '18px' : '24px', height: compact ? '18px' : '24px', background: '#ff7043', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#ff9f43', fontSize: '0.9rem' }}>
            {labelA} ({simpA})
          </span>
        </div>

        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--gold)' }}>:</span>

        {/* Part B */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(63,81,181,0.15)', padding: '6px 14px', borderRadius: '12px', border: '1px solid rgba(63,81,181,0.35)' }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {[...Array(Math.min(simpB, 8))].map((_, i) => (
              <div key={i} style={{ width: compact ? '18px' : '24px', height: compact ? '18px' : '24px', background: '#3f51b5', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#818cf8', fontSize: '0.9rem' }}>
            {labelB} ({simpB})
          </span>
        </div>
      </div>
    </div>
  );
}
