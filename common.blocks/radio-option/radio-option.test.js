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

        it('should set "checked" mod on pointerclick', function() {
            radioOption.domElem.trigger('pointerclick');
            radioOption.hasMod('checked').should.be.true;
        });

        it('should not set "checked" mod on pointerclick if disabled', function() {
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
});

provide();

});
