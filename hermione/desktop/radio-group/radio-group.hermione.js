/* global describe, beforeEach, it */

describe('radio-group', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/radio-group/hermione/hermione.html')
            .waitForVisible('.radio-group');
    });

    [
        'islands-l',
        'islands-m',
        'line-islands-m',
        'line-islands-l'
    ].forEach(function(test) {
        const radioItemSelector = `.${test}`,
            radioItemSelectorEnabled = `${radioItemSelector}-enabled`,
            radioItemSelectorDisabled = `${radioItemSelector}-disabled`;
        let captureArea, control;

        // in different types we need different main elements
        if(!!~test.indexOf('button')) {
            captureArea = `${radioItemSelectorEnabled} .button`;
            control = ' .button';
        } else {
            captureArea = `${radioItemSelectorEnabled} .radio__box`;
            control = ' .radio__control';
        }

        it(`${test}-enabled`, function() {
            const capturedElements = [radioItemSelectorEnabled, captureArea],
                radioControl = radioItemSelectorEnabled + control;

            return this.browser
                .assertView(`${test}-enabled-plain`, capturedElements)
                .moveToObject(radioControl)
                .assertView(`${test}-enabled-hovered`, capturedElements)
                .setFocusedState(radioControl)
                .assertView(`${test}-enabled-focused-hard`, capturedElements)
                .click(captureArea)
                .assertView(`${test}-enabled-focused-checked`, capturedElements)
                .keys('Tab')
                .moveToObject(radioControl)
                .assertView(`${test}-hovered-checked`, capturedElements);
        });

        it(`${test}-disabled`, function() {
            return this.browser
                .assertView(`${test}-disabled-plain`, radioItemSelectorDisabled);
        });
    });
});
