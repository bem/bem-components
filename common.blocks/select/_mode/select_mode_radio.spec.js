modules.define(
    'spec',
    ['select', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, Select, BEMDOM, $, BEMHTML, chai) {

describe('select_mode_radio', function() {
    var select, menu, button;

    beforeEach(function() {
        select = buildSelect({
            block : 'select',
            mods : { mode : 'radio' },
            name : 'select1',
            val : 2,
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        });
        menu = select.findBlockInside('menu');
        button = select.findBlockInside('button');
    });

    afterEach(function() {
        BEMDOM.destruct(select.domElem);
    });

    describe('enable/disable', function() {
        it('should enable/disable control elems according to self "disabled" state', function() {
            select.setMod('disabled');
            select.elem('control').prop('disabled').should.be.true;
            select.elem('control').attr('disabled').should.be.equal('disabled');

            select.delMod('disabled');
            select.elem('control').prop('disabled').should.be.false;
            chai.expect(select.elem('control').attr('disabled')).to.be.undefined;
        });
    });

    describe('value', function() {
        it('should have initial value', function() {
            select.getVal().should.be.equal(2);
        });

        it('should synchronize value with menu', function() {
            menu.setVal(1);
            select.getVal().should.be.equal(1);

            select.setVal(2);
            menu.getVal().should.be.equal(2);
        });

        it('should update button\'s text according to value', function() {
            select.setVal(1);
            button.getText().should.be.equal('first');
        });

        it('should update control\'s value according to value', function() {
            select
                .setVal(1)
                .elem('control').val().should.be.equal('1');
        });
    });

    describe('keyboard', function() {
        it('should select "first" item by pressing on "f"', function() {
            select.setMod('focused');
            doKeyPress('f', select.elem('button'));
            select.getVal().should.be.eql(1);
        });
    });

    describe('show/hide', function() {
        it('should close popup after click on option', function() {
            select.setMod('opened');
            menu.getItems()[0].domElem.click();

            select.hasMod('opened').should.be.false;
        });
    });
});

provide();

function doKeyPress(char, elem) {
    elem.trigger($.Event('keypress', { charCode : char.charCodeAt() }));
}

function buildSelect(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('select');
}

});
