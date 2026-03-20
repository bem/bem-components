import { test, expect } from '@playwright/test';

test.describe('spin', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/spin.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const size of ['xs', 's', 'm', 'l', 'xl']) {
        test(`islands-${size}`, async ({ page }) => {
            const el = page.locator(`.islands-${size}`);
            await expect(el).toHaveScreenshot(`spin-islands-${size}.png`);
        });
    }
});
