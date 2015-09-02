/**
 * @module menu-item
 */

modules.define('menu-item', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class menu-item
 * @bem
 *
 * @param val Value of item
 */
provide(BEMDOM.decl(this.name, /** @lends menu-item.prototype */{
    onSetMod : {
        'checked' : {
            '*' : function(_, modVal) {
                this.domElem.attr('aria-selected', !!modVal);
            }
        }
    }
}));
});
