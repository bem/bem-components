/* global describe, beforeEach, it */

describe('button', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/button/hermione/hermione.html')
            .waitForVisible('.hermione-test-button-islands-enabled');
    });

    [
        'islands',
        'plain',
        'pseudo',
        'islands-link',
        'islands-icon'
    ].forEach(test => {
        const buttonEnabledSelector = `.hermione-test-button-${test}-enabled`;

        // tests for enabled focused button, excluding button_view_action
        it(`${test}-focused`, function() {
            return this.browser
                .setFocusedState(buttonEnabledSelector)
                .assertView(`${test}-focused-hard`, buttonEnabledSelector);
        });
    });

    [
        'islands',
        'plain',
        'pseudo',
        'action',
        'islands-link',
        'islands-icon'
    ].forEach(test => {
        const buttonSelector = `.hermione-test-button-${test}`,
            buttonEnabledSelector = `${buttonSelector}-enabled`,
            buttonDisabledSelector = `${buttonSelector}-disabled`;

        // tests for enabled button
        it(`${test}-enabled`, function() {
            return this.browser
                .assertView(`${test}-enabled-plain`, buttonEnabledSelector)
                .moveToObject(buttonEnabledSelector)
                .assertView(`${test}-enabled-hovered`, buttonEnabledSelector)
                .buttonDown(buttonEnabledSelector)
                .assertView(`${test}-enabled-pressed`, buttonEnabledSelector)
                .buttonUp(buttonEnabledSelector)
                .assertView(`${test}-enabled-clicked`, buttonEnabledSelector);
        });

        // tests for disabled button
        it(`${test}-disabled`, function() {
            return this.browser
                .assertView(`${test}-plain`, buttonDisabledSelector);
        });
    });

    it('radio-checked-disabled', function() {
        return this.browser
            .assertView('radio-checked-disabled-plain', '.hermione-test-button-radio-checked-disabled');
    });

    [
        'islands',
        'plain'
    ].forEach(test => {
        it(`${test}-check`, function() {
            const buttonSelector = `.hermione-test-button-${test}-check`;

            return this.browser
                .assertView(`${test}-check-default`, buttonSelector)
                .setFocusedState(buttonSelector)
                .assertView(`${test}-check-focused-hard`, buttonSelector)
                .moveToObject(buttonSelector)
                .buttonDown(buttonSelector)
                .assertView(`${test}-check-pressed`, buttonSelector)
                .buttonUp(buttonSelector)
                .assertView(`${test}-check-clicked-checked`, buttonSelector)
                .buttonDown(buttonSelector)
                .assertView(`${test}-check-pressed-unchecked`, buttonSelector)
                .buttonUp(buttonSelector)
                .assertView(`${test}-check-clicked-unchecked`, buttonSelector);
        });
    });
});
