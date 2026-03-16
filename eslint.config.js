import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: [
            'dist/',
            'docs/',
            'node_modules/',
            'libs/',
            'test/',
            '**/*.spec.js',
            '**/*.tests/**',
            '**/*.tmpl-specs/**',
            '**/*.examples/**',
            '**/*.bemhtml.js',
            '**/*.bh.js',
            'common.bundles/',
            'touch-pad.pages/',
            'touch-phone.pages/',
        ],
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'no-var': 'error',
            'prefer-const': 'error',
            'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none' }],
            'no-prototype-builtins': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-cond-assign': 'off',
        },
    },
    {
        files: ['build/**/*.js', '**/*.test.js'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
