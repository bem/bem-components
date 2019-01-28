describe('dist', function() {
    it('plain dist screenshot', function() {
        return this.browser
            .url('desktop.pages/browser-tmpl-dist-hermione/browser-tmpl-dist-hermione.html')
            .pause(5000) // wait for BH and BEMHTML
            .assertView('plain', '.page');
    });
});
