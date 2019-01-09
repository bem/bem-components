/* global describe, beforeEach, it */

describe('select', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/select/hermione/hermione.html')
            .waitForVisible('.select');
    });

    [
        'radio_check-no_text',
        'size_m-check-much_text',
        'size_l-radio-text',
        'size_xl-checked-disabled_item',
        'size_s-select-group',
        'select-icon'
    ].forEach(test => {
        const selectSelector = `.${test}`,
            buttonSelector = `${selectSelector} .button`;

        it(test, function() {
            const capturedElements = [buttonSelector, `${selectSelector}-popup`];

            return this.browser
                // popup's class is defined in the select.tests/hermione.blocks/select/select.bemhtml
                .assertView(`${test}-plain`, capturedElements)
                .setFocusedState(buttonSelector)
                .assertView(`${test}-focused-hard`, capturedElements)
                .moveToObject(selectSelector)
                .buttonDown(selectSelector)
                .assertView(`${test}-pressed`, capturedElements)
                .buttonUp(selectSelector)
                .waitForVisible('.popup_visible')
                .assertView(`${test}-clicked`, capturedElements);
        });
    });

    it('disabled', function() {
        return this.browser
            .assertView('disabled-plain', '.disabled');
    });
});
