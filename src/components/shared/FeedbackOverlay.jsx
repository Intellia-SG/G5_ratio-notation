// src/components/shared/FeedbackOverlay.jsx
import React from 'react';
import './FeedbackOverlay.css';

export default function FeedbackOverlay({ isCorrect, explanation, onContinue }) {
  return (
    <div className="feedback-overlay-backdrop" onClick={onContinue}>
      <div
        className={`feedback-overlay-card glass-card ${isCorrect ? 'correct anim-celebrate' : 'incorrect anim-shake'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="feedback-icon">{isCorrect ? '✨' : '💡'}</div>
        <h3 className="feedback-title">
          {isCorrect ? 'Awesome! Ratio Mastered!' : 'Keep Going!'}
        </h3>
        {explanation && <p className="feedback-explanation">{explanation}</p>}
        <button
          type="button"
          className={isCorrect ? 'btn-green feedback-btn' : 'btn-primary feedback-btn'}
          onClick={onContinue}
        >
          {isCorrect ? 'Continue →' : 'Got it! Next →'}
        </button>
      </div>
    </div>
  );
}
