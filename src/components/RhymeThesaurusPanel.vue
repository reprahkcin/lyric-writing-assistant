<template>
  <div>
    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control input-off-white"
        placeholder="Word helper..."
        v-model="rhymeQuery"
        @keyup.enter="fetchRhymesAndSynonyms"
      />
      <button class="btn btn-outline-custom" @click="fetchRhymesAndSynonyms">
        <span class="bi bi-search"></span>
      </button>
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
//import { debounce } from "lodash";

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
    };
  },
  computed: {
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
        this.rhymes = [];
        this.synonyms = [];
        this.idioms = [];
        this.relatedWords = [];
        this.rawThesaurusResults = null;
        this.rawDictionaryResults = null;
        return;
      }
      this.loading = true;
      try {
        const dictionaryResponse = await fetch(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.rhymeQuery}?key=6515e3ae-2580-4db2-a88b-5c52e9444299`
        );
        const dictionaryData = await dictionaryResponse.json();
        this.rawDictionaryResults = dictionaryData;

        const synonymResponse = await fetch(
          `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${this.rhymeQuery}?key=5530f2c7-3c20-4f89-8062-56afe1814600`
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

        const rhymeResponse = await fetch(
          `https://rhymebrain.com/talk?function=getRhymes&word=${this.rhymeQuery}`
        );
        const rhymeData = await rhymeResponse.json();
        this.rhymes = rhymeData.map((word) => ({
          word: word.word,
          syllables: word.syllables,
        }));

        console.log("Rhymes fetched:", this.rhymes);
        console.log("Synonyms fetched:", this.synonyms);
        console.log("Idioms fetched:", this.idioms);
        console.log("Related words fetched:", this.relatedWords);
        console.log("Raw thesaurus results:", this.rawThesaurusResults);
        console.log("Raw dictionary results:", this.rawDictionaryResults);
      } catch (error) {
        console.error(
          "Error fetching rhymes, synonyms, idioms, or dictionary data:",
          error
        );
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
