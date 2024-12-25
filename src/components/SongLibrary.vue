<template>
  <div class="row">
    <div class="col">
      <div class="card bg-card text-dark-muted shadow-sm pb-3">
        <div class="card-body">
          <h1 class="fs-4 my-auto fw-bold text-start">Song Library</h1>
          <hr />
          <table class="table input-off-white text-dark-muted">
            <thead>
              <tr class="text-start">
                <th scope="col" style="width: 5%">#</th>
                <th scope="col" style="width: 20%">Title</th>
                <th scope="col" style="width: 45%">Hook</th>
                <th scope="col" style="width: 20%">Last Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(song, index) in getSongs"
                :key="song.id"
                @click="selectSong(song)"
                :class="{
                  'table-primary': song.id === activeSongId,
                  'cursor-pointer': true,
                }"
              >
                <th class="text-start" scope="row">{{ index + 1 }}</th>
                <td class="text-start">{{ song.title }}</td>
                <td class="text-start">{{ song.hook }}</td>
                <td class="text-start">{{ formatDate(song.lastEdit) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="row">
          <div class="col">
            <button
              class="btn btn-outline-custom me-2 btn-sm fw-bold"
              @click="confirmRemoveSong"
            >
              Remove Song
            </button>
            <button
              class="btn btn-outline-custom btn-sm fw-bold"
              @click="newSong"
            >
              Add Song
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SongLibrary",
  data() {
    return {
      selectedSong: null, // Currently selected song
    };
  },

  computed: {
    ...mapGetters(["getSongs", "getActiveSong"]), // Map Vuex getters
    activeSongId() {
      return this.getActiveSong ? this.getActiveSong.id : null;
    },
  },
  methods: {
    ...mapActions([
      "addSong", // Action to add a new song
      "deleteSong", // Action to delete a song
      "setActiveSong", // Action to set the active song
      "updateSong", // Action to update a song
      "setSongs", // Action to set the list of songs
      "resetStore", // Action to reset the Vuex store
    ]),
    selectSong(song) {
      // Update the selected song and set it as active
      if (this.selectedSong) {
        this.updateSong(this.selectedSong);
      }
      this.selectedSong = song;
      this.setActiveSong(song);
    },
    newSong() {
      // Add a new song and update the datastore
      this.addSong();
    },
    confirmRemoveSong() {
      // Confirm before removing the selected song
      if (this.selectedSong) {
        if (
          confirm(
            `Are you sure you want to remove the song "${this.selectedSong.title}"?`
          )
        ) {
          this.removeSong();
        }
      } else {
        alert("Please select a song to remove.");
      }
    },
    removeSong() {
      // Remove the selected song and update the datastore
      if (this.selectedSong) {
        this.deleteSong(this.selectedSong.id);

        this.selectedSong = null;
        this.refreshAppState();
      }
    },
    refreshAppState() {
      // Refresh the application state after removing a song
      if (this.getSongs.length === 0) {
        this.resetStore();
      } else {
        this.setSongs(this.getSongs);
        this.setActiveSong(null);
      }
    },
    formatDate(dateString) {
      // Format the date string to a readable format
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
  watch: {
    getSongs: {
      handler() {
        // Update the selected song if the list of songs changes
        if (this.selectedSong) {
          this.selectedSong = this.getSongs.find(
            (song) => song.id === this.selectedSong.id
          );
        }
      },
      deep: true,
    },
    getActiveSong: {
      handler(newActiveSong) {
        // Update the selected song when the active song changes
        this.selectedSong = newActiveSong;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.table-primary {
  background-color: #e8cfa5; /* Light sandy brown */
}
</style>
