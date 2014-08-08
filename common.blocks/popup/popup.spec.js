modules.define(
    'spec',
    ['popup', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Popup, BEMDOM, $, BEMHTML) {

describe('popup', function() {
    var popup, popupDomElem, popupParentDomElem, popupOwnerDomElem,
        win = $(window),
        winWidth = win.width(),
        winHeight = win.height(),
        UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL = 100,
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
                mainOffset : POPUP_MAIN_OFFSET,
                content : 'content'
            });
        popupDomElem = popup.domElem;
    });

    afterEach(function() {
        BEMDOM.destruct(popupParentDomElem);
    });

    describe('setTarget', function() {
        it('should throw "Error" if no target set', function() {
            popup.setMod.bind(popup, 'visible').should.to.throw(Error);
        });

        it('should consume x and y coordinates as targets', function() {
            var coords = {
                top : 10,
                left : 10
            };

            popup
                .setTarget(coords.top, coords.left)
                .setMod('visible');

            var popupOffset = popupDomElem.offset();
            popupOffset.top.should.be.equal(coords.top + popup.params.mainOffset);
            popupOffset.left.should.be.equal(coords.left);

            BEMDOM.destruct(popupDomElem);
        });

        it('should consume DOM elem as a target', function() {
            popup
                .setTarget(popupOwnerDomElem)
                .setMod('visible');

            var ownerOffset = popupOwnerDomElem.offset(),
                popupOffset = popupDomElem.offset();

            popupOffset.top.should.be.equal(
                ownerOffset.top + popupOwnerDomElem.outerHeight() + popup.params.mainOffset,
                'invalid top');
            popupOffset.left.should.be.equal(
                ownerOffset.left,
                'invalid left');
        });
    });

    describe('attachment to body', function() {
        it('should be attached to body on first opening', function() {
            popup.domElem.parent()[0].should.be.eql(popupParentDomElem[0], 'misplaced on init');
            popup
                .setTarget(0, 0)
                .setMod('visible');
            popup.domElem.parent()[0].should.be.eql($('body')[0], 'misplaced on visible');

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
                        .setTarget(data[0], data[1])
                        .setMod('visible')
                        .getMod('direction')
                            .should.be.equal(data[2]);

                    BEMDOM.destruct(popupDomElem);
                });
            });
        });

        describe('relative to owner', function() {
            beforeEach(function() {
                popupOwnerDomElem.css({
                    position : 'absolute',
                    width : 1,
                    height : 1,
                    display : 'block',
                    overflow : 'hidden'
                });
            });

            variants.forEach(function(data) {
                it('should be opened in "' + data[2] + '" direction', function() {
                    popupOwnerDomElem.css({ left : data[0], top : data[1] });
                    popup
                        .setTarget(popupOwnerDomElem)
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

            popupParentDomElem.height(winHeight + 2 * popupOwnerDomElem.height());

            popup
                .setTarget(popupOwnerDomElem)
                .setMod('visible');

            popupDomElem.css('display').should.not.be.equal('none');

            win.scrollTop(popupOwnerDomElem.offset().top + popupOwnerDomElem.height());

            setTimeout(function() {
                popupDomElem.css('display').should.not.be.equal('none');
                done();
            }, timeout);
        });

        it('should be hidden in nested scrolled container', function(done) {
            var timeout = UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL + UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL / 2,
                ownerHeight = popupOwnerDomElem.height();

            popupParentDomElem
                .append('<div style="height: ' + (4 * ownerHeight) + 'px"/>')
                .css({
                    overflow : 'auto',
                    marginTop : 2 * ownerHeight,
                    height : 2 * ownerHeight
                });

            popup
                .setTarget(popupOwnerDomElem)
                .setMod('visible');

            popupDomElem.css('display').should.not.be.equal('none', 'wrong display on visible owner');

            popupParentDomElem.scrollTop(3 * ownerHeight);

            setTimeout(function() {
                popupDomElem.css('display').should.be.equal('none', 'wrong display on hidden owner');
                popupParentDomElem.scrollTop(0);
                setTimeout(function() {
                    popupDomElem.css('display').should.not.be.equal(
                        'none',
                        'wrong display on restore owner visibility');
                    popupParentDomElem.scrollTop(0);
                    done();
                }, timeout);
            }, timeout);
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
                .setTarget(winWidth - size - 1, winHeight - size - popup.params.mainOffset)
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

    describe('nested popups', function() {
        var childPopup, childOwnerDomElem;
        beforeEach(function() {
            popup.setTarget(popupOwnerDomElem);
            childOwnerDomElem = $(BEMHTML.apply({ tag : 'span', content : 'child owner' }))
                .appendTo(popupDomElem);
            childPopup = buildPopup(
                popupDomElem,
                { block : 'popup', content : 'child content' })
                    .setTarget(childOwnerDomElem);
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
            popup.setTarget(popupOwnerDomElem);
        });

        it('should be z-indexed in open order by default', function() {
            var popup2 = buildPopup(
                popupParentDomElem,
                { block : 'popup', content : 'content 2' })
                    .setTarget(popupOwnerDomElem);

            popup2.setMod('visible');
            popup.setMod('visible');

            Number(popup.domElem.css('z-index'))
                .should.be.gt(Number(popup2.domElem.css('z-index')));
        });

        it('should properly use zIndexGroupLevel param', function() {
            var popup2 = buildPopup(
                popupParentDomElem,
                { block : 'popup', zIndexGroupLevel : 1, content : 'content 2' })
                    .setTarget(popupOwnerDomElem);

            popup2.setMod('visible');
            popup.setMod('visible');

            Number(popup.domElem.css('z-index'))
                .should.be.lt(Number(popup2.domElem.css('z-index')));
        });

        it('should properly use z-index-group blocks which may be in owner parents', function() {
            var zIndexGroup1 = $(BEMHTML.apply({
                        block : 'z-index-group',
                        mods : { level : 1 },
                        content : { tag : 'span', content : 'owner 2' }
                    })).appendTo(popupParentDomElem),
                popup2 = buildPopup(
                    zIndexGroup1,
                    { block : 'popup', content : 'content 2' })
                        .setTarget(zIndexGroup1.find('span:first')),
                zIndexGroup2 = $(BEMHTML.apply({
                        block : 'z-index-group',
                        mods : { level : 1 },
                        content : { tag : 'span', content : 'owner 3' }
                    })).appendTo(zIndexGroup1),
                popup3 = buildPopup(
                    zIndexGroup2,
                    { block : 'popup', content : 'content 3' })
                        .setTarget(zIndexGroup2.find('span:first'));

            popup3.setMod('visible');
            popup2.setMod('visible');
            popup.setMod('visible');

            Number(popup.domElem.css('z-index'))
                .should.be.lt(Number(popup2.domElem.css('z-index')));

            Number(popup2.domElem.css('z-index'))
                .should.be.lt(Number(popup3.domElem.css('z-index')));
        });
    });

    describe('destructing', function() {
        it('should be hidden on destruct', function() {
            popup
                .setTarget(popupOwnerDomElem)
                .setMod('visible');

            BEMDOM.destruct(popupDomElem);

            popup.hasMod('visible').should.be.false;
        });

        it('should be destructed on owner destruct', function() {
            popup
                .setTarget(popupOwnerDomElem)
                .setMod('visible');

            BEMDOM.destruct(popupOwnerDomElem);

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
