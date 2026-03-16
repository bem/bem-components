/**
 * @module select
 */

/**
 * @exports
 * @class select
 * @bem
 */
export default function(Select) {
return Select.declMod({ modName : 'mode', modVal : 'radio' }, /** @lends select.prototype */{
    _updateControl : function() {
        const val = this.getVal();
        this._elem('control').domElem.val(val);
    },

    _updateButton : function() {
        this._button.setText(this._getCheckedItems().get(0).getText());
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'pointer' && this.delMod('opened');
    }
});
};
