# Executive Votes Repository

This repository stores records of executive votes within the governance system.

## Directory Structure

The `executive-votes` repository is organized as follows:

```
executive-votes/
├── active/ # Contains executive votes currently under consideration
│ └── executive-vote-active-proposal.md
├── 2024/ # Contains executive votes executed or concluded in 2024
│ └── executive-vote-2024-01-15-update-oracle.md
├── 2023/ # Contains executive votes executed or concluded in 2023
│ └── executive-vote-2023-11-01-parameter-change.md
├── ... # Additional year directories as needed
├── templates/ # Contains templates for creating new executive vote files
│ └── executive-vote-template.md
├── index.json # (Optional) An index of all executive votes for quick lookup
└── README.md # This file
```

## File Naming Convention

Executive vote files should follow the pattern: `executive-vote-<yyyy-mm-dd>-<description>.md`.

- `<yyyy-mm-dd>`: The date the vote was proposed or enacted.
- `<description>`: A brief, hyphenated description of the vote's purpose (e.g., `update-oracle`, `parameter-change`).

## Components

- **`active/`**: Holds Markdown files for executive votes that are currently live or awaiting execution.
- **Year Directories (`YYYY/`)**: Store historical records of executive votes, organized by the year they were concluded or executed.
- **`templates/`**: Contains template files (`.md`) to ensure consistency when drafting new executive votes.
- **`index.json`**: (Optional) A JSON file that could provide a quick index or summary of all executive votes, potentially linking IDs to descriptions or dates.
- **`README.md`**: Provides an overview of this repository's structure and conventions.

## Usage

- Place ongoing executive votes in the `active/` directory.
- Once a vote is concluded (passed or rejected), move its corresponding file from `active/` to the relevant year directory (e.g., `2024/`).
- Use the naming convention `executive-vote-<yyyy-mm-dd>-<description>.md` for all vote files.
- Utilize the templates in `templates/` for creating new vote proposals.
