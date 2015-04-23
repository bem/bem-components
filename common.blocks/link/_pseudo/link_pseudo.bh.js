module.exports = function(bh) {
    bh.match('link_pseudo', function(ctx, json) {
        json.url || ctx.tag('span').attr('role', 'button');
    });
};
