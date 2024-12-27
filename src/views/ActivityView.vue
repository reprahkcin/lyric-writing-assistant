<template>
  <div v-if="user">
    <div class="container">
      <div class="row my-3">
        <div class="col">
          <div
            class="card bg-dark ps-3 py-2 text-light shadow d-flex justify-content-between align-items-center flex-row"
          >
            <p class="fw-bold my-auto text-start mb-0">
              Welcome, {{ user.displayName }}
            </p>
            <button class="btn btn-outline-light btn-sm me-3" @click="signOut">
              sign out
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
import AuthComponent from "@/components/AuthComponent.vue"; // Updated import
import { mapGetters, mapActions } from "vuex";
import { getAuth, signOut as firebaseSignOut } from "firebase/auth"; // Import Firebase auth

export default {
  name: "ActivityView",
  components: {
    SongLibrary,
    SongComplete,
    PlainTextLayout,
    AuthComponent, // Updated component reference
  },
  computed: {
    ...mapGetters({
      activeSong: "getActiveSong",
      user: "user",
    }),
  },
  watch: {
    activeSong: {
      handler(newSong) {
        this.localSong = { ...newSong };
        this.saveStateToFirestore(); // Save state to Firestore immediately
        this.activeSongChanged = true; // Set the flag
      },
      immediate: true,
    },
    localSong: {
      handler(newSong) {
        this.updateSong(newSong);
        if (!this.activeSongChanged) {
          this.debounceSaveState(); // Debounce state save to Firestore
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      localSong: null,
      plainTextActive: false,
      debounceTimeout: null, // Timeout ID for debouncing
      activeSongChanged: false, // Flag to track activeSong change
    };
  },
  methods: {
    ...mapActions([
      "updateSong",
      "saveStateToFirestore",
      "saveStateToLocalStorage",
    ]),
    togglePlainText() {
      this.plainTextActive = !this.plainTextActive;
    },
    debounceSaveState() {
      // Clear the existing timeout
      clearTimeout(this.debounceTimeout);
      // Set a new timeout to save state after 1 second of inactivity
      this.debounceTimeout = setTimeout(() => {
        if (this.$store.state.useLocalStorage) {
          this.saveStateToLocalStorage();
        } else {
          this.saveStateToFirestore();
        }
        this.activeSongChanged = false; // Reset the flag after saving
      }, 1000); // 1000 ms = 1 second
    },
    signOut() {
      const auth = getAuth();
      firebaseSignOut(auth)
        .then(() => {
          console.log("User signed out");
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    },
  },
};
</script>
