/**
 * @module select
 */

/**
 * @exports
 * @class select
 * @bem
 */
import Select from 'bem:select';

Select.declMod({ modName : 'mode', modVal : 'check' }, /** @lends select.prototype */{
    _updateControl : function() {
        this.findChildElems('control').forEach(function(control) {
            control.domElem.remove();
        });

        const name = this.getName();
        this.domElem.prepend(
            this.getVal()
                .map(function(val) {
                    return Select._createControlHTML(name, val);
                }));
    },

    _updateButton : function() {
        const checkedItems = this._getCheckedItems();

        this._button
            .toggleMod('checked', true, '', !!checkedItems.size())
            .setText(
                checkedItems.size() === 1?
                    checkedItems.get(0).getText() : // one checked
                    checkedItems.reduce(function(res, item) { // many checked
                        return res + (res? ', ' : '') + (item.params.checkedText || item.getText());
                    }, '') ||
                        this.params.text); // none checked
    },

    _setSingleVal : function(value) {
        this.setVal([value]);
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'keyboard' && (this._preventToToggleOpened = true);
    },

    _onButtonClick : function() {
        this._preventToToggleOpened?
            this._preventToToggleOpened = false :
            this.__base.apply(this, arguments);
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
