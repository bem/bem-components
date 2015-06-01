var gemini = require('gemini');

gemini.suite('checkbox-group', function(root) {

    root.setUrl('desktop.tests/checkbox-group/gemini/gemini.html');

    function testing(test, innerSelector) {
        var checkboxGroupSelector = '.' + test,
            checkboxGroupEnabledSelector = checkboxGroupSelector + '-enabled',
            checkboxGroupDisabledSelector = checkboxGroupSelector + '-disabled',
            element,
            focusedElement;
        // for focused state we need different elements
        if(!!~test.indexOf('button')) {
            element = ' .button';
            focusedElement = element;
        } else {
            element = ' .checkbox';
            focusedElement = element + '__control';
        }

        gemini.suite(test + '-enabled', function(suite) {
            suite
                .setCaptureElements(checkboxGroupEnabledSelector, checkboxGroupEnabledSelector + innerSelector)
                .before(function(actions, find) {
                    this.checkbox = find(checkboxGroupEnabledSelector + element);
                })
                .capture('plain')
                .capture('focused-hard', function(actions, find) {
                    // NOTE: can't focus on `<label class="checkbox">`, so find `.checkbox__control` explicitly
                    // see https://github.com/gemini-testing/gemini/issues/172
                    actions.focus(find(checkboxGroupEnabledSelector + focusedElement));
                })
                .capture('focused-checked', function(actions) {
                    actions.click(this.checkbox);
                })
                .capture('focused-unchecked', function(actions) {
                    actions.click(this.checkbox);
                });
        });

        gemini.suite(test + '-disabled', function(suite) {
            suite
                .setCaptureElements(checkboxGroupDisabledSelector)
                .capture('plain');
        });
    }

    [
        'button-size_m',
        'button-size_l',
        'button-icon-size_m',
        'button-icon-size_l'
    ]
        .forEach(function(test) {
            testing(test, ' .button');
    });

    [
        'islands-size_m',
        'islands-size_l',
        'line-size_m',
        'line-size_l'
    ]
        .forEach(function(test) {
            testing(test, ' .checkbox__box');
    });
});
