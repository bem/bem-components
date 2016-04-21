/**
 * @module dropdown
 */

modules.define('dropdown', ['link'], function(provide, _, Dropdown) {

/**
 * @exports
 * @class dropdown
 * @bem
 */
provide(Dropdown.decl({ modName : 'switcher', modVal : 'link' }, null, /** @lends dropdown */{
    live : function() {
        this.liveInitOnBlockEvent('click', 'link', this.prototype.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
}));

});
