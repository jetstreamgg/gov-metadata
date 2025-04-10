# Governance Metadata Repository

This repository serves as the central location for storing governance-related metadata files for the Sky Protocol, primarily in Markdown format.

## Repository Structure

- `/polls`: Contains metadata for governance polls.
- `/executive-votes`: Contains metadata for executive votes.
- `/delegates`: Contains metadata for recognized delegates, typically organized by address.
- `/scripts`: Contains utility scripts for managing repository data, primarily for index generation.
- `/.github/workflows`: Contains GitHub Actions workflows for automation, such as automatically updating index files.

## Index Generation Scripts

The `scripts/` directory contains TypeScript scripts used to automatically generate JSON index files (`index.json`) within the `polls`, `executive-votes`, and `delegates` directories. These index files provide a convenient, aggregated view of the metadata contained in the Markdown files within each respective directory.

**Purpose:**

- To easily query or list all items of a specific type (e.g., all polls) without manually parsing each Markdown file.
- To provide a structured data source for frontends, dashboards, or other tools that need to display or process governance information.

**Scripts:**

- `generate-polls-index.ts`: Indexes files in `/polls`.
- `generate-exec-index.ts`: Indexes files in `/executive-votes`.
- `generate-delegates-index.ts`: Indexes files in `/delegates`.

### Usage

The scripts are managed using `pnpm` within the `scripts/` directory.

1.  **Navigate to the scripts directory:**

    ```bash
    cd scripts
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the index generation scripts:**
    - To generate all indexes:
      ```bash
      pnpm run generate:all
      ```
    - To generate only a specific index:
      ```bash
      pnpm run generate:polls
      pnpm run generate:exec
      pnpm run generate:delegates
      ```

## Automation

A GitHub Actions workflow located in `.github/workflows/update-index.yml` is configured to run automatically on pushes to the `main` branch.

This workflow performs the following steps:

1.  Checks out the repository code.
2.  Sets up Node.js and pnpm.
3.  Installs dependencies within the `scripts/` directory.
4.  Runs the `pnpm run generate:all` command to regenerate all `index.json` files.
5.  Checks if any of the `index.json` files have changed.
6.  If changes are detected, it commits the updated `index.json` file(s) back to the repository using a bot account.

This ensures that the index files always reflect the latest state of the Markdown metadata files in the repository.
