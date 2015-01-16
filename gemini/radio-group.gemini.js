var gemini = require('gemini');

gemini.suite('radio-group', function(root) {

    root.setUrl('desktop.tests/radio-group/gemini/gemini.html');

    [
        'islands-l',
        'islands-m',
        'line-islands-m',
        'line-islands-l'
    ]
        .forEach(function(test) {
            var radioItemSelector = '.' + test,
                radioItemSelectorEnabled = radioItemSelector + '-enabled',
                radioItemSelectorDisabled = radioItemSelector + '-disabled',
                captureArea,
                control;

            // in different types we need different main elements
            if(!!~test.indexOf('button')) {
                captureArea = radioItemSelectorEnabled + ' .button';
                control = ' .button';
            } else {
                captureArea = radioItemSelectorEnabled + ' .radio__box';
                control = ' .radio__control';
            }

            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(radioItemSelectorEnabled, captureArea)
                    .before(function(actions, find) {
                        this.radioItem = find(radioItemSelectorEnabled + control);
                    })
                    .capture('plain')
                    .capture('hovered', function(actions) {
                        actions.mouseMove(this.radioItem);
                    })
                    .capture('focused-hard', function(actions) {
                        actions.sendKeys(this.radioItem, 'focused-hard');
                    })
                    .capture('down', function(actions) {
                        actions.mouseDown(this.radioItem);
                    })
                    .capture('hovered-checked', function(actions) {
                        actions.mouseUp(this.radioItem);
                    })
                    .capture('checked', function(actions) {
                        actions.mouseMove(this.radioItem, { x : 100, y : 100 });
                    });
            });

            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(radioItemSelectorDisabled)
                    .capture('plain');
            });
        });

});
