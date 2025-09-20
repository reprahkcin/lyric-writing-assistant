<template>
  <div class="container-fluid">
    <!-- Header with navigation -->
    <div class="row my-3">
      <div class="col">
        <div class="card bg-dark ps-3 py-2 text-light shadow text-start">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <button
                class="btn btn-outline-light btn-sm me-3"
                @click="$router.push('/')"
                title="Back to Library"
              >
                <span class="bi bi-arrow-left"></span>
              </button>
              <p class="fw-bold my-auto text-start mb-0">
                {{ activeSong?.title || "Untitled Song" }}
              </p>
            </div>
            <div class="d-flex gap-2 me-3">
              <button
                class="btn btn-sm fw-bold"
                :class="
                  getUnsavedChanges ? 'btn-primary' : 'btn-outline-primary'
                "
                @click="saveActiveSongToStore"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Navigation -->
    <div class="row mb-3">
      <div class="col">
        <ul class="nav nav-tabs" id="songTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeTab === 'details' }"
              @click="activeTab = 'details'"
              type="button"
              role="tab"
            >
              <span class="bi bi-info-circle me-1"></span>
              Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeTab === 'sections' }"
              @click="activeTab = 'sections'"
              type="button"
              role="tab"
            >
              <span class="bi bi-music-note-list me-1"></span>
              Sections
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeTab === 'resources' }"
              @click="activeTab = 'resources'"
              type="button"
              role="tab"
            >
              <span class="bi bi-tools me-1"></span>
              Musical Resources
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeTab === 'export' }"
              @click="activeTab = 'export'"
              type="button"
              role="tab"
            >
              <span class="bi bi-printer me-1"></span>
              Export
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="row">
      <div class="col">
        <!-- Details Tab -->
        <div v-if="activeTab === 'details'" class="tab-content">
          <SongDetailsTab :song="activeSong" />
        </div>

        <!-- Sections Tab -->
        <div v-if="activeTab === 'sections'" class="tab-content">
          <SongSectionsTab :song="activeSong" />
        </div>

        <!-- Resources Tab -->
        <div v-if="activeTab === 'resources'" class="tab-content">
          <SongResourcesTab :song="activeSong" />
        </div>

        <!-- Export Tab -->
        <div v-if="activeTab === 'export'" class="tab-content">
          <SongExportTab :song="activeSong" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SongDetailsTab from "@/components/tabs/SongDetailsTab.vue";
import SongSectionsTab from "@/components/tabs/SongSectionsTab.vue";
import SongResourcesTab from "@/components/tabs/SongResourcesTab.vue";
import SongExportTab from "@/components/tabs/SongExportTab.vue";

export default {
  name: "SongView",
  components: {
    SongDetailsTab,
    SongSectionsTab,
    SongResourcesTab,
    SongExportTab,
  },
  data() {
    return {
      activeTab: "details",
    };
  },
  computed: {
    ...mapGetters(["getActiveSong", "getUnsavedChanges"]),
    activeSong() {
      return this.getActiveSong;
    },
  },
  methods: {
    ...mapActions([
      "saveActiveSong",
      "saveStateToLocalStorage",
      "setUnsavedChanges",
    ]),
    saveActiveSongToStore() {
      this.saveActiveSong();
      this.saveStateToLocalStorage();
      this.setUnsavedChanges(false);
    },
  },
  watch: {
    $route(to) {
      // Set active song based on route parameter
      const songId = parseInt(to.params.id);
      const song = this.$store.getters.getSongs.find((s) => s.id === songId);
      if (song) {
        this.$store.dispatch("setActiveSong", song);
      } else {
        // Song not found, redirect to library
        this.$router.push("/");
      }
    },
  },
  mounted() {
    // Set active song on component mount
    const songId = parseInt(this.$route.params.id);
    const song = this.$store.getters.getSongs.find((s) => s.id === songId);
    if (song) {
      this.$store.dispatch("setActiveSong", song);
    } else {
      // Song not found, redirect to library
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.nav-tabs .nav-link {
  color: #5c5b57;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  padding: 0.75rem 1rem;
}

.nav-tabs .nav-link:hover {
  color: #5c5b57;
  border-bottom-color: #e8cfa5;
}

.nav-tabs .nav-link.active {
  color: #5c5b57;
  border-bottom-color: #5c5b57;
  background: none;
  font-weight: bold;
}

.tab-content {
  min-height: 500px;
}
</style>
