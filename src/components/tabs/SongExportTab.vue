<template>
  <div class="card bg-card text-dark-muted shadow-sm">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="card-title fw-bold mb-0">
          <span class="bi bi-printer me-2"></span>
          Export & Print
        </h5>
        <div class="btn-group btn-group-sm">
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="copyToClipboard"
            title="Copy to Clipboard"
          >
            <span class="bi bi-clipboard me-1"></span>
            Copy
          </button>
          <button
            class="btn btn-outline-custom btn-sm fw-bold"
            @click="printSong"
            title="Print Song"
          >
            <span class="bi bi-printer me-1"></span>
            Print
          </button>
        </div>
      </div>

      <div v-if="song" class="row">
        <div class="col-12">
          <div class="card bg-light border-0">
            <div class="card-header bg-transparent">
              <h6 class="mb-0">Plain Text Format</h6>
            </div>
            <div class="card-body">
              <pre class="formatted-song mb-0">{{ formattedSong }}</pre>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-muted py-5">
        <span class="bi bi-printer fs-1 d-block mb-3"></span>
        <p>No song selected</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongExportTab",
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedSong() {
      if (!this.song) return "";

      let result = `Title: ${this.song.title}\n`;
      result += `Mood: ${this.song.mood}\n`;
      result += `Theme: ${this.song.theme}\n`;
      result += `Hook: ${this.song.hook}\n\n`;
      result += `Key: ${this.song.key}\n`;
      result += `Scale: ${this.song.scale}\n\n`;

      if (this.song.narrativeOutline) {
        result += `Narrative Outline:\n${this.song.narrativeOutline}\n\n`;
      }

      if (this.song.sections && this.song.sections.length > 0) {
        this.song.sections.forEach((section) => {
          result += `${section.type.toUpperCase()}`;
          if (section.chordProgression) {
            result += ` - ${section.chordProgression}`;
          }
          result += `\n\n`;

          if (section.sectionNarrative) {
            result += `Section Narrative: ${section.sectionNarrative}\n\n`;
          }

          section.lines.forEach((line) => {
            if (line.trim()) {
              result += `${line}\n`;
            }
          });
          result += `\n`;
        });
      }

      return result;
    },
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.formattedSong)
        .then(() => {
          // You could add a toast notification here
          console.log("Song copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    },
    printSong() {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head>
            <title>${this.song.title}</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
              pre { white-space: pre-wrap; font-family: inherit; }
              @media print { body { margin: 0; } }
            </style>
          </head>
          <body>
            <pre>${this.formattedSong}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    },
  },
};
</script>

<style scoped>
.formatted-song {
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre-wrap;
  background-color: #fefcf3;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #dee2e6;
  max-height: 600px;
  overflow-y: auto;
}
</style>
