modules.define(
    'spec',
    ['radio', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, Radio, BEMDOM, $, dom, BEMHTML) {

describe('radio_type_button', function() {
    var radio;

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
        radio = buildRadio();
    });

    afterEach(function() {
        BEMDOM.destruct(radio.domElem);
    });

    describe('checked', function() {
        it('should set/unset "checked" mod for button according to self', function() {
            radio.setMod('checked');
            radio.findBlockInside('button').hasMod('checked').should.be.true;

            radio.delMod('checked');
            radio.findBlockInside('button').hasMod('checked').should.be.false;
        });

        it('should set/unset property "checked"', function() {
            radio.elem('control').prop('checked').should.be.false;

            radio.setMod('checked');
            radio.elem('control').prop('checked').should.be.true;

            radio.delMod('checked');
            radio.elem('control').prop('checked').should.be.false;

            radio.setMod('checked');
            radio.elem('control').prop('checked').should.be.true;
        });
    });

    describe('disabled', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            radio.setMod('disabled');
            radio.findBlockInside('button').hasMod('disabled').should.be.true;

            radio.delMod('disabled');
            radio.findBlockInside('button').hasMod('disabled').should.be.false;
        });
    });

    describe('focused', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            radio.setMod('focused');
            radio.findBlockInside('button').hasMod('focused').should.be.true;

            radio.delMod('focused');
            radio.findBlockInside('button').hasMod('focused').should.be.false;
        });
    });
});

provide();

});
