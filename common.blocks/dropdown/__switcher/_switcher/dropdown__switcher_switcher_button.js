import Button from 'bem:button';
import Switcher from 'bem:dropdown__switcher';

Switcher.declMod({ modName : 'switcher', modVal : 'button' }, {}, {
    onInit : function() {
        this._events(Button).on('click', this.prototype._onSwitcherClick);
        this.__base.apply(this, arguments);
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
