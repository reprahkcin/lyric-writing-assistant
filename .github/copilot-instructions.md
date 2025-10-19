# Lyric Writing Assistant - AI Agent Instructions

## Project Overview

A Vue 3 single-page application for songwriting that helps users create, organize, and structure lyrics with musical context. Built with Vue 3, Vuex for state management, Vue Router, and Bootstrap 5 UI. Uses browser localStorage for persistence.

## Architecture

### State Management (Vuex Store)

- **Centralized store** at `src/store/store.js` manages all application state
- **LocalStorage persistence**: Auto-saves every 5 seconds via `startAutoSave` action
- **State structure**: `songs` array, `activeSong` object, musical data (scales, progressions, moods, prompts)
- **Critical pattern**: Always use Vuex actions for state changes, never mutate state directly
- **Vuex helpers**: Use `mapGetters` and `mapActions` in components (not `mapState` or `mapMutations`)

### Component Architecture

- **View-level routing**: `SongLibraryView` (list) → `SongView` (editor with tabs)
- **Tab-based editing**: SongView uses custom tab switching (`activeTab` data property) to render:
  - `SongDetailsTab` - song metadata (title, key, scale, mood, theme)
  - `SongSectionsTab` - section container
  - `SongResourcesTab` - musical tools
  - `SongExportTab` - export/print
- **Section pattern**: Each song has `sections[]` array where each section is self-contained with its own `lines[]`, `chordProgression`, `brainstormingText`, and `isMinimized` state

### Musical Data System

- **Scales**: Located in `src/data/scales.js` - each scale has `notes(key)` function that generates scale notes dynamically based on selected key
- **Chord progressions**: Scale-specific JSON files (e.g., `Major_Progressions.json`, `Dorian_Progressions.json`) in `src/data/`
- **Dynamic progression loading**: `updateChordProgressions` action in store switches progression data based on `activeSong.scale`
- **Section templates**: Predefined song structures (e.g., "Standard": `["v", "c", "v", "c", "b", "c"]`) in `src/data/sectionTemplates.js`

### External API Integration

- **RhymeThesaurusPanel**: Fetches from 3 APIs - RhymeBrain (rhymes, no key required), Merriam-Webster Dictionary, Merriam-Webster Thesaurus
- **API Key Setup**:
  1. Visit https://dictionaryapi.com/ and register for free account
  2. Request API keys for both Dictionary and Thesaurus products
  3. Copy `.env.example` to `.env` and add your keys
  4. Keys are loaded via `process.env.VUE_APP_DICTIONARY_API_KEY` and `process.env.VUE_APP_THESAURUS_API_KEY`
- **Graceful degradation**: Component should handle missing API keys with user-friendly messages
- **DOMPurify**: All user input in RhymeThesaurusPanel is sanitized via computed setters
- **No backend server**: The `server/` directory is unused - this is a pure client-side application

## Development Workflow

### Running the Application

```bash
yarn serve          # Development server on localhost:8080
yarn build          # Production build for deployment
yarn lint           # ESLint validation
yarn deploy         # Deploy to GitHub Pages
```

### Build Configuration

- **Vue CLI**: Uses `@vue/cli-service` with custom webpack config in `vue.config.js`
- **Production path**: `/lyric-writing-assistant/` (GitHub Pages subdirectory)
- **Webpack feature flags**: Defined in `vue.config.js` to suppress Vue warnings

### Common Patterns

#### Form Input Save Pattern (CRITICAL for preventing data loss)

**Always follow this pattern for form inputs:**

```javascript
// Text inputs - save on blur
<input
  v-model="localValue"
  @input="setUnsavedChanges(true)"  // Mark as unsaved immediately
  @blur="saveToVuex"                 // Save to Vuex on blur
/>

// Selects/dropdowns - save on change
<select
  v-model="localValue"
  @change="saveToVuex"               // Save immediately on selection
/>

// Actions that modify arrays/objects - save immediately
moveItem() {
  // ... modify data ...
  this.saveToVuex()                  // MUST save after modifying
}
```

**Anti-patterns that cause data loss:**

- ❌ Modifying local state without saving to Vuex
- ❌ Relying only on auto-save (user loses up to 5 seconds of work)
- ❌ Forgetting `@blur` handlers on text inputs
- ❌ Using `@input` for save (causes too many saves, use for `setUnsavedChanges` only)

#### Adding a New Song Property

1. Update the default song object in `addSong` action (`src/store/store.js`)
2. Add mutation/getter if needed
3. Update component that displays/edits the property
4. Consider localStorage migration if changing existing data structure

#### Working with Sections

- Sections use unique timestamp-based IDs (`new Date().getTime()`)
- Always dispatch `updateActiveSongSection` after modifying section properties
- Section minimize/maximize state is stored per-section (`isMinimized` property)
- Use `setUnsavedChanges(true)` when modifying section content

#### Vuex Action Flow

```javascript
// In component
...mapActions(['updateActiveSong', 'setUnsavedChanges'])

// On user input
@input="setUnsavedChanges(true)"
@blur="saveMethodThatDispatchesVuexAction"
```

## Code Conventions

### File Organization

- **Views**: Top-level routed components in `src/views/`
- **Components**: Reusable components in `src/components/`, tabs in `src/components/tabs/`
- **Data**: Static/computed data exports in `src/data/` (JS or JSON)
- **Path aliases**: Use `@/` for `src/` directory (configured in `jsconfig.json`)

### Vue Component Structure

- **Options API**: All components use Vue 3 Options API (not Composition API)
- **Bootstrap classes**: Use Bootstrap 5 utility classes extensively (`btn`, `card`, `form-control`, etc.)
- **Icons**: Bootstrap Icons via `<span class="bi bi-*"></span>`
- **Custom styles**: Global styles in `src/css/style.css`, component scoped styles in `<style scoped>`

### State Modification Pattern

```javascript
// CORRECT: Use actions
this.updateActiveSong({ ...this.activeSong, title: newTitle });

// WRONG: Never mutate state directly
this.$store.state.activeSong.title = newTitle;
```

## Key Files Reference

- `src/store/store.js` - Complete application state and business logic
- `src/router/router.js` - Route definitions (only 2 routes)
- `src/data/scales.js` - Musical scale definitions with note generation
- `src/components/SongSection.vue` - Core section editing component (~390 lines)
- `src/views/SongView.vue` - Main song editing interface with tab navigation

## Testing Strategy

**Current State**: No test infrastructure implemented

**Recommended Approach** (when ready to add tests):

- **Framework**: Vitest (Vue 3 compatible, fast, ESM-first)
- **Priority test areas**:
  1. **Vuex Store**: Actions and mutations (e.g., `addSong`, `updateActiveSongSection`, `updateChordProgressions`)
  2. **Musical Data**: Scale note generation (`src/data/scales.js` - `generateScale` function)
  3. **Data Integrity**: LocalStorage save/load cycles
  4. **Critical User Flows**: Section creation, line editing, song saving
- **Installation**:
  ```bash
  yarn add -D vitest @vue/test-utils happy-dom
  ```
- **Example test structure**:

  ```javascript
  // tests/store.spec.js
  import { createStore } from "vuex";
  import { describe, it, expect } from "vitest";

  describe("Vuex Store", () => {
    it("should add a new song with default properties", () => {
      // Test addSong action
    });
  });
  ```

## Deployment

- Builds to `dist/` directory
- Deployed to GitHub Pages via `gh-pages` package
- Base URL is `/lyric-writing-assistant/` in production
- Pure client-side app (no backend server needed)
