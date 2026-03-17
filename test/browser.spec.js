import { test, expect } from '@playwright/test';

const MAX_ALLOWED_FAILURES = 0;

test('bem-components browser spec tests', async ({ page }) => {
    const pageErrors = [];
    page.on('pageerror', err => {
        pageErrors.push(`[pageerror] ${err.message}`);
    });
    page.on('console', msg => {
        if (msg.type() === 'warn' || msg.type() === 'error') {
            console.log(`[browser:${msg.type()}] ${msg.text()}`);
        }
    });

    await page.goto('/test/browser/index.html');

    // Wait for mocha to finish (window.__testResults is set in the run callback)
    await page.waitForFunction(
        () => window.__testResults !== undefined,
        { timeout: 50_000 }
    ).catch(async () => {
        const errors = await page.evaluate(() => window.__testFailures ?? []);
        const info = [
            ...pageErrors,
            ...errors.map(f => `FAIL: ${f.title}\n  ${f.err}`),
        ].join('\n');
        throw new Error(`Mocha did not finish within timeout.\n${info}`);
    });

    const { failures, total, passed, pending } =
        await page.evaluate(() => window.__testResults);

    // Ensure tests actually ran
    expect(total, 'mocha should have run tests').toBeGreaterThan(0);

    if (failures > MAX_ALLOWED_FAILURES) {
        const failDetails = await page.evaluate(() => window.__testFailures ?? []);
        const details = failDetails
            .map(f => `  x ${f.title}\n    ${f.err}`)
            .join('\n');
        expect(
            failures,
            `Too many failures: ${failures}/${total} (max allowed: ${MAX_ALLOWED_FAILURES}).\n` +
            `Passed: ${passed}, pending: ${pending}\n${details}`
        ).toBeLessThanOrEqual(MAX_ALLOWED_FAILURES);
    }

    console.log(`Browser tests: ${passed} passed, ${failures} failed, ${total} total`);
    expect(failures).toBeLessThanOrEqual(MAX_ALLOWED_FAILURES);
});
