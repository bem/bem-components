/* global process */
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './test',
    testMatch: ['browser.spec.js'],
    timeout: 60_000,
    retries: 1,

    use: {
        browserName: 'chromium',
        headless: true,
        baseURL: 'http://localhost:5174',
    },

    webServer: {
        command: 'node node_modules/.bin/vite --config build/vite.test.config.js --port 5174',
        url: 'http://localhost:5174/test/browser/index.html',
        reuseExistingServer: !process.env.CI,
        timeout: 30_000,
    },
});
