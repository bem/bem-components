modules.define(
    'spec',
    ['select', 'i-bem-dom', 'menu', 'button', 'jquery', 'dom', 'chai', 'BEMHTML'],
    function(provide, Select, bemDom, Menu, Button, $, dom, chai, BEMHTML) {

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
        menu = select.findChildBlock(Menu);
        button = select.findChildBlock(Button);
    });

    afterEach(function() {
        bemDom.destruct(select.domElem);
    });

    describe('enable/disable', function() {
        it('should enable/disable control elems according to self "disabled" state', function() {
            select.setMod('disabled');
            select._elem('control').domElem.prop('disabled').should.be.true;
            select._elem('control').domElem.attr('disabled').should.be.equal('disabled');

            select.delMod('disabled');
            select._elem('control').domElem.prop('disabled').should.be.false;
            chai.expect(select._elem('control').domElem.attr('disabled')).to.be.undefined;
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
            bemDom.destruct(nonCheckedSelect.domElem);
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
            var control = select._elem('control').domElem;

            select.setVal(1);
            control.val().should.be.equal('1');
        });

        it('should add/remove control according to value', function() {
            var control = select._elem('control').domElem;

            dom.contains(select.domElem, control).should.be.true;

            select.setVal(undefined);
            dom.contains(select.domElem, control).should.be.false;

            select.setVal(1);
            control = select._elem('control').domElem;
            dom.contains(select.domElem, control).should.be.true;
            select.setVal(2);
            select.findChildElems('control').size().should.equal(1);
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

            nonCheckedSelect.findChildElems('control').size().should.be.equal(0);
            nonCheckedSelect.setVal(1);
            nonCheckedSelect.findChildElems('control').size().should.be.equal(1);

            bemDom.destruct(nonCheckedSelect.domElem);
        });
    });

    describe('keyboard', function() {
        it('should select "first" item by pressing on "f"', function() {
            select.setMod('focused');
            doKeyPress('f', select._elem('button').domElem);
            select.getVal().should.be.eql(1);
        });
    });

    describe('show/hide', function() {
        it('should close popup after click on option', function() {
            select.setMod('opened');
            menu.getItems().get(0).domElem.click();

            select.hasMod('opened').should.be.false;
        });
    });
});

provide();

function doKeyPress(char, elem) {
    elem.trigger($.Event('keypress', { charCode : char.charCodeAt() }));
}

function buildSelect(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Select);
}

});
