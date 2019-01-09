/* global describe, beforeEach, it */

describe('popup', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/popup/hermione/hermione.html')
            .waitForVisible('.link');
    });

    [
        'all',
        'bottom',
        'top',
        'right',
        'left'
    ].forEach(test => {
        const popupSwitcher = `.${test} .link`,
            popupSelector = ` .${test}-popup`;

        it(test, function() {
            const capturedElements = [popupSwitcher, popupSelector];

            return this.browser
                .assertView(`${test}-plain`, capturedElements)
                .click(popupSwitcher)
                .waitForVisible('.popup_visible')
                .assertView(`${test}-opened`, capturedElements);
        });
    });

    it('test-nested', function() {
        return this.browser
            .click('.test-nested-link-1')
            .click('.test-nested-link-2')
            .pause(300)
            .assertView('test-nested-opened', ['.test-nested-popup', '.test-nested-link-1']);
    });

    it('body-margin', function() {
        const popupSwitcher = '.all .link',
            capturedElements = [popupSwitcher, '.all-popup'];

        return this.browser
            .execute(() => this.document.body.style.margin = '100px')
            .click(popupSwitcher)
            .pause(300)
            .assertView('static-opened', capturedElements)
            .execute(() => this.document.body.style.position = 'relative')
            .click(popupSwitcher)
            .click(popupSwitcher)
            .pause(300)
            .assertView('relative-opened', capturedElements);
    });
});
