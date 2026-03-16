import Link from 'bem:link';

export default function(Switcher) {
return Switcher.declMod({ modName : 'switcher', modVal : 'link' }, {}, {
    onInit : function() {
        this._events(Link).on('click', this.prototype._onSwitcherClick);
        this.__base.apply(this, arguments);
    }
});
};
