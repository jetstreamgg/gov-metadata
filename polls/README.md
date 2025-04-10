# Polls Directory

This directory contains records of community polls conducted within the governance system.

## Directory Structure

The `polls` directory is organized as follows:

```
polls/
├── 2024/ # Contains polls conducted in 2024
│ └── 2024-05-20-community-sentiment.md
├── 2023/ # Contains polls conducted in 2023
│ └── 2023-12-10-feature-request.md
├── ... # Additional year directories as needed
├── templates/ # Contains templates for creating new poll files
│ └── poll-template.md
├── meta/ # Contains metadata related to polls (e.g., schema)
│ └── poll-metadata-schema.json
├── index.json # (Optional) An index of all polls for quick lookup
└── README.md # This file
```

## File Naming Convention

Poll files should follow the pattern: `<yyyy-mm-dd>-<description>.md`.

- `<yyyy-mm-dd>`: The date the poll was created or concluded.
- `<description>`: A brief, hyphenated description of the poll's topic (e.g., `community-sentiment`, `feature-request`).

## Components

- **Year Directories (`YYYY/`)**: Store historical records of polls, organized by the year they were conducted.
- **`templates/`**: Contains template files (`.md`) to ensure consistency when creating new polls. These templates might include standard YAML frontmatter for options and results.
- **`meta/`**: Holds metadata related to the polling process, such as JSON schemas for poll structures or result formats.
- **`index.json`**: (Optional) A JSON file that could provide a quick index or summary of all polls conducted.
- **`README.md`**: Provides an overview of this directory's structure, purpose, and conventions.

## Usage

- Create new poll files within the appropriate year directory (e.g., `2024/`).
- Use the naming convention `<yyyy-mm-dd>-<description>.md`.
- Utilize the templates in `templates/` to ensure consistent formatting, especially for YAML frontmatter defining options and recording results.
- Refer to schemas in `meta/` if applicable for structuring poll data.
