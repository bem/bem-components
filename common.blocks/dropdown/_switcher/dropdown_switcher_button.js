/**
 * @module dropdown
 */

modules.define('dropdown', ['button'], function(provide, Button, Dropdown) {

/**
 * @exports
 * @class dropdown
 * @bem
 */
provide(Dropdown.declMod({ modName : 'switcher', modVal : 'button' }, /** @lends dropdown.prototype */{
    onSetMod : {
        'opened' : function(_, modVal) {
            this.__base.apply(this, arguments);
            var switcher = this.getSwitcher();
            switcher.hasMod('togglable', 'check') && switcher.setMod('checked', modVal);
        }
    },
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findMixedBlock(Button));
    }
}));

});
