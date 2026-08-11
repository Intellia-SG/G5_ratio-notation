// scripts/generate_audio.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { audioMap } from '../src/utils/audioMap.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice
const VOICE_MODEL = 'eleven_multilingual_v2';
const VOICE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
};

const phrases = [
  { text: "Hi! I'm Leo. Ready to write ratios and compare quantities? Let's begin our journey!", style: 'celebration' },

  // Wonder
  { text: "The Big Lemonade Mystery!", style: 'celebration' },
  { text: "If Leo and Mia mix two cups of fresh lemon juice for every five cups of water, how do we write down that comparison using ratio notation, and how do we scale it for a giant dispenser?", style: 'question' },
  { text: "Let's investigate how ratio notation helps us compare and scale quantities!", style: 'encouragement' },

  // Story
  { text: "Leo and Mia are setting up their lemonade stand at the school fair! Their secret recipe uses 2 cups of fresh lemon juice for every 5 cups of chilled water. Leo asks: 'How can we write down this comparison so every batch tastes just right?'", style: 'statement' },
  { text: "Mia grabs a chalkboard and explains: 'We can compare two quantities using a ratio! We write it with a colon between the numbers: 2 : 5, read as 2 to 5. The order matters — the first number always matches the first item named!'", style: 'statement' },
  { text: "Leo notices: 'If we have 2 parts lemon juice and 5 parts water, the whole jug has 2 + 5 = 7 total parts! So the ratio of lemon juice to the whole drink is 2 : 7, and water to the whole drink is 5 : 7.' Mia smiles: 'Exactly!'", style: 'instruction' },
  { text: "A huge crowd arrives! To fill a giant dispenser, Leo and Mia multiply both parts by 4: 2 × 4 = 8 cups lemon juice and 5 × 4 = 20 cups water! '8 : 20 has the exact same delicious proportion as 2 : 5!' Leo cheers.", style: 'celebration' },

  // Simulate
  { text: "Station A: Ingredient Ratio Mixer! Dispense lemon juice and water cups to match the target ratio. Watch the mixing flask and ratio notation update live!", style: 'instruction' },
  { text: "Station B: Tape Model & Part-to-Whole Explorer! Tap tape segments to explore part-to-part and part-to-whole comparisons.", style: 'instruction' },
  { text: "Station C: Proportion Scaling Beam! Move the multiplier slider to scale the ratio up and down while preserving equal proportions!", style: 'instruction' },
  { text: "Station D: Notation Detective! Read the ratio card, find the common notation error, and tap the correct ratio notation!", style: 'question' },

  { text: "Amazing! You built the exact ratio notation perfectly!", style: 'celebration' },
  { text: "Not quite! Check your ratio terms and try again.", style: 'encouragement' },

  // Play
  { text: "The Boss Battle begins! Answer the questions correctly with your 3 lives to defeat the boss!", style: 'emphasis' },
  { text: "Victory! You defeated the boss and claimed your Ratio Master reward!", style: 'celebration' },
  { text: "Excellent work! You completed this district!", style: 'celebration' },
  { text: "Amazing! You wrote the ratio notation perfectly!", style: 'celebration' },
  { text: "Brilliant! That is exactly right!", style: 'celebration' },
  { text: "Superb! You know your ratio terms!", style: 'celebration' },
  { text: "Excellent! Ratio mastery at work!", style: 'celebration' },
  { text: "Perfect! That's in exact ratio notation!", style: 'celebration' },
  { text: "Fantastic streak! Keep on rolling!", style: 'celebration' },
  { text: "Let's check the order of the ratio terms again!", style: 'encouragement' },
  { text: "Hint: Notice which item is mentioned first in the question.", style: 'thinking' },
  { text: "Hint: Use a colon between the two terms, written as A : B.", style: 'thinking' },

  // Reflect
  { text: "Take a moment to reflect on your learning and check your ratio notation mastery!", style: 'question' },
  { text: "Congratulations! You have mastered ratio notation, part-to-part and part-to-whole comparisons, and proportional scaling! You are a certified Ratio Grand Master!", style: 'celebration' },
];

const audioDir = path.join(__dirname, '../public/assets/audio');
const phraseStyleByText = new Map(phrases.map((p) => [p.text, p.style]));

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  return content.split(/\r?\n/).reduce((env, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return env;
    const equalsIndex = trimmed.indexOf('=');
    if (equalsIndex === -1) return env;
    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
    return env;
  }, {});
}

function loadApiKey() {
  if (process.env.VITE_ELEVENLABS_API_KEY) return process.env.VITE_ELEVENLABS_API_KEY;
  if (process.env.ELEVENLABS_API_KEY) return process.env.ELEVENLABS_API_KEY;

  const envFiles = ['.env.local', '.env'];
  for (const envFile of envFiles) {
    const loaded = readEnvFile(path.join(process.cwd(), envFile));
    if (loaded.VITE_ELEVENLABS_API_KEY) return loaded.VITE_ELEVENLABS_API_KEY;
    if (loaded.ELEVENLABS_API_KEY) return loaded.ELEVENLABS_API_KEY;
  }
  return null;
}

async function generateAudioFile({ text, style, fileName }, apiKey) {
  const voiceSettings = VOICE_SETTINGS[style] || VOICE_SETTINGS.statement;
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
    },
    body: JSON.stringify({
      text,
      model_id: VOICE_MODEL,
      voice_settings: voiceSettings,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`ElevenLabs API error (${response.status}): ${errorText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(path.join(audioDir, fileName), buffer);
}

function sanitizeForFileName(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 50);
}

async function main() {
  const apiKey = loadApiKey();
  if (!apiKey) {
    console.warn('[Generate Audio] Warning: No VITE_ELEVENLABS_API_KEY found in .env or environment.');
    console.warn('To pre-generate audio files, please add VITE_ELEVENLABS_API_KEY=your_key in .env.local');
    return;
  }

  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  const updatedMap = { ...audioMap };
  let count = 0;

  for (let i = 0; i < phrases.length; i++) {
    const phrase = phrases[i];
    const text = phrase.text;
    const style = phraseStyleByText.get(text) || phrase.style || 'statement';

    let existingPath = updatedMap[text];
    let fileName = existingPath ? path.basename(existingPath) : null;

    if (!fileName || !fs.existsSync(path.join(audioDir, fileName))) {
      fileName = `audio_${sanitizeForFileName(text)}_${i}.mp3`;
      console.log(`Generating [${style}] (${i + 1}/${phrases.length}): "${text.slice(0, 45)}..."`);
      try {
        await generateAudioFile({ text, style, fileName }, apiKey);
        updatedMap[text] = `/assets/audio/${fileName}`;
        count++;
        // Small delay between API calls
        await new Promise((r) => setTimeout(r, 250));
      } catch (err) {
        console.error(`Failed to generate audio for "${text}":`, err.message);
      }
    } else {
      console.log(`✓ Exists (${i + 1}/${phrases.length}): ${fileName}`);
    }
  }

  // Write updated audioMap.js
  const mapContent = `// src/utils/audioMap.js\n// Auto-generated audio map connecting exact spoken strings to static .mp3 paths\n\nexport const audioMap = ${JSON.stringify(updatedMap, null, 2)};\n\nexport default audioMap;\n`;
  fs.writeFileSync(path.join(__dirname, '../src/utils/audioMap.js'), mapContent);

  console.log(`\n🎉 Audio generation completed! ${count} new files generated.`);
}

main().catch(console.error);
