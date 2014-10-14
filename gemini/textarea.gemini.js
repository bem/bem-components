var gemini = require('gemini');

gemini.suite('textarea', function(root) {

    root.setUrl('desktop.tests/textarea/gemini/gemini.html');

    [
        'islands',
        'islands-val',
        'islands-placeholder',
        'islands-longVal',
        'islands-longPlaceholder',
        'islands-label',
        'islands-sizeS',
        'islands-sizeM',
        'islands-sizeL',
        'islands-sizeXL',
        'default',
        'default-val',
        'default-placeholder',
        'default-longVal',
        'default-longPlaceholder',
        'default-label'
    ]
        .forEach(function(test) {
            var textareaSelector = '.' + test,
                textareaEnabledSelector = textareaSelector + '-enabled',
                screenArea = !!~test.indexOf('label')? textareaEnabledSelector + ' .textarea' : textareaEnabledSelector;

            // tests for enabled textarea
            getEnabledSuite(test, [textareaEnabledSelector, screenArea], 'test text');

            // tests for disabled textarea
            getDisabledSuite(test, textareaSelector + '-disabled');

        });

    function getEnabledSuite(test, areaSelector, text) {
        var controlSelector = typeof areaSelector === 'object'? areaSelector[0] : areaSelector;

        gemini.suite(test + '-enabled', function(suite) {
            suite
                .setCaptureElements(areaSelector)
                .before(function(actions, find) {
                    this.control = find(controlSelector + ' .textarea__control');
                })
                .capture('plain')
                .capture('click', function(actions) {
                    actions.click(this.control);
                })
                .capture('text', function(actions) {
                    actions.sendKeys(this.control, text);
                });
        });
    }

    function getDisabledSuite(test, screenArea) {

        gemini.suite(test + '-disabled', function(suite) {
            suite
                .setCaptureElements(screenArea)
                .capture('plain');
        });
    }

});
