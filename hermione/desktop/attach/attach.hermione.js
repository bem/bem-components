/* global describe, beforeEach, it */

describe('attach', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/attach/hermione/hermione.html')
            .waitForVisible('.islands-sizeS-enabled');
    });

    [
        'islands-sizeS',
        'islands-sizeM',
        'islands-sizeL',
        'islands-sizeXL'
    ].forEach(test => {
        it(`${test}-enabled`, function() {
            const attachEnabledSelector = `.${test}-enabled`;

            return this.browser
                .assertView('plain', attachEnabledSelector)
                .setFocusedState(`${attachEnabledSelector} .attach`)
                .keys('Tab')
                .assertView('focused', attachEnabledSelector);
        });

        it(`${test}-disabled`, function() {
            return this.browser
                .assertView('plain', `.${test}-disabled`);
        });
    });
});
