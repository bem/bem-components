/**
 * @module input
 */

import bemDom from 'bem:i-bem-dom';
import Control from 'bem:control';

/**
 * @exports
 * @class input
 * @augments control
 * @bem
 */
export default bemDom.declBlock('input', Control, /** @lends input.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._val = this._elem('control').domElem.val();
            }
        }
    },

    /**
     * Returns control value
     * @returns {String}
     * @override
     */
    getVal : function() {
        return this._val;
    },

    /**
     * Sets control value
     * @param {String} val value
     * @param {Object} [data] additional data
     * @returns {input} this
     */
    setVal : function(val, data) {
        val = String(val);

        if(this._val !== val) {
            this._val = val;

            const control = this._elem('control');
            control.domElem.val() !== val && control.domElem.val(val);

            this._emit('change', data);
        }

        return this;
    }
}, /** @lends input */{
    lazyInit : false,
    onInit : function() {
        this.__base.apply(this, arguments);
    }
});
