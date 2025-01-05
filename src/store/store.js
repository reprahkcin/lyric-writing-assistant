import { createStore } from "vuex";
import sectionTemplates from "@/data/sectionTemplates"; // Import section templates
import moods from "@/data/moods"; // Import moods
import keys from "@/data/keys"; // Import keys
import scales from "@/data/scales"; // Import scales
import majorProgressions from "@/assets/csv_data/Major_Scale_Progressions.json"; // Import major progressions
import minorProgressions from "@/assets/csv_data/Minor_Scale_Progressions.json"; // Import minor progressions
import prompts from "@/data/prompts"; // Import prompts

const store = createStore({
  state: {
    songs: JSON.parse(localStorage.getItem("songs")) || [], // Load songs from local storage
    activeSong: JSON.parse(localStorage.getItem("activeSong")) || null, // Load active song from local storage
    
    unsavedChanges: false, // Track unsaved changes
    sectionTemplates, // Add sectionTemplates to state
    moods, // Add moods to state
    keys, // Add keys to state
    scales, // Add scales to state
    majorProgressions, // Add major progressions to state
    minorProgressions, // Add minor progressions to state
    prompts, // Add prompts to state
    chordProgressions: [], // Add chordProgressions to state
  },
  mutations: {
    SET_UNSAVED_CHANGES(state, value) {
      // Set the unsaved changes state to the provided value
      state.unsavedChanges = value;
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
      // Also update the active song if it matches the updated song
      if (value.id === state.activeSong?.id) {
        state.activeSong = { ...value };
      }
    },
    SET_ACTIVE_SONG(state, value) {
      // Set the active song to a copy of the provided value
      state.activeSong = { ...value };
    },

    // Song Section Mutations
    UPDATE_ACTIVE_SONG_SECTION(state, section) {
      const index = state.activeSong.sections.findIndex((sec) => sec.id === section.id);
      if (index !== -1) {
        state.activeSong.sections.splice(index, 1, section);
      }
    },
    MOVE_ACTIVE_SONG_SECTION(state, { index, direction }) {
      if (direction === "up" && index > 0) {
        [state.activeSong.sections[index - 1], state.activeSong.sections[index]] = [
          state.activeSong.sections[index],
          state.activeSong.sections[index - 1],
        ];
      } else if (direction === "down" && index < state.activeSong.sections.length - 1) {
        [state.activeSong.sections[index + 1], state.activeSong.sections[index]] = [
          state.activeSong.sections[index],
          state.activeSong.sections[index + 1],
        ];
      }
    },
    ADD_ACTIVE_SONG_SECTION(state, section) {
      state.activeSong.sections.push(section);
    },
    DELETE_ACTIVE_SONG_SECTION(state, sectionId) {
      state.activeSong.sections = state.activeSong.sections.filter((section) => section.id !== sectionId);
    },

    // Song Line Mutations
    UPDATE_ACTIVE_SONG_LINE(state, { sectionId, lineIndex, newLine }) {
      const section = state.activeSong.sections.find((sec) => sec.id === sectionId);
      if (section) {
        section.lines.splice(lineIndex, 1, newLine);
      }
    },
    SET_CHORD_PROGRESSIONS(state, progressions) {
      state.chordProgressions = progressions;
    },
  },
  actions: {
    setUnsavedChanges({ commit }, value) {
      // Commit the SET_UNSAVED_CHANGES mutation with the provided value
      commit("SET_UNSAVED_CHANGES", value);
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
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    addActiveSongSection({ commit, dispatch }, section) {
      // Commit the ADD_ACTIVE_SONG_SECTION mutation with the section
      commit("ADD_ACTIVE_SONG_SECTION", section);
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    deleteSong({ commit, dispatch }, value) {
      // Commit the DELETE_SONG mutation with the song id
      commit("DELETE_SONG", value);
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    updateSong({ commit, dispatch }, value) {
      // Commit the UPDATE_SONG mutation with the updated song
      commit("UPDATE_SONG", value);
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    setActiveSong({ commit }, value) {
      // Commit the SET_ACTIVE_SONG mutation with the song to set as active
      commit("SET_ACTIVE_SONG", value);
    },
    updateActiveSongSection({ commit, dispatch }, section) {
      // Commit the UPDATE_ACTIVE_SONG_SECTION mutation with the section
      commit("UPDATE_ACTIVE_SONG_SECTION", section);
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    moveActiveSongSection({ commit, dispatch }, payload) {
      // Commit the MOVE_ACTIVE_SONG_SECTION mutation with the payload
      commit("MOVE_ACTIVE_SONG_SECTION", payload);
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    deleteActiveSongSection({ commit, dispatch }, sectionId) {
      // Commit the DELETE_ACTIVE_SONG_SECTION mutation with the section id
      commit("DELETE_ACTIVE_SONG_SECTION", sectionId);
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    updateActiveSongLine({ commit, dispatch }, payload) {
      // Commit the UPDATE_ACTIVE_SONG_LINE mutation with the payload
      commit("UPDATE_ACTIVE_SONG_LINE", payload);
      // Save the updated state to local storage
      dispatch("saveStateToLocalStorage");
    },
    resetStore({ commit, dispatch }) {
      // Commit the RESET_STORE mutation to reset the store
      commit("RESET_STORE");
      dispatch("saveStateToLocalStorage"); // Save state to local storage
    },
    saveStateToLocalStorage({ state }) {
      localStorage.setItem("songs", JSON.stringify(state.songs));
      localStorage.setItem("activeSong", JSON.stringify(state.activeSong));
      console.log("State saved to local storage");
    },
    loadStateFromLocalStorage({ commit }) {
      const songs = JSON.parse(localStorage.getItem("songs")) || [];
      const activeSong = JSON.parse(localStorage.getItem("activeSong")) || null;
      commit("SET_SONGS", songs);
      commit("SET_ACTIVE_SONG", activeSong);
      console.log("State loaded from local storage");
    },
    updateChordProgressions({ state, commit }) {
      const selectedKey = state.activeSong?.key;
      const selectedScale = state.scales.find(
        (s) => s.name === state.activeSong?.scale
      );
      if (selectedKey && selectedScale) {
        const chordProgressions = selectedScale.name
          .toLowerCase()
          .includes("minor")
          ? state.minorProgressions
          : state.majorProgressions;
        commit("SET_CHORD_PROGRESSIONS", chordProgressions);
      } else {
        commit("SET_CHORD_PROGRESSIONS", [
          ...state.majorProgressions,
          ...state.minorProgressions,
        ]);
      }
    },
    startAutoSave({ dispatch }) {
      setInterval(() => {
        dispatch("saveStateToLocalStorage");
      }, 5000);
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
    getSectionTemplates(state) {
      return state.sectionTemplates;
    },
    getMoods(state) {
      return state.moods;
    },
    getKeys(state) {
      return state.keys;
    },
    getScales(state) {
      return state.scales;
    },
    getPrompts(state) {
      return state.prompts;
    },
    getChordProgressions(state) {
      return state.chordProgressions;
    },
    getSelectedScaleNotes(state) {
      const selectedScale = state.scales.find(
        (s) => s.name === state.activeSong?.scale
      );
      return selectedScale
        ? selectedScale.notes(state.activeSong?.key)
        : [];
    },
    getSelectedScaleChords(state) {
      const selectedScale = state.scales.find(
        (s) => s.name === state.activeSong?.scale
      );
      return selectedScale ? selectedScale.chords : [];
    },
    getSectionById: (state) => (songId, sectionId) => {
      const song = state.songs.find((song) => song.id === songId);
      return song ? song.sections.find((section) => section.id === sectionId) : null;
    },
  },
});

// Load state from local storage on initialization
store.dispatch("loadStateFromLocalStorage");
store.dispatch("startAutoSave");

export default store;
