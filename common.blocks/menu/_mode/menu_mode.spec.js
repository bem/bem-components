modules.define(
    'spec',
    ['menu', 'i-bem-dom', 'jquery', 'sinon', 'BEMHTML'],
    function(provide, Menu, bemDom, $, sinon, BEMHTML) {

describe('menu_mode', function() {
    var menu, menuVal;

    beforeEach(function() {
        menuVal = 'bla';

        Menu.declMod({ modName : 'mode', modVal : 'bla' }, {
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
        bemDom.destruct(menu.domElem);
    });

    describe('content change', function() {
        it('should update value after content was changed', function() {
            menu.setContent('');
            menuVal = 'blabla';
            menu.getVal().should.be.equal('blabla');
        });

        it('should emit change event after content was changed', function() {
            var spy = sinon.spy();
            menu._events().on('change', spy);
            menu.setContent('');
            spy.should.have.been.called;
        });
    });

});

provide();

function buildMenu(bemjson) {
    return bemDom.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem(Menu);
}

});
