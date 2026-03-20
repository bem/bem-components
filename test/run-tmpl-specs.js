/**
 * tmpl-specs runner — verifies BEMHTML templates produce correct HTML output.
 *
 * For each .bemjson.js / .html pair found in tmpl-specs directories,
 * compiles all BEMHTML templates from every level, applies the BEMJSON input,
 * and compares the result with the reference HTML.
 *
 * Usage: node --test test/run-tmpl-specs.js
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const bemxjst = require('bem-xjst');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

const bemCorePath = resolve(projectRoot, 'node_modules/bem-core');

// Levels in priority order (later overrides earlier)
const levels = [
    resolve(bemCorePath, 'common.blocks'),
    resolve(bemCorePath, 'desktop.blocks'),
    resolve(projectRoot, 'common.blocks'),
    resolve(projectRoot, 'desktop.blocks'),
    resolve(projectRoot, 'design/common.blocks'),
    resolve(projectRoot, 'design/desktop.blocks'),
];

/**
 * Recursively find all files matching a suffix in a directory.
 */
function findFiles(dir, suffix) {
    if (!existsSync(dir)) return [];
    const results = [];

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
                if (entry.name.endsWith('.tests') ||
                    entry.name.endsWith('.examples') ||
                    entry.name.endsWith('.tmpl-specs') ||
                    entry.name === 'node_modules') {
                    continue;
                }
                walk(fullPath);
            } else if (entry.name.endsWith(suffix)) {
                results.push(fullPath);
            }
        }
    }
    walk(dir);

    // Sort: base templates before modifier templates
    const isModPath = (p) => /\/_[^_/]/.test(p);
    return results.sort((a, b) => {
        const aIsMod = isModPath(a);
        const bIsMod = isModPath(b);
        if (aIsMod !== bIsMod) return aIsMod ? 1 : -1;
        return a < b ? -1 : a > b ? 1 : 0;
    });
}

/**
 * Gather all .bemhtml.js template files from all levels, concatenate, and compile.
 */
function compileAllTemplates() {
    const allFiles = [];
    for (const level of levels) {
        allFiles.push(...findFiles(level, '.bemhtml.js'));
    }

    // Move cross-block templates to the end (same logic as compile-bemhtml.js)
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

    const concatenated = allFiles
        .map(f => readFileSync(f, 'utf8'))
        .join('\n;\n');

    return bemxjst.bemhtml.compile(concatenated);
}

/**
 * Find all tmpl-specs directories and collect test pairs.
 */
function findTmplSpecs() {
    const specs = [];
    const searchDirs = [
        resolve(projectRoot, 'common.blocks'),
        resolve(projectRoot, 'desktop.blocks'),
        resolve(projectRoot, 'touch.blocks'),
    ];

    function walk(dir) {
        let entries;
        try {
            entries = readdirSync(dir, { withFileTypes: true });
        } catch {
            return;
        }
        for (const entry of entries) {
            const fullPath = resolve(dir, entry.name);
            if (!entry.isDirectory()) continue;

            if (entry.name.endsWith('.tmpl-specs')) {
                // Collect .bemjson.js files with matching .html
                const specFiles = readdirSync(fullPath);
                for (const sf of specFiles) {
                    if (sf.endsWith('.bemjson.js')) {
                        const baseName = sf.replace('.bemjson.js', '');
                        const htmlFile = baseName + '.html';
                        if (specFiles.includes(htmlFile)) {
                            specs.push({
                                name: `${basename(dirname(fullPath))}/${baseName}`,
                                bemjsonPath: resolve(fullPath, sf),
                                htmlPath: resolve(fullPath, htmlFile),
                            });
                        }
                    }
                }
            } else if (entry.name !== 'node_modules' &&
                       !entry.name.endsWith('.tests') &&
                       !entry.name.endsWith('.examples')) {
                walk(fullPath);
            }
        }
    }

    for (const dir of searchDirs) {
        if (existsSync(dir)) walk(dir);
    }
    return specs;
}

/**
 * Decode common HTML entities to their character equivalents.
 */
function decodeEntities(str) {
    return str
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'");
}

/**
 * Normalize a `class` attribute value: deduplicate, sort class names
 * alphabetically, remove `i-bem` (may or may not be present).
 */
function normalizeClassValue(value) {
    return [...new Set(value.split(/\s+/).filter(c => c && c !== 'i-bem'))]
        .sort()
        .join(' ');
}

/**
 * Normalize a `data-bem` JSON value: sort object keys for stable comparison.
 */
function normalizeDataBem(value) {
    try {
        const obj = JSON.parse(value);
        return JSON.stringify(obj, Object.keys(obj).sort());
    } catch {
        return value;
    }
}

/** Placeholder used for generated unique IDs */
const UNIQ_PLACEHOLDER = '{{UNIQ}}';

/**
 * Replace generated unique IDs and regex-style placeholders with a
 * stable placeholder. Handles:
 * - uniqNNNN (bem-xjst generated)
 * - {{uniq*\d+}} patterns in reference HTML
 * - {{\\w+\\s\\w+}} and other regex-like patterns in reference HTML
 * - space-separated lists of uniq IDs (e.g. in aria-owns)
 */
