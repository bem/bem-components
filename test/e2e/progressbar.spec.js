import { test, expect } from '@playwright/test';

test.describe('progressbar', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/progressbar.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    test('islands', async ({ page }) => {
        const el = page.locator('.islands');
        await expect(el).toHaveScreenshot('progressbar-islands.png');
    });
});
