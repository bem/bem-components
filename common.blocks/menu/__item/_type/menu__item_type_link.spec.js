modules.define(
    'spec',
    ['menu__item', 'menu', 'link', 'i-bem-dom', 'jquery', 'dom', 'sinon', 'BEMHTML'],
    function(provide, MenuItem, Menu, Link, bemDom, $, dom, sinon, BEMHTML) {

describe('menu__item_type_link', function() {
    var menu, menuItem, link;

    beforeEach(function() {
        menu = bemDom
            .init($(BEMHTML.apply({
                block : 'menu',
                content : [{
                    elem : 'item',
                    elemMods : { type : 'link' },
                    content : {
                        block : 'link',
                        url : 'http://yandex.ru',
                        content : 'Link 1'
                    }
                }]
            })).appendTo('body'))
            .bem(Menu);
        menuItem = menu.findChildBlock(MenuItem);
        link = menuItem.findChildBlock(Link);
    });

    afterEach(function() {
        bemDom.destruct(menu.domElem);
    });

    describe('hovered', function() {
        it('should be hovered on link focus', function() {
            menuItem.hasMod('hovered').should.be.false;
            link.setMod('focused');
            menuItem.hasMod('hovered').should.be.true;
        });

        it('should set focus to link on hover if lies within a focused menu', function() {
            link.hasMod('focused').should.be.false;

            menuItem.setMod('hovered');
            link.hasMod('focused').should.be.false;
            menuItem.delMod('hovered');

            menu.setMod('focused');
            menuItem.setMod('hovered');
            link.hasMod('focused').should.be.true;
        });

        it('should not remove focus from menu on unhover if it was focused before', function() {
            menu.setMod('focused');

            menuItem
                .setMod('hovered')
                .delMod('hovered');

            menu.hasMod('focused').should.be.true;
        });
    });

    describe('disabled', function() {
        it('should mirror disabled state to link', function() {
            link.hasMod('disabled').should.be.false;

            menuItem.setMod('disabled');
            link.hasMod('disabled').should.be.true;

            menuItem.delMod('disabled');
            link.hasMod('disabled').should.be.false;
        });
    });

});

provide();

});
