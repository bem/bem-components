module.exports = function(bh) {
    bh.match('menu-item', function(ctx, json) {
        var menuMods = ctx.tParam('menuMods'),
            attrs = {};

        menuMods && ctx.mods({
            theme : menuMods.theme,
            disabled : menuMods.disabled
        });

        ctx.mod('disabled') && (attrs['aria-disabled'] = true);
        ctx.mod('checked') && (attrs['aria-checked'] = true);

        ctx
            .js({ val : json.val })
            .attrs(attrs);
    });
};
