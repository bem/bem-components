var gemini = require('gemini');

gemini.suite('menu', function(root) {

    root.setUrl('desktop.tests/menu/gemini/gemini.html');

    [
        'normal-radio-s',
        'normal-radio-m',
        'normal-radio-l',
        'normal-radio-xl',
        'normal-check',
        'normal-link',
        'normal-icon'
    ]
        .forEach(function(test) {
            var menuSelector = '.' + test;

            gemini.suite(test, function(suite) {

                suite
                    .setCaptureElements(menuSelector)

                    .capture('plain')
                    .capture('hovered', function(actions, find) {
                        actions.mouseMove(find(menuSelector + ' .menu-item'));
                    });
            });
        });

});
