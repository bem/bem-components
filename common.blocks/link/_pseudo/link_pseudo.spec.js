modules.define(
    'spec',
    ['link', 'i-bem-dom', 'jquery', 'BEMHTML', 'sinon', 'keyboard__codes'],
    function(provide, Link, bemDom, $, BEMHTML, sinon, keyCodes) {

describe('link_pseudo', function() {
    var link;

    beforeEach(function() {
        link = bemDom.init(
                $(BEMHTML.apply({
                    block : 'link',
                    mods : { pseudo : true }
                })))
            .appendTo('body')
            .bem(Link);
    });

    afterEach(function() {
        bemDom.destruct(link.domElem);
    });

    it('should always prevent default action', function() {
        var e = $.Event('pointerclick');
        link.domElem.trigger(e);
        e.isDefaultPrevented().should.be.true;
    });

    it('should emit click on "enter" key when focused', function() {
        var spy = sinon.spy();

        link.setMod('focused');
        link._events().on('click', spy);
        link.domElem.trigger($.Event('keydown', { keyCode : keyCodes.ENTER }));

        spy.should.have.been.calledOnce;
    });
});

provide();

});
