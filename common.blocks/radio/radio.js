/**
 * @module radio
 */

import bemDom from 'bem:i-bem-dom';
import Control from 'bem:control';

/**
 * @exports
 * @class radio
 * @augments control
 * @bem
 */
export default bemDom.declBlock('radio', Control, /** @lends radio.prototype */{
    onSetMod : {
        'checked' : {
            'true' : function() {
                this._elem('control').domElem
                    .attr('checked', 'checked')
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
});
