modules.define(
    'spec',
    ['checkbox', 'i-bem-dom', 'button', 'jquery', 'dom', 'BEMHTML', 'chai'],
    function(provide, Checkbox, bemDom, Button, $, dom, BEMHTML, chai) {

describe('checkbox_type_button', function() {
    var expect = chai.expect,
        checkbox, button;

    function buildCheckbox() {
        return bemDom.init($(BEMHTML.apply({
                block : 'checkbox',
                mods : { type : 'button' },
                name : 'name',
                val : 'val',
                label : 'label'
            }))
                .appendTo('body'))
                .bem(Checkbox);
    }

    beforeEach(function() {
        checkbox = buildCheckbox();
        button = checkbox.findChildBlock(Button);
    });

    afterEach(function() {
        bemDom.destruct(checkbox.domElem);
    });

    describe('checked', function() {
        it('should set/unset "checked" mod for button according to self', function() {
            checkbox.setMod('checked');
            button.hasMod('checked').should.be.true;

            checkbox.delMod('checked');
            button.hasMod('checked').should.be.false;
        });

        it('should set/unset property properly', function() {
            expect(checkbox._elem('control').domElem[0].checked).to.be.false;

            checkbox.setMod('checked');
            expect(checkbox._elem('control').domElem[0].checked).to.be.true;

            checkbox.delMod('checked');
            expect(checkbox._elem('control').domElem[0].checked).to.be.false;

            checkbox.setMod('checked');
            expect(checkbox._elem('control').domElem[0].checked).to.be.true;
        });

        it('should set/unset aria-attributes properly', function() {
            checkbox.setMod('checked');
            expect(button.domElem.attr('aria-pressed')).to.be.undefined;
            button.domElem.attr('aria-checked').should.be.equal('true');

            checkbox.delMod('checked');
            expect(button.domElem.attr('aria-pressed')).to.be.undefined;
            button.domElem.attr('aria-checked').should.be.equal('false');
        });
    });

    describe('disabled', function() {
        it('should set/unset "disabled" mod for button according to self', function() {
            checkbox.setMod('disabled');
            button.hasMod('disabled').should.be.true;

            checkbox.delMod('disabled');
            button.hasMod('disabled').should.be.false;
        });
    });

    describe('focused', function() {
        it('should set/unset "focused" mod for button according to self', function() {
            checkbox.setMod('focused');
            button.hasMod('focused').should.be.true;

            checkbox.delMod('focused');
            button.hasMod('focused').should.be.false;
        });
    });
});

provide();

});
