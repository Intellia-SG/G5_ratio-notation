// src/data/questionBank.js
// 100 Comprehensive Questions for Ratio Notation across 10 Themed Worlds (Grade 5/6)

export const DISTRICTS = [
  { id: 0, name: 'Flavor Lab',         icon: '🥤', boss: { name: 'Chef Ratio',     emoji: '👨‍🍳', reward: 'Flavor Lab Badge 🥤' } },
  { id: 1, name: 'Jungle Trek',        icon: '🌴', boss: { name: 'Vine Boss',      emoji: '🐍', reward: 'Jungle Champ Badge 🌴' } },
  { id: 2, name: 'Ocean Expedition',  icon: '🌊', boss: { name: 'Captain Tide',   emoji: '⚓', reward: 'Deep Sea Ratio Badge 🌊' } },
  { id: 3, name: 'Sky Islands',       icon: '☁️', boss: { name: 'Storm Boss',     emoji: '⛈️', reward: 'Sky Navigator Badge ☁️' } },
  { id: 4, name: 'Lava Forge',         icon: '🌋', boss: { name: 'Forge Master',   emoji: '🔥', reward: 'Titanium Ratio Badge 🌋' } },
  { id: 5, name: 'Cosmic Station',     icon: '🚀', boss: { name: 'Starlight Boss', emoji: '☄️', reward: 'Cosmic Explorer Badge 🚀' } },
  { id: 6, name: 'Dragon Sanctuary',   icon: '🐉', boss: { name: 'Dragon Keeper',  emoji: '🐲', reward: 'Dragon Master Badge 🐉' } },
  { id: 7, name: 'Crystal Tower',      icon: '💎', boss: { name: 'Prism Scholar',  emoji: '🔮', reward: 'Crystal Crown Badge 💎' } },
  { id: 8, name: 'Rainbow Bridge',     icon: '🌈', boss: { name: 'Rainbow Boss',   emoji: '🦄', reward: 'Spectrum Elite Badge 🌈' } },
  { id: 9, name: 'Ratio Citadel',     icon: '🏰', boss: { name: 'Citadel Monarch',emoji: '👑', reward: 'Ratio Grand Master Badge 🏰' } },
];

