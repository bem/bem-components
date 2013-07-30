modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'next-tick', 'sinon'],
    function(provide, DOM, $, BEMHTML, nextTick, sinon) {

describe('link', function() {
    var link;

    beforeEach(function() {
        link = DOM.init(
                $(BEMHTML.apply({
                    block: 'link',
                    js: true
                })))
            .appendTo('body')
            .bem('link');
    });

    afterEach(function() {
        DOM.destruct(link.domElem);
    });

    it('should emit "click" event', function(done) {
        var spy = sinon.spy();

        link.on('click', spy);
        link.domElem.trigger('pointerclick');

        nextTick(function() {
            spy.should.have.been.calledOnce;
            done();
        });
    });

    it('should not emit "click" event if disabled', function(done) {
        var spy = sinon.spy();

        link.setMod('disabled');
        link.on('click', spy);
        link.domElem.trigger('pointerclick');

        nextTick(function() {
            spy.should.not.have.been.called;
            done();
        });
    });
});

provide();

});
