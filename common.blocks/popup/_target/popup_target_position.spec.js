modules.define(
    'spec',
    ['popup', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Popup, BEMDOM, $, BEMHTML) {

describe('popup', function() {
    var popup, popupDomElem, popupParentDomElem, popupOwnerDomElem,
        win = $(window),
        winWidth = win.width(),
        winHeight = win.height(),
        POPUP_MAIN_OFFSET = 5;

    beforeEach(function() {
        popupParentDomElem = $(BEMHTML.apply({ tag : 'div' })).appendTo('body');
        popupOwnerDomElem = $(BEMHTML.apply({
            tag : 'span',
            content : 'owner'
        })).appendTo(popupParentDomElem);
        popup = buildPopup(
            popupParentDomElem,
            {
                block : 'popup',
                mods : { target : 'position' },
                mainOffset : POPUP_MAIN_OFFSET,
                content : 'content'
            });
        popupDomElem = popup.domElem;
    });

    afterEach(function() {
        BEMDOM.destruct(popupParentDomElem);
    });

    describe('setPosition', function() {
        it('should throw "Error" if no position set', function() {
            popup.setMod.bind(popup, 'visible').should.to.throw(Error);
        });

        it('should consume x and y coordinates', function() {
            var coords = {
                top : 10,
                left : 10
            };

            popup
                .setPosition(coords.top, coords.left)
                .setMod('visible');

            var popupOffset = popupDomElem.offset();
            popupOffset.top.should.be.equal(coords.top + popup.params.mainOffset);
            popupOffset.left.should.be.equal(coords.left);

            BEMDOM.destruct(popupDomElem);
        });
    });

    describe('directions', function() {
        var margin = 10,
            popupWidth = winWidth - POPUP_MAIN_OFFSET - margin,
            popupHeight = winHeight - POPUP_MAIN_OFFSET - margin,
            variants = [
                [margin, margin, 'bottom-left'],
                [winWidth - popupWidth / 2, margin, 'bottom-center'],
                [winWidth - margin, margin, 'bottom-right'],
                [margin, winHeight - margin, 'top-left'],
                [winWidth - popupWidth / 2, winHeight - margin, 'top-center'],
                [winWidth - margin, winHeight - margin, 'top-right'],
                [margin, winHeight - popupHeight + POPUP_MAIN_OFFSET / 2, 'right-top'],
                [margin, winHeight - popupHeight / 2, 'right-center'],
                [margin, winHeight - margin - POPUP_MAIN_OFFSET * 1.5, 'right-bottom'],
                [winWidth - margin, winHeight - popupHeight, 'left-top'],
                [winWidth - margin, winHeight - popupHeight / 2, 'left-center'],
                [winWidth - margin, winHeight - margin - POPUP_MAIN_OFFSET * 1.5, 'left-bottom']
            ];

        beforeEach(function() {
            popup.domElem.css({ width : popupWidth, height : popupHeight });
        });

        afterEach(function() {
            popup.delMod('visible');
        });

        describe('relative to position', function() {
            variants.forEach(function(data) {
                it('should be opened in "' + data[2] + '" direction', function() {
                    popup
                        .setPosition(data[0], data[1])
                        .setMod('visible')
                        .getMod('direction')
                            .should.be.equal(data[2]);

                    BEMDOM.destruct(popupDomElem);
                });
            });
        });
    });

    describe('setContent and redraw', function() {
        it('should be redrawed when content is changed', function() {
            var size = Math.min(winWidth / 3, winHeight / 3);
            popup
                .setContent(
                    BEMHTML.apply({
                        tag : 'div',
                        attrs : { style : 'width: ' + size + 'px; height: ' + size + 'px;'
                    }
                }))
                .setPosition(winWidth - size - 1, winHeight - size - popup.params.mainOffset)
                .setMod('visible');

            popup.getMod('direction').should.be.equal('bottom-left');

            popup.setContent(
                BEMHTML.apply({
                    tag : 'div',
                    attrs : { style : 'width: ' + (size * 2) + 'px; height: ' + (size * 2) + 'px;'
                }
            }));

            popup.getMod('direction').should.be.equal('left-center');

            BEMDOM.destruct(popupDomElem);
        });
    });
});

provide();

function buildPopup(parentDomElem, bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo(parentDomElem))
        .bem('popup');
}

});
