modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'sinon', 'next-tick'],
    function(provide, DOM, $, BEMHTML, sinon, nextTick) {

function getActiveDomNode() {
    return DOM.doc[0].activeElement;
}

describe('input', function() {
    var input;

    beforeEach(function() {
        input = DOM.init(
                $(BEMHTML.apply({
                    block: 'input',
                    content: { elem: 'control' },
                    value: 'bla'
                })))
            .appendTo('body')
            .bem('input');
    });

    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    describe('focus/blur', function() {
        it('should have focused_yes mod on focus', function() {
            input.elem('control').focus();
            input.hasMod('focused', 'yes').should.be.true;
        });

        it('should not have focused_yes mod on blur', function() {
            input.elem('control')
                .focus()
                .blur();
            input.hasMod('focused', 'yes').should.be.false;
        });

        it('should be focused after focused_yes mod set', function() {
            input.setMod('focused', 'yes');
            input.elem('control')[0].should.be.equal(getActiveDomNode());
        });

        it('should be blured after focused_yes mod unset', function() {
            input
                .setMod('focused', 'yes')
                .delMod('focused');
            input.elem('control')[0].should.not.be.equal(getActiveDomNode());
        });

        it('should trigger focus event after focused', function(done) {
            var spy = sinon.spy();

            input
                .on('focus', spy)
                .setMod('focused', 'yes');

            nextTick(function() {
                spy.should.have.been.calledOnce;
                done();
            })
        });

        it('should trigger blur event after blured', function(done) {
            var spy = sinon.spy();

            input
                .on('blur', spy)
                .setMod('focused', 'yes')
                .delMod('focused');

            nextTick(function() {
                spy.should.have.been.calledOnce;
                done();
            })
        });
    });

    describe('val', function() {
        it('should trigger change-event when value changed', function() {
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
