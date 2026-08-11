// src/components/simulations/RatioScalerStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const SCALER_PROBLEMS = [
  { baseA: 2, baseB: 3, targetMult: 4, labelA: 'Lemon Cups 🍋', labelB: 'Water Cups 💧' },
  { baseA: 3, baseB: 5, targetMult: 3, labelA: 'Orange Cups 🍊', labelB: 'Water Cups 💧' },
  { baseA: 1, baseB: 4, targetMult: 5, labelA: 'Syrup Cups 🍯', labelB: 'Milk Cups 🥛' },
  { baseA: 4, baseB: 3, targetMult: 2, labelA: 'Flour Cups 🌾', labelB: 'Sugar Cups 🍚' },
  { baseA: 2, baseB: 7, targetMult: 3, labelA: 'Juice Cups 🧃', labelB: 'Soda Cups 🥤' },
];

function getRandomScalerProblem() {
  return SCALER_PROBLEMS[Math.floor(Math.random() * SCALER_PROBLEMS.length)];
}

export default function RatioScalerStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [problem, setProblem] = useState(() => getRandomScalerProblem());
  const [multiplier, setMultiplier] = useState(1);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const scaledA = problem.baseA * multiplier;
  const scaledB = problem.baseB * multiplier;
  const targetScaledA = problem.baseA * problem.targetMult;
  const targetScaledB = problem.baseB * problem.targetMult;

  function handleSliderChange(val) {
    sounds.click();
    setMultiplier(Number(val));
    setSuccess(false);
  }

  function newProblem() {
    stopAll();
    setProblem(getRandomScalerProblem());
    setMultiplier(1);
    setSuccess(false);
  }

  function handleCheck() {
    if (multiplier === problem.targetMult) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: "Spot on! Both terms are scaled by the exact same multiplier!", style: 'celebration' }]);
    } else {
      setShake(true);
      sounds.wrong();
      narrate([{ text: "Not quite! Adjust the multiplier slider to reach the target ratio.", style: 'encouragement' }]);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">🎚️ Station C: Proportion Scaling Beam</h3>
        <div className={`station-target-box ${shake ? 'anim-shake' : ''}`}>
          <span className="station-target-label">Target Scaled Ratio:</span>
          <span className="station-target-num number-display">{targetScaledA} : {targetScaledB}</span>
        </div>
      </div>

      <div className="scaler-station-body">
        {/* Multiplier Slider Bar */}
        <div className="scale-slider-wrap">
          <span className="scale-factor-display">Scaling Multiplier: ×{multiplier}</span>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={multiplier}
            onChange={(e) => handleSliderChange(e.target.value)}
            className="scale-range-input"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '420px', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 800 }}>
            <span>×1</span>
            <span>×2</span>
            <span>×3</span>
            <span>×4</span>
            <span>×5</span>
            <span>×6</span>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <div className="scale-comparison-grid">
          <div className="scale-box">
            <span className="scale-box-title">Base Ratio</span>
            <span className="scale-box-ratio" style={{ color: 'var(--gold)' }}>
              {problem.baseA} : {problem.baseB}
            </span>
          </div>

          <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>➔</span>

          <div className="scale-box">
            <span className="scale-box-title">Scaled Equivalent Ratio</span>
            <span className="scale-box-ratio" style={{ color: '#22c55e' }}>
              {scaledA} : {scaledB}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              ({problem.baseA}×{multiplier} : {problem.baseB}×{multiplier})
            </span>
          </div>
        </div>

        {/* Live Equation / Running Bar */}
        <div className="running-ratio-bar">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Proportional Multiplier Rule:</span>
          <span className="running-ratio-text">
            {problem.baseA} : {problem.baseB} = ({problem.baseA} × {multiplier}) : ({problem.baseB} × {multiplier}) = {scaledA} : {scaledB}
          </span>
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Brilliant scaling! Multiplying both terms by <strong>×{problem.targetMult}</strong> scales {problem.baseA} : {problem.baseB} to <strong>{targetScaledA} : {targetScaledB}</strong>!
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Try Another</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={() => setMultiplier(1)}>Reset</button>
          <button type="button" className="btn-primary" onClick={handleCheck}>Check Scaled Ratio</button>
          <button type="button" className="btn-outline" onClick={newProblem}>New Problem</button>
        </div>
      )}
    </div>
  );
}
