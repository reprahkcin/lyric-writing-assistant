<template>
  <div class="card bg-card mb-3 shadow-sm" :class="{ minimized: isMinimized }">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-start text-dark-muted fw-bold mb-3">Chrome Music Lab</p>
        <a
          href="#"
          @click.prevent="toggleMinimize"
          class="text-decoration-none fw-bold"
        >
          {{ isMinimized ? "Expand" : "Minimize" }}
        </a>
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
