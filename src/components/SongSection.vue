<template>
  <div class="card mb-3 shadow-sm bg-card">
    <div class="card-body bg-section-card pt-1 rounded">
      <div class="row">
        <div class="col">
          <div
            class="d-flex justify-content-between align-items-center text-dark-muted"
          >
            <div class="ms-2 fs-5 fw-bold text-capitalize">
              {{ section.type }}
              <button
                v-if="section.type === 'chorus'"
                class="btn btn-outline-custom btn-sm py-0 ms-2"
                @click="syncChorusSections"
              >
                <span class="bi bi-link-45deg"></span>
              </button>
            </div>
            <CountdownTimer class="ms-auto me-2 text-dark-muted" />
            <div>
              <button
                class="btn btn-outline-custom fw-bold btn-sm py-0 me-2"
                @click="confirmRemoveSelf"
              >
                <span class="bi bi-trash-fill"></span>
              </button>
              <div class="btn-group gap-1">
                <button
                  class="btn btn-outline-custom fw-bold py-0"
                  @click="moveSelf('up')"
                  :disabled="isFirst"
                >
                  ↑
                </button>
                <button
                  class="btn btn-outline-custom fw-bold py-0"
                  @click="moveSelf('down')"
                  :disabled="isLast"
                >
                  ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-1 mb-3" />
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control mb-2 input-off-white"
            v-model="sectionNarrative"
            placeholder="This section is about..."
          />
          <input
            type="text"
            class="form-control mb-2 input-off-white"
            v-model="chordProgression"
            placeholder="Chord progression (e.g., C G Am F)"
          />
          <div
            v-for="(line, index) in section.lines"
            :key="index"
            class="mb-2 d-flex align-items-center"
          >
            <input
              type="text"
              class="form-control input-off-white"
              v-model="localLines[index]"
              :placeholder="`Line ${index + 1}`"
            />
            <div class="btn-group ms-2 gap-1">
              <button
                class="btn btn-outline-custom btn-sm h-100 my-0"
                @click="moveLine(index, 'up')"
                :disabled="index === 0"
              >
                ↑
              </button>
              <button
                class="btn btn-outline-custom btn-sm h-100 my-0"
                @click="moveLine(index, 'down')"
                :disabled="index === localLines.length - 1"
              >
                ↓
              </button>
            </div>
          </div>
          <button
            class="btn btn-outline-round mx-1"
            @click="removeLine"
            :disabled="localLines.length <= 1"
          >
            <span class="fw-bold bi bi-dash-lg"></span>
          </button>
          <button class="btn btn-outline-round mx-1" @click="addLine">
            <span class="bi bi-plus-lg"></span>
          </button>
        </div>
        <div class="col-4">
          <RhymeThesaurusPanel />
          <textarea
            class="form-control input-off-white"
            rows="10"
            placeholder="Brainstorming area..."
            v-model="brainstormingText"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";
import RhymeThesaurusPanel from "@/components/RhymeThesaurusPanel.vue";
import { debounce } from "lodash";

export default {
  emits: [
    "update-section",
    "remove-section",
    "move-section",
    "sync-chorus-sections",
  ],
  props: {
    section: {
      type: Object,
      required: true,
    },
    isFirst: {
      type: Boolean,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    CountdownTimer,
    RhymeThesaurusPanel,
  },
  data() {
    return {
      localLines: [...this.section.lines], // Local copy of section lines
      sectionNarrative: this.section.sectionNarrative || "", // Local copy of section narrative
      chordProgression: this.section.chordProgression || "", // Local copy of chord progression
      brainstormingText: this.section.brainstormingText || "", // Local copy of brainstorming text
    };
  },
  computed: {
    syncedChorus() {
      if (this.section.type === "chorus") {
        const chorusSections = this.$store.state.songs
          .find((song) => song.id === this.section.songId)
          .sections.filter((sec) => sec.type === "chorus");
        if (chorusSections.length > 0) {
          return chorusSections[0];
        }
      }
      return this.section;
    },
  },
  methods: {
    updateLine(index, newLine) {
      // Update a specific line in the section
      this.$set(this.localLines, index, newLine);
    },
    moveLine(index, direction) {
      // Move a line up or down within the section
      if (direction === "up" && index > 0) {
        // Swap the current line with the previous line if not at the top
        [this.localLines[index - 1], this.localLines[index]] = [
          this.localLines[index],
          this.localLines[index - 1],
        ];
      } else if (direction === "down" && index < this.localLines.length - 1) {
        // Swap the current line with the next line if not at the bottom
        [this.localLines[index + 1], this.localLines[index]] = [
          this.localLines[index],
          this.localLines[index + 1],
        ];
      }
    },
    confirmRemoveSelf() {
      if (confirm("Are you sure you want to remove this section?")) {
        this.removeSelf();
      }
    },
    removeSelf() {
      // Emit an event to remove this section
      this.$emit("remove-section", this.section.id);
    },
    typeColor(type) {
      // Return the appropriate color class based on the section type
      switch (type) {
        case "verse":
          return "bg-verse";
        case "chorus":
          return "bg-chorus";
        case "bridge":
          return "bg-bridge";
        default:
          return "bg-secondary text-white";
      }
    },
    addLine() {
      // Add a new line to the section
      this.localLines.push("");
    },
    removeLine() {
      // Remove the last line from the section if there is more than one line
      if (this.localLines.length > 1) {
        this.localLines.pop();
      }
    },
    moveSelf(direction) {
      this.$emit("move-section", direction);
      console.log("moveSelf emitted");
    },
    updateSection: debounce(function () {
      this.$emit("update-section", {
        ...this.section,
        lines: this.localLines,
        sectionNarrative: this.sectionNarrative,
        chordProgression: this.chordProgression,
        brainstormingText: this.brainstormingText,
      });
    }, 1000), // Debounce updates to 1 second
    syncChorusSections() {
      console.log("syncChorusSections clicked for section:", this.section.id);
      const chorusSnapshot = {
        lines: [...this.localLines],
        sectionNarrative: this.sectionNarrative,
        chordProgression: this.chordProgression,
        brainstormingText: this.brainstormingText,
      };
      console.log("Chorus snapshot:", chorusSnapshot);
      this.$emit("sync-chorus-sections", {
        sectionId: this.section.id,
        snapshot: chorusSnapshot,
      });
      this.saveState();
    },
    saveState() {
      this.$store.dispatch("saveStateToFirestore");
    },
  },
  watch: {
    localLines: {
      handler() {
        this.updateSection();
      },
      deep: true,
    },
    sectionNarrative() {
      this.updateSection();
    },
    brainstormingText() {
      this.updateSection();
    },
    chordProgression() {
      this.updateSection();
    },
  },
};
</script>
