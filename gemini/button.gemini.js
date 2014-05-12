var gemini = require('gemini');

gemini.suite('button', function(root) {

    root.setUrl('desktop.tests/button/simple/simple.html')
        .setCaptureElements('.button_theme_normal');

    gemini.suite('normal', function(suite) {
        suite
            .setCaptureElements('.button_theme_normal')
            .before(function(actions, find) {
                this.button = find('.button_theme_normal');
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

    gemini.suite('disabled', function(suite) {
        suite
            .setCaptureElements('.button_theme_normal.button_disabled')
            .capture('plain');
    });

});
