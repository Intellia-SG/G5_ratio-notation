// src/utils/narration.js
// Narration helper segments with exact 1:1 parity with UI and audioMap

export const say       = (text) => ({ text, style: 'statement' });
export const ask       = (text) => ({ text, style: 'question' });
export const cheer     = (text) => ({ text, style: 'celebration' });
export const emphasize = (text) => ({ text, style: 'emphasis' });
export const think     = (text) => ({ text, style: 'thinking' });
export const celebrate = (text) => ({ text, style: 'celebration' });
export const instruct  = (text) => ({ text, style: 'instruction' });
export const encourage = (text) => ({ text, style: 'encouragement' });

// ─── INTRO ────────────────────────────────────────────────────────────────
export function introNarration() {
  return [
    cheer("Hi! I'm Leo. Ready to write ratios and compare quantities? Let's begin our journey!"),
  ];
}

// ─── WONDER ──────────────────────────────────────────────────────────────
export function wonderNarration() {
  return [
    cheer("The Big Lemonade Mystery!"),
    ask("If Leo and Mia mix two cups of fresh lemon juice for every five cups of water, how do we write down that comparison using ratio notation, and how do we scale it for a giant dispenser?"),
    encourage("Let's investigate how ratio notation helps us compare and scale quantities!"),
  ];
}

// ─── STORY ───────────────────────────────────────────────────────────────
export function storyNarration(panelIndex) {
  const panels = [
    [say("Leo and Mia are setting up their lemonade stand at the school fair! Their secret recipe uses 2 cups of fresh lemon juice for every 5 cups of chilled water. Leo asks: 'How can we write down this comparison so every batch tastes just right?'")],
    [say("Mia grabs a chalkboard and explains: 'We can compare two quantities using a ratio! We write it with a colon between the numbers: 2 : 5, read as 2 to 5. The order matters — the first number always matches the first item named!'")],
    [instruct("Leo notices: 'If we have 2 parts lemon juice and 5 parts water, the whole jug has 2 + 5 = 7 total parts! So the ratio of lemon juice to the whole drink is 2 : 7, and water to the whole drink is 5 : 7.' Mia smiles: 'Exactly!'")],
    [celebrate("A huge crowd arrives! To fill a giant dispenser, Leo and Mia multiply both parts by 4: 2 × 4 = 8 cups lemon juice and 5 × 4 = 20 cups water! '8 : 20 has the exact same delicious proportion as 2 : 5!' Leo cheers.")],
  ];
  return panels[panelIndex] || panels[0];
}

// ─── SIMULATE ────────────────────────────────────────────────────────────
export function simStationIntro(stationIndex) {
  const intros = [
    [instruct("Lab 1: Color Alchemist & Liquid Pipette! Use the pipettes to drop potion droplets into the crystal flask to match the target ratio notation.")],
    [instruct("Lab 2: Pixel Mosaic Pattern Studio! Stamp tiles onto the canvas to construct the exact part-to-part and part-to-whole ratio pattern.")],
    [instruct("Lab 3: Ratio Balance Beam! Place proportional silver coins to balance the scale with the scaled gold ingots in perfect equilibrium.")],
    [ask("Lab 4: Notation Codebreaker & Cipher Vault! Crack the vault cipher by dialing the exact terms of the ratio in colon notation.")],
  ];
  return intros[stationIndex] || intros[0];
}

export function simFeedback(correct) {
  if (correct) return [celebrate("Amazing! You built the exact ratio notation perfectly!")];
  return [encourage("Not quite! Check your ratio terms and try again.")];
}

// ─── PLAY / PRACTICE ──────────────────────────────────────────────────────
export function playQuestionNarration(questionText) {
  return [ask(questionText)];
}

export function playCorrectNarration(streak) {
  if (streak >= 5) return [celebrate(`Incredible! ${streak} in a row! You're an unstoppable ratio master!`)];
  if (streak >= 3) return [celebrate(`Fantastic! ${streak} streak! Keep up the great work!`)];
  return [cheer("Spot on! That's correct!")];
}

export function playWrongNarration() {
  return [encourage("Not quite! Read the question carefully, check the order of terms, and try again!")];
}

export function playHint1Narration() {
  return [think("Here is a hint: check which quantity is named first in the question!")];
}

export function playHint2Narration() {
  return [think("Key clue: remember that in a ratio A : B, the colon represents 'to' or 'for every'.")];
}

export function districtCompleteNarration() {
  return [celebrate("District conquered! You've mastered this ratio world! Ready for the next challenge?")];
}

// ─── BOSS ────────────────────────────────────────────────────────────────
export function bossStartNarration() {
  return [emphasize("Boss Battle started! Answer ratio questions correctly to defeat the boss and claim the world artifact!")];
}

export function bossWinNarration() {
  return [celebrate("Boss Defeated! You've claimed the sacred ratio trophy and earned bonus XP!")];
}

// ─── REFLECT ─────────────────────────────────────────────────────────────
export function reflectNarration() {
  return [
    say("Welcome to the Reflect phase! Let's review what you've learned about ratio notation and celebrate your achievements!"),
  ];
}

export function reflectCompleteNarration() {
  return [
    celebrate("Congratulations! You've completed your Ratio Notation journey and earned the Grand Master trophy!"),
  ];
}
