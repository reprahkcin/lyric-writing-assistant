<template>
  <div class="card mb-3 shadow-sm bg-card">
    <div
      class="card-body bg-section-card rounded"
      :class="{ 'pt-1': !isMinimized }"
    >
      <div class="row">
        <div class="col">
          <!-- Header/Link/Timer/Control Bar at the top of each section -->
          <div
            class="d-flex justify-content-between align-items-center text-dark-muted"
          >
            <div class="ms-2 fs-5 fw-bold text-capitalize">
              <button
                class="btn btn-outline-custom btn-sm py-0 me-2"
                @click="isMinimized = !isMinimized"
                :title="isMinimized ? 'Maximize' : 'Minimize'"
              >
                <span
                  :class="
                    isMinimized
                      ? 'bi bi-arrows-angle-expand'
                      : 'bi bi-arrows-angle-contract'
                  "
                ></span>
              </button>
              {{ section.type }}
            </div>

            <CountdownTimer
              class="ms-auto me-2 text-dark-muted"
              v-if="!isMinimized"
            />

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
      <hr class="mt-1 mb-3" v-if="!isMinimized" />
      <div class="row" v-if="!isMinimized">
        <!-- Right Column -->
        <div class="col-12 col-md-4 order-1 order-md-2 mb-2 mb-md-0">
          <RhymeThesaurusPanel />
          <textarea
            class="form-control input-off-white"
            rows="10"
            placeholder="Brainstorming area..."
            v-model="brainstormingText"
            @blur="saveModifiedSectionToActiveSongInVuex"
            @input="setUnsavedChanges(true)"
          ></textarea>
        </div>

        <!-- Left Column - They are switched to stack properly -->
        <div class="col-12 col-md-8 order-2 order-md-1">
          <!-- Section Narrative Field -->
          <input
            type="text"
            class="form-control mb-2 input-off-white"
            v-model="sectionNarrative"
            placeholder="This section is about..."
            @blur="saveModifiedSectionToActiveSongInVuex"
            @input="setUnsavedChanges(true)"
          />
          <!-- Chord Progression section -->
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control input-off-white"
              v-model="chordProgression"
              placeholder="Chord progression (e.g., C G Am F)"
              @blur="saveModifiedSectionToActiveSongInVuex"
              @input="setUnsavedChanges(true)"
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
          <!-- All the lines -->
          <div
            v-for="(line, index) in section.lines"
            :key="index"
            class="mb-2 d-flex align-items-center"
          >
            <input
              type="text"
              class="form-control input-off-white"
              v-model="localLines[index]"
              @blur="updateLine(index, localLines[index])"
              @input="setUnsavedChanges(true)"
              :placeholder="`Line ${index + 1}`"
            />
            <!-- Line Movement Controls -->
            <div class="btn-group ms-2 gap-1">
              <button
                class="btn btn-outline-custom btn-sm h-100 my-0"
                @click="
                  moveLine(index, 'up');
                  setUnsavedChanges(true);
                "
                :disabled="index === 0"
              >
                ↑
              </button>
              <button
                class="btn btn-outline-custom btn-sm h-100 my-0"
                @click="
                  moveLine(index, 'down');
                  setUnsavedChanges(true);
                "
                :disabled="index === localLines.length - 1"
              >
                ↓
              </button>
            </div>
          </div>
          <!-- Add/Remove Line Buttons -->
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
      </div>
      <div v-if="!isMinimized">
        <a
          class="btn btn-outline-custom btn-sm py-0 me-2"
          href="https://hookpad.hooktheory.com/"
          target="_blank"
          title="Open
          Hookpad by Hooktheory in a new tab"
        >
          <span class="bi bi-box-arrow-up-right">
            <span class="ms-2">Hookpad</span></span
          >
        </a>
        <!-- Manual Save Button -->
        <button
          class="btn btn-sm py-0 me-2"
          :class="getUnsavedChanges ? 'btn-danger' : 'btn-outline-custom'"
          @click="saveModifiedSectionToActiveSongInVuex"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue"; // Import CountdownTimer component for the headers of each section
import RhymeThesaurusPanel from "@/components/RhymeThesaurusPanel.vue"; // Import RhymeThesaurusPanel component for the right column of each section. API calls are made to the RhymeBrain API to get rhymes and synonyms for the brainstorming text.

