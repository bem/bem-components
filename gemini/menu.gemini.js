var gemini = require('gemini');

gemini.suite('menu', function(root) {

    root.setUrl('desktop.tests/menu/gemini/gemini.html');

    [
        'menu-radio-normal-someCkecked-someDisabled-s',
        'menu-radio-normal-someCkecked-someDisabled-m',
        'menu-radio-normal-someCkecked-someDisabled-l',
        'menu-radio-normal-someCkecked-someDisabled-xl',
        'menu-check-normal-someCkecked-s',
        'menu-check-normal-someCkecked-m',
        'menu-check-normal-someCkecked-l',
        'menu-check-normal-someCkecked-xl',
        'menu-normal-someLink-linkDisabled-s',
        'menu-normal-someLink-linkDisabled-m',
        'menu-normal-someLink-linkDisabled-l',
        'menu-normal-someLink-linkDisabled-xl',
        'menu-normal-someIcon-s',
        'menu-normal-someIcon-m',
        'menu-normal-someIcon-l',
        'menu-normal-someIcon-xl'
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
