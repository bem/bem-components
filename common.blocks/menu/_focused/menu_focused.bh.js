module.exports = function(bh) {
    bh.match('menu_focused', function(ctx) {
        var js = ctx.extend(ctx.js() || {}, { live : false });
        ctx.js(js);
    });
};
