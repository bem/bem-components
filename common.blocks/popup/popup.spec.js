modules.define(
    'spec',
    ['i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, BEMDOM, $, dom, BEMHTML) {

describe('popup', function() {
    var popup;

    beforeEach(function() {
        popup = buildPopup({ block : 'popup', content : 'content' });
    });

    afterEach(function() {
        BEMDOM.destruct(popup.domElem);
    });

    describe.skip('params', function() {
        // TODO:
    });

    describe.skip('show/hide', function() {
        // TODO:
    });

    describe('setTarget', function() {
        it('should throw "Error" if no target set', function() {
            popup.setMod.bind(popup, 'visible', true).should.to.throw(Error);
        });

        it('should consume x and y coordinates as targets', function() {
            var coords = {
                top : 10,
                left : 10
            };

            popup
                .setTarget(coords.top, coords.left)
                .setMod('visible', true);

            var dimension = getDimensions(popup.domElem[0]);

            dimension.top.should.be.equal(coords.top + 5); // top + default offset[0]
            dimension.left.should.be.equal(coords.left);
        });

        it('should consume DOM elem as a target', function() {
            var owner = $('<div/>').text('my target').appendTo('body');

            popup
                .setTarget(owner)
                .setMod('visible', true);

            var ownerDimension = getDimensions(owner[0]),
                popupDimension = getDimensions(popup.domElem[0]);

            popupDimension
                .top
                .should.be.equal(ownerDimension.top + ownerDimension.height + 5); // top + default offset[0]
            popupDimension
                .left
                .should.be.equal(ownerDimension.left);

            // FIXME: hack
            popup._owner = null;
            owner.remove();
        });
    });

    describe.skip('setContent', function() {
        // TODO:
    });

    describe.skip('redraw', function() {
        // TODO:
    });

});

provide();

function buildPopup(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('popup');
}

function getDimensions(obj) {
    return obj.getBoundingClientRect();
}

});
