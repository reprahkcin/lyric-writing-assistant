<template>
  <div class="row">
    <div class="col">
      <div ref="scaleMap"></div>
    </div>
  </div>
</template>
<script>
import { generateMajorScaleMap } from "@/data/completeScales/major";
import { generateMinorScaleMap } from "@/data/completeScales/minor";
import { generateDorianScaleMap } from "@/data/completeScales/dorian";
import { generatePhrygianScaleMap } from "@/data/completeScales/phrygian";
import { generateLydianScaleMap } from "@/data/completeScales/lydian";
import { generateMixolydianScaleMap } from "@/data/completeScales/mixolydian";
import { generateLocrianScaleMap } from "@/data/completeScales/locrian";
import { generateMajorPentatonicScaleMap } from "@/data/completeScales/majorPentatonic";
import { ChromaticScaleMap } from "@/data/completeScales/chromatic";

import { SVGuitarChord } from "svguitar";
export default {
  name: "ScaleComplete",
  props: {
    song: Object,
  },
  data() {
    return {};
  },
  methods: {
    selectProperScale() {
      if (this.song.scale === "Major") {
        return this.selectMajorScale();
      } else if (this.song.scale === "Minor") {
        return this.selectMinorScale();
      } else if (this.song.scale === "Dorian") {
        return this.selectDorianScale();
      } else if (this.song.scale === "Phrygian") {
        return this.selectPhrygianScale();
      } else if (this.song.scale === "Lydian") {
        return this.selectLydianScale();
      } else if (this.song.scale === "Mixolydian") {
        return this.selectMixolydianScale();
      } else if (this.song.scale === "Locrian") {
        return this.selectLocrianScale();
      } else if (this.song.scale === "Major Pentatonic") {
        return this.selectMajorPentatonicScale();
      } else {
        return ChromaticScaleMap;
      }
    },
    selectMajorScale() {
      switch (this.song.key) {
        case "A":
          return generateMajorScaleMap("A");
        case "A#":
          return generateMajorScaleMap("A#");
        case "B":
          return generateMajorScaleMap("B");
        case "C":
          return generateMajorScaleMap("C");
        case "C#":
          return generateMajorScaleMap("C#");
        case "D":
          return generateMajorScaleMap("D");
        case "D#":
          return generateMajorScaleMap("D#");
        case "E":
          return generateMajorScaleMap("E");
        case "F":
          return generateMajorScaleMap("F");
        case "F#":
          return generateMajorScaleMap("F#");
        case "G":
          return generateMajorScaleMap("G");
        case "G#":
          return generateMajorScaleMap("G#");
        default:
          return generateMajorScaleMap("C");
      }
    },
    selectMinorScale() {
      switch (this.song.key) {
        case "A":
          return generateMinorScaleMap("A");
        case "A#":
          return generateMinorScaleMap("A#");
        case "B":
          return generateMinorScaleMap("B");
        case "C":
          return generateMinorScaleMap("C");
        case "C#":
          return generateMinorScaleMap("C#");
        case "D":
          return generateMinorScaleMap("D");
        case "D#":
          return generateMinorScaleMap("D#");
        case "E":
          return generateMinorScaleMap("E");
        case "F":
          return generateMinorScaleMap("F");
        case "F#":
          return generateMinorScaleMap("F#");
        case "G":
          return generateMinorScaleMap("G");
        case "G#":
          return generateMinorScaleMap("G#");
        default:
          return generateMajorScaleMap("C");
      }
    },
    selectDorianScale() {
      switch (this.song.key) {
        case "A":
          return generateDorianScaleMap("A");
        case "A#":
          return generateDorianScaleMap("A#");
        case "B":
          return generateDorianScaleMap("B");
        case "C":
          return generateDorianScaleMap("C");
        case "C#":
          return generateDorianScaleMap("C#");
        case "D":
          return generateDorianScaleMap("D");
        case "D#":
          return generateDorianScaleMap("D#");
        case "E":
          return generateDorianScaleMap("E");
        case "F":
          return generateDorianScaleMap("F");
        case "F#":
          return generateDorianScaleMap("F#");
        case "G":
          return generateDorianScaleMap("G");
        case "G#":
          return generateDorianScaleMap("G#");
        default:
          return generateDorianScaleMap("C");
      }
    },
    selectPhrygianScale() {
      switch (this.song.key) {
        case "A":
          return generatePhrygianScaleMap("A");
        case "A#":
          return generatePhrygianScaleMap("A#");
        case "B":
          return generatePhrygianScaleMap("B");
        case "C":
          return generatePhrygianScaleMap("C");
        case "C#":
          return generatePhrygianScaleMap("C#");
        case "D":
          return generatePhrygianScaleMap("D");
        case "D#":
          return generatePhrygianScaleMap("D#");
        case "E":
          return generatePhrygianScaleMap("E");
        case "F":
          return generatePhrygianScaleMap("F");
        case "F#":
          return generatePhrygianScaleMap("F#");
        case "G":
          return generatePhrygianScaleMap("G");
        case "G#":
          return generatePhrygianScaleMap("G#");
        default:
          return generatePhrygianScaleMap("C");
      }
    },
    selectLydianScale() {
      switch (this.song.key) {
        case "A":
          return generateLydianScaleMap("A");
        case "A#":
          return generateLydianScaleMap("A#");
        case "B":
          return generateLydianScaleMap("B");
        case "C":
          return generateLydianScaleMap("C");
        case "C#":
          return generateLydianScaleMap("C#");
        case "D":
          return generateLydianScaleMap("D");
        case "D#":
          return generateLydianScaleMap("D#");
        case "E":
          return generateLydianScaleMap("E");
        case "F":
          return generateLydianScaleMap("F");
        case "F#":
          return generateLydianScaleMap("F#");
        case "G":
          return generateLydianScaleMap("G");
        case "G#":
          return generateLydianScaleMap("G#");
        default:
          return generateLydianScaleMap("C");
      }
    },
    selectMixolydianScale() {
      switch (this.song.key) {
        case "A":
          return generateMixolydianScaleMap("A");
        case "A#":
          return generateMixolydianScaleMap("A#");
        case "B":
          return generateMixolydianScaleMap("B");
        case "C":
          return generateMixolydianScaleMap("C");
        case "C#":
          return generateMixolydianScaleMap("C#");
        case "D":
          return generateMixolydianScaleMap("D");
        case "D#":
          return generateMixolydianScaleMap("D#");
        case "E":
          return generateMixolydianScaleMap("E");
        case "F":
          return generateMixolydianScaleMap("F");
        case "F#":
          return generateMixolydianScaleMap("F#");
        case "G":
          return generateMixolydianScaleMap("G");
        case "G#":
          return generateMixolydianScaleMap("G#");
        default:
          return generateMixolydianScaleMap("C");
      }
    },

    selectLocrianScale() {
      switch (this.song.key) {
        case "A":
          return generateLocrianScaleMap("A");
        case "A#":
          return generateLocrianScaleMap("A#");
        case "B":
          return generateLocrianScaleMap("B");
        case "C":
          return generateLocrianScaleMap("C");
        case "C#":
          return generateLocrianScaleMap("C#");
        case "D":
          return generateLocrianScaleMap("D");
        case "D#":
          return generateLocrianScaleMap("D#");
        case "E":
          return generateLocrianScaleMap("E");
        case "F":
          return generateLocrianScaleMap("F");
        case "F#":
          return generateLocrianScaleMap("F#");
        case "G":
          return generateLocrianScaleMap("G");
        case "G#":
          return generateLocrianScaleMap("G#");
        default:
          return generateLocrianScaleMap("C");
      }
    },
    selectMajorPentatonicScale() {
      switch (this.song.key) {
        case "A":
          return generateMajorPentatonicScaleMap("A");
        case "A#":
          return generateMajorPentatonicScaleMap("A#");
        case "B":
          return generateMajorPentatonicScaleMap("B");
        case "C":
          return generateMajorPentatonicScaleMap("C");
        case "C#":
          return generateMajorPentatonicScaleMap("C#");
        case "D":
          return generateMajorPentatonicScaleMap("D");
        case "D#":
          return generateMajorPentatonicScaleMap("D#");
        case "E":
          return generateMajorPentatonicScaleMap("E");
        case "F":
          return generateMajorPentatonicScaleMap("F");
        case "F#":
          return generateMajorPentatonicScaleMap("F#");
        case "G":
          return generateMajorPentatonicScaleMap("G");
        case "G#":
          return generateMajorPentatonicScaleMap("G#");
        default:
          return generateMajorPentatonicScaleMap("C");
      }
    },
    renderScale() {
      const scale = this.selectProperScale();
      try {
        new SVGuitarChord(this.$refs.scaleMap)
          .configure({
            frets: 12,
            orientation: "horizontal",
            fretMarkers: [2, 4, 6, 8, { fret: 11, double: true }],
            fingerColor: "#FFF",
            fingerTextColor: "#000",
            fingerTextSize: 18,
            fingerStrokeColor: "#000",
            fingerStrokeWidth: "2px",
            color: "#555",
          })
          .chord(scale)
          .draw();
      } catch (error) {
        console.error("Error drawing chord chart:", error);
      }
    },
    clearScale() {
      this.$refs.scaleMap.innerHTML = "";
    },
  },

  watch: {
    song: {
      handler() {
        this.clearScale();
        this.renderScale();
      },
      deep: true,
    },
  },
  mounted() {
    this.renderScale();
  },
};
</script>
