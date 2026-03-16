import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import bemLevels from 'bem-core/build/plugins/vite-plugin-bem-levels.js';

const rootDir = resolve(import.meta.dirname, '..');

export default defineConfig({
    root: rootDir,

    plugins: [
        bemLevels({
            platform: 'desktop',
            levels: {
                desktop: [
                    'node_modules/bem-core/common.blocks',
                    'node_modules/bem-core/desktop.blocks',
                    'common.blocks',
                    'desktop.blocks',
                    'design/common.blocks',
                    'design/desktop.blocks',
                    'test.blocks',
                ],
            },
            rootDir,
        }),
    ],

    css: {
        postcss: resolve(rootDir, 'postcss.config.js'),
    },

    // NOTE: jQuery is NOT external here — it must be bundled into the test page.
    resolve: {
        alias: {},
    },

    server: {
        port: 5174,
        open: false,
    },

    define: {
        'process.env.NODE_ENV': JSON.stringify('test'),
        'process.env': JSON.stringify({ NODE_ENV: 'test' }),
        'process.stdout': 'null',
        'process.version': JSON.stringify('v22.0.0'),
        global: 'globalThis',
    },

    optimizeDeps: {
        include: ['chai', 'sinon', 'sinon-chai', 'jquery'],
    },
});
