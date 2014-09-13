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

    describe('pointer reactions', function() {
        it('should be visible on click inside', function(done) {
            var popup = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible');

            nextTick(function() {
                doPointerClick(popup.domElem);
                popup.hasMod('visible').should.be.true;

                done();
            });
        });

        it('should be hidden on click outside', function(done) {
            var popup = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible');

            nextTick(function() {
                doPointerClick(rootDomElem);
                popup.hasMod('visible').should.be.false;

                done();
            });
        });

        it('should not be hidden on anchor click', function(done) {
            var popupWithOwner = buildPopupWithAnchor(rootDomElem, true),
                anchorDomElem = popupWithOwner.anchorDomElem,
                popup = popupWithOwner.popup.setMod('visible');

            nextTick(function() {
                doPointerClick(anchorDomElem);
                popup.hasMod('visible').should.be.true;

                done();
            });
        });

        it('should not be hidden on click on child popup', function(done) {
            var popup1 = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible'),
                popup2 = buildPopupWithAnchor(popup1.domElem).popup.setMod('visible'),
                popup3 = buildPopupWithAnchor(popup2.domElem, true).popup.setMod('visible'),
                popup4 = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible');

            nextTick(function() {
                doPointerClick(popup3.domElem);

                popup1.hasMod('visible').should.be.true;
                popup2.hasMod('visible').should.be.true;
                popup3.hasMod('visible').should.be.true;
                popup4.hasMod('visible').should.be.false;

                doPointerClick(popup2.domElem);

                popup1.hasMod('visible').should.be.true;
                popup2.hasMod('visible').should.be.true;
                popup3.hasMod('visible').should.be.false;

                done();
            });
        });
    });

    describe('on escape key reactions', function() {
        it('should be hidden on press escape', function() {
            var popup = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible');
            rootDomElem.trigger($.Event('keydown', { keyCode : keyCodes.ESC }));
            popup.hasMod('visible').should.be.false;
        });

        it('should hide popups in back order of its showing', function() {
            var popup1 = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible'),
                popup2 = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible'),
                popup3 = buildPopupWithAnchor(rootDomElem, true).popup.setMod('visible'),
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

function buildPopupWithAnchor(parentDomElem, isAutoclosable) {
    var anchorDomElem = $(BEMHTML.apply({
            tag : 'span',
            content : 'anchor'
        })).appendTo(parentDomElem);

    return {
        anchorDomElem : anchorDomElem,
        popup : BEMDOM.init(
            $(BEMHTML.apply({
                block : 'popup',
                mods : { target : 'anchor', autoclosable : isAutoclosable },
                content : 'content'
            }))
                .appendTo(parentDomElem))
                .bem('popup')
                .setAnchor(anchorDomElem)
    };
}

function doPointerClick(target) {
    return target
        .trigger('pointerdown')
        .trigger('pointerup')
        .trigger('pointerclick');
}

});
