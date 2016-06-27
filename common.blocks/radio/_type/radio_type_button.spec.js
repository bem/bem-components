modules.define(
    'spec',
    ['radio', 'i-bem-dom', 'jquery', 'dom', 'button', 'BEMHTML'],
    function(provide, Radio, bemDom, $, dom, Button, BEMHTML) {

describe('radio_type_button', function() {
    var radio;

    function buildRadio() {
        return bemDom.init($(BEMHTML.apply({
                block : 'radio',
                mods : { type : 'button' },
                name : 'name',
                val : 'val',
                label : 'label'
            }))
                .appendTo('body'))
                .bem(Radio);
    }

    beforeEach(function() {
        radio = buildRadio();
    });

    afterEach(function() {
        bemDom.destruct(radio.domElem);
    });

    describe('checked', function() {
        it('should set/unset "checked" mod for button according to self', function() {
            radio.setMod('checked');
            radio.findChildBlock(Button).hasMod('checked').should.be.true;

            radio.delMod('checked');
            radio.findChildBlock(Button).hasMod('checked').should.be.false;
        });

        it('should set/unset property "checked"', function() {
            radio._elem('control').domElem.prop('checked').should.be.false;

            radio.setMod('checked');
            radio._elem('control').domElem.prop('checked').should.be.true;

            radio.delMod('checked');
            radio._elem('control').domElem.prop('checked').should.be.false;

            radio.setMod('checked');
            radio._elem('control').domElem.prop('checked').should.be.true;
        });
    });

    describe('disabled', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            radio.setMod('disabled');
            radio.findChildBlock(Button).hasMod('disabled').should.be.true;

            radio.delMod('disabled');
            radio.findChildBlock(Button).hasMod('disabled').should.be.false;
        });
    });

    describe('focused', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            radio.setMod('focused');
            radio.findChildBlock(Button).hasMod('focused').should.be.true;

            radio.delMod('focused');
            radio.findChildBlock(Button).hasMod('focused').should.be.false;
        });
    });
});

provide();

});
