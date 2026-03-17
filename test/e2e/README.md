# Playwright E2E Tests

E2E (end-to-end) tests need to be ported from the legacy Hermione test suite.

The original Hermione tests relied on:
- Pre-built HTML fixtures for each block/example
- Baseline screenshots for visual regression testing
- Hermione-specific plugins and configuration

Migration steps:
1. Convert HTML fixtures to Playwright page objects
2. Re-capture baseline screenshots using Playwright's snapshot testing
3. Port test scenarios from Hermione syntax to Playwright syntax
