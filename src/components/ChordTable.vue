<template>
  <div class="row">
    <div class="col">
      <div class="d-flex justify-content-between align-items-center">
        <label for="scale-mode-chord-table" class="form-label fw-bold"
          >Scale/Mode Information</label
        >
        <a
          href="#"
          @click.prevent="toggleMinimize"
          class="text-decoration-none fw-bold"
        >
          {{ isMinimized ? "Expand" : "Minimize" }}
        </a>
      </div>
      <div
        :class="['card', 'px-5', 'mb-3', { 'minimized-card': isMinimized }]"
        id="scale-mode-chord-table"
      >
        <ScaleMap :song="getActiveSong" v-if="!isMinimized" />
        <div v-if="selectedKey && selectedScale && !isMinimized" class="mb-3">
          <table
            class="table table-bordered table-light text-muted overflow-auto"
          >
            <thead>
              <tr>
                <th>Diatonic Interval</th>
                <th
                  v-for="(numeral, index) in fullRomanNumerals"
                  :key="index"
                  class="text-center"
                  style="width: 14.28%"
                >
                  {{ numeral }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Note/Chord</td>
                <td
                  v-for="(note, index) in fullScaleNotes"
                  :key="index"
                  class="text-center"
                  style="width: 14.28%"
                >
                  {{ note }}{{ displayNotation(fullScaleChords[index]) }}
                </td>
              </tr>
              <tr>
                <td>Degree</td>
                <td
                  v-for="(degree, index) in fullScaleChords"
                  :key="index"
                  class="text-center"
                  style="width: 14.28%"
                  :class="colorCoding(fullScaleChords[index])"
                >
                  {{ degree }}
                </td>
              </tr>

              <tr>
                <td>
                  Guitar Chords
                  <br />
                  <small>
                    <a
                      href="https://github.com/omnibrain/svguitar"
                      class="btn btn-link btn-sm p-0"
                      target="_blank"
                    >
                      <i class="bi bi-info-circle"></i>
                    </a>
                  </small>
                </td>
                <td
                  v-for="(chord, index) in fullScaleChords"
                  :key="index"
                  class="text-center align-bottom"
                  style="width: 14.28%"
                >
                  <div
                    ref="chordContainer"
                    :id="'chord-' + index"
                    class="d-flex align-items-end justify-content-center"
                  ></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScaleMap from "@/components/ScaleMap.vue";
import { mapGetters } from "vuex";
import { SVGuitarChord } from "svguitar";
import chordData from "@/data/chords.json";

export default {
  name: "ChordTable",
  components: {
    ScaleMap,
  },
  data() {
    return {
      isMinimized: false,
    };
  },
  computed: {
    ...mapGetters([
      "getSelectedScaleNotes",
      "getSelectedScaleChords",
      "getScales",
      "getActiveSong",
    ]),
    selectedKey() {
      return this.$store.getters.getActiveSong?.key;
    },
    selectedScale() {
      return this.getScales?.find(
        (s) => s.name === this.$store.getters.getActiveSong?.scale
      );
    },
    selectedScaleNotes() {
      return this.getSelectedScaleNotes;
    },
    selectedScaleChords() {
      return this.getSelectedScaleChords;
    },
    adjustedScaleNotes() {
      return this.isPentatonicScale
        ? this.selectedScaleNotes.slice(0, 5)
        : this.selectedScaleNotes.slice(0, 7);
    },
    adjustedScaleChords() {
      return this.isPentatonicScale
        ? this.selectedScaleChords.slice(0, 5)
        : this.selectedScaleChords.slice(0, 7);
    },
    adjustedRomanNumerals() {
      return this.isPentatonicScale && this.selectedScale
        ? this.selectedScale.romanNumerals
        : this.selectedScale?.romanNumerals || [];
    },
    isPentatonicScale() {
      return this.selectedScale?.name.toLowerCase().includes("pentatonic");
    },
    fullScaleNotes() {
      return [
        ...this.adjustedScaleNotes,
        ...Array(7 - this.adjustedScaleNotes.length).fill(""),
      ];
    },
    fullScaleChords() {
      return [
        ...this.adjustedScaleChords,
        ...Array(7 - this.adjustedScaleChords.length).fill(""),
      ];
    },
    fullRomanNumerals() {
      return [
        ...this.adjustedRomanNumerals,
        ...Array(7 - this.adjustedRomanNumerals.length).fill(""),
      ];
    },
  },
  mounted() {
    this.renderGuitarChords();
  },
  watch: {
    selectedScaleChords() {
      this.renderGuitarChords();
    },
    selectedKey() {
      this.renderGuitarChords();
    },
  },
  methods: {
    colorCoding(chord) {
      if (chord && chord.includes("dim")) {
        return "bg-diminished";
      } else if (chord && chord.includes("Aug")) {
        return "bg-augmented";
      } else if (chord && chord.includes("min")) {
        return "bg-minor";
      } else if (chord && chord.includes("sus")) {
        return "bg-suspended";
      } else if (chord && chord.includes("Maj")) {
        return "bg-major";
      } else {
        return "bg-secondary";
      }
    },
    displayNotation(chord) {
      if (chord && chord.includes("dim")) {
        return "°";
      } else if (chord && chord.includes("Aug")) {
        return "+";
      } else if (chord && chord.includes("m")) {
        return "m";
      } else if (chord && chord.includes("sus")) {
        return "sus";
      } else {
        return "";
      }
    },
    renderGuitarChords() {
      console.log("Rendering guitar chords...");
      console.log("Adjusted scale chords:", this.adjustedScaleChords);

      // Clear existing chords
      this.fullScaleChords.forEach((_, index) => {
        const container = this.$refs.chordContainer[index];
        if (container) {
          container.innerHTML = "";
        }
      });

      // Render new chords
      this.adjustedScaleNotes.forEach((note, index) => {
        const container = this.$refs.chordContainer[index];
        if (container) {
          const chordName = this.getChordName(
            this.adjustedScaleChords[index],
            note
          );
          const chordData = this.getChordData(chordName);
          console.log(`Chord data for ${chordName}:`, chordData);
          if (chordData && chordData.fingers) {
            console.log(`Rendering chord ${chordName}...`);
            new SVGuitarChord(`#chord-${index}`)
              .chord({
                fingers: chordData.fingers,
                barres: chordData.barres || [],
              })
              .configure({
                frets: 5,
                position: chordData.position || 1,
              })
              .draw();
          }
        }
      });
    },
    getChordName(chord, note) {
      if (chord && chord.includes("dim")) {
        return `${note} diminished`;
      } else if (chord && chord.includes("Aug")) {
        return `${note} augmented`;
      } else if (chord && chord.includes("m") && !chord.includes("Maj")) {
        return `${note} minor`;
      } else {
        return `${note} major`;
      }
    },
    getChordData(chordName) {
      return chordData.chords.find((chord) => chord.name === chordName) || {};
    },
    toggleMinimize() {
      this.isMinimized = !this.isMinimized;
    },
  },
};
</script>
<style scoped>
.bg-major {
  color: white;
  background-color: #3498db; /* Base color */
}

.bg-minor {
  color: white;
  background-color: #2980b9; /* Slightly darker, sadder */
}

.bg-augmented {
  color: white;
  background-color: #5dade2; /* Brighter / more tension */
}

.bg-diminished {
  color: white;
  background-color: #1f618d; /* Dark, tense, less saturated */
}

.bg-suspended {
  color: white;
  background-color: #2874a6; /* Slightly more saturated than minor */
}

.minimized-card {
  height: 40px; /* Adjust this value as needed */
  overflow: hidden;
}
</style>
