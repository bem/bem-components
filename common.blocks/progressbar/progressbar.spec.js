modules.define(
    'spec',
    ['progressbar', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, progressbar, BEMDOM, $, BEMHTML) {

describe('progressbar', function() {
    var progressbar;

    beforeEach(function() {
        progressbar = BEMDOM.init(
                $(BEMHTML.apply({ block : 'progressbar' })))
            .appendTo('body')
            .bem('progressbar');
    });

    afterEach(function() {
        BEMDOM.destruct(progressbar.domElem);
    });

    describe('setProgress', function() {
        it('should set percent', function() {
            var progress = 15;
            progressbar.setProgress(progress);
            progressbar.elem('bar')[0].style.width.should.be.equal(progress + '%');
        });
    });

});

provide();

});
