const baseScaleMap = {
  fingers: [
    // These values represent an E minor scale.
    // 6th string
    [6, 0, { text: "E" }],
    [6, 2, { text: "2" }],
    [6, 3, { text: "♭3", color: "pink" }],
    [6, 5, { text: "4" }],
    [6, 7, { text: "5", color: "pink" }],
    [6, 8, { text: "♭6" }],
    [6, 10, { text: "7" }],
    [6, 12, { text: "R", color: "red" }],
    // 5th string
    [5, 0, { text: "A" }],
    [5, 2, { text: "5", color: "pink" }],
    [5, 3, { text: "♭6" }],
    [5, 5, { text: "7" }],
    [5, 7, { text: "R", color: "red" }],
    [5, 9, { text: "2" }],
    [5, 10, { text: "♭3", color: "pink" }],
    [5, 12, { text: "4" }],
    // 4th string
    [4, 0, { text: "D" }],
    [4, 2, { text: "R", color: "red" }],
    [4, 4, { text: "♭3", color: "pink" }],
    [4, 5, { text: "4" }],
    [4, 7, { text: "5", color: "pink" }],
    [4, 9, { text: "♭6" }],
    [4, 10, { text: "7" }],
    [4, 12, { text: "R", color: "red" }],
    // 3rd string
    [3, 0, { text: "G" }],
    [3, 2, { text: "4" }],
    [3, 4, { text: "5", color: "pink" }],
    [3, 5, { text: "♭6" }],
    [3, 7, { text: "7" }],
    [3, 9, { text: "R", color: "red" }],
    [3, 11, { text: "2" }],
    [3, 12, { text: "♭3", color: "pink" }],
    // 2nd string
    [2, 0, { text: "B" }],
    [2, 1, { text: "♭6" }],
    [2, 3, { text: "7" }],
    [2, 5, { text: "R", color: "red" }],
    [2, 7, { text: "2" }],
    [2, 8, { text: "♭3", color: "pink" }],
    [2, 10, { text: "4" }],
    [2, 12, { text: "5", color: "pink" }],
    // 1st string
    [1, 0, { text: "e" }],
    [1, 2, { text: "2" }],
    [1, 3, { text: "♭3", color: "pink" }],
    [1, 5, { text: "4" }],
    [1, 7, { text: "5", color: "pink" }],
    [1, 8, { text: "♭6" }],
    [1, 10, { text: "7" }],
    [1, 12, { text: "R", color: "red" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: -6,
  "A#": -5,
  B: -4,
  C: -3,
  "C#": -2,
  D: -1,
  "D#": 0,
  E: 1,
  F: 2,
  "F#": 3,
  G: 4,
  "G#": 5,
};

function generateMinorScaleMap(key) {
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

export { generateMinorScaleMap };
