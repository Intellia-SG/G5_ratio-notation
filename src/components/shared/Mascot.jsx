// src/components/shared/Mascot.jsx
import React from 'react';
import './Mascot.css';

export default function Mascot({ mood = 'curious', message, size = 'md' }) {
  const emoji = mood === 'excited' ? '🦁' : mood === 'celebrate' ? '✨' : '🐣';

  return (
    <div className={`mascot-container mascot-${size}`}>
      <div className="mascot-circle">
        <span className="mascot-emoji">{emoji}</span>
      </div>
      {message && (
        <div className="mascot-bubble">
          <span className="bubble-text">{message}</span>
        </div>
      )}
    </div>
  );
}
