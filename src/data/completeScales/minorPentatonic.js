const baseScaleMap = {
  fingers: [
    // These values represent a G Pentatonic Minor scale.
    // 6th string
    [6, 0, { text: "E" }],
    [6, 3, { text: "G", color: "red" }],
    [6, 5, { text: "A" }],
    [6, 7, { text: "B", color: "pink" }],
    [6, 10, { text: "D", color: "pink" }],
    [6, 12, { text: "E" }],
    // 5th string
    [5, 0, { text: "A" }],
    [5, 3, { text: "C" }],
    [5, 5, { text: "D", color: "pink" }],
    [5, 7, { text: "E" }],
    [5, 10, { text: "G", color: "red" }],
    [5, 12, { text: "A" }],
    // 4th string
    [4, 0, { text: "D" }],
    [4, 5, { text: "G", color: "red" }],
    [4, 7, { text: "A" }],
    [4, 9, { text: "B", color: "pink" }],
    [4, 12, { text: "D", color: "pink" }],
    // 3rd string
    [3, 0, { text: "G" }],
    [3, 2, { text: "A" }],
    [3, 4, { text: "B", color: "pink" }],
    [3, 7, { text: "D", color: "pink" }],
    [3, 9, { text: "E" }],
    [3, 12, { text: "G", color: "red" }],
    // 2nd string
    [2, 0, { text: "B" }],
    [2, 3, { text: "D", color: "pink" }],
    [2, 5, { text: "E" }],
    [2, 8, { text: "G", color: "red" }],
    [2, 10, { text: "A" }],
    [2, 12, { text: "B", color: "pink" }],
    // 1st string
    [1, 0, { text: "e" }],
    [1, 3, { text: "G", color: "red" }],
    [1, 5, { text: "A" }],
    [1, 7, { text: "B" }],
    [1, 10, { text: "D", color: "pink" }],
    [1, 12, { text: "E" }],
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

function generateMinorPentatonicScaleMap(key) {
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

export { generateMinorPentatonicScaleMap };
