modules.define(
    'spec',
    ['menu', 'i-bem__dom', 'jquery', 'sinon', 'BEMHTML'],
    function(provide, Menu, BEMDOM, $, sinon, BEMHTML) {

describe('menu_select_check', function() {
    var menu, menuItems;

    beforeEach(function() {
        menu = buildMenu({
            block : 'menu',
            mods : { select : 'check' },
            content : [
                {
                    block : 'menu-item',
                    val : 1,
                    content : 'item 1'
                },
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 2,
                    content : 'item 2'
                },
                {
                    block : 'menu-item',
                    val : 3,
                    content : 'item 3'
                },
                {
                    block : 'menu-item',
                    mods : { checked : true },
                    val : 4,
                    content : 'item 4'
                }
            ]
        });
        menuItems = menu.findBlocksInside('menu-item');
    });

    afterEach(function() {
        BEMDOM.destruct(menu.domElem);
    });

    describe('value', function() {
        it('should return initial value', function() {
            menu.getVal().should.be.eql([2, 4]);
        });

        it('should return initial value in case of none checked', function() {
            var nonCheckedMenu = buildMenu({
                block : 'menu',
                mods : { select : 'check' },
                content : [
                    {
                        block : 'menu-item',
                        val : 1,
                        content : 'item 1'
                    },
                    {
                        block : 'menu-item',
                        val : 2,
                        content : 'item 2'
                    }
                ]
            });
            nonCheckedMenu.getVal().should.be.eql([]);
            BEMDOM.destruct(nonCheckedMenu.domElem);
        });

        it('should modify value after clicks on items', function() {
            menuItems[0].emit('click');
            menu.getVal().should.be.eql([1, 2, 4]);
            menuItems[1].emit('click');
            menu.getVal().should.be.eql([1, 4]);
        });

        it('should change value', function() {
            menu.setVal([1, 4]).getVal().should.be.eql([1, 4]);
        });

        it('should change checked state of items', function() {
            menu.setVal([1, 4]);
            menuItems[0].hasMod('checked').should.be.true;
            menuItems[1].hasMod('checked').should.be.false;
            menuItems[3].hasMod('checked').should.be.true;
        });
    });

    describe('change event', function() {
        var spy;

        beforeEach(function() {
            spy = sinon.spy();
            menu.on('change', spy);
        });

        it('should emit change event if value was changed', function() {
            menu.setVal([1, 4]);
            spy.should.have.been.called;
        });

        it('should not emit change event if value was not changed', function() {
            menu.setVal([2, 4]);
            spy.should.not.have.been.called;
        });

        it('should emit change event on items clicks', function() {
            menuItems[0].emit('click');
            spy.should.have.been.called;
        });
    });
});

provide();

function buildMenu(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('menu');
}

});
