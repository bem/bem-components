module.exports = function(bh) {
    bh.match('menu_focused', function(ctx) {
        var js = ctx.js() || {};
        ctx.extend(js, { live : false });
    });
};
