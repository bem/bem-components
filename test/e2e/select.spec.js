import { test, expect } from '@playwright/test';

test.describe('select', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/select.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    // Select popup opening requires BEM JS that depends on old test-block wiring.
    // Test the default (closed) state of select buttons.
    for (const variant of [
        'radio_check-no_text', 'size_m-check-much_text',
        'size_l-radio-text', 'size_xl-checked-disabled_item',
        'size_s-select-group', 'select-icon'
    ]) {
        test(`${variant}-default`, async ({ page }) => {
            const button = page.locator(`.${variant} .button`);
            await expect(button).toHaveScreenshot(`select-${variant}-default.png`);
        });
    }

    test('disabled', async ({ page }) => {
        const el = page.locator('.disabled .button');
        await expect(el).toHaveScreenshot('select-disabled.png');
    });
});
