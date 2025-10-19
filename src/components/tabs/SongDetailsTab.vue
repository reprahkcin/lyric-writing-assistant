<template>
  <div class="card bg-card text-dark-muted shadow-sm">
    <div class="card-body">
      <h5 class="card-title fw-bold mb-3">
        <span class="bi bi-info-circle me-2"></span>
        Song Details
      </h5>

      <div v-if="song" class="row g-3">
        <!-- Basic Information Section -->
        <div class="col-12">
          <h6 class="fw-bold text-dark-muted mb-2 border-bottom pb-1">
            Basic Information
          </h6>
        </div>

        <!-- Title and Mood Row -->
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control form-control-sm input-off-white"
              id="songTitle"
              :value="songTitle"
              @input="updateSongTitle"
              @blur="manualSaveState"
              placeholder="Enter song title"
            />
            <label for="songTitle" class="small">Title</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <select
              class="form-select form-select-sm input-off-white"
              id="songMood"
              :value="songMood"
              @change="updateSongMood"
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
            <label for="songMood" class="small">Mood</label>
          </div>
          <small v-if="selectedMoodImplication" class="text-muted d-block mt-1">
            {{ selectedMoodImplication }}
          </small>
        </div>

        <!-- Musical Information Section -->
        <div class="col-12 mt-3">
          <h6 class="fw-bold text-dark-muted mb-2 border-bottom pb-1">
            Musical Information
          </h6>
        </div>

        <!-- Key and Scale Row -->
        <div class="col-md-6">
          <div class="form-floating">
            <select
              class="form-select form-select-sm input-off-white"
              id="songKey"
              :value="songKey"
              @change="updateSongKey"
            >
              <option value="" disabled>Select a key</option>
              <option v-for="key in getKeys" :key="key" :value="key">
                {{ key }}
              </option>
            </select>
            <label for="songKey" class="small">Key</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <select
              class="form-select form-select-sm input-off-white"
              id="songScale"
              :value="songScale"
              @change="updateSongScale"
            >
              <option value="" disabled>Select a scale or mode</option>
              <option
                v-for="scale in getScales"
                :key="scale.name"
                :value="scale.name"
              >
                {{ scale.name }} - {{ scale.emotionalQuality }}
              </option>
            </select>
            <label for="songScale" class="small">Scale/Mode</label>
          </div>
        </div>

        <!-- Content Information Section -->
        <div class="col-12 mt-3">
          <h6 class="fw-bold text-dark-muted mb-2 border-bottom pb-1">
            Content Information
          </h6>
        </div>

        <!-- Theme Row -->
        <div class="col-12">
          <div class="row g-3 align-items-end">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control form-control-sm input-off-white"
                  :value="songTheme"
                  @input="updateSongTheme"
                  @blur="manualSaveState"
                  placeholder="Write your theme..."
                />
                <label class="small">Theme</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-floating">
                <select
                  class="form-select form-select-sm input-off-white"
                  v-model="selectedTheme"
                  @change="handleThemeChange"
                >
                  <option value="" disabled>Or select prompt</option>
                  <option
                    v-for="prompt in getPrompts"
                    :key="prompt"
                    :value="prompt"
                  >
                    {{ prompt }}
                  </option>
                </select>
                <label class="small">Prompt</label>
              </div>
            </div>
            <div class="col-md-1">
              <button
                class="btn btn-outline-custom btn-sm fw-bold w-100"
                @click="selectRandomPrompt"
                title="Select Random Prompt"
              >
                <span class="bi bi-shuffle"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Hook and Narrative Row -->
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control form-control-sm input-off-white"
              id="songHook"
              :value="songHook"
              @input="updateSongHook"
              @blur="manualSaveState"
              placeholder="Catchy phrase or refrain"
            />
            <label for="songHook" class="small">Hook</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <textarea
              class="form-control form-control-sm input-off-white"
              id="songNarrative"
              rows="2"
              :value="songNarrative"
              @input="updateSongNarrative"
              @blur="manualSaveState"
              placeholder="Narrative plot points"
              ref="narrativeTextarea"
            ></textarea>
            <label for="songNarrative" class="small">Narrative Outline</label>
          </div>
        </div>

        <!-- Chord Table Section -->
        <div class="col-12 mt-3">
          <h6 class="fw-bold text-dark-muted mb-2 border-bottom pb-1">
            Scale & Chord Information
          </h6>
          <ChordTable />
        </div>
      </div>

      <div v-else class="text-center text-muted py-5">
        <span class="bi bi-music-note-beamed fs-1 d-block mb-3"></span>
        <p>No song selected</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ChordTable from "@/components/ChordTable.vue";

