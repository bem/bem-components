import { test, expect } from '@playwright/test';

test.describe('radio-group', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/radio-group.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of ['islands-m', 'islands-l', 'line-islands-m', 'line-islands-l']) {
        test(`${variant}-enabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            await expect(el).toHaveScreenshot(`radio-group-${variant}-enabled.png`);
        });

        test(`${variant}-enabled-hovered`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            // Hover the radio box (the visible part), not the hidden <input>
            const radioBox = el.locator('.radio__box').first();
            await radioBox.hover();
            await expect(el).toHaveScreenshot(`radio-group-${variant}-hovered.png`);
        });

        test(`${variant}-enabled-checked`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            const radioBox = el.locator('.radio__box').first();
            await radioBox.click();
            await expect(el).toHaveScreenshot(`radio-group-${variant}-checked.png`);
        });

        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled`);
            await expect(el).toHaveScreenshot(`radio-group-${variant}-disabled.png`);
        });
    }
});
