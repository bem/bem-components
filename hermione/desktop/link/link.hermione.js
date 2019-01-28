/* global describe, beforeEach, it */

describe('link', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/link/hermione/hermione.html')
            .waitForVisible('.link');
    });

    [
        'islands-no-url',
        'islands-url',
        'islands-pseudo',

        'link_view_minor',
        'link_view_external',
        'link_view_ghost',
        'link_view_text',
        'link_view_strong'
    ].forEach(test => {
        const linkSelector = `.${test}`;

        it(test, function() {
            return this.browser
                .assertView(`${test}-plain`, linkSelector)
                .moveToObject(linkSelector)
                .pause(200)
                .assertView(`${test}-hovered`, linkSelector)
                .setFocusedState(linkSelector)
                .moveToObject(linkSelector)
                .assertView(`${test}-focused`, linkSelector);
        });
    });
});
