modules.define(
    'spec',
    ['menu', 'i-bem__dom', 'jquery', 'sinon', 'chai', 'keyboard__codes', 'BEMHTML'],
    function(provide, Menu, BEMDOM, $, sinon, chai, keyCodes, BEMHTML) {

var expect = chai.expect;

describe('menu', function() {
    var menu, menuItems;

    beforeEach(function() {
        menu = buildMenu({
            block : 'menu',
            content : [
                {
                    block : 'menu-item',
                    content : 'item 1'
                },
                {
                    block : 'menu-item',
                    content : 'item 2'
                },
                {
                    block : 'menu-item',
                    mods : { disabled : true },
                    content : 'item 3'
                },
                {
                    block : 'menu-item',
                    content : 'item 4'
                }
            ]
        });
        menuItems = menu.findBlocksInside('menu-item');
    });

    afterEach(function() {
        BEMDOM.destruct(menu.domElem);
    });

    describe('disable', function() {
        it('should remove "tabindex" attribute on disable', function() {
            var control = menu.elem('control');
            control.attr('tabindex').should.be.equal('0');

            menu.setMod('disabled');
            expect(control.attr('tabindex')).to.be.undefined;

            menu.delMod('disabled');
            control.attr('tabindex').should.be.equal('0');
        });

        it('should pass disabled mod to menu items', function() {
            menu.setMod('disabled');
            menuItems.forEach(function(menuItem) {
                menuItem.hasMod('disabled').should.be.true;
            });
            menu.delMod('disabled');
            menuItems.forEach(function(menuItem) {
                menuItem.hasMod('disabled').should.be.false;
            });
        });
    });

    describe('hover on items', function() {
        it('should unhover previous hovered item', function() {
            menuItems[0].setMod('hovered');
            menuItems[1].setMod('hovered');
            menuItems[0].hasMod('hovered').should.be.false;
        });

        it('should react on up/down keys when focused', function() {
            pressDownKey();
            menuItems[0].hasMod('hovered').should.be.false;

            menu.domElem.focus();
            pressDownKey();
            menuItems[0].hasMod('hovered').should.be.true;
        });

        it('should properly cycle through items by keyboard', function() {
            menu.domElem.focus();
            pressDownKey();
            menuItems[0].hasMod('hovered').should.be.true;
            pressDownKey();
            menuItems[1].hasMod('hovered').should.be.true;
            pressDownKey();
            menuItems[3].hasMod('hovered').should.be.true; // skip disabled
            pressDownKey();
            menuItems[0].hasMod('hovered').should.be.true; // cycle down
            pressUpKey();
            menuItems[3].hasMod('hovered').should.be.true; // cycle back (up)
        });

    });

    describe('events', function() {
        it('should emit "item-click" event on item click', function() {
            var spy = sinon.spy();
            menu.on('item-click', spy);
            menuItems[1].emit('click', { source : 'pointer' });
            spy.should.have.been.called;
            spy.args[0][1].item.should.be.equal(menuItems[1]);
            spy.args[0][1].source.should.be.equal('pointer');
        });
    });

    describe('setContent()', function() {
        it('should update menu content', function() {
            menu
                .setContent('content')
                .domElem.html().should.be.equal('content');
        });
    });
});

provide();

function doKeyDown(code) {
    $(document).trigger($.Event('keydown', { keyCode : code }));
}

function pressDownKey() {
    doKeyDown(keyCodes.DOWN);
}

function pressUpKey() {
    doKeyDown(keyCodes.UP);
}

function buildMenu(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('menu');
}

});
