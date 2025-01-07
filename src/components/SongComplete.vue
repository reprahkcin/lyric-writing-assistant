<template>
  <div class="card bg-card text-dark-muted mb-3 shadow-sm">
    <div class="card-body">
      <h1 class="fs-4 my-auto fw-bold text-start">Song</h1>
      <hr />
      <div v-if="activeSong && activeSong.id">
        <div class="text-start">
          <div class="row">
            <div class="col">
              <!-- Title Field -->
              <div class="mb-3">
                <label for="songTitle" class="form-label fw-bold">Title</label>
                <input
                  type="text"
                  class="form-control input-off-white"
                  id="songTitle"
                  v-model="activeSong.title"
                  @blur="manualSaveState"
                />
              </div>
            </div>
            <div class="col">
              <!-- Mood Field -->
              <div class="mb-3">
                <label for="songMood" class="form-label fw-bold">Mood</label>
                <select
                  class="form-select input-off-white"
                  id="songMood"
                  v-model="activeSong.mood"
                  @change="manualSaveState"
                >
                  <option value="" disabled>Select a mood</option>
                  <option
                    v-for="mood in getMoods"
                    :key="mood.mood"
                    :value="mood.mood"
                  >
                    {{ mood.mood }}
                  </option>
                </select>
                <!-- The little caption -->
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
                <!-- Key Field -->
                <label for="songKey" class="form-label fw-bold">Key</label>
                <select
                  class="form-select input-off-white"
                  id="songKey"
                  v-model="activeSong.key"
                  @change="manualSaveState"
                >
                  <option value="" disabled>Select a key</option>
                  <option v-for="key in getKeys" :key="key" :value="key">
                    {{ key }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <!-- Scale Field -->
                <label for="songScale" class="form-label fw-bold">Scale</label>
                <select
                  class="form-select input-off-white"
                  id="songScale"
                  v-model="activeSong.scale"
                  @change="manualSaveState"
                >
                  <option value="" disabled>Select a scale</option>
                  <option
                    v-for="scale in getScales"
                    :key="scale.name"
                    :value="scale.name"
                  >
                    {{ scale.name }} - {{ scale.emotionalQuality }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <!-- Pop up Interval Chart -->
          <div v-if="selectedKey && selectedScale" class="mb-3">
            <table
              class="table table-bordered input-off-white text-dark-muted overflow-auto"
            >
              <thead>
                <tr>
                  <th>Diatonic Interval</th>
                  <th
                    v-for="(numeral, index) in selectedScale.romanNumerals"
                    :key="index"
                    class="text-center"
                  >
                    {{ numeral }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Note</td>
                  <td
                    v-for="(note, index) in selectedScaleNotes.slice(0, -1)"
                    :key="index"
                    class="text-center"
                  >
                    {{ note }}
                  </td>
                </tr>
                <tr>
                  <td>Chord</td>
                  <td
                    v-for="(chord, index) in selectedScaleChords"
                    :key="index"
                    class="text-center"
                  >
                    {{ chord }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mb-3">
            <!-- Theme Field -->
            <label for="songTheme" class="form-label fw-bold">Theme</label>
            <select
              class="form-select input-off-white"
              id="songTheme"
              v-model="selectedTheme"
              @blur="manualSaveState"
              @change="handleThemeChange"
            >
              <option value="" disabled>Select a theme</option>
              <option value="custom">Custom</option>
              <option
                v-for="prompt in getPrompts"
                :key="prompt"
                :value="prompt"
              >
                {{ prompt }}
              </option>
            </select>
            <input
              v-if="selectedTheme === 'custom'"
              type="text"
              class="form-control input-off-white mt-2"
              v-model="activeSong.theme"
              placeholder="Briefly, this song is about..."
              @blur="manualSaveState"
            />
            <button
              class="btn btn-outline-custom btn-sm fw-bold mt-2"
              @click="selectRandomPrompt"
            >
              Select Random Prompt
            </button>
          </div>
          <div class="mb-3">
            <!-- Hook Field -->
            <label for="songHook" class="form-label fw-bold">Hook</label>
            <input
              type="text"
              class="form-control input-off-white"
              id="songHook"
              v-model="activeSong.hook"
              placeholder="Catchy phrase or refrain"
              @blur="manualSaveState"
            />
          </div>
          <div class="mb-3">
            <!-- Narrative Outline Field -->
            <label for="songNarrative" class="form-label fw-bold"
              >Narrative Outline</label
            >
            <textarea
              class="form-control input-off-white"
              id="songNarrative"
              rows="3"
              v-model="activeSong.narrativeOutline"
              placeholder="Narrative plot points for each section"
              @input="autoResize"
              @blur="manualSaveState"
              ref="narrativeTextarea"
            ></textarea>
          </div>
        </div>
        <!-- Add ChromeMusicLab component here -->
        <ChromeMusicLab :song="activeSong" />
        <div class="mb-3">
          <!-- Lyrical Arrangement Panel -->
          <div class="card bg-card shadow-sm">
            <div class="card-body">
              <div class="text-start text-dark-muted">
                <label for="templateDropdown" class="form-label fw-bold"
                  >Lyrical Arrangement Template</label
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
              <button
                class="btn btn-outline-custom btn-sm fw-bold mt-2"
                @click="confirmApplyTemplate"
              >
                Apply Template
              </button>
            </div>
          </div>
        </div>
        <!-- Song Section Section :) -->
        <div v-for="(section, index) in orderedSections" :key="section.id">
          <SongSection
            :sectionId="section.id"
            :isFirst="index === 0"
            :isLast="index === orderedSections.length - 1"
          />
        </div>
        <!-- Bottom Button Group -->
        <button
          class="btn btn-outline-custom btn-sm fw-bold mx-1"
          @click="createSection('verse')"
        >
          Add Verse
        </button>
        <button
          class="btn btn-outline-custom btn-sm fw-bold mx-1"
          @click="createSection('chorus')"
        >
          Add Chorus
        </button>
        <button
          class="btn btn-outline-custom btn-sm fw-bold mx-1"
          @click="createSection('bridge')"
        >
          Add Bridge
        </button>
        <button
          class="btn btn-outline-custom btn-sm fw-bold mx-1"
          @click="activatePlainTextView"
        >
          {{ plainTextActive ? "Hide Plain Text" : "Show Plain Text" }}
        </button>

        <button
          class="btn btn-sm fw-bold mx-1"
          :class="getUnsavedChanges ? 'btn-primary' : 'btn-outline-primary'"
          @click="saveActiveSongToStore"
        >
          Save All
        </button>
      </div>
      <div v-else>
        <p class="text-center text-muted">No song selected.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SongSection from "@/components/SongSection.vue";
import ChromeMusicLab from "@/components/ChromeMusicLab.vue"; // Import ChromeMusicLab
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SongComplete",
  components: {
    SongSection,
    ChromeMusicLab,
  },
  props: {
    plainTextActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selectedTemplate: "", // Add selectedTemplate to data
      romanNumerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"], // Roman numerals for chords
      selectedTheme: "", // Add selectedTheme to data
    };
  },
  computed: {
    ...mapGetters([
      "getActiveSong", // Current active song - not to be confused with the song object in the songs array.
      "getSectionTemplates", // Data file containing section templates
      "getMoods", // Data file containing moods
      "getKeys", // Data file containing keys
      "getScales", // Data file containing scales
      "getPrompts", // Data file containing prompts
      "getChordProgressions", // Data file containing chord progressions
      "getSelectedScaleNotes", // Getter for selected scale notes
      "getSelectedScaleChords", // Getter for selected scale chords
      "getUnsavedChanges", // Getter for unsaved changes - used to toggle the Save All button
    ]),
    activeSong() {
      return this.getActiveSong;
    },

    orderedSections() {
      // This is something leftover from a failed function. I don't know if it's needed, but it works with it there.
      // Order sections by their order property
      return (this.activeSong?.sections || [])
        .slice()
        .sort((a, b) => a.order[0] - b.order[0]);
    },
    selectedTemplateArrangement() {
      // Finds the selected template and returns the arrangement
      const template = this.getSectionTemplates.find(
        (t) => t.name === this.selectedTemplate
      );
      return template ? template.arrangement : [];
    },
    selectedMoodImplication() {
      // Finds the selected mood and returns the implications
      const mood = this.getMoods.find((m) => m.mood === this.activeSong?.mood);
      return mood ? mood.implications : "";
    },
    selectedKey() {
      // Returns the selected key - used to update chord progressions
      return this.activeSong?.key;
    },
    selectedScale() {
      // Returns the selected scale - used to update chord progressions
      return this.getScales.find((s) => s.name === this.activeSong?.scale);
    },
    selectedScaleNotes() {
      // Returns the selected scale notes - used to display the interval chart
      return this.getSelectedScaleNotes;
    },
    selectedScaleChords() {
      // Returns the selected scale chords - used to display the interval chart
      return this.getSelectedScaleChords;
    },
  },
  watch: {
    activeSong: {
      // Watch for changes in the active song
      handler(newSong) {
        if (newSong) {
          this.selectedTheme = newSong.theme || "";
          this.$nextTick(() => {
            this.autoResize({ target: this.$refs.narrativeTextarea });
          });
        }
      },
      immediate: true,
      deep: true,
    },
    selectedKey() {
      // Watch for changes in the selected key and update chord progressions
      this.updateChordProgressions();
    },
    selectedScale() {
      // Watch for changes in the selected scale and update chord progressions
      this.updateChordProgressions();
    },
  },
  methods: {
    ...mapActions([
      "updateSong",
      "saveStateToLocalStorage",
      "addActiveSongSection",
      "deleteActiveSongSection",
      "updateActiveSongLine",
      "updateChordProgressions",
      "saveActiveSong",
      "setUnsavedChanges",
    ]),
    manualSaveState() {
      if (this.activeSong) {
        this.updateSong(this.activeSong);
      }
      this.saveStateToLocalStorage();
    },
    arrangementVisualized(arrangement) {
      // These are the little colored badges that show up in the template dropdown
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
      // This is the text that shows up in the template dropdown
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
      // Since applying a template can be destructive, we want to confirm the user's intent
      if (
        confirm(
          "Are you sure you want to apply this template? This will clear all existing sections."
        )
      ) {
        this.applyTemplate();
      }
    },
    applyTemplate() {
      // This converts the the template, which is just an array of characters (c,v,b), into actual sections
      const template = this.getSectionTemplates.find(
        (t) => t.name === this.selectedTemplate
      );
      console.log(template);
      if (template) {
        this.activeSong.sections = template.arrangement.map((type, index) => {
          let sectionType;
          if (type === "v") {
            sectionType = "Verse";
          } else if (type === "c") {
            sectionType = "Chorus";
          } else {
            sectionType = "Bridge";
          }
          return {
            id: index + 1,
            order: [index],
            type: sectionType,
            lines: ["", "", "", ""],
            sectionNarrative: "",
            chordProgression: "",
            selectedChordProgression: "",
            brainstormingText: "",
          };
        });
        this.updateSong(this.activeSong); // Trigger Vuex store update
      }
    },
    createSection(type) {
      // This is the Section Constructor
      const newSection = {
        id: new Date().getTime(),
        order: [this.activeSong.sections.length],
        type: this.sectionLabel(type),
        lines: ["", "", "", ""],
        sectionNarrative: "",
        brainstormingText: "",
        chordProgression: "",
        selectedChordProgression: "",
      };
      this.addActiveSongSection(newSection);
    },
    removeSection(sectionId) {
      // This is the Section Destructor
      this.deleteActiveSongSection(sectionId);
    },
    moveSection(index, direction) {
      // This is the Section Mover, allowing the user reorder sections within the song.
      console.log("moveSection called");
      console.log(index, direction);
      if (direction === "up" && index > 0) {
        // Swap the current section with the previous section if not at the top
        const temp = this.activeSong.sections[index];
        this.activeSong.sections[index] = this.activeSong.sections[index - 1];
        this.activeSong.sections[index - 1] = temp;
      } else if (
        direction === "down" &&
        index < this.activeSong.sections.length - 1
      ) {
        // Swap the current section with the next section if not at the bottom
        const temp = this.activeSong.sections[index];
        this.activeSong.sections[index] = this.activeSong.sections[index + 1];
        this.activeSong.sections[index + 1] = temp;
      }
      // Update the order property of each section
      this.activeSong.sections.forEach((section, idx) => {
        section.order = [idx];
      });
      this.updateSong(this.activeSong); // Trigger Vuex store update
    },
    activatePlainTextView() {
      // This toggles the plain text view, or printable tab.
      // Emit an event to toggle the plain text view
      this.$emit("toggle-plain-text");
    },
    badgeClass(section) {
      // This function returns the appropriate badge class based on the section type
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
      // This function returns the appropriate label based on the section type
      // Return the appropriate label based on the section type
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
    autoResize(event) {
      // This function automatically resizes the textarea based on the content in the Narrative Outline field
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    },
    handleThemeChange() {
      // This function handles the theme change so the user can hit the random selection button indefinitely.
      if (this.selectedTheme !== "custom") {
        this.activeSong.theme = this.selectedTheme;
      } else {
        this.activeSong.theme = "";
      }
      this.manualSaveState();
    },
    selectRandomPrompt() {
      // Shuffle the prompts and select a random one
      const randomIndex = Math.floor(Math.random() * this.getPrompts.length);
      this.selectedTheme = this.getPrompts[randomIndex];
      this.activeSong.theme = this.selectedTheme;
      this.manualSaveState();
    },
    saveActiveSongToStore() {
      // This function saves the active song to the store for the conditional button at the bottom
      this.saveActiveSong();
      this.saveStateToLocalStorage();
      this.setUnsavedChanges(false);
    },
  },
};
</script>
