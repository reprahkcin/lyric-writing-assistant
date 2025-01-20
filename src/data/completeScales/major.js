const baseScaleMap = {
  fingers: [
    // These values represent a G Major scale.
    // 6th string
    [6, 2, { text: "7" }],
    [6, 3, { text: "R", color: "#F00" }],
    [6, 5, { text: "2" }],
    [6, 7, { text: "3" }],
    [6, 8, { text: "4" }],
    [6, 10, { text: "5" }],
    [6, 12, { text: "6" }],
    // 5th string
    [5, 2, { text: "3" }],
    [5, 3, { text: "4" }],
    [5, 5, { text: "5" }],
    [5, 7, { text: "6" }],
    [5, 9, { text: "7" }],
    [5, 10, { text: "R", color: "#F00" }],
    [5, 12, { text: "2" }],
    // 4th string
    [4, 2, { text: "6" }],
    [4, 4, { text: "7" }],
    [4, 5, { text: "R", color: "#F00" }],
    [4, 7, { text: "2" }],
    [4, 9, { text: "3" }],
    [4, 10, { text: "4" }],
    [4, 12, { text: "5" }],
    // 3rd string
    [3, 2, { text: "2" }],
    [3, 4, { text: "3" }],
    [3, 5, { text: "4" }],
    [3, 7, { text: "5" }],
    [3, 9, { text: "6" }],
    [3, 11, { text: "7" }],
    [3, 12, { text: "R", color: "#F00" }],
    // 2nd string
    [2, 1, { text: "4" }],
    [2, 3, { text: "5" }],
    [2, 5, { text: "6" }],
    [2, 7, { text: "7" }],
    [2, 8, { text: "R", color: "#F00" }],
    [2, 10, { text: "2" }],
    [2, 12, { text: "3" }],
    // 1st string
    [1, 2, { text: "7" }],
    [1, 3, { text: "R", color: "#F00" }],
    [1, 5, { text: "2" }],
    [1, 7, { text: "3" }],
    [1, 8, { text: "4" }],
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

function generateMajorScaleMap(key) {
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

export { generateMajorScaleMap };
