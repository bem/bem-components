var gemini = require('gemini');

gemini.suite('spin', function(root) {

    root.setUrl('desktop.tests/spin/gemini/gemini.html');

    [
        'normal-xs',
        'normal-s',
        'normal-m',
        'normal-l',
        'normal-xl'
    ]
        .forEach(function(test) {
            var testSize = '.' + test;

            gemini.suite(test, function(suite) {
                suite
                    .setCaptureElements(testSize)
                    .capture('plain');
            });
        });

});
