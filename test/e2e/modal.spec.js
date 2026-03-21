import { test, expect } from '@playwright/test';

test.describe('modal', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/modal.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    // Default (closed) state
    test('default', async ({ page }) => {
        await expect(page).toHaveScreenshot('modal-default.png');
    });

    // Opened state — open modal via BEM API
    test('opened', async ({ page }) => {
        await page.evaluate(() => {
            const $ = window.jQuery;
            const { Modal } = window.bemBlocks;
            if (!$ || !Modal) return;

            const modalEl = document.querySelector('.modal');
            if (!modalEl) return;
            const modal = $(modalEl).bem(Modal);
            if (modal) {
                modal.setMod('visible', true);
            }
        });

        await page.locator('.modal.popup_visible').waitFor({ timeout: 5000 });
        // Move mouse to corner to avoid hover effects
        await page.mouse.move(0, 0);
        await expect(page).toHaveScreenshot('modal-opened.png');
    });
});
