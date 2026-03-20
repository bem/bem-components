import { test, expect } from '@playwright/test';

test.describe('menu', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/menu.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of [
        'islands-radio-s', 'islands-radio-m', 'islands-radio-l', 'islands-radio-xl',
        'islands-check', 'islands-link', 'islands-icon'
    ]) {
        test(`${variant}-default`, async ({ page }) => {
            const el = page.locator(`.${variant}`);
            await expect(el).toHaveScreenshot(`menu-${variant}-default.png`);
        });

        test(`${variant}-hovered`, async ({ page }) => {
            const el = page.locator(`.${variant}`);
            const item = el.locator('.menu__item').first();
            await item.hover();
            await expect(el).toHaveScreenshot(`menu-${variant}-hovered.png`);
        });
    }
});
