modules.define('dropdown__switcher', ['button'], function(provide, Button, Switcher) {

provide(Switcher.declMod({ modName : 'switcher', modVal : 'button' }, {}, {
    onInit : function() {
        this._events(Button).on('click', this.prototype._onSwitcherClick);
        this.__base.apply(this, arguments);
    }
}));

});
