/**
 * @module dropdown
 */

modules.define(
    { block : 'dropdown', modName : 'switcher', modVal : 'button' },
    ['button'],
    function(provide) {

/**
 * @exports
 * @class dropdown
 * @bem
 */
provide(/** @lends dropdown.prototype */{
    onSetMod : {
        'opened' : function(_, modVal) {
            this.__base.apply(this, arguments);
            var switcher = this.getSwitcher();
            switcher.hasMod('togglable', 'check') && switcher.setMod('checked', modVal);
        }
    }
}, /** @lends dropdown */{
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'button', this.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
});

});
