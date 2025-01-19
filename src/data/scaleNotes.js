// Data file containing the notes of the major scale in root-interval notation on a fretboard.

const scaleNotes = {
  major: {
    fingers: [
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
      [3, 2, { text: "3" }],
      [3, 4, { text: "4" }],
      [3, 5, { text: "5" }],
      [3, 7, { text: "6" }],
      [3, 9, { text: "7" }],
      [3, 10, { text: "R", color: "#F00" }],
      [3, 12, { text: "2" }],
      // 2nd string
      [2, 3, { text: "6" }],
      [2, 5, { text: "7" }],
      [2, 7, { text: "R", color: "#F00" }],
      [2, 8, { text: "2" }],
      [2, 10, { text: "3" }],
      [2, 12, { text: "4" }],
      // 1st string
      [1, 2, { text: "5" }],
      [1, 3, { text: "6" }],
      [1, 5, { text: "7" }],
      [1, 7, { text: "R", color: "#F00" }],
      [1, 8, { text: "2" }],
      [1, 10, { text: "3" }],
      [1, 12, { text: "4" }],
    ],
    barres: [],
  },
  minor: {
    fingers: [
      // Add minor scale notes in the same format
    ],
    barres: [],
  },
  // Add other scales as needed
};

export default scaleNotes;
