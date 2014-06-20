 var gemini = require('gemini');

gemini.suite('checkbox', function(root) {
    root.setUrl('desktop.tests/checkbox/gemini/gemini.html');
    //need cls for block with type button and icon    
    ['default', 'normal-size_m', /*'normal-button', 'normal-button-icon',*/ 'normal-size_l']
        .forEach(function(test) {
            var checkboxSelector = '.gemini-test-checkbox-' + test,
                checkboxEnabledSelector = checkboxSelector + '-enabled',
                checkboxDisabledSelector = checkboxSelector + '-disabled';

            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(checkboxEnabledSelector)
                    .before(function(actions, find) {
                        this.checkbox = find(checkboxEnabledSelector);
                    })
                    .capture('plain')
                    .capture('checked', function(actions) {
                        actions.click(this.checkbox);
                    })
                    .capture('unchecked', function(actions) {
                        actions.click(this.checkbox);
                    })
                    .capture('focused');
            });

            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(checkboxDisabledSelector)
                    .capture('plain');
            });
    });
});
