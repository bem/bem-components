/* global describe, beforeEach, it */

describe('textarea', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/textarea/hermione/hermione.html')
            .waitForVisible('.textarea');
    });

    [
        'islands',
        'islands-val',
        'islands-placeholder',
        'islands-longVal',
        'islands-longPlaceholder',
        'islands-sizeS',
        'islands-sizeM',
        'islands-sizeL',
        'islands-sizeXL',
        'islands-label',
        'islands-width-available'
    ].forEach(test => {
        const testSelector = `.${test}`;
        let controlEnabledSelector = `${testSelector}-enabled`;

        if(['islands-label', 'islands-width-available'].includes(test)) {
            controlEnabledSelector += ' .textarea';
        }

        // tests for enabled textarea
        getEnabledSuite(test, controlEnabledSelector, `${testSelector}-enabled`, 'test text');

        // tests for disabled textarea
        getDisabledSuite(test, `${testSelector}-disabled`);

    });

    function getEnabledSuite(test, controlSelector, areaSelector, text) {
        it(`${test}-enabled`, function() {
            return this.browser
                .assertView(`${test}-enabled-plain`, areaSelector)
                .click(controlSelector)
                .assertView(`${test}-enabled-click`, areaSelector)
                .keys(text)
                .assertView(`${test}-enabled-text`, areaSelector);
        });
    }

    function getDisabledSuite(test, areaSelector) {
        it(`${test}-disabled`, function() {
            return this.browser
                .assertView(`${test}-disabled-plain`, areaSelector);
        });
    }
});
