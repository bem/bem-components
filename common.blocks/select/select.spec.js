modules.define(
    'spec',
    ['select', 'i-bem__dom', 'jquery', 'sinon', 'keyboard__codes', 'next-tick', 'BEMHTML'],
    function(provide, Select, BEMDOM, $, sinon, keyCodes, nextTick, BEMHTML) {

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
        button = select.findBlockInside('button');
        popup = select.findBlockInside('popup');
        menu = select.findBlockInside('menu');
    });

    afterEach(function() {
        BEMDOM.destruct(select.domElem);
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
            menu.getItems()[0].hasMod('hovered').should.be.true;
        });

        it('should hover first checked item on open', function() {
            var item = menu.getItems()[1].setMod('checked');
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
            popup.domElem.trigger('pointerdown');
            button.domElem.blur();
            popup.domElem
                .trigger('pointerup')
                .trigger('pointerclick');

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
            pressDownKey();
            select.hasMod('opened').should.be.false;
            select.setMod('focused');
            pressDownKey();
            select.hasMod('opened').should.be.true;
        });

        it('should be opened on "up" press if focused', function() {
            pressUpKey();
            select.hasMod('opened').should.be.false;
            select.setMod('focused');
            pressUpKey();
            select.hasMod('opened').should.be.true;
        });

        it('should be closed on "esc" press', function() {
            select.setMod('opened');
            pressEscKey();
            select.hasMod('opened').should.be.false;
        });
    });

    describe('events', function() {
        it('should emit "change" on menu "change"', function() {
            var spy = sinon.spy();

            select.on('change', spy);
            menu.emit('change');

            spy.should.have.been.called;
        });
    });

    describe('getName()', function() {
        it('should return right name', function() {
            select.getName().should.be.equal('select1');
        });
    });
});

provide();

function doKeyDown(code) {
    $('body').trigger($.Event('keydown', { keyCode : code }));
}

function pressDownKey() {
    doKeyDown(keyCodes.DOWN);
}

function pressUpKey() {
    doKeyDown(keyCodes.UP);
}

function pressEscKey() {
    doKeyDown(keyCodes.ESC);
}

function buildSelect(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('select');
}

});
