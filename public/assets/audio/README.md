# Narration audio goes here

This module ships without pre-generated audio. Add your ElevenLabs API key
to `.env.local` in the project root:

    VITE_ELEVENLABS_API_KEY=your_key_here

Then run:

    npm run generate-audio

This synthesizes every phrase in `scripts/generate_audio.js` into .mp3
files in this folder and regenerates `src/utils/audioMap.js` automatically.
Until then, the module works fully — narration calls just silently no-op.
