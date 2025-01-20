<template>
  <div class="text-center">
    <h3 class="mb-3">{{ song.key }} {{ song.scale }}</h3>
    <div class="d-flex flex-column pt-0 mt-0" ref="scaleMap"></div>
  </div>
</template>
<script>
import { generateMajorScaleMap } from "@/data/completeScales/major";
import { generateMinorScaleMap } from "@/data/completeScales/minor";
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
