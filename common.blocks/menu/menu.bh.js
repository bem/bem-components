module.exports = function(bh) {

    bh.match('menu', function(ctx) {
        ctx
            .js(true)
            .tParam('_menuTheme', ctx.mod('theme'))
            .mix({ elem : 'control' });

        var attrs = { role : 'menu' };
        ctx.mod('disabled') || (attrs.tabindex = 0);
        ctx.attrs(attrs);
    });

    bh.match('menu-item', function(ctx) {
        ctx.mod('theme', ctx.tParam('_menuTheme'));
    });

};
