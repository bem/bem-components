var gemini = require('gemini');

gemini.suite('input', function(root) {

    root.setUrl('desktop.tests/input/gemini/gemini.html');

    [
        'normal',
        'normal-val',
        'normal-placeholder',
        'normal-longVal',
        'normal-longPlaceholder',
        'normal-label',
        'normal-sizeS',
        'normal-sizeM',
        'normal-sizeL',
        'normal-sizeXL',
        'default',
        'default-val',
        'default-placeholder',
        'default-longVal',
        'default-longPlaceholder',
        'default-label'
    ]
        .forEach(function(test) {
            var inputSelector = '.' + test,
                inputEnabledSelector = inputSelector + '-enabled',
                screenArea = !!~test.indexOf('label') ? inputEnabledSelector + ' .input' : inputEnabledSelector;

            // tests for enabled input
            getEnabledSuite(test, [inputEnabledSelector, screenArea], 'test text');

            // tests for disabled input
            getDisabledSuite(test, inputSelector + '-disabled');

        });

    [
        'normal-textarea-val',
        'normal-textarea-placeholder',
        'default-textarea-val',
        'default-textarea-placeholder'
    ]
        .forEach(function(test) {
            var textareaSelector = '.' + test;

            // tests for enabled textarea
            getEnabledSuite(test, textareaSelector + '-enabled', 'test text long text test text long text test text ' +
                'long text test text long text test text long text test text long text test text long text ');

            // tests for disabled textarea
            getDisabledSuite(test, textareaSelector + '-disabled');

        });

    gemini.suite('clear-hover', function(suite) {
        var inputSelector = '.normal-clear-enabled';

        suite
            .setCaptureElements(inputSelector)
            .capture('hovered', function(actions, find) {
                actions.mouseMove(find(inputSelector + ' .input__clear'), { x : 5, y : 5 });
            });
    });

    function getEnabledSuite(test, areaSelector, text) {
        var controlSelector = typeof areaSelector === 'object' ? areaSelector[0] : areaSelector;

        gemini.suite(test + '-enabled', function(suite) {
            suite
                .setCaptureElements(areaSelector)
                .before(function(actions, find) {
                    this.control = find(controlSelector + ' .input__control');
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
