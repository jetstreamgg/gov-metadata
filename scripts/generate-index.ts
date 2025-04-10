import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
// Revert back to standard default import for gray-matter
import matter from 'gray-matter';

// Define an interface for the expected front matter structure (optional but good practice)
interface PollMetadata {
  title: string;
  summary?: string;
  discussion_link?: string;
  // Add other expected fields here
  [key: string]: any; // Allow additional fields
}

interface IndexEntry {
  path: string;
  metadata: PollMetadata;
}

// Define the directory containing the poll markdown files, relative to the script location
const pollsDirectory = path.join(__dirname, '..', 'polls');
// Define the output path for the index file, now inside the polls directory
const indexFilePath = path.join(__dirname, '..', 'polls', 'index.json');

async function generateIndex() {
  try {
    console.log(`Searching for markdown files in: ${pollsDirectory}`);
    // Find all .md files recursively in the polls directory,
    // excluding READMEs and files in meta/ or templates/ directories.
    const files = await glob('**/*.md', {
      cwd: pollsDirectory,
      ignore: [
        '**/README.md', // Exclude any README.md file
        'meta/**', // Exclude files in any meta/ directory
        'templates/**', // Exclude files in any templates/ directory
      ],
    });

    if (files.length === 0) {
      console.log('No markdown files found in the polls directory.');
      // Write an empty array or handle as needed
      fs.writeFileSync(indexFilePath, JSON.stringify([], null, 2));
      return;
    }

    console.log(`Found ${files.length} files. Processing...`);

    const indexData: IndexEntry[] = [];

    for (const file of files) {
      const filePath = path.join(pollsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      // Parse front matter using the default import.
      // Ensure dependencies are installed (`npm install` in `scripts/`)
      // and tsconfig settings (`esModuleInterop: true`) are correct if errors persist.
      const parsed = matter(fileContent);
      const metadata = parsed.data as PollMetadata; // Type assertion

      // Construct the relative path from the repo root
      const relativePath = path.join('polls', file);

      indexData.push({
        path: relativePath,
        metadata: metadata, // Use the asserted metadata
      });
    }

    // Sort the index data by path for consistency
    indexData.sort((a, b) => a.path.localeCompare(b.path));

    // Write the aggregated data to index.json
    fs.writeFileSync(indexFilePath, JSON.stringify(indexData, null, 2));

    console.log(`Successfully generated index file at: ${indexFilePath}`);
  } catch (error) {
    console.error('Error generating index:', error);
    process.exit(1); // Exit with error code
  }
}

generateIndex();
