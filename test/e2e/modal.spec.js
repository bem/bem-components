import { test, expect } from '@playwright/test';

test.describe('modal', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/modal.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    // Modal opening requires BEM JS interaction that depends on the old test-block wiring.
    // Test the default (closed) state only.
    test('default', async ({ page }) => {
        await expect(page).toHaveScreenshot('modal-default.png');
    });
});
