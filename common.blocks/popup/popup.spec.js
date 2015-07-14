modules.define(
    'spec',
    ['popup', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, Popup, BEMDOM, $, BEMHTML, chai) {

var expect = chai.expect;
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

    describe('visible', function() {
        it('should set/remove "aria-hidden" attribute on visible mod', function() {
            popup.setMod('visible');
            expect(popup.domElem.attr('aria-hidden')).to.be.undefined;

            popup
                .delMod('visible')
                .domElem.attr('aria-hidden').should.be.equal('true');
        });
    });
});

provide();

function buildPopup(parentDomElem, bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo(parentDomElem))
        .bem('popup');
}

});
