modules.define(
    'spec',
    ['modal', 'i-bem-dom', 'jquery', 'BEMHTML', 'keyboard__codes'],
    function(provide, Modal, bemDom, $, BEMHTML, keyCodes) {

describe('modal_autoclosable', function() {
    var modal;

    beforeEach(function() {
        modal = buildModal().setMod('visible');
    });

    afterEach(function() {
        bemDom.destruct(modal.domElem);
    });

    it('should be visible on click inside __content', function(done) {
        setTimeout(function() {
            doPointerClick(modal._elem('content').domElem);
            modal.hasMod('visible').should.be.true;
            done();
        }, 50);
    });

    it('should be closed on click inside modal, but outside __content', function(done) {
        setTimeout(function() {
            doPointerClick(modal.domElem);
            modal.hasMod('visible').should.be.false;
            done();
        }, 50);
    });

    it('should be closed on click outside modal', function(done) {
        setTimeout(function() {
            doPointerClick(bemDom.scope);
            modal.hasMod('visible').should.be.false;
            done();
        }, 50);
    });

    it('should be hidden on press escape', function() {
        bemDom.scope.trigger($.Event('keydown', { keyCode : keyCodes.ESC }));
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
        .bem(Modal);
}

function doPointerClick(target) {
    return target
        .trigger('pointerdown')
        .trigger('pointerup')
        .trigger('pointerclick');
}

provide();

});
