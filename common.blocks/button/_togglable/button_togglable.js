/**
 * @module button
 */

/**
 * @exports
 * @class button
 * @bem
 */

import Button from 'bem:button';

Button.declMod({ modName : 'togglable', modVal : '*' }, /** @lends button.prototype */{
    onSetMod : {
        'checked' : function(_, modVal) {
            this.__base.apply(this, arguments);
            this.domElem.attr('aria-pressed', !!modVal);
        }
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
