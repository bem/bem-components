var gemini = require('gemini');

gemini.suite('input', function(root) {

    root.setUrl('desktop.tests/input/gemini/gemini.html');

    [
        'normal', 'normal-val', 'normal-placeholder', 'normal-longVal', 'normal-longPlaceholder',
        'normal-label', 'normal-sizeS', 'normal-sizeM', 'normal-sizeL', 'normal-sizeXL',
        'default', 'default-val', 'default-placeholder', 'default-longVal', 'default-longPlaceholder', 'default-label'
    ]
        .forEach(function(test) {
            var inputSelector = '.' + test,
                inputEnabledSelector = inputSelector + '-enabled',
                inputDisabledSelector = inputSelector + '-disabled';

            // tests for enabled input
            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(inputEnabledSelector, inputEnabledSelector + ' .input__box')
                    .before(function(actions, find) {
                        this.control = find(inputEnabledSelector + ' .input__control');
                    })
                    .capture('plain')
                    .capture('click', function(actions) {
                        actions.click(this.control);
                    })
                    .capture('text', function(actions) {
                        actions.sendKeys(this.control, 'test text');
                    })
            });

            // tests for disabled input
            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(inputDisabledSelector)
                    .capture('plain');
            });

        });

    [
        'normal-textarea-val', 'normal-textarea-placeholder',
        'default-textarea-val', 'default-textarea-placeholder'
    ]
        .forEach(function(test) {
            var textareaSelector = '.' + test,
                textareaEnabledSelector = textareaSelector + '-enabled',
                textareaDisabledSelector = textareaSelector + '-disabled';

            // tests for enabled textarea
            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(textareaEnabledSelector, textareaEnabledSelector + ' .input__control')
                    .before(function(actions, find) {
                        this.control = find(textareaEnabledSelector + ' .input__control');
                    })
                    .capture('plain')
                    .capture('click', function(actions) {
                        actions.mouseDown(this.control);
                    })
                    .capture('text', function(actions) {
                        actions.sendKeys(this.control, 'test text long text test text long text test text ' +
                            'long text test text long text test text long text test text long text test text long text ');
                    })
            });

            // tests for disabled input
            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(textareaDisabledSelector)
                    .capture('plain');
            });

        });

});
