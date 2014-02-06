modules.define(
    'spec',
    ['radio-option', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, RadioOption, BEMDOM, $, dom, BEMHTML) {

describe('radio__option_type_button', function() {
    var radioOption;

    function buildRadioOption() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'radio',
                mods : { type : 'button' },
                name : 'name',
                options : [{
                    val : 'val',
                    label : 'label'
                }]
            }))
                .appendTo('body'))
                .bem('radio');
    }

    beforeEach(function() {
        radioOption = buildRadioOption().elemInstance('option');
    });

    afterEach(function() {
        BEMDOM.destruct(radioOption.block().domElem);
    });

    describe('checked', function() {
        it('should set/unset "checked" mod for button according to self', function() {
            radioOption.setMod('checked');
            radioOption.findBlockOn('button').hasMod('checked').should.be.true;

            radioOption.delMod('checked');
            radioOption.findBlockOn('button').hasMod('checked').should.be.false;
        });
    });

    describe('disabled', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            radioOption.setMod('disabled');
            radioOption.findBlockOn('button').hasMod('disabled').should.be.true;

            radioOption.delMod('disabled');
            radioOption.findBlockOn('button').hasMod('disabled').should.be.false;
        });
    });
});

provide();

});
