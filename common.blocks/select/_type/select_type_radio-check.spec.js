modules.define(
    'spec',
    ['select', 'i-bem__dom', 'jquery', 'dom', 'chai', 'BEMHTML'],
    function(provide, Select, BEMDOM, $, dom, chai, BEMHTML) {

describe('select_type_radio-check', function() {
    var select, menu, button;

    beforeEach(function() {
        select = buildSelect({
            block : 'select',
            mods : { type : 'radio-check' },
            name : 'select1',
            text : 'text',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second', checked : true }
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

            select.delMod('disabled');
            select.elem('control').prop('disabled').should.be.false;
        });
    });

    describe('value', function() {
        it('should return initial value', function() {
            select.getVal().should.be.equal(2);
        });

        it('should return initial value in case of none checked', function() {
            var nonCheckedSelect = buildSelect({
                block : 'select',
                mods : { type : 'radio-check' },
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
                mods : { type : 'radio-check' },
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
});

provide();

function buildSelect(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('select');
}

});
