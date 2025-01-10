# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
