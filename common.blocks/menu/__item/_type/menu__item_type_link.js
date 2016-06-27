/**
 * @module menu__item
 */

modules.define('menu__item', ['link'], function(provide, Link, MenuItem) {

/**
 * @exports
 * @class menu__item
 * @bem
 */
provide(MenuItem.declMod({ modName : 'type', modVal : 'link' }, /** @lends menu__item.prototype */{
    onSetMod : {
        'hovered' : {
            'true' : function() {
                this._block().hasMod('focused') &&
                    this._getLink().setMod('focused');
            },

            '' : function() {
                var menu = this._block();
                menu.hasMod('focused') && menu.domElem.focus(); // NOTE: keep DOM-based focus within our menu
            }
        },

        'disabled' : function(modName, modVal) {
            this.__base.apply(this, arguments);
            this._getLink().setMod(modName, modVal);
        }
    },

    _getLink : function() {
        return this._link || (this._link = this.findChildBlock(Link));
    },

    _onFocus : function() {
        this.setMod('hovered');
    }
}, /** @lends menu__item */{
    lazyInit : true,
    onInit : function() {
        this._domEvents().on('focusin', this.prototype._onFocus);
        return this.__base.apply(this, arguments);
    }
}));

});
