var gemini = require('gemini');

gemini.suite('input', function(root) {

    root.setUrl('desktop.tests/input/gemini/gemini.html');

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
        'islands-sizeXL'
    ]
        .forEach(function(test) {
            var inputSelector = '.' + test,
                inputEnabledSelector = inputSelector + '-enabled',
                screenArea = !!~test.indexOf('label')? inputEnabledSelector + ' .input' : inputEnabledSelector;

            // tests for enabled input
            getEnabledSuite(test, [inputEnabledSelector, screenArea], 'test text');

            // tests for disabled input
            getDisabledSuite(test, inputSelector + '-disabled');

        });

    gemini.suite('clear-hover', function(suite) {
        var inputSelector = '.islands-clear-enabled';

        suite
            .setCaptureElements(inputSelector)
            .capture('plain')
            .capture('hovered', function(actions, find) {
                actions
                    .mouseMove(find(inputSelector + ' .input__clear'), { x : 5, y : 5 })
                    .wait(110);
            });
    });

    function getEnabledSuite(test, areaSelector, text) {
        var controlSelector = typeof areaSelector === 'object'? areaSelector[0] : areaSelector;

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
