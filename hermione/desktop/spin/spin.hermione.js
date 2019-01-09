/* global describe, beforeEach, it */

describe('spin', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/spin/hermione/hermione.html')
            .waitForVisible('.spin');
    });

    [
        'islands-xs',
        'islands-s',
        'islands-m',
        'islands-l',
        'islands-xl'
    ].forEach(test => {
        const testSize = `.${test}`;

        it(test, function() {
            return this.browser
                .assertView('plain', testSize);
        });
    });
});
