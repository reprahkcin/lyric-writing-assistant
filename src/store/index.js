import { createStore } from "vuex";
import debounce from "lodash.debounce";

const store = createStore({
  state: {
    songs: JSON.parse(localStorage.getItem("songs")) || [], // Load songs from local storage
    activeSong: JSON.parse(localStorage.getItem("activeSong")) || null, // Load active song from local storage
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
    addSong({ commit, dispatch }) {
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
      dispatch("scheduleSaveStateToLocalStorage"); // Schedule save state to local storage
    },
    addSection({ commit, dispatch }, payload) {
      // Commit the ADD_SECTION mutation with the payload
      commit("ADD_SECTION", payload);
      dispatch("scheduleSaveStateToLocalStorage"); // Schedule save state to local storage
    },
    deleteSong({ commit, dispatch }, value) {
      // Commit the DELETE_SONG mutation with the song id
      commit("DELETE_SONG", value);
      dispatch("scheduleSaveStateToLocalStorage"); // Schedule save state to local storage
    },
    updateSong({ commit, dispatch }, value) {
      // Commit the UPDATE_SONG mutation with the updated song
      commit("UPDATE_SONG", value);
      dispatch("scheduleSaveStateToLocalStorage"); // Schedule save state to local storage
    },
    setActiveSong({ commit }, value) {
      // Commit the SET_ACTIVE_SONG mutation with the song to set as active
      commit("SET_ACTIVE_SONG", value);
    },
    updateSection({ commit, dispatch }, payload) {
      // Commit the UPDATE_SECTION mutation with the payload
      commit("UPDATE_SECTION", payload);
      dispatch("scheduleSaveStateToLocalStorage"); // Schedule save state to local storage
    },
    resetStore({ commit, dispatch }) {
      // Commit the RESET_STORE mutation to reset the store
      commit("RESET_STORE");
      dispatch("scheduleSaveStateToLocalStorage"); // Schedule save state to local storage
    },
    saveStateToLocalStorage({ state }) {
      localStorage.setItem("songs", JSON.stringify(state.songs));
      localStorage.setItem("activeSong", JSON.stringify(state.activeSong));
      console.log("State saved to local storage");
    },
    scheduleSaveStateToLocalStorage: debounce(({ dispatch }) => {
      dispatch("saveStateToLocalStorage");
    }, 5000), // Debounce local storage saves to every 5 seconds
    loadStateFromLocalStorage({ commit }) {
      const songs = JSON.parse(localStorage.getItem("songs")) || [];
      const activeSong = JSON.parse(localStorage.getItem("activeSong")) || null;
      commit("SET_SONGS", songs);
      commit("SET_ACTIVE_SONG", activeSong);
      console.log("State loaded from local storage");
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

// Load state from local storage on initialization
store.dispatch("loadStateFromLocalStorage");

export default store;
