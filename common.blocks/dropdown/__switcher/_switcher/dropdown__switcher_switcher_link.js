import Link from 'bem:link';
import Switcher from 'bem:dropdown__switcher';

Switcher.declMod({ modName : 'switcher', modVal : 'link' }, {}, {
    onInit : function() {
        this._events(Link).on('click', this.prototype._onSwitcherClick);
        this.__base.apply(this, arguments);
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
