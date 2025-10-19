<template>
  <div>
    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control input-off-white"
        placeholder="Word helper..."
        v-model="sanitizedRhymeQuery"
        @keyup.enter="fetchRhymesAndSynonyms"
      />
      <button class="btn btn-outline-custom" @click="fetchRhymesAndSynonyms">
        <span class="bi bi-search"></span>
      </button>
    </div>
    <div
      v-if="!apiKeysAvailable && !loading && !rhymes.length"
      class="mt-2 alert alert-warning small"
    >
      <p class="mb-1">
        <strong>Limited Functionality:</strong> Dictionary and thesaurus
        features require API keys.
      </p>
      <p class="mb-0 small">
        Get free API keys at
        <a href="https://dictionaryapi.com/" target="_blank" class="alert-link"
          >dictionaryapi.com</a
        >
        and add them to your <code>.env</code> file. Rhyme functionality will
        still work!
      </p>
    </div>
    <div v-if="errorMessage" class="mt-2 alert alert-danger">
      <p class="mb-0">{{ errorMessage }}</p>
    </div>
    <div
      v-if="loading"
      class="mt-2 alert alert-info position-relative"
      style="max-height: 20em; overflow-y: auto"
    >
      <p>Loading...</p>
    </div>
    <div
      v-if="
        !loading && (rhymes.length || synonyms.length || rawDictionaryResults)
      "
      class="mt-2 alert alert-info position-relative"
      style="max-height: 20em; overflow-y: auto"
    >
      <button
        type="button"
        class="btn-close position-absolute top-0 end-0 m-2"
        aria-label="Close"
        @click="clearResults"
      ></button>
      <div v-if="!apiKeysAvailable && rhymes.length" class="mb-3">
        <p class="text-muted small mb-0">
          <em
            >Note: Dictionary and thesaurus features unavailable. Add API keys
            to see definitions and synonyms.</em
          >
        </p>
      </div>
      <div v-if="rawDictionaryResults && rawDictionaryResults.length">
        <p class="section-heading fs-5">Definition:</p>
        <ul class="list-unstyled text-start">
          <li v-for="(entry, index) in rawDictionaryResults" :key="index">
            <strong>{{ entry.hwi.hw }}</strong> ({{ entry.fl }})
            <ul>
              <li v-for="(def, defIndex) in entry.shortdef" :key="defIndex">
                {{ def }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-if="rhymes.length">
        <p class="section-heading fs-5">Rhymes:</p>
        <div>
          <p class="section-heading fs-6">1 Syllable Rhymes:</p>
          <ul class="list-unstyled text-start">
            <li v-for="(rhyme, index) in oneSyllableRhymes" :key="index">
              {{ rhyme.word }}
            </li>
          </ul>
        </div>
        <div>
          <p class="section-heading fs-6">2 Syllable Rhymes:</p>
          <ul class="list-unstyled text-start">
            <li v-for="(rhyme, index) in twoSyllableRhymes" :key="index">
              {{ rhyme.word }}
            </li>
          </ul>
        </div>
        <div>
          <p class="section-heading fs-6">3+ Syllable Rhymes:</p>
          <ul class="list-unstyled text-start">
            <li v-for="(rhyme, index) in threePlusSyllableRhymes" :key="index">
              {{ rhyme.word }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="synonyms.length">
        <p class="section-heading fs-5">Synonyms:</p>
        <ul class="list-unstyled text-start">
          <li v-for="(synonym, index) in synonyms.slice(0, 20)" :key="index">
            {{ synonym }}
          </li>
        </ul>
      </div>
      <div v-if="idioms.length">
        <p class="section-heading fs-5">Idioms:</p>
        <ul class="list-unstyled text-start">
          <li v-for="(idiom, index) in idioms.slice(0, 20)" :key="index">
            {{ idiom }}
          </li>
        </ul>
      </div>
      <div v-if="relatedWords.length">
        <p class="section-heading fs-5">Related Words:</p>
        <ul class="list-unstyled text-start">
          <li
            v-for="(related, index) in relatedWords.slice(0, 20)"
            :key="index"
          >
            {{ related }}
          </li>
        </ul>
      </div>
      <p class="section-heading fs-5">API Attribution:</p>
      <ul class="list-unstyled text-start">
        <li>
          Rhyme results are provided by
          <a href="https://rhymebrain.com" target="_blank">RhymeBrain.com</a>
        </li>

        <li>
          Synonym results are provided by
          <a href="https://dictionaryapi.com" target="_blank"
            >Merriam-Webster Thesaurus</a
          >
        </li>

        <li>
          Dictionary results are provided by
          <a href="https://dictionaryapi.com" target="_blank"
            >Merriam-Webster Dictionary</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DOMPurify from "dompurify";

export default {
  data() {
    return {
      rhymeQuery: "",
      rhymes: [],
      synonyms: [],
      idioms: [],
      relatedWords: [],
      rawThesaurusResults: null,
      rawDictionaryResults: null,
      loading: false,
      errorMessage: null,
      apiKeysAvailable: !!(
        process.env.VUE_APP_DICTIONARY_API_KEY &&
        process.env.VUE_APP_THESAURUS_API_KEY
      ),
    };
  },
  computed: {
    sanitizedRhymeQuery: {
      get() {
        return this.rhymeQuery;
      },
      set(value) {
        this.rhymeQuery = DOMPurify.sanitize(value);
      },
    },
    oneSyllableRhymes() {
      return this.rhymes.filter((rhyme) => rhyme.syllables == 1).slice(0, 10);
    },
    twoSyllableRhymes() {
      return this.rhymes.filter((rhyme) => rhyme.syllables == 2).slice(0, 10);
    },
    threePlusSyllableRhymes() {
      return this.rhymes.filter((rhyme) => rhyme.syllables >= 3).slice(0, 5);
    },
  },
  methods: {
    async fetchRhymesAndSynonyms() {
      if (this.rhymeQuery.trim() === "") {
        this.clearResults();
        return;
      }

      this.loading = true;
      this.errorMessage = null;

      try {
        // Always fetch rhymes (no API key needed)
        const rhymeResponse = await fetch(
          `https://rhymebrain.com/talk?function=getRhymes&word=${this.rhymeQuery}`
        );
        const rhymeData = await rhymeResponse.json();
        this.rhymes = rhymeData.map((word) => ({
          word: word.word,
          syllables: word.syllables,
        }));

        // Only fetch dictionary/thesaurus if API keys are available
        if (this.apiKeysAvailable) {
          const dictionaryResponse = await fetch(
            `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.rhymeQuery}?key=${process.env.VUE_APP_DICTIONARY_API_KEY}`
          );
          const dictionaryData = await dictionaryResponse.json();
          this.rawDictionaryResults = dictionaryData;

          const synonymResponse = await fetch(
            `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${this.rhymeQuery}?key=${process.env.VUE_APP_THESAURUS_API_KEY}`
          );
          const synonymData = await synonymResponse.json();
          if (synonymData.length > 0 && synonymData[0].meta) {
            this.synonyms = synonymData[0].meta.syns.flat();
            this.idioms = synonymData[0].meta.idioms
              ? synonymData[0].meta.idioms.flat()
              : [];
            this.relatedWords = synonymData[0].meta.rel_list
              ? synonymData[0].meta.rel_list.flat()
              : [];
          } else {
            this.synonyms = [];
            this.idioms = [];
            this.relatedWords = [];
          }
          this.rawThesaurusResults = synonymData;
        } else {
          // Clear dictionary/thesaurus results when keys unavailable
          this.synonyms = [];
          this.idioms = [];
          this.relatedWords = [];
          this.rawThesaurusResults = null;
          this.rawDictionaryResults = null;
        }

        console.log("Rhymes fetched:", this.rhymes);
        console.log("Synonyms fetched:", this.synonyms);
        console.log("Idioms fetched:", this.idioms);
        console.log("Related words fetched:", this.relatedWords);
      } catch (error) {
        console.error(
          "Error fetching rhymes, synonyms, idioms, or dictionary data:",
          error
        );
        this.errorMessage = "Failed to fetch some results. Please try again.";
      } finally {
        this.loading = false;
      }
    },
    clearResults() {
      this.rhymes = [];
      this.synonyms = [];
      this.idioms = [];
      this.relatedWords = [];
      this.rawThesaurusResults = null;
      this.rawDictionaryResults = null;
      this.errorMessage = null;
    },
  },
};
</script>
<style scoped>
.section-heading {
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
}
</style>
