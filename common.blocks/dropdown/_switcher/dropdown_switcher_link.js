/**
 * @module dropdown
 */

import Link from 'bem:link';

/**
 * @exports
 * @class dropdown
 * @bem
 */
export default function(Dropdown) {
return Dropdown.declMod({ modName : 'switcher', modVal : 'link' }, { /** @lends dropdown */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findMixedBlock(Link));
    }
});
};
