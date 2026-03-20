import { test, expect } from '@playwright/test';

test.describe('input', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/input.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    for (const variant of [
        'islands', 'islands-val', 'islands-placeholder',
        'islands-longVal', 'islands-longPlaceholder',
        'islands-sizeS', 'islands-sizeM', 'islands-sizeL', 'islands-sizeXL'
    ]) {
        test(`${variant}-enabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            await expect(el).toHaveScreenshot(`input-${variant}-enabled.png`);
        });

        test(`${variant}-disabled`, async ({ page }) => {
            const el = page.locator(`.${variant}-disabled`);
            await expect(el).toHaveScreenshot(`input-${variant}-disabled.png`);
        });

        test(`${variant}-focused`, async ({ page }) => {
            const el = page.locator(`.${variant}-enabled`);
            await el.click();
            await expect(el).toHaveScreenshot(`input-${variant}-focused.png`);
        });
    }

    test('islands-label-enabled', async ({ page }) => {
        const el = page.locator('.islands-label-enabled');
        await expect(el).toHaveScreenshot('input-label-enabled.png');
    });

    test('islands-label-disabled', async ({ page }) => {
        const el = page.locator('.islands-label-disabled');
        await expect(el).toHaveScreenshot('input-label-disabled.png');
    });

    test('clear-hover', async ({ page }) => {
        const container = page.locator('.islands-clear-enabled');
        await expect(container).toHaveScreenshot('input-clear-default.png');
        const clear = container.locator('.input__clear');
        await clear.hover();
        await expect(container).toHaveScreenshot('input-clear-hovered.png');
    });
});
