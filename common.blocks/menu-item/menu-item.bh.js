module.exports = function(bh) {
    bh.match('menu-item', function(ctx, json) {
        var menuMods = ctx.tParam('menuMods'),
            menuMode = menuMods && menuMods.mode,
            role = menuMode?
                        (menuMode === 'check'? 'menuitemcheckbox' : 'menuitemradio') :
                        'menuitem';

        menuMods && ctx.mods({
            theme : menuMods.theme,
            disabled : menuMods.disabled
        });

        ctx
            .js({ val : json.val })
            .attrs({
                role : role,
                id : ctx.generateId(),
                'aria-disabled' : ctx.mod('disabled'),
                'aria-checked' : menuMode && !!ctx.mod('checked')
            });
    });
};
