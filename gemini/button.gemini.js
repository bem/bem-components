gemini.suite('button', function(root) {

    root.setUrl('desktop.tests/button/gemini/gemini.html');

    [
        'islands',
        'plain',
        'pseudo',
        'islands-link',
        'islands-icon'
    ]
        .forEach(function(test) {
            var buttonSelector = '.gemini-test-button-' + test,
                buttonEnabledSelector = buttonSelector + '-enabled';

            // tests for enabled focused button, excluding button_view_action
            gemini.suite(test + '-focused', function(suite) {
                suite
                    .setCaptureElements(buttonEnabledSelector)
                    .before(function(actions, find) {
                        this.button = find(buttonEnabledSelector);
                    })
                    .capture('focused-hard', function(actions) {
                        actions.focus(this.button);
                    });
            });
        });

    [
        'islands',
        'plain',
        'pseudo',
        'action',
        'islands-link',
        'islands-icon'
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

        gemini.suite('radio-checked-disabled', function(suite) {
            suite
                .setCaptureElements('.gemini-test-button-radio-checked-disabled')
                .capture('plain');
        });

    [
        'islands',
        'plain'
    ]
        .forEach(function(test) {
            gemini.suite(test + '-check', function(suite) {
                var buttonSelector = '.gemini-test-button-' + test + '-check';

                suite
                    .setCaptureElements(buttonSelector)
                    .before(function(actions, find) {
                        this.button = find(buttonSelector);
                    })
                    .capture('default')
                    .capture('focused-hard-checked', function(actions) {
                        actions.focus(this.button);
                    })
                    .capture('pressed', function(actions) {
                        actions.mouseDown(this.button);
                    })
                    .capture('clicked-checked', function(actions) {
                        actions.mouseUp(this.button);
                    })
                    .capture('pressed-unchecked', function(actions) {
                        actions.mouseDown(this.button);
                    })
                    .capture('clicked-unchecked', function(actions) {
                        actions.mouseUp(this.button);
                    });
            });
        });
});
