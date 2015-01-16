var gemini = require('gemini');

gemini.suite('attach', function(root) {
    root.setUrl('desktop.tests/attach/gemini/gemini.html');
        [
            'islands-sizeS',
            'islands-sizeM',
            'islands-sizeL',
            'islands-sizeXL'
        ].forEach(function(test) {
            gemini.suite(test + '-enabled', function(suite) {
                var attachEnabledSelector = '.' + test + '-enabled';

                suite
                    .setCaptureElements(attachEnabledSelector)
                    .capture('plain')
                    .capture('focused', function(actions, find) {
                        actions.sendKeys(find(attachEnabledSelector + ' .attach'), gemini.TAB);
                    });
            });

            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements('.' + test + '-disabled')
                    .capture('plain');
            });
        });
});
