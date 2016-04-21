block('menu-item')(
    def().match(function() { return this._menuMods; })(function() {
        var mods = this.mods;
        mods.theme = mods.theme || this._menuMods.theme;
        mods.disabled = mods.disabled || this._menuMods.disabled;
        return applyNext();
    }),
    js()(function() {
        return { val : this.ctx.val };
    }),
    attrs()(function(){
        var mods = this.mods,
            menuMode = this._menuMods && this._menuMods.mode,
            role = menuMode?
                        (menuMode === 'check'? 'menuitemcheckbox' : 'menuitemradio') :
                        'menuitem',
            attrs = {
                role : role,
                id : this.ctx.id || this.generateId(),
                'aria-disabled' : mods.disabled && 'true',
                'aria-checked' : menuMode && String(!!mods.checked)
            };

        return attrs;
    })
);
