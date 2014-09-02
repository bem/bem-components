module.exports = function(bh) {

    bh.match('menu', function(ctx) {
        var menuMods = {
            theme : ctx.mod('theme'),
            disabled : ctx.mod('disabled')
        };

        ctx
            .js(true)
            .tParam('menuMods', menuMods)
            .mix({ elem : 'control' });

        var attrs = { role : 'menu' };
        ctx.mod('disabled') || (attrs.tabindex = 0);
        ctx.attrs(attrs);
    });

};
