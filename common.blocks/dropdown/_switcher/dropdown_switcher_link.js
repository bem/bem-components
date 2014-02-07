/**
 * @module i-bem__dom
 */

modules.define('i-bem__dom', function(provide, BEMDOM) {

/**
 * @exports i-bem__dom:blocks.dropdown
 * @class dropdown
 * @bem
 */
BEMDOM.decl({ block : 'dropdown', modName : 'switcher', modVal : 'link' }, null, /** @lends dropdown */{
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'link', this.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
});

provide(BEMDOM);

});
