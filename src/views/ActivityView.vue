<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <SongLibrary />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <SongComplete
          v-if="activeSong"
          :song="activeSong"
          :plainTextActive="plainTextActive"
          @toggle-plain-text="togglePlainText"
        />
        <p v-else>No song selected</p>
        <PlainTextLayout
          v-if="activeSong && plainTextActive"
          :song="activeSong"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PlainTextLayout from "@/components/PlainTextLayout.vue";
import SongComplete from "@/components/SongComplete.vue";
import SongLibrary from "@/components/SongLibrary.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ActivityView",
  components: {
    SongLibrary,
    SongComplete,
    PlainTextLayout,
  },
  computed: {
    ...mapGetters({
      activeSong: "getActiveSong",
    }),
  },
  watch: {
    activeSong: {
      handler(newSong) {
        this.localSong = { ...newSong };
      },
      immediate: true,
    },
    localSong: {
      handler(newSong) {
        this.updateSong(newSong);
      },
      deep: true,
    },
  },
  data() {
    return {
      localSong: null,
      plainTextActive: false,
    };
  },
  methods: {
    ...mapActions(["updateSong"]),
    togglePlainText() {
      this.plainTextActive = !this.plainTextActive;
    },
  },
};
</script>
