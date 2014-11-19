var gemini = require('gemini');

gemini.suite('modal', function(root) {

    root.setUrl('desktop.tests/modal/gemini/gemini.html');

    gemini.suite('normal', function(suite) {
        suite
            .setCaptureElements('html') // because modal acts on entire window
            .capture('plain')
            .capture('visible', function(actions, find) {
                var link = find('.link');
                actions
                    .focus(link) // because link may not get focus outline in firefox in saucelabs when we just click it
                    .click(link)
                    .wait(250);
            });
    });
});
