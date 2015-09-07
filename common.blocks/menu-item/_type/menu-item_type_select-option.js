/**
 * @module menu-item
 */

modules.define('menu-item', function(provide, MenuItem) {

/**
 * @exports
 * @class menu-item
 * @bem
 */
provide(MenuItem.decl({ modName : 'type', modVal : 'select-option' }, /** @lends menu-item.prototype */{
    onSetMod : {
        'checked' : function(_, modVal) {
            this.domElem.attr('aria-selected', !!modVal);
        }
    }
}));

});
