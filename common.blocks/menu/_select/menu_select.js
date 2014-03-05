/**
 * @module menu
 */

modules.define('menu', function(provide, Menu) {

/**
 * @exports
 * @class menu
 * @bem
 */
provide(Menu.decl({ modName : 'select' }, /** @lends menu.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._val = null;
                this._isValValid = false;
            }
        }
    },

    _extractVal : function() {
        return null;
    },

    /**
     * Gets value of menu according to selected items
     * @returns {*}
     */
    getVal : function() {
        if(!this._isValValid) {
            this._val = this._extractVal();
            this._isValValid = true;
        }
        return this._val;
    },

    /**
     * Sets value for menu
     * @param {*} val
     * @returns {this}
     */
    setVal : function(val) {
        this._val = val;
        return this;
    }
}));

});
