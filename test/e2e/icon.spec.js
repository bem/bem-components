import { test, expect } from '@playwright/test';

test.describe('icon', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/icon.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of ['icon-url', 'icon-mod-twitter', 'icon-mod-vk']) {
        test(`${variant}`, async ({ page }) => {
            const el = page.locator(`.${variant}`);
            await expect(el).toHaveScreenshot(`${variant}.png`);
        });
    }
});
