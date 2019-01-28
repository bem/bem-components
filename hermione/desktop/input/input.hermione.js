/* global describe, beforeEach, it */

describe('input', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/input/hermione/hermione.html')
            .waitForVisible('.input');
    });

    [
        'islands',
        'islands-val',
        'islands-placeholder',
        'islands-longVal',
        'islands-longPlaceholder',
        'islands-label',
        'islands-sizeS',
        'islands-sizeM',
        'islands-sizeL',
        'islands-sizeXL'
    ].forEach(test => {
        const inputSelector = `.${test}`,
            inputEnabledSelector = `${inputSelector}-enabled`,
            screenArea = !!~test.indexOf('label')? inputEnabledSelector + ' .input' : inputEnabledSelector;

        // tests for enabled input
        getEnabledSuite(test, [inputEnabledSelector, screenArea], 'test text');

        // tests for disabled input
        getDisabledSuite(test, `${inputSelector}-disabled`);
    });

    it('clear-hover', function() {
        const inputSelector = '.islands-clear-enabled';

        return this.browser
            .assertView('clear-hover-plain', inputSelector)
            .moveToObject(`${inputSelector} .input__clear`)
            .assertView('clear-hover-hovered', inputSelector);
    });

    function getEnabledSuite(test, areaSelector, text) {
        const controlSelector = typeof areaSelector === 'object'? areaSelector[0] : areaSelector;

        it(`${test}-enabled`, function() {
            return this.browser
                .assertView(`${test}-enabled-plain`, controlSelector)
                .click(controlSelector)
                .assertView(`${test}-enabled-click`, controlSelector)
                .click(`${controlSelector} .input__control`)
                .keys(text)
                .assertView(`${test}-enabled-text`, controlSelector);
        });
    }

    function getDisabledSuite(test, screenArea) {
        it(`${test}-disabled`, function() {
            return this.browser
                .assertView(`${test}-disabled-plain`, screenArea);
        });
    }
});
