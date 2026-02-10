#!/usr/bin/env node

/**
 * Export Packaging Script for Zaya Abaya & Hijab
 * 
 * Creates two ZIP files:
 * 1. Full source code (excluding node_modules and build artifacts)
 * 2. Static build ready for cPanel deployment
 */

import { createWriteStream, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FRONTEND_ROOT = join(__dirname, '..');
const EXPORTS_DIR = join(FRONTEND_ROOT, 'exports');
const DIST_DIR = join(FRONTEND_ROOT, 'dist');

// Ensure exports directory exists
if (!existsSync(EXPORTS_DIR)) {
  mkdirSync(EXPORTS_DIR, { recursive: true });
}

/**
 * Create a ZIP archive
 */
function createZip(outputPath, sourceDir, filter) {
  return new Promise((resolve, reject) => {
    const output = createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      console.log(`✓ Created ${outputPath} (${(archive.pointer() / 1024 / 1024).toFixed(2)} MB)`);
      resolve();
    });

    archive.on('error', reject);
    archive.pipe(output);

    // Add files recursively with filter
    function addDirectory(dir, baseDir = '') {
      const files = readdirSync(dir);
      
      for (const file of files) {
        const fullPath = join(dir, file);
        const relativePath = join(baseDir, file);
        const stat = statSync(fullPath);

        if (filter && !filter(relativePath, stat)) {
          continue;
        }

        if (stat.isDirectory()) {
          addDirectory(fullPath, relativePath);
        } else {
          archive.file(fullPath, { name: relativePath });
        }
      }
    }

    addDirectory(sourceDir);
    archive.finalize();
  });
}

/**
 * Package the static build (dist folder)
 */
async function packageStaticBuild() {
  console.log('\n📦 Packaging static build...');
  
  if (!existsSync(DIST_DIR)) {
    throw new Error('Build directory not found. Run "npm run build" first.');
  }

  const outputPath = join(EXPORTS_DIR, 'zaya-abaya-static.zip');
  await createZip(outputPath, DIST_DIR, null);
  
  console.log('✓ Static build packaged successfully');
  console.log(`  → Upload contents to cPanel public_html/`);
}

/**
 * Package the full source code
 */
async function packageSourceCode() {
  console.log('\n📦 Packaging source code...');

  const outputPath = join(EXPORTS_DIR, 'zaya-abaya-source.zip');
  
  // Exclude patterns
  const excludePatterns = [
    'node_modules',
    'dist',
    'exports',
    '.git',
    '.dfx',
    '.cache',
    'coverage',
    '.env',
    '.DS_Store',
    'Thumbs.db'
  ];

  const filter = (path, stat) => {
    const parts = path.split(/[/\\]/);
    return !parts.some(part => excludePatterns.includes(part));
  };

  await createZip(outputPath, FRONTEND_ROOT, filter);
  
  console.log('✓ Source code packaged successfully');
  console.log(`  → For development: extract, run "npm install", then "npm run build"`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Zaya Abaya & Hijab - Export Packaging');
  console.log('==========================================');

  try {
    // Check if build exists
    if (!existsSync(DIST_DIR)) {
      console.log('\n⚠️  Build directory not found. Running build first...');
      const { execSync } = await import('child_process');
      execSync('npm run build', { cwd: FRONTEND_ROOT, stdio: 'inherit' });
    }

    // Create both packages
    await packageStaticBuild();
    await packageSourceCode();

    console.log('\n✅ Export packaging complete!');
    console.log(`\nOutput location: ${EXPORTS_DIR}`);
    console.log('\nFiles created:');
    console.log('  1. zaya-abaya-static.zip  → Upload to cPanel');
    console.log('  2. zaya-abaya-source.zip  → Full source code');
    console.log('\nSee EXPORT.md for detailed upload instructions.');
    
  } catch (error) {
    console.error('\n❌ Error during packaging:', error.message);
    process.exit(1);
  }
}

main();
