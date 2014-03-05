/**
 * @module menu
 */

modules.define('menu', function(provide, Menu) {

/**
 * @exports
 * @class menu
 * @bem
 */
provide(Menu.decl({ modName : 'select', modVal : 'check' }, /** @lends menu.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
            },

            '' : function() {
            }
        }
    },

    /**
     * @override
     */
    _extractVal : function() {
        return this._getItems()
            .filter(function(item) { return item.hasMod('checked'); })
            .map(function(item) { return item.getVal(); });
    },

    _onItemClick : function(clickedItem) {
        this._getItems().forEach(function(item) {
            item === clickedItem && item.toggleMod('checked');
        });
        this._isValValid = false;
        this.emit('change');
    }
}));

});
