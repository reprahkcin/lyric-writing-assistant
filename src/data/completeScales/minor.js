const baseScaleMap = {
  fingers: [
    // These values represent an E minor scale.
    // 6th string
    [6, 2, { text: "2" }],
    [6, 3, { text: "♭3" }],
    [6, 5, { text: "4" }],
    [6, 7, { text: "5" }],
    [6, 8, { text: "♭6" }],
    [6, 10, { text: "7" }],
    [6, 12, { text: "R", color: "#F00" }],
    // 5th string
    [5, 2, { text: "5" }],
    [5, 3, { text: "♭6" }],
    [5, 5, { text: "7" }],
    [5, 7, { text: "R", color: "#F00" }],
    [5, 9, { text: "2" }],
    [5, 10, { text: "♭3" }],
    [5, 12, { text: "4" }],
    // 4th string
    [4, 2, { text: "R", color: "#F00" }],
    [4, 4, { text: "♭3" }],
    [4, 5, { text: "4" }],
    [4, 7, { text: "5" }],
    [4, 9, { text: "♭6" }],
    [4, 10, { text: "7" }],
    [4, 12, { text: "R", color: "#F00" }],
    // 3rd string
    [3, 2, { text: "4" }],
    [3, 4, { text: "5" }],
    [3, 5, { text: "♭6" }],
    [3, 7, { text: "7" }],
    [3, 9, { text: "R", color: "#F00" }],
    [3, 11, { text: "2" }],
    [3, 12, { text: "♭3" }],
    // 2nd string
    [2, 1, { text: "♭6" }],
    [2, 3, { text: "7" }],
    [2, 5, { text: "R", color: "#F00" }],
    [2, 7, { text: "2" }],
    [2, 8, { text: "♭3" }],
    [2, 10, { text: "4" }],
    [2, 12, { text: "5" }],
    // 1st string
    [1, 2, { text: "2" }],
    [1, 3, { text: "♭3" }],
    [1, 5, { text: "4" }],
    [1, 7, { text: "5" }],
    [1, 8, { text: "♭6" }],
    [1, 10, { text: "7" }],
    [1, 12, { text: "R", color: "#F00" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: -5,
  "A#": -4,
  B: -3,
  C: -2,
  "C#": -1,
  D: 0,
  "D#": 1,
  E: 2,
  F: 3,
  "F#": 4,
  G: 5,
  "G#": 6,
};

function generateMinorScaleMap(key) {
  const offset = keyOffsets[key];
  if (offset === undefined) {
    throw new Error("Invalid key");
  }

  const newScaleMap = JSON.parse(JSON.stringify(baseScaleMap));
  newScaleMap.fingers = newScaleMap.fingers.map(([string, fret, note]) => [
    string,
    ((fret + offset + 12 - 3) % 12) + 1,
    note,
  ]);

  return newScaleMap;
}

export { generateMinorScaleMap };
