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
          <textarea
            class="form-control input-off-white"
            rows="10"
            placeholder="Brainstorming area..."
            v-model="brainstormingText"
          ></textarea>
          <div class="input-group mt-2">
            <input
              type="text"
              class="form-control input-off-white"
              placeholder="Rhymebrain.com query"
              v-model="rhymeQuery"
            />
            <button class="btn btn-outline-custom" @click="fetchRhymes">
              <span class="bi bi-search"></span>
            </button>
          </div>
          <div
            v-if="rhymes.length"
            class="mt-2 alert alert-info position-relative"
            style="max-height: 10em; overflow-y: auto"
          >
            <button
              type="button"
              class="btn-close position-absolute top-0 end-0 m-2"
              aria-label="Close"
              @click="rhymes = []"
            ></button>
            <ul class="list-unstyled text-start">
              <li v-for="(rhyme, index) in rhymes" :key="index">
                {{ rhyme.word }}
              </li>
            </ul>
            <p>
              Rhyme results are provided by
              <a href="https://rhymebrain.com">RhymeBrain.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";

export default {
  emits: ["update-section", "remove-section", "move-section"],
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
  },
  data() {
    return {
      localLines: [...this.section.lines], // Local copy of section lines
      sectionNarrative: this.section.sectionNarrative || "", // Local copy of section narrative
      chordProgression: this.section.chordProgression || "", // Local copy of chord progression
      brainstormingText: this.section.brainstormingText || "", // Local copy of brainstorming text
      rhymeQuery: "",
      rhymes: [],
    };
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
    updateSection() {
      this.$store.dispatch("updateSection", {
        songId: this.section.songId,
        section: {
          ...this.section,
          lines: this.localLines,
          sectionNarrative: this.sectionNarrative,
          chordProgression: this.chordProgression,
          brainstormingText: this.brainstormingText,
        },
      });
      // No need to call saveStateToFirestore here
    },
    async fetchRhymes() {
      if (this.rhymeQuery.trim() === "") {
        this.rhymes = [];
        return;
      }
      try {
        const response = await fetch(
          `https://rhymebrain.com/talk?function=getRhymes&word=${this.rhymeQuery}`
        );
        const data = await response.json();
        const oneSyllable = data
          .filter((word) => word.syllables == 1)
          .slice(0, 20);
        const twoSyllable = data
          .filter((word) => word.syllables == 2)
          .slice(0, 10);
        const threePlusSyllable = data
          .filter((word) => word.syllables >= 3)
          .slice(0, 5);
        this.rhymes = [
          ...oneSyllable,
          ...twoSyllable,
          ...threePlusSyllable,
        ].map((word) => ({
          word: word.word,
          syllables: word.syllables,
        }));
        console.log("Rhymes fetched:", this.rhymes);
      } catch (error) {
        console.error("Error fetching rhymes:", error);
      }
    },
  },
  watch: {
    localLines: {
      handler(newLines) {
        this.$emit("update-section", {
          ...this.section,
          lines: newLines,
        });
        this.updateSection(); // Update section in Vuex and Firestore
      },
      deep: true,
    },
    sectionNarrative(newNarrative) {
      this.$emit("update-section", {
        ...this.section,
        sectionNarrative: newNarrative,
      });
      this.updateSection(); // Update section in Vuex and Firestore
    },
    brainstormingText(newText) {
      this.$emit("update-section", {
        ...this.section,
        brainstormingText: newText,
      });
      this.updateSection(); // Update section in Vuex and Firestore
    },
    chordProgression(newProgression) {
      this.$emit("update-section", {
        ...this.section,
        chordProgression: newProgression,
      });
      this.updateSection(); // Update section in Vuex and Firestore
    },
  },
};
</script>
<style scoped></style>
