modules.define('menu-item', function(provide, MenuItem) {

provide(MenuItem.decl({ modName : 'type', modVal : 'link' }, {
    onSetMod : {
        'hovered' : {
            'true' : function() {
                this._getMenu().hasMod('focused') && this.domElem.focus();
            },

            '' : function() {
                var menu = this._getMenu();
                menu.hasMod('focused') && menu.domElem.focus(); // NOTE: keep DOM-based focus within our menu
            }
        }
    },

    _getMenu : function() {
        return this._menu || (this._menu = this.findBlockOutside('menu'));
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
