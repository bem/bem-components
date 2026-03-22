import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import bemLevels from 'bem-core/build/plugins/vite-plugin-bem-levels.js';
import bemI18n from './vite-plugin-bem-i18n.js';

const rootDir = resolve(import.meta.dirname, '..');

const levels = {
    desktop: [
        'node_modules/bem-core/common.blocks',
        'node_modules/bem-core/desktop.blocks',
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks',
        'design/desktop.blocks',
    ],
    'touch-pad': [
        'node_modules/bem-core/common.blocks',
        'node_modules/bem-core/touch.blocks',
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
    ],
    'touch-phone': [
        'node_modules/bem-core/common.blocks',
        'node_modules/bem-core/touch.blocks',
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
    ],
};

export default defineConfig(({ mode }) => {
    const platform = process.env.BEM_PLATFORM || 'desktop';

    return {
        root: rootDir,

        plugins: [
            bemLevels({
                platform,
                levels,
                rootDir,
            }),
            bemI18n({
                platform,
                levels,
                rootDir,
            }),
        ],

        build: {
            lib: {
                entry: resolve(import.meta.dirname, 'platforms', `${platform}.js`),
                name: 'bemComponents',
                formats: ['es', 'umd'],
                fileName: (format) => `bem-components.${format === 'es' ? 'mjs' : 'js'}`,
            },
            outDir: resolve(rootDir, 'dist', platform),
            emptyOutDir: true,
            sourcemap: true,
            minify: mode === 'production',
            rollupOptions: {
                external: ['jquery'],
                output: {
                    globals: {
                        jquery: 'jQuery',
                    },
                },
            },
        },

        css: {
            postcss: resolve(rootDir, 'postcss.config.js'),
        },

        server: {
            open: false,
        },
    };
});
