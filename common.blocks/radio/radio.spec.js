modules.define(
    'spec',
    ['radio', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'chai'],
    function(provide, Radio, BEMDOM, $, dom, BEMHTML, chai) {

describe('radio', function() {
    var radioOption;

    function buildRadio() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'radio',
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
        it('should properly update "control" elem "checked" attr', function() {
            radioOption
                .setMod('checked')
                .elem('control').prop('checked').should.be.true;
            radioOption.elem('control').attr('checked').should.be.equal('checked');

            radioOption
                .delMod('checked')
                .elem('control').prop('checked').should.be.false;
            chai.expect(radioOption.elem('control').attr('checked')).to.be.undefined;
        });

        it('should set "checked" mod on "change" event', function() {
            radioOption.domElem.trigger('change');
            radioOption.hasMod('checked').should.be.true;
        });

        it('should not set "checked" mod on "change" event if disabled', function() {
            radioOption.setMod('disabled');
            radioOption.domElem.trigger('change');
            radioOption.hasMod('checked').should.be.false;
        });
    });
});

provide();

});
