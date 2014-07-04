var gemini = require('gemini');

gemini.suite('icon', function(root) {

    root.setUrl('desktop.tests/icon/gemini/gemini.html');

    [
        'icon-url',
        'icon-mod-twitter',
        'icon-mod-vk'
    ]
        .forEach(function(test) {
            var iconSelector = '.' + test;

            gemini.suite(test, function(suite) {
                suite
                    .setCaptureElements(iconSelector)
                    .capture('plain');
            });
        });

});
