modules.define(
    'spec',
    ['input', 'i-bem-dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Input, bemDom, $, BEMHTML, sinon) {

describe('input', function() {
    var input;

    beforeEach(function() {
        input = buildInput({ block : 'input', val : 'bla' });
    });

    afterEach(function() {
        bemDom.destruct(input.domElem);
    });

    describe('val', function() {
        it('should return new value when value changed', function() {
            input
                .setVal('blabla')
                .getVal().should.be.equal('blabla');
        });

        it('should update control elem value when value changed', function() {
            input.setVal('blabla');
            input._elem('control').domElem.val().should.be.equal('blabla');
        });

        it('should emit "change" event only when value changed', function() {
            var spy = sinon.spy();
            input._events().on('change', spy);

            input.setVal('bla');
            spy.should.not.have.been.called;

            input.setVal('blabla');
            spy.should.have.been.calledOnce;
        });

        it('should update value when control value changed', function(done) {
            input._events().on('change', function(e) {
                e.target.getVal().should.be.equal('new-value');
                done();
            });

            input._elem('control').domElem
                .val('new-value')
                .trigger('input'); // TODO: разобраться с touch, нихера оно не работает без этого при программной установке
        });
    });
});

provide();

function buildInput(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Input);
}

});
