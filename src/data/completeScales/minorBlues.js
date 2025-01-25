const baseScaleMap = {
  fingers: [
    // These values represent a E Minor Blues scale.
    // 6th string
    [6, 0, { text: "E" }],
    [6, 3, { text: "♭3" }],
    [6, 5, { text: "4" }],
    [6, 6, { text: "♭5", color: "#ADD8E6" }],
    [6, 7, { text: "5" }],
    [6, 10, { text: "♭7" }],
    [6, 12, { text: "R", color: "red", textColor: "white" }],
    // 5th string
    [5, 0, { text: "A" }],
    [5, 1, { text: "♭5", color: "#ADD8E6" }],
    [5, 2, { text: "5" }],
    [5, 5, { text: "♭7" }],
    [5, 7, { text: "R", color: "red", textColor: "white" }],
    [5, 10, { text: "♭3" }],
    [5, 12, { text: "4" }],
    // 4th string
    [4, 0, { text: "D" }],
    [4, 2, { text: "R", color: "red", textColor: "white" }],
    [4, 5, { text: "♭3" }],
    [4, 7, { text: "4" }],
    [4, 8, { text: "♭5", color: "#ADD8E6" }],
    [4, 9, { text: "5" }],
    [4, 12, { text: "♭7" }],
    // 3rd string
    [3, 0, { text: "G" }],
    [3, 2, { text: "4" }],
    [3, 3, { text: "♭5", color: "#ADD8E6" }],
    [3, 4, { text: "5" }],
    [3, 7, { text: "♭7" }],
    [3, 9, { text: "R", color: "red", textColor: "white" }],
    [3, 12, { text: "♭3" }],
    // 2nd string
    [2, 0, { text: "B" }],
    [2, 3, { text: "♭7" }],
    [2, 5, { text: "R", color: "red", textColor: "white" }],
    [2, 8, { text: "♭3" }],
    [2, 10, { text: "4" }],
    [2, 11, { text: "♭5", color: "#ADD8E6" }],
    [2, 12, { text: "5" }],
    // 1st string
    [1, 0, { text: "e" }],
    [1, 3, { text: "♭3" }],
    [1, 5, { text: "4" }],
    [1, 6, { text: "♭5", color: "#ADD8E6" }],
    [1, 7, { text: "5" }],
    [1, 10, { text: "♭7" }],
    [1, 12, { text: "R", color: "red", textColor: "white" }],
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

function generateMinorBluesScaleMap(key) {
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

export { generateMinorBluesScaleMap };
