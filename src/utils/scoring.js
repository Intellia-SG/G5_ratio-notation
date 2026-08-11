// src/utils/scoring.js

export function calcXP(attemptCount = 1, hintsUsed = 0, streak = 1) {
  let base = 10;
  if (attemptCount === 1) base += 5; // First try bonus
  base -= hintsUsed * 2;
  const streakBonus = Math.min(streak * 2, 20);
  return Math.max(base + streakBonus, 2);
}

export function calcStars(correctCount) {
  if (correctCount >= 9) return 3;
  if (correctCount >= 7) return 2;
  if (correctCount >= 5) return 1;
  return 0;
}
