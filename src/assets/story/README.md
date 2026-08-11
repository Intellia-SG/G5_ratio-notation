# Story slide art brief — Ratio (Using Ratio Notation), Grade 5

These 4 images are imported directly by `src/features/story/StoryPhase.jsx`
(`import story1 from '../../assets/story/1.png'`, etc.), exactly the same
way the reference module (`equal-groups-main`) loads its story artwork.

## Required filenames (do not rename)
Replace these 4 placeholder files in this folder — same names, same folder:
- `1.png`
- `2.png`
- `3.png`
- `4.png`

## Required size — matches the reference module exactly
- **2000 × 800 px** (landscape, ~2.5:1 aspect ratio)
- This matches the actual dimensions of the reference module's shipped
  story images (they range 1919–2076 px wide × 758–820 px tall — all ~2.5:1).
- The on-screen frame (`.story-image-full` in `src/styles/globals.css`) is
  100% width (card max-width 660px) × 210px tall on desktop (175px tablet,
  140px mobile), rendered with `object-fit: cover` and rounded top corners.
  A 2000×800px source crops cleanly into that frame at every breakpoint.
- If an image fails to load, the app gracefully falls back to an
  "Image coming soon" placeholder — so the module still works if you swap
  images in one at a time.

## What each slide should show
1. **`1.png`** — Jack and Mia at their lemonade stand at the school fair,
   with a jug of lemonade, lemons, and a measuring cup — setting up the
   "how do we compare 2 cups lemon juice to 5 cups water?" hook.
2. **`2.png`** — Mia showing Jack the ratio notation "2 : 5" written on a
   recipe card or chalkboard, cups of lemon juice and water side by side.
3. **`3.png`** — Jack scaling up the recipe for a bigger jug — two rows of
   cups showing 2:5 next to 4:10, illustrating the equivalent-ratio idea.
4. **`4.png`** — Jack and Mia celebrating with a full lemonade stand, happy
   customers, ready for "Practice" — an upbeat, celebratory close.

## Style
Match the reference module's flat, friendly, gamified illustration style —
bright colours, rounded shapes, no text baked into the image (all text is
rendered by the app itself).
