import Button from 'bem:button';

export default function(Switcher) {
return Switcher.declMod({ modName : 'switcher', modVal : 'button' }, {}, {
    onInit : function() {
        this._events(Button).on('click', this.prototype._onSwitcherClick);
        this.__base.apply(this, arguments);
    }
});
};
