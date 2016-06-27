/**
 * @module input
 */

modules.define('input', ['i-bem-dom'], function(provide, bemDom, Input) {

/**
 * @exports
 * @class input
 * @bem
 */
provide(bemDom.declBlock(Input, /** @lends input.prototype */{
    _onInputChanged : function() {
        this.setVal(this._elem('control').domElem.val());
    }
}, /** @lends input */{
    onInit : function() {
        this._domEvents('control').on('input', this.prototype._onInputChanged);
        return this.__base.apply(this, arguments);
    }
}));

});
