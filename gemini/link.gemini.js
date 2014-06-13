var gemini = require('gemini');

gemini.suite('link', function(root) {
    var linkSelector = '.gemini-test-link';
    root.setUrl('desktop.tests/link/simple/simple.html');

    ['default', 'normal', 'simple']
        .forEach(function(test) {
            var thisLinkThemeSelector = linkSelector + '-' + test,
                thisLinkThemeSelectoriSPseudo = thisLinkThemeSelector + '-pseudo'; 

            gemini.suite('Test_results_when_link_state=link_theme_' + test, function(suite) {
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
                    .capture('focused', function(actions) {
                        actions.sendKeys(this.link, gemini.TAB);
                    });
            });

            gemini.suite('Test_result_when_link_is_pseudo_and_link_theme_' + test , function(suite) {
                suite
                    .setCaptureElements(thisLinkThemeSelectoriSPseudo)
                    .before(function(actions, find) {
                        this.link = find(thisLinkThemeSelectoriSPseudo);
                    })

                    .capture('plain')
                    .capture('hovered', function(actions) {
                       actions.mouseMove(this.link);
                    })
                    .capture('pressed', function(actions) {
                        actions.mouseDown(this.link);
                    })
                    .capture('focused', function(actions) {
                        actions.sendKeys(this.link, gemini.TAB);
                    });
            });

        }); 
});
