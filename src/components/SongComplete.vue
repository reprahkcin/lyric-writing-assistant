<template>
  <div class="card bg-neutral-light text-neutral-dark mb-3 border border-dark">
    <div
      class="card-header bg-neutral-dark d-flex justify-content-between align-items-center"
    >
      <p class="my-auto fw-bold text-start text-light">Song</p>
      <CountdownTimer class="ms-auto" />
    </div>
    <div class="card-body">
      <div class="text-start">
        <div class="mb-3">
          <label for="songTitle" class="form-label fw-bold">Title</label>
          <input
            type="text"
            class="form-control"
            id="songTitle"
            v-model="localSong.title"
          />
        </div>
        <div class="mb-3">
          <label for="songMood" class="form-label fw-bold">Mood</label>
          <input
            type="text"
            class="form-control"
            id="songMood"
            v-model="localSong.mood"
            placeholder="E.g. happy, sad, angry, etc."
          />
        </div>
        <div class="mb-3">
          <label for="songNarrative" class="form-label fw-bold"
            >Narrative Outline</label
          >
          <textarea
            class="form-control"
            id="songNarrative"
            rows="3"
            v-model="localSong.narrativeOutline"
            placeholder="This song is about..."
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="songHook" class="form-label fw-bold">Hook</label>
          <input
            type="text"
            class="form-control"
            id="songHook"
            v-model="localSong.hook"
            placeholder="Catchy phrase or refrain"
          />
        </div>
      </div>
      <div v-for="(section, index) in orderedSections" :key="section.id">
        <SongSection
          :section="section"
          :isFirst="index === 0"
          :isLast="index === orderedSections.length - 1"
          @update-line="updateLine"
          @update-section="updateSection"
          @remove-section="removeSection"
          @move-section="(direction) => moveSection(index, direction)"
        />
      </div>
    </div>
    <div class="card-footer text-end">
      <button
        class="btn btn-success btn-lg fw-bold mx-2"
        @click="addSection('verse')"
      >
        Add Verse
      </button>
      <button
        class="btn btn-success btn-lg fw-bold mx-2"
        @click="addSection('chorus')"
      >
        Add Chorus
      </button>
      <button
        class="btn btn-success btn-lg fw-bold mx-2"
        @click="addSection('bridge')"
      >
        Add Bridge
      </button>
      <button
        class="btn btn-primary btn-lg text-light fw-bold mx-2"
        @click="activatePlainTextView"
      >
        {{ plainTextActive ? "Hide Plain Text" : "Show Plain Text" }}
      </button>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";
import SongSection from "@/components/SongSection.vue";
import { mapActions } from "vuex";

export default {
  name: "SongComplete",
  components: {
    SongSection,
    CountdownTimer,
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
    plainTextActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      localSong: { ...this.song },
    };
  },
  computed: {
    orderedSections() {
      // Order sections by their order property
      return this.localSong.sections
        .slice()
        .sort((a, b) => a.order[0] - b.order[0]);
    },
  },
  watch: {
    song: {
      handler(newSong) {
        // Update localSong when the song prop changes
        this.localSong = { ...newSong };
      },
      immediate: true,
    },
    localSong: {
      handler(newSong) {
        // Update the song in the store when localSong changes
        this.updateSong(newSong);
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(["updateSong"]),
    updateLine({ sectionId, index, newLine }) {
      // Update a specific line in a section
      const section = this.localSong.sections.find(
        (sec) => sec.id === sectionId
      );
      if (section) {
        this.$set(section.lines, index, newLine);
      }
    },
    addSection(type) {
      // Add a new section to the song
      const newSection = {
        id: this.localSong.sections.length + 1,
        order: [this.localSong.sections.length],
        type,
        lines: ["", "", "", ""],
        sectionNarrative: "",
        brainstormingText: "",
      };
      this.localSong.sections.push(newSection);
    },
    updateSection(section) {
      // Update an existing section
      const index = this.localSong.sections.findIndex(
        (sec) => sec.id === section.id
      );
      if (index !== -1) {
        this.localSong.sections.splice(index, 1, section);
      }
    },
    removeSection(sectionId) {
      // Remove a section from the song
      this.localSong.sections = this.localSong.sections.filter(
        (section) => section.id !== sectionId
      );
    },
    moveSection(index, direction) {
      console.log("moveSection called");
      console.log(index, direction);
      if (direction === "up" && index > 0) {
        [this.localSong.sections[index - 1], this.localSong.sections[index]] = [
          this.localSong.sections[index],
          this.localSong.sections[index - 1],
        ];
      } else if (
        direction === "down" &&
        index < this.localSong.sections.length - 1
      ) {
        [this.localSong.sections[index + 1], this.localSong.sections[index]] = [
          this.localSong.sections[index],
          this.localSong.sections[index + 1],
        ];
      }
      // Update the order property of each section
      this.localSong.sections.forEach((section, idx) => {
        section.order = [idx];
      });
      this.updateSong(this.localSong); // Trigger Vuex store update
    },
    activatePlainTextView() {
      // Emit an event to toggle the plain text view
      this.$emit("toggle-plain-text");
    },
  },
};
</script>
