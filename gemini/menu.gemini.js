var gemini = require('gemini');

gemini.suite('menu', function(root) {

    root.setUrl('desktop.tests/menu/gemini/gemini.html');

    [
        'islands-radio-s',
        'islands-radio-m',
        'islands-radio-l',
        'islands-radio-xl',
        'islands-check',
        'islands-link',
        'islands-icon'
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
