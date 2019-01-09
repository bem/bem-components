/* global describe, beforeEach, it */

describe('checkbox-group', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/checkbox-group/hermione/hermione.html')
            .waitForVisible('.islands-size_m-enabled');
    });

    function testing(test, innerSelector) {
        const checkboxGroupSelector = `.${test}`,
            checkboxGroupEnabledSelector = `${checkboxGroupSelector}-enabled`,
            checkboxGroupDisabledSelector = `${checkboxGroupSelector}-disabled`;
        let element, focusedElement;

        // for focused state we need different elements
        if(!!~test.indexOf('button')) {
            element = ' .button';
            focusedElement = element;
        } else {
            element = ' .checkbox';
            focusedElement = `${element}__control`;
        }

        it(`${test}-enabled`, function() {
            const capturedElements = [
                checkboxGroupEnabledSelector,
                checkboxGroupEnabledSelector + innerSelector
            ];

            return this.browser
                .assertView(`${test}-enabled-plain`, capturedElements)
                .setFocusedState(checkboxGroupEnabledSelector + focusedElement)
                .assertView(`${test}-enabled-focused-hard`, capturedElements)
                .click(checkboxGroupEnabledSelector + element)
                .assertView(`${test}-enabled-focused-checked`, capturedElements)
                .click(checkboxGroupEnabledSelector + element)
                .assertView(`${test}-enabled-focused-unchecked`, capturedElements);
        });

        it(`${test}-disabled`, function() {
            return this.browser
                .assertView(`${test}-disabled`, checkboxGroupDisabledSelector);
        });
    }

    [
        'button-size_m',
        'button-size_l',
        'button-checked-size_m',
        'button-checked-size_l',
        'button-icon-size_m',
        'button-icon-size_l'
    ].forEach(test => testing(test, ' .button'));

    [
        'islands-size_m',
        'islands-size_l',
        'line-size_m',
        'line-size_l'
    ].forEach(test => testing(test, ' .checkbox__box'));
});
