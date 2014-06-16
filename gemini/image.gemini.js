var gemini = require('gemini');

gemini.suite('image', function(root) {

    root.setUrl('desktop.tests/image/gemini/gemini.html');

    ['image-nosize', 'image-size']
        .forEach(function(test) {
            var imageSelector = '.' + test;

            gemini.suite(test, function(suite) {
                suite
                    .setCaptureElements(imageSelector)
                    .capture('plain');
            });
        });
		
});
