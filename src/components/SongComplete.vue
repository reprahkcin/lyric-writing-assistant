<template>
  <div class="card bg-card text-dark-muted mb-3 shadow-sm">
    <div class="card-body">
      <h1 class="fs-4 my-auto fw-bold text-start">Song</h1>
      <hr />
      <div class="text-start">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="songTitle" class="form-label fw-bold">Title</label>
              <input
                type="text"
                class="form-control input-off-white"
                id="songTitle"
                v-model="localSong.title"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="songMood" class="form-label fw-bold">Mood</label>
              <select
                class="form-select input-off-white"
                id="songMood"
                v-model="localSong.mood"
              >
                <option value="" disabled>Select a mood</option>
                <option
                  v-for="mood in moods"
                  :key="mood.mood"
                  :value="mood.mood"
                >
                  {{ mood.mood }}
                </option>
              </select>
              <small
                v-if="selectedMoodImplication"
                class="text-muted ms-2 mb-0"
              >
                Musical Implication: {{ selectedMoodImplication }}
              </small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="songHook" class="form-label fw-bold">Hook</label>
              <input
                type="text"
                class="form-control input-off-white"
                id="songHook"
                v-model="localSong.hook"
                placeholder="Catchy phrase or refrain"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="songTheme" class="form-label fw-bold">Theme</label>
              <input
                type="text"
                class="form-control input-off-white"
                id="songTheme"
                v-model="localSong.theme"
                placeholder="Briefly, this song is about..."
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="songNarrative" class="form-label fw-bold"
            >Narrative Outline</label
          >
          <textarea
            class="form-control input-off-white"
            id="songNarrative"
            rows="3"
            v-model="localSong.narrativeOutline"
            placeholder="This song is about..."
            @input="autoResize"
            ref="narrativeTextarea"
          ></textarea>
        </div>
      </div>
      <div class="mb-3">
        <div class="card bg-card shadow-sm">
          <div class="card-body">
            <div class="text-start text-dark-muted">
              <label for="templateDropdown" class="form-label fw-bold"
                >Arrangement Template</label
              >
            </div>
            <div v-if="selectedTemplate" class="mb-3 text-start">
              <span
                v-html="arrangementVisualized(selectedTemplateArrangement)"
              ></span>
            </div>
            <select
              class="form-select"
              id="templateDropdown"
              v-model="selectedTemplate"
            >
              <option value="" disabled>Select a template</option>
              <option
                v-for="template in sectionTemplates"
                :key="template.name"
                :value="template.name"
              >
                {{ template.name }} -
                {{ arrangementText(template.arrangement) }}
              </option>
            </select>
            <button
              class="btn btn-outline-custom btn-sm fw-bold mt-2"
              @click="confirmApplyTemplate"
            >
              Apply Template
            </button>
          </div>
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

      <button
        class="btn btn-outline-custom btn-sm fw-bold mx-1"
        @click="addSection('verse')"
      >
        Add Verse
      </button>
      <button
        class="btn btn-outline-custom btn-sm fw-bold mx-1"
        @click="addSection('chorus')"
      >
        Add Chorus
      </button>
      <button
        class="btn btn-outline-custom btn-sm fw-bold mx-1"
        @click="addSection('bridge')"
      >
        Add Bridge
      </button>
      <button
        class="btn btn-outline-custom btn-sm fw-bold mx-1"
        @click="activatePlainTextView"
      >
        {{ plainTextActive ? "Hide Plain Text" : "Show Plain Text" }}
      </button>
    </div>
  </div>
</template>

<script>
import SongSection from "@/components/SongSection.vue";
import sectionTemplates from "@/templates/sectionTemplates"; // Import section templates
import moods from "@/templates/moods"; // Import moods
import { mapActions } from "vuex";

