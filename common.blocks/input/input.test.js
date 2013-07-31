modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, DOM, $, BEMHTML, sinon) {

function getActiveDomNode() {
    return DOM.doc[0].activeElement;
}

describe('input', function() {
    var input;

    beforeEach(function() {
        input = DOM.init(
                $(BEMHTML.apply({
                    block: 'input',
                    val: 'bla'
                })))
            .appendTo('body')
            .bem('input');
    });

    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    describe('focus/blur', function() {
        it('should have "focused" mod on focus', function() {
            input.elem('control').focus();
            input.hasMod('focused').should.be.true;
        });

        it('should not have "focused" mod on blur', function() {
            input.elem('control')
                .focus()
                .blur();
            input.hasMod('focused').should.be.false;
        });

        it('should be focused after "focused" mod set', function() {
            input.setMod('focused');
            input.elem('control')[0].should.be.equal(getActiveDomNode());
        });

        it('should not set "focused" mod if it has "disabled" mod', function() {
            input
                .setMod('disabled')
                .setMod('focused');
            input.hasMod('focused').should.be.false;
        });

        it('should be blured after "focused" mod unset', function() {
            input
                .setMod('focused')
                .delMod('focused');
            input.elem('control')[0].should.not.be.equal(getActiveDomNode());
        });

        it('should emit focus event after focused', function() {
            var spy = sinon.spy();

            input
                .on('focus', spy)
                .setMod('focused');

            spy.should.have.been.calledOnce;
        });

        it('should emit blur event after blured', function() {
            var spy = sinon.spy();

            input
                .on('blur', spy)
                .setMod('focused')
                .delMod('focused');

            spy.should.have.been.calledOnce;
        });
    });

    describe('val', function() {
        it('should emit "change" event when value changed', function() {
            var spy = sinon.spy();
            input.on('change', spy);

            input.val('bla');
            spy.should.not.have.been.called;

            input.val('blabla');
            spy.should.have.been.calledOnce;
        });

        it('should update value when control value changed', function(done) {
            input.on('change', function(e) {
                e.target.val().should.be.equal('new-value');
                done();
            });

            input.elem('control')
                .val('new-value')
                .trigger('input'); // TODO: разобраться с touch, нихера оно не работает без этого при программной установке
        });
    });
});

provide();

});