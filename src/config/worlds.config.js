// src/config/worlds.config.js
export const WORLDS = [
  { id: 0, name: 'Candy Land',     emoji: '🍬', accent: '#ff7043',
    description: 'Compare sweets using ratios',
    boss: { name: 'Sugar Boss',    emoji: '🍭', reward: 'Candy Star Badge 🍬' } },
  { id: 1, name: 'Jungle Trek',    emoji: '🌴', accent: '#4caf50',
    description: 'Match vines and leaves in ratio',
    boss: { name: 'Vine Boss',     emoji: '🐍', reward: 'Jungle Champ Badge 🌴' } },
  { id: 2, name: 'Ocean Deep',     emoji: '🌊', accent: '#0ea5e9',
    description: 'Compare schools of fish by ratio',
    boss: { name: 'Tide Boss',     emoji: '🐙', reward: 'Ocean Expert Badge 🌊' } },
  { id: 3, name: 'Sky Islands',    emoji: '☁️', accent: '#ffd54f',
    description: 'Build clouds in equal ratios',
    boss: { name: 'Storm Boss',    emoji: '⛈️', reward: 'Sky Champ Badge ☁️' } },
  { id: 4, name: 'Volcano Peak',   emoji: '🌋', accent: '#ef5350',
    description: 'Split lava rocks by ratio',
    boss: { name: 'Magma Boss',    emoji: '🔥', reward: 'Volcano Badge 🌋' } },
  { id: 5, name: 'Space Station',  emoji: '🚀', accent: '#9c27b0',
    description: 'Compare stars using ratio notation',
    boss: { name: 'Comet Boss',    emoji: '☄️', reward: 'Space Badge 🚀' } },
  { id: 6, name: 'Dragon Cave',    emoji: '🐉', accent: '#ff5722',
    description: "Share gems in a dragon's ratio",
    boss: { name: 'Ember Boss',    emoji: '🐲', reward: 'Dragon Badge 🐉' } },
  { id: 7, name: 'Crystal Tower',  emoji: '💎', accent: '#3f51b5',
    description: 'Stack crystals in equal ratios',
    boss: { name: 'Prism Boss',    emoji: '🔮', reward: 'Crystal Badge 💎' } },
  { id: 8, name: 'Rainbow Bridge', emoji: '🌈', accent: '#e91e63',
    description: 'Compare colours across the bridge',
    boss: { name: 'Rainbow Boss',  emoji: '🦄', reward: 'Rainbow Badge 🌈' } },
  { id: 9, name: 'Number Palace',  emoji: '🏰', accent: '#00bcd4',
    description: 'Master every ratio fact',
    boss: { name: 'Number Boss',   emoji: '👑', reward: 'Palace Badge 🏰' } },
];

// ── Practice modes (within each world) ──
export const PLAY_MODES = [
  {
    id: 'guided',
    name: 'Guided Practice',
    icon: '🧭',
    desc: '5 questions with hints, no time pressure',
    questionCount: 5,
    hints: true,
    timed: false,
    lives: false,
  },
  {
    id: 'independent',
    name: 'Independent Practice',
    icon: '✍️',
    desc: '10 questions, no hints, full XP',
    questionCount: 10,
    hints: false,
    timed: false,
    lives: false,
  },
  {
    id: 'timed',
    name: 'Timed Challenge',
    icon: '⏱️',
    desc: '8 questions in 60 seconds, bonus XP',
    questionCount: 8,
    hints: false,
    timed: true,
    timeLimit: 60,
    lives: false,
  },
  {
    id: 'boss',
    name: 'Boss Battle',
    icon: '👑',
    desc: '5 questions, 3 lives — defeat the boss!',
    questionCount: 5,
    hints: false,
    timed: false,
    lives: true,
  },
];

// ── Badges ──
export const BADGES = [
  { id: 'first_ratio',     name: 'First Ratio',      icon: '🏅', desc: 'First correct answer' },
  { id: 'hot_streak',      name: 'Hot Streak',       icon: '🔥', desc: '5 consecutive correct' },
  { id: 'ratio_star',      name: 'Ratio Star',       icon: '🥈', desc: 'Completed Simulate' },
  { id: 'ratio_master',    name: 'Ratio Master',     icon: '🥇', desc: '80%+ correct overall' },
  { id: 'perfect_split',   name: 'Perfect Split',    icon: '💎', desc: 'A perfect world score' },
  { id: 'boss_slayer',     name: 'Boss Slayer',      icon: '👑', desc: 'Defeated a boss battle' },
  { id: 'full_journey',    name: 'Full Journey',     icon: '🌟', desc: 'Completed every phase' },
];

// ── XP economy ──
export const XP_REWARDS = {
  CORRECT: 10,
  STREAK_BONUS: 15, // on 5+ streak (replaces base)
  STATION_COMPLETE: 20,
  WORLD_COMPLETE: 50,
  BOSS_WIN: 100,
};