export default {
  name: "SongComplete",
  components: {
    SongSection,
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
      localSong: { ...this.song, sections: this.song.sections || [] }, // Ensure sections is always an array
      selectedTemplate: "", // Add selectedTemplate to data
      sectionTemplates, // Add sectionTemplates to data
      moods, // Add moods to data
    };
  },
  computed: {
    orderedSections() {
      // Order sections by their order property
      return (this.localSong.sections || [])
        .slice()
        .sort((a, b) => a.order[0] - b.order[0]);
    },
    selectedTemplateArrangement() {
      const template = this.sectionTemplates.find(
        (t) => t.name === this.selectedTemplate
      );
      return template ? template.arrangement : [];
    },
    selectedMoodImplication() {
      const mood = this.moods.find((m) => m.mood === this.localSong.mood);
      return mood ? mood.implications : "";
    },
  },
  watch: {
    song: {
      handler(newSong) {
        // Update localSong when the song prop changes
        this.localSong = { ...newSong, sections: newSong.sections || [] }; // Ensure sections is always an array
        console.log("Updated localSong:", this.localSong);
        this.$nextTick(() => {
          this.autoResize({ target: this.$refs.narrativeTextarea });
        });
      },
      immediate: true,
    },
    localSong: {
      handler(newSong) {
        // Update the song in the store when localSong changes
        this.updateSong(newSong);
        // No need to call saveStateToFirestore here
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(["updateSong"]),
    arrangementVisualized(arrangement) {
      // Visualize the arrangement of a template with color-coded badges
      return arrangement
        .map((section) => {
          switch (section) {
            case "v":
              return '<span class="badge bg-primary me-1">Verse</span>';
            case "c":
              return '<span class="badge bg-success me-1">Chorus</span>';
            case "b":
              return '<span class="badge bg-danger me-1">Bridge</span>';
            default:
              return "";
          }
        })
        .join("");
    },
    arrangementText(arrangement) {
      // Convert the arrangement to a text representation
      return arrangement
        .map((section) => {
          switch (section) {
            case "v":
              return "Verse";
            case "c":
              return "Chorus";
            case "b":
              return "Bridge";
            default:
              return "";
          }
        })
        .join(" - ");
    },
    confirmApplyTemplate() {
      if (
        confirm(
          "Are you sure you want to apply this template? This will clear all existing sections."
        )
      ) {
        this.applyTemplate();
      }
    },
    applyTemplate() {
      const template = this.sectionTemplates.find(
        (t) => t.name === this.selectedTemplate
      );
      if (template) {
        this.localSong.sections = template.arrangement.map((type, index) => ({
          id: index + 1,
          order: [index],
          type: this.sectionLabel(type),
          lines: ["", "", "", ""],
          sectionNarrative: "",
          brainstormingText: "",
        }));
        this.updateSong(this.localSong); // Trigger Vuex store update
      }
    },
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
        // Swap the current section with the previous section if not at the top
        const temp = this.localSong.sections[index];
        this.localSong.sections[index] = this.localSong.sections[index - 1];
        this.localSong.sections[index - 1] = temp;
      } else if (
        direction === "down" &&
        index < this.localSong.sections.length - 1
      ) {
        // Swap the current section with the next section if not at the bottom
        const temp = this.localSong.sections[index];
        this.localSong.sections[index] = this.localSong.sections[index + 1];
        this.localSong.sections[index + 1] = temp;
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
    badgeClass(section) {
      // Return the appropriate badge class based on the section type
      switch (section) {
        case "v":
          return "bg-primary";
        case "c":
          return "bg-success";
        case "b":
          return "bg-warning";
        default:
          return "bg-secondary";
      }
    },
    sectionLabel(section) {
      // Return the appropriate label based on the section type
      switch (section) {
        case "v":
          return "Verse";
        case "c":
          return "Chorus";
        case "b":
          return "Bridge";
        default:
          return "Unknown";
      }
    },
    autoResize(event) {
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
  },
  created() {
    console.log("Song prop:", this.song);
  },
};
</script>
