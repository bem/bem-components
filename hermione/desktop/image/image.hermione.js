/* global describe, beforeEach, it */

describe('image', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/image/hermione/hermione.html')
            .waitForVisible('.image');
    });

    [
        'image-no-size',
        'image-with-size'
    ].forEach(function(test) {
        const imageSelector = `.${test}`;

        it(test, function() {
            return this.browser
                .assertView(`${test}-plain`, imageSelector);
        });
    });
});
