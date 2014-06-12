modules.define(
    'spec',
    ['input', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Input, BEMDOM, $, BEMHTML, sinon) {

describe('input', function() {
    var input;

    beforeEach(function() {
        input = buildInput({ block : 'input', val : 'bla' });
    });

    afterEach(function() {
        BEMDOM.destruct(input.domElem);
    });

    describe('val', function() {
        it('should return new value when value changed', function() {
            input
                .setVal('blabla')
                .getVal().should.be.equal('blabla');
        });

        it('should update control elem value when value changed', function() {
            input.setVal('blabla');
            input.elem('control').val().should.be.equal('blabla');
        });

        it('should emit "change" event only when value changed', function() {
            var spy = sinon.spy();
            input.on('change', spy);

            input.setVal('bla');
            spy.should.not.have.been.called;

            input.setVal('blabla');
            spy.should.have.been.calledOnce;
        });

        it('should update value when control value changed', function(done) {
            input.on('change', function(e) {
                e.target.getVal().should.be.equal('new-value');
                done();
            });

            input.elem('control')
                .val('new-value')
                .trigger('input'); // TODO: разобраться с touch, нихера оно не работает без этого при программной установке
        });
    });
});

provide();

function buildInput(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('input');
}

});
