block('menu').elem('item').elemMod('type', 'link').elemMod('disabled', true).match(function() {
    return !this._menuItemDisabled;
}).def()(function() {
    return applyNext({ _menuItemDisabled : true });
});

block('link').match(function() {
    return this._menuItemDisabled;
}).def()(function() {
    delete this._menuItemDisabled;
    this.mods.disabled = true;
    return applyNext();
});
