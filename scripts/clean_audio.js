// scripts/clean_audio.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { audioMap } from '../src/utils/audioMap.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const audioDir = path.join(__dirname, '../public/assets/audio');

if (fs.existsSync(audioDir)) {
  const referencedFiles = new Set(
    Object.values(audioMap).map((p) => path.basename(p))
  );

  const existingFiles = fs.readdirSync(audioDir);
  let deletedCount = 0;

  for (const file of existingFiles) {
    if (file.endsWith('.mp3') && !referencedFiles.has(file)) {
      fs.unlinkSync(path.join(audioDir, file));
      console.log(`Deleted orphaned audio file: ${file}`);
      deletedCount++;
    }
  }

  console.log(`Audio cleanup finished. Deleted ${deletedCount} orphaned files.`);
} else {
  console.log('Audio directory does not exist yet.');
}
