/* global describe, beforeEach, it */

describe('dropdown', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/dropdown/hermione/hermione.html')
            .waitForVisible('.dropdown');
    });

    [
        'islands-link',
        'islands-button'
    ].forEach(test => {
        const dropdownSelector = `.${test}${(!!~test.indexOf('button')? '.button' : '.link')}`;

        it(test, function() {
            return this.browser
                .click(dropdownSelector)
                .assertView(`${test}-opened`, [dropdownSelector, `.popup_${test}`])
        });
    });
});
