/**
 * @module dropdown
 */

modules.define(
    { block : 'dropdown', modName : 'switcher', modVal : 'link' },
    ['link'],
    function(provide) {

/**
 * @exports
 * @class dropdown
 * @bem
 */
provide(null, /** @lends dropdown */{
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'link', this.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
});

});
