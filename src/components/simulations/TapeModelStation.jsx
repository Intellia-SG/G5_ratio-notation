// src/components/simulations/TapeModelStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const TAPE_PROBLEMS = [
  { targetA: 3, targetB: 4, mode: 'part-to-part', labelA: 'Blue 🟦', labelB: 'Yellow 🟨', desc: 'Ratio of Blue to Yellow' },
  { targetA: 2, targetB: 5, mode: 'part-to-whole', labelA: 'Blue 🟦', labelB: 'Yellow 🟨', desc: 'Ratio of Blue to Whole (Total)' },
  { targetA: 4, targetB: 3, mode: 'part-to-part', labelA: 'Blue 🟦', labelB: 'Yellow 🟨', desc: 'Ratio of Blue to Yellow' },
  { targetA: 3, targetB: 7, mode: 'part-to-whole', labelA: 'Blue 🟦', labelB: 'Yellow 🟨', desc: 'Ratio of Blue to Whole (Total)' },
  { targetA: 5, targetB: 2, mode: 'part-to-part', labelA: 'Blue 🟦', labelB: 'Yellow 🟨', desc: 'Ratio of Blue to Yellow' },
];

function getRandomTapeProblem() {
  return TAPE_PROBLEMS[Math.floor(Math.random() * TAPE_PROBLEMS.length)];
}

export default function TapeModelStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [problem, setProblem] = useState(() => getRandomTapeProblem());
  const [blocksA, setBlocksA] = useState(0);
  const [blocksB, setBlocksB] = useState(0);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const totalBlocks = blocksA + blocksB;
  const isPartToPart = problem.mode === 'part-to-part';
  const targetNotation = isPartToPart
    ? `${problem.targetA} : ${problem.targetB}`
    : `${problem.targetA} : ${problem.targetA + problem.targetB}`;

  function addBlock(type) {
    if (totalBlocks >= 12) return;
    sounds.click();
    if (type === 'a') setBlocksA((a) => a + 1);
    else setBlocksB((b) => b + 1);
  }

  function removeBlock(type) {
    sounds.click();
    if (type === 'a' && blocksA > 0) setBlocksA((a) => a - 1);
    else if (type === 'b' && blocksB > 0) setBlocksB((b) => b - 1);
    setSuccess(false);
  }

  function newProblem() {
    stopAll();
    setProblem(getRandomTapeProblem());
    setBlocksA(0);
    setBlocksB(0);
    setSuccess(false);
  }

  function handleCheck() {
    const isCorrect = isPartToPart
      ? blocksA === problem.targetA && blocksB === problem.targetB
      : blocksA === problem.targetA && blocksB === problem.targetB;

    if (isCorrect) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: "Spot on! Your tape model matches the ratio notation perfectly!", style: 'celebration' }]);
    } else {
      setShake(true);
      sounds.wrong();
      narrate([{ text: "Not quite! Adjust the blue and yellow tape units and try again.", style: 'encouragement' }]);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">🧩 Station B: Tape Model & Part-to-Whole Explorer</h3>
        <div className={`station-target-box ${shake ? 'anim-shake' : ''}`}>
          <span className="station-target-label">Target ({problem.desc}):</span>
          <span className="station-target-num number-display">{targetNotation}</span>
        </div>
      </div>

      <div className="tape-station-body">
        {/* Interactive Tape Strip Controls */}
        <div className="tape-strip-builder">
          <div className="tape-controls-row">
            <div className="tape-ctrl-group">
              <span style={{ color: '#ff7043', fontWeight: 800 }}>🟦 Blue Blocks: {blocksA}</span>
              <button type="button" className="tape-ctrl-btn" onClick={() => removeBlock('a')} disabled={blocksA === 0}>−</button>
              <button type="button" className="tape-ctrl-btn" onClick={() => addBlock('a')} disabled={totalBlocks >= 12}>+</button>
            </div>

            <div className="tape-ctrl-group">
              <span style={{ color: '#818cf8', fontWeight: 800 }}>🟨 Yellow Blocks: {blocksB}</span>
              <button type="button" className="tape-ctrl-btn" onClick={() => removeBlock('b')} disabled={blocksB === 0}>−</button>
              <button type="button" className="tape-ctrl-btn" onClick={() => addBlock('b')} disabled={totalBlocks >= 12}>+</button>
            </div>
          </div>

          {/* Visual Segmented Tape Bar */}
          <div className="tape-strip-display">
            {totalBlocks === 0 ? (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 700 }}>
                Tap + above to add tape blocks to the model
              </span>
            ) : (
              <>
                {[...Array(blocksA)].map((_, i) => (
                  <div key={`a-${i}`} className="tape-block block-a">A</div>
                ))}
                {[...Array(blocksB)].map((_, i) => (
                  <div key={`b-${i}`} className="tape-block block-b">B</div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Live Ratio Analysis Bar */}
        <div className="running-ratio-bar">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tape Model Readings:</span>
          <span className="running-ratio-text">
            Part-to-Part: {blocksA} : {blocksB} | Part-to-Whole: {blocksA} : {totalBlocks} (Total {totalBlocks} parts)
          </span>
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Excellent tape model! The ratio of {problem.desc.toLowerCase()} is correctly represented as <strong>{targetNotation}</strong>!
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Try Another</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={() => { setBlocksA(0); setBlocksB(0); }}>Reset</button>
          <button type="button" className="btn-primary" onClick={handleCheck}>Check Tape Model</button>
          <button type="button" className="btn-outline" onClick={newProblem}>New Challenge</button>
        </div>
      )}
    </div>
  );
}
