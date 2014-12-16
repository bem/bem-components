var gemini = require('gemini');

gemini.suite('progressbar', function(root) {

    root.setUrl('desktop.tests/progressbar/gemini/gemini.html');

        gemini.suite('islands', function(suite) {
            var progressbarSelector = '.islands';

            suite
                .setCaptureElements(progressbarSelector)
                .capture('plain');
        });

});
