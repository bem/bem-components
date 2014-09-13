modules.define(
    'spec',
    ['popup', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Popup, BEMDOM, $, BEMHTML) {

describe('popup', function() {
    var popup, popupDomElem, popupParentDomElem;

    beforeEach(function() {
        popupParentDomElem = $(BEMHTML.apply({ tag : 'div' })).appendTo('body');
        popup = buildPopup(
            popupParentDomElem,
            {
                block : 'popup',
                zIndexGroupLevel : 2,
                content : 'content'
            });
        popupDomElem = popup.domElem;
    });

    afterEach(function() {
        BEMDOM.destruct(popupParentDomElem);
    });

    describe('attachment to body', function() {
        it('should be attached to body on first opening', function() {
            popup.domElem.parent()[0].should.be.eql(popupParentDomElem[0], 'misplaced on init');
            popup.setMod('visible');
            popup.domElem.parent()[0].should.be.eql($('body')[0], 'misplaced on visible');
            BEMDOM.destruct(popupDomElem);
        });
    });

    describe('z-index', function() {
        it('should properly calculate z-index', function() {
            popup.setMod('visible');
            Number(popupDomElem.css('z-index')).should.be.equal(3001);
        });
    });

    describe('destructing', function() {
        it('should be hidden on destruct', function() {
            popup.setMod('visible');
            BEMDOM.destruct(popupDomElem);
            popup.hasMod('visible').should.be.false;
        });
    });
});

provide();

function buildPopup(parentDomElem, bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo(parentDomElem))
        .bem('popup');
}

});
