modules.define(
    'spec',
    ['menu-item', 'i-bem__dom', 'jquery', 'sinon', 'chai', 'BEMHTML'],
    function(provide, MenuItem, BEMDOM, $, sinon, chai, BEMHTML) {

var expect = chai.expect;

describe('menu-item', function() {
    var menuItem;

    beforeEach(function() {
        menuItem = buildMenuItem('val1');
    });

    afterEach(function() {
        BEMDOM.destruct(menuItem.domElem);
    });

    describe('hovered', function() {
        it('should be hovered/unhovered on pointerover/pointerleave', function() {
            menuItem.hasMod('hovered').should.be.false;

            menuItem.domElem.trigger('pointerover');
            menuItem.hasMod('hovered').should.be.true;

            menuItem.domElem.trigger('pointerleave');
            menuItem.hasMod('hovered').should.be.false;
        });

        it('should not set hovered state if disabled', function() {
            menuItem
                .setMod('hovered')
                .setMod('disabled')
                .hasMod('hovered').should.be.false;

            menuItem
                .setMod('hovered')
                .hasMod('hovered').should.be.false;
        });
    });

    describe('events', function() {
        it('emit event on pointer click if it is not disabled', function() {
            var spy = sinon.spy();

            menuItem
                .on('click', spy)
                .domElem.trigger('pointerclick');

            spy.should.have.been.called;

            menuItem
                .setMod('disabled')
                .domElem.trigger('pointerclick');

            spy.should.have.been.calledOnce;
        });
    });

    describe('val', function() {
        it('should return proper value', function() {
            menuItem.getVal().should.be.equal('val1');
        });

        it('should properly compare simple own value with given', function() {
            menuItem.isValEq('val1').should.be.true;
            menuItem.isValEq('val2').should.be.false;
        });
    });

    describe('a11y', function () {
        it('should set/remove "aria-disabled" attribute on disable', function() {
            menuItem.setMod('disabled');
            menuItem.domElem.attr('aria-disabled').should.be.equal('true');

            menuItem.delMod('disabled');
            expect(menuItem.domElem.attr('aria-disabled')).to.be.undefined;
        });

        it('should set/remove "aria-checked" attribute on "checked" modifier change', function() {
            menuItem.setMod('checked');
            menuItem.domElem.attr('aria-checked').should.be.equal('true');

            menuItem.delMod('checked');
            menuItem.domElem.attr('aria-checked').should.be.equal('false');
        });
    });

});

function buildMenuItem(val) {
    return BEMDOM
        .init($(BEMHTML.apply({
            block : 'menu-item',
            val : val,
            content : 'item'
        })).appendTo('body'))
        .bem('menu-item');
}

provide();

});
