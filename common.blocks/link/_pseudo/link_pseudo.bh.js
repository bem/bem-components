module.exports = function(bh) {
    bh.match('link_pseudo', function(ctx, json) {
        ctx.js(true);
        json.url || ctx.tag('span');
    });
};
