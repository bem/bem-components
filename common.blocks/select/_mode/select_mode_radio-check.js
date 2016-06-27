/**
 * @module select
 */

modules.define('select', ['jquery'], function(provide, $, Select) {

/**
 * @exports
 * @class select
 * @bem
 */
provide(Select.declMod({ modName : 'mode', modVal : 'radio-check' }, /** @lends select.prototype */{
    _updateControl : function() {
        var val = this.getVal(),
            control = this._elem('control') && this._elem('control').domElem;

        if(!control || !control.length) {
            control = $(Select._createControlHTML(this.getName(), val));
        }

        if(typeof val === 'undefined') {
            // NOTE: because there is a possibility of whole select disabling,
            // "remove" is used instead of "disable"
            control.remove();
        } else {
            control.parent().length || this.domElem.prepend(control);
            control.val(val);
        }
    },

    _updateButton : function() {
        var checkedItem = this._getCheckedItems().get(0);

        this._button
            .toggleMod('checked', true, '', !!checkedItem)
            .setText(checkedItem? checkedItem.getText() : this.params.text);
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'pointer' && this.delMod('opened');
    }
}));

});
