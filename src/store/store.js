import { createStore } from "vuex";
import sectionTemplates from "@/data/sectionTemplates"; // Import section templates
import moods from "@/data/moods"; // Import moods
import keys from "@/data/keys"; // Import keys
import scales from "@/data/scales"; // Import scales
import majorProgressions from "@/data/Major_Progressions.json"; // Import major progressions
import minorProgressions from "@/data/Minor_Progressions.json"; // Import minor progressions
import dorianProgressions from "@/data/Dorian_Progressions.json"; // Import dorian progressions
import phrygianProgressions from "@/data/Phrygian_Progressions.json"; // Import phrygian progressions
import lydianProgressions from "@/data/Lydian_Progressions.json"; // Import lydian progressions
import mixolydianProgressions from "@/data/Mixolydian_Progressions.json"; // Import mixolydian progressions
import locrianProgressions from "@/data/Locrian_Progressions.json"; // Import locrian progressions
import minorPentatonicProgressions from "@/data/Minor_Pentatonic_Progressions.json"; // Import pentatonic progressions
import minorBluesProgressions from "@/data/Minor_Blues_Progressions.json"; // Import blues progressions
import majorPentatonicProgressions from "@/data/Major_Pentatonic_Progressions.json"; // Import major pentatonic progressions
import majorBluesProgressions from "@/data/Major_Blues_Progressions.json"; // Import major blues progressions
import harmonicProgressions from "@/data/Harmonic_Progressions.json"; // Import minor harmonic progressions
import melodicMinorProgressions from "@/data/Melodic_Minor_Progressions.json"; // Import melodic minor progressions
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
    dorianProgressions, // Add dorian progressions to state
    phrygianProgressions, // Add phrygian progressions to state
    lydianProgressions, // Add lydian progressions to state
    mixolydianProgressions, // Add mixolydian progressions to state
    locrianProgressions, // Add locrian progressions to state
    minorPentatonicProgressions, // Add minor pentatonic progressions to state
    minorBluesProgressions, // Add minor blues progressions to state
    majorPentatonicProgressions, // Add major pentatonic progressions to state
    majorBluesProgressions, // Add major blues progressions to state
    harmonicProgressions, // Add minor harmonic progressions to state
    melodicMinorProgressions, // Add melodic minor progressions to state
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
      const newSection = {
        ...section,
        isMinimized: true, // Ensure new sections start minimized
      };
      state.activeSong.sections.push(newSection);
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
    ADD_ACTIVE_SONG_LINE(state, { sectionId, newLine }) {
      const section = state.activeSong.sections.find((sec) => sec.id === sectionId);
      if (section) {
        section.lines.push(newLine);
      }
    },
    DELETE_ACTIVE_SONG_LINE(state, { sectionId, lineIndex }) {
      const section = state.activeSong.sections.find((sec) => sec.id === sectionId);
      if (section) {
        section.lines.splice(lineIndex, 1);
      }
    },
    SET_CHORD_PROGRESSIONS(state, progressions) {
      state.chordProgressions = progressions;
    },
    SAVE_ACTIVE_SONG(state) {
      const index = state.songs.findIndex(song => song.id === state.activeSong.id);
      if (index !== -1) {
        state.songs[index] = { ...state.activeSong };
      }
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
      // Set the isMinimized property to true for new sections
      const newSection = {
        ...section,
        isMinimized: true,
      };
      // Commit the ADD_ACTIVE_SONG_SECTION mutation with the new section
      commit("ADD_ACTIVE_SONG_SECTION", newSection);
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
    setActiveSong({ commit, dispatch }, value) {
      // Commit the SET_ACTIVE_SONG mutation with the song to set as active
      commit("SET_ACTIVE_SONG", value);
      // Update chord progressions based on the active song's scale and key
      dispatch("updateChordProgressions");
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
    addActiveSongLine({ commit, dispatch }, payload) {
      commit("ADD_ACTIVE_SONG_LINE", payload);
      dispatch("saveStateToLocalStorage");
    },
    deleteActiveSongLine({ commit, dispatch }, payload) {
      commit("DELETE_ACTIVE_SONG_LINE", payload);
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
        let chordProgressions;
        switch (selectedScale.name.toLowerCase()) {
          case "major":
            chordProgressions = state.majorProgressions;
            break;
          case "minor":
            chordProgressions = state.minorProgressions;
            break;
          case "dorian":
            chordProgressions = state.dorianProgressions;
            break;
          case "phrygian":
            chordProgressions = state.phrygianProgressions;
            break;
          case "lydian":
            chordProgressions = state.lydianProgressions;
            break;
          case "mixolydian":
            chordProgressions = state.mixolydianProgressions;
            break;
          case "locrian":
            chordProgressions = state.locrianProgressions;
            break;
          case "minor pentatonic":
            chordProgressions = state.minorPentatonicProgressions;
            break;
          case "minor blues":
            chordProgressions = state.minorBluesProgressions;
            break;
          case "major pentatonic":
            chordProgressions = state.majorPentatonicProgressions;
            break;
          case "major blues":
            chordProgressions = state.majorBluesProgressions;
            break;
          case "harmonic minor":
            chordProgressions = state.harmonicProgressions;
            break;
          case "melodic minor":
            chordProgressions = state.melodicMinorProgressions;
            break;
          default:
            chordProgressions = [];
        }
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
    saveActiveSong({ commit }) {
      commit("SAVE_ACTIVE_SONG");
    },
  },
  getters: {
    getAvailableProgressions(state) {
      return state.chordProgressions;
    },
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
