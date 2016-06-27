modules.define(
    'spec',
    ['select', 'i-bem-dom', 'menu', 'button', 'jquery', 'BEMHTML', 'chai'],
    function(provide, Select, bemDom, Menu, Button, $, BEMHTML, chai) {

describe('select_mode_check', function() {
    var select, menu, button;

    beforeEach(function() {
        select = buildSelect({
            block : 'select',
            mods : { mode : 'check' },
            name : 'select1',
            text : 'text',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checkedText : 'sec' },
                { val : 3, text : 'second' }
            ],
            val : [2, 3]
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
            select.getVal().should.be.eql([2, 3]);
        });

        it('should return initial value in case of none checked', function() {
            var nonCheckedSelect = buildSelect({
                block : 'select',
                mods : { mode : 'check' },
                name : 'select1',
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' }
                ]
            });
            nonCheckedSelect.getVal().should.be.eql([]);
            bemDom.destruct(nonCheckedSelect.domElem);
        });

        it('should synchronize value with menu (select -> menu)', function() {
            select.setVal([1, 2]);
            menu.getVal().should.be.eql([1, 2]);
        });

        it('should synchronize value with menu (select <- menu)', function() {
            menu.setVal([1, 2]);
            select.getVal().should.be.eql([1, 2]);
        });

        it('should update button\'s text according to checked values', function() {
            select.setVal([1, 2]);
            button.getText().should.be.equal('first, sec');

            select.setVal([2]);
            button.getText().should.be.equal('second');

            select.setVal([]);
            button.getText().should.be.equal('text');
        });

        it('should update control\'s value according to checked values', function() {
            select.setVal([1, 2]);
            select.findChildElems('control').map(function(control) {
                return control.domElem.val();
            }).should.be.eql(['1', '2']);
        });

        it('should add/remove control according to value', function() {
            select.setVal([]);
            select.findChildElems('control').size().should.be.equal(0);

            select.setVal([1, 2]);
            select.findChildElems('control').size().should.be.equal(2);
        });
    });

    describe('keyboard', function() {
        it('should select "first" item by pressing on "f"', function() {
            select.setMod('focused');
            doKeyPress('f', select._elem('button').domElem);
            select.getVal().should.be.eql([1]);
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
