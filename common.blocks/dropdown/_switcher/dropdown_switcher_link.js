/**
 * @module dropdown
 */

modules.define('dropdown', ['link'], function(provide, Link, Dropdown) {

/**
 * @exports
 * @class dropdown
 * @bem
 */
provide(Dropdown.declMod({ modName : 'switcher', modVal : 'link' }, { /** @lends dropdown */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findMixedBlock(Link));
    }
}, {
    onInit : function() {
        this._events(Link).on('click', this.prototype.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
}));

});
