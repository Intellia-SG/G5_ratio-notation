// src/utils/badgeEngine.js

export const BADGES = [
  {
    id: 'first_ratio',
    icon: '🏅',
    label: 'First Ratio',
    description: 'Answered your first ratio question correctly',
  },
  {
    id: 'hot_streak',
    icon: '🔥',
    label: 'Hot Streak',
    description: 'Achieved a streak of 5 correct answers in a row',
  },
  {
    id: 'notation_star',
    icon: '🥈',
    label: 'Notation Star',
    description: 'Completed all 4 interactive Simulate stations',
  },
  {
    id: 'boss_slayer',
    icon: '👑',
    label: 'Boss Slayer',
    description: 'Defeated a World Boss in battle',
  },
  {
    id: 'part_whole_pro',
    icon: '⚖️',
    label: 'Part-to-Whole Pro',
    description: 'Mastered part-to-part and part-to-whole comparisons',
  },
  {
    id: 'scale_master',
    icon: '🎚️',
    label: 'Scale Master',
    description: 'Demonstrated equivalent scaling mastery',
  },
  {
    id: 'ratio_grandmaster',
    icon: '🏆',
    label: 'Ratio Grand Master',
    description: 'Completed the full Ratio Notation learning journey',
  },
];

export function checkBadges(state) {
  const earned = [];

  // First ratio answered
  const totalCorrect = state.districtCorrect?.reduce((s, c) => s + (c || 0), 0) || 0;
  if (totalCorrect >= 1) earned.push('first_ratio');

  // Streak 5+
  if (state.maxStreak >= 5) earned.push('hot_streak');

  // Simulate completion
  if (state.simStationsComplete?.every(Boolean) || state.phaseComplete?.simulate) {
    earned.push('notation_star');
  }

  // Part to whole (district 2 completed)
  if (state.districtScores?.[2] !== null && state.districtScores?.[2] >= 7) {
    earned.push('part_whole_pro');
  }

  // Scaling master (district 5 completed)
  if (state.districtScores?.[5] !== null && state.districtScores?.[5] >= 7) {
    earned.push('scale_master');
  }

  // Full journey reflect phase done
  if (state.phaseComplete?.reflect) {
    earned.push('ratio_grandmaster');
  }

  return earned;
}
