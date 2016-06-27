/**
 * @module radio
 */

modules.define(
    'radio',
    ['i-bem-dom', 'control'],
    function(provide, bemDom, Control) {

/**
 * @exports
 * @class radio
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(this.name, Control, /** @lends radio.prototype */{
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
        this.hasMod('disabled') || this.setMod('checked');
    }
}, /** @lends radio */{
    lazyInit : true,
    onInit : function() {
        this._domEvents().on('change', this.prototype._onChange);
        return this.__base.apply(this, arguments);
    }
}));

});
