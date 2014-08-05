/**
 * @module input
 */

modules.define('input', function(provide, Input) {

/**
 * @exports
 * @class input
 * @bem
 */
provide(Input.decl({ modName : 'has-clear', modVal : true }, /** @lends input.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this
                    .on('change', this._updateClear)
                    ._updateClear();
            }
        }
    },

    _onClearClick : function() {
        this
            .setVal('', { source : 'clear' })
            .setMod('focused');
    },

    _updateClear : function() {
        this.toggleMod(this.elem('clear'), 'visible', true, !!this._val);
    }
}, /** @lends input */{
    live : function() {
        this.liveBindTo('clear', 'pointerclick', function() {
            this._onClearClick();
        });

        return this.__base.apply(this, arguments);
    }
}));

});
