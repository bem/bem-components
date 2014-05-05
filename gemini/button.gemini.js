var gemini = require('gemini');

gemini.suite('button', function(suite) {
    suite
        .setUrl('desktop.tests/button/simple/simple.html')
        .setElements({
            button: '.button'
        })
        .capture('plain')
        .capture('hovered', function(actions, elements) {
            actions.mouseMove(elements.button);
        })
        .capture('pressed', function(actions, elements) {
            actions.mouseDown(elements.button);
        })
        .capture('clicked', function(actions, elements) {
            actions.click(elements.button);
        });
});
