import { createStore } from "vuex";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb8nZoo3LwrWHJB-uFCSlVLv3FsPIXMCI",
  authDomain: "lyric-writing-assistant.firebaseapp.com",
  projectId: "lyric-writing-assistant",
  storageBucket: "lyric-writing-assistant.firebasestorage.app",
  messagingSenderId: "550944326368",
  appId: "1:550944326368:web:3dd3fcd0009f72fef78685",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const store = createStore({
  state: {
    songs: [], // Array to store all songs
    activeSong: null, // Currently active song
    user: null, // Authenticated user
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_SONGS(state, value) {
      // Set the songs state to the provided value
      state.songs = value;
    },
    ADD_SONG(state, value) {
      // Add a new song to the songs array
      state.songs.push(value);
    },
    DELETE_SONG(state, value) {
      // Find the index of the song to delete using its id
      const index = state.songs.findIndex((song) => song.id === value);
      // Delete the song if it exists
      if (index !== -1) {
        state.songs.splice(index, 1);
      }
    },
    UPDATE_SONG(state, value) {
      // Find the index of the song to update using its id
      const index = state.songs.findIndex((song) => song.id === value.id);
      // Update the song if it exists
      if (index !== -1) {
        state.songs[index] = {
          ...state.songs[index], // Preserve existing properties
          ...value, // Update with new properties
          lastEdit: new Date().toISOString(), // Update the last edit timestamp
        };
      }
    },
    SET_ACTIVE_SONG(state, value) {
      // Set the active song to a copy of the provided value
      state.activeSong = { ...value };
    },
    UPDATE_SECTION(state, { songId, section }) {
      // Find the song by its id
      const song = state.songs.find((song) => song.id === songId);
      if (song) {
        // Find the index of the section to update using its id
        const index = song.sections.findIndex((sec) => sec.id === section.id);
        // Update the section if it exists
        if (index !== -1) {
          song.sections.splice(index, 1, section);
        }
      }
    },
    RESET_STORE(state) {
      // Reset the store to its initial state
      state.songs = [];
      state.activeSong = null;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    setSongs({ commit }, value) {
      // Commit the SET_SONGS mutation with the provided value
      commit("SET_SONGS", value);
    },
    addSong({ commit }) {
      // Create a new song object with default values
      const song = {
        id: new Date().getTime(), // Unique id based on current timestamp
        title: "Untitled",
        mood: "",
        hook: "",
        theme: "", // New theme property
        narrativeOutline: "",
        sections: [], // Ensure sections is always an array
        lastEdit: new Date().toISOString(), // Current timestamp
      };
      // Commit the ADD_SONG mutation with the new song
      commit("ADD_SONG", song);
    },
    deleteSong({ commit }, value) {
      // Commit the DELETE_SONG mutation with the song id
      commit("DELETE_SONG", value);
    },
    updateSong({ commit }, value) {
      // Commit the UPDATE_SONG mutation with the updated song
      commit("UPDATE_SONG", value);
    },
    setActiveSong({ commit }, value) {
      // Commit the SET_ACTIVE_SONG mutation with the song to set as active
      commit("SET_ACTIVE_SONG", value);
    },
    updateSection({ commit }, payload) {
      // Commit the UPDATE_SECTION mutation with the payload
      commit("UPDATE_SECTION", payload);
    },
    resetStore({ commit }) {
      // Commit the RESET_STORE mutation to reset the store
      commit("RESET_STORE");
    },
    async saveStateToFirestore({ state }) {
      if (!state.user) return; // Ensure user is authenticated
      const stateDoc = doc(db, "users", state.user.uid);
      try {
        await setDoc(stateDoc, { state: JSON.stringify(state) });
        console.log("State saved to Firestore");
      } catch (error) {
        console.error("Error saving state to Firestore:", error);
      }
    },
    async loadStateFromFirestore({ commit, state }) {
      if (!state.user) return; // Ensure user is authenticated
      const stateDoc = doc(db, "users", state.user.uid);
      try {
        const docSnap = await getDoc(stateDoc);
        if (docSnap.exists()) {
          const data = docSnap.data().state;
          if (data) {
            const state = JSON.parse(data);
            state.songs = state.songs.map((song) => ({
              ...song,
              sections: Array.isArray(song.sections) ? song.sections : [], // Ensure sections is always an array
            }));
            console.log("Loaded state from Firestore:", state);
            commit("SET_SONGS", state.songs);
            commit("SET_ACTIVE_SONG", state.activeSong);
            console.log("State loaded from Firestore");
          } else {
            console.log("No state data found in Firestore");
          }
        } else {
          console.log("No state document found in Firestore");
        }
      } catch (error) {
        console.error("Error loading state from Firestore:", error);
      }
    },
  },
  getters: {
    getSongs(state) {
      // Return the songs state
      return state.songs;
    },
    getActiveSong(state) {
      // Return the active song state
      return state.activeSong;
    },
    user(state) {
      // Return the authenticated user
      return state.user;
    },
  },
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch("setUser", user);
    store.dispatch("loadStateFromFirestore");
  } else {
    store.dispatch("setUser", null);
  }
});

export default store;
