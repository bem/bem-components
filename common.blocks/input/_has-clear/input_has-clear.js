/**
 * @module input
 */

import Input from 'bem:input';

/**
 * @exports
 * @class input
 * @bem
 */
Input.declMod({ modName : 'has-clear', modVal : true }, /** @lends input.prototype */{
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
            .setMod('focused')
            .setVal('', { source : 'clear' });
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
});

// Barrel-compatible export (this module is side-effect only)
export default function(x) { return x; };
