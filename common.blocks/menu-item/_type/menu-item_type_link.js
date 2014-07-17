/**
 * @module menu-item
 */

modules.define('menu-item', ['link'], function(provide, _, MenuItem) {

/**
 * @exports
 * @class menu-item
 * @bem
 */
provide(MenuItem.decl({ modName : 'type', modVal : 'link' }, /** @lends menu-item.prototype */{
    onSetMod : {
        'hovered' : {
            'true' : function() {
                this._getMenu().hasMod('focused') &&
                    this._getLink().setMod('focused');
            },

            '' : function() {
                var menu = this._getMenu();
                menu.hasMod('focused') && menu.domElem.focus(); // NOTE: keep DOM-based focus within our menu
            }
        },

        'disabled' : function(modName, modVal) {
            this.__base.apply(this, arguments);
            this._getLink().setMod(modName, modVal);
        }
    },

    _getMenu : function() {
        return this._menu || (this._menu = this.findBlockOutside('menu'));
    },

    _getLink : function() {
        return this._link || (this._link = this.findBlockInside('link'));
    },

    _onFocus : function() {
        this.setMod('hovered');
    }
}, /** @lends menu-item */{
    live : function() {
        this.liveBindTo('focusin', this.prototype._onFocus);
        return this.__base.apply(this, arguments);
    }
}));

});
