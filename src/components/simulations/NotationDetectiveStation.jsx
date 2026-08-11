// src/components/simulations/NotationDetectiveStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const CASES = [
  {
    scenario: "A chef mixes 4 cups of flour and 3 eggs. A student writes the ratio of flour to eggs as 3 : 4.",
    claim: "Student wrote: 3 : 4",
    correctReason: "Flour was named first, so flour's amount (4) must come before eggs (3): 4 : 3",
    options: [
      { text: "Flour was named first, so flour's amount (4) must come first: 4 : 3", isCorrect: true },
      { text: "Ratios must always be added together: 4 + 3 = 7", isCorrect: false },
      { text: "The terms should be multiplied: 4 × 3 = 12", isCorrect: false },
    ],
  },
  {
    scenario: "A soccer team has 5 boys and 7 girls. A student writes the ratio of boys to the TOTAL team as 5 : 7.",
    claim: "Student wrote: 5 : 7 for boys to total team",
    correctReason: "5 : 7 is part-to-part! The whole team is 5 + 7 = 12, so the ratio to whole is 5 : 12",
    options: [
      { text: "5 : 7 is part-to-part! The whole team is 5 + 7 = 12, so the ratio to total is 5 : 12", isCorrect: true },
      { text: "The ratio should be written as girls to boys: 7 : 5", isCorrect: false },
      { text: "The numbers should be subtracted: 7 − 5 = 2", isCorrect: false },
    ],
  },
  {
    scenario: "Leo has 2 red marbles and 6 blue marbles. A student claims the ratio can only be written as 2 + 6.",
    claim: "Student wrote: 2 + 6 instead of a ratio",
    correctReason: "Ratios compare quantities using a colon (2 : 6), not addition (+)",
    options: [
      { text: "Ratios compare quantities using a colon (2 : 6), not an addition plus sign (+)", isCorrect: true },
      { text: "The student should write 2 × 6 = 12", isCorrect: false },
      { text: "Ratios can only be written with words, not numbers", isCorrect: false },
    ],
  },
  {
    scenario: "Mia compares 40 cm of ribbon to 1 meter of ribbon. A student writes the ratio as 40 : 1.",
    claim: "Student wrote: 40 : 1 without converting units",
    correctReason: "Units must match! 1 meter = 100 cm, so the true ratio is 40 : 100",
    options: [
      { text: "Units must match! 1 meter = 100 cm, so the true ratio is 40 : 100 (or 2 : 5)", isCorrect: true },
      { text: "The ratio is always 1 : 40", isCorrect: false },
      { text: "You cannot compare ribbon lengths in a ratio", isCorrect: false },
    ],
  },
];

function getRandomCase() {
  return CASES[Math.floor(Math.random() * CASES.length)];
}

export default function NotationDetectiveStation({ onComplete, audioEnabled }) {
  const { narrate, stopAll, sounds } = useAudio(audioEnabled);
  const [currentCase, setCurrentCase] = useState(() => getRandomCase());
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [errorIdx, setErrorIdx] = useState(null);
  const [success, setSuccess] = useState(false);

  function handleSelect(idx) {
    if (success) return;
    const opt = currentCase.options[idx];
    setSelectedIdx(idx);

    if (opt.isCorrect) {
      setErrorIdx(null);
      setSuccess(true);
      sounds.correct();
      narrate([{ text: "Detective master! You spotted the notation flaw and corrected it perfectly!", style: 'celebration' }]);
    } else {
      setErrorIdx(idx);
      sounds.wrong();
      narrate([{ text: "Not quite! Re-read the student claim and check the ratio rule.", style: 'encouragement' }]);
      setTimeout(() => setErrorIdx(null), 600);
    }
  }

  function newProblem() {
    stopAll();
    setCurrentCase(getRandomCase());
    setSelectedIdx(null);
    setErrorIdx(null);
    setSuccess(false);
  }

  return (
    <div className="station-wrap">
      <div className="station-header">
        <h3 className="station-title subheadline">🔍 Station D: Notation Detective & Error Spotter</h3>
        <div className="station-target-box">
          <span className="station-target-label">Mission:</span>
          <span className="station-target-num">Spot the Notation Mistake</span>
        </div>
      </div>

      <div className="spot-error-body">
        {/* Scenario Card */}
        <div className="case-prompt-box">
          <p className="case-scenario-text">{currentCase.scenario}</p>
          <div className="case-student-claim">
            <span>⚠️</span>
            <span>{currentCase.claim}</span>
          </div>
        </div>

        <p className="body-text" style={{ color: 'var(--text-secondary)', margin: '4px 0' }}>
          Tap the correct diagnostic explanation:
        </p>

        {/* Options List */}
        <div className="spot-steps-list">
          {currentCase.options.map((opt, i) => (
            <button
              key={i}
              type="button"
              className={`spot-step-card ${selectedIdx === i && success ? 'selected-error' : ''} ${errorIdx === i ? 'selected-correct-step' : ''}`}
              onClick={() => handleSelect(i)}
              disabled={success}
            >
              <span>{opt.text}</span>
              <span>{selectedIdx === i && success ? '✅' : errorIdx === i ? '❌' : '👉'}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Success banner or Action buttons */}
      {success ? (
        <div className="station-success anim-bounce-in">
          <span className="success-icon">🎉</span>
          <p className="body-text" style={{ color: '#fff' }}>
            Case Solved! <strong>{currentCase.correctReason}</strong>!
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button type="button" className="btn-primary" onClick={newProblem}>Try Another Case</button>
            <button type="button" className="btn-green" onClick={onComplete}>Complete Station ✓</button>
          </div>
        </div>
      ) : (
        <div className="station-actions">
          <button type="button" className="btn-outline" onClick={newProblem}>New Case</button>
        </div>
      )}
    </div>
  );
}
