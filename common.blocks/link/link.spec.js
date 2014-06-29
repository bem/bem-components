modules.define(
    'spec',
    ['link', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon', 'chai'],
    function(provide, Link, BEMDOM, $, BEMHTML, sinon, chai) {

var expect = chai.expect;

describe('link', function() {
    var link;

    beforeEach(function() {
        link = BEMDOM.init(
                $(BEMHTML.apply({ block : 'link', url : '/' })))
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

    describe('disabled', function() {
        it('should remove "href" attribute on disable', function() {
            link.setMod('disabled');
            expect(link.domElem.attr('href')).to.be.undefined;

            link.delMod('disabled');
            link.domElem.attr('href').should.be.equal('/');
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

});

provide();

});
