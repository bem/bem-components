/**
 * @module modal
 */

import bemDom from 'bem:i-bem-dom';
import Popup from 'bem:popup';

/**
 * @exports
 * @class modal
 * @bem
 *
 * @bemmod visible Represents visible state
 */
export default bemDom.declBlock('modal', /** @lends modal.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._popup = this.findMixedBlock(Popup);
            },

            '' : function() {
                this.delMod('visible');
            }
        },

        'visible' : function(modName, modVal) {
            this._popup.setMod(modName, modVal);
        }
    },

    /**
     * Sets content
     * @param {String|jQuery} content
     * @returns {modal} this
     */
    setContent : function(content) {
        bemDom.update(this._elem('content').domElem, content);
        return this;
    }
}, /** @lends modal */{
    lazyInit : true
});
