/**
 * @module select
 */

modules.define('select', function(provide, Select) {

/**
 * @exports
 * @class select
 * @bem
 */
provide(Select.declMod({ modName : 'mode', modVal : 'radio' }, /** @lends select.prototype */{
    _updateControl : function() {
        var val = this.getVal();
        this._elem('control').domElem.val(val);
    },

    _updateButton : function() {
        this._button.setText(this._getCheckedItems().get(0).getText());
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'pointer' && this.delMod('opened');
    }
}));

});
