var gemini = require('gemini');

gemini.suite('dropdown', function(root) {

    root.setUrl('desktop.tests/dropdown/gemini/gemini.html');

    [
        'islands-link',
        'islands-button'
    ]
        .forEach(function(test) {
            var dropdownSelector = '.' + test + (!!~test.indexOf('button')? '.button' : '.link');

                gemini.suite(test, function(suite) {
                    suite
                        .setCaptureElements(dropdownSelector, '.popup_' + test)
                        .capture('opened', function(actions, find) {
                            actions.click(find(dropdownSelector));
                        });
                });
        });
});
