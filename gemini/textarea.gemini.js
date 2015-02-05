var gemini = require('gemini');

gemini.suite('textarea', function(root) {

    root.setUrl('desktop.tests/textarea/gemini/gemini.html');

    [
        'islands',
        'islands-val',
        'islands-placeholder',
        'islands-longVal',
        'islands-longPlaceholder',
        'islands-sizeS',
        'islands-sizeM',
        'islands-sizeL',
        'islands-sizeXL',
        'islands-label',
        'islands-width-available'
    ]
        .forEach(function(test) {
            var testSelector = '.' + test,
                controlEnabledSelector = testSelector + '-enabled';

            if(['islands-label', 'islands-width-available'].indexOf(test) > -1) {
                controlEnabledSelector += ' .textarea';
            }

            // tests for enabled textarea
            getEnabledSuite(test, controlEnabledSelector, testSelector + '-enabled', 'test text');

            // tests for disabled textarea
            getDisabledSuite(test, testSelector + '-disabled');

        });

    function getEnabledSuite(test, controlSelector, areaSelector, text) {
        gemini.suite(test + '-enabled', function(suite) {
            suite
                .setCaptureElements(areaSelector)
                .capture('plain')
                .capture('click', function(actions, find) {
                    actions.click(find(controlSelector));
                })
                .capture('text', function(actions, find) {
                    actions.sendKeys(find(controlSelector), text);
                });
        });
    }

    function getDisabledSuite(test, areaSelector) {
        gemini.suite(test + '-disabled', function(suite) {
            suite
                .setCaptureElements(areaSelector)
                .capture('plain');
        });
    }
});
