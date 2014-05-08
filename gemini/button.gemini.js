var gemini = require('gemini');

gemini.suite('button', function(suite) {
    suite
        .setUrl('desktop.tests/button/simple/simple.html')
        .setCaptureElements('.button')
        .before(function(actions, find) {
            this.button = find('.buttons');
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
