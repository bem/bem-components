modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'chai', 'sinon'],
    function(provide, BEMDOM, $, dom, BEMHTML, chai, sinon) {

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
                { val : 'val2', label : 'label2' },
                { val : 'val3', label : 'label3', disabled : true }
            ],
            val : 'val2'
        });
    });

    afterEach(function() {
        BEMDOM.destruct(radio.domElem);
    });

    describe('options', function() {
        it('should properly enable/disable option', function() {
            radio.elem('control').eq(2).prop('disabled').should.be.true;
            radio.enableOptionByVal('val3');
            radio.elem('control').eq(2).prop('disabled').should.be.false;

            radio.disableOptionByVal('val1');
            radio.elem('control').eq(0).prop('disabled').should.be.true;

            radio.enableOptionByVal('val1');
            radio.elem('control').eq(0).prop('disabled').should.be.false;
        });
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

        it('should have correct initial value if it disabled', function() {
            BEMDOM.destruct(radio.domElem);

            radio = buildRadio({
                block : 'radio',
                name : 'name',
                val : 'val1',
                options : [{ val : 'val1', label : 'label1', disabled : true }]
            });

            expect(radio.getVal()).to.be.undefined;
        });

        it('should properly update value on pointerclick', function() {
            radio.elem('control').eq(0).trigger('pointerclick');
            radio.getVal().should.be.equal('val1');
        });

        it('should properly set allowed value', function() {
            var controls = radio.elem('control'),
                spy = sinon.spy();

            radio
                .on('change', spy)
                .setVal('val1');
            controls.eq(1).prop('checked').should.be.false;
            controls.eq(0).prop('checked').should.be.true;
            radio.getVal().should.be.equal('val1');
            spy.should.have.been.calledOnce;
        });

        it('should not set wrong value', function() {
            var controls = radio.elem('control'),
                spy = sinon.spy();

            radio.setVal('val44');
            controls.eq(1).prop('checked').should.be.true;
            radio.getVal().should.be.equal('val2');
            spy.should.not.have.been.called;
        });

        it('should properly react on enable/disable options', function() {
            var controls = radio.elem('control'),
                spy = sinon.spy();

            radio
                .on('change', spy)
                .setVal('val3');
            controls.eq(1).prop('checked').should.be.false;
            controls.eq(2).prop('checked').should.be.true;
            expect(radio.getVal()).to.be.undefined;
            spy.should.have.been.calledOnce;

            radio.enableOptionByVal('val3');
            radio.getVal().should.be.equal('val3');
            spy.should.have.been.calledTwice;

            radio.disableOptionByVal('val2');
            radio.getVal().should.be.equal('val3');
            spy.should.have.been.calledTwice;

            radio.disableOptionByVal('val3');
            expect(radio.getVal()).to.be.undefined;
            spy.should.have.been.calledThrice;
        });
    });
});

provide();

});