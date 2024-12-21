import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const app = {
  state: {
    songs: [], // Array to store all songs
    activeSong: null, // Currently active song
  },
  mutations: {
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
        narrativeOutline: "",
        sections: [],
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
  },
};
export default app;
