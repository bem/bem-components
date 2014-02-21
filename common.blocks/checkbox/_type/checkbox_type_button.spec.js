modules.define(
    'spec',
    ['checkbox', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, Checkbox, BEMDOM, $, dom, BEMHTML) {

describe('checkbox_type_button', function() {
    var checkbox;

    function buildCheckbox() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'checkbox',
                mods : { type : 'button' },
                name : 'name',
                val : 'val',
                label : 'label'
            }))
                .appendTo('body'))
                .bem('checkbox');
    }

    beforeEach(function() {
        checkbox = buildCheckbox();
    });

    afterEach(function() {
        BEMDOM.destruct(checkbox.domElem);
    });

    describe('checked', function() {
        it('should set/unset "checked" mod for button according to self', function() {
            checkbox.setMod('checked');
            checkbox.findBlockOn('button').hasMod('checked').should.be.true;

            checkbox.delMod('checked');
            checkbox.findBlockOn('button').hasMod('checked').should.be.false;
        });
    });

    describe('disabled', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            checkbox.setMod('disabled');
            checkbox.findBlockOn('button').hasMod('disabled').should.be.true;

            checkbox.delMod('disabled');
            checkbox.findBlockOn('button').hasMod('disabled').should.be.false;
        });
    });
});

provide();

});
