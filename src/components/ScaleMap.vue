<template>
  <div class="text-center">
    <h3 class="mb-3">{{ song.key }} {{ song.scale }}</h3>
    <div class="d-flex flex-column pt-0 mt-0" ref="scaleMap"></div>
  </div>
</template>
<script>
import MajorScales from "@/data/completeScales/majorScales";
import { SVGuitarChord } from "svguitar";
export default {
  name: "ScaleComplete",
  props: {
    song: Object,
  },
  data() {
    return {
      AMajor: MajorScales.aMajor,
      BMajor: MajorScales.bMajor,
      CMajor: MajorScales.cMajor,
      DMajor: MajorScales.dMajor,
      EMajor: MajorScales.eMajor,
      FMajor: MajorScales.fMajor,
      GMajor: MajorScales.gMajor,
    };
  },
  methods: {
    selectProperScale() {
      switch (this.song.key) {
        case "A":
          return this.AMajor;
        case "B":
          return this.BMajor;
        case "C":
          return this.CMajor;
        case "D":
          return this.DMajor;
        case "E":
          return this.EMajor;
        case "F":
          return this.FMajor;
        case "G":
          return this.GMajor;
        default:
          return this.GMajor;
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
