modules.define('menu-item', ['link'], function(provide, _, MenuItem) {

provide(MenuItem.decl({ modName : 'type', modVal : 'link' }, {
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
}, {
    live : function() {
        this.liveBindTo('focusin', function() {
            this._onFocus();
        });

        return this.__base.apply(this, arguments);
    }
}));

});
