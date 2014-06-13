var gemini = require('gemini');

gemini.suite('spin', function(root) {
	root.setUrl('desktop.tests/spin/gemini/gemini.html');

	['gemini-test-spin-xs', 'gemini-test-spin-s', 'gemini-test-spin-m', 'gemini-test-spin-l', 'gemini-test-spin-xl']
		.forEach(function(test) {
			var testSize = '.' + test;
			gemini.suite(test, function(suite) {
				suite
				    .setCaptureElements(testSize)
				    .capture('plain');
			});
		});
});
