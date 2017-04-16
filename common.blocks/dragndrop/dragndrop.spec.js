modules.define(
    'spec',
    ['dragndrop', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, dragndrop, BEMDOM, $, BEMHTML) {

describe('dragndrop', function() {
    var dragndrop;

    beforeEach(function() {
        dragndrop = BEMDOM.init(
                $(BEMHTML.apply({ block : 'dragndrop' })))
            .appendTo('body')
            .bem('dragndrop');
    });

    afterEach(function() {
        BEMDOM.destruct(dragndrop.domElem);
    });

    describe('set Block Position', function() {
        it('should set block position on the given coordinates', function() {
            dragndrop.setPos(100, 200);
            dragndrop.domElem.position().should.be.eql({ top : 200, left : 100 });
        });
    });

});

provide();

});
