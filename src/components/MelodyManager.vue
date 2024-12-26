<template>
  <div class="card bg-card mb-3 shadow-sm" :class="{ minimized: isMinimized }">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-start text-dark-muted fw-bold mb-3">Melody Manager</p>
        <button
          class="btn btn-outline-custom btn-sm fw-bold mb-3"
          @click="toggleMinimize"
          :class="isMinimized ? 'bi bi-chevron-down ' : 'bi bi-chevron-up'"
        >
          {{ isMinimized ? "Expand" : "Minimize" }}
        </button>
      </div>

      <div v-if="!isMinimized">
        <!-- Musical Staff Placeholder -->
        <div class="musical-staff mb-3">
          <!-- Placeholder for the musical staff -->
          <div class="staff-placeholder">Musical Staff (2 Octaves)</div>
        </div>

        <div class="control-panel">
          <div class="row">
            <div class="col">
              <!-- Tempo Input -->
              <div class="mb-3 d-flex align-items-center">
                <label for="tempoInput" class="form-label me-2">Tempo</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="tempoInput"
                  min="60"
                  max="200"
                  v-model="tempo"
                />
              </div>
            </div>
            <div class="col">
              <!-- Measure Length Input -->
              <div class="mb-3 d-flex align-items-center">
                <label for="measureLengthInput" class="form-label me-2"
                  >Length</label
                >
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="measureLengthInput"
                  min="4"
                  max="16"
                  v-model="measureLength"
                />
              </div>
            </div>

            <div class="col-8">
              <div class="btn-group w-100">
                <!-- Play and Stop Buttons -->
                <button class="btn btn-outline-custom btn-sm fw-bold">
                  <i class="bi bi-play-fill"></i>Play
                </button>
                <button class="btn btn-outline-custom btn-sm fw-bold">
                  <i class="bi bi-stop-fill"></i>Stop
                </button>
                <!-- Loop and Legato Toggle Buttons -->
                <button class="btn btn-outline-custom btn-sm fw-bold">
                  <i class="bi bi-arrow-repeat"></i>Loop
                </button>
                <button class="btn btn-outline-custom btn-sm fw-bold">
                  <i class="bi bi-dash-lg"></i>Legato
                </button>
                <!-- Save and Delete Buttons -->
                <button class="btn btn-outline-custom btn-sm fw-bold">
                  <i class="bi bi-save"></i>Save
                </button>
                <button class="btn btn-outline-custom btn-sm fw-bold">
                  <i class="bi bi-trash"></i>Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Placeholder for listing saved melodies -->
        <div class="saved-melodies mt-3">
          <p class="text-start text-dark-muted fw-bold">Saved Melodies</p>
          <div class="melodies-placeholder">No saved melodies</div>
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
.musical-staff {
  height: 150px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
}
.staff-placeholder {
  font-size: 1.2rem;
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
