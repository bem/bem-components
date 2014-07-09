var gemini = require('gemini');

gemini.suite('attach', function(root) {

    root.setUrl('desktop.tests/attach/gemini/gemini.html');

        gemini.suite('enabled', function(suite) {
            var attachEnabledSelector = '.enabled';

            suite
                .setCaptureElements(attachEnabledSelector)
                .capture('plain')
                .capture('focused', function(actions, find) {
                    actions.sendKeys(find(attachEnabledSelector + ' .attach'), gemini.TAB);
                });
        });

        gemini.suite('disabled', function(suite) {
            suite
                .setCaptureElements('.disabled')
                .capture('plain');
        });

});
