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

            getZIndex(popup).should.be.gt(getZIndex(popup2));
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

            getZIndex(popup).should.be.lt(getZIndex(popup2));
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

            getZIndex(popup).should.be.lt(getZIndex(popup2));

            getZIndex(popup2).should.be.lt(getZIndex(popup3));
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

            getZIndex(popup).should.be.lt(getZIndex(popup2));

            popup.setAnchor(popup2.domElem.find('span:first'));

            getZIndex(popup).should.be.gt(getZIndex(popup2));
        });

        it('should recalculate z-index when anchor is changed', function() {
            var anchorLevel1 = $(BEMHTML.apply({
                    block : 'z-index-group',
                    mods : { level : 1 },
                    content : {
                        block : 'anchor',
                        tag : 'span',
                        content : 'anchor 1'
                    }
                })).appendTo('body').find('.anchor');

            popup.setAnchor(popupAnchorDomElem).setMod('visible');

            var initialZIndex = getZIndex(popup);

            popup.setAnchor(anchorLevel1);
            getZIndex(popup).should.be.gt(initialZIndex, 'popup moved to z-index-group_level_1 while visible');

            popup
                .delMod('visible')
                .setAnchor(popupAnchorDomElem)
                .setMod('visible');
            getZIndex(popup).should.be.equal(initialZIndex, 'popup moved from z-index-group_level_1 while hidden');
        });
    });

    describe('possible drawing params', function() {
        var winTop = win.scrollTop(),
            winLeft = win.scrollLeft(),
            winBottom = winTop + winHeight,
            winRight = winLeft + winWidth,
            variants = [
                { anchorSide : 2, offset : 0 },
                { anchorSide : winHeight - 2, offset : 0 }
            ];

        variants.forEach(function(v) {
            // precalculate anchor position
            v.anchorTop = winTop + Math.round((winHeight - v.anchorSide) / 2);
            v.anchorLeft = winLeft + Math.round((winWidth - v.anchorSide) / 2);

            it('should properly calculate drawing params for anchorSide: ' + v.anchorSide +
                ' and offset: ' + v.offset, function() {

                var precalculatedParams = precalculate(v);

                popupAnchorDomElem
                    .css({
                        position : 'absolute',
                        display : 'block',
                        overflow : 'hidden',
                        width : v.anchorSide,
                        height : v.anchorSide,
                        left : v.anchorLeft,
                        top : v.anchorTop
                    });

                popup
                    .setAnchor(popupAnchorDomElem)
                    .setMod('visible');

                popup.calcPossibleDrawingParams().forEach(function(params) {
                    var direction = params.direction,
                        expectedParams = precalculatedParams[direction];

                    params.left.should.be.eq(expectedParams.left, direction + ' left ok');
                    params.top.should.be.eq(expectedParams.top, direction + ' top ok');
                    params.width.should.be.eq(expectedParams.width, direction + ' width ok');
                    params.height.should.be.eq(expectedParams.height, direction + ' height ok');
                });
            });
        });

        function precalculate(v) {
            v.viewportOffset = v.offset;
            v.secondaryOffset = 0;

            // precalculateParams by anchorSide, anchorLeft, anchorTop, and offsets
            var bottomsTop = v.anchorTop + v.anchorSide + POPUP_MAIN_OFFSET,
                bottomsHeight = winBottom - bottomsTop - v.viewportOffset,
                topsTop = winTop + v.viewportOffset,
                topsHeight = v.anchorTop - topsTop - POPUP_MAIN_OFFSET,

                rightsLeft = v.anchorLeft + v.anchorSide + POPUP_MAIN_OFFSET,
                rightsWidth = winRight - rightsLeft - v.viewportOffset,
                leftsLeft = winLeft + v.viewportOffset,
                leftsWidth = v.anchorLeft - leftsLeft - POPUP_MAIN_OFFSET,

                leftAlignedLeft = v.anchorLeft + v.secondaryOffset,
                leftAlignedWidth = winRight - leftAlignedLeft - v.viewportOffset,
                rightAlignedLeft = winLeft + v.viewportOffset,
                rightAlignedWidth = v.anchorLeft + v.anchorSide - rightAlignedLeft - v.secondaryOffset,

                topAlignedTop = v.anchorTop + v.secondaryOffset,
                topAlignedHeight = winBottom - topAlignedTop - v.viewportOffset,
                bottomAlignedTop = winTop + v.viewportOffset,
                bottomAlignedHeight = v.anchorTop + v.anchorSide - bottomAlignedTop - v.secondaryOffset,

                horizCenterWidth = winWidth - v.viewportOffset * 2,
                horizCenterLeft = v.anchorLeft - (horizCenterWidth - v.anchorSide) / 2,
                vertCenterHeight = winHeight - v.viewportOffset * 2,
                vertCenterTop = v.anchorTop - (vertCenterHeight - v.anchorSide) / 2;

            return {
                'bottom-left' : dimHash(bottomsTop, bottomsHeight, leftAlignedLeft, leftAlignedWidth),
                'bottom-center' : dimHash(bottomsTop, bottomsHeight, horizCenterLeft, horizCenterWidth),
                'bottom-right' : dimHash(bottomsTop, bottomsHeight, rightAlignedLeft, rightAlignedWidth),

                'top-left' : dimHash(topsTop, topsHeight, leftAlignedLeft, leftAlignedWidth),
                'top-center' : dimHash(topsTop, topsHeight, horizCenterLeft, horizCenterWidth),
                'top-right' : dimHash(topsTop, topsHeight, rightAlignedLeft, rightAlignedWidth),

                'right-top' : dimHash(topAlignedTop, topAlignedHeight, rightsLeft, rightsWidth),
                'right-center' : dimHash(vertCenterTop, vertCenterHeight, rightsLeft, rightsWidth),
                'right-bottom' : dimHash(bottomAlignedTop, bottomAlignedHeight, rightsLeft, rightsWidth),

                'left-top' : dimHash(topAlignedTop, topAlignedHeight, leftsLeft, leftsWidth),
                'left-center' : dimHash(vertCenterTop, vertCenterHeight, leftsLeft, leftsWidth),
                'left-bottom' : dimHash(bottomAlignedTop, bottomAlignedHeight, leftsLeft, leftsWidth)
            };

            /** convert dimensions array to object */
            function dimHash(top, height, left, width) {
                return { top : top, height : height, left : left, width : width };
            }
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

function getZIndex(popup) {
    return Number(popup.domElem.css('z-index'));
}

});
