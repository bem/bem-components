modules.define(
    'spec',
    ['radio-group', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai', 'sinon'],
    function(provide, RadioGroup, BEMDOM, $, BEMHTML, chai, sinon) {

var expect = chai.expect;

describe('radio-group', function() {
    var radioGroup;

    function buildRadioGroup(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
            .bem('radio-group');
    }

    beforeEach(function() {
        radioGroup = buildRadioGroup({
            block : 'radio-group',
            name : 'name',
            options : [
                { val : 'val1', label : 'label1' },
                { val : 'val2', label : 'label2' },
                { val : 'val3', label : 'label3', disabled : true }
            ],
            val : 'val2'
        });
    });

    afterEach(function() {
        BEMDOM.destruct(radioGroup.domElem);
    });

    describe('value', function() {
        it('should have correct initial value', function() {
            radioGroup.getVal().should.be.equal('val2');
        });

        it('should have correct initial undefined value', function() {
            BEMDOM.destruct(radioGroup.domElem);

            radioGroup = buildRadioGroup({
                block : 'radio-group',
                name : 'name',
                options : [{ val : 'val1', label : 'label1' }]
            });

            expect(radioGroup.getVal()).to.be.undefined;
        });

        it('should properly set allowed value', function() {
            var options = radioGroup.getRadios(),
                spy = sinon.spy();

            radioGroup
                .on('change', spy)
                .setVal('val1');
            options[0].hasMod('checked').should.be.true;
            options[1].hasMod('checked').should.be.false;
            radioGroup.getVal().should.be.equal('val1');
            spy.should.have.been.calledOnce;
        });

        it('should not set wrong value', function() {
            radioGroup.setVal('val44');
            radioGroup.getVal().should.be.equal('val2');
        });

        it('should properly unset value', function() {
            radioGroup.setVal(undefined);
            expect(radioGroup.getVal()).to.be.undefined;
            radioGroup.getRadios().forEach(function(option) {
                option.hasMod('checked').should.be.false;
            });
        });

        it('should not change "checked" mod on set wrong value', function() {
            var options = radioGroup.getRadios();

            radioGroup.setVal('val44');
            options[1].hasMod('checked').should.be.true;
        });

        it('should not trigger "change" event on set wrong value', function() {
            var spy = sinon.spy();

            radioGroup
                .on('change', spy)
                .setVal('val44');
            spy.should.not.have.been.called;
        });
    });

    describe('focus/blur', function() {
        it('should focus first enabled radio', function() {
            BEMDOM.destruct(radioGroup.domElem);

            radioGroup = buildRadioGroup({
                block : 'radio-group',
                name : 'name',
                options : [
                    { val : 'val1', label : 'label1', disabled : true },
                    { val : 'val2', label : 'label2' }
                ]
            });

            radioGroup.setMod('focused');
            radioGroup.getRadios()[0].hasMod('focused').should.be.false;
            radioGroup.getRadios()[1].hasMod('focused').should.be.true;
        });

        it('should remove "focused" mod from currently focused radio', function() {
            radioGroup.getRadios()[1].setMod('focused');
            radioGroup.delMod('focused');
            radioGroup.getRadios()[1].hasMod('focused').should.be.false;
        });
    });

    describe('disabled', function() {
        it('should disable all radios in group', function() {
            radioGroup.setMod('disabled');

            var disabled = true;
            radioGroup.getRadios().forEach(function(radio) {
                radio.hasMod('disabled') || (disabled = false);
            });

            disabled.should.be.true;
        });
    });

    describe('getName()', function() {
        it('should return right name', function() {
           radioGroup.getName().should.be.equal('name');
        });
    });
});

provide();

});
