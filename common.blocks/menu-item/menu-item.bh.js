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
                id : json.id || ctx.generateId(),
                'aria-disabled' : ctx.mod('disabled') && 'true',
                'aria-checked' : menuMode && String(!!ctx.mod('checked'))
            });
    });
};
