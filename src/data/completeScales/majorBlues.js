const baseScaleMap = {
  fingers: [
    // These values represent a G Blues Major scale.
    // 6th string
    [6, 0, { text: "E" }],
    [6, 3, { text: "R", color: "red", textColor: "white" }],
    [6, 5, { text: "2" }],
    [6, 6, { text: "♭3", color: "#ADD8E6" }],
    [6, 7, { text: "3" }],
    [6, 10, { text: "5" }],
    [6, 12, { text: "6" }],
    // 5th string
    [5, 0, { text: "A" }],
    [5, 1, { text: "♭3", color: "#ADD8E6" }], // light blue
    [5, 2, { text: "3" }],
    [5, 5, { text: "5" }],
    [5, 7, { text: "6" }],
    [5, 10, { text: "R", color: "red", textColor: "white" }],
    [5, 12, { text: "2" }],
    // 4th string
    [4, 0, { text: "D" }],
    [4, 2, { text: "6" }],
    [4, 5, { text: "R", color: "red", textColor: "white" }],
    [4, 7, { text: "2" }],
    [4, 8, { text: "♭3", color: "#ADD8E6" }],
    [4, 9, { text: "3" }],
    [4, 12, { text: "5" }],
    // 3rd string
    [3, 0, { text: "G" }],
    [3, 2, { text: "2" }],
    [3, 3, { text: "♭3", color: "#ADD8E6" }],
    [3, 4, { text: "3" }],
    [3, 7, { text: "5" }],
    [3, 9, { text: "6" }],
    [3, 12, { text: "R", color: "red", textColor: "white" }],
    // 2nd string
    [2, 0, { text: "B" }],
    [2, 3, { text: "5" }],
    [2, 5, { text: "6" }],
    [2, 8, { text: "R", color: "red", textColor: "white" }],
    [2, 10, { text: "2" }],
    [2, 11, { text: "♭3", color: "#ADD8E6" }],
    [2, 12, { text: "3" }],
    // 1st string
    [1, 0, { text: "e" }],
    [1, 3, { text: "R", color: "red", textColor: "white" }],
    [1, 5, { text: "2" }],
    [1, 6, { text: "♭3", color: "#ADD8E6" }],
    [1, 7, { text: "3" }],
    [1, 10, { text: "5" }],
    [1, 12, { text: "6" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: -9,
  "A#": -8,
  B: -7,
  C: -6,
  "C#": -5,
  D: -4,
  "D#": -3,
  E: -2,
  F: -1,
  "F#": 0,
  G: 1,
  "G#": 2,
};

function generateMajorBluesScaleMap(key) {
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

export { generateMajorBluesScaleMap };
