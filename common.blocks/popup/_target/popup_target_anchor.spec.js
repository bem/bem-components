modules.define(
    'spec',
    ['popup', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Popup, BEMDOM, $, BEMHTML) {

describe('popup', function() {
    var popup, popupDomElem, popupParentDomElem, popupAnchorDomElem,
        win = $(window),
        winWidth = win.width(),
        winHeight = win.height(),
        UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL = 100,
        POPUP_MAIN_OFFSET = 5;

    beforeEach(function() {
        popupParentDomElem = $(BEMHTML.apply({ tag : 'div' })).appendTo('body');
        popupAnchorDomElem = $(BEMHTML.apply({
            tag : 'span',
            content : 'anchor'
        })).appendTo(popupParentDomElem);
        popup = buildPopup(
            popupParentDomElem,
            {
                block : 'popup',
                mods : { target : 'anchor' },
                mainOffset : POPUP_MAIN_OFFSET,
                content : 'content'
            });
        popupDomElem = popup.domElem;
    });

    afterEach(function() {
        BEMDOM.destruct(popupParentDomElem);
    });

    describe('setAnchor', function() {
        it('should throw "Error" if no anchor set', function() {
            popup.setMod.bind(popup, 'visible').should.to.throw(Error);
        });

        it('should consume DOM elem as a target', function() {
            popup
                .setAnchor(popupAnchorDomElem)
                .setMod('visible');

            var anchorOffset = popupAnchorDomElem.offset(),
                popupOffset = popupDomElem.offset();

            popupOffset.top.should.be.equal(
                anchorOffset.top + popupAnchorDomElem.outerHeight() + popup.params.mainOffset,
                'invalid top');
            popupOffset.left.should.be.equal(
                anchorOffset.left,
                'invalid left');
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

        describe('relative to anchor', function() {
            beforeEach(function() {
                popupAnchorDomElem.css({
                    position : 'absolute',
                    width : 1,
                    height : 1,
                    display : 'block',
                    overflow : 'hidden'
                });
            });

            variants.forEach(function(data) {
                it('should be opened in "' + data[2] + '" direction', function() {
                    popupAnchorDomElem.css({ left : data[0], top : data[1] });
                    popup
                        .setAnchor(popupAnchorDomElem)
                        .setMod('visible')
                        .getMod('direction')
                            .should.be.equal(data[2]);
                });
            });
        });
    });

    describe('scroll reactions', function() {
        it('should not be hidden on window scroll', function(done) {
            var timeout = UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL + UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL / 2;

            popupParentDomElem.height(winHeight + 2 * popupAnchorDomElem.height());

            popup
                .setAnchor(popupAnchorDomElem)
                .setMod('visible');

            popupDomElem.css('display').should.not.be.equal('none');

            win.scrollTop(popupAnchorDomElem.offset().top + popupAnchorDomElem.height());

            setTimeout(function() {
                popupDomElem.css('display').should.not.be.equal('none');
                done();
            }, timeout);
        });

        it('should be hidden in nested scrolled container', function(done) {
            var timeout = UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL + UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL / 2,
                anchorHeight = popupAnchorDomElem.height();

            popupParentDomElem
                .append('<div style="height: ' + (4 * anchorHeight) + 'px"/>')
                .css({
                    overflow : 'auto',
                    marginTop : 2 * anchorHeight,
                    height : 2 * anchorHeight
                });

            popup
                .setAnchor(popupAnchorDomElem)
                .setMod('visible');

            popupDomElem.css('display').should.not.be.equal('none', 'wrong display on visible anchor');

            popupParentDomElem.scrollTop(3 * anchorHeight);

            setTimeout(function() {
                popupDomElem.css('display').should.be.equal('none', 'wrong display on hidden anchor');
                popupParentDomElem.scrollTop(0);
                setTimeout(function() {
                    popupDomElem.css('display').should.not.be.equal(
                        'none',
                        'wrong display on restore anchor visibility');
                    popupParentDomElem.scrollTop(0);
                    done();
                }, timeout);
            }, timeout);
        });
    });

    describe('nested popups', function() {
        var childPopup, childAnchorDomElem;
        beforeEach(function() {
            popup.setAnchor(popupAnchorDomElem);
            childAnchorDomElem = $(BEMHTML.apply({ tag : 'span', content : 'child anchor' }))
                .appendTo(popupDomElem);
            childPopup = buildPopup(
                popupDomElem,
                {
                    block : 'popup',
                    mods : { target : 'anchor' },
                    content : 'child content'
                }).setAnchor(childAnchorDomElem);
        });

        it('should hide nested popups', function() {
            popup.setMod('visible');
            childPopup.setMod('visible');
            popup.delMod('visible');
            childPopup.hasMod('visible').should.be.false;
        });
    });

    describe('z-index groups', function() {
        beforeEach(function() {
            popup.setAnchor(popupAnchorDomElem);
        });

        it('should be z-indexed in open order by default', function() {
            var popup2 = buildPopup(
                    popupParentDomElem,
                    {
                        block : 'popup',
                        mods : { target : 'anchor' },
                        content : 'content 2'
                    }).setAnchor(popupAnchorDomElem);

            popup2.setMod('visible');
            popup.setMod('visible');

            Number(popup.domElem.css('z-index'))
                .should.be.gt(Number(popup2.domElem.css('z-index')));
        });

        it('should properly use zIndexGroupLevel param', function() {
            var popup2 = buildPopup(
                    popupParentDomElem,
                    {
                        block : 'popup',
                        mods : { target : 'anchor' },
                        zIndexGroupLevel : 1,
                        content : 'content 2'
                    }).setAnchor(popupAnchorDomElem);

            popup2.setMod('visible');
            popup.setMod('visible');

            Number(popup.domElem.css('z-index'))
                .should.be.lt(Number(popup2.domElem.css('z-index')));
        });

        it('should properly use z-index-group blocks which may be in anchor parents', function() {
            var zIndexGroup1 = $(BEMHTML.apply({
                        block : 'z-index-group',
                        mods : { level : 1 },
                        content : { tag : 'span', content : 'anchor 2' }
                    })).appendTo(popupParentDomElem),
                popup2 = buildPopup(
                    zIndexGroup1,
                    {
                        block : 'popup',
                        mods : { target : 'anchor' },
                        content : 'content 2'
                    }).setAnchor(zIndexGroup1.find('span:first')),
                zIndexGroup2 = $(BEMHTML.apply({
                        block : 'z-index-group',
                        mods : { level : 1 },
                        content : { tag : 'span', content : 'anchor 3' }
                    })).appendTo(zIndexGroup1),
                popup3 = buildPopup(
                    zIndexGroup2,
                    {
                        block : 'popup',
                        mods : { target : 'anchor' },
                        content : 'content 3'
                    }).setAnchor(zIndexGroup2.find('span:first'));

            popup3.setMod('visible');
            popup2.setMod('visible');
            popup.setMod('visible');

            Number(popup.domElem.css('z-index'))
                .should.be.lt(Number(popup2.domElem.css('z-index')));

            Number(popup2.domElem.css('z-index'))
                .should.be.lt(Number(popup3.domElem.css('z-index')));
        });

        it('should consider zIndexGroupLevel of parent popup', function() {
            var popup2 = buildPopup(
                    popupParentDomElem,
                    {
                        block : 'popup',
                        mods : { target : 'anchor' },
                        zIndexGroupLevel : 1,
                        content : { tag : 'span', content : 'anchor 2' }
                    });

            popup.setMod('visible');
            popup2.setAnchor(popupAnchorDomElem).setMod('visible');

            Number(popup.domElem.css('z-index'))
                .should.be.lt(Number(popup2.domElem.css('z-index')));

            popup.setAnchor(popup2.domElem.find('span:first'));

            Number(popup.domElem.css('z-index'))
                .should.be.gt(Number(popup2.domElem.css('z-index')));
        });
    });

    describe('possible drawing params', function() {
        beforeEach(function() {
            popup.setAnchor(popupAnchorDomElem);
        });

        it('should be calculated properly', function() {
            var drawingParams = remapParamsByDirection(popup.calcPossibleDrawingParams());

            drawingParams['bottom-left']    .should.eql({ width : 400, height : 276, left : 0, top : 24 });
            drawingParams['bottom-center']  .should.eql({ width : 400, height : 276, left : -175.5, top : 24 });
            drawingParams['bottom-right']   .should.eql({ width : 49, height : 276, left : 0, top : 24 });
            drawingParams['top-left']       .should.eql({ width : 400, height : -5, left : 0, top : 0 });
            drawingParams['top-center']     .should.eql({ width : 400, height : -5, left : -175.5, top : 0 });
            drawingParams['top-right']      .should.eql({ width : 49, height : -5, left : 0, top : 0 });
            drawingParams['right-top']      .should.eql({ width : 346, height : 300, left : 54, top : 0 });
            drawingParams['right-center']   .should.eql({ width : 346, height : 300, left : 54, top : -140.5 });
            drawingParams['right-bottom']   .should.eql({ width : 346, height : 19, left : 54, top : 0 });
            drawingParams['left-top']       .should.eql({ width : -5, height : 300, left : 0, top : 0 });
            drawingParams['left-center']    .should.eql({ width : -5, height : 300, left : 0, top : -140.5 });
            drawingParams['left-bottom']    .should.eql({ width : -5, height : 19, left : 0, top : 0 });
        });

        function remapParamsByDirection(drawingParams) {
            var mapped = {};
            drawingParams.forEach(function(el) {
                mapped[el.direction] = {
                    width : el.width,
                    height : el.height,
                    left : el.left,
                    top : el.top
                };
            });
            return mapped;
        }
    });

    describe('destructing', function() {
        it('should be destructed on anchor destruct', function() {
            popup
                .setAnchor(popupAnchorDomElem)
                .setMod('visible');

            BEMDOM.destruct(popupAnchorDomElem);

            popup.hasMod('js').should.be.false;
        });
    });
});

provide();

function buildPopup(parentDomElem, bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo(parentDomElem))
        .bem('popup');
}

});
