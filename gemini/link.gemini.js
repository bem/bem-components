var gemini = require('gemini');

gemini.suite('link', function(root) {
    root.setUrl('desktop.tests/link/gemini/gemini.html');

    ['normal-no-url', 'normal-url', 'normal-pseudo']
        .forEach(function(test) {
            var thisLinkThemeSelector = '.' + test;

            gemini.suite(test, function(suite) {
                suite
                    .setCaptureElements(thisLinkThemeSelector)
                    .before(function(actions, find) {
                        this.link = find(thisLinkThemeSelector);
                    })

                    .capture('plain')
                    .capture('hovered', function(actions) {
                        actions.mouseMove(this.link);
                    })
                    .capture('pressed', function(actions) {
                        actions.mouseDown(this.link);
                    })

                    .capture('focused', function(actions, find) {
                        actions.sendKeys(this.link, gemini.TAB);
                    });
            });

        }); 
});
