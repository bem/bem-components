module.exports = function(bh) {

    bh.match('menu', function(ctx) {
        ctx
            .attrs({ tabindex : 0, role : 'menu' })
            .js(true)
            .tParam('_menuTheme', ctx.mod('theme'));
    });

    bh.match('menu-item', function(ctx) {
        ctx.mod('theme', ctx.tParam('_menuTheme'));
    });

};
