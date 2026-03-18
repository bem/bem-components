/**
 * @module input
 */

import bemDom from 'bem:i-bem-dom';

/**
 * @exports
 * @class input
 * @bem
 */
export default function(Input) {

bemDom.declBlock(Input, /** @lends input.prototype */{
    _onInputChanged : function() {
        this.setVal(this._elem('control').domElem.val());
    }
}, /** @lends input */{
    onInit : function() {
        this._domEvents('control').on('input', this.prototype._onInputChanged);
        return this.__base.apply(this, arguments);
    }
});

return Input;

}
