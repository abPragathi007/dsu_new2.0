import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'Rform', 'front');
const destDir = path.join(__dirname, '..', 'public', 'Rform');

// Ensure destination directory exists
fs.ensureDirSync(destDir);

// Copy all files from source to destination
fs.copySync(sourceDir, destDir, { overwrite: true });

console.log('Registration form files copied to public directory');
