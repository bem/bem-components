var gemini = require('gemini');

gemini.suite('attach', function(root) {

    root.setUrl('desktop.tests/attach/gemini/gemini.html');

        var attachSelector = 'default',
            attachEnabledSelector = '.' + attachSelector + '-enabled',
            attachDisabledSelector = '.' + attachSelector + '-disabled';

        gemini.suite(attachSelector + '-enabled', function(suite) {
            suite
                .setCaptureElements(attachEnabledSelector)
                .before(function(actions, find) {
                    this.attachControl = find(attachEnabledSelector + ' .attach__control');
                })
                .capture('plain')
                .capture('focused', function(actions) {
                    actions.sendKeys(this.attachControl, ' ');
                });
        });

        gemini.suite(attachSelector + '-disabled', function(suite) {
            suite
                .setCaptureElements(attachDisabledSelector)
                .capture('plain');
        });

});
