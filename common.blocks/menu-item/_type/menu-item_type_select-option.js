modules.define('menu-item', function(provide, MenuItem) {

provide(MenuItem.decl({ modName : 'type', modVal : 'select-option' }, {

    onSetMod : {
        'checked' : function(_, modVal) {
            this.domElem.attr('aria-selected', !!modVal);
        }
    }

}));

});
