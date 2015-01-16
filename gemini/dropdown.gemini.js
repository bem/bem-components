var gemini = require('gemini');

gemini.suite('dropdown', function(root) {

    root.setUrl('desktop.tests/dropdown/gemini/gemini.html');

    [
        'default-link',
        'default-button',
        'islands-link',
        'islands-button'
    ]
        .forEach(function(test) {
            var dropdownSelector = '.' + test + ' .' + test.match(/-(\w+)$/)[1];

                gemini.suite(test, function(suite) {
                    suite
                        .setCaptureElements(dropdownSelector, '.popup_' + test)
                        .capture('opened', function(actions, find) {
                            actions.click(find(dropdownSelector));
                        });
                });
        });

    gemini.suite('size + tick', function() {
        ['s', 'm', 'l', 'xl'].forEach(function(size) {
            gemini.suite(size, function(suite) {
                var captureElemets = [],
                    ids = ['icon-only', 'icon-right', 'icon-left'],
                    cls = function(block, id) {
                        return ['.test-tick', block, size, id].join('-');
                    };

                ids.forEach(function(id) {
                    captureElemets.push(cls('dropdown', id));
                    captureElemets.push(cls('popup', id));
                });

                suite
                    .setCaptureElements(captureElemets)
                    .capture('closed')
                    .capture('opened', function(actions, find) {
                        ids.forEach(function(id) {
                            actions.click(find(cls('dropdown', id) + ' .button'))
                        });
                        actions.wait(300);
                    })

            });
        });

    });
});
