<template>
  <div class="card bg-card mb-3 shadow-sm" :class="{ minimized: isMinimized }">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-start text-dark-muted fw-bold mb-3">Google Song Maker</p>
        <button
          class="btn btn-outline-custom btn-sm fw-bold mb-3"
          @click="toggleMinimize"
          :class="isMinimized ? 'bi bi-chevron-down ' : 'bi bi-chevron-up'"
        >
          {{ isMinimized ? "Expand" : "Minimize" }}
        </button>
      </div>

      <div v-if="!isMinimized">
        <!-- Embed MelodyMaker app using an iframe -->
        <div class="mb-3" style="height: 650px">
          <iframe
            src="https://musiclab.chromeexperiments.com/Song-Maker/"
            class="staff-iframe"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Tone from "tone";

export default {
  name: "MelodyManager",
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isMinimized: false,
      tempo: 120,
      measureLength: 4,
    };
  },
  methods: {
    toggleMinimize() {
      this.isMinimized = !this.isMinimized;
    },
    async playMelody() {
      await Tone.start();
      const synth = new Tone.Synth().toDestination();
      const now = Tone.now();
      synth.triggerAttackRelease("C4", "8n", now);
      synth.triggerAttackRelease("E4", "8n", now + 0.5);
      synth.triggerAttackRelease("G4", "8n", now + 1);
      synth.triggerAttackRelease("B4", "8n", now + 1.5);
    },
    stopMelody() {},
    toggleLoop() {},
    toggleLegato() {},
    updateTempo() {},
  },
};
</script>

<style scoped>
.staff-iframe {
  width: 100%;
  height: 100%; /* Adjust iframe height to fill the container */
  border: none;
}
.saved-melodies {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 10px;
}
.melodies-placeholder {
  color: #6c757d;
}
.control-panel .row {
  margin: 0;
}
.control-panel .col {
  padding: 0 5px;
}
.minimized .musical-staff,
.minimized .control-panel,
.minimized .saved-melodies {
  display: none;
}
</style>
