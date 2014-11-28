modules.define(
    'spec',
    ['modal', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Modal, BEMDOM, $, BEMHTML) {

describe('modal', function() {
    var modal;

    beforeEach(function() {
        modal = buildModal();
    });

    afterEach(function() {
        BEMDOM.destruct(modal.domElem);
    });

    describe('content', function() {
        it('should set content from string', function() {
            modal.setContent('<div class="hello"></div>');
            modal.domElem.find('.hello').length.should.be.equal(1);
        });

        it('should set content from jQuery element', function() {
            var elem = $('<div class="hello"></div>');
            modal.setContent(elem);
            modal.domElem.find(elem).length.should.be.equal(1);
        });
    });

    describe('z-indexes', function() {
        it('should get proper z-index', function() {
            modal.setMod('visible');
            Number(modal.domElem.css('z-index')).should.be.equal(21001);
        });
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
