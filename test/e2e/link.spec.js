import { test, expect } from '@playwright/test';

test.describe('link', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/link.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of [
        'islands-no-url', 'islands-url', 'islands-pseudo',
        'link_view_minor', 'link_view_external', 'link_view_ghost',
        'link_view_text', 'link_view_strong'
    ]) {
        test(`${variant}-default`, async ({ page }) => {
            const el = page.locator(`.${variant}`);
            await expect(el).toHaveScreenshot(`link-${variant}-default.png`);
        });

        test(`${variant}-hovered`, async ({ page }) => {
            const el = page.locator(`.${variant}`);
            await el.hover();
            await expect(el).toHaveScreenshot(`link-${variant}-hovered.png`);
        });
    }
});
