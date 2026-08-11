// src/components/simulations/RatioScaleBeamStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const SCALING_CHALLENGES = [
  { baseA: 1, baseB: 4, multiplier: 3, labelA: 'Gold Ingots 🪙', labelB: 'Silver Coins 🔘' },
  { baseA: 2, baseB: 3, multiplier: 4, labelA: 'Gold Ingots 🪙', labelB: 'Silver Coins 🔘' },
  { baseA: 3, baseB: 2, multiplier: 3, labelA: 'Gold Ingots 🪙', labelB: 'Silver Coins 🔘' },
  { baseA: 2, baseB: 5, multiplier: 2, labelA: 'Gold Ingots 🪙', labelB: 'Silver Coins 🔘' },
  { baseA: 1, baseB: 5, multiplier: 3, labelA: 'Gold Ingots 🪙', labelB: 'Silver Coins 🔘' },
];

function getRandomChallenge() {
  return SCALING_CHALLENGES[Math.floor(Math.random() * SCALING_CHALLENGES.length)];
}

export default function RatioScaleBeamStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [challenge, setChallenge] = useState(() => getRandomChallenge());
  const [coins, setCoins] = useState(0);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const ingotsCount = challenge.baseA * challenge.multiplier;
  const targetCoins = challenge.baseB * challenge.multiplier;

  // Calculate dynamic tilt angle (-12deg to +12deg)
  const diff = targetCoins - coins;
  const tiltAngle = Math.max(-12, Math.min(12, diff * 1.5));

  function addCoins(amount) {
    if (coins + amount > 25) return;
    sounds.click();
    setCoins((c) => Math.min(25, c + amount));
    setSuccess(false);
  }

  function removeCoins(amount) {
    sounds.click();
    setCoins((c) => Math.max(0, c - amount));
    setSuccess(false);
  }

  function newProblem() {
    stopAll();
    setChallenge(getRandomChallenge());
    setCoins(0);
    setSuccess(false);
  }

  function handleCheck() {
    if (coins === targetCoins) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: `Equilibrium achieved! The ratio ${challenge.baseA} : ${challenge.baseB} scales proportionally by ×${challenge.multiplier} to ${ingotsCount} : ${targetCoins}!`, style: 'celebration' }]);
    } else {
      setShake(true);
      sounds.wrong();
      narrate([{ text: "The scales are not yet balanced! Calculate the multiplier and adjust the coins.", style: 'encouragement' }]);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">⚖️ Lab 3: Ratio Balance Beam & Scale Multiplier</h3>
        <div className={`station-target-box ${shake ? 'anim-shake' : ''}`}>
          <span className="station-target-label">Base Ratio:</span>
          <span className="station-target-num number-display">{challenge.baseA} : {challenge.baseB}</span>
        </div>
      </div>

      <div className="scale-beam-body">
        <div style={{ textAlign: 'center', color: 'var(--gold-light)', fontWeight: 700, fontSize: '0.95rem' }}>
          Left Pan holds <strong>{ingotsCount} Gold Ingots</strong> (scaled by ×{challenge.multiplier}). Balance the scale with proportional silver coins!
        </div>

        {/* 2-Pan Dynamic Tilt Balance Rig */}
        <div className="balance-rig-container">
          <div className="balance-fulcrum-pivot" />

          <div
            className="balance-beam-bar"
            style={{ transform: `rotate(${-tiltAngle}deg)` }}
          >
            {/* Left Pan (Gold Ingots) */}
            <div className="beam-pan-left">
              <div className="pan-weights-stack">
                {[...Array(Math.min(ingotsCount, 12))].map((_, i) => (
                  <span key={i} className="pan-coin">🪙</span>
                ))}
              </div>
              <div className="pan-plate">
                {ingotsCount} Ingots
              </div>
            </div>

            {/* Center Fulcrum Indicator */}
            <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', margin: '0 auto' }} />

            {/* Right Pan (Silver Coins) */}
            <div className="beam-pan-right">
              <div className="pan-weights-stack">
                {[...Array(Math.min(coins, 18))].map((_, i) => (
                  <span key={i} className="pan-coin">🔘</span>
                ))}
              </div>
              <div className="pan-plate" style={{ borderColor: coins === targetCoins ? '#22c55e' : 'var(--gold-light)' }}>
                {coins} Coins
              </div>
            </div>
          </div>
        </div>

        {/* Coin Controls */}
        <div className="scale-controls-row">
          <button type="button" className="scale-btn-pill" onClick={() => removeCoins(1)} disabled={coins <= 0}>
            −1 Coin
          </button>
          <button type="button" className="scale-btn-pill" onClick={() => addCoins(1)} disabled={coins >= 25}>
            +1 Coin 🔘
          </button>
          <button type="button" className="scale-btn-pill" onClick={() => addCoins(challenge.baseB)} disabled={coins + challenge.baseB > 25}>
            +{challenge.baseB} Coins (1 Unit)
          </button>
        </div>

        {/* Real-time Proportional Equation */}
        <div className="running-ratio-bar">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Proportional Scale Equation:</span>
          <span className="running-ratio-text">
            {challenge.baseA} : {challenge.baseB} = ({challenge.baseA} × {challenge.multiplier}) : ({challenge.baseB} × {challenge.multiplier}) = {ingotsCount} : {coins} {coins === targetCoins ? '⚖️ (BALANCED!)' : '⚠️ (TILTED)'}
          </span>
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Perfect Equilibrium! Multiplying both terms of <strong>{challenge.baseA} : {challenge.baseB}</strong> by <strong>×{challenge.multiplier}</strong> yields the equivalent ratio <strong>{ingotsCount} : {targetCoins}</strong>!
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Try Another Scale</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={() => setCoins(0)}>Reset Scale</button>
          <button type="button" className="btn-primary" onClick={handleCheck}>Verify Equilibrium</button>
          <button type="button" className="btn-outline" onClick={newProblem}>New Challenge</button>
        </div>
      )}
    </div>
  );
}
