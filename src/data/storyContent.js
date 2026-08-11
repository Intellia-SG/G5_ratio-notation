// src/data/storyContent.js
// 4-panel educational story for Ratio Notation featuring English characters (Leo & Mia)

export const STORY_PANELS = [
  {
    panel: 0,
    title: "Leo & Mia's Lemonade Stand 🍋🥤",
    text: "Leo and Mia are setting up their lemonade stand at the school fair! Their secret recipe uses 2 cups of fresh lemon juice for every 5 cups of chilled water. Leo asks: 'How can we write down this comparison so every batch tastes just right?'",
    character: "Leo",
    imageEmoji: "🍋",
    imageBg: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    imageScene: "lemonade_stand",
    highlight: "2 Cups Lemon Juice : 5 Cups Water",
  },
  {
    panel: 1,
    title: "The Ratio Notation ⚖️",
    text: "Mia grabs a chalkboard and explains: 'We can compare two quantities using a ratio! We write it with a colon between the numbers: 2 : 5, read as 2 to 5. The order matters — the first number always matches the first item named!'",
    character: "Mia",
    imageEmoji: "⚖️",
    imageBg: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)",
    imageScene: "chalkboard_ratio",
    highlight: "2 : 5 (Lemon Juice to Water)",
  },
  {
    panel: 2,
    title: "Part-to-Part & Part-to-Whole 🧩",
    text: "Leo notices: 'If we have 2 parts lemon juice and 5 parts water, the whole jug has 2 + 5 = 7 total parts! So the ratio of lemon juice to the whole drink is 2 : 7, and water to the whole drink is 5 : 7.' Mia smiles: 'Exactly!'",
    character: "Leo & Mia",
    imageEmoji: "🧩",
    imageBg: "linear-gradient(135deg, #01579b 0%, #0277bd 100%)",
    imageScene: "tape_diagram",
    highlight: "Part-to-Part = 2 : 5 · Part-to-Whole = 2 : 7",
  },
  {
    panel: 3,
    title: "Scaling Up & Ratio Mastery! 🚀",
    text: "A huge crowd arrives! To fill a giant dispenser, Leo and Mia multiply both parts by 4: 2 × 4 = 8 cups lemon juice and 5 × 4 = 20 cups water! '8 : 20 has the exact same delicious proportion as 2 : 5!' Leo cheers.",
    character: "Leo & Mia",
    imageEmoji: "✨",
    imageBg: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
    imageScene: "celebration",
    highlight: "2 : 5 = 8 : 20 (Scaled × 4)",
  },
];
