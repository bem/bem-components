/**
 * @module menu
 */

/**
 * @exports
 * @class menu
 * @bem
 */
import Menu from 'bem:menu';

Menu.declMod({ modName : 'mode', modVal : 'radio-check' }, /** @lends menu.prototype */{
    /**
     * @override
     */
    _getVal : function() {
        const items = this.getItems();
        let i = 0, item;
        while(item = items.get(i++))
            if(item.hasMod('checked'))
                return item.getVal();
    },

    /**
     * @override
     */
    _setVal : function(val) {
        const isValUndefined = typeof val === 'undefined';
        let wasChanged = false,
            hasVal = false;
        const itemsCheckedVals = this.getItems().map(function(item) {
                if(isValUndefined) {
                    item.hasMod('checked') && (wasChanged = true);
                    return false;
                }

                if(!item.isValEq(val)) return false;

                item.hasMod('checked') || (wasChanged = true);
                return hasVal = true;
            });

        if(!isValUndefined && !hasVal) return false;

        this._updateItemsCheckedMod(itemsCheckedVals);

        return wasChanged;
    },

    /**
     * @override
     */
    _onItemClick : function(clickedItem) {
        this.__base.apply(this, arguments);

        this.getItems().forEach(function(item) {
            item === clickedItem?
                item.toggleMod('checked') :
                item.delMod('checked');
        });
        this._isValValid = false;
        this._emit('change');
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
