modules.define(
    'spec',
    ['progressbar', 'i-bem-dom', 'jquery', 'BEMHTML'],
    function(provide, Progressbar, bemDom, $, BEMHTML) {

describe('progressbar', function() {
    var progressbar;

    beforeEach(function() {
        progressbar = bemDom.init($(BEMHTML.apply({ block : 'progressbar', val : 10 }))
            .appendTo('body'))
            .bem(Progressbar);
    });

    afterEach(function() {
        bemDom.destruct(progressbar.domElem);
    });

    describe('setVal', function() {
        it('should set correct percents', function() {
            var val = 15;
            progressbar.setVal(val);
            progressbar._elem('bar').domElem[0].style.width.should.be.equal(val + '%');
            progressbar.domElem.attr('aria-valuenow').should.be.equal(val + '%');
        });
    });

    describe('getVal', function() {
        it('should return actual val', function() {
            progressbar.getVal().should.be.equal(10);
            progressbar.setVal(20).getVal().should.be.equal(20);
        });
    });

});

provide();

});
