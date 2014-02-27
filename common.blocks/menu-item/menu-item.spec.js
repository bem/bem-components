modules.define(
    'spec',
    ['menu-item', 'i-bem__dom', 'jquery', 'sinon', 'BEMHTML'],
    function(provide, MenuItem, BEMDOM, $, sinon, BEMHTML) {

describe('menu-item', function() {
    var menuItem;

    beforeEach(function() {
        menuItem = buildMenuItem('val1');
    });

    afterEach(function() {
        BEMDOM.destruct(menuItem.domElem);
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

        it('should properly compare complex own value with given', function() {
            var menuItem = buildMenuItem({ blah : 'blah' });

            menuItem.isValEq({ blah : 'blah' }).should.be.true;
            menuItem.isValEq({ foo : 'bar' }).should.be.false;

            BEMDOM.destruct(menuItem.domElem);
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
