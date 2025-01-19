<template>
  <div class="text-center">
    <h3 v-if="selectedScale" class="mb-3">{{ selectedScale.name }} Scale</h3>
    <div class="d-flex flex-column" ref="scaleMap"></div>
  </div>
</template>

<script>
import majorScales from "@/data/completeScales/majorScales.js";
import { SVGuitarChord } from "svguitar";

export default {
  name: "ScaleComplete",
  props: {
    selectedScale: Object,
  },
  data() {
    return {
      majorScales,
    };
  },
  methods: {
    renderScale() {
      if (!this.selectedScale) {
        console.error("No selected scale");
        return;
      }

      console.log("Selected scale:", this.selectedScale);

      const selectedScaleNotes =
        this.majorScales[this.selectedScale.name.toLowerCase()];
      if (!selectedScaleNotes) {
        console.error(
          "No notes found for selected scale:",
          this.selectedScale.name
        );
        return;
      }

      console.log("Selected scale notes:", selectedScaleNotes);

      try {
        new SVGuitarChord(this.$refs.scaleMap)
          .configure({
            frets: 12,
            orientation: "horizontal",
            fretMarkers: [2, 4, 6, 8, { fret: 11, double: true }],
          })
          .chord(selectedScaleNotes)
          .draw();
      } catch (error) {
        console.error("Error drawing chord chart:", error);
      }
    },
  },
  watch: {
    selectedScale() {
      this.renderScale();
    },
  },
  mounted() {
    this.renderScale();
  },
};
</script>

<style scoped>
/* No custom CSS needed */
</style>
