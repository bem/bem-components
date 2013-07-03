modules.define('test', ['i-bem__dom', 'jquery', 'BEMHTML', 'sinon'], function(provide, DOM, $, BEMHTML, sinon) {

describe('input', function() {
    var input;

    beforeEach(function() {
        input = DOM.init(
                $(BEMHTML.apply({
                    block: 'input',
                    mods: { size: 's', autofocus: 'focused' },
                    content: { elem: 'control' },
                    value: 'bla'
                }))
            ).bem('input');
    });

    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    it('should trigger change-event if value changed', function() {
        var spy = sinon.spy();
        input.on('change', spy);

        input.val('bla');
        spy.should.not.have.been.called;

        input.val('blabla');
        spy.should.have.been.calledOnce;
    });
});

provide();

});
