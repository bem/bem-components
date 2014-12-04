var gemini = require('gemini'),
    animationTime = 300;

gemini.suite('select', function(root) {

    root.setUrl('desktop.tests/select/gemini/gemini.html');

    [
        'radio_check-no_text',
        'size_m-check-much_text',
        'size_l-radio-text',
        'size_xl-checked-disabled_item',
        'size_s-select-group',
        'select-icon'
    ]
        .forEach(function(test) {
            var selectSelector = '.' + test,
                buttonSelector = selectSelector + ' .button';

            gemini.suite(test, function(suite) {
                suite
                    // popup's class is defined in the select.tests/gemini.blocks/select/select.bemhtml
                    .setCaptureElements(buttonSelector, selectSelector + '-popup')
                    .before(function(actions, find) {
                        this.button = find(buttonSelector);
                    })
                    .capture('plain')
                    .capture('focused-hard', function(actions){
                        actions.sendKeys(this.button, '-');
                    })
                    .capture('pressed', function(actions) {
                        actions
                            .mouseDown(this.button)
                            .wait(animationTime);
                    })
                    .capture('clicked', function(actions) {
                        actions
                            .mouseUp(this.button)
                            .wait(animationTime);
                    });
            });
        });

    gemini.suite('disabled', function(suite) {
        suite
            .setCaptureElements('.disabled')
            .capture('plain');
    });
});
