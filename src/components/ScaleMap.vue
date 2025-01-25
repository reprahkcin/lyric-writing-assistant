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
import { generateMinorPentatonicScaleMap } from "@/data/completeScales/minorPentatonic";
import { generateMinorBluesScaleMap } from "@/data/completeScales/minorBlues";
import { generateMajorBluesScaleMap } from "@/data/completeScales/majorBlues";
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
    generateScaleMap(generator, key) {
      const validKeys = [
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
      ];
      return generator(validKeys.includes(key) ? key : "C");
    },
    selectProperScale() {
      const scaleGenerators = {
        Major: generateMajorScaleMap,
        Minor: generateMinorScaleMap,
        Dorian: generateDorianScaleMap,
        Phrygian: generatePhrygianScaleMap,
        Lydian: generateLydianScaleMap,
        Mixolydian: generateMixolydianScaleMap,
        Locrian: generateLocrianScaleMap,
        "Major Pentatonic": generateMajorPentatonicScaleMap,
        "Minor Pentatonic": generateMinorPentatonicScaleMap,
        "Minor Blues": generateMinorBluesScaleMap,
        "Major Blues": generateMajorBluesScaleMap,
      };
      const generator = scaleGenerators[this.song.scale];
      return generator
        ? this.generateScaleMap(generator, this.song.key)
        : ChromaticScaleMap;
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
