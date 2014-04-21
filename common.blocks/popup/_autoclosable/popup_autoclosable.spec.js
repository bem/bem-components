modules.define(
    'spec',
    ['popup', 'i-bem__dom', 'jquery', 'BEMHTML', 'next-tick', 'keyboard__codes'],
    function(provide, Popup, BEMDOM, $, BEMHTML, nextTick, keyCodes) {

describe('popup_autoclosable', function() {
    var rootDomElem;

    beforeEach(function() {
        rootDomElem = $(BEMHTML.apply({ tag : 'div' })).appendTo('body');
    });

    afterEach(function() {
        BEMDOM.destruct(rootDomElem);
    });

    describe('pointerclick reactions', function() {
        it('should be visible/hidden on click inside/outside', function(done) {
            var popup = buildPopupWithOwner(rootDomElem, true).popup.setMod('visible');

            nextTick(function() {
                popup.domElem.trigger('pointerclick');
                popup.hasMod('visible').should.be.true;

                rootDomElem.trigger('pointerclick');
                popup.hasMod('visible').should.be.false;

                done();
            });
        });

        it('should not be hidden on owner click', function(done) {
            var popupWithOwner = buildPopupWithOwner(rootDomElem, true),
                ownerDomElem = popupWithOwner.ownerDomElem,
                popup = popupWithOwner.popup.setMod('visible');

            nextTick(function() {
                ownerDomElem.trigger('pointerclick');
                popup.hasMod('visible').should.be.true;

                done();
            });
        });

        it('should not be hidden on click on child popup', function(done) {
            var popup1 = buildPopupWithOwner(rootDomElem, true).popup.setMod('visible'),
                popup2 = buildPopupWithOwner(popup1.domElem).popup.setMod('visible'),
                popup3 = buildPopupWithOwner(popup2.domElem, true).popup.setMod('visible'),
                popup4 = buildPopupWithOwner(rootDomElem, true).popup.setMod('visible');

            nextTick(function() {
                popup3.domElem.trigger('pointerclick');

                popup1.hasMod('visible').should.be.true;
                popup2.hasMod('visible').should.be.true;
                popup3.hasMod('visible').should.be.true;
                popup4.hasMod('visible').should.be.false;

                popup2.domElem.trigger('pointerclick');

                popup1.hasMod('visible').should.be.true;
                popup2.hasMod('visible').should.be.true;
                popup3.hasMod('visible').should.be.false;

                done();
            });
        });
    });

    describe('on escape key reactions', function() {
        it('should be hidden on press escape', function() {
            var popup = buildPopupWithOwner(rootDomElem, true).popup.setMod('visible');
            rootDomElem.trigger($.Event('keydown', { keyCode : keyCodes.ESC }));
            popup.hasMod('visible').should.be.false;
        });

        it('should hide popups in back order of its showing', function() {
            var popup1 = buildPopupWithOwner(rootDomElem, true).popup.setMod('visible'),
                popup2 = buildPopupWithOwner(rootDomElem, true).popup.setMod('visible'),
                popup3 = buildPopupWithOwner(rootDomElem, true).popup.setMod('visible'),
                event = $.Event('keydown', { keyCode : keyCodes.ESC });

            rootDomElem.trigger(event);

            popup1.hasMod('visible').should.be.true;
            popup2.hasMod('visible').should.be.true;
            popup3.hasMod('visible').should.be.false;

            rootDomElem.trigger(event);

            popup1.hasMod('visible').should.be.true;
            popup2.hasMod('visible').should.be.false;

            rootDomElem.trigger(event);

            popup1.hasMod('visible').should.be.false;
        });
    });
});

provide();

function buildPopupWithOwner(parentDomElem, isAutoclosable) {
    var ownerDomElem = $(BEMHTML.apply({
            tag : 'span',
            content : 'owner'
        })).appendTo(parentDomElem);

    return {
        ownerDomElem : ownerDomElem,
        popup : BEMDOM.init(
            $(BEMHTML.apply({ block : 'popup', content : 'content', mods : { autoclosable : isAutoclosable } }))
                .appendTo(parentDomElem))
            .bem('popup')
            .setTarget(ownerDomElem)
    };
}

});
