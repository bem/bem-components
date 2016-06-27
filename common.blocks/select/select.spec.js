modules.define(
    'spec',
    ['select', 'i-bem-dom', 'jquery', 'sinon', 'chai', 'button', 'popup', 'menu', 'keyboard__codes', 'next-tick', 'BEMHTML'],
    function(provide, Select, bemDom, $, sinon, chai, Button, Popup, Menu, keyCodes, nextTick, BEMHTML) {

describe('select', function() {
    var select, button, popup, menu;

    beforeEach(function() {
        select = buildSelect({
            block : 'select',
            mods : { mode : 'custom' },
            name : 'select1',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        });
        button = select.findChildBlock(Button);
        popup = select.findChildBlock(Popup);
        menu = select.findChildBlock(Menu);
    });

    afterEach(function() {
        bemDom.destruct(select.domElem);
    });

    describe('show/hide', function() {
        it('should be focused on open', function() {
            select.hasMod('focused').should.be.false;
            select
                .setMod('opened')
                .hasMod('focused')
                    .should.be.true;
        });

        it('should show/hide popup on open/close', function() {
            popup.hasMod('visible').should.be.false;
            select.setMod('opened');
            popup.hasMod('visible').should.be.true;
            select.delMod('opened');
            popup.hasMod('visible').should.be.false;
        });

        it('should focus/blur menu on open/close', function() {
            menu.hasMod('focused').should.be.false;
            select.setMod('opened');
            menu.hasMod('focused').should.be.true;
            select.delMod('opened');
            menu.hasMod('focused').should.be.false;
        });

        it('should hover first item on open', function() {
            select.setMod('opened');
            menu.getItems().get(0).hasMod('hovered').should.be.true;
        });

        it('should hover first checked item on open', function() {
            var item = menu.getItems().get(1).setMod('checked');
            select.setMod('opened');
            item.hasMod('hovered').should.be.true;
        });

        it('should be closed after blur', function() {
            select
                .setMod('opened')
                .delMod('focused')
                .hasMod('opened')
                    .should.be.false;
        });

        it('should not be closed after popup click', function() {
            select.setMod('opened');
            popup.domElem.click();

            select.hasMod('opened').should.be.true;
        });

        it('should toggle popup after click on button', function() {
            button.domElem
                .trigger('pointerpress')
                .trigger(createPointerrelease())
                .trigger('pointerclick');
            select.hasMod('opened').should.be.true;

            button.domElem
                .trigger('pointerpress')
                .trigger(createPointerrelease())
                .trigger('pointerclick');
            select.hasMod('opened').should.be.false;
        });

        it('should not be opened on pointercancel on button', function() {
            button.domElem
                .trigger('pointerpress')
                .trigger(createPointerrelease('pointercancel'));
            select.hasMod('opened').should.be.false;
        });
    });

    describe('focus/blur', function() {
        it('should synchronize focused state to button', function() {
            button.hasMod('focused').should.be.false;

            select.setMod('focused');
            button.hasMod('focused').should.be.true;

            select.delMod('focused');
            button.hasMod('focused').should.be.false;
        });

        it('should synchronize focused state from button', function() {
            button.setMod('focused');
            select.hasMod('focused').should.be.true;

            button.delMod('focused');
            select.hasMod('focused').should.be.false;
        });

        it('should keep focused and focused-hard state on popup click', function() {
            select
                .setMod('focused')
                .setMod('opened');

            // try to emulate some browsers behaviour where blur can't be prevented
            popup.domElem.trigger('pointerpress');
            button.domElem.blur();
            popup.domElem.trigger(createPointerrelease());

            button.hasMod('focused').should.be.true;
            button.hasMod('focused-hard').should.be.true;
        });
    });

    describe('enable/disable', function() {
        it('should enable/disable button and menu according to self "disabled" state', function() {
            select.setMod('disabled');
            button.hasMod('disabled').should.be.true;
            menu.hasMod('disabled').should.be.true;

            select.delMod('disabled');
            button.hasMod('disabled').should.be.false;
            menu.hasMod('disabled').should.be.false;
        });

        it('should not open if disabled', function() {
            select
                .setMod('disabled')
                .setMod('opened')
                .hasMod('opened')
                    .should.be.false;
        });

        it('should became closed after disabled', function() {
            select
                .setMod('opened')
                .setMod('disabled')
                .hasMod('opened')
                    .should.be.false;
        });
    });

    describe('keyboard', function() {
        it('should be opened on "down" press if focused', function() {
            var buttonElem = select._elem('button').domElem;
            pressDownKey(buttonElem);
            select.hasMod('opened').should.be.false;
            select.setMod('focused');
            pressDownKey(buttonElem);
            select.hasMod('opened').should.be.true;
        });

        it('should be opened on "up" press if focused', function() {
            var buttonElem = select._elem('button').domElem;
            pressUpKey(buttonElem);
            select.hasMod('opened').should.be.false;
            select.setMod('focused');
            pressUpKey(buttonElem);
            select.hasMod('opened').should.be.true;
        });

        it('should be closed on "esc" press', function() {
            select.setMod('opened');
            pressEscKey(select._elem('button').domElem);
            select.hasMod('opened').should.be.false;
        });
    });

    describe('events', function() {
        it('should emit "change" on menu "change"', function() {
            var spy = sinon.spy();

            select._events().on('change', spy);
            menu._emit('change');

            spy.should.have.been.called;
        });
    });

    describe('getName()', function() {
        it('should return right name', function() {
            select.getName().should.be.equal('select1');
        });
    });

    describe('a11y', function() {
        it('should have proper aria-attributes', function() {
            var buttonElem = select._elem('button').domElem;

            function getHoveredOptionId() {
                return menu.findChildElem({
                    elem : 'item',
                    modName : 'hovered',
                    modVal : true
                }).domElem.attr('id');
            }

            select.setMod('focused');
            pressDownKey(buttonElem);
            buttonElem.attr('aria-activedescendant').should.be.equal(getHoveredOptionId());
            pressUpKey(buttonElem);
            buttonElem.attr('aria-activedescendant').should.be.equal(getHoveredOptionId());
            pressEscKey(buttonElem);
            chai.expect(buttonElem.attr('aria-activedescendant')).to.be.undefined;
        });
    });
});

provide();

function createPointerrelease(originalEventName) {
    return $.Event('pointerrelease', { originalEvent : new $.Event(originalEventName || 'pointerup') });
}

function doKeyDown(code, elem) {
    elem.trigger($.Event('keydown', { keyCode : code }));
}

function pressDownKey(elem) {
    doKeyDown(keyCodes.DOWN, elem);
}

function pressUpKey(elem) {
    doKeyDown(keyCodes.UP, elem);
}

function pressEscKey(elem) {
    doKeyDown(keyCodes.ESC, elem);
}

function buildSelect(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Select);
}

});
