/**
 * @module radio-group
 */

import Radio from 'bem:radio';

/**
 * @exports
 * @class radio-group
 * @bem
 */
export default function(RadioGroup) {
return RadioGroup.declMod({ modName : 'mode', modVal : 'radio-check' }, /** @lends radio-group.prototype */{
    _onRadioUncheck : function(e) {
        this._checkedRadio === e.target && this.setVal(undefined);
    }
}, /** @lends radio-group */{
    onInit : function() {
        this._events(Radio).on(
            { modName : 'checked', modVal : '' },
            this.prototype._onRadioUncheck);

        return this.__base.apply(this, arguments);
    }
});
};
