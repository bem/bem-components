/* global describe, beforeEach, it */

describe('checkbox', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/checkbox/hermione/hermione.html')
            .waitForVisible('.islands-size_m-enabled');
    });

    [
        'islands-size_m',
        'islands-button',
        'islands-button-icon',
        'islands-size_l'
    ].forEach(test => {
        const checkboxSelector = `.${test}`,
            checkboxEnabledSelector = `${checkboxSelector}-enabled`,
            checkboxDisabledSelector = `${checkboxSelector}-disabled`;
        let element, control, captureElements;

        if(!!~test.indexOf('button')) {
            element = `${checkboxEnabledSelector} .button`;
            control = element;
            captureElements = [
                checkboxEnabledSelector,
                element,
            ];
        } else {
            element = `${checkboxEnabledSelector} .checkbox`;
            control = `${checkboxEnabledSelector} .checkbox__control`;
            captureElements = [checkboxEnabledSelector];
        }

        it(`${test}-enabled`, function() {
            return this.browser
                .assertView(`${test}-enabled-plain`, captureElements)
                .moveToObject(element)
                .assertView(`${test}-enabled-hovered`, captureElements)
                .setFocusedState(control)
                .assertView(`${test}-enabled-focused-hard`, captureElements)
                .click(element)
                .assertView(`${test}-enabled-focused-checked`, captureElements)
                .click('.page')
                .assertView(`${test}-enabled-checked`, captureElements)
                .moveToObject(element)
                .assertView(`${test}-enabled-checked-hovered`, captureElements);
        });

        it(`${test}-disabled`, function() {
            return this.browser
                .assertView(`${test}-disabled`, checkboxDisabledSelector);
        });

        it(`${test}-disabled-checked`, function() {
            return this.browser
                .assertView(`${test}-disabled-checked`, `${checkboxDisabledSelector}-checked`);
        });
    });
});
