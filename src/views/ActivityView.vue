<template>
  <div>
    <div class="container">
      <div class="row my-3">
        <div class="col">
          <div
            class="card bg-dark ps-3 py-2 text-light shadow d-flex justify-content-between align-items-center flex-row"
          >
            <p class="fw-bold my-auto text-start mb-0">Welcome, Songwriter</p>
            <button
              :class="[
                'btn my-auto me-2 py-0',
                unsavedChanges ? 'btn-success' : 'btn-warning',
              ]"
              @click="manualSaveState"
            >
              {{ unsavedChanges ? "Saved" : "Unsaved" }}
            </button>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <SongLibrary />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <SongComplete
            v-if="activeSong && activeSong.id"
            :song="activeSong"
            :plainTextActive="plainTextActive"
            @toggle-plain-text="togglePlainText"
          />
          <p v-else>
            Please Add and Select a song in the Song Library to begin
          </p>
          <PlainTextLayout
            v-if="activeSong && activeSong.id && plainTextActive"
            :song="activeSong"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlainTextLayout from "@/components/PlainTextLayout.vue";
import SongComplete from "@/components/SongComplete.vue";
import SongLibrary from "@/components/SongLibrary.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ActivityView",
  components: {
    SongLibrary,
    SongComplete,
    PlainTextLayout,
  },
  computed: {
    ...mapGetters({
      activeSong: "getActiveSong",
      unsavedChanges: "getUnsavedChanges",
    }),
  },
  data() {
    return {
      plainTextActive: false,
    };
  },
  methods: {
    ...mapActions([
      "updateSong",
      "saveStateToLocalStorage",
      "setUnsavedChanges",
    ]),
    togglePlainText() {
      this.plainTextActive = !this.plainTextActive;
    },
    manualSaveState() {
      if (this.activeSong) {
        this.updateSong(this.activeSong);
      }
      this.saveStateToLocalStorage();
      this.setUnsavedChanges(false);
    },
  },
};
</script>
