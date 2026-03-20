import { test, expect } from '@playwright/test';

test.describe('textarea', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/textarea.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of [
        'islands', 'islands-val', 'islands-placeholder',
        'islands-longVal', 'islands-longPlaceholder',
        'islands-sizeS', 'islands-sizeM', 'islands-sizeL', 'islands-sizeXL'
    ]) {
        test(`${variant}-enabled`, async ({ page }) => {
            // Textarea renders as flat <textarea class="textarea ... islands-enabled">
            // The cls is directly on the textarea element
            const el = page.locator(`.${variant}-enabled`);
            await expect(el).toHaveScreenshot(`textarea-${variant}-enabled.png`);
        });

        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled`);
            await expect(el).toHaveScreenshot(`textarea-${variant}-disabled.png`);
        });

        test(`${variant}-focused`, async ({ page }) => {
            // The textarea element IS the control (flat structure, no child __control)
            const el = page.locator(`.${variant}-enabled`);
            await el.click();
            await expect(el).toHaveScreenshot(`textarea-${variant}-focused.png`);
        });
    }

    test('islands-label-enabled', async ({ page }) => {
        const el = page.locator('.islands-label-enabled');
        await expect(el).toHaveScreenshot('textarea-label-enabled.png');
    });

    test('islands-label-disabled', async ({ page }) => {
        const el = page.locator('.islands-label-disabled');
        await expect(el).toHaveScreenshot('textarea-label-disabled.png');
    });

    test('islands-width-available-enabled', async ({ page }) => {
        const el = page.locator('.islands-width-available-enabled');
        await expect(el).toHaveScreenshot('textarea-width-available-enabled.png');
    });

    test('islands-width-available-disabled', async ({ page }) => {
        const el = page.locator('.islands-width-available-disabled');
        await expect(el).toHaveScreenshot('textarea-width-available-disabled.png');
    });
});
