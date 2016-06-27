modules.define(
    'spec',
    ['menu', 'menu__item', 'i-bem-dom', 'jquery', 'sinon', 'chai', 'keyboard__codes', 'BEMHTML'],
    function(provide, Menu, MenuItem, bemDom, $, sinon, chai, keyCodes, BEMHTML) {

var expect = chai.expect;

describe('menu', function() {
    var menu, menuItems, menu2, menuItems2;

    beforeEach(function() {
        menu = buildMenu({
            block : 'menu',
            content : [
                {
                    elem : 'item',
                    content : 'item 1'
                },
                {
                    elem : 'item',
                    content : 'item 2'
                },
                {
                    elem : 'item',
                    elemMods : { disabled : true },
                    content : 'item 3'
                },
                {
                    elem : 'item',
                    content : 'item 4'
                }
            ]
        });
        menuItems = menu.findChildElems('item');

        menu2 = buildMenu({
            block : 'menu',
            content : [
                {
                    elem : 'item',
                    content : 'first'
                },
                {
                    elem : 'item',
                    content : 'second'
                },
                {
                    elem : 'item',
                    elemMods : { disabled : true },
                    content : 'third'
                },
                {
                    elem : 'item',
                    content : 'four'
                },
                {
                    elem : 'item',
                    content : 'fifth'
                }
            ]
        });

        menuItems2 = menu2.findChildElems('item');
    });

    afterEach(function() {
        bemDom.destruct(menu.domElem);
        bemDom.destruct(menu2.domElem);
    });

    describe('disable', function() {
        it('should remove "tabindex" attribute on disable', function() {
            var control = menu._elem('control').domElem;
            control.attr('tabindex').should.be.equal('0');

            menu.setMod('disabled');
            expect(control.attr('tabindex')).to.be.undefined;

            menu.delMod('disabled');
            control.attr('tabindex').should.be.equal('0');
        });

        it('should restore "tabindex" attribute on enable if was disabled initially', function() {
            var menu = buildMenu({
                    block : 'menu',
                    mods : { disabled : true },
                    content : [
                        {
                            elem : 'item',
                            content : 'item 1'
                        }
                    ]
                }),
                control = menu._elem('control').domElem;

            expect(control.attr('tabindex')).to.be.undefined;
            menu.delMod('disabled');
            control.attr('tabindex').should.be.equal('0');

            bemDom.destruct(menu.domElem);
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

        it('should set/remove "aria-disabled" attribute properly', function() {
            menu
                .setMod('disabled')
                .domElem.attr('aria-disabled').should.be.equal('true');

            menu.delMod('disabled');
            expect(menu.domElem.attr('aria-disabled')).to.be.undefined;
        });
    });

    describe('hover on items', function() {
        it('should unhover previous hovered item', function() {
            menuItems.get(0).setMod('hovered');
            menuItems.get(1).setMod('hovered');
            menuItems.get(0).hasMod('hovered').should.be.false;
        });

        it('should react on up/down keys when focused', function() {
            pressDownKey();
            menuItems.get(0).hasMod('hovered').should.be.false;

            menu.domElem.focus();
            pressDownKey();
            menuItems.get(0).hasMod('hovered').should.be.true;
        });

        it('should properly cycle through items by keyboard', function() {
            menu.domElem.focus();
            pressDownKey();
            menuItems.get(0).hasMod('hovered').should.be.true;
            pressDownKey();
            menuItems.get(1).hasMod('hovered').should.be.true;
            pressDownKey();
            menuItems.get(3).hasMod('hovered').should.be.true; // skip disabled
            pressDownKey();
            menuItems.get(0).hasMod('hovered').should.be.true; // cycle down
            pressUpKey();
            menuItems.get(3).hasMod('hovered').should.be.true; // cycle back (up)
        });

        it('should select a item by pressing on a key', function() {
            var TIMEOUT_KEYBOARD_SEARCH = 1500,
                clock = sinon.useFakeTimers();

            menu2.domElem.focus();

            doKeyPress('S');
            menuItems2.get(1).hasMod('hovered').should.be.true;

            doKeyPress('F');
            menuItems2.get(3).hasMod('hovered').should.be.false;

            clock.tick(TIMEOUT_KEYBOARD_SEARCH + 1);

            doKeyPresses('fif');
            menuItems2.get(4).hasMod('hovered').should.be.true;

            clock.restore();
        });

        it('should select a next item (starting with "f") by pressing on "f"', function() {
            menu2.setMod('focused');

            doKeyPress('F');
            menuItems2.get(0).hasMod('hovered').should.be.true;

            doKeyPress('f');
            menuItems2.get(3).hasMod('hovered').should.be.true;

            doKeyPress('F');
            menuItems2.get(4).hasMod('hovered').should.be.true;

            doKeyPress('f');
            menuItems2.get(0).hasMod('hovered').should.be.true;
        });

        it('should not select a item by pressing a key with meta, ctrl or alt', function() {
            menu2.domElem.focus();

            doKeyPress('i', { metaKey : true });
            menuItems2.get(0).hasMod('hovered').should.be.false;

            doKeyPress('i', { altKey : true });
            menuItems2.get(0).hasMod('hovered').should.be.false;

            doKeyPress('i', { ctrlKey : true });
            menuItems2.get(0).hasMod('hovered').should.be.false;

            doKeyPress(0);
            menuItems2.get(0).hasMod('hovered').should.be.false;

            doKeyPress('f');
            menuItems2.get(0).hasMod('hovered').should.be.true;
        });

        it('should update "aria-activedescendant" attribute properly', function() {
            menu.domElem.focus();
            pressDownKey();
            menu.domElem.attr('aria-activedescendant').should.be.equal(menuItems.get(0).domElem.attr('id'));
            pressDownKey();
            menu.domElem.attr('aria-activedescendant').should.be.equal(menuItems.get(1).domElem.attr('id'));
            pressDownKey();
            menu.domElem.attr('aria-activedescendant').should.be.equal(menuItems.get(3).domElem.attr('id'));
            menu.domElem.blur();
            expect(menu.domElem.attr('aria-activedescendant')).to.be.undefined;
        });

    });

    describe('events', function() {
        it('should emit "item-click" event on item click', function() {
            var spy = sinon.spy();
            menu._events().on('item-click', spy);
            menuItems.get(1)._emit('click', { source : 'pointer' });
            spy.should.have.been.called;
            spy.args[0][1].item.should.be.equal(menuItems.get(1));
            spy.args[0][1].source.should.be.equal('pointer');
        });

        it('should emit "item-hover" event on item hover', function() {
            var spy = sinon.spy();
            menu._events().on('item-hover', spy);
            menuItems.get(1).setMod('hovered', true);
            spy.should.have.been.called;
            spy.args[0][1].item.should.be.equal(menuItems.get(1));
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

function doKeyPress(char, keys) {
    var obj = {
        charCode : typeof char === 'string'? char.charCodeAt() : char
    };

    keys && $.extend(obj, keys);

    $('body').trigger($.Event('keypress', obj));
}

function doKeyPresses(str) {
    Array.prototype.forEach.call(str, doKeyPress);
}

function pressDownKey() {
    doKeyDown(keyCodes.DOWN);
}

function pressUpKey() {
    doKeyDown(keyCodes.UP);
}

function buildMenu(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Menu);
}

});
