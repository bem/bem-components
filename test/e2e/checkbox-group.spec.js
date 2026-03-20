import { test, expect } from '@playwright/test';

test.describe('checkbox-group', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/checkbox-group.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of ['islands-size_m', 'islands-size_l', 'line-size_m', 'line-size_l']) {
        test(`${variant}-enabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            await expect(el).toHaveScreenshot(`checkbox-group-${variant}-enabled.png`);
        });

        test(`${variant}-enabled-checked`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            const checkbox = el.locator('.checkbox').first();
            await checkbox.click();
            await expect(el).toHaveScreenshot(`checkbox-group-${variant}-checked.png`);
        });

        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled`);
            await expect(el).toHaveScreenshot(`checkbox-group-${variant}-disabled.png`);
        });
    }

    for (const variant of ['button-size_m', 'button-size_l', 'button-checked-size_m', 'button-checked-size_l', 'button-icon-size_m', 'button-icon-size_l']) {
        test(`${variant}-enabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            await expect(el).toHaveScreenshot(`checkbox-group-${variant}-enabled.png`);
        });

        test(`${variant}-enabled-clicked`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            const button = el.locator('.button').first();
            await button.click();
            await expect(el).toHaveScreenshot(`checkbox-group-${variant}-clicked.png`);
        });

        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled`);
            await expect(el).toHaveScreenshot(`checkbox-group-${variant}-disabled.png`);
        });
    }
});
