// src/components/phases/ReflectPhase.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ReflectPhase.css';
import Mascot from '../shared/Mascot.jsx';
import { BADGES } from '../../utils/badgeEngine.js';
import { calcStars } from '../../utils/scoring.js';
import { useAudio } from '../../hooks/useAudio.js';
import { reflectNarration, reflectCompleteNarration } from '../../utils/narration.js';
import { generateSessionQuestions } from '../../utils/shuffle.js';
import questionBank from '../../data/questionBank.js';

const REFLECT_QUESTIONS = [
  {
    q: "How do we correctly write a ratio comparing 2 parts lemon juice to 5 parts water?",
    options: [
      "2 : 5 (using a colon between the two quantities)",
      "2 + 5 (using an addition plus sign)",
      "5 : 2 (swapping the numbers in reverse order)",
    ],
    correct: 0,
  },
  {
    q: "In ratio notation, why does the order of the numbers matter?",
    options: [
      "The first number always represents the first quantity named",
      "Order doesn't matter; terms can be swapped freely",
      "Only when the numbers are greater than 10",
    ],
    correct: 0,
  },
  {
    q: "What is the difference between part-to-part and part-to-whole ratios?",
    options: [
      "Part-to-part compares two parts (A : B); part-to-whole compares a part to the total sum (A : Total)",
      "They are always the exact same calculation",
      "Part-to-whole can only be used with even numbers",
    ],
    correct: 0,
  },
];

