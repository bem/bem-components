var gemini = require('gemini');

gemini.suite('button', function(root) {

    root.setUrl('desktop.tests/button/gemini/gemini.html');

    [
        'default',
        'default-link',
        'normal',
        'pseudo',
        'action',
        'normal-link',
        'normal-icon'
    ]
        .forEach(function(test) {
            var buttonSelector = '.gemini-test-button-' + test,
                buttonEnabledSelector = buttonSelector + '-enabled',
                buttonDisabledSelector = buttonSelector + '-disabled';

            // tests for enabled button
            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(buttonEnabledSelector)
                    .before(function(actions, find) {
                        this.button = find(buttonEnabledSelector);
                    })
                    .capture('plain')
                    .capture('hovered', function(actions) {
                        actions.mouseMove(this.button);
                    })
                    .capture('pressed', function(actions) {
                        actions.mouseDown(this.button);
                    })
                    .capture('clicked', function(actions) {
                        actions.mouseUp(this.button);
                    });
            });

            // tests for disabled button
            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(buttonDisabledSelector)
                    .capture('plain');
            });
        });

    gemini.suite('normal-check', function(suite) {
        var buttonSelector = '.gemini-test-button-normal-check';

        suite
            .setCaptureElements(buttonSelector)
            .before(function(actions, find) {
                this.button = find(buttonSelector);
            })
            .capture('default')
            .capture('clicked-checked', function(actions) {
                actions.click(this.button);
            })
            .capture('clicked-unchecked', function(actions) {
                actions.click(this.button);
            });
    });

});
