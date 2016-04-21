/**
 * @module dropdown
 */

modules.define('dropdown', ['button'], function(provide, _, Dropdown) {

/**
 * @exports
 * @class dropdown
 * @bem
 */
provide(Dropdown.decl({ modName : 'switcher', modVal : 'button' }, /** @lends dropdown.prototype */{
    onSetMod : {
        'opened' : function(_, modVal) {
            this.__base.apply(this, arguments);
            var switcher = this.getSwitcher();
            switcher.hasMod('togglable', 'check') && switcher.setMod('checked', modVal);
        }
    }
}, /** @lends dropdown */{
    live : function() {
        this.liveInitOnBlockEvent('click', 'button', this.prototype.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
}));

});