import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    sectionId: {
      type: Number,
      required: true,
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CountdownTimer,
    RhymeThesaurusPanel,
  },
  data() {
    return {
      localLines: [], // Local copy of the lines
      sectionNarrative: "", // Local copy of section narrative
      chordProgression: "", // Local copy of chord progression
      brainstormingText: "", // Local copy of brainstorming text
      selectedProgression: "", // Add selectedProgression to data
      isCustomProgression: false, // Track if the progression is custom
      isMinimized: true, // Track if the section is minimized
    };
  },
  computed: {
    ...mapGetters({
      activeSong: "getActiveSong",
      getUnsavedChanges: "getUnsavedChanges",
      availableProgressions: "getAvailableProgressions",
    }),
    section() {
      return this.activeSong?.sections.find((sec) => sec.id === this.sectionId);
    },
  },
  methods: {
    ...mapActions([
      "updateActiveSongSection", // Updates a section in the activeSong
      "moveActiveSongSection", // Moves a section up or down within the activeSong
      "deleteActiveSongSection", // Deletes a section from the activeSong
      "updateActiveSongLine", // Updates a line in the activeSong
      "setUnsavedChanges", // Lets the app know there are unsaved changes
      "addActiveSongLine", // Adds a new line to the activeSong
      "deleteActiveSongLine",
    ]),
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
      // Destrcutive action, confirm before removing
      if (confirm("Are you sure you want to remove this section?")) {
        this.removeSelf();
      }
    },
    removeSelf() {
      // Remove the section from the activeSong
      // Delete the section from the active song
      this.deleteActiveSongSection(this.section.id);
    },
    addLine() {
      // Add a new line to the section
      this.addActiveSongLine({
        sectionId: this.section.id,
        newLine: "",
      });
    },
    removeLine() {
      // Remove the last line from the section if there is more than one line
      if (this.localLines.length > 1) {
        this.deleteActiveSongLine({
          sectionId: this.section.id,
          lineIndex: this.localLines.length - 1,
        });
      }
    },
    moveSelf(direction) {
      // Move the section up or down within the activeSong
      this.$emit("move-section", direction);
      console.log("moveSelf emitted");
    },
    saveModifiedSectionToActiveSongInVuex() {
      // Save the modified section to the activeSong in Vuex
      const updatedSection = {
        ...this.section,
        lines: this.localLines,
        sectionNarrative: this.sectionNarrative,
        chordProgression: this.chordProgression,
        selectedProgression: this.selectedProgression,
        brainstormingText: this.brainstormingText,
        isMinimized: this.isMinimized, // Include isMinimized
      };
      this.updateActiveSongSection(updatedSection);
      this.setUnsavedChanges(false);
    },
    applyChordProgression() {
      // Apply the selected chord progression to the section - Converts interval Roman numerals to chords
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
          "i°": notes[0] + "°",
          II: notes[1],
          ii: notes[1] + "m",
          "ii°": notes[1] + "°",
          iii: notes[2] + "m",
          "III+": notes[2] + "+",
          IV: notes[3],
          "iv°": notes[3] + "°",
          V: notes[4],
          "v°": notes[4] + "°",
          vi: notes[5] + "m",
          "vii°": notes[6] + "°",
          i: notes[0] + "m",
          III: notes[2],
          iv: notes[3] + "m",
          v: notes[4] + "m",
          VI: notes[5],
          VII: notes[6],
        };

        this.chordProgression = this.selectedProgression
          .split(" - ")
          .map((roman) => chordMap[roman] || roman)
          .join(" - ");
      } else {
        this.chordProgression = this.selectedProgression;
      }
    },
    updateLine(index, newLine) {
      // Update a line in the section
      this.updateActiveSongLine({
        sectionId: this.section.id,
        lineIndex: index,
        newLine,
      });
    },
  },
  watch: {
    isMinimized() {
      this.saveModifiedSectionToActiveSongInVuex();
    },
    section: {
      handler(newSection) {
        if (newSection) {
          this.localLines = [...newSection.lines];
          this.sectionNarrative = newSection.sectionNarrative || "";
          this.chordProgression = newSection.chordProgression || "";
          this.brainstormingText = newSection.brainstormingText || "";
          this.selectedProgression = newSection.selectedProgression || "";
          this.isMinimized = newSection.isMinimized || false; // Load isMinimized
        }
      },
      immediate: true,
      deep: true,
    },
    // watch for changes in this.activeSong.key and this.activeSong.scale, and update the chord progression with applyChordProgression
    activeSong: {
      handler() {
        this.applyChordProgression();
      },
      immediate: true,
    },
  },
};
</script>
