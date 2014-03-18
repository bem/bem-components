modules.define(
    'spec',
    ['link', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, Link, BEMDOM, $, dom, BEMHTML, sinon) {

describe('link', function() {
    var link;

    beforeEach(function() {
        link = BEMDOM.init(
                $(BEMHTML.apply({ block : 'link' })))
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

    describe('focus/blur', function() {
        it('should have "focused" mod on focus', function() {
            link.domElem.focus();
            link.hasMod('focused').should.be.true;
        });

        it('should delete "focused" mod on blur', function() {
            link.domElem
                .focus()
                .blur();
            link.hasMod('focused').should.be.false;
        });

        it('should be focused after "focused" mod set', function() {
            link.setMod('focused');
            dom.containsFocus(link.domElem).should.be.true;
        });

        it('should not set "focused" mod if it has "disabled" mod', function() {
            link
                .setMod('disabled')
                .setMod('focused')
                .hasMod('focused').should.be.false;
        });
    });
});

provide();

});
