/**
 * @module select
 */

import bemDom from 'bem:i-bem-dom';
import $ from 'bem:jquery';

/**
 * @exports
 * @class select
 * @bem
 */
export default function(Select) {
return Select.declMod({ modName : 'mode', modVal : 'radio-check' }, /** @lends select.prototype */{
    _updateControl : function() {
        const val = this.getVal(),
            control = this._elem('control');
        let controlDomElem = control && control.domElem;

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
        const checkedItem = this._getCheckedItems().get(0);

        this._button
            .toggleMod('checked', true, '', !!checkedItem)
            .setText(checkedItem? checkedItem.getText() : this.params.text);
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'pointer' && this.delMod('opened');
    }
});
};
