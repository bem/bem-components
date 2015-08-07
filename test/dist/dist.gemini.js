var gemini = require('gemini');

gemini.suite('dist', function(root) {

    root
        .setUrl('desktop.pages/dist/dist.html')
        .setCaptureElements('.page')
        .capture('plain');

});
