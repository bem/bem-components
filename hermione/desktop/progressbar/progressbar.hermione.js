/* global describe, beforeEach, it */

describe('progressbar', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/progressbar/hermione/hermione.html')
            .waitForVisible('.progressbar');
    });

    it('islands', function() {
        const progressbarSelector = '.islands';

        return this.browser
            .assertView('plain', progressbarSelector);
    });
});
