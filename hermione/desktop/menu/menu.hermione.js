/* global describe, beforeEach, it */

describe('menu', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/menu/hermione/hermione.html')
            .waitForVisible('.menu');
    });

    [
        'islands-radio-s',
        'islands-radio-m',
        'islands-radio-l',
        'islands-radio-xl',
        'islands-check',
        'islands-link',
        'islands-icon'
    ].forEach(test => {
        const menuSelector = `.${test}`;

        it(test, function() {
            return this.browser
                .assertView(`${test}-plain`, menuSelector)
                .moveToObject(`${menuSelector} .menu__item`)
                .assertView(`${test}-hovered`, menuSelector);
        });
    });
});
