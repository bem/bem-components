/**
 * @module i-bem__dom
 */

modules.define('i-bem__dom', function(provide, BEMDOM) {

/**
 * @exports i-bem__dom:blocks.dropdown
 * @class dropdown
 * @bem
 */
BEMDOM.decl({ block : 'dropdown', modName : 'switcher', modVal : 'button' }, /** @lends dropdown.prototype */{
    onSetMod : {
        'opened' : function(_, modVal) {
            this.__base.apply(this, arguments);
            var switcher = this.getSwitcher();
            switcher.hasMod('togglable', 'check') && switcher.setMod('checked', modVal);
        }
    },
}, /** @lends dropdown */{
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'button', this.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
});

provide(BEMDOM);

});
