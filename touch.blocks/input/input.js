/**
 * @module input
 */

modules.define('input', function(provide, Input) {

/**
 * @exports
 * @class input
 * @bem
 */
provide(Input.decl(/** @lends input.prototype */{
    _onInputChanged : function() {
        this.setVal(this.elem('control').val());
    }
}, /** @lends input */{
    live : function() {
        this.liveBindTo('control', 'input', this.prototype._onInputChanged);
        return this.__base.apply(this, arguments);
    }
}));

});
