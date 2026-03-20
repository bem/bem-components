import { test, expect } from '@playwright/test';

test.describe('image', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/image.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    test('image-no-size', async ({ page }) => {
        const el = page.locator('.image-no-size');
        await expect(el).toHaveScreenshot('image-no-size.png');
    });

    test('image-with-size', async ({ page }) => {
        const el = page.locator('.image-with-size');
        await expect(el).toHaveScreenshot('image-with-size.png');
    });
});
