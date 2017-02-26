/**
 * @module select
 */

modules.define('select', ['i-bem-dom', 'jquery'], function(provide, bemDom, $, Select) {

/**
 * @exports
 * @class select
 * @bem
 */
provide(Select.declMod({ modName : 'mode', modVal : 'radio-check' }, /** @lends select.prototype */{
    _updateControl : function() {
        var val = this.getVal(),
            control = this._elem('control'),
            controlDomElem = control && control.domElem;

        if(!controlDomElem || !controlDomElem.length) {
            controlDomElem = $(Select._createControlHTML(this.getName(), val));
        }

        if(typeof val === 'undefined') {
            // NOTE: because there is a possibility of whole select disabling,
            // "destruct" is used instead of "disable"
            bemDom.destruct(controlDomElem);
        } else {
            if(!controlDomElem.parent().length) {
                bemDom.prepend(this.domElem, controlDomElem);
                this._dropElemCache('control');
            }
            controlDomElem.val(val);
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
