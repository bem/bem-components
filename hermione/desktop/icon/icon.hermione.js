/* global describe, beforeEach, it */

describe('icon', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/icon/hermione/hermione.html')
            .waitForVisible('.icon');
    });

    [
        'icon-url',
        'icon-mod-twitter',
        'icon-mod-vk'
    ].forEach(function(test) {
        const iconSelector = `.${test}`;

        it(test, function() {
            return this.browser
                .assertView(`${test}-plain`, iconSelector);
        });
    });
});