function replaceUniqIds(str) {
    return str
        // bem-xjst generates ids like "uniq" + random digits
        .replace(/uniq\d+(\s+uniq\d+)*/g, UNIQ_PLACEHOLDER)
        // reference HTML may use regex-style patterns like {{uniq*\d+}}
        .replace(/\{\{[^}]*\}\}/g, UNIQ_PLACEHOLDER);
}

/**
 * Normalize an HTML tag: sort attributes, unify quoting, sort classes,
 * normalize data-bem JSON, strip bare id attributes.
 */
function normalizeTag(tagStr) {
    const m = tagStr.match(/^<(\/?\s*[a-zA-Z][a-zA-Z0-9-]*)([\s\S]*)$/);
    if (!m) return tagStr;

    const tagName = m[1];
    let rest = m[2];

    // Self-closing?
    const selfClose = rest.endsWith('/');
    if (selfClose) rest = rest.slice(0, -1);

    // Parse attributes: name="value", name='value', name=value, or bare name
    const attrs = [];
    const attrRe = /([a-zA-Z_][\w-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/g;
    let am;
    while ((am = attrRe.exec(rest)) !== null) {
        const name = am[1];
        let value = am[2] !== undefined ? am[2]
            : am[3] !== undefined ? am[3]
            : am[4] !== undefined ? am[4]
            : null; // bare attribute

        if (value !== null) {
            value = decodeEntities(value);
        }

        // Normalize specific attribute values
        if (name === 'class' && value) {
            value = normalizeClassValue(value);
        } else if (name === 'data-bem' && value) {
            value = normalizeDataBem(value);
        }

        // Bare attributes with no value that correspond to generated unique IDs
        // (id, aria-labelledby, etc.) — normalize to placeholder
        if (value === null && (name === 'id' || name === 'aria-labelledby')) {
            value = UNIQ_PLACEHOLDER;
        }

        // Empty string values for ID-referencing attributes — also placeholder
        if (value === '' && (name === 'aria-labelledby' || name === 'aria-owns')) {
            value = UNIQ_PLACEHOLDER;
        }

        attrs.push({ name, value });
    }

    // Sort attributes by name
    attrs.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

    const attrStr = attrs.map(a => {
        if (a.value === null) return a.name;
        return `${a.name}="${a.value}"`;
    }).join(' ');

    const space = attrStr ? ' ' : '';
    const close = selfClose ? '/' : '';
    return `<${tagName}${space}${attrStr}${close}`;
}

/**
 * Normalize HTML for comparison:
 * - Collapse inter-tag whitespace
 * - Sort attributes within each tag
 * - Unify entity encoding in attribute values
 * - Sort CSS classes
 * - Normalize unique IDs
 * - Normalize data-bem JSON key order
 */
function normalizeHtml(html) {
    let s = html
        .replace(/\r\n/g, '\n')
        .trim();

    // Collapse whitespace between tags: "> ... <" => "><"
    s = s.replace(/>\s+</g, '><');

    // Normalize whitespace in text nodes (between > and <):
    // collapse runs of whitespace to a single space
    s = s.replace(/>([^<]+)</g, (_, text) => {
        const normalized = text.replace(/\s+/g, ' ').trim();
        return `>${normalized}<`;
    });

    // Normalize each tag
    s = s.replace(/<[^>]+>/g, (tag) => {
        if (tag.startsWith('</') || tag.startsWith('<!') || tag.startsWith('<?')) {
            return tag;
        }
        return normalizeTag(tag) + '>';
    });

    // Replace unique IDs everywhere (in attribute values, text, etc.)
    s = replaceUniqIds(s);

    return s;
}

// --- Main ---

console.log('Compiling all BEMHTML templates...');
const bemhtml = compileAllTemplates();
console.log('Templates compiled.\n');

const specs = findTmplSpecs();
console.log(`Found ${specs.length} tmpl-spec test pairs.\n`);

let passed = 0;
let failed = 0;

describe('tmpl-specs', () => {
    for (const spec of specs) {
        it(spec.name, () => {
            const bemjsonCode = readFileSync(spec.bemjsonPath, 'utf8');
            const expectedHtml = readFileSync(spec.htmlPath, 'utf8');

            // Evaluate BEMJSON (files use `({...})` or `({...});` format)
            const bemjson = eval(bemjsonCode);

            const actualHtml = bemhtml.apply(bemjson);

            const normalizedActual = normalizeHtml(actualHtml);
            const normalizedExpected = normalizeHtml(expectedHtml);

            try {
                assert.equal(normalizedActual, normalizedExpected);
                passed++;
            } catch (e) {
                failed++;
                throw e;
            }
        });
    }
});

// node:test runs after describe blocks complete
process.on('exit', () => {
    console.log(`\n--- tmpl-specs summary ---`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Total:  ${passed + failed}`);
});
