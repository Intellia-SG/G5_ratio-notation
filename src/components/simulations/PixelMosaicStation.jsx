// src/components/simulations/PixelMosaicStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const MOSAIC_MISSIONS = [
  { targetA: 3, targetB: 5, mode: 'part-to-part', labelA: 'Amethyst 🟣', labelB: 'Emerald 🟢', desc: 'Ratio of Amethyst to Emerald' },
  { targetA: 4, targetB: 6, mode: 'part-to-part', labelA: 'Amethyst 🟣', labelB: 'Emerald 🟢', desc: 'Ratio of Amethyst to Emerald' },
  { targetA: 2, targetB: 6, mode: 'part-to-whole', labelA: 'Amethyst 🟣', labelB: 'Emerald 🟢', desc: 'Ratio of Amethyst to Total Tiles (2 : 8)' },
  { targetA: 5, targetB: 3, mode: 'part-to-part', labelA: 'Amethyst 🟣', labelB: 'Emerald 🟢', desc: 'Ratio of Amethyst to Emerald' },
  { targetA: 3, targetB: 9, mode: 'part-to-whole', labelA: 'Amethyst 🟣', labelB: 'Emerald 🟢', desc: 'Ratio of Amethyst to Total Tiles (3 : 12)' },
];

function getRandomMission() {
  return MOSAIC_MISSIONS[Math.floor(Math.random() * MOSAIC_MISSIONS.length)];
}

export default function PixelMosaicStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [mission, setMission] = useState(() => getRandomMission());
  const [selectedTool, setSelectedTool] = useState('a'); // 'a' | 'b' | 'clear'
  const [grid, setGrid] = useState(Array(16).fill(null)); // null | 'a' | 'b'
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const countA = grid.filter((c) => c === 'a').length;
  const countB = grid.filter((c) => c === 'b').length;
  const totalPainted = countA + countB;

  const targetNotation = mission.mode === 'part-to-part'
    ? `${mission.targetA} : ${mission.targetB}`
    : `${mission.targetA} : ${mission.targetA + mission.targetB}`;

  function handleCellClick(index) {
    sounds.click();
    const next = [...grid];
    if (selectedTool === 'clear') {
      next[index] = null;
    } else {
      next[index] = selectedTool;
    }
    setGrid(next);
    setSuccess(false);
  }

  function newProblem() {
    stopAll();
    setMission(getRandomMission());
    setGrid(Array(16).fill(null));
    setSuccess(false);
  }

  function handleCheck() {
    const isCorrect = countA === mission.targetA && countB === mission.targetB;

    if (isCorrect) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: "Stunning artwork! Your mosaic perfectly represents the ratio notation!", style: 'celebration' }]);
    } else {
      setShake(true);
      sounds.wrong();
      narrate([{ text: "Not quite! Check the number of Amethyst and Emerald tiles on the canvas.", style: 'encouragement' }]);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">🖼️ Lab 2: Pixel Mosaic Pattern Studio</h3>
        <div className={`station-target-box ${shake ? 'anim-shake' : ''}`}>
          <span className="station-target-label">Target ({mission.desc}):</span>
          <span className="station-target-num number-display">{targetNotation}</span>
        </div>
      </div>

      <div className="mosaic-station-body">
        {/* Palette Tool selector */}
        <div className="mosaic-palette-row">
          <button
            type="button"
            className={`palette-tool-btn ${selectedTool === 'a' ? 'active' : ''}`}
            onClick={() => { sounds.click(); setSelectedTool('a'); }}
          >
            <span>🟣</span>
            <span>Amethyst Stamp ({countA} / {mission.targetA})</span>
          </button>

          <button
            type="button"
            className={`palette-tool-btn ${selectedTool === 'b' ? 'active' : ''}`}
            onClick={() => { sounds.click(); setSelectedTool('b'); }}
          >
            <span>🟢</span>
            <span>Emerald Stamp ({countB} / {mission.targetB})</span>
          </button>

          <button
            type="button"
            className={`palette-tool-btn ${selectedTool === 'clear' ? 'active' : ''}`}
            onClick={() => { sounds.click(); setSelectedTool('clear'); }}
          >
            <span>⚪</span>
            <span>Eraser</span>
          </button>
        </div>

        {/* 4x4 Grid Canvas */}
        <div className="mosaic-grid-canvas">
          {grid.map((cell, idx) => (
            <div
              key={idx}
              className={`mosaic-cell ${cell === 'a' ? 'tile-a' : cell === 'b' ? 'tile-b' : ''}`}
              onClick={() => handleCellClick(idx)}
              role="button"
              tabIndex={0}
            >
              {cell === 'a' ? '🟣' : cell === 'b' ? '🟢' : ''}
            </div>
          ))}
        </div>

        {/* Real-time Ratio Computation */}
        <div className="running-ratio-bar">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Live Mosaic Ratio Computation:</span>
          <span className="running-ratio-text">
            Part-to-Part: {countA} : {countB} | Part-to-Whole: {countA} : {totalPainted} (Total {totalPainted} tiles painted)
          </span>
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Masterpiece constructed! Your pattern features <strong>{mission.targetA}</strong> Amethyst tiles and <strong>{mission.targetB}</strong> Emerald tiles, forming the exact ratio <strong>{targetNotation}</strong>!
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Try Another Pattern</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={() => setGrid(Array(16).fill(null))}>Clear Canvas</button>
          <button type="button" className="btn-primary" onClick={handleCheck}>Verify Mosaic Pattern</button>
          <button type="button" className="btn-outline" onClick={newProblem}>New Request</button>
        </div>
      )}
    </div>
  );
}
