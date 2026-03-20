/**
 * Generates E2E test fixture HTML files from BEMJSON definitions.
 *
 * For each component's hermione.bemjson.js, this script:
 * 1. Evaluates the BEMJSON data
 * 2. Compiles the content to HTML using the bem-xjst BEMHTML engine
 * 3. Wraps the result in a full HTML page that loads CSS/JS via Vite
 * 4. Writes to test/e2e/fixtures/{block}.html
 *
 * Usage: node test/e2e/generate-fixtures.js
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '../..');
const fixturesDir = resolve(__dirname, 'fixtures');

const require = createRequire(import.meta.url);
const bemxjst = require('bem-xjst');

// Ensure fixtures directory exists
mkdirSync(fixturesDir, { recursive: true });

// ---- Build BEMHTML engine (same logic as compile-bemhtml.js) ----

const bemCorePath = resolve(projectRoot, 'node_modules/bem-core');

const levels = [
    resolve(bemCorePath, 'common.blocks'),
    resolve(bemCorePath, 'desktop.blocks'),
    resolve(projectRoot, 'common.blocks'),
    resolve(projectRoot, 'desktop.blocks'),
    resolve(projectRoot, 'design/common.blocks'),
    resolve(projectRoot, 'design/desktop.blocks'),
    resolve(projectRoot, 'test.blocks'),
];

function findBemhtmlFiles(dir) {
    if (!existsSync(dir)) return [];
    const results = [];
    const { readdirSync: readdir } = require('fs');

    function walk(d) {
        let entries;
        try {
            entries = readdir(d, { withFileTypes: true });
        } catch {
            return;
        }
        for (const entry of entries) {
            const fullPath = resolve(d, entry.name);
            if (entry.isDirectory()) {
                if (entry.name.endsWith('.tests') ||
                    entry.name.endsWith('.examples') ||
                    entry.name.endsWith('.tmpl-specs') ||
                    entry.name === 'node_modules') {
                    continue;
                }
                walk(fullPath);
            } else if (entry.name.endsWith('.bemhtml.js')) {
                results.push(fullPath);
            }
        }
    }
    walk(dir);
    const isModPath = (p) => /\/_[^_/]/.test(p);
    return results.sort((a, b) => {
        const aIsMod = isModPath(a);
        const bIsMod = isModPath(b);
        if (aIsMod !== bIsMod) return aIsMod ? 1 : -1;
        return a < b ? -1 : a > b ? 1 : 0;
    });
}

console.log('Gathering BEMHTML templates...');
const allFiles = [];
for (const level of levels) {
    const files = findBemhtmlFiles(level);
    if (files.length > 0) {
        console.log(`  ${level}: ${files.length} templates`);
        allFiles.push(...files);
    }
}

// Re-order cross-block templates
const crossBlockFiles = new Set();
for (const f of allFiles) {
    const code = readFileSync(f, 'utf8');
    const m = code.match(/block\(['"]([^'"]+)['"]\)/);
    if (m) {
        for (const level of levels) {
            if (f.startsWith(level + '/')) {
                const rel = f.slice(level.length + 1);
                const blockDir = rel.split('/')[0];
                if (m[1] !== blockDir) {
                    crossBlockFiles.add(f);
                }
                break;
            }
        }
    }
}
if (crossBlockFiles.size > 0) {
    const normal = allFiles.filter(f => !crossBlockFiles.has(f));
    const cross = allFiles.filter(f => crossBlockFiles.has(f));
    allFiles.length = 0;
    allFiles.push(...normal, ...cross);
}

console.log(`Total: ${allFiles.length} template files`);

const concatenated = allFiles
    .map(f => readFileSync(f, 'utf8'))
    .join('\n;\n');

console.log('Compiling BEMHTML engine...');
const BEMHTML = bemxjst.bemhtml.compile(concatenated, {});

// ---- Find all hermione.bemjson.js files ----

const blocksDir = resolve(projectRoot, 'common.blocks');
const blockDirs = readdirSync(blocksDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

let generated = 0;

for (const blockName of blockDirs) {
    const bemjsonPath = resolve(blocksDir, blockName, `${blockName}.tests`, 'hermione.bemjson.js');
    if (!existsSync(bemjsonPath)) continue;

    const bemjsonCode = readFileSync(bemjsonPath, 'utf8');

    // Evaluate the BEMJSON expression
    let bemjson;
    try {
        bemjson = eval(bemjsonCode);
    } catch (e) {
        console.error(`  SKIP ${blockName}: failed to evaluate BEMJSON: ${e.message}`);
        continue;
    }

    // Apply BEMHTML to the content array — this generates the inner page HTML.
    // The `page` block template normally wraps everything in <html><body> etc.,
    // but we build our own HTML wrapper to load Vite-served CSS/JS.
    let contentHtml = '';
    const content = bemjson.content;
    if (content) {
        try {
            // Wrap in an array if needed, then apply each item
            const items = Array.isArray(content) ? content : [content];
            contentHtml = items.map(item => {
                if (item === null || item === undefined) return '';
                if (typeof item === 'string') return item;
                try {
                    return BEMHTML.apply(item);
                } catch (e) {
                    console.error(`  WARNING ${blockName}: BEMHTML error for item: ${e.message}`);
                    return `<!-- BEMHTML error: ${e.message} -->`;
                }
            }).join('\n');
        } catch (e) {
            console.error(`  SKIP ${blockName}: BEMHTML error: ${e.message}`);
            continue;
        }
    }

    // Build the full page HTML
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>E2E: ${blockName}</title>
    <style>
        /* Minimal reset for consistent screenshots */
        body {
            margin: 8px;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
        }
        .page { min-height: 0; }
    </style>
</head>
<body class="page page_theme_islands">
${contentHtml}
<script type="module" src="/test/e2e/e2e-entry.js"></script>
</body>
</html>
`;

    const outputPath = resolve(fixturesDir, `${blockName}.html`);
    writeFileSync(outputPath, html, 'utf8');
    console.log(`  Generated: ${blockName}.html`);
    generated++;
}

console.log(`\nGenerated ${generated} fixture HTML files in ${fixturesDir}`);
