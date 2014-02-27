modules.define(
    'spec',
    ['menu-item', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, MenuItem, BEMDOM, $, BEMHTML) {

describe('menu-item', function() {
    var menuItem;

    beforeEach(function() {
        menuItem = BEMDOM
            .init($(BEMHTML.apply({ block : 'menu-item', content : 'item' })).appendTo('body'))
            .bem('menu-item');
    });

    afterEach(function() {
        BEMDOM.destruct(menuItem.domElem);
    });

    describe('hovered', function() {
        it('should be hovered/unhovered on mouseover/mouseleave', function() {
            menuItem.hasMod('hovered').should.be.false;

            menuItem.domElem.trigger('mouseover');
            menuItem.hasMod('hovered').should.be.true;

            menuItem.domElem.trigger('mouseleave');
            menuItem.hasMod('hovered').should.be.false;
        });

        it('should not set hovered state if disabled', function() {
            menuItem
                .setMod('hovered')
                .setMod('disabled')
                .hasMod('hovered').should.be.false;

            menuItem
                .setMod('hovered')
                .hasMod('hovered').should.be.false;
        });
    });

});

provide();

});
