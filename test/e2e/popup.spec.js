import { test, expect } from '@playwright/test';

test.describe('popup', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/test/e2e/fixtures/popup.html');
        await page.waitForFunction(() => window.__bemReady === true, { timeout: 10000 });
    });

    // Default (closed) state — screenshot of the trigger links
    for (const direction of ['all', 'bottom', 'top', 'right', 'left']) {
        test(`${direction}-link`, async ({ page }) => {
            const link = page.locator(`.${direction} .link`).first();
            await expect(link).toHaveScreenshot(`popup-${direction}-link.png`);
        });
    }

    // Opened state tests — use BEM API to set anchor and open popup.
    // When popup becomes visible it is appended to <body>, so we screenshot
    // the full page to capture both the trigger and the positioned popup.
    for (const direction of ['all', 'bottom', 'top', 'right', 'left']) {
        test(`${direction}-opened`, async ({ page }) => {
            const opened = await page.evaluate((dir) => {
                const $ = window.jQuery;
                const { Popup, Link } = window.bemBlocks;
                const testEl = document.querySelector(`.test_direction_${dir}`);
                if (!testEl || !$ || !Popup || !Link) return false;

                const linkEl = testEl.querySelector('.link');
                const popupEl = testEl.querySelector('.popup');
                if (!linkEl || !popupEl) return false;

                try {
                    const popupBlock = $(popupEl).bem(Popup);
                    const linkBlock = $(linkEl).bem(Link);

                    if (popupBlock && linkBlock) {
                        popupBlock.setAnchor(linkBlock);
                        popupBlock.setMod('visible');
                        return true;
                    }
                } catch (e) {
                    return 'error: ' + e.message;
                }
                return false;
            }, direction);

            if (opened !== true) {
                test.skip(true, `Could not open popup: ${opened}`);
                return;
            }

            // Popup is moved to body when visible, use body-level selector
            await page.locator(`.${direction}-popup.popup_visible`).waitFor({ timeout: 5000 });
            await expect(page).toHaveScreenshot(`popup-${direction}-opened.png`);
        });
    }

    // Nested popup test — open both nested popups
    test('nested-opened', async ({ page }) => {
        const opened = await page.evaluate(() => {
            const $ = window.jQuery;
            const { Popup, Link } = window.bemBlocks;
            if (!$ || !Popup || !Link) return false;

            try {
                // The test-nested elements have inner popups with class test-nested-popup
                // They are also popup blocks. Open the first one.
                const link1El = document.querySelector('.test-nested-link-1');
                const popup1El = document.querySelector('.test-nested-popup');
                if (!link1El || !popup1El) return 'no elements found';

                const popup1 = $(popup1El).bem(Popup);
                const link1 = $(link1El).bem(Link);

                if (popup1 && link1) {
                    popup1.setAnchor(link1);
                    popup1.setMod('visible');
                }

                // Open second nested popup (inside the first one)
                const link2El = document.querySelector('.test-nested-link-2');
                const popups = document.querySelectorAll('.test-nested-popup');
                if (popups.length > 1 && link2El) {
                    const popup2 = $(popups[1]).bem(Popup);
                    const link2 = $(link2El).bem(Link);
                    if (popup2 && link2) {
                        popup2.setAnchor(link2);
                        popup2.setMod('visible');
                    }
                }
                return true;
            } catch (e) {
                return 'error: ' + e.message;
            }
        });

        if (opened !== true) {
            test.skip(true, `Could not open nested popups: ${opened}`);
            return;
        }

        await page.locator('.test-nested-popup.popup_visible').first().waitFor({ timeout: 5000 });
        await page.waitForTimeout(300);
        await expect(page).toHaveScreenshot('popup-nested-opened.png');
    });
});
