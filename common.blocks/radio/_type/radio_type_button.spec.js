modules.define(
    'spec',
    ['radio', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, Radio, BEMDOM, $, dom, BEMHTML) {

describe('radio_type_button', function() {
    var radioOption;

    function buildRadio() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'radio',
                mods : { type : 'button' },
                name : 'name',
                val : 'val',
                label : 'label'
            }))
                .appendTo('body'))
                .bem('radio');
    }

    beforeEach(function() {
        radioOption = buildRadio();
    });

    afterEach(function() {
        BEMDOM.destruct(radioOption.domElem);
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

    describe('focused', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            radioOption.setMod('focused');
            radioOption.findBlockOn('button').hasMod('focused').should.be.true;

            radioOption.delMod('focused');
            radioOption.findBlockOn('button').hasMod('focused').should.be.false;
        });
    });
});

provide();

});
