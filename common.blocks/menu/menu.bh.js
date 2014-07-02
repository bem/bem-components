module.exports = function(bh) {

    bh.match('menu', function(ctx) {
        var menuMods = {
            theme : ctx.mod('theme'),
            disabled : ctx.mod('disabled')
        };

        ctx
            .js(true)
            .tParam('_menuMods', menuMods)
            .mix({ elem : 'control' });

        var attrs = { role : 'menu' };
        ctx.mod('disabled') || (attrs.tabindex = 0);
        ctx.attrs(attrs);
    });

    bh.match('menu-item', function(ctx) {
        var menuMods = ctx.tParam('_menuMods');

        menuMods && ctx.mods({
            theme : menuMods.theme,
            disabled : menuMods.disabled
        });
    });

};
