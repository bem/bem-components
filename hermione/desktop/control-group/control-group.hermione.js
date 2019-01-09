/* global describe, beforeEach, it */

describe('control-group', function() {
    beforeEach(function() {
        return this.browser
            .url('desktop.tests/control-group/hermione/hermione.html')
            .waitForVisible('.control-group');
    });

    it('islands-search-form', function() {
        const searchForm = '.search-form';

        return this.browser
            .assertView('islands-search-form-plain', searchForm)
            .setFocusedState('.search-form-down')
            .assertView('islands-search-form-down-focused-hard', searchForm)
            .setFocusedState('.search-form .input__control')
            .assertView('islands-search-form-input-focused-hard', searchForm)
            .setFocusedState('.search-form-search')
            .assertView('islands-search-form-search-focused-hard', searchForm);
    });

    it('islands-multiple-form', function() {
        const multipleForm = '.multiple-form';

        return this.browser
            .assertView('islands-multiple-form-plain', multipleForm)
            .setFocusedState('.multiple-form-from .input__control')
            .assertView('islands-multiple-form-from-focused-hard', multipleForm)
            .setFocusedState('.multiple-form-to .input__control')
            .assertView('islands-multiple-form-to-focused-hard', multipleForm)
            .setFocusedState('.multiple-form .button')
            .assertView('islands-multiple-form-button-focused-hard', multipleForm);
    });
});
