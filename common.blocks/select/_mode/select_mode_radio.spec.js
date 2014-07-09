modules.define(
    'spec',
    ['select', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Select, BEMDOM, $, BEMHTML) {

describe('select_mode_radio', function() {
    var select, menu, button;

    beforeEach(function() {
        select = buildSelect({
            block : 'select',
            mods : { mode : 'radio' },
            name : 'select1',
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
});

provide();

function buildSelect(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('select');
}

});
