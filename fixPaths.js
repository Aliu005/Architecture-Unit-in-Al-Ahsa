import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const basePath = '/dist/'; // ما قبل build

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // يضيف /dist/ قبل كل src أو href يبدأ بـ /
  content = content.replace(/(src|href)=["']\/(?!dist)/g, `$1="${basePath}`);
  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
    else if (fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) replaceInFile(fullPath);
  }
}

walk(distDir);
console.log('All paths fixed!');
