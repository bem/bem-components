var gemini = require('gemini');

gemini.suite('checkbox', function(root) {

    root.setUrl('desktop.tests/checkbox/gemini/gemini.html');

    [
        'default',
        'normal-size_m',
        'normal-button',
        'normal-button-icon',
        'normal-size_l'
    ]
        .forEach(function(test) {
            var checkboxSelector = '.' + test,
                checkboxEnabledSelector = checkboxSelector + '-enabled',
                checkboxDisabledSelector = checkboxSelector + '-disabled',
                element = !!~test.indexOf('button') ? checkboxEnabledSelector : ' .checkbox__control';

            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(checkboxEnabledSelector)
                    .before(function(actions, find) {
                        this.checkbox = find(checkboxEnabledSelector + element);
                    })
                    .capture('plain')
                    .capture('hovered', function(actions) {
                        actions.mouseMove(this.checkbox);
                    })
                    .capture('focused-hard', function(actions) {
                        actions.sendKeys(this.checkbox, 'focused-hard'); //send not empty string
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
