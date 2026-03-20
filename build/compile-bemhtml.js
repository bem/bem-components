/**
 * Compiles all BEMHTML templates into a single browser-ready bundle.
 *
 * Gathers .bemhtml.js files from bem-core and bem-components levels,
 * concatenates them in the correct order, and uses bem-xjst to generate
 * a self-contained BEMHTML engine with all templates compiled in.
 *
 * Output: test/browser/bemhtml-compiled.js (ES module, auto-generated)
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// bem-xjst is CommonJS, so we need createRequire
const require = createRequire(import.meta.url);
const bemxjst = require('bem-xjst');

// Resolve bem-core location (could be node_modules or peerDep)
const bemCorePath = resolve(projectRoot, 'node_modules/bem-core');

// Define levels in priority order (later levels override earlier ones)
const levels = [
    resolve(bemCorePath, 'common.blocks'),
    resolve(bemCorePath, 'desktop.blocks'),
    resolve(projectRoot, 'common.blocks'),
    resolve(projectRoot, 'desktop.blocks'),
    resolve(projectRoot, 'design/common.blocks'),
    resolve(projectRoot, 'design/desktop.blocks'),
];

/**
 * Recursively find all .bemhtml.js files in a directory.
 * Uses Node.js built-in globSync (available in Node 22+) with fallback.
 */
function findBemhtmlFiles(dir) {
    if (!existsSync(dir)) return [];

    // Use a simple recursive approach
    const results = [];
    const { readdirSync } = await_imports();

    function walk(d) {
        let entries;
        try {
            entries = readdirSync(d, { withFileTypes: true });
        } catch {
            return;
        }
        for (const entry of entries) {
            const fullPath = resolve(d, entry.name);
            if (entry.isDirectory()) {
                // Skip test/example/spec directories
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
    // Sort so that base block/element templates come before modifier templates.
    // In bem-xjst the last matching template wins, so more specific
    // modifier templates (in _mod/ dirs) must appear after the base.
    // Modifier dirs start with a single underscore (e.g. /_type/),
    // while element dirs start with double underscore (e.g. /__elem/).
    const isModPath = (p) => /\/_[^_/]/.test(p);
    return results.sort((a, b) => {
        const aIsMod = isModPath(a);
        const bIsMod = isModPath(b);
        if (aIsMod !== bIsMod) return aIsMod ? 1 : -1;
        return a < b ? -1 : a > b ? 1 : 0;
    });
}

function await_imports() {
    const fs = require('fs');
    return { readdirSync: fs.readdirSync };
}

// Gather all template files
console.log('Gathering BEMHTML templates...');
const allFiles = [];
for (const level of levels) {
    const files = findBemhtmlFiles(level);
    if (files.length > 0) {
        console.log(`  ${level}: ${files.length} templates`);
        allFiles.push(...files);
    }
}

// Detect cross-block templates (files that template a different block than
// the block directory they reside in) and move them to the end so they
// override the target block's base templates.
const crossBlockFiles = new Set();
for (const f of allFiles) {
    const code = readFileSync(f, 'utf8');
    const m = code.match(/block\(['"]([^'"]+)['"]\)/);
    if (m) {
        // Extract the block directory name from the path
        // e.g. .../common.blocks/attach/__button/attach__button.bemhtml.js → "attach"
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
    // Move cross-block templates to the end
    const normal = allFiles.filter(f => !crossBlockFiles.has(f));
    const cross = allFiles.filter(f => crossBlockFiles.has(f));
    allFiles.length = 0;
    allFiles.push(...normal, ...cross);
    console.log(`Reordered ${cross.length} cross-block template(s) to end`);
}

console.log(`Total: ${allFiles.length} template files`);

if (allFiles.length === 0) {
    console.error('No .bemhtml.js files found!');
    process.exit(1);
}

// Concatenate all template code
const concatenated = allFiles
    .map(f => {
        const code = readFileSync(f, 'utf8');
        return `/* ${f.replace(projectRoot + '/', '')} */\n${code}`;
    })
    .join('\n;\n');

// Generate browser-ready bundle using bem-xjst
console.log('Compiling with bem-xjst...');
const generated = bemxjst.bemhtml.generate(concatenated, {
    exportName: 'BEMHTML',
});

// Post-process the generated code for ESM compatibility:
//
// 1. In ESM, `this` is undefined (strict mode), so `this.window` crashes.
//    Replace `this.window || this.global || this` with `global` (the IIFE param).
//
// 2. Ensure BEMHTML variable is always assigned even when YModules
//    (the `modules` global) is present. The generated code has a branch that only
//    calls modules.define() without assigning to the outer `var BEMHTML`.
let patched = generated;

// Fix `this` references inside the IIFE (this === undefined in ESM strict mode)
patched = patched.replace(
    'var glob = this.window || this.global || this;',
    'var glob = (typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global);'
);

// Ensure BEMHTML is assigned in the YModules branch
patched = patched.replace(
    /modules\.define\("BEMHTML",\[\],function\(provide\) \{ var engine = buildBemXjst\(\{\}\);provide\(engine\);\}\);/,
    'modules.define("BEMHTML",[],function(provide) { var engine = buildBemXjst({}); BEMHTML = engine; provide(engine);});'
);

// Wrap as ES module
const output = `// Auto-generated by build/compile-bemhtml.js — do not edit
${patched}
export default BEMHTML;
`;

const outputPath = resolve(projectRoot, 'test/browser/bemhtml-compiled.js');
writeFileSync(outputPath, output, 'utf8');
console.log(`Written to ${outputPath} (${(output.length / 1024).toFixed(1)} KB)`);
