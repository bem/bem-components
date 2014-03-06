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
            this._val = this._getVal();
            this._isValValid = true;
        }
        return this._val;
    },

    _getVal : function() {
        return null;
    },

    /**
     * Sets menu value
     * @param {*} val
     * @returns {this}
     */
    setVal : function(val) {
        if(this._setVal(val)) {
            this._val = val;
            this._isValValid = true;
            this.emit('change');
        }
        return this;
    },

    _setVal : function() {
        return false;
    },

    _updateItemsCheckedMod : function(modVals) {
        var items = this._getItems();
        modVals.forEach(function(modVal, i) {
            items[i].setMod('checked', modVal);
        });
    },

    /**
     * Sets content
     * @override
     */
    setContent : function() {
        var res = this.__base.apply(this, arguments);
        this._isValValid = false;
        this.emit('change'); // NOTE: potentially unwanted event could be emitted
        return res;
    }
}));

});
