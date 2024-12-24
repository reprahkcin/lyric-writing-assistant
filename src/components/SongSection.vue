<template>
  <div class="card mb-3 shadow">
    <div
      class="card-header d-flex justify-content-between align-items-center"
      :class="typeColor(section.type)"
    >
      <div class="fw-bold text-capitalize">{{ section.type }}</div>
      <div>
        <button
          class="btn btn-danger fw-bold btn-sm py-0 border border-light border-2 me-2"
          @click="confirmRemoveSelf"
        >
          <span class="bi bi-trash-fill"></span>
        </button>
        <div class="btn-group">
          <button
            class="btn btn-neutral-dark fw-bold py-0 border border-light border-2"
            :class="typeColor(section.type)"
            @click="moveSelf('up')"
            :disabled="isFirst"
          >
            ↑
          </button>
          <button
            class="btn btn-neutral-dark fw-bold py-0 border border-light border-2"
            :class="typeColor(section.type)"
            @click="moveSelf('down')"
            :disabled="isLast"
          >
            ↓
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control mb-2"
            v-model="sectionNarrative"
            placeholder="This section is about..."
          />
          <div
            v-for="(line, index) in section.lines"
            :key="index"
            class="mb-2 d-flex align-items-center"
          >
            <input
              type="text"
              class="form-control"
              v-model="localLines[index]"
              :placeholder="`Line ${index + 1}`"
            />
            <div class="btn-group ms-2">
              <button
                class="btn btn-sm btn-warning"
                @click="moveLine(index, 'up')"
                :disabled="index === 0"
              >
                ↑
              </button>
              <button
                class="btn btn-sm btn-warning"
                @click="moveLine(index, 'down')"
                :disabled="index === localLines.length - 1"
              >
                ↓
              </button>
            </div>
          </div>
          <button
            class="btn btn-outline-danger btn-sm rounded-circle mx-1"
            @click="removeLine"
            :disabled="localLines.length <= 1"
          >
            <span class="fw-bold bi bi-dash-lg"></span>
          </button>
          <button
            class="btn btn-outline-success btn-sm rounded-circle mx-1"
            @click="addLine"
          >
            <span class="bi bi-plus-lg"></span>
          </button>
        </div>
        <div class="col-4">
          <textarea
            class="form-control"
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
  data() {
    return {
      localLines: [...this.section.lines], // Local copy of section lines
      sectionNarrative: this.section.sectionNarrative || "", // Local copy of section narrative
      brainstormingText: this.section.brainstormingText || "", // Local copy of brainstorming text
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
          return "bg-stratosphere text-white";
        case "chorus":
          return "bg-candela text-dark";
        case "bridge":
          return "bg-high-desert text-light";
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
          brainstormingText: this.brainstormingText,
        },
      });
      // No need to call saveStateToFirestore here
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
  },
};
</script>
