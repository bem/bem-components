/**
 * @module checkbox
 */

modules.define('checkbox', ['i-bem-dom', 'control'], function(provide, bemDom, Control) {

/**
 * @exports
 * @class checkbox
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(this.name, Control, /** @lends checkbox.prototype */{
    onSetMod : {
        'checked' : {
            'true' : function() {
                this._elem('control').domElem
                    .attr('checked', true)
                    .prop('checked', true);
            },
            '' : function() {
                this._elem('control').domElem
                    .removeAttr('checked')
                    .prop('checked', false);
            }
        }
    },

    _onChange : function() {
        this.setMod('checked', this._elem('control').domElem.prop('checked'));
    }
}, /** @lends checkbox */{
    lazyInit : true,
    onInit : function() {
        this._domEvents('control').on('change', this.prototype._onChange);
        return this.__base.apply(this, arguments);
    }
}));

});
