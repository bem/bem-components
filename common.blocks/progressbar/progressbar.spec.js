modules.define(
    'spec',
    ['progressbar', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, progressbar, BEMDOM, $, BEMHTML) {

describe('progressbar', function() {
    var progressbar;

    beforeEach(function() {
        progressbar = BEMDOM.init($(BEMHTML.apply({ block : 'progressbar', value : 10 }))
            .appendTo('body'))
            .bem('progressbar');
    });

    afterEach(function() {
        BEMDOM.destruct(progressbar.domElem);
    });

    describe('setVal', function() {
        it('should set correct percents', function() {
            var value = 15;
            progressbar.setVal(value);
            progressbar.elem('bar')[0].style.width.should.be.equal(value + '%');
            progressbar._val.should.be.equal(value);
        });

        it('should set correct percent if value is string with numbers', function() {
            progressbar.setVal('50');
            progressbar.elem('bar')[0].style.width.should.be.equal('50%');
            progressbar._val.should.be.equal('50');
        });
    });

    describe('getVal', function() {
        it('should return actual value', function() {
            progressbar.getVal().should.be.equal(10);
            progressbar.setVal(20);
            progressbar.getVal().should.be.equal(20);
        });
    });

});

provide();

});
