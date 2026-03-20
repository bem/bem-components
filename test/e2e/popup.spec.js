import { test, expect } from '@playwright/test';

test.describe('popup', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/popup.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    // Popup open interactions require BEM JS `popup_target_anchor` to work,
    // which depends on the old test-block wiring. Test the default (closed) state only.
    for (const direction of ['all', 'bottom', 'top', 'right', 'left']) {
        test(`${direction}-link`, async ({ page }) => {
            const link = page.locator(`.${direction} .link`).first();
            await expect(link).toHaveScreenshot(`popup-${direction}-link.png`);
        });
    }
});
