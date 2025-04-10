import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';

// Define interfaces (adjust fields if delegate metadata differs)
interface DelegateMetadata {
  name?: string; // Example: Delegate name
  address?: string; // Example: Delegate address
  // Add other expected fields for delegates here
  [key: string]: any;
}

interface IndexEntry {
  path: string;
  metadata: DelegateMetadata;
}

// Define the directory containing the delegate markdown files
const delegateDirectory = path.join(__dirname, '..', 'delegates');
// Define the output path for the index file
const indexFilePath = path.join(__dirname, '..', 'delegates', 'index.json');

async function generateDelegateIndex() {
  try {
    // Check if the directory exists
    if (!fs.existsSync(delegateDirectory)) {
      console.log(
        `Delegates directory not found: ${delegateDirectory}. Skipping generation.`,
      );
      return;
    }

    console.log(`Searching for markdown files in: ${delegateDirectory}`);
    // Find all .md files recursively
    const files = await glob('**/*.md', {
      cwd: delegateDirectory,
      ignore: ['**/README.md', 'meta/**', 'templates/**'],
    });

    if (files.length === 0) {
      console.log('No markdown files found in the delegates directory.');
      fs.writeFileSync(indexFilePath, JSON.stringify([], null, 2));
      return;
    }

    console.log(`Found ${files.length} files. Processing...`);

    const indexData: IndexEntry[] = [];

    for (const file of files) {
      const filePath = path.join(delegateDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(fileContent);
      const metadata = parsed.data as DelegateMetadata;

      // Construct the relative path from the repo root
      const relativePath = path.join('delegates', file);

      // Extract the directory name (potential address) from the relative path
      const dirName = path.basename(path.dirname(relativePath));

      // Check if the directory name looks like an address and add it to metadata
      if (dirName.startsWith('0x')) {
        metadata.address = dirName;
      }

      indexData.push({
        path: relativePath,
        metadata: metadata, // Metadata now includes the address if found
      });
    }

    // Sort the index data by path for consistency
    indexData.sort((a, b) => a.path.localeCompare(b.path));

    // Write the aggregated data to index.json
    fs.writeFileSync(indexFilePath, JSON.stringify(indexData, null, 2));

    console.log(
      `Successfully generated delegates index file at: ${indexFilePath}`,
    );
  } catch (error) {
    console.error('Error generating delegates index:', error);
    process.exit(1); // Exit with error code
  }
}

generateDelegateIndex();
