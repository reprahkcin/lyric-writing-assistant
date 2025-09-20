<template>
  <div class="card bg-card text-dark-muted shadow-sm">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="card-title fw-bold mb-0">
          <span class="bi bi-music-note-list me-2"></span>
          Song Sections
        </h5>
        <div class="btn-group btn-group-sm">
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="createSection('verse')"
          >
            + Verse
          </button>
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="createSection('chorus')"
          >
            + Chorus
          </button>
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="createSection('bridge')"
          >
            + Bridge
          </button>
        </div>
      </div>

      <div v-if="song && song.sections && song.sections.length > 0">
        <div v-for="(section, index) in orderedSections" :key="section.id">
          <SongSection
            :sectionId="section.id"
            :isFirst="index === 0"
            :isLast="index === orderedSections.length - 1"
          />
        </div>
      </div>

      <div v-else class="text-center text-muted py-5">
        <span class="bi bi-music-note-beamed fs-1 d-block mb-3"></span>
        <h6>No sections yet</h6>
        <p class="small">Add your first section to start writing lyrics</p>
        <div class="btn-group btn-group-sm">
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="createSection('verse')"
          >
            + Verse
          </button>
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="createSection('chorus')"
          >
            + Chorus
          </button>
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="createSection('bridge')"
          >
            + Bridge
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SongSection from "@/components/SongSection.vue";

export default {
  name: "SongSectionsTab",
  components: {
    SongSection,
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  computed: {
    orderedSections() {
      return (this.song?.sections || [])
        .slice()
        .sort((a, b) => a.order[0] - b.order[0]);
    },
  },
  methods: {
    ...mapActions([
      "addActiveSongSection",
      "saveStateToLocalStorage",
      "setUnsavedChanges",
    ]),
    createSection(type) {
      const newSection = {
        id: new Date().getTime(),
        order: [this.song.sections.length],
        type: this.sectionLabel(type),
        lines: ["", "", "", ""],
        sectionNarrative: "",
        brainstormingText: "",
        chordProgression: "",
        selectedChordProgression: "",
      };
      this.addActiveSongSection(newSection);
    },
    sectionLabel(section) {
      switch (section) {
        case "verse":
          return "Verse";
        case "chorus":
          return "Chorus";
        case "bridge":
          return "Bridge";
        default:
          return "Unknown";
      }
    },
  },
};
</script>
