/**
 * @module dropdown
 */

import Link from 'bem:link';

/**
 * @exports
 * @class dropdown
 * @bem
 */
import Dropdown from 'bem:dropdown';

Dropdown.declMod({ modName : 'switcher', modVal : 'link' }, { /** @lends dropdown */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findMixedBlock(Link));
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
