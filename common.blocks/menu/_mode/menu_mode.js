/**
 * @module menu
 */

modules.define('menu', ['keyboard__codes'], function(provide, keyCodes, Menu) {

/**
 * @exports
 * @class menu
 * @bem
 */
provide(Menu.decl({ modName : 'mode' }, /** @lends menu.prototype */{
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
        if(e.keyCode === keyCodes.ENTER || e.keyCode === keyCodes.SPACE) {
            this
                .unbindFromDoc('keydown', this._onKeyDown)
                .bindToDoc('keyup', this._onKeyUp);

            e.keyCode === keyCodes.SPACE && e.preventDefault();
            this._onItemClick(this._hoveredItem, { source : 'keyboard' });
        }
        this.__base.apply(this, arguments);
    },

    _onKeyUp : function() {
        this.unbindFromDoc('keyup', this._onKeyUp);
        // it could be unfocused while is key being pressed
        this.hasMod('focused') && this.bindToDoc('keydown', this._onKeyDown);
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

    /**
     * @abstract
     * @protected
     * @returns {*}
     */
    _getVal : function() {
        throw Error('_getVal is not implemented');
    },

    /**
     * Sets menu value
     * @param {*} val
     * @returns {menu} this
     */
    setVal : function(val) {
        if(this._setVal(val)) {
            this._val = val;
            this._isValValid = true;
            this.emit('change');
        }
        return this;
    },

    /**
     * @abstract
     * @protected
     * @param {*} val
     * @returns {Boolean} returns true if value was changed
     */
    _setVal : function() {
        throw Error('_setVal is not implemented');
    },

    _updateItemsCheckedMod : function(modVals) {
        var items = this.getItems();
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
