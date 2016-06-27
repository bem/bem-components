modules.define(
    'spec',
    ['radio-group', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, RadioGroup, bemDom, $, BEMHTML, chai) {

var expect = chai.expect;

describe('radio-group_mode-radio-check', function() {
    var radioGroup;

    function buildRadioGroup(bemjson) {
        return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
            .bem(RadioGroup);
    }

    beforeEach(function() {
        radioGroup = buildRadioGroup({
            block : 'radio-group',
            mods : { type : 'button', mode : 'radio-check' },
            name : 'name',
            val : 'val2',
            options : [
                { val : 'val1', label : 'label1' },
                { val : 'val2', label : 'label2' }
            ]
        });
    });

    afterEach(function() {
        bemDom.destruct(radioGroup.domElem);
    });

    describe('value', function() {
        it('should allow to unset value', function() {
            radioGroup.getRadios().get(1).delMod('checked');
            expect(radioGroup.getVal()).to.be.undefined;
        });
    });
});

provide();

});
