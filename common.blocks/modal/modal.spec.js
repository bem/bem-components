modules.define(
    'spec',
    ['modal', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Modal, BEMDOM, $, BEMHTML, sinon) {

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

    describe('events', function() {
        it('should emit "show" and "hide" events', function() {
            var onHide = sinon.spy(),
                onShow = sinon.spy();
            modal.on('show', onShow);
            modal.on('hide', onHide);
            modal.setMod('visible');
            onShow.should.have.been.calledOnce;
            modal.delMod('visible');
            onHide.should.have.been.calledOnce;
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