export default function ReflectPhase({ state, dispatch }) {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' | 'journal'
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [journal, setJournal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { narrate, stopAll, sounds } = useAudio(state.audioEnabled);
  const narrated = useRef(false);

  const totalCorrect = state.districtCorrect?.reduce((s, c) => s + (c || 0), 0) || 0;
  const totalStars = state.districtScores?.reduce((s, sc) => {
    if (sc === null) return s;
    return s + calcStars(sc);
  }, 0) || 0;

  useEffect(() => {
    if (!narrated.current) {
      narrated.current = true;
      narrate(reflectNarration());
    }
    dispatch({ type: 'COMPLETE_PHASE', payload: 'reflect' });
    return () => stopAll();
  }, [dispatch, narrate, stopAll]);

  function handleSelectOption(optIdx) {
    sounds.click();
    setAnswers((prev) => ({ ...prev, [currentQIndex]: optIdx }));
  }

  function handleSubmit() {
    setSubmitted(true);
    stopAll();
    sounds.badge();
    narrate(reflectCompleteNarration());
  }

  function playAgain() {
    dispatch({ type: 'RESET_SESSION' });
    dispatch({ type: 'LOAD_QUESTIONS', payload: generateSessionQuestions(questionBank) });
    dispatch({ type: 'SET_PHASE', payload: 'intro' });
  }

  const currentQ = REFLECT_QUESTIONS[currentQIndex];
  const allAnswered = Object.keys(answers).length === REFLECT_QUESTIONS.length;
  const earnedBadges = BADGES.filter((b) => state.badges?.includes(b.id));

  // Trophy Scorecard View
  if (submitted) {
    return (
      <div className="reflect-wrap">
        <div className="trophy-card glass-card anim-bounce-in">
          <div className="trophy-icon">🏆</div>
          <h1 className="trophy-title headline">Ratio Grand Master!</h1>
          <p className="trophy-sub subheadline">
            Ratio Notation Mastery Complete ✅
          </p>

          {/* Stats Breakdown */}
          <div className="trophy-stats-grid">
            <div className="trophy-stat-card">
              <span className="stat-card-value">{totalCorrect} / 100</span>
              <span className="stat-card-label">Questions Correct</span>
            </div>
            <div className="trophy-stat-card">
              <span className="stat-card-value">{state.xp}</span>
              <span className="stat-card-label">Total XP Earned ⭐</span>
            </div>
            <div className="trophy-stat-card">
              <span className="stat-card-value">{state.maxStreak}x</span>
              <span className="stat-card-label">Best Streak 🔥</span>
            </div>
          </div>

          {/* Stars Cascade */}
          <div className="trophy-stars-row">
            {[...Array(Math.min(Math.max(totalStars, 3), 30))].map((_, i) => (
              <span key={i} className="trophy-star-sparkle" style={{ animationDelay: `${i * 0.04}s` }}>
                ⭐
              </span>
            ))}
          </div>

          {/* Badges Showcase */}
          {earnedBadges.length > 0 && (
            <div className="trophy-badges-section">
              <div className="section-mini-title">BADGES UNLOCKED</div>
              <div className="trophy-badges-grid">
                {earnedBadges.map((b) => (
                  <div key={b.id} className="badge-item-pill">
                    <span className="badge-item-icon">{b.icon}</span>
                    <div className="badge-item-info">
                      <span className="badge-item-name">{b.label}</span>
                      <span className="badge-item-desc">{b.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="trophy-actions">
            <button type="button" className="btn-primary trophy-cta" onClick={playAgain}>
              🔄 Play Again
            </button>
            <button type="button" className="btn-outline" onClick={() => dispatch({ type: 'SET_PHASE', payload: 'intro' })}>
              🏠 Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Spacious Step-based Reflection Studio
  return (
    <div className="reflect-wrap">
      <div className="reflect-studio-container anim-slide-up">
        {/* Top Header & Section Tabs */}
        <div className="reflect-top-bar">
          <div className="reflect-badge-pill">📓 Learning Reflection Studio</div>
          <h2 className="reflect-main-title">Reflect on Your Ratio Notation Journey</h2>
          
          <div className="reflect-step-tabs">
            <button
              type="button"
              className={`reflect-step-tab ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => { sounds.click(); setActiveTab('quiz'); }}
            >
              <span>🧠 1. Concept Check</span>
              <span className="tab-count-pill">{Object.keys(answers).length}/3</span>
            </button>

            <button
              type="button"
              className={`reflect-step-tab ${activeTab === 'journal' ? 'active' : ''}`}
              onClick={() => { sounds.click(); setActiveTab('journal'); }}
            >
              <span>✍️ 2. Learning Journal & Scorecard</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Concept Questions (Spacious Carousel / Card) */}
        {activeTab === 'quiz' && (
          <div className="reflect-content-card glass-card anim-fade-in">
            <div className="q-progress-bar-row">
              <span className="q-progress-label">Question {currentQIndex + 1} of {REFLECT_QUESTIONS.length}</span>
              <div className="q-progress-dots">
                {REFLECT_QUESTIONS.map((_, idx) => (
                  <span
                    key={idx}
                    className={`q-dot ${currentQIndex === idx ? 'active' : ''} ${answers[idx] !== undefined ? 'answered' : ''}`}
                    onClick={() => setCurrentQIndex(idx)}
                  />
                ))}
              </div>
            </div>

            <p className="reflect-question-text">{currentQ.q}</p>

            <div className="reflect-options-stack">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = answers[currentQIndex] === oIdx;
                return (
                  <button
                    key={oIdx}
                    type="button"
                    className={`reflect-option-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(oIdx)}
                  >
                    <span className="opt-radio-circle">{isSelected ? '✓' : ''}</span>
                    <span className="opt-text-label">{opt}</span>
                  </button>
                );
              })}
            </div>

            <div className="reflect-card-footer">
              <button
                type="button"
                className="btn-outline"
                onClick={() => setCurrentQIndex((q) => Math.max(0, q - 1))}
                disabled={currentQIndex === 0}
              >
                ← Previous Question
              </button>

              {currentQIndex < REFLECT_QUESTIONS.length - 1 ? (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setCurrentQIndex((q) => Math.min(REFLECT_QUESTIONS.length - 1, q + 1))}
                >
                  Next Question →
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setActiveTab('journal')}
                >
                  Continue to Journal ✍️
                </button>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Learning Journal & Submit to Scorecard */}
        {activeTab === 'journal' && (
          <div className="reflect-content-card glass-card anim-fade-in">
            <div className="journal-section-wrap">
              <label className="journal-prompt-label" htmlFor="journal-textarea">
                💡 What is the most important rule about Ratio Notation you mastered today?
              </label>

              <textarea
                id="journal-textarea"
                className="journal-large-textarea"
                placeholder="e.g. Ratio notation compares quantities with a colon A : B, and the order of terms always matches the order they were named!"
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                rows={3}
              />

              <div className="quick-insert-row">
                <span className="quick-insert-label">Quick Insights:</span>
                {[
                  '2 : 5 means 2 parts for every 5 parts',
                  'Part-to-Whole ratio includes the total sum of all parts',
                  'To scale a ratio, multiply both terms by the same multiplier',
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    className="quick-chip-btn"
                    onClick={() => { sounds.click(); setJournal(chip); }}
                  >
                    ✨ {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Performance Mini Bar */}
            <div className="reflect-mini-stats-bar">
              <div className="mini-stat-pill">⭐ {state.xp} XP Earned</div>
              <div className="mini-stat-pill">✅ {totalCorrect} / 100 Correct</div>
              <div className="mini-stat-pill">🔥 Best Streak: {state.maxStreak}</div>
            </div>

            {/* Submit CTA */}
            <div className="reflect-submit-area">
              <button
                type="button"
                className="btn-primary reflect-final-cta"
                onClick={handleSubmit}
              >
                🌟 Submit Reflection & View Trophy Scorecard!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
