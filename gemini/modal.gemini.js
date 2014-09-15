var gemini = require('gemini');

gemini.suite('modal', function(root) {

    root.setUrl('desktop.tests/modal/gemini/gemini.html');

    gemini.suite('normal', function(suite) {
        suite
            .setCaptureElements('html') // because modal acts on entire window
            .capture('plain')
            .capture('visible', function(actions, find) {
                actions.click(find('.link')).wait(250);
            });
    });
});
