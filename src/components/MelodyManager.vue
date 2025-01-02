<template>
  <div class="card bg-card mb-3 shadow-sm" :class="{ minimized: isMinimized }">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-start text-dark-muted fw-bold mb-3">Chrome Music Lab</p>
        <button
          class="btn btn-outline-custom btn-sm fw-bold mb-3"
          @click="toggleMinimize"
          :class="isMinimized ? 'bi bi-chevron-down ' : 'bi bi-chevron-up'"
        >
          {{ isMinimized ? "Expand" : "Minimize" }}
        </button>
      </div>
      <div v-if="!isMinimized">
        <!-- Remove the iframe -->
        <div class="mb-3" style="height: 650px">
          <iframe
            src="https://musiclab.chromeexperiments.com/"
            class="staff-iframe"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      isMinimized: true,
      tempo: 120,
      measureLength: 4,
    };
  },
  methods: {
    toggleMinimize() {
      this.isMinimized = !this.isMinimized;
    },
  },
};
</script>

<style scoped>
.staff-iframe {
  width: 100%;
  height: 100%; /* Adjust iframe height to fill the container */
  border: none;
}
</style>
