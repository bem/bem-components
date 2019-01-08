describe('attach', () => {
    it('islands-sizeS-enabled', function() {
        console.log('first test');
        return this.browser
            .url('desktop.tests/attach/gemini/gemini.html')
            .getUrl()
            .then((v) => {
                console.log('===URL===', v);
            })
            .getHTML('body')
            .then((value) => {
                console.log('HTML=>', value);
                console.log('============================');
            })
            .waitForVisible('.islands-sizeS-enabled')
            .assertView('plain', ['.islands-sizeS-enabled']);
    });
});
