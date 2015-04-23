modules.define(
    'spec',
    ['select', 'i-bem__dom', 'jquery', 'dom', 'chai', 'BEMHTML'],
    function(provide, Select, BEMDOM, $, dom, chai, BEMHTML) {

describe('select_mode_radio-check', function() {
    var select, menu, button;

    beforeEach(function() {
        select = buildSelect({
            block : 'select',
            mods : { mode : 'radio-check' },
            name : 'select1',
            text : 'text',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
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
        it('should return initial value', function() {
            select.getVal().should.be.equal(2);
        });

        it('should return initial value in case of none checked', function() {
            var nonCheckedSelect = buildSelect({
                block : 'select',
                mods : { mode : 'radio-check' },
                name : 'select1',
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' }
                ]
            });
            chai.should().not.exist(nonCheckedSelect.getVal());
            BEMDOM.destruct(nonCheckedSelect.domElem);
        });

        it('should synchronize value with menu (select -> menu)', function() {
            select.setVal(1);
            menu.getVal().should.be.equal(1);

            select.setVal(undefined);
            chai.should().not.exist(menu.getVal());
        });

        it('should synchronize value with menu (select <- menu)', function() {
            menu.setVal(1);
            select.getVal().should.be.equal(1);

            menu.setVal(undefined);
            chai.should().not.exist(select.getVal());
        });

        it('should update button\'s text according to checked value', function() {
            select.setVal(1);
            button.getText().should.be.equal('first');

            select.setVal(undefined);
            button.getText().should.be.equal('text');
        });

        it('should update control\'s value according to checked value', function() {
            var control = select.elem('control');

            select.setVal(1);
            control.val().should.be.equal('1');
        });

        it('should add/remove control according to value', function() {
            var control = select.elem('control');

            select.setVal(undefined);
            dom.contains(select.domElem, control).should.be.false;

            select.setVal(1);
            dom.contains(select.domElem, control).should.be.true;
        });

        it('should create control in case of none checked', function() {
            var nonCheckedSelect = buildSelect({
                block : 'select',
                mods : { mode : 'radio-check' },
                name : 'select1',
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' }
                ]
            });

            nonCheckedSelect.elem('control').length.should.be.equal(0);
            nonCheckedSelect.setVal(1);
            nonCheckedSelect.elem('control').length.should.be.equal(1);

            BEMDOM.destruct(nonCheckedSelect.domElem);
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
