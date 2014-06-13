var gemini = require('gemini');

gemini.suite('link', function(root) {
    var linkSelector = '.gemini-test-link';
    root.setUrl('desktop.tests/link/gemini/gemini.html');

    ['normal-no-url', 'normal-url', 'normal-pseudo']
        .forEach(function(test) {
            // var thisLinkThemeSelector = linkSelector + '-' + test,
            //     thisLinkThemeSelectoriSPseudo = thisLinkThemeSelector + '-pseudo'; 
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
                        actions.wait(300);
                    })
                    .capture('pressed', function(actions) {
                        actions.mouseDown(this.link);
                    })
                    .capture('focused', function(actions) {
                        actions.sendKeys(find('.page'), gemini.TAB);
                    });
            });

        }); 

    gemini.suite('normal-title', function(suite) {
        suite
            .setCaptureElements('.page')
            .before(function(actions, find) {
                this.link = find('.normal-title');
            })

            .capture('plain')
            .capture('hovered', function(actions) {
                actions.mouseMove(this.link);
                actions.wait(5000);
            })
            .capture('pressed', function(actions) {
                actions.mouseDown(this.link);
            })
            .capture('focused', function(actions) {
                actions.sendKeys(this.link, gemini.TAB);
            });
            
    });
});
