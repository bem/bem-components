/**
 * @module checkbox
 */

import bemDom from 'bem:i-bem-dom';
import Control from 'bem:control';

/**
 * @exports
 * @class checkbox
 * @augments control
 * @bem
 */
export default bemDom.declBlock('checkbox', Control, /** @lends checkbox.prototype */{
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
});
