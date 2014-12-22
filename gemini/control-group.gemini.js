var gemini = require('gemini');

gemini.suite('control-group', function(root) {
    root.setUrl('desktop.tests/control-group/gemini/gemini.html');

    gemini.suite('islands-search-form', function(suite) {
        suite
            .setCaptureElements('.search-form')
            .before(function(actions, find) {
                this.down = find('.search-form-down');
                this.input = find('.search-form .input__control');
                this.search = find('.search-form-search');
            })
            .capture('plain')
            .capture('down-focused-hard', function(actions) {
                actions.sendKeys(this.down, 'text');
            })
            .capture('input-focused-hard', function(actions) {
                actions.sendKeys(this.input, 'text');
            })
            .capture('search-focused-hard', function(actions) {
                actions.sendKeys(this.search, 'text');
            });
    });

    gemini.suite('islands-multiple-form', function(suite) {
        suite
            .setCaptureElements('.multiple-form')
            .before(function(actions, find) {
                this.from = find('.multiple-form-from .input__control');
                this.to = find('.multiple-form-to .input__control');
                this.button = find('.multiple-form .button');
            })
            .capture('plain')
            .capture('from-focused-hard', function(actions) {
                actions.sendKeys(this.from, 'text');
            })
            .capture('to-focused-hard', function(actions) {
                actions.sendKeys(this.to, 'text');
            })
            .capture('button-focused-hard', function(actions) {
                actions.sendKeys(this.button, 'text');
            });
    });
});
