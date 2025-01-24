const baseScaleMap = {
  fingers: [
    // These values represent a F# Locrian scale.
    // 6th string
    [6, 0, { text: "E" }],
    [6, 2, { text: "R", color: "red" }],
    [6, 3, { text: "2" }],
    [6, 5, { text: "♭3", color: "pink" }],
    [6, 7, { text: "4" }],
    [6, 8, { text: "♭5", color: "pink" }],
    [6, 10, { text: "6" }],
    [6, 12, { text: "♭7" }],
    // 5th string
    [5, 0, { text: "A" }],
    [5, 2, { text: "4" }],
    [5, 3, { text: "♭5", color: "pink" }],
    [5, 5, { text: "6" }],
    [5, 7, { text: "♭7" }],
    [5, 9, { text: "R", color: "red" }],
    [5, 10, { text: "2" }],
    [5, 12, { text: "♭3", color: "pink" }],

    // 4th string
    [4, 0, { text: "D" }],
    [4, 2, { text: "♭7" }],
    [4, 4, { text: "R", color: "red" }],
    [4, 5, { text: "2" }],
    [4, 7, { text: "♭3", color: "pink" }],
    [4, 9, { text: "4" }],
    [4, 10, { text: "♭5", color: "pink" }],
    [4, 12, { text: "6" }],
    // 3rd string
    [3, 0, { text: "G" }],
    [3, 2, { text: "♭3", color: "pink" }],
    [3, 4, { text: "4" }],
    [3, 5, { text: "♭5", color: "pink" }],
    [3, 7, { text: "6" }],
    [3, 9, { text: "♭7" }],
    [3, 11, { text: "R", color: "red" }],
    [3, 12, { text: "2" }],
    // 2nd string
    [2, 0, { text: "B" }],
    [2, 1, { text: "♭5", color: "pink" }],
    [2, 3, { text: "6" }],
    [2, 5, { text: "♭7" }],
    [2, 7, { text: "R", color: "red" }],
    [2, 8, { text: "2" }],
    [2, 10, { text: "♭3", color: "pink" }],
    [2, 12, { text: "4" }],
    // 1st string
    [1, 0, { text: "e" }],
    [1, 2, { text: "R", color: "red" }],
    [1, 3, { text: "2" }],
    [1, 5, { text: "♭3", color: "pink" }],
    [1, 7, { text: "4" }],
    [1, 8, { text: "♭5", color: "pink" }],
    [1, 10, { text: "6" }],
    [1, 12, { text: "♭7" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: -8,
  "A#": -7,
  B: -6,
  C: -5,
  "C#": -4,
  D: -3,
  "D#": -2,
  E: -1,
  F: 0,
  "F#": 1,
  G: 2,
  "G#": 3,
};

function generateLocrianScaleMap(key) {
  const offset = keyOffsets[key];
  if (offset === undefined) {
    throw new Error("Invalid key");
  }

  const newScaleMap = JSON.parse(JSON.stringify(baseScaleMap));
  newScaleMap.fingers = newScaleMap.fingers.map(([string, fret, note]) => [
    string,
    fret === 0 ? 0 : ((fret + offset + 12 - 2) % 12) + 1,
    note,
  ]);

  return newScaleMap;
}

export { generateLocrianScaleMap };
