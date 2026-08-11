// src/components/simulations/RatioMixerStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import RatioVisual from '../shared/RatioVisual.jsx';
import { useAudio } from '../../hooks/useAudio.js';

const RECIPES = [
  { targetA: 2, targetB: 5, labelA: 'Lemon Juice 🍋', labelB: 'Water 💧' },
  { targetA: 3, targetB: 4, labelA: 'Lemon Juice 🍋', labelB: 'Water 💧' },
  { targetA: 1, targetB: 3, labelA: 'Lemon Juice 🍋', labelB: 'Water 💧' },
  { targetA: 4, targetB: 5, labelA: 'Lemon Juice 🍋', labelB: 'Water 💧' },
  { targetA: 3, targetB: 2, labelA: 'Lemon Juice 🍋', labelB: 'Water 💧' },
];

function getRandomRecipe() {
  return RECIPES[Math.floor(Math.random() * RECIPES.length)];
}

export default function RatioMixerStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [recipe, setRecipe] = useState(() => getRandomRecipe());
  const [placed, setPlaced] = useState({ a: 0, b: 0 });
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  function addPart(key) {
    if (placed[key] >= 10) return;
    const next = { ...placed, [key]: placed[key] + 1 };
    setPlaced(next);
    sounds.click();

    if (next.a === recipe.targetA && next.b === recipe.targetB) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: "Amazing! You built the exact ratio notation perfectly!", style: 'celebration' }]);
    }
  }

  function removePart(key) {
    if (placed[key] <= 0) return;
    setPlaced((p) => ({ ...p, [key]: p[key] - 1 }));
    setSuccess(false);
  }

  function newProblem() {
    stopAll();
    setRecipe(getRandomRecipe());
    setPlaced({ a: 0, b: 0 });
    setSuccess(false);
  }

  function handleCheck() {
    if (placed.a === recipe.targetA && placed.b === recipe.targetB) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: "Amazing! You built the exact ratio notation perfectly!", style: 'celebration' }]);
    } else {
      setShake(true);
      sounds.wrong();
      narrate([{ text: "Not quite! Check your ratio terms and try again.", style: 'encouragement' }]);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">🍋 Station A: Ingredient Ratio Mixer</h3>
        <div className={`station-target-box ${shake ? 'anim-shake' : ''}`}>
          <span className="station-target-label">Target Ratio:</span>
          <span className="station-target-num number-display">{recipe.targetA} : {recipe.targetB}</span>
        </div>
      </div>

      <div className="mixer-body">
        {/* Supply Dispensers */}
        <div className="mixer-supply">
          <div className="mixer-supply-item">
            <button
              type="button"
              className="mixer-btn"
              style={{ background: '#f59e0b' }}
              onClick={() => addPart('a')}
              disabled={success}
            >
              <span className="mixer-icon">🍋</span>
              <span className="mixer-label">Lemon Juice</span>
              <span className="mixer-count">{placed.a} / {recipe.targetA}</span>
            </button>
            <button
              type="button"
              className="mixer-minus"
              onClick={() => removePart('a')}
              disabled={placed.a === 0}
            >
              −
            </button>
          </div>

          <div className="mixer-supply-item">
            <button
              type="button"
              className="mixer-btn"
              style={{ background: '#0284c7' }}
              onClick={() => addPart('b')}
              disabled={success}
            >
              <span className="mixer-icon">💧</span>
              <span className="mixer-label">Water</span>
              <span className="mixer-count">{placed.b} / {recipe.targetB}</span>
            </button>
            <button
              type="button"
              className="mixer-minus"
              onClick={() => removePart('b')}
              disabled={placed.b === 0}
            >
              −
            </button>
          </div>
        </div>

        {/* Visual Bar & Live Ratio */}
        <div className="mixer-visual-area">
          <RatioVisual
            type="bar_model"
            data={{
              valA: placed.a,
              valB: placed.b,
              simpA: Math.max(placed.a, 1),
              simpB: Math.max(placed.b, 1),
              labelA: 'Lemon Juice 🍋',
              labelB: 'Water 💧',
            }}
          />

          <div className="running-ratio-bar">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Current Mixture Ratio:</span>
            <span className="running-ratio-text">
              {placed.a > 0 || placed.b > 0
                ? `${placed.a} cups lemon : ${placed.b} cups water ➔ Ratio Notation: ${placed.a} : ${placed.b}`
                : 'Click + on the dispensers to add ingredient cups!'}
            </span>
          </div>
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Perfect recipe mix! <strong>{recipe.targetA}</strong> cups lemon juice to <strong>{recipe.targetB}</strong> cups water forms the exact ratio <strong>{recipe.targetA} : {recipe.targetB}</strong>!
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Try Another</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={() => setPlaced({ a: 0, b: 0 })}>Reset</button>
          <button type="button" className="btn-primary" onClick={handleCheck}>Check Ratio Mix</button>
          <button type="button" className="btn-outline" onClick={newProblem}>New Recipe</button>
        </div>
      )}
    </div>
  );
}
