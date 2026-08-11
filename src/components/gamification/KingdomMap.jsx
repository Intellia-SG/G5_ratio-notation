// src/components/gamification/KingdomMap.jsx
import React from 'react';
import './KingdomMap.css';
import { DISTRICTS } from '../../data/questionBank.js';
import { calcStars } from '../../utils/scoring.js';

export default function KingdomMap({ districtScores = [], districtCorrect = [], currentDistrict = 0, onSelectDistrict }) {
  return (
    <div className="kingdom-map-container">
      <div className="kingdom-grid">
        {DISTRICTS.map((d, idx) => {
          const isUnlocked = idx <= currentDistrict;
          const isCurrent  = idx === currentDistrict;
          const score      = districtScores[idx];
          const correct    = districtCorrect[idx] || 0;
          const stars      = score !== null && score !== undefined ? calcStars(score) : 0;
          const isDone     = score !== null && score !== undefined;

          return (
            <div
              key={d.id}
              className={`district-node ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''} ${isDone ? 'completed' : ''}`}
              onClick={() => isUnlocked && onSelectDistrict && onSelectDistrict(idx)}
              role="button"
              tabIndex={isUnlocked ? 0 : -1}
              aria-label={`District ${idx + 1}: ${d.name}`}
            >
              <div className="district-icon-wrap">
                <span className="district-icon">{d.icon}</span>
                {isDone && <span className="district-check">✓</span>}
              </div>

              <div className="district-info">
                <span className="district-num">D{idx + 1}</span>
                <span className="district-name">{d.name}</span>
              </div>

              {/* Stars earned in district */}
              {isDone ? (
                <div className="district-stars">
                  {'⭐'.repeat(stars)}{'☆'.repeat(Math.max(0, 3 - stars))}
                  <span className="district-score-txt">({correct}/10)</span>
                </div>
              ) : (
                <span className="district-status">{isCurrent ? 'Current' : isUnlocked ? 'Unlocked' : 'Locked'}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
