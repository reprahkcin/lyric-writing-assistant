<template>
  <div class="card bg-light text-dark mb-5">
    <div class="card-header bg-dark text-light">
      <p class="my-auto fw-bold text-start">Plain Text Layout</p>
    </div>
    <div class="card-body text-start">
      <pre>{{ formattedSong }}</pre>
    </div>
    <div class="card-footer text-end">
      <button class="btn btn-primary btn-sm fw-bold" @click="copyToClipboard">
        Copy to Clipboard
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PlainTextLayout",
  computed: {
    ...mapGetters({ activeSong: "getActiveSong" }), // Map Vuex getter to get the active song
    formattedSong() {
      // Format the song details into a plain text string
      if (!this.activeSong) return ""; // Return an empty string if no active song
      let result = `Title: ${this.activeSong.title}\n`; // Add the song title
      result += `Mood: ${this.activeSong.mood}\n`; // Add the song mood
      result += `Narrative Outline: ${this.activeSong.narrativeOutline}\n`; // Add the narrative outline
      result += `Hook: ${this.activeSong.hook}\n\n`; // Add the song hook
      this.activeSong.sections.forEach((section) => {
        // Iterate over each section of the song
        result += `${section.type.toUpperCase()}\n\n`; // Add the section type in uppercase
        section.lines.forEach((line) => {
          // Iterate over each line in the section
          result += `${line}\n\n`; // Add the line
        });
        result += `\n`; // Add a newline after each section
      });
      return result; // Return the formatted song string
    },
  },
  methods: {
    copyToClipboard() {
      // Copy the formatted song to the clipboard
      const el = document.createElement("textarea"); // Create a temporary textarea element
      el.value = this.formattedSong; // Set its value to the formatted song
      document.body.appendChild(el); // Append the textarea to the document body
      el.select(); // Select the textarea content
      document.execCommand("copy"); // Execute the copy command
      document.body.removeChild(el); // Remove the textarea from the document body
    },
  },
};
</script>
