block('menu').elem('item')(
    def().match(function() { return this._menuMods; })(function() {
        var elemMods = this.elemMods;
        elemMods.theme = elemMods.theme || this._menuMods.theme;
        elemMods.disabled = elemMods.disabled || this._menuMods.disabled;
        return applyNext();
    }),
    js()(function() {
        return { val : this.ctx.val };
    }),
    attrs()(function(){
        var elemMods = this.elemMods,
            menuMode = this._menuMods && this._menuMods.mode,
            role = menuMode?
                        (menuMode === 'check'? 'menuitemcheckbox' : 'menuitemradio') :
                        'menuitem',
            attrs = {
                role : role,
                id : this.ctx.id || this.generateId(),
                'aria-disabled' : elemMods.disabled && 'true',
                'aria-checked' : menuMode && String(!!elemMods.checked)
            };

        return attrs;
    })
);
