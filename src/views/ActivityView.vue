<template>
  <div v-if="user">
    <div class="container">
      <div class="row my-3">
        <div class="col">
          <div
            class="card bg-dark ps-3 py-2 text-light shadow d-flex justify-content-between align-items-center flex-row"
          >
            <p class="fw-bold my-auto text-start mb-0">Welcome, Songwriter!</p>
            <button
              :class="[
                'btn btn-sm me-3',
                unsavedChanges ? 'btn-warning' : 'btn-success',
              ]"
              @click="manualSave"
            >
              Save
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
            v-if="activeSong"
            :song="activeSong"
            :plainTextActive="plainTextActive"
            @toggle-plain-text="togglePlainText"
          />
          <p v-else>No song selected</p>
          <PlainTextLayout
            v-if="activeSong && plainTextActive"
            :song="activeSong"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <AuthComponent />
  </div>
</template>

<script>
import PlainTextLayout from "@/components/PlainTextLayout.vue";
import SongComplete from "@/components/SongComplete.vue";
import SongLibrary from "@/components/SongLibrary.vue";
import AuthComponent from "@/components/AuthComponent.vue";
import { mapGetters, mapActions } from "vuex";
// import { getAuth, signOut as firebaseSignOut } from "firebase/auth"; // Commented out Firebase auth

export default {
  name: "ActivityView",
  components: {
    SongLibrary,
    SongComplete,
    PlainTextLayout,
    AuthComponent,
  },
  computed: {
    ...mapGetters({
      activeSong: "getActiveSong",
      user: "user",
    }),
    unsavedChanges() {
      return this.activeSongChanged;
    },
  },
  watch: {
    activeSong: {
      handler(newSong) {
        this.localSong = { ...newSong };
        this.activeSongChanged = true;
      },
      immediate: true,
    },
    localSong: {
      handler(newSong) {
        this.updateSong(newSong);
        if (!this.activeSongChanged) {
          this.debounceSaveState();
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      localSong: null,
      plainTextActive: false,
      debounceTimeout: null,
      activeSongChanged: false,
    };
  },
  methods: {
    ...mapActions(["updateSong"]),
    togglePlainText() {
      this.plainTextActive = !this.plainTextActive;
    },
    debounceSaveState() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.saveStateToLocalStorage();
        this.activeSongChanged = false;
      }, 1000);
    },
    manualSave() {
      this.saveStateToLocalStorage();
      this.activeSongChanged = false;
    },
    saveStateToLocalStorage() {
      const state = this.$store.state;
      localStorage.setItem("appState", JSON.stringify(state));
      console.log("State saved to local storage");
    },
    signOut() {
      // const auth = getAuth();
      // firebaseSignOut(auth)
      //   .then(() => {
      //     console.log("User signed out");
      //   })
      //   .catch((error) => {
      //     console.error("Error signing out: ", error);
      //   });
      console.log("Sign out functionality is currently disabled.");
    },
  },
};
</script>
