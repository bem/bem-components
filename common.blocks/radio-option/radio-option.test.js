modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, BEMDOM, $, dom, BEMHTML, sinon) {

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

    describe('value', function() {
        it('should return value of "control" elem', function() {
            radioOption.getVal().should.be.equal('val');
        });
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

        it('should trigger "check" event while set "checked" mod', function() {
            var spy = sinon.spy();

            radioOption
                .on('check', spy)
                .setMod('checked');

            spy.should.have.been.calledOnce;
        });
    });

    describe('disabled', function() {
        it('should properly update "control" elem "disabled" attr', function() {
            radioOption
                .setMod('disabled')
                .elem('control').prop('disabled').should.be.true;

            radioOption
                .delMod('disabled')
                .elem('control').prop('disabled').should.be.false;
        });
    });

    describe('focus/blur', function() {
        it('should have "focused" mod on focus', function() {
            radioOption.elem('control').focus();
            radioOption.hasMod('focused').should.be.true;
        });

        it('should not have "focused" mod on blur', function() {
            radioOption.elem('control')
                .focus()
                .blur();
            radioOption.hasMod('focused').should.be.false;
        });

        it('should be focused after "focused" mod set', function() {
            radioOption.setMod('focused');
            dom.containsFocus(radioOption.elem('control')).should.be.true;
        });

        it('should not set "focused" mod if it has "disabled" mod', function() {
            radioOption
                .setMod('disabled')
                .setMod('focused');
            radioOption.hasMod('focused').should.be.false;
        });

        it('should be blured after "focused" mod unset', function() {
            radioOption
                .setMod('focused')
                .delMod('focused');
            dom.containsFocus(radioOption.elem('control')).should.be.false;
        });

        it('should emit "focus" event after focused', function() {
            var spy = sinon.spy();

            radioOption
                .on('focus', spy)
                .setMod('focused');

            spy.should.have.been.calledOnce;
        });

        it('should emit "blur" event after blured', function() {
            var spy = sinon.spy();

            radioOption
                .on('blur', spy)
                .setMod('focused')
                .delMod('focused');

            spy.should.have.been.calledOnce;
        });
    });
});

provide();

});