export default {
  name: "SongDetailsTab",
  components: {
    ChordTable,
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedTheme: "",
    };
  },
  computed: {
    ...mapGetters(["getMoods", "getKeys", "getScales", "getPrompts"]),
    songTitle: {
      get() {
        return this.song?.title || "";
      },
      set(value) {
        this.updateSongField("title", value);
      },
    },
    songMood: {
      get() {
        return this.song?.mood || "";
      },
      set(value) {
        this.updateSongField("mood", value);
      },
    },
    songKey: {
      get() {
        return this.song?.key || "";
      },
      set(value) {
        this.updateSongField("key", value);
      },
    },
    songScale: {
      get() {
        return this.song?.scale || "";
      },
      set(value) {
        this.updateSongField("scale", value);
      },
    },
    songTheme: {
      get() {
        return this.song?.theme || "";
      },
      set(value) {
        this.updateSongField("theme", value);
      },
    },
    songHook: {
      get() {
        return this.song?.hook || "";
      },
      set(value) {
        this.updateSongField("hook", value);
      },
    },
    songNarrative: {
      get() {
        return this.song?.narrativeOutline || "";
      },
      set(value) {
        this.updateSongField("narrativeOutline", value);
      },
    },
    selectedMoodImplication() {
      const mood = this.getMoods.find((m) => m.mood === this.song?.mood);
      return mood ? mood.implications : "";
    },
  },
  methods: {
    ...mapActions([
      "updateSong",
      "saveStateToLocalStorage",
      "setUnsavedChanges",
      "setActiveSong",
    ]),
    updateSongField(field, value) {
      if (this.song) {
        const updatedSong = { ...this.song, [field]: value };
        this.updateSong(updatedSong);
        this.setUnsavedChanges(true);
      }
    },
    updateSongTitle(event) {
      this.updateSongField("title", event.target.value);
    },
    updateSongMood(event) {
      this.updateSongField("mood", event.target.value);
    },
    updateSongKey(event) {
      this.updateSongField("key", event.target.value);
    },
    updateSongScale(event) {
      this.updateSongField("scale", event.target.value);
    },
    updateSongTheme(event) {
      this.updateSongField("theme", event.target.value);
    },
    updateSongHook(event) {
      this.updateSongField("hook", event.target.value);
    },
    updateSongNarrative(event) {
      this.updateSongField("narrativeOutline", event.target.value);
    },
    manualSaveState() {
      this.saveStateToLocalStorage();
      this.setUnsavedChanges(false);
    },
    handleThemeChange() {
      if (this.selectedTheme !== "Write your own custom theme") {
        this.updateSongField("theme", this.selectedTheme);
      } else {
        this.updateSongField("theme", "");
      }
      this.manualSaveState();
    },
    selectRandomPrompt() {
      const randomIndex = Math.floor(Math.random() * this.getPrompts.length);
      this.selectedTheme = this.getPrompts[randomIndex];
      this.updateSongField("theme", this.selectedTheme);
      this.manualSaveState();
    },
  },
  watch: {
    song: {
      handler(newSong) {
        if (newSong) {
          this.selectedTheme = newSong.theme || "";
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
