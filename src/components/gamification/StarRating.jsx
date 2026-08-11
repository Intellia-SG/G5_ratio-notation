// src/components/gamification/StarRating.jsx
import React from 'react';

export default function StarRating({ stars = 0, max = 3, size = '1.3rem' }) {
  return (
    <div className="star-rating-display" style={{ display: 'inline-flex', gap: '3px', fontSize: size }}>
      {[...Array(max)].map((_, i) => (
        <span key={i} style={{ color: i < stars ? '#ffd54f' : 'rgba(255,255,255,0.2)' }}>
          ★
        </span>
      ))}
    </div>
  );
}
