// src/components/simulations/PaintAlchemistStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const POTIONS = [
  { name: 'Emerald Glow', targetA: 3, targetB: 2, labelA: 'Ocean Cyan 💧', labelB: 'Sun Amber 🟡', colorA: '#00e5ff', colorB: '#ffb300', blendHex: '#10b981' },
  { name: 'Royal Twilight', targetA: 2, targetB: 5, labelA: 'Crimson Ruby 🔴', labelB: 'Deep Sapphire 🔵', colorA: '#ef4444', colorB: '#3b82f6', blendHex: '#8b5cf6' },
  { name: 'Golden Sunrise', targetA: 4, targetB: 1, labelA: 'Solar Yellow 🟡', labelB: 'Blaze Orange 🟠', colorA: '#facc15', colorB: '#f97316', blendHex: '#eab308' },
  { name: 'Mint Breeze', targetA: 1, targetB: 4, labelA: 'Forest Lime 🟢', labelB: 'Glacier Cyan 💧', colorA: '#84cc16', colorB: '#06b6d4', blendHex: '#14b8a6' },
];

function getRandomPotion() {
  return POTIONS[Math.floor(Math.random() * POTIONS.length)];
}

export default function PaintAlchemistStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [potion, setPotion] = useState(() => getRandomPotion());
  const [dropsA, setDropsA] = useState(0);
  const [dropsB, setDropsB] = useState(0);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const totalDrops = dropsA + dropsB;

  function addDrop(type) {
    if (totalDrops >= 15) return;
    sounds.click();
    if (type === 'a') setDropsA((a) => a + 1);
    else setDropsB((b) => b + 1);
    setSuccess(false);
  }

  function removeDrop(type) {
    sounds.click();
    if (type === 'a' && dropsA > 0) setDropsA((a) => a - 1);
    else if (type === 'b' && dropsB > 0) setDropsB((b) => b - 1);
    setSuccess(false);
  }

  function newProblem() {
    stopAll();
    setPotion(getRandomPotion());
    setDropsA(0);
    setDropsB(0);
    setSuccess(false);
  }

  function handleCheck() {
    if (dropsA === potion.targetA && dropsB === potion.targetB) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: `Master alchemist! You brewed ${potion.name} with the exact ratio of ${potion.targetA} : ${potion.targetB}!`, style: 'celebration' }]);
    } else {
      setShake(true);
      sounds.wrong();
      narrate([{ text: "Not quite! Adjust the pipette droplets to match the target ratio notation.", style: 'encouragement' }]);
      setTimeout(() => setShake(false), 600);
    }
  }

  // Calculate dynamic fluid color in the flask
  const fluidHeight = totalDrops > 0 ? Math.min((totalDrops / 10) * 100, 100) : 0;
  const currentFluidColor = totalDrops === 0
    ? 'transparent'
    : dropsA === potion.targetA && dropsB === potion.targetB
    ? potion.blendHex
    : `linear-gradient(180deg, ${potion.colorA} ${Math.round((dropsA / totalDrops) * 100)}%, ${potion.colorB} 100%)`;

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">🎨 Lab 1: Color Alchemist & Liquid Pipette</h3>
        <div className={`station-target-box ${shake ? 'anim-shake' : ''}`}>
          <span className="station-target-label">Target Ratio ({potion.name}):</span>
          <span className="station-target-num number-display">{potion.targetA} : {potion.targetB}</span>
        </div>
      </div>

      <div className="alchemist-body">
        {/* Left: Pipette droppers */}
        <div className="pipette-rack">
          <div className="pipette-card">
            <div className="pipette-info">
              <span className="pipette-icon">💧</span>
              <div>
                <div className="pipette-name">{potion.labelA}</div>
                <div className="pipette-drops" style={{ color: potion.colorA }}>
                  {dropsA} / {potion.targetA} Drops
                </div>
              </div>
            </div>
            <div className="pipette-controls">
              <button type="button" className="pipette-btn" onClick={() => removeDrop('a')} disabled={dropsA === 0}>−</button>
              <button type="button" className="pipette-btn" onClick={() => addDrop('a')} disabled={totalDrops >= 15}>+</button>
            </div>
          </div>

          <div className="pipette-card">
            <div className="pipette-info">
              <span className="pipette-icon">🧪</span>
              <div>
                <div className="pipette-name">{potion.labelB}</div>
                <div className="pipette-drops" style={{ color: potion.colorB }}>
                  {dropsB} / {potion.targetB} Drops
                </div>
              </div>
            </div>
            <div className="pipette-controls">
              <button type="button" className="pipette-btn" onClick={() => removeDrop('b')} disabled={dropsB === 0}>−</button>
              <button type="button" className="pipette-btn" onClick={() => addDrop('b')} disabled={totalDrops >= 15}>+</button>
            </div>
          </div>
        </div>

        {/* Right: Cauldron / Beaker Visualizer */}
        <div className="cauldron-view-wrap">
          <div className="flask-beaker">
            <div
              className="flask-fluid-liquid"
              style={{
                height: `${fluidHeight}%`,
                background: currentFluidColor,
              }}
            >
              <div className="flask-surface-waves" />
            </div>
          </div>

          <div className="live-alchemist-hud">
            <span className="live-potion-title">Live Droplet Ratio Notation:</span>
            <span className="live-potion-ratio">
              {dropsA} : {dropsB}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Total Droplets in Flask: {totalDrops}
            </span>
          </div>
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Magical blend verified! Mixing <strong>{potion.targetA} drops</strong> of {potion.labelA} and <strong>{potion.targetB} drops</strong> of {potion.labelB} creates <strong>{potion.name}</strong> with the exact ratio <strong>{potion.targetA} : {potion.targetB}</strong>!
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Try Another Recipe</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={() => { setDropsA(0); setDropsB(0); }}>Reset Flask</button>
          <button type="button" className="btn-primary" onClick={handleCheck}>Cast & Verify Mix</button>
          <button type="button" className="btn-outline" onClick={newProblem}>New Recipe</button>
        </div>
      )}
    </div>
  );
}
