gemini.suite('link', function(root) {

    root.setUrl('desktop.tests/link/gemini/gemini.html');

    [
        'islands-no-url',
        'islands-url',
        'islands-pseudo',

        'link_view_minor',
        'link_view_external',
        'link_view_ghost',
        'link_view_text',
        'link_view_strong'
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
