modules.define(
    'spec',
    ['menu', 'i-bem-dom', 'jquery', 'sinon', 'BEMHTML'],
    function(provide, Menu, bemDom, $, sinon, BEMHTML) {

describe('menu_mode_radio', function() {
    var menu, menuItems;

    beforeEach(function() {
        menu = buildMenu({
            block : 'menu',
            mods : { mode : 'radio' },
            val : 2,
            content : [
                {
                    elem : 'item',
                    val : 1,
                    content : 'item 1'
                },
                {
                    elem : 'item',
                    val : 2,
                    content : 'item 2'
                },
                {
                    elem : 'item',
                    val : 3,
                    content : 'item 3'
                },
                {
                    elem : 'item',
                    val : 4,
                    content : 'item 4'
                }
            ]
        });
        menuItems = menu.findChildElems('item');
    });

    afterEach(function() {
        bemDom.destruct(menu.domElem);
    });

    describe('value', function() {
        it('should return initial value', function() {
            menu.getVal().should.be.equal(2);
        });

        it('should modify value after clicks on items', function() {
            menuItems.get(0)._emit('click', { source : 'pointer' });
            menu.getVal().should.be.equal(1);
            menuItems.get(1).hasMod('checked').should.be.false;

            menuItems.get(1)._emit('click', { source : 'pointer' });
            menu.getVal().should.be.equal(2);
            menuItems.get(0).hasMod('checked').should.be.false;
        });

        it('should change value', function() {
            menu.setVal(1).getVal().should.be.equal(1);
        });

        it('should change checked state of items', function() {
            menu.setVal(1);
            menuItems.get(0).hasMod('checked').should.be.true;
            menuItems.get(1).hasMod('checked').should.be.false;
        });
    });

    describe('change event', function() {
        var spy;

        beforeEach(function() {
            spy = sinon.spy();
            menu._events().on('change', spy);
        });

        it('should emit change event if value was changed', function() {
            menu.setVal(1);
            spy.should.have.been.called;
        });

        it('should not emit change event if value was not changed', function() {
            menu.setVal(2);
            spy.should.not.have.been.called;
        });

        it('should emit change event on non checked items clicks', function() {
            menuItems.get(0)._emit('click', { source : 'pointer' });
            spy.should.have.been.called;
        });

        it('should not emit change event on checked items clicks', function() {
            menuItems.get(1)._emit('click', { source : 'pointer' });
            spy.should.not.have.been.called;
        });
    });
});

provide();

function buildMenu(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Menu);
}

});
