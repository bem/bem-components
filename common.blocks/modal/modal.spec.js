modules.define(
    'spec',
    ['modal', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Modal, BEMDOM, $, BEMHTML) {

describe('modal', function() {
    it('should get proper z-index', function() {
        var modal = buildModal().setMod('visible');
        Number(modal.domElem.css('z-index')).should.be.equal(21001);
        BEMDOM.destruct(modal.domElem);
    });
});

function buildModal() {
    return $(BEMHTML.apply({
            block : 'modal',
            content : 'content'
        }))
        .appendTo($('body'))
        .bem('modal');
}

provide();

});
