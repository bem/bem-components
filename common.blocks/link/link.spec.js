modules.define(
    'spec',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, BEMDOM, $, BEMHTML, sinon) {

describe('link', function() {
    var link;

    beforeEach(function() {
        link = BEMDOM.init(
                $(BEMHTML.apply({
                    block : 'link',
                    js : true
                })))
            .appendTo('body')
            .bem('link');
    });

    afterEach(function() {
        BEMDOM.destruct(link.domElem);
    });

    it('should emit "click" event and do not prevent default action', function() {
        var spy = sinon.spy(),
            e = $.Event('pointerclick');

        link.on('click', spy);
        link.domElem.trigger(e);

        e.isDefaultPrevented().should.be.false;
        spy.should.have.been.calledOnce;
    });

    it('should prevent default action and do not emit "click" event if disabled', function() {
        var spy = sinon.spy(),
            e = $.Event('pointerclick');

        link.setMod('disabled');
        link.on('click', spy);
        link.domElem.trigger(e);

        e.isDefaultPrevented().should.be.true;
        spy.should.not.have.been.called;
    });
});

provide();

});
