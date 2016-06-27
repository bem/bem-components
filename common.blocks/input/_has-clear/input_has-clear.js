/**
 * @module input
 */

modules.define('input', function(provide, Input) {

/**
 * @exports
 * @class input
 * @bem
 */
provide(Input.declMod({ modName : 'has-clear', modVal : true }, /** @lends input.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this._events().on('change', this._updateClear);
                this._updateClear();
            }
        }
    },

    _onClearClick : function() {
        this
            .setVal('', { source : 'clear' })
            .setMod('focused');
    },

    _updateClear : function() {
        this._elem('clear').toggleMod('visible', true, !!this._val);
    }
}, /** @lends input */{
    onInit : function() {
        this._domEvents('clear').on('pointerclick', function() {
            this._onClearClick();
        });

        return this.__base.apply(this, arguments);
    }
}));

});
