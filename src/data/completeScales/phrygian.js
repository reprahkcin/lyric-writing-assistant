const baseScaleMap = {
  fingers: [
    // These values represent a B Phrygian scale.
    // 6th string

    [6, 2, { text: "5", color: "pink" }],
    [6, 3, { text: "6" }],
    [6, 5, { text: "♭7" }],
    [6, 7, { text: "R", color: "red" }],
    [6, 8, { text: "♭2" }],
    [6, 10, { text: "3", color: "pink" }],
    [6, 12, { text: "4" }],
    // 5th string

    [5, 2, { text: "R", color: "red" }],
    [5, 3, { text: "♭2" }],
    [5, 5, { text: "3", color: "pink" }],
    [5, 7, { text: "4" }],
    [5, 9, { text: "5", color: "pink" }],
    [5, 10, { text: "6" }],
    [5, 12, { text: "♭7" }],

    // 4th string

    [4, 2, { text: "4" }],
    [4, 4, { text: "5", color: "pink" }],
    [4, 5, { text: "6" }],
    [4, 7, { text: "♭7" }],
    [4, 9, { text: "R", color: "red" }],
    [4, 10, { text: "♭2" }],
    [4, 12, { text: "3", color: "pink" }],
    // 3rd string

    [3, 2, { text: "♭7" }],
    [3, 4, { text: "R", color: "red" }],
    [3, 5, { text: "♭2" }],
    [3, 7, { text: "3", color: "pink" }],
    [3, 9, { text: "4" }],
    [3, 11, { text: "5", color: "pink" }],
    [3, 12, { text: "6" }],
    // 2nd string

    [2, 1, { text: "♭2" }],
    [2, 3, { text: "3", color: "pink" }],
    [2, 5, { text: "4" }],
    [2, 7, { text: "5", color: "pink" }],
    [2, 8, { text: "6" }],
    [2, 10, { text: "♭7" }],
    [2, 12, { text: "R", color: "red" }],
    // 1st string

    [1, 2, { text: "5", color: "pink" }],
    [1, 3, { text: "6" }],
    [1, 5, { text: "♭7" }],
    [1, 7, { text: "R", color: "red" }],
    [1, 8, { text: "♭2" }],
    [1, 10, { text: "3", color: "pink" }],
    [1, 12, { text: "4" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: -1,
  "A#": 0,
  B: 1,
  C: 2,
  "C#": 3,
  D: 4,
  "D#": 5,
  E: 6,
  F: 7,
  "F#": 8,
  G: 9,
  "G#": 10,
};

function generatePhrygianScaleMap(key) {
  const offset = keyOffsets[key];
  if (offset === undefined) {
    throw new Error("Invalid key");
  }

  const newScaleMap = JSON.parse(JSON.stringify(baseScaleMap));
  newScaleMap.fingers = newScaleMap.fingers.map(([string, fret, note]) => [
    string,
    ((fret + offset + 12 - 2) % 12) + 1,
    note,
  ]);

  return newScaleMap;
}

export { generatePhrygianScaleMap };
