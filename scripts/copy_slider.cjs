const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcFiles = [
  { src: path.join(root, 'dsu2_research.jpg'), destName: 'dsu-night.jpg' },
  { src: path.join(root, 'dsu3.jpg'), destName: 'dsu-admissions.jpg' },
  { src: path.join(root, '4.jpg'), destName: 'dsu-scholarships.jpg' },
  { src: path.join(root, 'DSU_Logo_1.jpg'), destName: 'dsu-research.jpg' },
];

const outDir = path.join(root, 'public', 'slider');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

srcFiles.forEach(({ src, destName }) => {
  const dest = path.join(outDir, destName);
  if (!fs.existsSync(src)) {
    console.warn(`Source not found: ${src} — skipping`);
    return;
  }
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
});

console.log('Slider images copy finished.');
