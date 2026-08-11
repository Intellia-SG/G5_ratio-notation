// src/utils/ratioMath.js
// Mathematical utilities for Grade 5 Ratio Notation

export function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

export function gcd3(a, b, c) {
  return gcd(gcd(a, b), c);
}

export function simplifyRatio(a, b) {
  const g = gcd(a, b);
  return { a: a / g, b: b / g, gcf: g, str: `${a / g} : ${b / g}` };
}

export function simplify3PartRatio(a, b, c) {
  const g = gcd3(a, b, c);
  return { a: a / g, b: b / g, c: c / g, gcf: g, str: `${a / g} : ${b / g} : ${c / g}` };
}

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateDistractorsRatio(correctA, correctB) {
  const set = new Set([`${correctA} : ${correctB}`]);

  // Inverse ratio
  if (correctA !== correctB) set.add(`${correctB} : ${correctA}`);

  // Offset variations
  const offsets = [
    [correctA + 1, correctB],
    [correctA, correctB + 1],
    [correctA * 2, correctB * 2],
    [Math.max(1, correctA - 1), correctB],
    [correctA, Math.max(1, correctB - 1)],
    [correctA + 1, correctB + 1],
    [1, correctB],
    [correctA, 1],
  ];

  for (const [oa, ob] of offsets) {
    if (set.size >= 4) break;
    if (oa > 0 && ob > 0 && !(oa === correctA && ob === correctB)) {
      set.add(`${oa} : ${ob}`);
    }
  }

  while (set.size < 4) {
    const ra = Math.floor(Math.random() * 8) + 1;
    const rb = Math.floor(Math.random() * 8) + 1;
    set.add(`${ra} : ${rb}`);
  }

  return shuffleArray([...set]);
}

export function generateDistractorsNum(correctNum, min = 1, max = 50) {
  const set = new Set([String(correctNum)]);
  const deltas = [1, -1, 2, -2, 3, -3, 5, -5, 10, -10];

  for (const d of deltas) {
    if (set.size >= 4) break;
    const val = correctNum + d;
    if (val >= min && val <= max && val !== correctNum) {
      set.add(String(val));
    }
  }

  while (set.size < 4) {
    const fallback = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(String(fallback));
  }

  return shuffleArray([...set]);
}
