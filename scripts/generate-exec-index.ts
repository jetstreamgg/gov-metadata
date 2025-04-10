import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';

// Define interfaces (can potentially be shared in a separate types file later)
interface ExecMetadata {
  title: string;
  summary?: string;
  discussion_link?: string;
  proposal_link?: string; // Example: Executive votes might have a proposal link
  // Add other expected fields for executive votes here
  [key: string]: any;
}

interface IndexEntry {
  path: string;
  metadata: ExecMetadata;
}

// Define the directory containing the executive vote markdown files
const execVotesDirectory = path.join(__dirname, '..', 'executive-votes');
// Define the output path for the index file
const indexFilePath = path.join(
  __dirname,
  '..',
  'executive-votes',
  'index.json',
);

async function generateExecIndex() {
  try {
    // Check if the directory exists
    if (!fs.existsSync(execVotesDirectory)) {
      console.log(
        `Executive votes directory not found: ${execVotesDirectory}. Skipping generation.`,
      );
      // Optional: Create an empty index if needed, or just exit cleanly
      // fs.writeFileSync(indexFilePath, JSON.stringify([], null, 2));
      return;
    }

    console.log(`Searching for markdown files in: ${execVotesDirectory}`);
    // Find all .md files recursively
    const files = await glob('**/*.md', {
      cwd: execVotesDirectory,
      ignore: [
        '**/README.md', // Exclude any README.md file
        'meta/**', // Exclude files in any meta/ directory
        'templates/**', // Exclude files in any templates/ directory
      ],
    });

    if (files.length === 0) {
      console.log('No markdown files found in the executive votes directory.');
      fs.writeFileSync(indexFilePath, JSON.stringify([], null, 2));
      return;
    }

    console.log(`Found ${files.length} files. Processing...`);

    const indexData: IndexEntry[] = [];

    for (const file of files) {
      const filePath = path.join(execVotesDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(fileContent);
      const metadata = parsed.data as ExecMetadata;

      // Construct the relative path from the repo root
      const relativePath = path.join('executive-votes', file);

      indexData.push({
        path: relativePath,
        metadata: metadata,
      });
    }

    // Sort the index data by path for consistency
    indexData.sort((a, b) => a.path.localeCompare(b.path));

    // Write the aggregated data to index.json
    fs.writeFileSync(indexFilePath, JSON.stringify(indexData, null, 2));

    console.log(
      `Successfully generated executive index file at: ${indexFilePath}`,
    );
  } catch (error) {
    console.error('Error generating executive index:', error);
    process.exit(1); // Exit with error code
  }
}

generateExecIndex();
