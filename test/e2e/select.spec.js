import { test, expect } from '@playwright/test';

test.describe('select', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/select.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    const variants = [
        'radio_check-no_text', 'size_m-check-much_text',
        'size_l-radio-text', 'size_xl-checked-disabled_item',
        'size_s-select-group', 'select-icon'
    ];

    // Default (closed) state tests
    for (const variant of variants) {
        test(`${variant}-default`, async ({ page }) => {
            const button = page.locator(`.${variant} .button`);
            await expect(button).toHaveScreenshot(`select-${variant}-default.png`);
        });
    }

    test('disabled', async ({ page }) => {
        const el = page.locator('.disabled .button');
        await expect(el).toHaveScreenshot('select-disabled.png');
    });

    // Opened state tests — open via BEM API
    for (const variant of variants) {
        test(`${variant}-opened`, async ({ page }) => {
            await page.evaluate((v) => {
                const $ = window.jQuery;
                const Select = window.bemBlocks.Select;
                const el = document.querySelector(`.${v}`);
                if (!el || !$ || !Select) return;
                const selectBlock = $(el).bem(Select);
                if (selectBlock) {
                    selectBlock.setMod('opened');
                }
            }, variant);

            await page.locator('.popup_visible').first().waitFor({ timeout: 5000 });
            await expect(page).toHaveScreenshot(`select-${variant}-opened.png`);
        });
    }
});
