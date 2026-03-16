/**
 * @module progressbar
 */

import bemDom from 'bem:i-bem-dom';

/**
 * @exports
 * @class progressbar
 * @bem
 */
export default bemDom.declBlock('progressbar', /** @lends progressbar.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._val = this.params.val;
            }
        }
    },

    /**
     * Sets bar's width
     * @param {Number} val
     * @returns {progressbar} this
     */
    setVal : function(val) {
        this.domElem.attr('aria-valuenow', (this._val = val) + '%');
        this._elem('bar').domElem.css('width', val + '%');
        return this;
    },

    /**
     * Get bar's val
     * @returns {Number}
     */
    getVal : function() {
        return this._val;
    }

}, /** @lends progressbar */{
    lazyInit : true
});
