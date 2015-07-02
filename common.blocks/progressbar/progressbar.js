/**
 * @module progressbar
 */

modules.define('progressbar', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class progressbar
 * @bem
 */
provide(BEMDOM.decl(this.name, /** @lends progressbar.prototype */{
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
        this.elem('bar').css('width', val + '%');
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
    live : true
}));

});
