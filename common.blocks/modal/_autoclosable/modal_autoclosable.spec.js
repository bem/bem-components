modules.define(
    'spec',
    ['modal', 'i-bem__dom', 'jquery', 'BEMHTML', 'next-tick', 'keyboard__codes'],
    function(provide, Modal, BEMDOM, $, BEMHTML, nextTick, keyCodes) {

describe('modal_autoclosable', function() {
    var modal;

    beforeEach(function() {
        modal = buildModal().setMod('visible');
    });

    afterEach(function() {
        BEMDOM.destruct(modal.domElem);
    });

    it('should be visible on click inside __content', function() {
        doPointerClick(modal.elem('content'));
        modal.hasMod('visible').should.be.true;
    });

    it('should be closed on click inside modal, but outside __content', function() {
        doPointerClick(modal.domElem);
        modal.hasMod('visible').should.be.false;
    });

    it('should be closed on click outside modal', function(done) {
        nextTick(function() {
            doPointerClick(BEMDOM.scope);
            modal.hasMod('visible').should.be.false;

            done();
        });
    });

    it('should be hidden on press escape', function() {
        BEMDOM.scope.trigger($.Event('keydown', { keyCode : keyCodes.ESC }));
        modal.hasMod('visible').should.be.false;
    });
});

function buildModal() {
    return $(BEMHTML.apply({
            block : 'modal',
            mods : { autoclosable : true },
            content : 'content'
        }))
        .appendTo($('body'))
        .bem('modal');
}

function doPointerClick(target) {
    return target
        .trigger('pointerdown')
        .trigger('pointerup')
        .trigger('pointerclick');
}

provide();

});
