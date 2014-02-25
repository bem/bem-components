modules.define(
    'spec',
    ['popup', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Popup, BEMDOM, $, BEMHTML) {

describe('popup', function() {
    var popup, popupDomElem, popupParentDomElem, popupOwnerDomElem,
        win = $(window),
        winWidth = win.width(),
        winHeight = win.height(),
        CHECK_OWNER_THROTTLING_INTERVAL = 100;

    beforeEach(function() {
        popupParentDomElem = $(BEMHTML.apply({ tag : 'div' })).appendTo('body');
        popupOwnerDomElem = $(BEMHTML.apply({
            tag : 'span',
            content : 'owner'
        })).appendTo(popupParentDomElem);
        popup = buildPopup(
            popupParentDomElem,
            { block : 'popup', content : 'content' });
        popupDomElem = popup.domElem;
    });

    afterEach(function() {
        BEMDOM.destruct(popupDomElem);
        popupParentDomElem.remove();
        popupOwnerDomElem.remove();
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
            popupOffset.top.should.be.equal(coords.top + popup.params.offsets[0]);
            popupOffset.left.should.be.equal(coords.left);
        });

        it('should consume DOM elem as a target', function() {
            popup
                .setTarget(popupOwnerDomElem)
                .setMod('visible');

            var ownerOffset = popupOwnerDomElem.offset(),
                popupOffset = popupDomElem.offset();

            popupOffset.top.should.be.equal(
                ownerOffset.top + popupOwnerDomElem.outerHeight() + popup.params.offsets[0],
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
        });
    });

    describe('directions', function() {
        var margin = 10,
            popupOffset = 5,
            popupWidth = winWidth - popupOffset - margin,
            popupHeight = winHeight - popupOffset - margin,
            variants = [
                [margin, margin, 'bottom-left'],
                [winWidth - popupWidth / 2, margin, 'bottom-center'],
                [winWidth - margin, margin, 'bottom-right'],
                [margin, winHeight - margin, 'top-left'],
                [winWidth - popupWidth / 2, winHeight - margin, 'top-center'],
                [winWidth - margin, winHeight - margin, 'top-right'],
                [margin, winHeight - popupHeight + popupOffset / 2, 'right-top'],
                [margin, winHeight - popupHeight / 2, 'right-center'],
                [margin, winHeight - margin - popupOffset * 1.5, 'right-bottom'],
                [winWidth - margin, winHeight - popupHeight, 'left-top'],
                [winWidth - margin, winHeight - popupHeight / 2, 'left-center'],
                [winWidth - margin, winHeight - margin - popupOffset * 1.5, 'left-bottom']
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
        it('should be shown/hidden on owner parents scroll', function(done) {
            var timeout = CHECK_OWNER_THROTTLING_INTERVAL + CHECK_OWNER_THROTTLING_INTERVAL / 2;

            popupParentDomElem.height(winHeight + 2 * popupOwnerDomElem.height());

            popup
                .setTarget(popupOwnerDomElem)
                .setMod('visible');

            popupDomElem.css('display').should.not.be.equal('none', 'wrong display on visible owner');

            win.scrollTop(popupOwnerDomElem.offset().top + popupOwnerDomElem.height());

            setTimeout(function() {
                popupDomElem.css('display').should.be.equal('none', 'wrong display on hidden owner');
                win.scrollTop(popupOwnerDomElem.offset().top);
                setTimeout(function() {
                    popupDomElem.css('display').should.not.be.equal(
                        'none',
                        'wrong display on restore owner visibility');
                    win.scrollTop(0);
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
                .setTarget(winWidth - size - 1, winHeight - size - popup.params.offsets[0])
                .setMod('visible');

            popup.getMod('direction').should.be.equal('bottom-left');

            popup.setContent(
                BEMHTML.apply({
                    tag : 'div',
                    attrs : { style : 'width: ' + (size * 2) + 'px; height: ' + (size * 2) + 'px;'
                }
            }));

            popup.getMod('direction').should.be.equal('left-center');
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
