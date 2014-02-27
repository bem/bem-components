modules.define(
    'spec',
    ['menu', 'i-bem__dom', 'jquery', 'dom', 'sinon', 'BEMHTML'],
    function(provide, Menu, BEMDOM, $, dom, sinon, BEMHTML) {

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

    describe('focus', function() {
        it('should mirror focus state with DOM-focus (which can be appeared before init)', function() {
            var menuDomElem = $(BEMHTML.apply({ block : 'menu' })).appendTo('body').focus(),
                menu = BEMDOM.init(menuDomElem).bem('menu');
            menu.hasMod('focused').should.be.true;
            BEMDOM.destruct(menu.domElem);
        });

        it('should mirror DOM-focus with focus state on init', function() {
            var menu = buildMenu({ block : 'menu', mods : { focused : true } });
            dom.getFocused()[0].should.be.equal(menu.domElem[0]);
            BEMDOM.destruct(menu.domElem);
        });

        it('should synchronize focus state with DOM-focus', function() {
            menu.hasMod('focused').should.be.false;
            menu.domElem.focus();
            menu.hasMod('focused').should.be.true;
            menu.domElem.blur();
            menu.hasMod('focused').should.be.false;
        });

        it('should synchronize DOM-focus with focus state', function() {
            menu.hasMod('focused').should.be.false;
            menu.setMod('focused');
            dom.getFocused()[0].should.be.equal(menu.domElem[0]);
            menu.delMod('focused');
            dom.getFocused()[0].should.not.be.equal(menu.domElem[0]);
        });
    });

    describe('events', function() {
        it('should emit event on item click', function() {
            var spy = sinon.spy();
            menu.on('item-click', spy);
            menuItems[1].emit('click');
            spy.should.have.been.called;
            spy.args[0][1].should.be.equal(menuItems[1]);
        });
    });
});

provide();

function doKeyDown(code) {
    $(document).trigger($.Event('keydown', { keyCode : code }));
}

function pressDownKey() {
    doKeyDown(40);
}

function pressUpKey() {
    doKeyDown(38);
}

function buildMenu(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('menu');
}

});
