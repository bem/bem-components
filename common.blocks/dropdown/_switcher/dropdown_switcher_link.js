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
}));

});
