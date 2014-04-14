modules.define(
    'spec',
    ['radio', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'chai', 'sinon'],
    function(provide, Radio, BEMDOM, $, dom, BEMHTML, chai, sinon) {

var expect = chai.expect;

describe('radio', function() {
    var radio;

    function buildRadio(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
            .bem('radio');
    }

    beforeEach(function() {
        radio = buildRadio({
            block : 'radio',
            name : 'name',
            options : [
                { val : 'val1', label : 'label1' },
                { val : 'val2', label : 'label2', checked : true },
                { val : 'val3', label : 'label3', disabled : true }
            ],
            val : 'val2'
        });
    });

    afterEach(function() {
        BEMDOM.destruct(radio.domElem);
    });

    describe('value', function() {
        it('should have correct initial value', function() {
            radio.getVal().should.be.equal('val2');
        });

        it('should have correct initial undefined value', function() {
            BEMDOM.destruct(radio.domElem);

            radio = buildRadio({
                block : 'radio',
                name : 'name',
                options : [{ val : 'val1', label : 'label1' }]
            });

            expect(radio.getVal()).to.be.undefined;
        });

        it('should properly set allowed value', function() {
            var options = radio.getOptions(),
                spy = sinon.spy();

            radio
                .on('change', spy)
                .setVal('val1');
            options[0].hasMod('checked').should.be.true;
            options[1].hasMod('checked').should.be.false;
            radio.getVal().should.be.equal('val1');
            spy.should.have.been.calledOnce;
        });

        it('should not set wrong value', function() {
            var options = radio.getOptions(),
                spy = sinon.spy();

            radio.setVal('val44');
            options[1].hasMod('checked').should.be.true;
            radio.getVal().should.be.equal('val2');
            spy.should.not.have.been.called;
        });
    });

    describe('focus/blur', function() {
        it('should focus first option', function() {
            radio.setMod('focused');
            radio.getOptions()[0].hasMod('focused').should.be.true;
        });

        it('should remove "focused" mod from currently focused option', function() {
            radio.getOptions()[1].setMod('focused');
            radio.delMod('focused');
            radio.getOptions()[1].hasMod('focused').should.be.false;
        });
    });
});

provide();

});
