/**
 * @module checkbox
 */

modules.define('checkbox', ['i-bem__dom', 'base-control'], function(provide, BEMDOM, BaseControl) {

/**
 * @exports
 * @class checkbox
 * @augments base-control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, /** @lends checkbox.prototype */{
    onSetMod : {
        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
        }
    },

    _onChange : function() {
        this.setMod('checked', this.elem('control').prop('checked'));
    }
}, /** @lends checkbox */{
    live : function() {
        this.liveBindTo('control', 'change', this.prototype._onChange);
        return this.__base.apply(this, arguments);
    }
}));

});
