var gemini = require('gemini');

gemini.suite('button', function(root) {

    root.setUrl('desktop.tests/button/simple/simple.html');

    ['normal', 'pseudo', 'action'].forEach(function(theme) {
        
        var buttonSelector = '.gemini-test-button-' + theme,
            buttonEnabledSelector = buttonSelector + '-enabled';
            buttonDisabledSelector = buttonSelector + '-disabled';

        // tests for enabled button
        gemini.suite(theme + '-enabled', function(suite) {
            suite
                .setCaptureElements(buttonEnabledSelector)
                .before(function(actions, find) {
                    this.button = find(buttonEnabledSelector);
                })
                .capture('plain')
                .capture('hovered', function(actions, find) {
                    actions.mouseMove(this.button);
                })
                .capture('pressed', function(actions, find) {
                    actions.mouseDown(this.button);
                })
                .capture('clicked', function(actions, find) {
                    actions.mouseUp(this.button);
                });
        });

        // tests for disabled button
        gemini.suite(theme + '-disabled', function(suite) {
            suite
                .setCaptureElements(buttonDisabledSelector)
                .capture('plain');
        });
    });

});
