var gemini = require('gemini');

gemini.suite('checkbox', function(root) {

    root.setUrl('desktop.tests/checkbox/gemini/gemini.html');

    [
        'islands-size_m',
        'islands-button',
        'islands-button-icon',
        'islands-size_l'
    ]
        .forEach(function(test) {
            var checkboxSelector = '.' + test,
                checkboxEnabledSelector = checkboxSelector + '-enabled',
                checkboxDisabledSelector = checkboxSelector + '-disabled',
                element,
                captureElements;
            if(!!~test.indexOf('button')) {
                element = checkboxEnabledSelector + ' .button';
                captureElements = [
                    checkboxEnabledSelector,
                    element
                ];
            } else {
                element = checkboxEnabledSelector + ' .checkbox';
                captureElements = [checkboxEnabledSelector];
            }

            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(captureElements)
                    .before(function(actions, find) {
                        this.checkbox = find(element);
                    })
                    .capture('plain')
                    .capture('hovered', function(actions) {
                        actions.mouseMove(this.checkbox);
                    })
                    .capture('focused-hard', function(actions, find) {
                        // NOTE: can't focus on `<label class="checkbox">`, so find `.checkbox__control` explicitly
                        // see https://github.com/gemini-testing/gemini/issues/172
                        actions.focus(find(element + '__control'));
                    })
                    .capture('focused-checked', function(actions) {
                        actions.click(this.checkbox);
                    })
                    .capture('checked', function(actions) {
                        actions.click('.page');
                    })
                    .capture('checked-hovered', function(actions) {
                        actions.mouseMove(this.checkbox);
                    });
            });

            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(checkboxDisabledSelector)
                    .capture('plain');
            });

            gemini.suite(test + '-disabled-checked', function(suite) {
                suite
                    .setCaptureElements(checkboxDisabledSelector + '-checked')
                    .capture('plain');
            });
    });
});
