import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const dist = path.resolve('dist');
const cssPath = path.join(dist, 'style.css');
const jsPath = path.join(dist, 'site.js');

if (!fs.existsSync(cssPath) || !fs.existsSync(jsPath)) {
  throw new Error('Expected dist/style.css and dist/site.js after build');
}

const hash = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 12);
const cssHash = hash(cssPath);
const jsHash = hash(jsPath);
const cssName = `style.${cssHash}.css`;
const jsName = `site.${jsHash}.js`;

fs.copyFileSync(cssPath, path.join(dist, cssName));
fs.copyFileSync(jsPath, path.join(dist, jsName));

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html')) {
      let html = fs.readFileSync(full, 'utf8');
      html = html.replace(/href=["']\/style\.css["']/g, `href="/${cssName}"`);
      html = html.replace(/src=["']\/site\.js["']/g, `src="/${jsName}"`);
      html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8"><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"><meta http-equiv="Pragma" content="no-cache"><meta http-equiv="Expires" content="0">');
      fs.writeFileSync(full, html);
    }
  }
}

walk(dist);
console.log(`Cache-busted assets: ${cssName}, ${jsName}`);
