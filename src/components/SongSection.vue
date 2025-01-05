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
              <a
                href="https://hookpad.hooktheory.com/"
                target="_blank"
                class="btn btn-outline-custom btn-sm py-0 ms-2"
                title="Open Hookpad by Hooktheory in a new tab"
              >
                <span class="bi bi-box-arrow-up-right">
                  <span class="ms-2">Hookpad</span></span
                >
              </a>
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
        <div class="col-12 col-md-4 order-1 order-md-2 mb-2 mb-md-0">
          <RhymeThesaurusPanel />
          <textarea
            class="form-control input-off-white"
            rows="10"
            placeholder="Brainstorming area..."
            v-model="localSection.brainstormingText"
          ></textarea>
        </div>
        <div class="col-12 col-md-8 order-2 order-md-1">
          <input
            type="text"
            class="form-control mb-2 input-off-white"
            v-model="localSection.sectionNarrative"
            placeholder="This section is about..."
          />
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control input-off-white"
              v-model="localSection.chordProgression"
              placeholder="Chord progression (e.g., C G Am F)"
            />
            <select
              class="form-select input-off-white"
              v-if="availableProgressions.length"
              v-model="selectedProgression"
              @change="applyChordProgression"
            >
              <option value="" disabled>Select a chord progression</option>
              <option value="custom">Custom Progression</option>
              <option
                v-for="progression in availableProgressions"
                :key="progression['Chord Progression']"
                :value="progression['Chord Progression']"
              >
                {{ progression["Chord Progression"] }} -
                {{ progression["Emotional Quality"] }}
              </option>
            </select>
          </div>
          <hr />
          <div
            v-for="(line, index) in section.lines"
            :key="index"
            class="mb-2 d-flex align-items-center"
          >
            <input
              type="text"
              class="form-control input-off-white"
              v-model="localSection.lines[index]"
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
                :disabled="index === localSection.lines.length - 1"
              >
                ↓
              </button>
            </div>
          </div>
          <button
            class="btn btn-outline-round mx-1"
            @click="removeLine"
            :disabled="localSection.lines.length <= 1"
          >
            <span class="fw-bold bi bi-dash-lg"></span>
          </button>
          <button class="btn btn-outline-round mx-1" @click="addLine">
            <span class="bi bi-plus-lg"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";
import RhymeThesaurusPanel from "@/components/RhymeThesaurusPanel.vue";
import majorProgressions from "@/assets/csv_data/Major_Scale_Progressions.json";
import minorProgressions from "@/assets/csv_data/Minor_Scale_Progressions.json";
import { mapGetters, mapActions } from "vuex";

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
      localSection: {
        lines: [...this.section.lines],
        sectionNarrative: this.section.sectionNarrative || "",
        chordProgression: this.section.chordProgression || "",
        brainstormingText: this.section.brainstormingText || "",
      },
      majorProgressions,
      minorProgressions,
      selectedProgression: "",
      isCustomProgression: false,
    };
  },
  computed: {
    ...mapGetters([
      "getUnsavedChanges",
      "getSongs",
      "getActiveSong",
      "user",
      "getSectionTemplates",
      "getMoods",
      "getKeys",
      "getScales",
      "getPrompts",
      "getChordProgressions",
      "getSelectedScaleNotes",
      "getSelectedScaleChords",
    ]),
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
    availableProgressions() {
      return [...this.majorProgressions, ...this.minorProgressions];
    },
  },
  methods: {
    ...mapActions([
      "setUnsavedChanges",
      "setUser",
      "setSongs",
      "addSong",
      "addSection",
      "deleteSong",
      "updateSong",
      "setActiveSong",
      "updateSection",
      "deleteSection",
      "updateLine",
      "resetStore",
      "saveStateToLocalStorage",
      "loadStateFromLocalStorage",
      "updateChordProgressions",
    ]),
    updateLine(index, newLine) {
      this.$set(this.localSection.lines, index, newLine);
    },
    moveLine(index, direction) {
      if (direction === "up" && index > 0) {
        [this.localSection.lines[index - 1], this.localSection.lines[index]] = [
          this.localSection.lines[index],
          this.localSection.lines[index - 1],
        ];
      } else if (
        direction === "down" &&
        index < this.localSection.lines.length - 1
      ) {
        [this.localSection.lines[index + 1], this.localSection.lines[index]] = [
          this.localSection.lines[index],
          this.localSection.lines[index + 1],
        ];
      }
    },
    confirmRemoveSelf() {
      if (confirm("Are you sure you want to remove this section?")) {
        this.removeSelf();
      }
    },
    removeSelf() {
      this.$emit("remove-section", this.section.id);
    },
    typeColor(type) {
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
      this.localSection.lines.push("");
    },
    removeLine() {
      if (this.localSection.lines.length > 1) {
        this.localSection.lines.pop();
      }
    },
    moveSelf(direction) {
      this.$emit("move-section", direction);
      console.log("moveSelf emitted");
    },
    applyChordProgression() {
      if (this.selectedProgression === "custom") {
        this.isCustomProgression = true;
        return;
      }
      this.isCustomProgression = false;
      if (this.$parent.selectedKey && this.$parent.selectedScale) {
        const key = this.$parent.selectedKey;
        const scale = this.$parent.selectedScale;
        const notes = scale.notes(key);
        const chordMap = {
          I: notes[0],
          ii: notes[1] + "m",
          iii: notes[2] + "m",
          IV: notes[3],
          V: notes[4],
          vi: notes[5] + "m",
          "vii°": notes[6] + "°",
        };
        this.localSection.chordProgression = this.selectedProgression
          .split(" - ")
          .map((roman) => chordMap[roman] || roman)
          .join(" - ");
      } else {
        this.localSection.chordProgression = this.selectedProgression;
      }
    },
    syncLocalData() {
      this.updateSection({
        songId: this.section.songId,
        section: {
          ...this.localSection,
          id: this.section.id,
        },
      });
    },
  },
  watch: {
    localSection: {
      handler() {
        this.syncLocalData();
      },
      deep: true,
    },
    "$parent.selectedKey"() {
      if (!this.isCustomProgression) {
        this.applyChordProgression();
      }
    },
    "$parent.selectedScale"() {
      if (!this.isCustomProgression) {
        this.applyChordProgression();
      }
    },
  },
  mounted() {
    setInterval(this.syncLocalData, 5000);
  },
};
</script>
