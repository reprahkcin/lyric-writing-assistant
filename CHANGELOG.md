# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 07-06-2025

### Added

- **Multi-View Architecture**: Completely restructured the app into separate views for better organization and user experience.
  - **SongLibraryView**: Dedicated view for managing the song library with improved song management UI.
  - **SongView**: Individual song view with tabbed interface for different aspects of song creation.
  - **Tabbed Interface**: Each song now has tabs for Details, Sections, Musical Resources, and Export.
- **New Tab Components**:
  - **SongDetailsTab**: Comprehensive song metadata management with floating labels for compact design.
  - **SongSectionsTab**: Dedicated interface for managing song sections with improved layout.
  - **SongResourcesTab**: Musical tools and resources including Chrome Music Lab integration.
  - **SongExportTab**: Plain text export and print functionality.
- **Enhanced Router**: Updated Vue Router configuration to support the new multi-view architecture.
- **Floating Labels**: Implemented Bootstrap floating labels throughout the song details form for space-efficient design.

### Changed

- **Major UI Redesign**: Completely overhauled the user interface for better organization and efficiency.
- **Compact Layout**: Redesigned all components to be more space-efficient as songs develop and grow longer.
- **Form Organization**: Reorganized song details form into logical sections (Basic Information, Musical Information, Content Information, Song Structure).
- **Bootstrap-First Approach**: Reduced custom CSS in favor of Bootstrap classes for better maintainability.
- **Component Architecture**: Split monolithic components into smaller, focused components for better maintainability.
- **Navigation**: Updated App.vue to use router-view instead of single-page layout.

### Fixed

- **Vuex Store**: Added missing `RESET_STORE` mutation to handle song library management properly.
- **Vue Feature Flags**: Fixed Vue 3 feature flag warnings by properly configuring webpack DefinePlugin.
- **Auto-Resize Method**: Fixed runtime errors in SongComplete.vue by adding null checks and fallback to refs.
- **Prop Mutation**: Fixed lint errors in SongDetailsTab by replacing direct prop mutations with computed properties using getters/setters.
- **Router Import**: Removed unused store import from router.js to eliminate lint errors.
- **Package Management**: Removed conflicting package-lock.json to ensure consistent yarn usage.

### Technical Improvements

- **Code Organization**: Better separation of concerns with dedicated views and tab components.
- **State Management**: Improved Vuex store usage with proper mutations and getters.
- **Responsive Design**: Enhanced mobile responsiveness with Bootstrap grid system.
- **Performance**: Optimized component rendering and state updates.
- **Maintainability**: Reduced custom CSS and improved code structure for easier maintenance.

## [1.0.6] - 01-11-2025

### Fixed

- Corrected the `G# diminished` chord data in `chords.json`.
- Updated the `getChordName` method in `ChordTable.vue` to properly distinguish between minor and diminished chords.
- Ensured the chord table updates correctly when the key or scale is changed.
- Aligned chord diagrams to the bottom of their cells using Bootstrap classes.

## [1.0.5] - 01-10-2025

### Fixed

- Corrected the `Pentatonic` scale's chord sequence in `scales.js` to display "Maj, min, min, Maj, min".
- Updated the `selectedScaleChords` computed property in `SongComplete.vue` to handle scales with fewer than 7 chords.

## [1.0.4] - 01-9-2025

### Fixed

- Ensured sections start minimized when created individually or from a template in `SongComplete.vue`.
- Corrected the `applyTemplate` method in `SongComplete.vue` to handle template application properly.
- Updated `SongSection.vue` to persist the minimized state of sections.
- Updated `store.js` to ensure new sections start minimized and persist their state.

## [1.0.3] - 01-8-2025

### Fixed

- Ensured the theme dropdown in `SongComplete.vue` stays displaying "Write your own custom theme" when typing into the second input field.
- Removed the placeholder text from the custom theme input field in `SongComplete.vue`.

## [1.0.2] - 01-7-2025

### Fixed

- Updated the interval table in `SongComplete.vue` to use the correct Roman numeral notation for each scale.

## [1.0.1] - 01-6-2025

### Fixed

- Corrected the `applyChordProgression` function to handle all Roman numeral variations, including diminished second chords (ii°).

## [1.0.0] - 01-5-2025

### Added

- Initial release of the application.
- Key features:
  - **Song Library**: Store and manage multiple songs using local storage.
  - **Dynamic Key and Scale Selection**: Choose from various keys and scales to fit your song's mood and style.
  - **Mood Selection**: Select a mood for your song and get suggestions for musical implications.
  - **Section Templates**: Use predefined templates for song sections (verse, chorus, bridge) to structure your song.
  - **Chord Progressions**: Automatically generate chord progressions based on the selected key and scale.
  - **Chrome Music Lab Integration**: Access Chrome Music Lab directly within the app to experiment with melodies and rhythms.
  - **Rhyme and Thesaurus Helper**: Find rhymes, synonyms, idioms, and related words to enhance your lyrics.
  - **Narrative Outline**: Outline the narrative plot points for each section of your song.
  - **Auto-Save**: Automatically save your progress to local storage to prevent data loss.
  - **Plain Text Layout**: View and copy your song in a plain text (tab) format for easy sharing and printing.
  - **Countdown Timer**: Use a countdown timer to challenge yourself to write within a set time limit.

### Changed

- Was not keeping track until now
