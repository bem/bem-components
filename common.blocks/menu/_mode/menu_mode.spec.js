modules.define(
    'spec',
    ['menu', 'i-bem__dom', 'jquery', 'sinon', 'BEMHTML'],
    function(provide, Menu, BEMDOM, $, sinon, BEMHTML) {

describe('menu_mode_check', function() {
    var menu, menuVal;

    beforeEach(function() {
        menuVal = 'bla';

        Menu.decl({ modName : 'mode', modVal : 'bla' }, {
            _getVal : function() {
                return menuVal;
            }
        });

        menu = buildMenu({
            block : 'menu',
            mods : { mode : 'bla' }
        });
    });

    afterEach(function() {
        BEMDOM.destruct(menu.domElem);
    });

    describe('content change', function() {
        it('should update value after content was changed', function() {
            menu.setContent('');
            menuVal = 'blabla';
            menu.getVal().should.be.equal('blabla');
        });

        it('should emit change event after content was changed', function() {
            var spy = sinon.spy();
            menu
                .on('change', spy)
                .setContent('');
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
