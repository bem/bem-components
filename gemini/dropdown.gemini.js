var gemini = require('gemini');

gemini.suite('dropdown', function(root) {

    root.setUrl('desktop.tests/dropdown/gemini/gemini.html');

    function testing(test, switcher) {
        var dropdownSelector = '.' + test,
            dropdownEnabledSelector = dropdownSelector + '-enabled' + switcher,
            dropdownDisabledSelector = dropdownSelector + '-disabled';
            
            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(dropdownEnabledSelector, '.popup_' + test + '_1')
                    .before(function(actions, find) {
                        this.switcher = find(dropdownEnabledSelector);
                    })
                    .capture('plain')
                    .capture('opened', function(actions) {
                        actions.click(this.switcher).wait(1000);
                    });
            });

            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(dropdownDisabledSelector)
                    .capture('plain');
            });
    }

    ['default-link', 'normal-link']
        .forEach(function(test) {
            testing(test, ' .link');
        });

    ['default-button', 'normal-button']
        .forEach(function(test) {
            testing(test, ' .button');
        });

});
