/**
 * @module menu
 */

modules.define('menu', function(provide, Menu) {

var KEY_CODE_SPACE = 32,
    KEY_CODE_ENTER = 13;

/**
 * @exports
 * @class menu
 * @bem
 */
provide(Menu.decl({ modName : 'select' }, /** @lends menu.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._val = null;
                this._isValValid = false;
            }
        }
    },

    _extractVal : function() {
        return null;
    },

    _onKeyDown : function(e) {
        if(e.keyCode === KEY_CODE_ENTER || e.keyCode === KEY_CODE_SPACE) {
            e.preventDefault();
            this._onItemClick(this._hoveredItem);
        }
        this.__base.apply(this, arguments);
    },

    /**
     * Returns menu value
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
     * Sets menu value
     * @param {*} val
     * @returns {this}
     */
    setVal : function(val) {
        this._val = val;
        return this;
    }
}));

});
