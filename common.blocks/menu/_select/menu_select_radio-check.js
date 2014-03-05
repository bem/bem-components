/**
 * @module menu
 */

modules.define('menu', function(provide, Menu) {

/**
 * @exports
 * @class menu
 * @bem
 */
provide(Menu.decl({ modName : 'select', modVal : 'radio-check' }, /** @lends menu.prototype */{
    /**
     * @override
     */
    _extractVal : function() {
        var items = this._getItems(),
            i = 0, item;
        while(item = items[i++])
            if(item.hasMod('checked'))
                return item.getVal();
    },

    /**
     * @override
     */
    _onItemClick : function(clickedItem) {
        this._getItems().forEach(function(item) {
            item === clickedItem?
                item.toggleMod('checked') :
                item.delMod('checked');
        });
        this._isValValid = false;
        this.emit('change');
    }
}));

});
