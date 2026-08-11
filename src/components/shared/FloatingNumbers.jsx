// src/components/shared/FloatingNumbers.jsx
import React from 'react';
import './FloatingNumbers.css';

const SYMBOLS = [
  '2:3', '5:7', '1:4', '3:5', '6:8', '1:2', '4:9', '2:5', '7:10', '1:3',
  '🍋', '🥤', '⚖️', '⭐', '✨', '💎', '🔥', '🏆', '🎯', '🧩'
];

export default function FloatingNumbers() {
  return (
    <div className="floating-symbols-layer" aria-hidden="true">
      {SYMBOLS.map((s, i) => (
        <span
          key={i}
          className="floating-symbol"
          style={{
            left: `${(i * 5.2) % 94}%`,
            top: `${(i * 7.8) % 88}%`,
            animationDelay: `${(i * 0.45) % 6}s`,
            animationDuration: `${14 + (i % 6) * 3}s`,
            fontSize: `${0.9 + (i % 3) * 0.35}rem`,
            opacity: 0.14 + (i % 3) * 0.08,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
