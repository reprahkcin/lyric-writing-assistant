const baseScaleMap = {
  fingers: [
    // These values represent a C Lydian scale.
    // 6th string
    [6, 0, { text: "E" }],
    [6, 2, { text: "#4" }],
    [6, 3, { text: "5", color: "pink" }],
    [6, 5, { text: "6" }],
    [6, 7, { text: "7" }],
    [6, 8, { text: "R", color: "red", textColor: "white" }],
    [6, 10, { text: "2" }],
    [6, 12, { text: "3", color: "pink" }],
    // 5th string
    [5, 0, { text: "A" }],
    [5, 2, { text: "7" }],
    [5, 3, { text: "R", color: "red", textColor: "white" }],
    [5, 5, { text: "2" }],
    [5, 7, { text: "3", color: "pink" }],
    [5, 9, { text: "#4" }],
    [5, 10, { text: "5", color: "pink" }],
    [5, 12, { text: "6" }],

    // 4th string
    [4, 0, { text: "D" }],
    [4, 2, { text: "3", color: "pink" }],
    [4, 4, { text: "#4" }],
    [4, 5, { text: "5", color: "pink" }],
    [4, 7, { text: "6" }],
    [4, 9, { text: "7" }],
    [4, 10, { text: "R", color: "red", textColor: "white" }],
    [4, 12, { text: "2" }],
    // 3rd string
    [3, 0, { text: "G" }],
    [3, 2, { text: "6" }],
    [3, 4, { text: "7" }],
    [3, 5, { text: "R", color: "red", textColor: "white" }],
    [3, 7, { text: "2" }],
    [3, 9, { text: "3", color: "pink" }],
    [3, 11, { text: "#4" }],
    [3, 12, { text: "5", color: "pink" }],
    // 2nd string
    [2, 0, { text: "B" }],
    [2, 1, { text: "R", color: "red", textColor: "white" }],
    [2, 3, { text: "2" }],
    [2, 5, { text: "3", color: "pink" }],
    [2, 7, { text: "#4" }],
    [2, 8, { text: "5", color: "pink" }],
    [2, 10, { text: "6" }],
    [2, 12, { text: "7" }],
    // 1st string
    [1, 0, { text: "e" }],
    [1, 2, { text: "#4" }],
    [1, 3, { text: "5", color: "pink" }],
    [1, 5, { text: "6" }],
    [1, 7, { text: "7" }],
    [1, 8, { text: "R", color: "red", textColor: "white" }],
    [1, 10, { text: "2" }],
    [1, 12, { text: "3", color: "pink" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: -2,
  "A#": -1,
  B: 0,
  C: 1,
  "C#": 2,
  D: 3,
  "D#": 4,
  E: 5,
  F: 6,
  "F#": 7,
  G: 8,
  "G#": 9,
};

function generateLydianScaleMap(key) {
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

export { generateLydianScaleMap };
