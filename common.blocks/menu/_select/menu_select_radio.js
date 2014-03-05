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
        var isChanged = false;
        this._getItems().forEach(function(item) {
            if(item === clickedItem) {
                if(!item.hasMod('checked')) {
                    item.setMod('checked', true);
                    this._isValValid = false;
                    isChanged = true;
                }
            } else {
                item.delMod('checked');
            }
        });
        isChanged && this.emit('change');
    }
}));

});
