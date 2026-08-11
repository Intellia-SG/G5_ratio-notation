// src/components/gamification/StreakCounter.jsx
import React from 'react';

export default function StreakCounter({ streak = 0 }) {
  if (streak <= 0) return null;

  return (
    <div
      className="streak-counter-pill"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        background: 'rgba(255,112,67,0.2)',
        border: '1px solid rgba(255,112,67,0.4)',
        padding: '4px 10px',
        borderRadius: '20px',
        color: '#ff7043',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '0.85rem',
      }}
    >
      <span>🔥</span>
      <span>{streak} Streak!</span>
    </div>
  );
}
