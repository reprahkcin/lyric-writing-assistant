<template>
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col">
        <div class="card bg-dark ps-3 py-2 text-light shadow text-start">
          <p class="fw-bold my-auto text-start mb-0">Song Library</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card bg-card shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h1 class="fs-4 my-auto fw-bold text-start text-dark-muted">
                Your Songs
              </h1>
              <div class="d-flex gap-2">
                <button
                  class="btn btn-outline-custom btn-sm fw-bold"
                  @click="newSong"
                >
                  <span class="bi bi-plus-lg me-1"></span>
                  Add Song
                </button>
                <div
                  class="bi bi-info-circle ms-2 text-dark-muted"
                  @click="showTooltip = !showTooltip"
                  style="cursor: pointer"
                ></div>
              </div>
            </div>

            <div v-if="showTooltip" class="alert alert-info small mb-3">
              <p class="mb-0">
                This app uses local storage to save your data. Local storage is
                a browser-specific feature that stores data on your device. This
                means your data is only accessible on the device and browser you
                are currently using.
              </p>
            </div>

            <div v-if="getSongs.length === 0" class="text-center py-5">
              <div class="text-muted">
                <span class="bi bi-music-note-beamed fs-1 d-block mb-3"></span>
                <h5>No songs yet</h5>
                <p>Create your first song to get started!</p>
                <button class="btn btn-primary btn-sm fw-bold" @click="newSong">
                  <span class="bi bi-plus-lg me-1"></span>
                  Create Your First Song
                </button>
              </div>
            </div>

            <div v-else class="table-responsive">
              <table class="table input-off-white text-dark-muted">
                <thead>
                  <tr class="text-start">
                    <th scope="col" style="width: 5%">#</th>
                    <th scope="col" style="width: 25%">Title</th>
                    <th scope="col" style="width: 40%">Hook</th>
                    <th scope="col" style="width: 20%">Last Edit</th>
                    <th scope="col" style="width: 10%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(song, index) in getSongs"
                    :key="song.id"
                    class="cursor-pointer"
                  >
                    <th class="text-start" scope="row">{{ index + 1 }}</th>
                    <td class="text-start">
                      <div class="d-flex align-items-center">
                        <span class="fw-bold">{{ song.title }}</span>
                        <span
                          v-if="song.mood"
                          class="badge bg-secondary ms-2 small"
                          >{{ song.mood }}</span
                        >
                      </div>
                    </td>
                    <td class="text-start">{{ song.hook || "No hook yet" }}</td>
                    <td class="text-start">{{ formatDate(song.lastEdit) }}</td>
                    <td class="text-start">
                      <div class="btn-group btn-group-sm">
                        <button
                          class="btn btn-outline-primary btn-sm"
                          @click.stop="openSong(song)"
                          title="Open Song"
                        >
                          <span class="bi bi-arrow-right"></span>
                        </button>
                        <button
                          class="btn btn-outline-danger btn-sm"
                          @click.stop="confirmRemoveSong(song)"
                          title="Delete Song"
                        >
                          <span class="bi bi-trash"></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SongLibraryView",
  data() {
    return {
      showTooltip: false,
    };
  },
  computed: {
    ...mapGetters(["getSongs"]),
  },
  methods: {
    ...mapActions(["addSong", "deleteSong", "setActiveSong", "resetStore"]),
    async newSong() {
      await this.addSong();
      const newSong = this.getSongs[this.getSongs.length - 1];
      this.openSong(newSong);
    },
    openSong(song) {
      this.setActiveSong(song);
      this.$router.push(`/song/${song.id}`);
    },
    confirmRemoveSong(song) {
      if (
        confirm(
          `Are you sure you want to remove "${song.title}"? This action cannot be undone.`
        )
      ) {
        this.removeSong(song);
      }
    },
    removeSong(song) {
      this.deleteSong(song.id);

      // If this was the active song, clear it
      if (this.$store.getters.getActiveSong?.id === song.id) {
        this.setActiveSong(null);
      }

      // If no songs left, reset store
      if (this.getSongs.length === 0) {
        this.resetStore();
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      return date.toLocaleString("en-US", options).replace(",", "");
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.table tbody tr:hover {
  background-color: rgba(232, 207, 165, 0.3);
}

.badge {
  font-size: 0.7rem;
}
</style>
