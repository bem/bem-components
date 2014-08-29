var gemini = require('gemini');

gemini.suite('popup', function(root) {

    root.setUrl('desktop.tests/popup/gemini/gemini.html');

    [
        'all',
        'bottom',
        'top',
        'right',
        'left'
    ]
        .forEach(function(test) {
            var popupSwitcher = '.' + test + ' .link',
                popupSelector = ' .' + test + '-popup';

            gemini.suite(test, function(suite) {
                suite
                    .setCaptureElements(popupSwitcher, popupSelector)
                    .capture('plain')
                    .capture('opened', function(actions) {
                        actions.click(popupSwitcher)
                            .wait(300);
                    });
            });
        });

        gemini.suite('test-nested', function(suite) {
            suite
                .setCaptureElements('.test-nested-popup', '.test-nested-link-1')
                .capture('opened', function(actions) {
                    actions
                        .click('.test-nested-link-1')
                        .click('.test-nested-link-2')
                        .wait(300);
                });
        });

});
