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

      <!-- Song Structure Template Section -->
      <div class="card bg-light mb-3">
        <div class="card-body py-2">
          <h6 class="fw-bold text-dark-muted mb-2">
            <span class="bi bi-diagram-3 me-1"></span>
            Song Structure Template
          </h6>
          <div class="row g-2 align-items-end">
            <div class="col-md-6">
              <div class="form-floating">
                <select
                  class="form-select form-select-sm"
                  id="templateDropdown"
                  v-model="selectedTemplate"
                  @change="manualSaveState"
                >
                  <option value="" disabled>Select a template</option>
                  <option
                    v-for="template in getSectionTemplates"
                    :key="template.name"
                    :value="template.name"
                  >
                    {{ template.name }} -
                    {{ arrangementText(template.arrangement) }}
                  </option>
                </select>
                <label for="templateDropdown" class="small">Template</label>
              </div>
            </div>
            <div class="col-md-2">
              <button
                class="btn btn-outline-custom btn-sm fw-bold w-100"
                @click="confirmApplyTemplate"
              >
                Apply
              </button>
            </div>
            <div class="col-md-4">
              <div v-if="selectedTemplate" class="d-flex align-items-center">
                <span class="small text-muted me-2">Preview:</span>
                <span
                  v-html="arrangementVisualized(selectedTemplateArrangement)"
                ></span>
              </div>
            </div>
          </div>
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
import { mapActions, mapGetters } from "vuex";
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
  data() {
    return {
      selectedTemplate: "",
    };
  },
  computed: {
    ...mapGetters(["getSectionTemplates"]),
    orderedSections() {
      return (this.song?.sections || [])
        .slice()
        .sort((a, b) => a.order[0] - b.order[0]);
    },
    selectedTemplateArrangement() {
      const template = this.getSectionTemplates.find(
        (t) => t.name === this.selectedTemplate
      );
      return template ? template.arrangement : [];
    },
  },
  methods: {
    ...mapActions([
      "addActiveSongSection",
      "saveStateToLocalStorage",
      "setUnsavedChanges",
      "setActiveSong",
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
    manualSaveState() {
      this.saveStateToLocalStorage();
      this.setUnsavedChanges(false);
    },
    arrangementVisualized(arrangement) {
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
      const template = this.getSectionTemplates.find(
        (t) => t.name === this.selectedTemplate
      );
      if (!template) {
        console.error("Template not found");
        return;
      }
      const sections = template.arrangement.map((type, index) => {
        let sectionType;
        if (type === "v") {
          sectionType = "Verse";
        } else if (type === "c") {
          sectionType = "Chorus";
        } else {
          sectionType = "Bridge";
        }
        return {
          id: new Date().getTime() + index,
          order: [index],
          type: sectionType,
          lines: ["", "", "", ""],
          sectionNarrative: "",
          chordProgression: "",
          selectedChordProgression: "",
          brainstormingText: "",
          isMinimized: true,
        };
      });
      this.setActiveSong({
        ...this.song,
        sections,
      });
      this.saveStateToLocalStorage();
    },
  },
};
</script>
