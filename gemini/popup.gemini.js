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
                        actions.click(popupSwitcher);
                    });
            });
        });

        gemini.suite('test-nested', function(suite) {
            suite
                .setCaptureElements('.test-nested-first .link', '.test-nested-secondPopup', '.test-nested-lastPopup')
                .capture('plain');
        });

});
