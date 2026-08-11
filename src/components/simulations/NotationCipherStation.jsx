// src/components/simulations/NotationCipherStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const CIPHER_VAULTS = [
  {
    mission: "In the robotics hangar, there are 6 Drone Scouts 🛸 and 8 Rover Units 🤖. The vault lock requires the ratio of Drone Scouts to Rover Units in ratio notation.",
    targetA: 6,
    targetB: 8,
    explanation: "Drone Scouts (6) was named first and Rover Units (8) second, so the ratio notation is 6 : 8 (or 3 : 4).",
  },
  {
    mission: "A galactic fleet has 5 Starfighter cruisers 🚀 and 7 Cargo freighters 🛸. The gate code requires the ratio of Starfighters to the TOTAL fleet in ratio notation.",
    targetA: 5,
    targetB: 12,
    explanation: "There are 5 Starfighters and the total fleet is 5 + 7 = 12, so the ratio to whole is 5 : 12.",
  },
  {
    mission: "In the chemistry bay, there are 4 Crystal flasks 🧪 and 9 Test vials 🧪. The cipher lock requires the ratio of Test vials to Crystal flasks in ratio notation.",
    targetA: 9,
    targetB: 4,
    explanation: "Order matters! Test vials (9) was requested first, followed by Crystal flasks (4): 9 : 4.",
  },
  {
    mission: "An energy core is composed of 3 Solar cells ☀️ and 10 Battery packs 🔋. Enter the ratio of Battery packs to Solar cells in ratio notation.",
    targetA: 10,
    targetB: 3,
    explanation: "Battery packs (10) was named first, so the first term is 10 and the second term is 3: 10 : 3.",
  },
];

function getRandomVault() {
  return CIPHER_VAULTS[Math.floor(Math.random() * CIPHER_VAULTS.length)];
}

export default function NotationCipherStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [vault, setVault] = useState(() => getRandomVault());
  const [dialA, setDialA] = useState(1);
  const [dialB, setDialB] = useState(1);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  function adjustDial(dial, delta) {
    sounds.click();
    if (dial === 'a') {
      setDialA((prev) => Math.max(1, Math.min(20, prev + delta)));
    } else {
      setDialB((prev) => Math.max(1, Math.min(20, prev + delta)));
    }
    setSuccess(false);
  }

  function newProblem() {
    stopAll();
    setVault(getRandomVault());
    setDialA(1);
    setDialB(1);
    setSuccess(false);
  }

  function handleCheck() {
    if (dialA === vault.targetA && dialB === vault.targetB) {
      setSuccess(true);
      sounds.correct();
      narrate([{ text: "Cipher cracked! Vault opened with the exact ratio notation!", style: 'celebration' }]);
    } else {
      setShake(true);
      sounds.wrong();
      narrate([{ text: "Access denied! Re-read the mission carefully: check term order and part vs whole.", style: 'encouragement' }]);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">🔐 Lab 4: Notation Codebreaker & Cipher Vault</h3>
        <div className={`station-target-box ${shake ? 'anim-shake' : ''}`}>
          <span className="station-target-label">Vault Security:</span>
          <span className="station-target-num">Ratio Notation Lock</span>
        </div>
      </div>

      <div className="cipher-station-body">
        {/* Vault Mission Card */}
        <div className="cipher-vault-card">
          <p className="cipher-mission-text">{vault.mission}</p>
        </div>

        {/* Interactive Holographic Dials */}
        <div className="cipher-lock-dials">
          {/* Dial 1 */}
          <div className="dial-column">
            <button type="button" className="dial-arrow-btn" onClick={() => adjustDial('a', 1)} disabled={dialA >= 20}>▲</button>
            <div className="dial-value-box">{dialA}</div>
            <button type="button" className="dial-arrow-btn" onClick={() => adjustDial('a', -1)} disabled={dialA <= 1}>▼</button>
          </div>

          {/* Colon Separator */}
          <div className="dial-colon-separator">:</div>

          {/* Dial 2 */}
          <div className="dial-column">
            <button type="button" className="dial-arrow-btn" onClick={() => adjustDial('b', 1)} disabled={dialB >= 20}>▲</button>
            <div className="dial-value-box">{dialB}</div>
            <button type="button" className="dial-arrow-btn" onClick={() => adjustDial('b', -1)} disabled={dialB <= 1}>▼</button>
          </div>
        </div>

        {/* Real-time Decoded Notation Readout */}
        <div className="running-ratio-bar">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Decoded Ratio Code:</span>
          <span className="running-ratio-text">
            {dialA} : {dialB} {success ? '🔓 (ACCESS GRANTED)' : '🔒 (LOCKED)'}
          </span>
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Vault Code Cracked! <strong>{vault.explanation}</strong>
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Decode Next Vault</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={() => { setDialA(1); setDialB(1); }}>Reset Dials</button>
          <button type="button" className="btn-primary" onClick={handleCheck}>Crack Vault Cipher</button>
          <button type="button" className="btn-outline" onClick={newProblem}>New Vault Mission</button>
        </div>
      )}
    </div>
  );
}
