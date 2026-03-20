import { test, expect } from '@playwright/test';

test.describe('button', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/button.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of ['islands', 'plain', 'pseudo', 'islands-link', 'islands-icon']) {
        test(`${variant}-enabled`, async ({ page }) => {
            const el = page.locator(`.hermione-test-button-${variant}-enabled`);
            await expect(el).toHaveScreenshot(`button-${variant}-enabled.png`);
        });

        test(`${variant}-hovered`, async ({ page }) => {
            const el = page.locator(`.hermione-test-button-${variant}-enabled`);
            await el.hover();
            await expect(el).toHaveScreenshot(`button-${variant}-hovered.png`);
        });
    }

    for (const variant of ['islands', 'plain', 'pseudo', 'action', 'islands-link', 'islands-icon']) {
        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.hermione-test-button-${variant}-disabled`);
            await expect(el).toHaveScreenshot(`button-${variant}-disabled.png`);
        });
    }

    test('radio-checked-disabled', async ({ page }) => {
        const el = page.locator('.hermione-test-button-radio-checked-disabled');
        await expect(el).toHaveScreenshot('button-radio-checked-disabled.png');
    });

    for (const variant of ['islands', 'plain']) {
        test(`${variant}-check-default`, async ({ page }) => {
            const el = page.locator(`.hermione-test-button-${variant}-check`);
            await expect(el).toHaveScreenshot(`button-${variant}-check-default.png`);
        });

        test(`${variant}-check-clicked`, async ({ page }) => {
            const el = page.locator(`.hermione-test-button-${variant}-check`);
            await el.click();
            await expect(el).toHaveScreenshot(`button-${variant}-check-clicked.png`);
        });
    }
});
