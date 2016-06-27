modules.define(
    'spec',
    ['link', 'i-bem-dom', 'jquery', 'BEMHTML', 'sinon', 'chai'],
    function(provide, Link, bemDom, $, BEMHTML, sinon, chai) {

var expect = chai.expect;

describe('link', function() {
    var link;

    beforeEach(function() {
        link = bemDom.init(
                $(BEMHTML.apply({ block : 'link', url : '/' })))
            .appendTo('body')
            .bem(Link);
    });

    afterEach(function() {
        bemDom.destruct(link.domElem);
    });

    it('should emit "click" event and do not prevent default action', function() {
        var spy = sinon.spy(),
            e = $.Event('pointerclick');

        link._events().on('click', spy);
        link.domElem.trigger(e);

        e.isDefaultPrevented().should.be.false;
        spy.should.have.been.calledOnce;
    });

    it('should emit "click" event and prevent default action', function() {
        var e = $.Event('pointerclick');

        link._events().on('click', function(e) {
            e.preventDefault();
        });
        link.domElem.trigger(e);

        e.isDefaultPrevented().should.be.true;
    });

    describe('disabled', function() {
        it('should remove "href" attribute on disable', function() {
            link.setMod('disabled');
            expect(link.domElem.attr('href')).to.be.undefined;

            link.delMod('disabled');
            link.domElem.attr('href').should.be.equal('/');
        });

        it('should set/remove "aria-disabled" attribute properly', function() {
            link.setMod('disabled');
            link.domElem.attr('aria-disabled').should.be.equal('true');

            link.delMod('disabled');
            expect(link.domElem.attr('aria-disabled')).to.be.undefined;
        });

        it('should prevent default action and do not emit "click" event if disabled', function() {
            var spy = sinon.spy(),
                e = $.Event('pointerclick');

            link.setMod('disabled');
            link._events().on('click', spy);
            link.domElem.trigger(e);

            e.isDefaultPrevented().should.be.true;
            spy.should.not.have.been.called;
        });
    });

    describe('getUrl()', function() {
        it('should return right name', function() {
            link.getUrl().should.be.equal('/');
        });
    });

    describe('setUrl()', function() {
        it('should change "href" attribute', function() {
            var url = '/example/';
            link.setUrl(url);
            link.getUrl().should.be.equal(url);
            expect(link.domElem.attr('href')).to.be.equal(url);
        });

        it('should save url and remove "href" attribute on disable', function() {
            var url = '/example/';

            link.setMod('disabled');

            link.setUrl(url);
            link.getUrl().should.be.equal(url);
            expect(link.domElem.attr('href')).to.be.undefined;

            link.delMod('disabled');

            link.getUrl().should.be.equal(url);
            expect(link.domElem.attr('href')).to.be.equal(url);
        });
    });
});

provide();

});
