 var gemini = require('gemini');

gemini.suite('attach', function(root) {
    root.setUrl('desktop.tests/attach/gemini/gemini.html');
        var attachSelector = 'default',
            attachEnabledSelector = '.' + attachSelector + '-enabled',
            attachDisabledSelector = '.' + attachSelector + '-disabled';

        gemini.suite(attachSelector + '-enabled', function(suite) {
            suite
                .setCaptureElements(attachEnabledSelector, attachEnabledSelector + ' .attach__control')
                .capture('plain')
                .capture('focused', function(action, find) {
                    action.sendKeys(find(attachEnabledSelector), gemini.TAB);
                });
        });

        gemini.suite(attachSelector + '-disabled', function(suite) {
            suite
                .setCaptureElements(attachDisabledSelector, attachDisabledSelector + ' .attach__control')
                .capture('plain');
        });
});
