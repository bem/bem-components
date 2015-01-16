var gemini = require('gemini');

gemini.suite('link', function(root) {

    root.setUrl('desktop.tests/link/gemini/gemini.html');

    [
        'islands-no-url',
        'islands-url',
        'islands-pseudo'
    ]
        .forEach(function(test) {
            var linkSelector = '.' + test;

            gemini.suite(test, function(suite) {
                suite
                    .setCaptureElements(linkSelector)
                    .before(function(actions, find) {
                        this.link = find(linkSelector);
                    })
                    .capture('plain')
                    .capture('hovered', function(actions) {
                        actions
                            .mouseMove(this.link)
                            .wait(200);
                    })
                    .capture('pressed', function(actions) {
                        actions.mouseDown(this.link);
                    })
                    .capture('clicked', function(actions) {
                        actions.mouseUp(this.link);
                    })
                    .capture('focused', function(actions) {
                        actions.mouseMove(this.link, { x : 100, y : 0 });
                    });
            });
        });

});
