/**
 * @module menu
 */

/**
 * @exports
 * @class menu
 * @bem
 */
import Menu from 'bem:menu';

Menu.declMod({ modName : 'mode', modVal : 'radio' }, /** @lends menu.prototype */{
    /**
     * @override
     */
    _getVal : function() {
        const items = this.getItems();
        let i = 0,
            item;

        while(item = items.get(i++))
            if(item.hasMod('checked'))
                return item.getVal();
    },

    /**
     * @override
     */
    _setVal : function(val) {
        let wasChanged = false,
            hasVal = false;
        const itemsCheckedVals = this.getItems().map(function(item) {
                if(!item.isValEq(val)) return false;

                item.hasMod('checked') || (wasChanged = true);
                return hasVal = true;
            });

        if(!hasVal) return false;

        this._updateItemsCheckedMod(itemsCheckedVals);

        return wasChanged;
    },

    /**
     * @override
     */
    _onItemClick : function(clickedItem) {
        this.__base.apply(this, arguments);

        let isChanged = false;
        this.getItems().forEach(function(item) {
            if(item === clickedItem) {
                if(!item.hasMod('checked')) {
                    item.setMod('checked', true);
                    this._isValValid = false;
                    isChanged = true;
                }
            } else {
                item.delMod('checked');
            }
        }, this);
        isChanged && this._emit('change');
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
