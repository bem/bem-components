modules.define(
    'spec',
    ['checkbox', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, Checkbox, BEMDOM, $, dom, BEMHTML, sinon) {

describe('checkbox', function() {
    var checkbox;

    function buildCheckbox() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'checkbox',
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

    describe('value', function() {
        it('should return value of "control" elem', function() {
            checkbox.getVal().should.be.equal('val');
        });
    });

    describe('checked', function() {
        it('should properly update "control" elem "checked" attr', function() {
            checkbox
                .setMod('checked')
                .elem('control').prop('checked').should.be.true;

            checkbox
                .delMod('checked')
                .elem('control').prop('checked').should.be.false;
        });

        it('should switch "checked" mod on "change" event', function() {
            checkbox.elem('control')
                .prop('checked', true)
                .trigger('change');
            checkbox.hasMod('checked').should.be.true;

            checkbox.elem('control')
                .prop('checked', false)
                .trigger('change');
            checkbox.hasMod('checked').should.be.false;
        });

        it('should trigger "change" event while set "checked" mod', function() {
            var spy = sinon.spy();

            checkbox
                .on('change', spy)
                .setMod('checked');

            spy.should.have.been.calledOnce;
        });
    });

    describe('disabled', function() {
        it('should properly update "control" elem "disabled" attr', function() {
            checkbox
                .setMod('disabled')
                .elem('control').prop('disabled').should.be.true;

            checkbox
                .delMod('disabled')
                .elem('control').prop('disabled').should.be.false;
        });
    });

    describe('focus/blur', function() {
        it('should have "focused" mod on focus', function() {
            checkbox.elem('control').focus();
            checkbox.hasMod('focused').should.be.true;
        });

        it('should not have "focused" mod on blur', function() {
            checkbox.elem('control')
                .focus()
                .blur();
            checkbox.hasMod('focused').should.be.false;
        });

        it('should be focused after "focused" mod set', function() {
            checkbox.setMod('focused');
            dom.containsFocus(checkbox.elem('control')).should.be.true;
        });

        it('should not set "focused" mod if it has "disabled" mod', function() {
            checkbox
                .setMod('disabled')
                .setMod('focused');
            checkbox.hasMod('focused').should.be.false;
        });

        it('should be blured after "focused" mod unset', function() {
            checkbox
                .setMod('focused')
                .delMod('focused');
            dom.containsFocus(checkbox.elem('control')).should.be.false;
        });
    });
});

provide();

});
