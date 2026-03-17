/**
 * Minimal BEMJSON-to-HTML converter for browser tests.
 *
 * Handles the BEMJSON patterns used in bem-core spec files.
 * Produces HTML compatible with bemDom.init() expectations:
 *   – correct BEM CSS class names
 *   – 'i-bem' CSS class for JS-enabled blocks (so bemDom.init finds them)
 *   – data-bem attribute with JSON params
 *   – block context propagation to child elements
 */

const BEM_JS_CLASS = 'i-bem';

const BEMHTML = {
    apply(bemjson, ctx) {
        if (bemjson === null || bemjson === undefined) return '';
        if (typeof bemjson === 'string' || typeof bemjson === 'number') {
            return String(bemjson);
        }
        if (Array.isArray(bemjson)) {
            return bemjson.map(item => this.apply(item, ctx)).join('');
        }
        return this._render(bemjson, ctx);
    },

    _render(node, ctx) {
        if (!node || typeof node !== 'object') return String(node ?? '');

        let {
            block,
            elem,
            mods,
            elemMods,
            mix,
            content,
            js,
            tag = 'div',
            attrs = {},
            cls,
        } = node;

        // Inherit block context from parent when only elem is specified
        if (!block && elem && ctx) {
            block = ctx;
        }

        // Determine block context for children
        const childCtx = block || ctx;

        const classes = [];
        let dataBem = null;
        let needBemClass = false;

        if (block && !elem) {
            // Block
            classes.push(block);
            if (mods) {
                for (const [m, v] of Object.entries(mods)) {
                    if (v === true) classes.push(`${block}_${m}`);
                    else if (v) classes.push(`${block}_${m}_${v}`);
                }
            }
            if (js) {
                needBemClass = true;
                dataBem = dataBem || {};
                dataBem[block] = typeof js === 'object' ? js : {};
            }
        } else if (block && elem) {
            // Element
            const elemName = `${block}__${elem}`;
            classes.push(elemName);
            if (elemMods) {
                for (const [m, v] of Object.entries(elemMods)) {
                    if (v === true) classes.push(`${elemName}_${m}`);
                    else if (v) classes.push(`${elemName}_${m}_${v}`);
                }
            }
            // Elements get data-bem and i-bem if js is explicitly provided
            if (js) {
                needBemClass = true;
                dataBem = dataBem || {};
                dataBem[elemName] = typeof js === 'object' ? js : {};
            }
        }

        // Mix
        if (mix) {
            const mixes = Array.isArray(mix) ? mix : [mix];
            for (const m of mixes) {
                if (!m) continue;
                const mixBlock = m.block || block || ctx;
                if (!mixBlock) continue;
                const mixClass = m.elem
                    ? `${mixBlock}__${m.elem}`
                    : mixBlock;
                classes.push(mixClass);
                // Add modifier classes for mix
                if (m.mods) {
                    for (const [mm, mv] of Object.entries(m.mods)) {
                        if (mv === true) classes.push(`${mixClass}_${mm}`);
                        else if (mv) classes.push(`${mixClass}_${mm}_${mv}`);
                    }
                }
                if (m.elemMods) {
                    for (const [mm, mv] of Object.entries(m.elemMods)) {
                        if (mv === true) classes.push(`${mixClass}_${mm}`);
                        else if (mv) classes.push(`${mixClass}_${mm}_${mv}`);
                    }
                }
                if (!m.elem && m.js !== false) {
                    needBemClass = true;
                    dataBem = dataBem || {};
                    dataBem[mixBlock] =
                        m.js && typeof m.js === 'object' ? m.js : {};
                } else if (m.elem && m.js) {
                    needBemClass = true;
                    dataBem = dataBem || {};
                    dataBem[mixClass] = typeof m.js === 'object' ? m.js : {};
                }
            }
        }

        // Add i-bem class AFTER all block/mix classes (matching real BEMHTML order)
        if (needBemClass) {
            classes.push(BEM_JS_CLASS);
        }

        // Extra CSS class
        if (cls) {
            classes.push(cls);
        }

        // Build attributes string
        let attrsStr = '';
        if (classes.length) {
            attrsStr += ` class="${[...new Set(classes)].join(' ')}"`;
        }
        if (dataBem) {
            attrsStr += ` data-bem='${JSON.stringify(dataBem)}'`;
        }
        if (attrs) {
            for (const [k, v] of Object.entries(attrs)) {
                attrsStr += ` ${k}="${String(v).replace(/"/g, '&quot;')}"`;
            }
        }

        const inner =
            content !== undefined ? this.apply(content, childCtx) : '';
        return `<${tag}${attrsStr}>${inner}</${tag}>`;
    },
};

export default BEMHTML;
