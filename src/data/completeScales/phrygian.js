const baseScaleMap = {
  fingers: [
    // These values represent a G Phrygian scale.
    // 6th string

    [6, 2, { text: "5" }],
    [6, 3, { text: "6" }],
    [6, 5, { text: "♭7" }],
    [6, 7, { text: "R", color: "#F00" }],
    [6, 8, { text: "♭2" }],
    [6, 10, { text: "3" }],
    [6, 12, { text: "4" }],
    // 5th string

    [5, 2, { text: "R", color: "#F00" }],
    [5, 3, { text: "♭2" }],
    [5, 5, { text: "3" }],
    [5, 7, { text: "4" }],
    [5, 9, { text: "5" }],
    [5, 10, { text: "6" }],
    [5, 12, { text: "♭7" }],

    // 4th string

    [4, 2, { text: "4" }],
    [4, 4, { text: "5" }],
    [4, 5, { text: "6" }],
    [4, 7, { text: "♭7" }],
    [4, 9, { text: "R", color: "#F00" }],
    [4, 10, { text: "♭2" }],
    [4, 12, { text: "3" }],
    // 3rd string

    [3, 2, { text: "♭7" }],
    [3, 4, { text: "R", color: "#F00" }],
    [3, 5, { text: "♭2" }],
    [3, 7, { text: "3" }],
    [3, 9, { text: "4" }],
    [3, 11, { text: "5" }],
    [3, 12, { text: "6" }],
    // 2nd string

    [2, 1, { text: "♭2" }],
    [2, 3, { text: "3" }],
    [2, 5, { text: "4" }],
    [2, 7, { text: "5" }],
    [2, 8, { text: "6" }],
    [2, 10, { text: "♭7" }],
    [2, 12, { text: "R", color: "#F00" }],
    // 1st string

    [1, 2, { text: "5" }],
    [1, 3, { text: "6" }],
    [1, 5, { text: "♭7" }],
    [1, 7, { text: "R", color: "#F00" }],
    [1, 8, { text: "♭2" }],
    [1, 10, { text: "3" }],
    [1, 12, { text: "4" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: 9,
  "A#": 10,
  B: 11,
  C: 0,
  "C#": 1,
  D: 2,
  "D#": 3,
  E: 4,
  F: 5,
  "F#": 6,
  G: 7,
  "G#": 8,
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
