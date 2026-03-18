/**
 * @module dropdown
 */

import Button from 'bem:button';

/**
 * @exports
 * @class dropdown
 * @bem
 */
import Dropdown from 'bem:dropdown';

Dropdown.declMod({ modName : 'switcher', modVal : 'button' }, /** @lends dropdown.prototype */{
    onSetMod : {
        'opened' : function(_, modVal) {
            this.__base.apply(this, arguments);
            const switcher = this.getSwitcher();
            switcher.hasMod('togglable', 'check') && switcher.setMod('checked', modVal);
        }
    },
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findMixedBlock(Button));
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
