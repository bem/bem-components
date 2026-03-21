import { test, expect } from '@playwright/test';

test.describe('dropdown', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/dropdown.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    // Default (closed) state tests
    test('islands-link-default', async ({ page }) => {
        const link = page.locator('.islands-link');
        await expect(link).toHaveScreenshot('dropdown-link-default.png');
    });

    test('islands-button-default', async ({ page }) => {
        const button = page.locator('.islands-button');
        await expect(button).toHaveScreenshot('dropdown-button-default.png');
    });

    // Opened state tests — open via BEM API
    test('islands-link-opened', async ({ page }) => {
        await page.evaluate(() => {
            const $ = window.jQuery;
            const { Dropdown } = window.bemBlocks;
            if (!$ || !Dropdown) return;

            const linkEl = document.querySelector('.islands-link');
            if (!linkEl) return;
            const dropdown = $(linkEl).bem(Dropdown);
            if (dropdown) {
                dropdown.setMod('opened');
            }
        });

        await page.locator('.popup_visible').first().waitFor({ timeout: 5000 });
        await expect(page).toHaveScreenshot('dropdown-link-opened.png');
    });

    test('islands-button-opened', async ({ page }) => {
        await page.evaluate(() => {
            const $ = window.jQuery;
            const { Dropdown } = window.bemBlocks;
            if (!$ || !Dropdown) return;

            const btnEl = document.querySelector('.islands-button');
            if (!btnEl) return;
            const dropdown = $(btnEl).bem(Dropdown);
            if (dropdown) {
                dropdown.setMod('opened');
            }
        });

        await page.locator('.popup_visible').first().waitFor({ timeout: 5000 });
        await expect(page).toHaveScreenshot('dropdown-button-opened.png');
    });
});
