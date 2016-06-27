modules.define(
    'spec',
    ['radio', 'i-bem-dom', 'jquery', 'dom', 'BEMHTML', 'chai'],
    function(provide, Radio, bemDom, $, dom, BEMHTML, chai) {

describe('radio', function() {
    var radioOption;

    function buildRadio() {
        return bemDom.init($(BEMHTML.apply({
                block : 'radio',
                name : 'name',
                val : 'val',
                label : 'label'
            }))
                .appendTo('body'))
                .bem(Radio);
    }

    beforeEach(function() {
        radioOption = buildRadio();
    });

    afterEach(function() {
        bemDom.destruct(radioOption.domElem);
    });

    describe('checked', function() {
        it('should properly update "control" elem "checked" attr', function() {
            radioOption
                .setMod('checked')
                ._elem('control').domElem.prop('checked').should.be.true;
            radioOption._elem('control').domElem.attr('checked').should.be.equal('checked');

            radioOption
                .delMod('checked')
                ._elem('control').domElem.prop('checked').should.be.false;
            chai.expect(radioOption._elem('control').domElem.attr('checked')).to.be.undefined;
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
