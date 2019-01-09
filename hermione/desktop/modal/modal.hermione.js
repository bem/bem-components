/* global describe, beforeEach, it */

describe('modal', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/modal/hermione/hermione.html')
            .waitForVisible('.link');
    });

    it('normal', function() {
        return this.browser
            .assertView('plain', 'html') // because modal acts on entire window
            .click('.link')
            .moveToObject('.page', 0, 0)
            .waitForVisible('.modal.popup_visible')
            .assertView('visible', 'html');
    });
});
