import { createStore } from "vuex";
import debounce from "lodash.debounce";

const store = createStore({
  state: {
    songs: JSON.parse(localStorage.getItem("songs")) || [], // Load songs from local storage
    activeSong: JSON.parse(localStorage.getItem("activeSong")) || null, // Load active song from local storage
    user: null, // Authenticated user
    unsavedChanges: false, // Track unsaved changes
  },
  mutations: {
    SET_UNSAVED_CHANGES(state, value) {
      // Set the unsaved changes state to the provided value
      state.unsavedChanges = value;
    },
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
    ADD_SECTION(state, { songId, section }) {
      const song = state.songs.find((song) => song.id === songId);
      if (song) {
        song.sections.push(section);
      }
    },
    DELETE_SECTION(state, { songId, sectionId }) {
      const song = state.songs.find((song) => song.id === songId);
      if (song) {
        song.sections = song.sections.filter((section) => section.id !== sectionId);
      }
    },
    UPDATE_LINE(state, { songId, sectionId, lineIndex, newLine }) {
      const song = state.songs.find((song) => song.id === songId);
      if (song) {
        const section = song.sections.find((sec) => sec.id === sectionId);
        if (section) {
          section.lines.splice(lineIndex, 1, newLine);
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
    setUnsavedChanges({ commit }, value) {
      // Commit the SET_UNSAVED_CHANGES mutation with the provided value
      commit("SET_UNSAVED_CHANGES", value);
    },
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
    deleteSection({ commit, dispatch }, payload) {
      commit("DELETE_SECTION", payload);
      dispatch("scheduleSaveStateToLocalStorage");
    },
    updateLine({ commit, dispatch }, payload) {
      commit("UPDATE_LINE", payload);
      dispatch("scheduleSaveStateToLocalStorage");
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
    }, 1000), // Debounce local storage saves to every 1 second
    loadStateFromLocalStorage({ commit }) {
      const songs = JSON.parse(localStorage.getItem("songs")) || [];
      const activeSong = JSON.parse(localStorage.getItem("activeSong")) || null;
      commit("SET_SONGS", songs);
      commit("SET_ACTIVE_SONG", activeSong);
      console.log("State loaded from local storage");
    },
  },
  getters: {
    getUnsavedChanges(state) {
      // Return the unsaved changes state
      return state.unsavedChanges;
    },
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
