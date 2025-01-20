const scales = [
  {
    name: "Major",
    emotionalQuality: "Happy",
    intervals: ["W", "W", "H", "W", "W", "W", "H"],
    notes: (key) => generateScale(key, ["W", "W", "H", "W", "W", "W", "H"]),
    chords: ["Maj", "min", "min", "Maj", "Maj", "min", "dim"],
    romanNumerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  },
  {
    name: "Minor",
    emotionalQuality: "Sad",
    intervals: ["W", "H", "W", "W", "H", "W", "W"],
    notes: (key) => generateScale(key, ["W", "H", "W", "W", "H", "W", "W"]),
    chords: ["min", "dim", "Maj", "min", "min", "Maj", "Maj"],
    romanNumerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
  },
  {
    name: "Dorian",
    emotionalQuality: "Jazz-like",
    intervals: ["W", "H", "W", "W", "W", "H", "W"],
    notes: (key) => generateScale(key, ["W", "H", "W", "W", "W", "H", "W"]),
    chords: ["min", "min", "Maj", "Maj", "min", "dim", "Maj"],
    romanNumerals: ["i", "ii", "III", "IV", "v", "vi°", "VII"],
  },
  {
    name: "Phrygian",
    emotionalQuality: "Exotic",
    intervals: ["H", "W", "W", "W", "H", "W", "W"],
    notes: (key) => generateScale(key, ["H", "W", "W", "W", "H", "W", "W"]),
    chords: ["min", "Maj", "Maj", "min", "dim", "Maj", "min"],
    romanNumerals: ["i", "II", "III", "iv", "v°", "VI", "vii"],
  },
  {
    name: "Lydian",
    emotionalQuality: "Dreamy",
    intervals: ["W", "W", "W", "H", "W", "W", "H"],
    notes: (key) => generateScale(key, ["W", "W", "W", "H", "W", "W", "H"]),
    chords: ["Maj", "Maj", "min", "dim", "Maj", "min", "min"],
    romanNumerals: ["I", "II", "iii", "iv°", "V", "vi", "vii"],
  },
  {
    name: "Mixolydian",
    emotionalQuality: "Bluesy",
    intervals: ["W", "W", "H", "W", "W", "H", "W"],
    notes: (key) => generateScale(key, ["W", "W", "H", "W", "W", "H", "W"]),
    chords: ["Maj", "min", "dim", "Maj", "min", "min", "Maj"],
    romanNumerals: ["I", "ii", "iii°", "IV", "v", "vi", "VII"],
  },
  {
    name: "Locrian",
    emotionalQuality: "Dissonant",
    intervals: ["H", "W", "W", "H", "W", "W", "W"],
    notes: (key) => generateScale(key, ["H", "W", "W", "H", "W", "W", "W"]),
    chords: ["dim", "min", "min", "Maj", "min", "Maj", "Maj"],
    romanNumerals: ["i°", "ii", "iii", "IV", "v", "VI", "VII"],
  },
  {
    name: "Major Pentatonic",
    emotionalQuality: "Versatile",
    intervals: ["W", "W", "WH", "W", "WH"],
    notes: (key) => generateScale(key, ["W", "W", "WH", "W", "WH"]),
    chords: ["Maj", "min", "min", "Maj", "min"],
    romanNumerals: ["I", "ii", "iii", "V", "vi"],
  },
  {
    name: "Minor Pentatonic",
    emotionalQuality: "Bluesy",
    intervals: ["WH", "W", "W", "WH", "W"],
    notes: (key) => generateScale(key, ["WH", "W", "W", "WH", "W"]),
    chords: ["min", "Maj", "min", "min", "Maj"],
    romanNumerals: ["i", "III", "iv", "v", "VII"],
  },
  {
    name: "Major Blues",
    emotionalQuality: "Soulful",
    intervals: ["W", "W", "H", "W", "W", "H", "W"],
    notes: (key) => generateScale(key, ["W", "W", "H", "W", "W", "H", "W"]),
    chords: ["Maj", "min", "min", "Maj", "Maj", "min", "dim"],
    romanNumerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  },
  {
    name: "Minor Blues",
    emotionalQuality: "Soulful",
    intervals: ["W", "H", "W", "W", "H", "W", "W"],
    notes: (key) => generateScale(key, ["W", "H", "W", "W", "H", "W", "W"]),
    chords: ["min", "dim", "Maj", "min", "min", "Maj", "Maj"],
    romanNumerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
  },
  {
    name: "Harmonic Minor",
    emotionalQuality: "Dramatic",
    intervals: ["W", "H", "W", "W", "H", "WH", "H"],
    notes: (key) => generateScale(key, ["W", "H", "W", "W", "H", "WH", "H"]),
    chords: ["min", "dim", "Aug", "min", "Maj", "Maj", "dim"],
    romanNumerals: ["i", "ii°", "III+", "iv", "V", "VI", "vii°"],
  },
  {
    name: "Melodic Minor",
    emotionalQuality: "Sophisticated",
    intervals: ["W", "H", "W", "W", "W", "W", "H"],
    notes: (key) => generateScale(key, ["W", "H", "W", "W", "W", "W", "H"]),
    chords: ["min", "min", "Aug", "Maj", "Maj", "dim", "dim"],
    romanNumerals: ["i", "ii", "III+", "IV", "V", "vi°", "vii°"],
  },
];

function generateScale(key, intervals) {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  let scale = [];
  let startIndex = notes.indexOf(key);

  if (startIndex === -1) throw new Error("Invalid key");

  scale.push(notes[startIndex]);

  intervals.forEach((interval) => {
    let step;
    if (interval === "W") {
      step = 2;
    } else if (interval === "H") {
      step = 1;
    } else {
      step = 3;
    }
    startIndex += step;
    scale.push(notes[startIndex % 12]);
  });

  return scale;
}

export default scales;
