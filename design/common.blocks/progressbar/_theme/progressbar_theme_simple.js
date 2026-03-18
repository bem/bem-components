/**
 * @module progressbar
 */

/**
 * @exports
 * @class progressbar
 * @bem
 */
import Progressbar from 'bem:progressbar';

Progressbar.declMod({ modName : 'theme', modVal : 'simple' }, /** @lends progressbar.prototype */{

    /**
     * Sets text
     * @override
     */
    setVal : function() {
        const res = this.__base.apply(this, arguments);
        this.elem('text').text(this._val);
        return res;
    }

});
// Side-effect only - modifier is registered on import
export default function() {};
