module.exports = function(bh) {
    bh.match('menu', function(ctx) {
        ctx
            .attrs({ tabindex : 0, role : 'menu' })
            .js(true);
    });
    // TODO: `menu-item_theme` inherit
};
