// src/components/phases/WonderPhase.jsx
import React, { useEffect } from 'react';
import './WonderPhase.css';
import Mascot from '../shared/Mascot.jsx';
import { useAudio } from '../../hooks/useAudio.js';
import { wonderNarration } from '../../utils/narration.js';

const PARTICLES = ['🍋', '🥤', '⚖️', '⭐', '🏆', '🎯', '💡', '🧩', '✨', '💧'];

export default function WonderPhase({ state, dispatch }) {
  const { narrate, stopAll } = useAudio(state.audioEnabled);

  useEffect(() => {
    const segs = wonderNarration();
    narrate(segs);
    return () => stopAll();
  }, [narrate, stopAll]);

  function handleInvestigate() {
    stopAll();
    dispatch({ type: 'COMPLETE_PHASE', payload: 'wonder' });
    dispatch({ type: 'SET_PHASE', payload: 'story' });
  }

  return (
    <div className="wonder-wrap">
      {/* Floating particles */}
      <div className="wonder-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="wonder-particle"
            style={{
              left: `${5 + (i * 9.5) % 90}%`,
              top: `${5 + (i * 7.5) % 80}%`,
              animationDelay: `${i * 0.6}s`,
              fontSize: `${1.1 + (i % 3) * 0.4}rem`,
            }}
          >
            {p}
          </span>
        ))}
      </div>

      <div className="wonder-content anim-slide-up">
        {/* Main hook card */}
        <div className="wonder-card glass-card">
          <div className="wonder-stadium-icon" aria-hidden="true">🥤</div>
          <h1 className="wonder-title headline">The Big Mystery!</h1>

          <div className="wonder-number-display">
            <span className="number-display wonder-num">2 : 5 ➔ 8 : 20</span>
          </div>

          <div className="wonder-question-card">
            <p className="body-text wonder-q">
              If Leo and Mia mix <strong className="wonder-em">2 cups lemon juice</strong> for every <strong className="wonder-em">5 cups water</strong> into a dispenser…
            </p>
            <p className="body-text wonder-q">
              How do we write this comparison in <span className="wonder-highlight">ratio notation</span>, and how do we scale it for 20 cups of water?
            </p>
          </div>

          {/* Mascot */}
          <div className="wonder-mascot-row">
            <Mascot mood="curious" message="Let's investigate how ratio notation helps us compare and scale quantities!" size="sm" />
          </div>

          <button type="button" className="btn-primary wonder-cta" onClick={handleInvestigate}>
            🔍 Let's Investigate!
          </button>
        </div>
      </div>
    </div>
  );
}
