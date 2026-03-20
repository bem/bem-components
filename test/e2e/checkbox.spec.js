import { test, expect } from '@playwright/test';

test.describe('checkbox', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/checkbox.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of ['islands-size_m', 'islands-size_l']) {
        test(`${variant}-enabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            await expect(el).toHaveScreenshot(`checkbox-${variant}-enabled.png`);
        });

        test(`${variant}-enabled-hovered`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            const checkbox = el.locator('.checkbox');
            await checkbox.hover();
            await expect(el).toHaveScreenshot(`checkbox-${variant}-hovered.png`);
        });

        test(`${variant}-enabled-checked`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            const checkbox = el.locator('.checkbox');
            await checkbox.click();
            await expect(el).toHaveScreenshot(`checkbox-${variant}-checked.png`);
        });

        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled`);
            await expect(el).toHaveScreenshot(`checkbox-${variant}-disabled.png`);
        });

        test(`${variant}-disabled-checked`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled-checked`);
            await expect(el).toHaveScreenshot(`checkbox-${variant}-disabled-checked.png`);
        });
    }

    for (const variant of ['islands-button', 'islands-button-icon']) {
        test(`${variant}-enabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            await expect(el).toHaveScreenshot(`checkbox-${variant}-enabled.png`);
        });

        test(`${variant}-enabled-hovered`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            const button = el.locator('.button');
            await button.hover();
            await expect(el).toHaveScreenshot(`checkbox-${variant}-hovered.png`);
        });

        test(`${variant}-enabled-checked`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            const button = el.locator('.button');
            await button.click();
            await expect(el).toHaveScreenshot(`checkbox-${variant}-checked.png`);
        });

        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled`);
            await expect(el).toHaveScreenshot(`checkbox-${variant}-disabled.png`);
        });

        test(`${variant}-disabled-checked`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled-checked`);
            await expect(el).toHaveScreenshot(`checkbox-${variant}-disabled-checked.png`);
        });
    }
});
