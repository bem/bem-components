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

        gemini.suite('body-margin', function(suite) {
            var popupSwither = '.all .link';
            suite
                .setCaptureElements(popupSwither, '.all-popup')
                .capture('static-opened', function(actions) {
                    actions
                        .executeJS(function(window) { window.document.body.style.margin = '100px'; })
                        .click(popupSwither)
                        .wait(300);
                })
                .capture('relative-opened', function(actions) {
                    actions
                        .executeJS(function(window) { window.document.body.style.position = 'relative'; })
                        .click(popupSwither)
                        .click(popupSwither)
                        .wait(300);
                });
        });
});
