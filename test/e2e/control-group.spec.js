import { test, expect } from '@playwright/test';

test.describe('control-group', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/control-group.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    test('search-form-default', async ({ page }) => {
        const el = page.locator('.search-form');
        await expect(el).toHaveScreenshot('control-group-search-form.png');
    });

    test('search-form-input-focused', async ({ page }) => {
        const form = page.locator('.search-form');
        await form.locator('.input__control').click();
        await expect(form).toHaveScreenshot('control-group-search-form-input-focused.png');
    });

    test('multiple-form-default', async ({ page }) => {
        const el = page.locator('.multiple-form');
        await expect(el).toHaveScreenshot('control-group-multiple-form.png');
    });

    test('multiple-form-from-focused', async ({ page }) => {
        const form = page.locator('.multiple-form');
        await page.locator('.multiple-form-from .input__control').click();
        await expect(form).toHaveScreenshot('control-group-multiple-form-from-focused.png');
    });

    test('multiple-form-to-focused', async ({ page }) => {
        const form = page.locator('.multiple-form');
        await page.locator('.multiple-form-to .input__control').click();
        await expect(form).toHaveScreenshot('control-group-multiple-form-to-focused.png');
    });
});
