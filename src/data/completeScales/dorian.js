const baseScaleMap = {
  fingers: [
    // These values represent a A Dorian scale.
    // 6th string
    [6, 0, { text: "E" }],
    [6, 2, { text: "6" }],
    [6, 3, { text: "♭7" }],
    [6, 5, { text: "R", color: "red", textColor: "white" }],
    [6, 7, { text: "2" }],
    [6, 8, { text: "♭3", color: "pink" }],
    [6, 10, { text: "4" }],
    [6, 12, { text: "5", color: "pink" }],
    // 5th string
    [5, 0, { text: "A" }],
    [5, 2, { text: "2" }],
    [5, 3, { text: "♭3", color: "pink" }],
    [5, 5, { text: "4" }],
    [5, 7, { text: "5", color: "pink" }],
    [5, 9, { text: "6" }],
    [5, 10, { text: "♭7" }],
    [5, 12, { text: "R", color: "red", textColor: "white" }],

    // 4th string
    [4, 0, { text: "D" }],
    [4, 2, { text: "5", color: "pink" }],
    [4, 4, { text: "6" }],
    [4, 5, { text: "♭7" }],
    [4, 7, { text: "R", color: "red", textColor: "white" }],
    [4, 9, { text: "2" }],
    [4, 10, { text: "♭3", color: "pink" }],
    [4, 12, { text: "4" }],
    // 3rd string
    [3, 0, { text: "G" }],
    [3, 2, { text: "R", color: "red", textColor: "white" }],
    [3, 4, { text: "2" }],
    [3, 5, { text: "♭3", color: "pink" }],
    [3, 7, { text: "4" }],
    [3, 9, { text: "5", color: "pink" }],
    [3, 11, { text: "6" }],
    [3, 12, { text: "♭7" }],
    // 2nd string
    [2, 0, { text: "B" }],
    [2, 1, { text: "♭3", color: "pink" }],
    [2, 3, { text: "4" }],
    [2, 5, { text: "5", color: "pink" }],
    [2, 7, { text: "6" }],
    [2, 8, { text: "♭7" }],
    [2, 10, { text: "R", color: "red", textColor: "white" }],
    [2, 12, { text: "2" }],
    // 1st string
    [1, 0, { text: "e" }],
    [1, 2, { text: "6" }],
    [1, 3, { text: "♭7" }],
    [1, 5, { text: "R", color: "red", textColor: "white" }],
    [1, 7, { text: "2" }],
    [1, 8, { text: "♭3", color: "pink" }],
    [1, 10, { text: "4" }],
    [1, 12, { text: "5", color: "pink" }],
  ],
  barres: [],
};

const keyOffsets = {
  A: -11,
  "A#": -10,
  B: -9,
  C: -8,
  "C#": -7,
  D: -6,
  "D#": -5,
  E: -4,
  F: -3,
  "F#": -2,
  G: -1,
  "G#": 0,
};

function generateDorianScaleMap(key) {
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

export { generateDorianScaleMap };
