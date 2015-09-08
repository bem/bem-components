modules.define(
    'spec',
    ['menu-item', 'i-bem__dom', 'jquery', 'chai', 'BEMHTML'],
    function(provide, MenuItem, BEMDOM, $, chai, BEMHTML) {

describe('menu-item_type_select-option', function() {
    var menuItem,
        expect = chai.expect;

    beforeEach(function() {
        menuItem = BEMDOM
            .init($(BEMHTML.apply({
                block : 'menu-item',
                mods : { type : 'select-option' },
                content : 'option text'
            })).appendTo('body'))
            .bem('menu-item');
    });

    afterEach(function() {
        BEMDOM.destruct(menuItem.domElem);
    });

    describe('a11y', function() {
        it('should update aria-attributes properly', function() {
            expect(menuItem.domElem.attr('aria-checked')).to.be.undefined;
            menuItem.domElem.attr('aria-selected').should.be.equal('false');

            menuItem.setMod('checked');

            expect(menuItem.domElem.attr('aria-checked')).to.be.undefined;
            menuItem.domElem.attr('aria-selected').should.be.equal('true');
        });
    });
});

provide();

});
