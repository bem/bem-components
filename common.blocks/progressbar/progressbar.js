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
                this._val = this.params.value;
            }
        }
    },

    /**
     * Sets bar's width
     * @param {Number} value
     */
    setVal : function(value) {
        this._setBarWidth(this._val = value);
    },

    /**
     * Get bar's value
     * @returns {Number}
     */
    getVal : function() {
        return this._val;
    },

    _setBarWidth : function(value) {
        this.elem('bar').css('width', value + '%');
    }

}, /** @lends progressbar */{
    live : true
}));

});