const RAW_QUESTIONS = [
  // ── WORLD 0: FLAVOR LAB (Questions 1 - 10) ──────────────────────────────────
  // Topic: Basic Ratio Notation & "For Every" Phrasing
  {
    id: 1, districtId: 0, category: 'RATIO NOTATION', visual: 'recipe',
    questionText: "A recipe uses 3 cups of lemon juice for every 5 cups of water. How is this written in ratio notation?",
    options: ['3 : 5', '5 : 3', '3 + 5', '3 = 5'],
    correctAnswer: '3 : 5',
    explanation: "We write a ratio comparing 3 cups of lemon juice to 5 cups of water as 3 : 5 using a colon.",
    hint1: "A ratio uses a colon (:) between the two numbers.",
    hint2: "The first amount mentioned (3) comes first: 3 : 5.",
    visualData: { valA: 3, valB: 5, simpA: 3, simpB: 5, labelA: 'Lemon Juice 🍋', labelB: 'Water 💧' }
  },
  {
    id: 2, districtId: 0, category: 'FOR EVERY PHRASING', visual: 'bar_model',
    questionText: "There are 4 strawberries for every 7 blueberries in a bowl. What is the ratio of strawberries to blueberries?",
    options: ['4 : 7', '7 : 4', '4 : 11', '7 : 11'],
    correctAnswer: '4 : 7',
    explanation: "'4 strawberries for every 7 blueberries' translates directly to the ratio 4 : 7.",
    hint1: "Write strawberries first, then blueberries.",
    hint2: "4 strawberries : 7 blueberries = 4 : 7.",
    visualData: { valA: 4, valB: 7, simpA: 4, simpB: 7, labelA: 'Strawberries 🍓', labelB: 'Blueberries 🫐' }
  },
  {
    id: 3, districtId: 0, category: 'READING RATIOS',
    questionText: "How do we read the ratio 2 : 9 aloud?",
    options: ['2 to 9', '2 plus 9', '2 out of 9', '2 times 9'],
    correctAnswer: '2 to 9',
    explanation: "The colon in ratio notation is read as the word 'to', so 2 : 9 is read as '2 to 9'.",
    hint1: "The colon symbol ':' represents the word 'to' in ratios.",
    hint2: "2 : 9 is spoken as '2 to 9'."
  },
  {
    id: 4, districtId: 0, category: 'RATIO NOTATION', visual: 'recipe',
    questionText: "A smoothie has 6 cups of orange juice and 8 cups of apple juice. What is the unsimplified ratio of orange juice to apple juice?",
    options: ['6 : 8', '8 : 6', '6 : 14', '8 : 14'],
    correctAnswer: '6 : 8',
    explanation: "The direct ratio of orange juice (6) to apple juice (8) is written as 6 : 8.",
    hint1: "Orange juice is 6, apple juice is 8.",
    hint2: "Place orange juice first: 6 : 8.",
    visualData: { valA: 6, valB: 8, simpA: 6, simpB: 8, labelA: 'Orange Juice 🍊', labelB: 'Apple Juice 🍏' }
  },
  {
    id: 5, districtId: 0, category: 'TRUE/FALSE',
    questionText: "True or False: In ratio notation, the symbol used to separate the two quantities is a colon (:).",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! Standard ratio notation uses a colon between the terms, such as 3 : 5.",
    hint1: "Look at how ratios like 3 : 5 are written.",
    hint2: "The colon (:) is the standard ratio symbol."
  },
  {
    id: 6, districtId: 0, category: 'COUNTING OBJECTS', visual: 'recipe',
    questionText: "In a fruit basket there are 5 bananas and 3 mangoes. What is the ratio of bananas to mangoes?",
    options: ['5 : 3', '3 : 5', '5 : 8', '3 : 8'],
    correctAnswer: '5 : 3',
    explanation: "There are 5 bananas and 3 mangoes, so the ratio of bananas to mangoes is 5 : 3.",
    hint1: "Bananas are asked first (5), then mangoes (3).",
    hint2: "5 : 3.",
    visualData: { valA: 5, valB: 3, simpA: 5, simpB: 3, labelA: 'Bananas 🍌', labelB: 'Mangoes 🥭' }
  },
  {
    id: 7, districtId: 0, category: 'FOR EVERY PHRASING',
    questionText: "A baker adds 2 spoons of sugar for every 1 cup of flour. What is the ratio of sugar to flour?",
    options: ['2 : 1', '1 : 2', '2 : 3', '1 : 3'],
    correctAnswer: '2 : 1',
    explanation: "2 spoons of sugar to 1 cup of flour gives the ratio 2 : 1.",
    hint1: "Sugar (2) comes first, flour (1) comes second.",
    hint2: "2 : 1."
  },
  {
    id: 8, districtId: 0, category: 'WORD PROBLEM', visual: 'bar_model',
    questionText: "A juice bar prepares 7 cups of pineapple juice and 9 cups of coconut water. What is the ratio of coconut water to pineapple juice?",
    options: ['9 : 7', '7 : 9', '9 : 16', '7 : 16'],
    correctAnswer: '9 : 7',
    explanation: "Notice the question asks for coconut water (9) first, then pineapple juice (7): 9 : 7.",
    hint1: "Check the order: coconut water is named FIRST in the question.",
    hint2: "Coconut water = 9, pineapple juice = 7, so the ratio is 9 : 7.",
    visualData: { valA: 9, valB: 7, simpA: 9, simpB: 7, labelA: 'Coconut 🥥', labelB: 'Pineapple 🍍' }
  },
  {
    id: 9, districtId: 0, category: 'RATIO NOTATION',
    questionText: "Which of the following correctly expresses '8 parts milk to 3 parts syrup'?",
    options: ['8 : 3', '3 : 8', '8 / 3 / 0', '8 - 3'],
    correctAnswer: '8 : 3',
    explanation: "8 parts milk to 3 parts syrup is written as 8 : 3 in ratio notation.",
    hint1: "Milk (8) to syrup (3).",
    hint2: "8 : 3."
  },
  {
    id: 10, districtId: 0, category: 'RATIO NOTATION', visual: 'recipe',
    questionText: "A bottle of syrup contains 1 part concentrate and 4 parts water. What is the ratio of concentrate to water?",
    options: ['1 : 4', '4 : 1', '1 : 5', '4 : 5'],
    correctAnswer: '1 : 4',
    explanation: "The ratio of concentrate (1) to water (4) is 1 : 4.",
    hint1: "Concentrate = 1, water = 4.",
    hint2: "1 : 4.",
    visualData: { valA: 1, valB: 4, simpA: 1, simpB: 4, labelA: 'Concentrate 🧪', labelB: 'Water 💧' }
  },

  // ── WORLD 1: JUNGLE TREK (Questions 11 - 20) ────────────────────────────────
  // Topic: Order of Terms in a Ratio
  {
    id: 11, districtId: 1, category: 'ORDER OF TERMS', visual: 'recipe',
    questionText: "In the jungle, Leo counts 8 monkeys and 5 parrots. What is the ratio of parrots to monkeys?",
    options: ['5 : 8', '8 : 5', '5 : 13', '8 : 13'],
    correctAnswer: '5 : 8',
    explanation: "Order matters! Parrots are named first (5), so the ratio of parrots to monkeys is 5 : 8.",
    hint1: "Which animal is asked first in 'ratio of parrots to monkeys'?",
    hint2: "Parrots (5) : Monkeys (8) = 5 : 8.",
    visualData: { valA: 5, valB: 8, simpA: 5, simpB: 8, labelA: 'Parrots 🦜', labelB: 'Monkeys 🐒' }
  },
  {
    id: 12, districtId: 1, category: 'ORDER OF TERMS',
    questionText: "Is the ratio 3 : 7 the same as the ratio 7 : 3?",
    options: ['No, because the order of quantities matters', 'Yes, because numbers can be swapped', 'Yes, both have 10 parts', 'Only on weekends'],
    correctAnswer: 'No, because the order of quantities matters',
    explanation: "Order is essential in ratios. 3 : 7 means 3 of the first item for every 7 of the second item, which is completely different from 7 : 3.",
    hint1: "Does 3 lemon to 7 water taste the same as 7 lemon to 3 water?",
    hint2: "No! The order of terms defines which quantity corresponds to which part."
  },
  {
    id: 13, districtId: 1, category: 'ORDER OF TERMS', visual: 'bar_model',
    questionText: "A trek path has 12 stone steps and 9 wooden logs. What is the ratio of stone steps to wooden logs?",
    options: ['12 : 9', '9 : 12', '12 : 21', '9 : 21'],
    correctAnswer: '12 : 9',
    explanation: "Stone steps (12) comes first, then wooden logs (9): 12 : 9.",
    hint1: "Stone steps = 12, logs = 9.",
    hint2: "12 : 9.",
    visualData: { valA: 12, valB: 9, simpA: 12, simpB: 9, labelA: 'Stone 🪨', labelB: 'Wood 🪵' }
  },
  {
    id: 14, districtId: 1, category: 'ORDER OF TERMS',
    questionText: "Mia has 4 green leaves and 6 gold coins. The ratio of gold coins to green leaves is:",
    options: ['6 : 4', '4 : 6', '6 : 10', '4 : 10'],
    correctAnswer: '6 : 4',
    explanation: "The question asks for gold coins (6) to green leaves (4), so the ratio is 6 : 4.",
    hint1: "Gold coins are named first.",
    hint2: "6 : 4."
  },
  {
    id: 15, districtId: 1, category: 'TRUE/FALSE',
    questionText: "True or False: If a team has 6 boys and 4 girls, the ratio of girls to boys is 6 : 4.",
    options: ['False', 'True'],
    correctAnswer: 'False',
    explanation: "False! Girls (4) are named first, so the ratio of girls to boys is 4 : 6.",
    hint1: "How many girls are there? Put that number first.",
    hint2: "There are 4 girls and 6 boys, so girls to boys is 4 : 6, not 6 : 4."
  },
  {
    id: 16, districtId: 1, category: 'ORDER OF TERMS', visual: 'recipe',
    questionText: "Leo sees 10 butterflies and 3 tigers. What is the ratio of tigers to butterflies?",
    options: ['3 : 10', '10 : 3', '3 : 13', '10 : 13'],
    correctAnswer: '3 : 10',
    explanation: "Tigers (3) to butterflies (10) is written as 3 : 10.",
    hint1: "Tigers come first in the ratio.",
    hint2: "3 : 10.",
    visualData: { valA: 3, valB: 10, simpA: 3, simpB: 10, labelA: 'Tigers 🐯', labelB: 'Butterflies 🦋' }
  },
  {
    id: 17, districtId: 1, category: 'ORDER OF TERMS',
    questionText: "A camp has 15 tents and 5 campfires. What is the ratio of tents to campfires?",
    options: ['15 : 5', '5 : 15', '15 : 20', '5 : 20'],
    correctAnswer: '15 : 5',
    explanation: "Tents (15) to campfires (5) = 15 : 5.",
    hint1: "Tents = 15, campfires = 5.",
    hint2: "15 : 5."
  },
  {
    id: 18, districtId: 1, category: 'WORD PROBLEM', visual: 'bar_model',
    questionText: "In a safari jeep there are 2 guides and 8 tourists. What is the ratio of tourists to guides?",
    options: ['8 : 2', '2 : 8', '8 : 10', '2 : 10'],
    correctAnswer: '8 : 2',
    explanation: "Tourists (8) to guides (2) = 8 : 2.",
    hint1: "Tourists is the first term in the requested ratio.",
    hint2: "8 : 2.",
    visualData: { valA: 8, valB: 2, simpA: 8, simpB: 2, labelA: 'Tourists 🎒', labelB: 'Guides 🧭' }
  },
  {
    id: 19, districtId: 1, category: 'ORDER OF TERMS',
    questionText: "If the ratio of red flowers to yellow flowers is 7 : 2, what is the ratio of yellow flowers to red flowers?",
    options: ['2 : 7', '7 : 2', '2 : 9', '7 : 9'],
    correctAnswer: '2 : 7',
    explanation: "Reversing the terms: yellow flowers to red flowers is 2 : 7.",
    hint1: "Swap the two numbers when swapping the two categories.",
    hint2: "7 : 2 becomes 2 : 7."
  },
  {
    id: 20, districtId: 1, category: 'ORDER OF TERMS', visual: 'recipe',
    questionText: "A researcher records 11 orchids and 4 ferns. What is the ratio of orchids to ferns?",
    options: ['11 : 4', '4 : 11', '11 : 15', '4 : 15'],
    correctAnswer: '11 : 4',
    explanation: "Orchids (11) to ferns (4) = 11 : 4.",
    hint1: "Orchids = 11, ferns = 4.",
    hint2: "11 : 4.",
    visualData: { valA: 11, valB: 4, simpA: 11, simpB: 4, labelA: 'Orchids 🌸', labelB: 'Ferns 🌿' }
  },

  // ── WORLD 2: OCEAN EXPEDITION (Questions 21 - 30) ───────────────────────────
  // Topic: Part-to-Part vs Part-to-Whole Comparisons
  {
    id: 21, districtId: 2, category: 'PART TO WHOLE', visual: 'bar_model',
    questionText: "There are 3 dolphins and 7 turtles in a lagoon. What is the ratio of dolphins to the TOTAL number of animals?",
    options: ['3 : 10', '3 : 7', '7 : 10', '7 : 3'],
    correctAnswer: '3 : 10',
    explanation: "The total number of animals is 3 + 7 = 10. The ratio of dolphins (3) to total (10) is 3 : 10.",
    hint1: "First calculate the total: 3 + 7 = 10.",
    hint2: "Dolphins (3) : Total (10) = 3 : 10.",
    visualData: { valA: 3, valB: 7, simpA: 3, simpB: 7, labelA: 'Dolphins 🐬', labelB: 'Turtles 🐢' }
  },
  {
    id: 22, districtId: 2, category: 'PART TO WHOLE', visual: 'bar_model',
    questionText: "In a coral reef, 5 fish are clownfish and 4 fish are angelfish. What is the ratio of angelfish to the whole school of fish?",
    options: ['4 : 9', '5 : 9', '4 : 5', '5 : 4'],
    correctAnswer: '4 : 9',
    explanation: "Total fish = 5 + 4 = 9. The ratio of angelfish (4) to the total (9) is 4 : 9.",
    hint1: "Total fish = 5 + 4 = 9.",
    hint2: "Angelfish (4) to Total (9) = 4 : 9.",
    visualData: { valA: 5, valB: 4, simpA: 5, simpB: 4, labelA: 'Clownfish 🐠', labelB: 'Angelfish 🐟' }
  },
  {
    id: 23, districtId: 2, category: 'PART TO PART', visual: 'recipe',
    questionText: "A diver finds 6 blue pearls and 8 white pearls. What is the part-to-part ratio of blue pearls to white pearls?",
    options: ['6 : 8', '6 : 14', '8 : 14', '8 : 6'],
    correctAnswer: '6 : 8',
    explanation: "A part-to-part ratio compares one part (6 blue) directly to the other part (8 white), so it is 6 : 8.",
    hint1: "Part-to-part does not include the total.",
    hint2: "Blue pearls (6) to White pearls (8) = 6 : 8.",
    visualData: { valA: 6, valB: 8, simpA: 6, simpB: 8, labelA: 'Blue Pearls 🔵', labelB: 'White Pearls ⚪' }
  },
  {
    id: 24, districtId: 2, category: 'PART TO WHOLE',
    questionText: "The ratio of red starfish to yellow starfish is 2 : 5. What is the ratio of red starfish to the TOTAL number of starfish?",
    options: ['2 : 7', '5 : 7', '2 : 5', '5 : 2'],
    correctAnswer: '2 : 7',
    explanation: "Total parts = 2 + 5 = 7. Red starfish to total is 2 : 7.",
    hint1: "Add the ratio terms: 2 + 5 = 7 total parts.",
    hint2: "Red parts = 2, so the ratio to total is 2 : 7."
  },
  {
    id: 25, districtId: 2, category: 'PART TO WHOLE',
    questionText: "The ratio of crabs to lobsters in a tank is 3 : 8. What is the ratio of lobsters to the TOTAL number of creatures?",
    options: ['8 : 11', '3 : 11', '8 : 3', '3 : 8'],
    correctAnswer: '8 : 11',
    explanation: "Total parts = 3 + 8 = 11. Lobsters to total = 8 : 11.",
    hint1: "Total parts = 3 + 8 = 11.",
    hint2: "Lobsters are 8 parts, so 8 : 11."
  },
  {
    id: 26, districtId: 2, category: 'TRUE/FALSE',
    questionText: "True or False: A ratio can compare a part to the whole as well as a part to another part.",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! Ratios can express both part-to-part relationships (e.g. 2 : 5) and part-to-whole relationships (e.g. 2 : 7).",
    hint1: "Think about comparing lemon juice to water vs lemon juice to the whole drink.",
    hint2: "Both comparisons are valid ratios!"
  },
  {
    id: 27, districtId: 2, category: 'PART TO PART', visual: 'bar_model',
    questionText: "Out of 10 sea shells, 4 are spiral and the rest are flat. What is the ratio of spiral shells to flat shells?",
    options: ['4 : 6', '4 : 10', '6 : 10', '6 : 4'],
    correctAnswer: '4 : 6',
    explanation: "Flat shells = 10 - 4 = 6. The ratio of spiral shells (4) to flat shells (6) is 4 : 6.",
    hint1: "Subtract to find flat shells: 10 - 4 = 6.",
    hint2: "Spiral (4) to Flat (6) = 4 : 6.",
    visualData: { valA: 4, valB: 6, simpA: 4, simpB: 6, labelA: 'Spiral 🐚', labelB: 'Flat 🦪' }
  },
  {
    id: 28, districtId: 2, category: 'PART TO WHOLE',
    questionText: "A submarine crew has 1 captain and 9 sailors. What is the ratio of the captain to the total crew?",
    options: ['1 : 10', '1 : 9', '9 : 10', '9 : 1'],
    correctAnswer: '1 : 10',
    explanation: "Total crew = 1 + 9 = 10. Captain to total crew = 1 : 10.",
    hint1: "Total crew = 1 + 9 = 10.",
    hint2: "1 : 10."
  },
  {
    id: 29, districtId: 2, category: 'PART TO PART', visual: 'recipe',
    questionText: "A marine biologist counts 8 manta rays and 12 stingrays. What is the ratio of stingrays to manta rays?",
    options: ['12 : 8', '8 : 12', '12 : 20', '8 : 20'],
    correctAnswer: '12 : 8',
    explanation: "Stingrays (12) to manta rays (8) = 12 : 8.",
    hint1: "Stingrays come first.",
    hint2: "12 : 8.",
    visualData: { valA: 12, valB: 8, simpA: 12, simpB: 8, labelA: 'Stingrays 🌊', labelB: 'Manta Rays 🦈' }
  },
  {
    id: 30, districtId: 2, category: 'PART TO WHOLE',
    questionText: "If 3 out of 8 treasure chests are open, what is the ratio of closed chests to the total number of chests?",
    options: ['5 : 8', '3 : 8', '5 : 3', '3 : 5'],
    correctAnswer: '5 : 8',
    explanation: "Closed chests = 8 - 3 = 5. Ratio of closed chests to total chests is 5 : 8.",
    hint1: "Find closed chests: 8 - 3 = 5.",
    hint2: "Closed (5) to Total (8) = 5 : 8."
  },

  // ── WORLD 3: SKY ISLANDS (Questions 31 - 40) ────────────────────────────────
  // Topic: Tape / Bar Models to Ratio Notation
  {
    id: 31, districtId: 3, category: 'TAPE MODEL', visual: 'bar_model',
    questionText: "A tape diagram has 3 blue blocks and 5 yellow blocks. What ratio does this bar model represent?",
    options: ['3 : 5', '5 : 3', '3 : 8', '5 : 8'],
    correctAnswer: '3 : 5',
    explanation: "The bar model shows 3 blue blocks to 5 yellow blocks, which represents the ratio 3 : 5.",
    hint1: "Count the blue blocks (3) and yellow blocks (5).",
    hint2: "3 : 5.",
    visualData: { valA: 3, valB: 5, simpA: 3, simpB: 5, labelA: 'Blue 🟦', labelB: 'Yellow 🟨' }
  },
  {
    id: 32, districtId: 3, category: 'TAPE MODEL', visual: 'bar_model',
    questionText: "A bar model represents the ratio of clouds to rainbows as 2 : 4. How many total units are in the tape diagram?",
    options: ['6 units', '8 units', '2 units', '4 units'],
    correctAnswer: '6 units',
    explanation: "Total units in the tape diagram = 2 + 4 = 6 units.",
    hint1: "Add the parts of the ratio together.",
    hint2: "2 + 4 = 6.",
    visualData: { valA: 2, valB: 4, simpA: 2, simpB: 4, labelA: 'Clouds ☁️', labelB: 'Rainbows 🌈' }
  },
  {
    id: 33, districtId: 3, category: 'TAPE MODEL', visual: 'bar_model',
    questionText: "A tape diagram shows 4 equal segments for airships and 1 segment for hot-air balloons. What is the ratio of airships to balloons?",
    options: ['4 : 1', '1 : 4', '4 : 5', '1 : 5'],
    correctAnswer: '4 : 1',
    explanation: "Airships have 4 segments and balloons have 1 segment, so the ratio is 4 : 1.",
    hint1: "Airships = 4, Balloons = 1.",
    hint2: "4 : 1.",
    visualData: { valA: 4, valB: 1, simpA: 4, simpB: 1, labelA: 'Airships 🛸', labelB: 'Balloons 🎈' }
  },
  {
    id: 34, districtId: 3, category: 'TAPE MODEL',
    questionText: "If each block in a 3 : 4 tape diagram represents 5 meters, what is the total length represented?",
    options: ['35 meters', '20 meters', '15 meters', '7 meters'],
    correctAnswer: '35 meters',
    explanation: "Total blocks = 3 + 4 = 7 blocks. 7 blocks × 5 meters = 35 meters.",
    hint1: "Total blocks = 3 + 4 = 7.",
    hint2: "7 × 5 = 35 meters."
  },
  {
    id: 35, districtId: 3, category: 'TAPE MODEL', visual: 'bar_model',
    questionText: "A bar model shows 6 purple crystal bars and 2 white crystal bars. What is the ratio of purple to white crystals in simplest form?",
    options: ['3 : 1', '6 : 2', '1 : 3', '2 : 6'],
    correctAnswer: '3 : 1',
    explanation: "6 : 2 simplifies by dividing both terms by 2, giving 3 : 1.",
    hint1: "Divide both 6 and 2 by 2.",
    hint2: "6 ÷ 2 = 3 and 2 ÷ 2 = 1 ➔ 3 : 1.",
    visualData: { valA: 6, valB: 2, simpA: 3, simpB: 1, labelA: 'Purple 🔮', labelB: 'White 💎' }
  },
  {
    id: 36, districtId: 3, category: 'TRUE/FALSE',
    questionText: "True or False: In a bar model representing a ratio, every single block or unit must be the exact same size.",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! In ratio tape models, all unit blocks represent equal quantities.",
    hint1: "Do blocks in tape models represent equal parts?",
    hint2: "Yes, every block represents the same amount."
  },
  {
    id: 37, districtId: 3, category: 'TAPE MODEL', visual: 'bar_model',
    questionText: "A sky island map has a bar model with 5 green sectors and 5 orange sectors. What is this ratio?",
    options: ['1 : 1', '5 : 10', '1 : 2', '5 : 0'],
    correctAnswer: '1 : 1',
    explanation: "5 green to 5 orange simplifies to 1 : 1.",
    hint1: "5 : 5 divides by 5 on both sides.",
    hint2: "1 : 1.",
    visualData: { valA: 5, valB: 5, simpA: 1, simpB: 1, labelA: 'Green 🟩', labelB: 'Orange 🟧' }
  },
  {
    id: 38, districtId: 3, category: 'TAPE MODEL',
    questionText: "If 1 unit in a bar model equals 4 birds, how many birds do 3 units represent?",
    options: ['12 birds', '7 birds', '15 birds', '4 birds'],
    correctAnswer: '12 birds',
    explanation: "3 units × 4 birds per unit = 12 birds.",
    hint1: "Multiply 3 by 4.",
    hint2: "3 × 4 = 12."
  },
  {
    id: 39, districtId: 3, category: 'TAPE MODEL', visual: 'bar_model',
    questionText: "A ribbon is cut into 2 parts with a ratio of 7 : 3. What fraction of the whole ribbon is the longer part?",
    options: ['7 / 10', '3 / 10', '7 / 3', '3 / 7'],
    correctAnswer: '7 / 10',
    explanation: "Total parts = 7 + 3 = 10. The longer part is 7 parts, so it is 7/10 of the whole ribbon.",
    hint1: "Total parts = 7 + 3 = 10.",
    hint2: "Longer part = 7, so fraction = 7/10.",
    visualData: { valA: 7, valB: 3, simpA: 7, simpB: 3, labelA: 'Longer 🟢', labelB: 'Shorter 🟡' }
  },
  {
    id: 40, districtId: 3, category: 'TAPE MODEL',
    questionText: "A bar model shows 8 blocks for solar energy and 4 blocks for wind energy. What is the ratio of wind to solar energy?",
    options: ['4 : 8', '8 : 4', '1 : 2', '2 : 1'],
    correctAnswer: '1 : 2',
    explanation: "Wind (4) to solar (8) simplifies to 1 : 2 (or 4 : 8). In simplest form it is 1 : 2.",
    hint1: "Wind comes first: 4 : 8.",
    hint2: "Divide by 4: 1 : 2."
  },

  // ── WORLD 4: LAVA FORGE (Questions 41 - 50) ─────────────────────────────────
  // Topic: 3-Part Ratios (a : b : c)
  {
    id: 41, districtId: 4, category: '3-PART RATIO', visual: 'three_part',
    questionText: "A blacksmith alloys 2 parts copper, 3 parts tin, and 5 parts iron. How is this 3-part ratio written?",
    options: ['2 : 3 : 5', '5 : 3 : 2', '2 + 3 + 5', '2 : 3 = 5'],
    correctAnswer: '2 : 3 : 5',
    explanation: "A 3-part ratio compares three quantities in order with colons: 2 : 3 : 5.",
    hint1: "Write all three numbers separated by colons in the given order.",
    hint2: "Copper (2) : Tin (3) : Iron (5) = 2 : 3 : 5.",
    visualData: { simpA: 2, simpB: 3, simpC: 5, labelA: 'Copper', labelB: 'Tin', labelC: 'Iron' }
  },
  {
    id: 42, districtId: 4, category: '3-PART RATIO', visual: 'three_part',
    questionText: "In a molten mix, there are 4 scoops of red magma, 2 scoops of yellow spark, and 6 scoops of obsidian. What is the unsimplified ratio of red to yellow to obsidian?",
    options: ['4 : 2 : 6', '2 : 4 : 6', '6 : 4 : 2', '4 : 6 : 2'],
    correctAnswer: '4 : 2 : 6',
    explanation: "Red (4) : Yellow (2) : Obsidian (6) = 4 : 2 : 6.",
    hint1: "Match the amounts in order: Red, Yellow, Obsidian.",
    hint2: "4 : 2 : 6.",
    visualData: { simpA: 4, simpB: 2, simpC: 6, labelA: 'Red', labelB: 'Yellow', labelC: 'Obsidian' }
  },
  {
    id: 43, districtId: 4, category: '3-PART RATIO',
    questionText: "A concrete mix has cement, sand, and gravel in the ratio 1 : 2 : 4. How many total parts are there?",
    options: ['7 parts', '8 parts', '6 parts', '9 parts'],
    correctAnswer: '7 parts',
    explanation: "Add all three parts: 1 + 2 + 4 = 7 parts.",
    hint1: "1 + 2 + 4 = ?",
    hint2: "7 parts in total."
  },
  {
    id: 44, districtId: 4, category: '3-PART RATIO', visual: 'three_part',
    questionText: "Simplify the 3-part ratio 3 : 6 : 9 by dividing all three terms by 3.",
    options: ['1 : 2 : 3', '1 : 3 : 3', '2 : 3 : 4', '3 : 2 : 1'],
    correctAnswer: '1 : 2 : 3',
    explanation: "3 ÷ 3 = 1, 6 ÷ 3 = 2, 9 ÷ 3 = 3. The simplified ratio is 1 : 2 : 3.",
    hint1: "Divide 3, 6, and 9 by 3.",
    hint2: "1 : 2 : 3.",
    visualData: { simpA: 1, simpB: 2, simpC: 3, labelA: 'A', labelB: 'B', labelC: 'C' }
  },
  {
    id: 45, districtId: 4, category: 'TRUE/FALSE',
    questionText: "True or False: To simplify a 3-part ratio, you must divide ALL three terms by the same common factor.",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! Every term in a 3-part ratio must be divided by the exact same common factor.",
    hint1: "Can you divide only two terms and leave the third?",
    hint2: "No, all terms must be divided by the common factor."
  },
  {
    id: 46, districtId: 4, category: '3-PART RATIO',
    questionText: "A treasure chest has 2 ruby gems, 4 emerald gems, and 8 sapphire gems. What is the ratio of rubies to emeralds to sapphires in simplest form?",
    options: ['1 : 2 : 4', '2 : 4 : 8', '1 : 4 : 8', '2 : 2 : 4'],
    correctAnswer: '1 : 2 : 4',
    explanation: "Divide 2, 4, and 8 by 2: 2 ÷ 2 = 1, 4 ÷ 2 = 2, 8 ÷ 2 = 4 ➔ 1 : 2 : 4.",
    hint1: "Divide each number by 2.",
    hint2: "1 : 2 : 4."
  },
  {
    id: 47, districtId: 4, category: '3-PART RATIO', visual: 'three_part',
    questionText: "In a forge squad, the ratio of apprentices to smiths to masters is 5 : 3 : 1. What is the ratio of masters to apprentices to smiths?",
    options: ['1 : 5 : 3', '5 : 3 : 1', '1 : 3 : 5', '3 : 5 : 1'],
    correctAnswer: '1 : 5 : 3',
    explanation: "Masters = 1, Apprentices = 5, Smiths = 3. So the new ratio is 1 : 5 : 3.",
    hint1: "Check the new order requested: Masters (1), Apprentices (5), Smiths (3).",
    hint2: "1 : 5 : 3.",
    visualData: { simpA: 1, simpB: 5, simpC: 3, labelA: 'Masters', labelB: 'Apprentices', labelC: 'Smiths' }
  },
  {
    id: 48, districtId: 4, category: '3-PART RATIO',
    questionText: "A fruit salad uses apples, bananas, and oranges in the ratio 2 : 3 : 5. What fraction of the salad is bananas?",
    options: ['3 / 10', '2 / 10', '5 / 10', '3 / 8'],
    correctAnswer: '3 / 10',
    explanation: "Total parts = 2 + 3 + 5 = 10. Bananas are 3 parts, so the fraction is 3/10.",
    hint1: "Total parts = 2 + 3 + 5 = 10.",
    hint2: "Bananas = 3, so 3/10."
  },
  {
    id: 49, districtId: 4, category: '3-PART RATIO', visual: 'three_part',
    questionText: "Simplify the ratio 4 : 8 : 12.",
    options: ['1 : 2 : 3', '2 : 4 : 6', '1 : 4 : 3', '4 : 2 : 3'],
    correctAnswer: '1 : 2 : 3',
    explanation: "Divide all terms by 4: 4 ÷ 4 = 1, 8 ÷ 4 = 2, 12 ÷ 4 = 3 ➔ 1 : 2 : 3.",
    hint1: "Divide each number by 4.",
    hint2: "1 : 2 : 3.",
    visualData: { simpA: 1, simpB: 2, simpC: 3, labelA: 'Part 1', labelB: 'Part 2', labelC: 'Part 3' }
  },
  {
    id: 50, districtId: 4, category: '3-PART RATIO',
    questionText: "If the ratio of gold to silver to bronze medals is 1 : 2 : 3, and there are 6 gold medals, how many bronze medals are there?",
    options: ['18 bronze', '12 bronze', '6 bronze', '24 bronze'],
    correctAnswer: '18 bronze',
    explanation: "The multiplier is 6 ÷ 1 = 6. Bronze medals = 3 × 6 = 18.",
    hint1: "Gold is 1 part = 6. So 1 part = 6.",
    hint2: "Bronze is 3 parts: 3 × 6 = 18."
  },

  // ── WORLD 5: COSMIC STATION (Questions 51 - 60) ─────────────────────────────
  // Topic: Equivalent Ratios & Proportional Scaling
  {
    id: 51, districtId: 5, category: 'EQUIVALENT RATIO', visual: 'recipe',
    questionText: "Which ratio is equivalent to 2 : 3?",
    options: ['4 : 6', '3 : 2', '2 : 5', '4 : 9'],
    correctAnswer: '4 : 6',
    explanation: "Multiplying both terms by 2: 2 × 2 = 4 and 3 × 2 = 6, giving 4 : 6.",
    hint1: "Multiply both 2 and 3 by 2.",
    hint2: "2 × 2 = 4 and 3 × 2 = 6 ➔ 4 : 6.",
    visualData: { valA: 4, valB: 6, simpA: 2, simpB: 3, labelA: 'Stars ⭐', labelB: 'Planets 🪐' }
  },
  {
    id: 52, districtId: 5, category: 'EQUIVALENT RATIO',
    questionText: "If the ratio 3 : 5 is scaled up by multiplying both numbers by 4, what is the new ratio?",
    options: ['12 : 20', '7 : 9', '12 : 15', '15 : 20'],
    correctAnswer: '12 : 20',
    explanation: "3 × 4 = 12 and 5 × 4 = 20, so the equivalent ratio is 12 : 20.",
    hint1: "Compute 3 × 4 and 5 × 4.",
    hint2: "12 : 20."
  },
  {
    id: 53, districtId: 5, category: 'EQUIVALENT RATIO', visual: 'bar_model',
    questionText: "Are the ratios 5 : 10 and 1 : 2 equivalent?",
    options: ['Yes, dividing both terms of 5:10 by 5 gives 1:2', 'No, 5 is greater than 1', 'No, they have different totals', 'Only in space'],
    correctAnswer: 'Yes, dividing both terms of 5:10 by 5 gives 1:2',
    explanation: "Yes! 5 ÷ 5 = 1 and 10 ÷ 5 = 2, so 5 : 10 = 1 : 2.",
    hint1: "Simplify 5 : 10 by dividing by 5.",
    hint2: "5 ÷ 5 = 1 and 10 ÷ 5 = 2, so they are equivalent.",
    visualData: { valA: 5, valB: 10, simpA: 1, simpB: 2, labelA: 'Solar ☀️', labelB: 'Battery 🔋' }
  },
  {
    id: 54, districtId: 5, category: 'SCALING RATIO',
    questionText: "A rocket fuel mixture has 1 part liquid oxygen to 3 parts hydrogen. To make 12 liters of hydrogen, how much liquid oxygen is needed?",
    options: ['4 liters', '3 liters', '6 liters', '12 liters'],
    correctAnswer: '4 liters',
    explanation: "Hydrogen scaled from 3 to 12 (multiplied by 4). Liquid oxygen = 1 × 4 = 4 liters.",
    hint1: "How many times does 3 go into 12? (12 ÷ 3 = 4).",
    hint2: "Multiply 1 by 4 = 4 liters."
  },
  {
    id: 55, districtId: 5, category: 'EQUIVALENT RATIO', visual: 'recipe',
    questionText: "Complete the equivalent ratio: 4 : 7 = ? : 21",
    options: ['12', '14', '16', '8'],
    correctAnswer: '12',
    explanation: "21 ÷ 7 = 3. Multiply the first term by 3: 4 × 3 = 12.",
    hint1: "7 was multiplied by 3 to get 21.",
    hint2: "Multiply 4 by 3 = 12.",
    visualData: { valA: 12, valB: 21, simpA: 4, simpB: 7, labelA: 'Oxygen 🧪', labelB: 'Fuel 🚀' }
  },
  {
    id: 56, districtId: 5, category: 'TRUE/FALSE',
    questionText: "True or False: If you add 3 to both terms of the ratio 2 : 5, the new ratio 5 : 8 is equivalent to 2 : 5.",
    options: ['False', 'True'],
    correctAnswer: 'False',
    explanation: "False! Adding the same number to both terms changes the proportion. Equivalent ratios are made by MULTIPLYING or DIVIDING, never by adding.",
    hint1: "Do equivalent ratios come from addition or multiplication?",
    hint2: "Only multiplication and division preserve equivalent ratios."
  },
  {
    id: 57, districtId: 5, category: 'SCALING RATIO', visual: 'bar_model',
    questionText: "A space probe travels 10 km every 2 seconds. What is the simplified ratio of distance (km) to time (seconds)?",
    options: ['5 : 1', '1 : 5', '10 : 2', '2 : 10'],
    correctAnswer: '5 : 1',
    explanation: "10 : 2 divided by 2 gives 5 : 1 (meaning 5 km per 1 second).",
    hint1: "Divide both 10 and 2 by 2.",
    hint2: "5 : 1.",
    visualData: { valA: 10, valB: 2, simpA: 5, simpB: 1, labelA: 'Distance (km) 🚀', labelB: 'Time (s) ⏱️' }
  },
  {
    id: 58, districtId: 5, category: 'EQUIVALENT RATIO',
    questionText: "Which ratio is NOT equivalent to 1 : 4?",
    options: ['2 : 6', '2 : 8', '3 : 12', '5 : 20'],
    correctAnswer: '2 : 6',
    explanation: "2 : 6 simplifies to 1 : 3, not 1 : 4. All the others simplify to 1 : 4.",
    hint1: "Simplify each option.",
    hint2: "2 : 6 = 1 : 3, which does not equal 1 : 4."
  },
  {
    id: 59, districtId: 5, category: 'SCALING RATIO',
    questionText: "If the ratio of satellites to space stations is 6 : 2, what is the ratio scaled down to its simplest form?",
    options: ['3 : 1', '1 : 3', '6 : 1', '2 : 6'],
    correctAnswer: '3 : 1',
    explanation: "Divide both terms by 2: 6 ÷ 2 = 3 and 2 ÷ 2 = 1 ➔ 3 : 1.",
    hint1: "Divide both numbers by 2.",
    hint2: "3 : 1."
  },
  {
    id: 60, districtId: 5, category: 'EQUIVALENT RATIO', visual: 'recipe',
    questionText: "Complete the equivalent ratio: 18 : 24 = 3 : ?",
    options: ['4', '6', '5', '8'],
    correctAnswer: '4',
    explanation: "18 ÷ 6 = 3. Divide 24 by 6: 24 ÷ 6 = 4.",
    hint1: "18 was divided by 6 to get 3.",
    hint2: "24 ÷ 6 = 4.",
    visualData: { valA: 18, valB: 24, simpA: 3, simpB: 4, labelA: 'Comets ☄️', labelB: 'Asteroids 🪨' }
  },

  // ── WORLD 6: DRAGON SANCTUARY (Questions 61 - 70) ───────────────────────────
  // Topic: Sharing Quantities in a Given Ratio
  {
    id: 61, districtId: 6, category: 'SHARING RATIO', visual: 'bar_model',
    questionText: "Leo and Mia share 20 dragon gems in the ratio 2 : 3. How many gems does Leo get (2 parts)?",
    options: ['8 gems', '12 gems', '10 gems', '4 gems'],
    correctAnswer: '8 gems',
    explanation: "Total parts = 2 + 3 = 5. Value of 1 part = 20 ÷ 5 = 4 gems. Leo gets 2 × 4 = 8 gems.",
    hint1: "Total parts = 2 + 3 = 5. 1 part = 20 ÷ 5 = 4.",
    hint2: "Leo has 2 parts: 2 × 4 = 8 gems.",
    visualData: { valA: 8, valB: 12, simpA: 2, simpB: 3, labelA: 'Leo (2 parts) 💎', labelB: 'Mia (3 parts) 💎' }
  },
  {
    id: 62, districtId: 6, category: 'SHARING RATIO', visual: 'bar_model',
    questionText: "In the same share of 20 gems in the ratio 2 : 3, how many gems does Mia get (3 parts)?",
    options: ['12 gems', '8 gems', '15 gems', '6 gems'],
    correctAnswer: '12 gems',
    explanation: "1 part = 4 gems. Mia gets 3 parts × 4 = 12 gems.",
    hint1: "1 part = 4 gems.",
    hint2: "Mia gets 3 × 4 = 12 gems.",
    visualData: { valA: 8, valB: 12, simpA: 2, simpB: 3, labelA: 'Leo (2 parts) 💎', labelB: 'Mia (3 parts) 💎' }
  },
  {
    id: 63, districtId: 6, category: 'SHARING RATIO',
    questionText: "Share $30 between two dragon keepers in the ratio 1 : 5. What is the value of the smaller share?",
    options: ['$5', '$6', '$10', '$25'],
    correctAnswer: '$5',
    explanation: "Total parts = 1 + 5 = 6 parts. $30 ÷ 6 = $5 per part. Smaller share = 1 × $5 = $5.",
    hint1: "Total parts = 1 + 5 = 6.",
    hint2: "30 ÷ 6 = 5. Smaller share = 1 × 5 = $5."
  },
  {
    id: 64, districtId: 6, category: 'SHARING RATIO',
    questionText: "Share $30 between two dragon keepers in the ratio 1 : 5. What is the value of the larger share?",
    options: ['$25', '$20', '$24', '$30'],
    correctAnswer: '$25',
    explanation: "Larger share = 5 parts × $5 = $25.",
    hint1: "1 part = $5.",
    hint2: "5 parts × $5 = $25."
  },
  {
    id: 65, districtId: 6, category: 'SHARING RATIO', visual: 'bar_model',
    questionText: "A dragon keeper feeds 18 kg of meat to two dragons in the ratio 1 : 2. How much does the bigger dragon get?",
    options: ['12 kg', '6 kg', '9 kg', '15 kg'],
    correctAnswer: '12 kg',
    explanation: "Total parts = 1 + 2 = 3. 18 ÷ 3 = 6 kg per part. Bigger dragon (2 parts) = 2 × 6 = 12 kg.",
    hint1: "Total parts = 3. 18 ÷ 3 = 6 kg.",
    hint2: "Bigger dragon gets 2 parts: 2 × 6 = 12 kg.",
    visualData: { valA: 6, valB: 12, simpA: 1, simpB: 2, labelA: 'Small Dragon 🐲', labelB: 'Big Dragon 🐉' }
  },
  {
    id: 66, districtId: 6, category: 'TRUE/FALSE',
    questionText: "True or False: To share an amount in the ratio A : B, you first divide the total amount by (A + B).",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! Adding the ratio parts gives the total number of equal units to divide into.",
    hint1: "Do you add the parts to find total units?",
    hint2: "Yes, total units = A + B."
  },
  {
    id: 67, districtId: 6, category: 'SHARING RATIO',
    questionText: "A rope of length 40 meters is cut in the ratio 3 : 5. What is the length of the shorter piece?",
    options: ['15 meters', '25 meters', '10 meters', '8 meters'],
    correctAnswer: '15 meters',
    explanation: "Total parts = 3 + 5 = 8 parts. 40 ÷ 8 = 5 meters per part. Shorter piece = 3 × 5 = 15 meters.",
    hint1: "Total parts = 8. 40 ÷ 8 = 5 m.",
    hint2: "Shorter piece = 3 × 5 = 15 meters."
  },
  {
    id: 68, districtId: 6, category: 'SHARING RATIO', visual: 'bar_model',
    questionText: "Two dragon eggs weigh 28 kg altogether in the ratio 3 : 4. How much does the heavier egg weigh?",
    options: ['16 kg', '12 kg', '14 kg', '21 kg'],
    correctAnswer: '16 kg',
    explanation: "Total parts = 3 + 4 = 7. 28 ÷ 7 = 4 kg per part. Heavier egg (4 parts) = 4 × 4 = 16 kg.",
    hint1: "28 ÷ 7 = 4 kg.",
    hint2: "4 × 4 = 16 kg.",
    visualData: { valA: 12, valB: 16, simpA: 3, simpB: 4, labelA: 'Egg A 🥚', labelB: 'Egg B 🥚' }
  },
  {
    id: 69, districtId: 6, category: 'SHARING RATIO',
    questionText: "If $50 is split in the ratio 2 : 3 : 5 among three adventurers, how much does the person with 5 parts receive?",
    options: ['$25', '$15', '$10', '$30'],
    correctAnswer: '$25',
    explanation: "Total parts = 2 + 3 + 5 = 10 parts. $50 ÷ 10 = $5 per part. 5 parts = 5 × $5 = $25.",
    hint1: "Total parts = 10. 50 ÷ 10 = 5.",
    hint2: "5 × 5 = $25."
  },
  {
    id: 70, districtId: 6, category: 'SHARING RATIO', visual: 'bar_model',
    questionText: "Leo and Mia share 24 dragon scales in the ratio 1 : 3. How many more scales does Mia get than Leo?",
    options: ['12 more scales', '6 more scales', '18 more scales', '8 more scales'],
    correctAnswer: '12 more scales',
    explanation: "Total parts = 4. 1 part = 24 ÷ 4 = 6. Leo = 6, Mia = 18. Difference = 18 - 6 = 12 scales.",
    hint1: "Leo gets 6 scales, Mia gets 18 scales.",
    hint2: "18 - 6 = 12 more scales.",
    visualData: { valA: 6, valB: 18, simpA: 1, simpB: 3, labelA: 'Leo (6) 🛡️', labelB: 'Mia (18) 🛡️' }
  },

  // ── WORLD 7: CRYSTAL TOWER (Questions 71 - 80) ──────────────────────────────
  // Topic: Finding Missing Terms in Proportions
  {
    id: 71, districtId: 7, category: 'MISSING TERM', visual: 'recipe',
    questionText: "Find the missing term: 3 : 7 = ? : 28",
    options: ['12', '14', '9', '21'],
    correctAnswer: '12',
    explanation: "The multiplier is 28 ÷ 7 = 4. Multiply 3 by 4: 3 × 4 = 12.",
    hint1: "7 × 4 = 28.",
    hint2: "Compute 3 × 4 = 12.",
    visualData: { valA: 12, valB: 28, simpA: 3, simpB: 7, labelA: 'Crystals 💎', labelB: 'Prisms 🔮' }
  },
  {
    id: 72, districtId: 7, category: 'MISSING TERM',
    questionText: "Find the missing term: 5 : ? = 15 : 24",
    options: ['8', '6', '10', '12'],
    correctAnswer: '8',
    explanation: "15 ÷ 5 = 3. Divide 24 by 3: 24 ÷ 3 = 8.",
    hint1: "5 was multiplied by 3 to get 15.",
    hint2: "24 ÷ 3 = 8."
  },
  {
    id: 73, districtId: 7, category: 'MISSING TERM', visual: 'bar_model',
    questionText: "If 2 crystal wands cost $6, what is the cost of 5 crystal wands?",
    options: ['$15', '$12', '$18', '$10'],
    correctAnswer: '$15',
    explanation: "Cost of 1 wand = $6 ÷ 2 = $3. Cost of 5 wands = 5 × $3 = $15.",
    hint1: "1 wand costs $6 ÷ 2 = $3.",
    hint2: "5 wands cost 5 × $3 = $15.",
    visualData: { valA: 2, valB: 6, simpA: 1, simpB: 3, labelA: 'Wands 🪄', labelB: 'Dollars 💵' }
  },
  {
    id: 74, districtId: 7, category: 'MISSING TERM',
    questionText: "Find the missing number in the proportion: ? : 9 = 20 : 36",
    options: ['5', '4', '6', '10'],
    correctAnswer: '5',
    explanation: "36 ÷ 9 = 4. Divide 20 by 4: 20 ÷ 4 = 5.",
    hint1: "36 was divided by 4 to get 9.",
    hint2: "20 ÷ 4 = 5."
  },
  {
    id: 75, districtId: 7, category: 'MISSING TERM', visual: 'recipe',
    questionText: "A crystal beam shines 4 meters for every 3 watts of power. How far does it shine with 15 watts of power?",
    options: ['20 meters', '16 meters', '24 meters', '12 meters'],
    correctAnswer: '20 meters',
    explanation: "Power is scaled by 15 ÷ 3 = 5. Distance = 4 × 5 = 20 meters.",
    hint1: "15 ÷ 3 = 5.",
    hint2: "4 × 5 = 20 meters.",
    visualData: { valA: 20, valB: 15, simpA: 4, simpB: 3, labelA: 'Meters 📏', labelB: 'Watts ⚡' }
  },
  {
    id: 76, districtId: 7, category: 'TRUE/FALSE',
    questionText: "True or False: In any proportional ratio equation A : B = C : D, the product (A × D) equals the product (B × C).",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! This is known as cross-multiplication: A/B = C/D means A × D = B × C.",
    hint1: "Think about 2 : 3 = 4 : 6 ➔ (2 × 6 = 12) and (3 × 4 = 12).",
    hint2: "Cross products are always equal in equivalent ratios."
  },
  {
    id: 77, districtId: 7, category: 'MISSING TERM',
    questionText: "Find the missing term: 8 : 10 = 4 : ?",
    options: ['5', '6', '8', '2'],
    correctAnswer: '5',
    explanation: "8 was divided by 2 to get 4. 10 ÷ 2 = 5.",
    hint1: "Divide 10 by 2.",
    hint2: "10 ÷ 2 = 5."
  },
  {
    id: 78, districtId: 7, category: 'MISSING TERM', visual: 'bar_model',
    questionText: "The ratio of red gems to green gems in a tower is 7 : 4. If there are 28 red gems, how many green gems are there?",
    options: ['16 green gems', '14 green gems', '12 green gems', '20 green gems'],
    correctAnswer: '16 green gems',
    explanation: "28 ÷ 7 = 4. Green gems = 4 × 4 = 16.",
    hint1: "7 × 4 = 28.",
    hint2: "4 × 4 = 16 green gems.",
    visualData: { valA: 28, valB: 16, simpA: 7, simpB: 4, labelA: 'Red 🔴', labelB: 'Green 🟢' }
  },
  {
    id: 79, districtId: 7, category: 'MISSING TERM',
    questionText: "Find the missing value: 9 : 12 = ? : 4",
    options: ['3', '2', '4', '6'],
    correctAnswer: '3',
    explanation: "12 ÷ 3 = 4. Divide 9 by 3: 9 ÷ 3 = 3.",
    hint1: "Divide 9 by 3.",
    hint2: "9 ÷ 3 = 3."
  },
  {
    id: 80, districtId: 7, category: 'MISSING TERM', visual: 'recipe',
    questionText: "A tower elevator moves 6 floors in 10 seconds. How many floors does it move in 30 seconds?",
    options: ['18 floors', '12 floors', '20 floors', '24 floors'],
    correctAnswer: '18 floors',
    explanation: "30 seconds is 3 times 10 seconds. Floors moved = 6 × 3 = 18 floors.",
    hint1: "30 ÷ 10 = 3.",
    hint2: "6 × 3 = 18 floors.",
    visualData: { valA: 18, valB: 30, simpA: 3, simpB: 5, labelA: 'Floors 🏢', labelB: 'Seconds ⏱️' }
  },

  // ── WORLD 8: RAINBOW BRIDGE (Questions 81 - 90) ─────────────────────────────
  // Topic: Unit Conversions & Comparisons in Ratios
  {
    id: 81, districtId: 8, category: 'UNIT CONVERSION', visual: 'bar_model',
    questionText: "What is the ratio of 50 cm to 1 meter in simplest form? (Hint: 1 m = 100 cm)",
    options: ['1 : 2', '50 : 1', '1 : 50', '2 : 1'],
    correctAnswer: '1 : 2',
    explanation: "Convert 1 meter to 100 cm first! 50 cm : 100 cm simplifies to 1 : 2.",
    hint1: "Convert 1 meter to 100 cm first.",
    hint2: "50 : 100 = 1 : 2.",
    visualData: { valA: 50, valB: 100, simpA: 1, simpB: 2, labelA: '50 cm 📏', labelB: '100 cm (1m) 📏' }
  },
  {
    id: 82, districtId: 8, category: 'UNIT CONVERSION',
    questionText: "What must you always do BEFORE writing and simplifying a ratio with different units?",
    options: ['Convert both quantities to the same unit', 'Ignore the units completely', 'Multiply by 100 always', 'Add the units together'],
    correctAnswer: 'Convert both quantities to the same unit',
    explanation: "Both quantities must be in the identical unit of measurement before writing and simplifying the ratio.",
    hint1: "Can you compare centimeters directly to meters without converting?",
    hint2: "Always convert to the same unit first."
  },
  {
    id: 83, districtId: 8, category: 'UNIT CONVERSION', visual: 'recipe',
    questionText: "What is the ratio of 200 ml of honey to 1 liter of warm water? (Hint: 1 L = 1000 ml)",
    options: ['1 : 5', '200 : 1', '1 : 4', '2 : 5'],
    correctAnswer: '1 : 5',
    explanation: "1 liter = 1000 ml. The ratio 200 : 1000 simplifies to 1 : 5.",
    hint1: "1 Liter = 1000 ml.",
    hint2: "200 : 1000 = 1 : 5.",
    visualData: { valA: 200, valB: 1000, simpA: 1, simpB: 5, labelA: 'Honey (200ml) 🍯', labelB: 'Water (1000ml) 💧' }
  },
  {
    id: 84, districtId: 8, category: 'UNIT CONVERSION',
    questionText: "What is the ratio of 30 seconds to 2 minutes in simplest form? (Hint: 1 min = 60 s)",
    options: ['1 : 4', '30 : 2', '1 : 2', '1 : 6'],
    correctAnswer: '1 : 4',
    explanation: "2 minutes = 120 seconds. 30 seconds : 120 seconds simplifies to 1 : 4.",
    hint1: "2 minutes = 2 × 60 = 120 seconds.",
    hint2: "30 : 120 = 1 : 4."
  },
  {
    id: 85, districtId: 8, category: 'UNIT CONVERSION', visual: 'bar_model',
    questionText: "What is the ratio of 250 grams to 1 kilogram? (Hint: 1 kg = 1000 g)",
    options: ['1 : 4', '1 : 2', '250 : 1', '1 : 5'],
    correctAnswer: '1 : 4',
    explanation: "1 kg = 1000 g. 250 g : 1000 g = 1 : 4.",
    hint1: "1 kg = 1000 g.",
    hint2: "250 : 1000 = 1 : 4.",
    visualData: { valA: 250, valB: 1000, simpA: 1, simpB: 4, labelA: '250 g ⚖️', labelB: '1000 g ⚖️' }
  },
  {
    id: 86, districtId: 8, category: 'TRUE/FALSE',
    questionText: "True or False: The ratio of 3 days to 1 week is 3 : 7.",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! 1 week = 7 days, so 3 days to 1 week is 3 : 7.",
    hint1: "How many days are in 1 week?",
    hint2: "1 week = 7 days, so 3 : 7."
  },
  {
    id: 87, districtId: 8, category: 'UNIT CONVERSION', visual: 'recipe',
    questionText: "What is the ratio of 40 cm to 2 meters in simplest form?",
    options: ['1 : 5', '1 : 4', '40 : 2', '2 : 5'],
    correctAnswer: '1 : 5',
    explanation: "2 m = 200 cm. 40 cm : 200 cm = 1 : 5.",
    hint1: "2 m = 200 cm.",
    hint2: "40 : 200 = 1 : 5.",
    visualData: { valA: 40, valB: 200, simpA: 1, simpB: 5, labelA: '40 cm 📏', labelB: '200 cm 📏' }
  },
  {
    id: 88, districtId: 8, category: 'UNIT CONVERSION',
    questionText: "What is the ratio of 15 minutes to 1 hour in simplest form?",
    options: ['1 : 4', '15 : 1', '1 : 3', '1 : 6'],
    correctAnswer: '1 : 4',
    explanation: "1 hour = 60 minutes. 15 min : 60 min = 1 : 4.",
    hint1: "1 hour = 60 minutes.",
    hint2: "15 : 60 = 1 : 4."
  },
  {
    id: 89, districtId: 8, category: 'UNIT CONVERSION', visual: 'bar_model',
    questionText: "What is the ratio of 500 ml to 2 liters?",
    options: ['1 : 4', '1 : 2', '500 : 2', '1 : 5'],
    correctAnswer: '1 : 4',
    explanation: "2 L = 2000 ml. 500 ml : 2000 ml = 1 : 4.",
    hint1: "2 Liters = 2000 ml.",
    hint2: "500 : 2000 = 1 : 4.",
    visualData: { valA: 500, valB: 2000, simpA: 1, simpB: 4, labelA: '500 ml 🧪', labelB: '2000 ml 🧪' }
  },
  {
    id: 90, districtId: 8, category: 'UNIT CONVERSION',
    questionText: "What is the ratio of 8 months to 1 year in simplest form? (Hint: 1 year = 12 months)",
    options: ['2 : 3', '8 : 1', '3 : 2', '4 : 5'],
    correctAnswer: '2 : 3',
    explanation: "1 year = 12 months. 8 : 12 simplifies by dividing by 4 to 2 : 3.",
    hint1: "1 year = 12 months.",
    hint2: "8 : 12 = 2 : 3."
  },

  // ── WORLD 9: RATIO CITADEL (Questions 91 - 100) ─────────────────────────────
  // Topic: Grand Mastery & Multi-Step Word Problems
  {
    id: 91, districtId: 9, category: 'CITADEL MASTERY', visual: 'recipe',
    questionText: "In the Citadel armory, the ratio of shields to swords is 3 : 5. If there are 30 swords, how many shields are there?",
    options: ['18 shields', '15 shields', '20 shields', '12 shields'],
    correctAnswer: '18 shields',
    explanation: "30 ÷ 5 = 6. Shields = 3 × 6 = 18.",
    hint1: "30 ÷ 5 = 6 per part.",
    hint2: "3 × 6 = 18 shields.",
    visualData: { valA: 18, valB: 30, simpA: 3, simpB: 5, labelA: 'Shields 🛡️', labelB: 'Swords ⚔️' }
  },
  {
    id: 92, districtId: 9, category: 'CITADEL MASTERY', visual: 'bar_model',
    questionText: "The ratio of knights to archers is 4 : 7. There are 21 archers. How many TOTAL warriors are there in all?",
    options: ['33 warriors', '28 warriors', '35 warriors', '40 warriors'],
    correctAnswer: '33 warriors',
    explanation: "1 part = 21 ÷ 7 = 3. Knights = 4 × 3 = 12. Total = 12 + 21 = 33 warriors.",
    hint1: "21 ÷ 7 = 3 per part. Knights = 4 × 3 = 12.",
    hint2: "Total = 12 + 21 = 33 warriors.",
    visualData: { valA: 12, valB: 21, simpA: 4, simpB: 7, labelA: 'Knights 🤺', labelB: 'Archers 🏹' }
  },
  {
    id: 93, districtId: 9, category: 'CITADEL MASTERY',
    questionText: "Leo, Mia, and Chirpy share 36 gold coins in the ratio 2 : 3 : 4. How many coins does Mia (3 parts) receive?",
    options: ['12 coins', '8 coins', '16 coins', '10 coins'],
    correctAnswer: '12 coins',
    explanation: "Total parts = 2 + 3 + 4 = 9. 36 ÷ 9 = 4 coins per part. Mia = 3 × 4 = 12 coins.",
    hint1: "Total parts = 9. 36 ÷ 9 = 4.",
    hint2: "Mia gets 3 parts: 3 × 4 = 12 coins."
  },
  {
    id: 94, districtId: 9, category: 'CITADEL MASTERY', visual: 'recipe',
    questionText: "A potion recipe uses 2 drops dragon tear, 5 drops moon water, and 3 drops stardust. If a wizard uses 15 drops of moon water, how many drops of dragon tear are used?",
    options: ['6 drops', '4 drops', '8 drops', '10 drops'],
    correctAnswer: '6 drops',
    explanation: "Moon water scaled by 15 ÷ 5 = 3. Dragon tear = 2 × 3 = 6 drops.",
    hint1: "15 ÷ 5 = 3.",
    hint2: "2 × 3 = 6 drops.",
    visualData: { valA: 6, valB: 15, simpA: 2, simpB: 5, labelA: 'Dragon Tear 💧', labelB: 'Moon Water 🌙' }
  },
  {
    id: 95, districtId: 9, category: 'CITADEL MASTERY',
    questionText: "The ratio of boys to girls in a math club is 3 : 2. If there are 18 boys, what is the total number of students in the club?",
    options: ['30 students', '24 students', '28 students', '36 students'],
    correctAnswer: '30 students',
    explanation: "1 part = 18 ÷ 3 = 6. Girls = 2 × 6 = 12. Total students = 18 + 12 = 30.",
    hint1: "18 ÷ 3 = 6 per part.",
    hint2: "Total parts = 3 + 2 = 5 parts. 5 × 6 = 30 students."
  },
  {
    id: 96, districtId: 9, category: 'TRUE/FALSE',
    questionText: "True or False: If ratio A : B is 3 : 4 and ratio B : C is 4 : 5, then the combined 3-part ratio A : B : C is 3 : 4 : 5.",
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: "True! Since the common term B is 4 in both ratios, they link directly into 3 : 4 : 5.",
    hint1: "Notice the term B is 4 in both given ratios.",
    hint2: "They combine directly to 3 : 4 : 5."
  },
  {
    id: 97, districtId: 9, category: 'CITADEL MASTERY', visual: 'bar_model',
    questionText: "In a grand library, the ratio of fiction to non-fiction books is 5 : 3. If there are 40 more fiction books than non-fiction, how many fiction books are there?",
    options: ['100 fiction books', '60 fiction books', '80 fiction books', '120 fiction books'],
    correctAnswer: '100 fiction books',
    explanation: "Difference in parts = 5 - 3 = 2 parts = 40 books. 1 part = 40 ÷ 2 = 20 books. Fiction books = 5 × 20 = 100 books.",
    hint1: "5 parts - 3 parts = 2 parts = 40 books. 1 part = 20 books.",
    hint2: "Fiction = 5 parts × 20 = 100 books.",
    visualData: { valA: 100, valB: 60, simpA: 5, simpB: 3, labelA: 'Fiction 📚', labelB: 'Non-Fiction 📖' }
  },
  {
    id: 98, districtId: 9, category: 'CITADEL MASTERY',
    questionText: "Simplify the ratio 45 minutes to 1.5 hours in simplest form. (Hint: 1.5 h = 90 min)",
    options: ['1 : 2', '2 : 1', '45 : 1', '3 : 4'],
    correctAnswer: '1 : 2',
    explanation: "1.5 hours = 90 minutes. 45 min : 90 min = 1 : 2.",
    hint1: "1.5 hours = 90 minutes.",
    hint2: "45 : 90 = 1 : 2."
  },
  {
    id: 99, districtId: 9, category: 'CITADEL MASTERY', visual: 'recipe',
    questionText: "A master smith combines copper, zinc, and silver in the ratio 2 : 3 : 1. If they have 18 kg of zinc, how much silver is needed?",
    options: ['6 kg', '12 kg', '9 kg', '3 kg'],
    correctAnswer: '6 kg',
    explanation: "Zinc is 3 parts = 18 kg. 1 part = 18 ÷ 3 = 6 kg. Silver is 1 part = 6 kg.",
    hint1: "18 ÷ 3 = 6 kg per part.",
    hint2: "Silver is 1 part = 6 kg.",
    visualData: { valA: 12, valB: 18, simpA: 2, simpB: 3, labelA: 'Copper (12kg) 🥉', labelB: 'Zinc (18kg) 🥈' }
  },
  {
    id: 100, districtId: 9, category: 'CITADEL MASTERY', visual: 'bar_model',
    questionText: "The Citadel Monarch crowns the master of ratios! What is the ratio notation comparing 4 royal crowns to 6 golden sceptres in simplest form?",
    options: ['2 : 3', '4 : 6', '3 : 2', '1 : 2'],
    correctAnswer: '2 : 3',
    explanation: "4 crowns to 6 sceptres is 4 : 6, which divides by 2 to become 2 : 3!",
    hint1: "4 : 6 divides by 2.",
    hint2: "4 ÷ 2 = 2 and 6 ÷ 2 = 3 ➔ 2 : 3.",
    visualData: { valA: 4, valB: 6, simpA: 2, simpB: 3, labelA: 'Crowns 👑', labelB: 'Sceptres 🪄' }
  },
];

export default RAW_QUESTIONS;
