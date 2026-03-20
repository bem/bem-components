import { test, expect } from '@playwright/test';

test.describe('dropdown', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/dropdown.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    // Dropdown popup opening requires BEM JS `popup_target_anchor` to work,
    // which depends on the old test-block wiring.
    // Test the default (closed) state of the switcher elements.
    test('islands-link-default', async ({ page }) => {
        const link = page.locator('.islands-link');
        await expect(link).toHaveScreenshot('dropdown-link-default.png');
    });

    test('islands-button-default', async ({ page }) => {
        const button = page.locator('.islands-button');
        await expect(button).toHaveScreenshot('dropdown-button-default.png');
    });
});
