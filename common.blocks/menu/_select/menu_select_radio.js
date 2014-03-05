/**
 * @module menu
 */

modules.define('menu', function(provide, Menu) {

/**
 * @exports
 * @class menu
 * @bem
 */
provide(Menu.decl({ modName : 'select', modVal : 'radio' }, /** @lends menu.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
            },

            '' : function() {
            }
        }
    }
}));

});
