import { test, expect } from '@playwright/test';

test.describe('attach', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/attach.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const size of ['S', 'M', 'L', 'XL']) {
        test(`islands-size${size}-enabled`, async ({ page }) => {
            const el = page.locator(`.islands-size${size}-enabled`);
            await expect(el).toHaveScreenshot(`attach-size${size}-enabled.png`);
        });

        test(`islands-size${size}-disabled`, async ({ page }) => {
            const el = page.locator(`.islands-size${size}-disabled`);
            await expect(el).toHaveScreenshot(`attach-size${size}-disabled.png`);
        });
    }
});
