modules.define(
    'spec',
    ['radio-option', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, RadioOption, BEMDOM, $, dom, BEMHTML) {

describe('radio-option', function() {
    var radioOption;

    function buildRadioOption() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'radio-option',
                name : 'name',
                val : 'val',
                label : 'label'
            }))
                .appendTo('body'))
                .bem('radio-option');
    }

    beforeEach(function() {
        radioOption = buildRadioOption();
    });

    afterEach(function() {
        BEMDOM.destruct(radioOption.domElem);
    });

    describe('checked', function() {
        it('should properly update "control" elem "checked" attr', function() {
            radioOption
                .setMod('checked')
                .elem('control').prop('checked').should.be.true;

            radioOption
                .delMod('checked')
                .elem('control').prop('checked').should.be.false;
        });

        it('should set "checked" mod on "pointerclick" event', function() {
            radioOption.domElem.trigger('pointerclick');
            radioOption.hasMod('checked').should.be.true;
        });

        it('should not set "checked" mod on "pointerclick" event if disabled', function() {
            radioOption.setMod('disabled');
            radioOption.domElem.trigger('pointerclick');
            radioOption.hasMod('checked').should.be.false;
        });
    });
});

provide();

});
