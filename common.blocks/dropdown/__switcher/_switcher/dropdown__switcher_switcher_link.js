modules.define('dropdown__switcher', ['link'], function(provide, Link, Switcher) {

provide(Switcher.declMod({ modName : 'switcher', modVal : 'link' }, {}, {
    onInit : function() {
        this._events(Link).on('click', this.prototype._onSwitcherClick);
        this.__base.apply(this, arguments);
    }
}));

});
