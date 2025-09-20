<template>
  <div class="card bg-card text-dark-muted shadow-sm">
    <div class="card-body">
      <h5 class="card-title fw-bold mb-3">
        <span class="bi bi-tools me-2"></span>
        Musical Resources
      </h5>

      <div v-if="song" class="row g-3">
        <!-- Chrome Music Lab -->
        <div class="col-12">
          <div class="card bg-light border-0">
            <div class="card-header bg-transparent">
              <h6 class="mb-0">
                <span class="bi bi-music-note-beamed me-2"></span>
                Chrome Music Lab
              </h6>
            </div>
            <div class="card-body">
              <ChromeMusicLab />
            </div>
          </div>
        </div>

        <!-- Additional Resources Placeholder -->
        <div class="col-12">
          <div class="card bg-light border-0">
            <div class="card-header bg-transparent">
              <h6 class="mb-0">
                <span class="bi bi-plus-circle me-2"></span>
                More Resources Coming Soon
              </h6>
            </div>
            <div class="card-body text-center text-muted py-4">
              <span class="bi bi-tools fs-1 d-block mb-3"></span>
              <p class="mb-0">
                Additional musical tools and resources will be added here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-muted py-5">
        <span class="bi bi-music-note-beamed fs-1 d-block mb-3"></span>
        <p>No song selected</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChromeMusicLab from "@/components/ChromeMusicLab.vue";

export default {
  name: "SongResourcesTab",
  components: {
    ChromeMusicLab,
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
};
</script>
