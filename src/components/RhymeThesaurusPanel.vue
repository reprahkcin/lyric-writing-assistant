<template>
  <div>
    <div class="input-group mb-2">
      <input
        type="text"
        class="form-control input-off-white"
        placeholder="Word helper..."
        v-model="rhymeQuery"
      />
      <button class="btn btn-outline-custom" @click="fetchRhymesAndSynonyms">
        <span class="bi bi-search"></span>
      </button>
    </div>
    <div
      v-if="rhymes.length || synonyms.length || rawDictionaryResults"
      class="mt-2 alert alert-info position-relative"
      style="max-height: 10em; overflow-y: auto"
    >
      <button
        type="button"
        class="btn-close position-absolute top-0 end-0 m-2"
        aria-label="Close"
        @click="clearResults"
      ></button>
      <div v-if="rawDictionaryResults && rawDictionaryResults.length">
        <h5>Definition:</h5>
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
        <h5>Rhymes:</h5>
        <div>
          <h6>1 Syllable Rhymes:</h6>
          <ul class="list-unstyled text-start">
            <li v-for="(rhyme, index) in oneSyllableRhymes" :key="index">
              {{ rhyme.word }}
            </li>
          </ul>
        </div>
        <div>
          <h6>2 Syllable Rhymes:</h6>
          <ul class="list-unstyled text-start">
            <li v-for="(rhyme, index) in twoSyllableRhymes" :key="index">
              {{ rhyme.word }}
            </li>
          </ul>
        </div>
        <div>
          <h6>3+ Syllable Rhymes:</h6>
          <ul class="list-unstyled text-start">
            <li v-for="(rhyme, index) in threePlusSyllableRhymes" :key="index">
              {{ rhyme.word }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="synonyms.length">
        <h5>Synonyms:</h5>
        <ul class="list-unstyled text-start">
          <li v-for="(synonym, index) in synonyms.slice(0, 20)" :key="index">
            {{ synonym }}
          </li>
        </ul>
      </div>
      <div v-if="rawThesaurusResults && rawThesaurusResults.length">
        <h5>Idioms:</h5>
        <ul class="list-unstyled text-start">
          <li v-for="(entry, index) in rawThesaurusResults" :key="index">
            <ul>
              <li
                v-for="(idiom, idiomIndex) in (entry.meta.idioms || []).slice(
                  0,
                  20
                )"
                :key="idiomIndex"
              >
                {{ idiom }}
              </li>
            </ul>
          </li>
        </ul>
        <h5>Related Words:</h5>
        <ul class="list-unstyled text-start">
          <li v-for="(entry, index) in rawThesaurusResults" :key="index">
            <ul>
              <li
                v-for="(related, relatedIndex) in (
                  entry.meta.rel_list || []
                ).slice(0, 20)"
                :key="relatedIndex"
              >
                {{ related }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p>
        Rhyme results are provided by
        <a href="https://rhymebrain.com">RhymeBrain.com</a>
      </p>
      <p>
        Synonym results are provided by
        <a href="https://dictionaryapi.com">Merriam-Webster Thesaurus</a>
      </p>
      <p>
        Dictionary results are provided by
        <a href="https://dictionaryapi.com">Merriam-Webster Dictionary</a>
      </p>
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
      rawThesaurusResults: null,
      rawDictionaryResults: null,
    };
  },
  computed: {
    oneSyllableRhymes() {
      return this.rhymes.filter((rhyme) => rhyme.syllables === 1).slice(0, 10);
    },
    twoSyllableRhymes() {
      return this.rhymes.filter((rhyme) => rhyme.syllables === 2).slice(0, 10);
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
        this.rawThesaurusResults = null;
        this.rawDictionaryResults = null;
        return;
      }
      try {
        const rhymeResponse = await fetch(
          `https://rhymebrain.com/talk?function=getRhymes&word=${this.rhymeQuery}`
        );
        const rhymeData = await rhymeResponse.json();
        this.rhymes = rhymeData.map((word) => ({
          word: word.word,
          syllables: word.syllables,
        }));

        const synonymResponse = await fetch(
          `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${this.rhymeQuery}?key=5530f2c7-3c20-4f89-8062-56afe1814600`
        );
        const synonymData = await synonymResponse.json();
        if (synonymData.length > 0 && synonymData[0].meta) {
          this.synonyms = synonymData[0].meta.syns.flat();
        } else {
          this.synonyms = [];
        }
        this.rawThesaurusResults = synonymData;

        const dictionaryResponse = await fetch(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.rhymeQuery}?key=6515e3ae-2580-4db2-a88b-5c52e9444299`
        );
        const dictionaryData = await dictionaryResponse.json();
        this.rawDictionaryResults = dictionaryData;

        console.log("Rhymes fetched:", this.rhymes);
        console.log("Synonyms fetched:", this.synonyms);
        console.log("Raw thesaurus results:", this.rawThesaurusResults);
        console.log("Raw dictionary results:", this.rawDictionaryResults);
      } catch (error) {
        console.error(
          "Error fetching rhymes, synonyms, or dictionary data:",
          error
        );
      }
    },
    clearResults() {
      this.rhymes = [];
      this.synonyms = [];
      this.rawThesaurusResults = null;
      this.rawDictionaryResults = null;
    },
  },
};
</script>
<style scoped></style>
