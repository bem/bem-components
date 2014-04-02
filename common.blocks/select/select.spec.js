modules.define(
    'spec',
    ['select', 'i-bem__dom', 'jquery', 'sinon', 'keyboard__codes', 'next-tick', 'BEMHTML'],
    function(provide, Select, BEMDOM, $, sinon, keyCodes, nextTick, BEMHTML) {

describe('select', function() {
    var select, button, popup, menu;

    beforeEach(function() {
        select = buildSelect({
            block : 'select',
            mods : { type : 'custom' },
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

        it('should be closed after blur', function(done) {
            select
                .setMod('opened')
                .delMod('focused');

            // NOTE: see nextTick notes in select.js
            nextTick(function() {
                select.hasMod('opened').should.be.false;
                done();
            });
        });

        it('should not be closed after popup click', function(done) {
            select.setMod('opened');
            popup.domElem.click();

            // NOTE: see nextTick notes in select.js
            nextTick(function() {
                select.hasMod('opened').should.be.true;
                done();
            });
        });
    });

    describe('focus/blur', function() {
        it('should synchronize focused state to button', function(done) {
            button.hasMod('focused').should.be.false;

            select.setMod('focused');
            button.hasMod('focused').should.be.true;

            select.delMod('focused');
            // NOTE: see nextTick notes in select.js
            nextTick(function() {
                button.hasMod('focused').should.be.false;
                done();
            });
        });

        it('should synchronize focused state from button', function() {
            button.setMod('focused');
            select.hasMod('focused').should.be.true;

            button.delMod('focused');
            select.hasMod('focused').should.be.false;
        });
    });

    describe('enable/disable', function() {
        it('should enable/disable button, menu, control elems according to self "disabled" state', function() {
            select.setMod('disabled');
            button.hasMod('disabled').should.be.true;
            menu.hasMod('disabled').should.be.true;
            select.elem('control').prop('disabled').should.be.true;

            select.delMod('disabled');
            button.hasMod('disabled').should.be.false;
            menu.hasMod('disabled').should.be.false;
            select.elem('control').prop('disabled').should.be.false;
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
