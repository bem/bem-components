var gemini = require('gemini');

gemini.suite('spin', function(root) {

    root.setUrl('desktop.tests/spin/gemini/gemini.html');

    [
        'islands-xs',
        'islands-s',
        'islands-m',
        'islands-l',
        'islands-xl'
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
